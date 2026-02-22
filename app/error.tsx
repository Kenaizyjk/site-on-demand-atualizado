'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error para serviço de monitoramento (Sentry, LogRocket, etc)
    console.error('Application Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0D1117] to-[#000000] px-4">
      <div className="text-center space-y-8 max-w-md">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-[#ff006e]/10 border-2 border-[#ff006e] flex items-center justify-center">
            <svg
              className="w-12 h-12 text-[#ff006e]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff006e] to-[#00d9ff]">
            Ops! Algo deu errado
          </h2>
          <p className="text-lg text-[#E6E6FA]/80">
            Encontramos um erro inesperado. Nossa equipe já foi notificada.
          </p>
        </div>

        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-4 text-left">
            <p className="text-xs font-mono text-[#ff006e] mb-2">Development Info:</p>
            <p className="text-xs font-mono text-[#E6E6FA]/60 break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs font-mono text-[#E6E6FA]/40 mt-2">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => reset()}
            className="bg-gradient-to-r from-[#ff006e] to-[#ba1cbe] hover:opacity-90 text-white font-bold px-8 py-6 text-lg"
          >
            Tentar Novamente
          </Button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-[#30363D] px-8 py-6 text-lg font-semibold text-[#E6E6FA] hover:bg-[#161B22]"
          >
            Voltar ao Inicio
          </Link>
        </div>

        {/* Support Link */}
        <p className="text-sm text-[#E6E6FA]/60">
          Precisa de ajuda?{' '}
          <Link
            href="/#contato"
            className="text-[#00d9ff] hover:underline font-semibold"
          >
            Entre em contato
          </Link>
        </p>
      </div>
    </div>
  )
}
