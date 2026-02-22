import { NextRequest, NextResponse } from 'next/server'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const OPENAI_ORG_ID = process.env.OPENAI_ORG_ID

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

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
