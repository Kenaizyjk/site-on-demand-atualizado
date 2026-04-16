"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5531996966686?text=Olá%2C+vim+pelo+site+e+quero+começar+pelo+diagnóstico"

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
      className="od-reveal-section od-section py-24 sm:py-32 lg:py-40 relative overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, rgba(6,182,212,0.3), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="od-container px-4 text-center max-w-3xl relative z-10">
        {/* Eyebrow */}
        <div style={enterStyle(0)}>
          <p
            className="font-semibold tracking-widest text-zinc-500 uppercase mb-4 font-display"
            style={{ fontSize: "var(--text-small)" }}
          >
            Próximo passo
          </p>
        </div>

        {/* Badge */}
        <div style={enterStyle(0.08)}>
          <div className="inline-flex items-center gap-2 mb-8 od-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
            Conversa de 30 min — sem compromisso
          </div>
        </div>

        {/* Heading */}
        <h2
          className="font-display font-black mb-6 leading-[1.1] tracking-tight"
          style={{ fontSize: "var(--text-h1)", ...enterStyle(0.16) }}
        >
          <span className="block text-[#e2e8f0]">
            Seu próximo cliente pode vir
          </span>
          <span className="block text-[#06b6d4]">
            da estratégia certa.
          </span>
        </h2>

        {/* Subtitle */}
        <p
          className="od-subtitle text-base sm:text-lg mb-12 max-w-xl mx-auto"
          style={enterStyle(0.26)}
        >
          Sem script de vendas. Sem promessas vazias.
          <br className="hidden sm:block" />
          Só uma conversa honesta sobre o que faz sentido para o seu negócio.
        </p>

        {/* CTA Button */}
        <div style={enterStyle(0.36)}>
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
        <p className="text-zinc-500 text-xs sm:text-sm mt-8" style={enterStyle(0.44)}>
          Prefere e-mail?{" "}
          <a
            href="mailto:contato@ondemanddigital.com.br"
            className="text-cyan-500 hover:text-cyan-400 transition-colors underline-offset-2 hover:underline"
          >
            contato@ondemanddigital.com.br
          </a>
        </p>
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
