import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  try {
    // URL.searchParams is synchronous Web API — not the async Next.js page prop
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title') ?? 'On Demand Digital'
    const type = searchParams.get('type') ?? 'default'

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px',
            background: '#09090b',
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              color: '#71717a',
              fontSize: 18,
              marginBottom: 24,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            On Demand Digital · Marketing Digital BH
          </div>
          <div
            style={{
              color: '#f8fafc',
              fontSize: type === 'blog' ? 52 : 64,
              fontWeight: 900,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: '#7c93b0',
              fontSize: 24,
              marginTop: 32,
            }}
          >
            ondemanddigital.com.br
          </div>
          {/* Accent bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 4,
              background: 'linear-gradient(90deg, rgba(124,147,176,0.6), rgba(255,255,255,0.2))',
            }}
          />
        </div>
      ),
      { width: 1200, height: 630 }
    )
  } catch (error) {
    console.error('[og/route] Failed to generate OG image:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}
