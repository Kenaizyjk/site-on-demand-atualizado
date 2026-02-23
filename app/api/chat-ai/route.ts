import { NextRequest, NextResponse } from 'next/server'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const OPENAI_ORG_ID = process.env.OPENAI_ORG_ID

type ChatRole = 'user' | 'assistant'
type ChatMessage = { role: ChatRole; content: string }

const MEMORY_TTL_MS = 1000 * 60 * 60 * 6 // 6 hours
const MEMORY_MAX_TURNS = 20

const memoryStore = new Map<string, { updatedAt: number; messages: ChatMessage[] }>()

function getSessionId(request: NextRequest, body: { sessionId?: string }) {
  return body.sessionId?.trim() || request.headers.get('x-chat-session-id') || 'anonymous'
}

function readMemory(sessionId: string): ChatMessage[] {
  const entry = memoryStore.get(sessionId)
  if (!entry) return []
  if (Date.now() - entry.updatedAt > MEMORY_TTL_MS) {
    memoryStore.delete(sessionId)
    return []
  }
  return entry.messages
}

function writeMemory(sessionId: string, messages: ChatMessage[]) {
  const trimmed = messages.slice(-MEMORY_MAX_TURNS * 2)
  memoryStore.set(sessionId, { updatedAt: Date.now(), messages: trimmed })
}

function appendMemory(sessionId: string, role: ChatRole, content: string) {
  const existing = readMemory(sessionId)
  writeMemory(sessionId, [...existing, { role, content }])
}

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId: bodySessionId } = await request.json()
    const sessionId = getSessionId(request, { sessionId: bodySessionId })

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Verificar se a chave de API está configurada
    if (!OPENAI_API_KEY) {
      console.warn('⚠️ OPENAI_API_KEY não configurada. Usando resposta de exemplo.')
      return NextResponse.json({
        success: true,
        message: 'Chat API endpoint operacional. Configure OPENAI_API_KEY para respostas de IA reais.',
        isPlaceholder: true,
        timestamp: new Date().toISOString(),
      })
    }

    const memory = readMemory(sessionId)

    // Fazer requisição à API OpenAI
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        ...(OPENAI_ORG_ID ? { 'OpenAI-Organization': OPENAI_ORG_ID } : {}),
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Você é um assistente de marketing digital da On Demand Digital. Responda em português de forma concisa e profissional sobre serviços de marketing, automação e IA.',
          },
          ...memory,
          {
            role: 'user',
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!openaiResponse.ok) {
      const error = await openaiResponse.json()
      console.error('OpenAI API Error:', error)
      return NextResponse.json(
        { error: 'Erro ao gerar resposta de IA', details: error },
        { status: openaiResponse.status }
      )
    }

    const data = await openaiResponse.json()
    const assistantMessage = data.choices[0]?.message?.content || 'Desculpe, não consegui gerar uma resposta.'

    appendMemory(sessionId, 'user', message)
    appendMemory(sessionId, 'assistant', assistantMessage)

    return NextResponse.json(
      {
        success: true,
        message: assistantMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
