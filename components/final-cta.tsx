"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Clock, UserCheck, MessageSquare } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5531996966686?text=Ol%C3%A1%2C+vim+pelo+site+e+quero+come%C3%A7ar+pelo+diagn%C3%B3stico"

const GUARANTEES = [
  {
    icon: MessageSquare,
    label: "Diagnóstico gratuito",
    detail: "Sem venda forçada",
  },
  {
    icon: UserCheck,
    label: "Atendimento direto",
    detail: "Sem intermediários",
  },
  {
    icon: Clock,
    label: "Resposta em até 2h úteis",
    detail: "Agilidade desde o início",
  },
] as const

/** Tiny hook: fires once when element enters viewport */
function useInView(ref: React.RefObject<Element | null>, threshold = 0.2) {
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
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold])

  return inView
}

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef)

  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const handler = () => setReducedMotion(mq.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const shouldAnimate = inView && !reducedMotion

  // Helper to build staggered entrance styles
  function enterStyle(delayS: number): React.CSSProperties {
    return {
      opacity: shouldAnimate ? 1 : reducedMotion ? 1 : 0,
      transform: shouldAnimate
        ? "translateY(0)"
        : reducedMotion
          ? "translateY(0)"
          : "translateY(16px)",
      transition: reducedMotion
        ? "none"
        : `opacity 0.65s ease-out ${delayS}s, transform 0.65s ease-out ${delayS}s`,
    }
  }

  return (
    <section
      ref={sectionRef}
      id="cta-final"
      className="od-section sm:py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: "transparent",
      }}
    >
      {/* Top line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="od-container px-4 text-center max-w-4xl relative z-10">
        {/* Section eyebrow */}
        <div style={enterStyle(0)}>
          <p
            className="text-xs font-medium uppercase tracking-[0.25em] mb-3 font-display"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Próximo passo
          </p>
        </div>

        <div
          className="relative"
          style={{
            opacity: shouldAnimate ? 1 : inView || reducedMotion ? 1 : 0,
            transform:
              shouldAnimate
                ? "translateY(0)"
                : inView || reducedMotion
                  ? "translateY(0)"
                  : "translateY(28px)",
            transition: reducedMotion
              ? "none"
              : "opacity 0.75s ease-out 0.05s, transform 0.75s ease-out 0.05s",
          }}
        >
          {/* Border frame */}
          <div
            className="absolute -inset-px rounded-2xl pointer-events-none"
            aria-hidden="true"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "inherit",
            }}
          />

          {/* Card */}
          <div className="relative od-glass-dense rounded-xl sm:rounded-2xl p-6 sm:p-10 lg:p-14 overflow-hidden">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.5)",
                ...enterStyle(0.1),
              }}
            >
              Conversa de 30 min, sem compromisso
            </div>

            {/* Heading */}
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extralight uppercase tracking-[0.12em] mb-5 sm:mb-6 leading-[1.1]"
              style={enterStyle(0.18)}
            >
              <span className="block text-[#e2e8f0]">
                Seu próximo cliente pode vir
              </span>
              <span
                className="block text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #ffffff, rgba(255,255,255,0.55))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
              >
                da estratégia certa.
              </span>
            </h2>

            {/* Sub */}
            <p
              className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto px-2"
              style={{
                color: "rgba(255,255,255,0.45)",
                ...enterStyle(0.28),
              }}
            >
              Sem script de vendas. Sem promessas vazias.
              <br className="hidden sm:block" />
              Só uma conversa honesta sobre o que faz sentido para o seu negócio.
            </p>

            {/* Guarantees */}
            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-12"
              style={enterStyle(0.38)}
            >
              {GUARANTEES.map(({ icon: Icon, label, detail }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl od-glass flex-1 sm:max-w-[160px]"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    aria-hidden="true"
                  >
                    <Icon className="w-4 h-4" style={{ color: "rgba(255,255,255,0.35)" }} />
                  </div>
                  <span className="text-sm font-semibold text-white leading-tight">{label}</span>
                  <span className="text-xs leading-tight" style={{ color: "rgba(255,255,255,0.35)" }}>{detail}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div style={enterStyle(0.46)}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-track="final-cta-whatsapp"
                className="group inline-flex items-center gap-2 sm:gap-3 px-7 py-4 sm:px-9 sm:py-5 text-white font-medium text-base sm:text-lg rounded-xl transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)" }}
              >
                <span>Marcar diagnóstico gratuito</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>

            {/* Secondary contact */}
            <p
              className="text-xs sm:text-sm mt-6 px-2"
              style={{
                color: "rgba(255,255,255,0.35)",
                ...enterStyle(0.54),
              }}
            >
              Prefere e-mail?{" "}
              <a
                href="mailto:contato@ondemanddigital.com.br"
                className="transition-colors underline-offset-2 hover:underline"
                style={{ color: "rgba(255,255,255,0.35)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.6)" }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.35)" }}
              >
                contato@ondemanddigital.com.br
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.04), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  )
}
