import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const subscribeSchema = z.object({
  email: z.string().email('Email invalido'),
  source: z.string().optional().default('unknown'),
})

async function submitToBrevo(email: string, source: string, apiKey: string, listId: string): Promise<void> {
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
  try {
    const body = await req.json()
    const { email, source } = subscribeSchema.parse(body)

    const apiKey = process.env.BREVO_API_KEY
    const listId = process.env.BREVO_LIST_ID

    if (apiKey && listId) {
      await submitToBrevo(email, source, apiKey, listId)
    } else {
      console.log(`[Newsletter] New subscriber: ${email} (source: ${source})`)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.errors[0].message }, { status: 400 })
    }
    console.error('Subscribe error:', err)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
