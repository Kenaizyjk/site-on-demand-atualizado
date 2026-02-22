import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_LIST_ID = process.env.BREVO_LIST_ID || '2' // Lista padrão em produção

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName } = await request.json()

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Verificar se a chave de API está configurada
    if (!BREVO_API_KEY) {
      console.warn('⚠️ BREVO_API_KEY não configurada. Usando armazenamento local de leads.')
      // Em desenvolvimento, armazena localmente
      console.log(`📧 Novo lead capturado: ${email} (${firstName || 'sem nome'})`)
      return NextResponse.json(
        {
          success: true,
          message: 'Lead capturado com sucesso',
          email,
          isPlaceholder: true,
          timestamp: new Date().toISOString(),
        },
        { status: 200 }
      )
    }

    // Integração real com Brevo API
    // https://developers.brevo.com/reference/createcontact
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: firstName || 'Lead',
          LASTNAME: lastName || 'Anônimo',
          SOURCE: 'Site On Demand',
        },
        listIds: [parseInt(BREVO_LIST_ID)],
        updateEnabled: true, // Atualiza se já existir
      }),
    })

    // Tratamento de erros específicos do Brevo
    if (!brevoResponse.ok) {
      const error = await brevoResponse.json().catch(() => ({}))
      
      // Código 400 com "Email already exists" é considerado sucesso
      if (brevoResponse.status === 400 && error.message?.includes('already exists')) {
        console.log(`📧 Email já cadastrado: ${email}`)
        return NextResponse.json(
          {
            success: true,
            message: 'Email já está inscrito',
            email,
            timestamp: new Date().toISOString(),
          },
          { status: 200 }
        )
      }

      console.error('Brevo API Error:', error)
      return NextResponse.json(
        { error: 'Erro ao adicionar email à lista', details: error },
        { status: brevoResponse.status }
      )
    }

    console.log(`✅ Lead adicionado ao Brevo: ${email}`)

    return NextResponse.json(
      {
        success: true,
        message: 'Subscripted successfully',
        email,
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscribe API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
