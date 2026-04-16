"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import type { MotionProps } from "framer-motion"

const WA_URL =
  "https://wa.me/5531996966686?text=Olá%2C+vim+pelo+site+e+quero+entender+como+funciona"

const STATS = [
  { value: "30+", label: "Negócios atendidos" },
  { value: "1:1", label: "Direto com quem executa" },
  { value: "0", label: "Intermediários" },
] as const

export default function HeroCinematic() {
  const reduced = useReducedMotion()

  function fadeUp(delay: number): MotionProps {
    if (reduced) return { initial: false }
    return {
      initial: { opacity: 0, y: 28 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
    }
  }

  function fadeIn(delay: number): MotionProps {
    if (reduced) return { initial: false }
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1.1, delay },
    }
  }

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#09090b]"
      style={{ minHeight: "100svh" }}
      aria-label="Hero principal"
    >
      {/* ─── Founder photo — right panel ─── */}
      <motion.div
        {...fadeIn(0.05)}
        className="absolute inset-0 lg:left-[40%]"
        aria-hidden="true"
      >
        {/* Photo — color treated for dark palette integration */}
        <Image
          src="/davi-honorato.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[center_top]"
          sizes="(max-width: 1024px) 100vw, 60vw"
          style={{ filter: "saturate(0.95) brightness(0.95) contrast(1.05)" }}
        />

        {/* Vignette — left-to-right fade ensuring text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #09090b 0%, #09090b 18%, rgba(9,9,11,0.9) 32%, rgba(9,9,11,0.45) 45%, rgba(9,9,11,0.1) 52%, transparent 62%)",
          }}
        />

        {/* Mobile — 82% opacity veil for guaranteed readability + eyebrow contrast */}
        <div className="absolute inset-0 bg-[#09090b]/82 lg:hidden" />
      </motion.div>

      {/* ─── Neon accent mark — 1px sharp, editorial ─── */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          top: "10%",
          right: "6%",
          width: 72,
          height: 1,
          background:
            "linear-gradient(to right, transparent 0%, #06b6d4 18%, #06b6d4 82%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ─── Vertical rule — column-edge structural guide ─── */}
      <motion.div
        initial={reduced ? false : { scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute hidden lg:block pointer-events-none"
        style={{
          left: "38%",
          top: 0,
          height: "30%",
          width: 1,
          transformOrigin: "top center",
          willChange: "transform",
          background:
            "linear-gradient(to bottom, rgba(6,182,212,0.15) 0%, rgba(6,182,212,0.15) 75%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ─── Main content (flex column, padded) ─── */}
      <div
        className="relative z-10 flex flex-col px-6 sm:px-10 lg:px-20"
        style={{ minHeight: "100svh", paddingTop: "5.5rem", paddingBottom: "6rem" }}
      >
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.15)}
          className="font-display text-zinc-500 font-semibold mb-8 sm:mb-10 lg:mb-12"
          style={{ fontSize: "var(--text-small)", letterSpacing: "0.18em", textTransform: "uppercase" }}
        >
          Agência de Marketing Digital · Belo Horizonte
        </motion.p>

        {/* ── Headline — extreme size contrast ── */}
        <h1
          className="font-display font-black leading-none mb-7 sm:mb-9 lg:[max-width:min(640px,55vw)]"
        >
          <motion.span
            {...fadeUp(0.22)}
            className="block text-white"
            style={{
              fontSize: "clamp(2.5rem, 8vw, var(--text-display))",
              letterSpacing: "-0.03em",
              lineHeight: 0.87,
            }}
          >
            MAIS
          </motion.span>

          <motion.span
            {...fadeUp(0.3)}
            className="block"
            style={{
              fontSize: "clamp(2.5rem, 8vw, var(--text-display))",
              letterSpacing: "-0.03em",
              lineHeight: 0.87,
              color: "#06b6d4",
            }}
          >
            CLIENTES.
          </motion.span>

          <motion.span
            {...fadeUp(0.38)}
            className="block text-white/30"
            style={{
              fontSize: "clamp(1.125rem, 2.8vw, var(--text-h2))",
              letterSpacing: "0.01em",
              lineHeight: 1.3,
              marginTop: "0.5em",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            Menos desperdício.
          </motion.span>
        </h1>

        {/* Horizontal rule — editorial separator */}
        <motion.div
          initial={reduced ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
          style={{
            height: 1,
            background: "rgba(39,39,42,0.7)",
            transformOrigin: "left center",
            maxWidth: "min(380px, 100%)",
          }}
          aria-hidden="true"
        />

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.48)}
          className="text-zinc-400 mb-10 sm:mb-12"
          style={{
            fontSize: "var(--text-body)",
            maxWidth: 360,
            lineHeight: 1.8,
          }}
        >
          Tráfego pago, SEO local e automação com IA — executados por quem realmente entende do seu negócio.
          Sem camadas.
        </motion.p>

        {/* CTA */}
        <motion.div {...fadeUp(0.56)}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-track="hero-cinematic-cta"
            className="od-hero-cta group inline-flex items-center gap-3 font-semibold rounded-lg"
            style={{ fontSize: "var(--text-body)" }}
          >
            Marcar diagnóstico gratuito
            <ArrowRight
              className="w-4 h-4 transition-transform duration-[180ms] group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </motion.div>

        {/* ─── Stats — inline row below CTA ─── */}
        <motion.div
          {...fadeUp(0.72)}
          className="flex flex-wrap items-center gap-6 mt-8"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p
                className="font-display font-black text-white leading-none"
                style={{ fontSize: "clamp(1.625rem, 2.6vw, 2.5rem)" }}
              >
                {stat.value}
              </p>
              <p
                className="text-zinc-600 font-semibold uppercase mt-1.5"
                style={{ fontSize: "var(--text-small)", letterSpacing: "0.22em" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ─── Scroll indicator — bottom-right ─── */}
      <div
        className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-3 pointer-events-none"
        aria-hidden="true"
      >
        <p
          className="text-zinc-700 font-medium uppercase"
          style={{
            fontSize: 9,
            letterSpacing: "0.22em",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Scroll
        </p>
        <motion.div
          initial={reduced ? false : { scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: 1,
            height: 52,
            transformOrigin: "top center",
            willChange: "transform",
            background: "linear-gradient(to bottom, #3f3f46, transparent)",
          }}
        />
      </div>
    </section>
  )
}
