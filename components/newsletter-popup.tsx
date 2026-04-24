"use client"

import { useState, useEffect, useCallback, useRef } from 'react'

/* ─────────────────────────────────────────────
   Constants
───────────────────────────────────────────── */
const SESSION_KEY = 'newsletter-popup-shown'
const SCROLL_THRESHOLD = 0.60   // 60 % da página
const TIMER_DELAY_MS  = 8000    // 8 s de fallback

type Status = 'idle' | 'loading' | 'success' | 'error'

/* ─────────────────────────────────────────────
   Email validation
───────────────────────────────────────────── */
function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

/* ─────────────────────────────────────────────
   Icons (inline SVG – sem dependência extra)
───────────────────────────────────────────── */
function IconClose() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function IconSparkles() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function IconSpinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export default function NewsletterPopup() {
  const [open, setOpen]       = useState(false)
  const [visible, setVisible] = useState(false)  // controla animação de entrada
  const [email, setEmail]     = useState('')
  const [status, setStatus]   = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [fieldError, setFieldError] = useState('')
  const [honeypot, setHoneypot] = useState('')

  const inputRef  = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  /* ── Trigger: scroll 60 % OU 8 s após load ── */
  useEffect(() => {
    try { if (sessionStorage.getItem(SESSION_KEY)) return } catch { return }

    function trigger() {
      try { if (sessionStorage.getItem(SESSION_KEY)) return } catch { /* Safari private mode */ }
      try { sessionStorage.setItem(SESSION_KEY, '1') } catch { /* Safari private mode */ }
      setOpen(true)
      // pequeno delay para o DOM montar antes da animação
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true))
      })
    }

    function onScroll() {
      const scrollable = document.body.scrollHeight - window.innerHeight
      if (scrollable > 0 && window.scrollY / scrollable >= SCROLL_THRESHOLD) {
        window.removeEventListener('scroll', onScroll, true)
        clearTimeout(timerId)
        trigger()
      }
    }

    const timerId = setTimeout(() => {
      window.removeEventListener('scroll', onScroll, true)
      trigger()
    }, TIMER_DELAY_MS)

    window.addEventListener('scroll', onScroll, { passive: true, capture: true })

    return () => {
      clearTimeout(timerId)
      window.removeEventListener('scroll', onScroll, true)
    }
  }, [])

  /* ── Focus trap dentro do modal ── */
  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') handleClose()

      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, input, a[href], [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last  = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Fechar ── */
  const handleClose = useCallback(() => {
    setVisible(false)
    // aguarda saída da animação antes de desmontar
    setTimeout(() => setOpen(false), 300)
  }, [])

  /* ── Submit ── */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFieldError('')

    // Honeypot: if filled, silently fake success (bot detected)
    if (honeypot) {
      setStatus('success')
      setEmail('')
      return
    }

    if (!isValidEmail(email)) {
      setFieldError('Digite um e-mail válido.')
      inputRef.current?.focus()
      return
    }

    if (status === 'loading') return
    setStatus('loading')

    try {
      const res  = await fetch('/api/subscribe', {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body   : JSON.stringify({ email, source: 'popup' }),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error ?? 'Algo deu errado. Tente novamente.')
      }
    } catch {
      setStatus('error')
      setMessage('Erro de conexão. Verifique sua internet e tente novamente.')
    }
  }

  if (!open) return null

  /* ── Estilos de transição ── */
  const backdropClass = [
    'fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6 bg-black/40 backdrop-blur-sm',
    'transition-opacity duration-300',
    visible ? 'opacity-100' : 'opacity-0',
  ].join(' ')

  const modalClass = [
    'relative w-full max-w-sm rounded-2xl overflow-hidden',
    // glassmorphism
    'bg-zinc-900/95 backdrop-blur-xl',
    'border border-zinc-700/50',
    // sombra dramática + glow sutil
    'shadow-2xl',
    // transição de entrada
    'transition-all duration-300 ease-out',
    visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2',
  ].join(' ')

  return (
    <>
      {/* Estilos inline para o glow — evita dependência de plugin Tailwind */}
      <style>{`
        .popup-glow {
          box-shadow:
            0 25px 50px -12px rgba(0,0,0,0.9),
            0 0 0 1px rgba(255,255,255,0.08),
            0 0 40px -8px rgba(255,255,255,0.06),
            0 0 80px -20px rgba(255,255,255,0.04);
        }
        @keyframes popup-check-in {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        .popup-check-in { animation: popup-check-in 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards; }
      `}</style>

      {/* Backdrop */}
      <div
        className={backdropClass}
        onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-full max-w-sm ${modalClass} popup-glow`}
      >
        {/* ── Botão fechar ── */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:bg-zinc-700/60 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
          aria-label="Fechar popup"
        >
          <IconClose />
        </button>

        {/* ── Header com gradiente ── */}
        <div
          className="px-6 pt-6 pb-5"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {/* Ícone decorativo */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04))',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <span className="text-white/50">
                <IconSparkles />
              </span>
            </div>
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Newsletter Semanal
            </span>
          </div>

          {/* Titulo */}
          <h2
            id="popup-title"
            className="text-lg font-bold leading-tight text-zinc-100 mb-1.5"
            style={{ fontFamily: 'var(--font-display, inherit)' }}
          >
            Marketing digital que gera resultado de verdade
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            A cada duas semanas: estrategias de trafego pago, SEO local e automacao
            que clientes reais colocaram em pratica.
          </p>
        </div>

        {/* ── Corpo ── */}
        <div className="px-6 py-5">
          {status === 'success' ? (
            /* Estado de sucesso */
            <div className="flex flex-col items-center text-center py-2">
              <div
                className="popup-check-in w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04))',
                  border: '1.5px solid rgba(255,255,255,0.1)',
                }}
              >
                <span className="text-white/50">
                  <IconCheck />
                </span>
              </div>
              <p className="font-semibold text-zinc-100 mb-1">Você está dentro!</p>
              <p className="text-sm text-zinc-400">
                Proximo envio chega em breve. Fique de olho na caixa de entrada.
              </p>
              <button
                onClick={handleClose}
                className="mt-5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-2"
              >
                Fechar
              </button>
            </div>
          ) : (
            /* Formulario */
            <>
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot anti-spam — invisible to real users */}
                <div
                  className="absolute -left-[9999px] opacity-0 pointer-events-none"
                  aria-hidden="true"
                >
                  <label htmlFor="popup-website">Website</label>
                  <input
                    id="popup-website"
                    name="website"
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Input email */}
                <div className="relative mb-3">
                  <span
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
                    aria-hidden="true"
                  >
                    <IconMail />
                  </span>
                  <input
                    ref={inputRef}
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (fieldError) setFieldError('')
                      if (status === 'error') setStatus('idle')
                    }}
                    placeholder="seu@email.com.br"
                    autoComplete="email"
                    disabled={status === 'loading'}
                    aria-describedby={fieldError ? 'popup-field-error' : undefined}
                    aria-invalid={!!fieldError}
                    className={[
                      'w-full pl-10 pr-4 py-3 rounded-xl text-sm text-zinc-100',
                      'bg-zinc-800/80 border transition-all duration-200',
                      'placeholder-zinc-600 disabled:opacity-50',
                      'focus:outline-none focus:ring-2',
                      fieldError
                        ? 'border-red-500/60 focus:ring-red-500/30 focus:border-red-500/60'
                        : 'border-zinc-700/60 hover:border-zinc-600 focus:border-white/20 focus:ring-white/10',
                    ].join(' ')}
                  />
                </div>

                {/* Erro de validacao do campo */}
                {fieldError && (
                  <p id="popup-field-error" role="alert" className="text-red-400 text-xs mb-3 pl-1">
                    {fieldError}
                  </p>
                )}

                {/* Erro de API */}
                {status === 'error' && !fieldError && (
                  <p role="alert" className="text-red-400 text-xs mb-3 pl-1">
                    {message}
                  </p>
                )}

                {/* CTA */}
                <button
                  type="submit"
                  disabled={status === 'loading' || !email}
                  className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 active:scale-[0.98]"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    boxShadow: 'none',
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    {status === 'loading' ? (
                      <>
                        <IconSpinner />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      'Quero receber as dicas'
                    )}
                  </span>
                </button>
              </form>

              {/* Footer sutil */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-xs text-zinc-600">
                  Sem spam. Cancele quando quiser.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors underline-offset-2 hover:underline"
                >
                  Não, obrigado
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
