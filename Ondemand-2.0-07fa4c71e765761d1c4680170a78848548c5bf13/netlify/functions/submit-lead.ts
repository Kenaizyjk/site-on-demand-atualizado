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
const LeadSchema = z
  .object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100).optional(),
    email: z.string().email("Email inválido").max(255).optional(),
    phone: z.string().max(20).optional(),
    whatsapp: z.string().max(20).optional(),
    company: z.string().max(100).optional(),
    message: z.string().max(1000).optional(),
    service: z.string().max(100).optional(),
  })
  .refine((data) => data.email || data.whatsapp, {
    message: "Email or WhatsApp is required",
    path: ["email"],
  })

type LeadData = z.infer<typeof LeadSchema>

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
    const validatedData: LeadData = LeadSchema.parse(body)

    console.warn("[v0] Received lead:", validatedData)

    // Prepare lead data
    const leadData = {
      ...validatedData,
      source: "website",
      timestamp: new Date().toISOString(),
    }

    // Send to n8n webhook
    const n8nWebhook = process.env.N8N_WEBHOOK_URL
    if (!n8nWebhook) {
      console.warn("[v0] n8n webhook not configured - lead saved locally only")
    } else {
      const webhookResponse = await fetch(n8nWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      })

      if (!webhookResponse.ok) {
        const errorText = await webhookResponse.text()
        console.error("[v0] n8n webhook error:", errorText)
        // Continue even if webhook fails - we still want to return success to user
      }
    }

    const leadId = `LEAD-${Date.now()}`

    return new Response(
      JSON.stringify({
        success: true,
        message: "Lead received. We'll contact you soon!",
        leadId,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
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

    console.error("[v0] Lead submission error:", error)
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export default handler

export const config: Config = {
  path: "/api/submit-lead",
}
