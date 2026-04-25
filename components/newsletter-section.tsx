"use client"

import { useState, useId, useEffect, useRef, useCallback } from "react"

/* ── Types & constants ── */

type SubmitStatus = "idle" | "loading" | "success" | "error"
interface Props {
  source?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const WHATSAPP_ERR = "Algo deu errado. Tente pelo WhatsApp: (31) 99696-6686"

const BENEFITS = [
  {
    icon: (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="h-3.5 w-3.5"
        aria-hidden="true"
      >
        <path
          d="M14 4L6 12L2 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Sem spam",
  },
  {
    icon: (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="h-3.5 w-3.5"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="3"
          width="12"
          height="10"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M2 6h12"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M5 9h2"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Semanal",
  },
  {
    icon: (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        className="h-3.5 w-3.5"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M6 8l1.5 1.5L10 6.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Cancelamento fácil",
  },
] as const

/* ── Hooks ── */

function useInView(ref: React.RefObject<Element | null>, threshold = 0.15) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold])

  return inView
}

function useForm(source: string) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const [message, setMessage] = useState("")
  const [err, setErr] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const id = useId()

  const validate = useCallback((v: string) => {
    if (!v.trim()) {
      setErr("Informe seu email para continuar.")
      return false
    }
    if (!EMAIL_RE.test(v)) {
      setErr("Email inválido. Verifique e tente novamente.")
      return false
    }
    setErr("")
    return true
  }, [])

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
    if (err) setErr("")
    if (status === "error") setStatus("idle")
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Honeypot: if filled, silently fake success (bot detected)
    if (honeypot) {
      setStatus("success")
      setEmail("")
      return
    }
    if (status === "loading" || !validate(email)) return
    setStatus("loading")
    setMessage("")
    try {
      const r = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source }),
      })
      const d = await r.json()
      if (d.success) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(d.error ?? WHATSAPP_ERR)
      }
    } catch {
      setStatus("error")
      setMessage(WHATSAPP_ERR)
    }
  }

  return { email, status, message, err, id, honeypot, setHoneypot, validate, onChange, onSubmit }
}

/* ── Component ── */

