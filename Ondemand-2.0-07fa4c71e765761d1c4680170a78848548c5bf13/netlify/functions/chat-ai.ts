import { Config } from "@netlify/functions"
import { z } from "zod"
import { buildChatSystemPrompt } from "../../lib/chat/system-prompt"

// Rate limiting (simple in-memory store)
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 10 // 10 requests
const RATE_LIMIT_WINDOW = 60 * 1000 // per minute

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimit.get(ip)

  if (!record || now > record.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 }
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 }
  }

  record.count++
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count }
}

// Zod validation schema
const ChatRequestSchema = z.object({
  message: z.string().min(1, "Message cannot be empty").max(2000),
  context: z.string().max(500).optional(),
  sessionId: z.string().min(1).max(120).optional(),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(2000),
      }),
    )
    .max(500)
    .optional(),
})

type ChatRequest = z.infer<typeof ChatRequestSchema>

// OpenAI API types
interface OpenAIMessage {
  role: "system" | "user" | "assistant"
  content: string
}

interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string
    }
  }>
}

function compactAssistantReply(text: string): string {
  const normalized = (text || "")
    .replace(/\r/g, "")
    .replace(/\n{2,}/g, "\n")
    .replace(/[ \t]+/g, " ")
    .trim()

  if (!normalized) {
    return "Certo. Me conta seu principal objetivo agora?"
  }

  const sentences = normalized.split(/(?<=[.!?])\s+/).filter(Boolean)

  let candidate = sentences[0] || normalized
  if (candidate.length < 90 && sentences.length > 1) {
    candidate = `${candidate}\n${sentences[1]}`
  }

  const lines = candidate
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, 2)

  let compact = lines.join("\n")
  if (compact.length > 140) {
    compact = `${compact.slice(0, 137).trimEnd()}...`
  }

  return compact
}

function extractLeadSignals(message: string): {
  hasSegment: boolean
  hasGoal: boolean
  hasChannel: boolean
  hasBudget: boolean
  hasUrgency: boolean
  wantsPrice: boolean
  wantsHuman: boolean
  wantsSchedule: boolean
} {
  const text = message.toLowerCase()

  return {
    hasSegment: /(clinica|odont|estet|restaurante|e-?commerce|imobiliaria|advocacia|empresa|negocio)/.test(text),
    hasGoal: /(lead|agend|venda|fatur|cliente|consulta)/.test(text),
    hasChannel: /(meta|google|instagram|facebook|site|whatsapp|organico|trafego)/.test(text),
    hasBudget: /(orcamento|orçamento|verba|invest|r\$\s?\d+|\d+\s?(mil|k))/i.test(text),
    hasUrgency: /(urgente|hoje|agora|essa semana|este mes|esse mes|prazo|rapido)/.test(text),
    wantsPrice: /(preco|preço|valor|quanto custa|investimento)/.test(text),
    wantsHuman: /(humano|atendente|especialista|pessoa|consultor)/.test(text),
    wantsSchedule: /(agendar|marcar|reuniao|reunião|call|diagnostico|diagnóstico)/.test(text),
  }
}

function buildMockReply(message: string): string {
  const msg = message.trim()
  if (/^\s*(ola|oi|bom dia|boa tarde|boa noite)\b/i.test(msg)) {
    return "Oi! Sou a assistente virtual da On Demand Digital. Qual e o seu segmento hoje?"
  }

  const s = extractLeadSignals(msg)

  if (s.wantsHuman || s.wantsSchedule) {
    return "Perfeito, te direciono no WhatsApp agora. Antes, seu foco hoje e mais leads, agendamentos ou vendas?"
  }

  if (s.wantsPrice && !s.hasSegment) {
    return "Consigo estimar, mas o valor depende do escopo. Qual e o seu segmento?"
  }

  if (s.wantsPrice && !s.hasBudget) {
    return "Boa pergunta. O investimento varia conforme objetivo e canal. Voce ja tem uma faixa de verba mensal?"
  }

  if (!s.hasGoal) {
    return "Entendi. Qual resultado principal voce quer nos proximos 90 dias?"
  }

  if (!s.hasChannel) {
    return "Perfeito. Qual canal hoje traz mais retorno: Meta Ads, Google, organico ou WhatsApp?"
  }

  if (!s.hasBudget) {
    return "Com essa meta, falta so a faixa de investimento mensal. Qual e a sua hoje?"
  }

  if (!s.hasUrgency) {
    return "Ja da para estruturar um plano inicial. Em qual prazo voce quer comecar?"
  }

  return "Perfeito, seu cenario ja esta claro. Quer que eu te envie o proximo passo no WhatsApp?"
}

const handler = async (req: Request) => {
  // Only allow POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Rate limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown"
  const rateLimitCheck = checkRateLimit(ip)
  if (!rateLimitCheck.allowed) {
    return new Response(
      JSON.stringify({ error: "Too many requests. Please try again later." }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": "60",
        },
      },
    )
  }

  try {
    // Parse and validate request body
    const body = await req.json()
    const validatedData: ChatRequest = ChatRequestSchema.parse(body)

    // Check API key
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      console.error("[v0] OPENAI_API_KEY not configured")
      return new Response(JSON.stringify({ error: "API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    const systemPrompt = buildChatSystemPrompt(validatedData.context)

    const historyMessages: OpenAIMessage[] = (validatedData.history || []).map((item) => ({
      role: item.role,
      content: item.content,
    }))

    const messages: OpenAIMessage[] = [
      { role: "system", content: systemPrompt },
      ...historyMessages,
      { role: "user", content: validatedData.message },
    ]

    // Mock mode for local testing: if client sets header `x-mock-ai: 1`,
    // return a deterministic reply without calling OpenAI.
    if ((req.headers.get("x-mock-ai") || "") === "1") {
      const userMsg = validatedData.message || ""
      const aiMessage = compactAssistantReply(buildMockReply(userMsg))

      return new Response(JSON.stringify({ message: aiMessage }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
        temperature: 0.2,
        max_tokens: 80,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] OpenAI error:", errorText)
      return new Response(JSON.stringify({ error: "Failed to get response from AI" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    const data = (await response.json()) as OpenAIResponse
    const aiMessage = compactAssistantReply(data.choices[0].message.content)

    return new Response(JSON.stringify({ message: aiMessage }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          error: "Validation failed",
          details: error.errors.map((e) => ({ field: e.path.join("."), message: e.message })),
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    console.error("[v0] Chat function error:", error)
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export default handler

export const config: Config = {
  path: "/api/chat-ai",
}
