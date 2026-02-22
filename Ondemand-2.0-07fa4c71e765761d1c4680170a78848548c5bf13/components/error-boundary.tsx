'use client'

import React from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: React.ErrorInfo | null
}

/**
 * Error Boundary Component
 *
 * Captura erros em qualquer componente filho e exibe UI de fallback
 * Evita que o app inteiro crashe por causa de um erro em um componente
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to error tracking service (Sentry, LogRocket, etc)
    this.setState({
      error,
      errorInfo,
    })

    // In production, send to error tracking
    if (process.env.NODE_ENV === 'production') {
      // TODO: Integrate with error tracking service
      // Example: Sentry.captureException(error, { extra: errorInfo })
    } else {
      console.error('Error Boundary caught:', error, errorInfo)
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-[#0D1117] to-[#000000] flex items-center justify-center px-4">
          <div className="max-w-lg w-full space-y-8 text-center">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-[#ff006e]/10 border-2 border-[#ff006e] flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-[#ff006e]" />
              </div>
            </div>

            {/* Title */}
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff006e] to-[#00d9ff]">
                Ops! Algo deu errado
              </h1>
              <p className="text-lg text-[#E6E6FA]/80">
                Encontramos um erro inesperado. Você pode tentar novamente ou voltar à página inicial.
              </p>
            </div>

            {/* Error Details (Development only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-4 text-left">
                <p className="text-xs font-mono text-[#ff006e] mb-2 font-semibold">
                  Development Info:
                </p>
                <p className="text-xs font-mono text-[#E6E6FA]/80 break-all whitespace-pre-wrap">
                  {this.state.error.message}
                </p>
                {this.state.errorInfo && (
                  <details className="mt-3">
                    <summary className="text-xs font-mono text-[#00d9ff] cursor-pointer hover:underline">
                      Stack Trace
                    </summary>
                    <pre className="text-xs font-mono text-[#E6E6FA]/60 mt-2 overflow-auto max-h-40">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ff006e] to-[#ba1cbe] text-white font-bold rounded-lg hover:opacity-90 transition"
                aria-label="Tentar novamente"
              >
                <RefreshCcw className="w-5 h-5" />
                Tentar Novamente
              </button>

              <Link
                href="/"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#30363D] text-[#E6E6FA] font-semibold rounded-lg hover:bg-[#161B22] transition"
                aria-label="Voltar para a página inicial"
              >
                <Home className="w-5 h-5" />
                Página Inicial
              </Link>
            </div>

            {/* Support Link */}
            <p className="text-sm text-[#E6E6FA]/60">
              Problema persistindo?{' '}
              <Link
                href="/#contato"
                className="text-[#00d9ff] hover:underline font-semibold"
              >
                Entre em contato com o suporte
              </Link>
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
