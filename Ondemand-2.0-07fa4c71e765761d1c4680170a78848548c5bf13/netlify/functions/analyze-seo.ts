import { Config } from "@netlify/functions"
import { z } from "zod"

// Rate limiting (simple in-memory store)
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5 // 5 requests
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
const SEOAnalysisRequestSchema = z
  .object({
    url: z.string().url("URL inválida").optional(),
    content: z.string().max(10000).optional(),
  })
  .refine((data) => data.url || data.content, {
    message: "URL or content is required",
  })

type SEOAnalysisRequest = z.infer<typeof SEOAnalysisRequestSchema>

// Gemini API types
interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string
      }>
    }
  }>
}

interface SEOAnalysisResult {
  seoScore: number
  strengths: string[]
  weaknesses: string[]
  recommendations: string[]
  estimatedTrafficBoost: string
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
    const validatedData: SEOAnalysisRequest = SEOAnalysisRequestSchema.parse(body)

    // Check API key
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      console.error("GEMINI_API_KEY not configured")
      return new Response(JSON.stringify({ error: "API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    const analysisPrompt = `Analise o seguinte conteúdo/URL de um site e forneça um score de SEO (0-100) com recomendações específicas.

${validatedData.content ? `Conteúdo: ${validatedData.content}` : `URL: ${validatedData.url}`}

Forneça APENAS um JSON válido no seguinte formato (sem markdown, sem explicações adicionais):
{
  "seoScore": número entre 0-100,
  "strengths": [lista de 3-5 pontos fortes],
  "weaknesses": [lista de 3-5 pontos fracos],
  "recommendations": [lista de 3-5 recomendações prioritárias],
  "estimatedTrafficBoost": "percentual estimado como string (ex: '25-40%')"
}`

    // Call Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: analysisPrompt }],
            },
          ],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 2048,
          },
        }),
      },
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Gemini API error:", errorText)
      return new Response(JSON.stringify({ error: "Failed to analyze content" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    const data = (await response.json()) as GeminiResponse

    // Extract text from correct path
    const analysisText = data.candidates[0].content.parts[0].text

    // Try to parse JSON from response
    const jsonMatch = analysisText.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      console.error("Failed to extract JSON from Gemini response:", analysisText)
      return new Response(
        JSON.stringify({
          error: "Failed to parse AI response",
          raw: analysisText,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    const analysis: SEOAnalysisResult = JSON.parse(jsonMatch[0])

    // Validate the analysis result
    if (
      typeof analysis.seoScore !== "number" ||
      !Array.isArray(analysis.strengths) ||
      !Array.isArray(analysis.weaknesses) ||
      !Array.isArray(analysis.recommendations)
    ) {
      console.error("Invalid analysis structure:", analysis)
      return new Response(
        JSON.stringify({
          error: "Invalid AI response structure",
          raw: analysisText,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    return new Response(JSON.stringify(analysis), {
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

    console.error("SEO analysis error:", error)
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export default handler

export const config: Config = {
  path: "/api/analyze-seo",
}
