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
    console.error('Application Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0D1117] to-[#000000] px-4">
      <div className="text-center space-y-8 max-w-md">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-white/[0.04] border border-white/[0.1] flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-4xl font-extralight uppercase tracking-[0.06em] text-white">
            Ops! Algo deu errado
          </h2>
          <p className="text-lg text-white/45">
            Encontramos um erro inesperado. Nossa equipe já foi notificada.
          </p>
        </div>

        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 text-left backdrop-blur-md">
            <p className="text-xs font-mono text-white/40 mb-2">Development Info:</p>
            <p className="text-xs font-mono text-white/30 break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs font-mono text-white/20 mt-2">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => reset()}
            className="bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.1] text-white font-bold px-8 py-6 text-lg transition-all"
          >
            Tentar Novamente
          </Button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/[0.06] px-8 py-6 text-lg font-semibold text-white/60 hover:bg-white/[0.04] transition-all"
          >
            Voltar ao Inicio
          </Link>
        </div>

        {/* Support Link */}
        <p className="text-sm text-white/30">
          Precisa de ajuda?{' '}
          <Link
            href="/#contato"
            className="text-white/50 hover:text-white/70 hover:underline font-semibold transition-colors"
          >
            Entre em contato
          </Link>
        </p>
      </div>
    </div>
  )
}
