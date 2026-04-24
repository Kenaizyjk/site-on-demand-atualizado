"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

/**
 * HeroCinematic — imagem de fundo com parallax de scroll "Ascensão ao topo"
 * + texto que se forma letra por letra APÓS a intro cinematográfica
 *
 * Timing: CinematicIntro dura ~6.3s (5.5s play + 0.8s fade).
 * Todas as animações do hero começam com BASE_DELAY para sincronizar.
 */

/** Delay base — espera a intro cinematográfica terminar */
const BASE = 6.5

const TITLE_LINES = [
  { text: "Agência", delay: BASE + 0.2 },
  { text: "de", delay: BASE + 1.0 },
  { text: "Marketing", delay: BASE + 1.4, gradient: true },
]

const CHAR_STAGGER = 0.045

export default function HeroCinematic() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Parallax transforms — disabled when user prefers reduced motion
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15])
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -60])
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  // Calcula o delay da linha + último char para saber quando a animação do título termina
  const lastLine = TITLE_LINES[TITLE_LINES.length - 1]
  const titleEnd = lastLine.delay + lastLine.text.length * CHAR_STAGGER + 0.6
  const lineDelay = titleEnd + 0.2
  const subDelay = titleEnd + 0.5

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full overflow-hidden bg-[#09090b]"
      style={{ minHeight: "100svh" }}
      aria-label="Hero principal"
    >
      <style>{`
        @keyframes hero-char-in {
          0% {
            opacity: 0;
            transform: translateY(30px) rotateX(40deg);
            filter: blur(6px);
          }
          60% {
            opacity: 0.8;
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
            filter: blur(0);
          }
        }
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-line-grow {
          from { width: 0; }
          to   { width: 80px; }
        }

        .hero-char {
          display: inline-block;
          opacity: 0;
          animation: hero-char-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: opacity, transform, filter;
        }
        .hero-eyebrow {
          opacity: 0;
          animation: hero-fade-up 0.8s ease-out ${BASE}s forwards;
        }
        .hero-line {
          width: 0;
          animation: hero-line-grow 0.8s ease-out forwards;
        }
        .hero-subtitle {
          opacity: 0;
          animation: hero-fade-up 0.8s ease-out forwards;
        }

        /* Gradiente texto aplicado POR CARACTERE para não quebrar com opacity animation */
        .hero-char-gradient {
          background: linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.55) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ── Scroll CTA — ring + seta ── */
        @keyframes hero-scroll-line-grow {
          from { height: 0; opacity: 0; }
          to   { height: 40px; opacity: 1; }
        }
        .hero-scroll-cta {
          opacity: 0;
          animation: hero-fade-up 1s ease-out forwards;
        }
        .hero-scroll-ring {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .hero-scroll-ring::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          animation: hero-ring-sonar 3s ease-out infinite;
        }
        @keyframes hero-ring-sonar {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes hero-arrow-bounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(3px); }
        }
        .hero-scroll-ring svg {
          animation: hero-arrow-bounce 2s ease-in-out infinite;
        }
        .hero-scroll-track {
          width: 1px;
          height: 0;
          opacity: 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0.25), transparent);
          animation: hero-scroll-line-grow 1s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-char,
          .hero-eyebrow,
          .hero-subtitle,
          .hero-scroll-cta {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
          .hero-scroll-ring::before,
          .hero-scroll-ring svg {
            animation: none !important;
          }
          .hero-scroll-track {
            animation: none !important;
            height: 40px !important;
            opacity: 1 !important;
          }
          .hero-line {
            animation: none !important;
            width: 80px !important;
          }
          #home img {
            transform: none !important;
          }
        }
      `}</style>

      {/* ── Imagem de fundo com parallax ── */}
      <motion.img
        src="/hero-bg-planet.png"
        alt="Planeta estilizado representando alcance global de marketing digital"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={
          prefersReducedMotion
            ? { transform: "scale(1.05)" }
            : { y: bgY, scale: bgScale }
        }
      />

      {/* ── Camadas de profundidade ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 20%, rgba(0,0,0,0.65) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        aria-hidden="true"
        style={{
          height: "45%",
          background: "linear-gradient(to top, rgba(9,9,11,1) 0%, rgba(9,9,11,0.7) 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-y-0 left-0 pointer-events-none"
        aria-hidden="true"
        style={{
          width: "50%",
          background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 50% 40%, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Texto editorial com animação letra por letra ── */}
      <motion.div
        className="absolute inset-0 flex items-center pointer-events-none"
        style={
          prefersReducedMotion
            ? undefined
            : { y: textY, opacity: textOpacity }
        }
      >
        <div className="relative z-10 px-6 sm:px-10 lg:px-16 max-w-4xl">
          {/* Eyebrow */}
          <p
            className="hero-eyebrow font-display text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-4 sm:mb-6"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            On Demand Digital
          </p>

          {/* Título — cada letra aparece individualmente */}
          <h1
            className="font-display font-extralight uppercase leading-[0.95] tracking-[0.12em] text-white"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
            aria-label="Agência de Marketing"
          >
            {TITLE_LINES.map((line, lineIdx) => (
              <span
                key={lineIdx}
                className={`block ${line.gradient ? "font-light" : ""}`}
                aria-hidden="true"
              >
                {line.text.split("").map((char, charIdx) => (
                  <span
                    key={charIdx}
                    className={`hero-char ${line.gradient ? "hero-char-gradient" : ""}`}
                    style={{
                      animationDelay: `${line.delay + charIdx * CHAR_STAGGER}s`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          {/* Linha decorativa */}
          <div
            className="hero-line mt-6 sm:mt-8 h-px"
            style={{
              background: "linear-gradient(90deg, rgba(255,255,255,0.4), transparent)",
              animationDelay: `${lineDelay}s`,
            }}
            aria-hidden="true"
          />

          {/* Subtítulo */}
          <p
            className="hero-subtitle mt-4 sm:mt-6 text-sm sm:text-base font-light leading-relaxed max-w-md"
            style={{
              color: "rgba(255,255,255,0.45)",
              animationDelay: `${subDelay}s`,
            }}
          >
            Estratégia, tráfego pago e automação com IA para negócios que querem crescer com clareza.
          </p>
        </div>
      </motion.div>

      {/* ── Scroll CTA — editorial ── */}
      <motion.div
        style={
          prefersReducedMotion
            ? undefined
            : { opacity: ctaOpacity }
        }
      >
      <div
        className="hero-scroll-cta absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 pointer-events-auto cursor-pointer group"
        style={{ animationDelay: `${subDelay + 0.6}s` }}
        onClick={() => {
          document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
        }}
        role="button"
        tabIndex={0}
        aria-label="Rolar para baixo"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
          }
        }}
      >
        {/* Label */}
        <span
          className="font-display text-[11px] sm:text-[10px] font-semibold uppercase tracking-[0.3em] transition-colors duration-300 group-hover:text-white/60"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Explorar
        </span>

        {/* Ring com seta chevron */}
        <div className="hero-scroll-ring group-hover:border-white/40 transition-colors duration-300">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 4.5L7 10.5L13 4.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Linha vertical que cresce */}
        <div
          className="hero-scroll-track"
          style={{ animationDelay: `${subDelay + 1.2}s` }}
        />
      </div>
      </motion.div>
    </section>
  )
}