export default function NewsletterSection({ source = "home" }: Props) {
  const form = useForm(source)
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef)

  return (
    <section
      ref={sectionRef}
      id="newsletter"
      aria-labelledby="nl-heading"
      className="relative py-16 sm:py-16"
    >
      <style>{`
        /* ── Newsletter card glass ── */
        .od-nl-glass {
          position: relative;
          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.03) 0%,
              rgba(255, 255, 255, 0.01) 50%,
              rgba(255, 255, 255, 0.025) 100%
            );
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          backdrop-filter: blur(24px) saturate(150%);
          -webkit-backdrop-filter: blur(24px) saturate(150%);
          box-shadow:
            0 16px 48px -12px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            inset 0 -1px 0 rgba(255, 255, 255, 0.02);
          overflow: hidden;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .od-nl-glass:hover {
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow:
            0 16px 48px -12px rgba(0, 0, 0, 0.5),
            0 0 40px -10px rgba(255, 255, 255, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 0 -1px 0 rgba(255, 255, 255, 0.02);
        }

        /* Noise texture inside card */
        .od-nl-glass::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px 200px;
          opacity: 0.025;
          pointer-events: none;
          border-radius: 20px;
          z-index: 0;
        }

        /* Ambient glow — very subtle top-center */
        .od-nl-glass::after {
          content: "";
          position: absolute;
          top: -40%;
          left: 50%;
          transform: translateX(-50%);
          width: 70%;
          height: 60%;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.03) 0%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
        }

        /* ── Scroll reveal animation ── */
        .od-nl-entrance {
          opacity: 0;
          transform: translate3d(0, 28px, 0) scale(0.98);
          transition:
            opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .od-nl-entrance[data-visible="true"] {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }

        /* ── Stagger children inside card ── */
        .od-nl-stagger > * {
          opacity: 0;
          transform: translate3d(0, 12px, 0);
          transition:
            opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .od-nl-stagger[data-visible="true"] > *:nth-child(1) { opacity: 1; transform: none; transition-delay: 0.1s; }
        .od-nl-stagger[data-visible="true"] > *:nth-child(2) { opacity: 1; transform: none; transition-delay: 0.2s; }
        .od-nl-stagger[data-visible="true"] > *:nth-child(3) { opacity: 1; transform: none; transition-delay: 0.3s; }
        .od-nl-stagger[data-visible="true"] > *:nth-child(4) { opacity: 1; transform: none; transition-delay: 0.4s; }
        .od-nl-stagger[data-visible="true"] > *:nth-child(5) { opacity: 1; transform: none; transition-delay: 0.5s; }
        .od-nl-stagger[data-visible="true"] > *:nth-child(6) { opacity: 1; transform: none; transition-delay: 0.6s; }
        .od-nl-stagger[data-visible="true"] > *:nth-child(7) { opacity: 1; transform: none; transition-delay: 0.7s; }

        /* ── Input glass redesign ── */
        .od-nl-input-v2 {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          color: #e2e8f0;
          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }
        .od-nl-input-v2::placeholder {
          color: rgba(255, 255, 255, 0.25);
        }
        .od-nl-input-v2:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.03);
        }
        .od-nl-input-v2:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ── Button glass outline ── */
        .od-nl-btn-v2 {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          color: #ffffff;
          font-weight: 600;
          letter-spacing: 0.04em;
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            transform 0.15s ease;
        }
        .od-nl-btn-v2:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.22);
          box-shadow: 0 0 20px -6px rgba(255, 255, 255, 0.06);
        }
        .od-nl-btn-v2:active:not(:disabled) {
          transform: scale(0.98);
        }
        .od-nl-btn-v2:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ── Success check pulse ── */
        @keyframes od-nl-check-in {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        .od-nl-check {
          animation: od-nl-check-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .od-nl-entrance {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .od-nl-stagger > * {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .od-nl-check {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Card wrapper with scroll-reveal */}
        <div
          className="od-nl-glass od-nl-entrance"
          data-visible={inView}
        >
          {/* Top decorative gradient line */}
          <div
            className="absolute left-0 right-0 top-0 z-[1] h-px"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 70%, transparent 90%)",
            }}
          />

          {/* Content */}
          <div
            className="od-nl-stagger relative z-[2] flex flex-col items-center gap-5 px-4 py-8 text-center sm:gap-6 sm:px-10 sm:py-12"
            data-visible={inView}
          >
            {form.status === "success" ? (
              /* ─── Success state ─── */
              <div className="flex flex-col items-center gap-4 text-center">
                {/* Check circle */}
                <div className="od-nl-check flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-white/70"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>

                <div>
                  <p className="font-display text-base font-semibold tracking-wide text-zinc-100 sm:text-lg">
                    Inscrição confirmada
                  </p>
                  <p className="mt-1.5 text-sm text-white/40">
                    Verifique sua caixa de entrada. Nos vemos na segunda!
                  </p>
                </div>
              </div>
            ) : (
              /* ─── Form state ─── */
              <>
                {/* Eyebrow badge */}
                <div className="flex justify-center">
                  <span className="od-badge">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 4.5A1.5 1.5 0 013.5 3h9A1.5 1.5 0 0114 4.5v7a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 11.5v-7z"
                        stroke="currentColor"
                        strokeWidth="1.1"
                      />
                      <path
                        d="M2 5l6 4 6-4"
                        stroke="currentColor"
                        strokeWidth="1.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Newsletter
                  </span>
                </div>

                {/* Title */}
                <div className="flex flex-col items-center">
                  <h2
                    id="nl-heading"
                    className="font-display text-xl font-extralight uppercase tracking-[0.12em] pl-[0.12em] text-white sm:text-2xl lg:text-3xl"
                  >
                    Conteúdo que funciona
                  </h2>

                  {/* Decorative gradient line */}
                  <div
                    className="mt-4 h-px w-16 sm:w-20"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    }}
                  />

                  {/* Subtitle */}
                  <p className="mt-3 max-w-md text-sm text-white/40 sm:text-base">
                    Estratégias de marketing digital, toda segunda-feira no seu inbox.
                  </p>
                </div>

                {/* Benefits row */}
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6">
                  {BENEFITS.map((b) => (
                    <span
                      key={b.label}
                      className="flex items-center gap-1.5 text-xs text-white/35 sm:text-[13px]"
                    >
                      <span className="text-white/30">{b.icon}</span>
                      {b.label}
                    </span>
                  ))}
                </div>

                {/* Form */}
                <div className="w-full max-w-lg">
                  <form
                    onSubmit={form.onSubmit}
                    noValidate
                    className="flex w-full flex-col gap-3 sm:flex-row"
                  >
                    {/* Honeypot anti-spam — invisible to real users */}
                    <div
                      className="absolute -left-[9999px] opacity-0 pointer-events-none"
                      aria-hidden="true"
                    >
                      <label htmlFor={`${form.id}-company`}>Company</label>
                      <input
                        id={`${form.id}-company`}
                        name="company"
                        type="text"
                        value={form.honeypot}
                        onChange={(e) => form.setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="relative flex-1">
                      <label htmlFor={form.id} className="sr-only">
                        Seu email
                      </label>
                      <input
                        id={form.id}
                        type="email"
                        value={form.email}
                        onChange={form.onChange}
                        onBlur={() =>
                          form.email && form.validate(form.email)
                        }
                        placeholder="voce@empresa.com.br"
                        required
                        disabled={form.status === "loading"}
                        aria-describedby={
                          form.err ? `${form.id}-err` : undefined
                        }
                        aria-invalid={!!form.err || undefined}
                        className="od-nl-input-v2 w-full px-4 py-3 text-sm sm:py-3.5"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={form.status === "loading"}
                      className="od-nl-btn-v2 whitespace-nowrap px-7 py-3.5 text-sm sm:py-3.5 w-full sm:w-auto"
                    >
                      {form.status === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="h-4 w-4 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="3"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        "Inscrever-se"
                      )}
                    </button>
                  </form>

                  {/* Error messages */}
                  {(form.err ||
                    (form.status === "error" && form.message)) && (
                    <p
                      id={form.err ? `${form.id}-err` : undefined}
                      role="alert"
                      className="mt-2.5 text-center text-xs text-red-400/80"
                    >
                      {form.err || form.message}
                    </p>
                  )}
                </div>

                {/* Social proof / stamp */}
                <p className="text-[11px] tracking-wider pl-[0.05em] text-white/20">
                  Junte-se a +200 profissionais de marketing
                </p>
              </>
            )}
          </div>

          {/* Bottom decorative gradient line */}
          <div
            className="absolute bottom-0 left-0 right-0 z-[1] h-px"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(90deg, transparent 15%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.05) 60%, transparent 85%)",
            }}
          />
        </div>
      </div>
    </section>
  )
}
