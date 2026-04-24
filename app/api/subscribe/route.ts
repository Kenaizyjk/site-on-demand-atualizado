import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createRateLimiter, getClientIp } from '@/lib/rate-limit'

/* ── Rate limiter: 5 subscribe requests per 60 s per IP ── */
const limiter = createRateLimiter({ windowSec: 60, maxRequests: 5 })

/* ── Strict email regex (RFC 5321 local + domain) ── */
const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

const subscribeSchema = z.object({
  email: z
    .string()
    .trim()
    .max(254, 'Email muito longo')
    .refine((v) => EMAIL_RE.test(v), { message: 'Email invalido' }),
  source: z
    .string()
    .trim()
    .max(64, 'Source muito longo')
    .optional()
    .default('unknown'),
  // Honeypot fields — must be empty for legitimate submissions
  website: z.string().max(512).optional().default(''),
  company: z.string().max(512).optional().default(''),
})

async function submitToBrevo(
  email: string,
  source: string,
  apiKey: string,
  listId: string,
): Promise<void> {
  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      email,
      listIds: [parseInt(listId)],
      attributes: { SOURCE: source, SIGNUP_DATE: new Date().toISOString() },
      updateEnabled: true,
    }),
  })

  if (!res.ok && res.status !== 204) {
    const error = await res.json().catch(() => ({}))
    // "Contact already exist" is not a real error
    if (error?.code !== 'duplicate_parameter') {
      console.error('Brevo error:', error)
    }
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  /* ── 1. Rate limiting ── */
  const ip = getClientIp(req)
  const rl = limiter.check(ip)

  if (!rl.success) {
    const retryAfter = Math.max(1, rl.resetAt - Math.floor(Date.now() / 1000))
    return NextResponse.json(
      { error: 'Muitas tentativas. Tente novamente em breve.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(retryAfter),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': String(rl.resetAt),
        },
      },
    )
  }

  /* ── 2. Content-Type validation ── */
  const contentType = req.headers.get('content-type') ?? ''
  if (!contentType.includes('application/json')) {
    return NextResponse.json(
      { error: 'Content-Type deve ser application/json' },
      { status: 415 },
    )
  }

  /* ── 3. Parse & validate body ── */
  try {
    let body: unknown
    try {
      body = await req.json()
    } catch {
      return NextResponse.json(
        { error: 'JSON invalido' },
        { status: 400 },
      )
    }

    const { email, source, website, company } = subscribeSchema.parse(body)

    // Honeypot: if any honeypot field is filled, silently fake success
    if (website || company) {
      return NextResponse.json(
        { success: true },
        {
          headers: {
            'X-RateLimit-Remaining': String(rl.remaining),
            'X-RateLimit-Reset': String(rl.resetAt),
          },
        },
      )
    }

    const apiKey = process.env.BREVO_API_KEY
    const listId = process.env.BREVO_LIST_ID

    if (apiKey && listId) {
      await submitToBrevo(email, source, apiKey, listId)
    } else {
      console.log(`[Newsletter] New subscriber: ${email} (source: ${source})`)
    }

    return NextResponse.json(
      { success: true },
      {
        headers: {
          'X-RateLimit-Remaining': String(rl.remaining),
          'X-RateLimit-Reset': String(rl.resetAt),
        },
      },
    )
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: err.errors[0].message },
        { status: 400 },
      )
    }
    console.error('Subscribe error:', err)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
