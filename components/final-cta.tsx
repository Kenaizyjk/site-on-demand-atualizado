"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Clock, UserCheck, MessageSquare } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5531996966686?text=Olá%2C+vim+pelo+site+e+quero+começar+pelo+diagnóstico"

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
      {/* Section anchor label */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(6,182,212,0.3), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="od-container px-4 text-center max-w-4xl relative z-10">
        {/* Section eyebrow — anchors the section before the card */}
        <div style={enterStyle(0)}>
          <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3 font-display">
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
          {/* Gradient border frame */}
          <div
            className="absolute -inset-px rounded-2xl pointer-events-none"
            aria-hidden="true"
            style={{
              border: "1px solid rgba(39,39,42,0.8)",
              borderRadius: "inherit",
            }}
          />

          {/* Card */}
          <div className="relative bg-[#09090b] rounded-xl sm:rounded-2xl p-6 sm:p-10 lg:p-14 overflow-hidden">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-6 od-badge"
              style={enterStyle(0.1)}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
              Conversa de 30 min — sem compromisso
            </div>

            {/* Heading — assertive statement, not a question */}
            <h2
              className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-5 sm:mb-6 leading-[1.1] tracking-tight"
              style={enterStyle(0.18)}
            >
              <span className="block text-[#e2e8f0]">
                Seu próximo cliente pode vir
              </span>
              <span className="block text-[#06b6d4]">
                da estratégia certa.
              </span>
            </h2>

            {/* Sub */}
            <p
              className="od-subtitle text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto px-2"
              style={enterStyle(0.28)}
            >
              Sem script de vendas. Sem promessas vazias.
              <br className="hidden sm:block" />
              Só uma conversa honesta sobre o que faz sentido para o seu negócio.
            </p>

            {/* Guarantees — icon-backed, specific */}
            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-12"
              style={enterStyle(0.38)}
            >
              {GUARANTEES.map(({ icon: Icon, label, detail }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60 flex-1 sm:max-w-[160px]"
                >
                  <div
                    className="w-8 h-8 rounded-lg bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon className="w-4 h-4 text-zinc-400" />
                  </div>
                  <span className="text-sm font-semibold text-white leading-tight">{label}</span>
                  <span className="text-xs text-zinc-500 leading-tight">{detail}</span>
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
                className="od-cta-button group inline-flex items-center gap-2 sm:gap-3 px-7 py-4 sm:px-9 sm:py-5 text-white font-bold text-base sm:text-lg rounded-xl shadow-lg"
              >
                <span>Marcar diagnóstico gratuito</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>

            {/* Secondary contact */}
            <p className="text-zinc-500 text-xs sm:text-sm mt-6 px-2" style={enterStyle(0.54)}>
              Prefere e-mail?{" "}
              <a
                href="mailto:contato@ondemanddigital.com.br"
                className="text-cyan-500 hover:text-cyan-400 transition-colors underline-offset-2 hover:underline"
              >
                contato@ondemanddigital.com.br
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade-out line */}
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(39,39,42,0.5), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  )
}
