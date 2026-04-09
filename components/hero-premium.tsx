"use client"

import { ArrowRight, CheckCircle2, Zap, Target, BarChart3, ShieldCheck } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import type { MotionProps } from "framer-motion"

// Static variants hoisted outside component per rendering-hoist-jsx rule
const PROCESS_STEPS = [
  {
    icon: Target,
    label: "Diagnóstico",
    desc: "Mapeamos o cenário real do negócio antes de gastar um centavo em mídia",
    color: "zinc" as const,
  },
  {
    icon: Zap,
    label: "Execução",
    desc: "Tráfego pago, SEO local e automações com IA rodando em paralelo, sem silos",
    color: "cyan" as const,
  },
  {
    icon: BarChart3,
    label: "Resultado",
    desc: "Acompanhamento direto e contínuo. Dados reais, sem relatório de vaidade.",
    color: "zinc" as const,
  },
] as const

const DIFFERENTIALS = [
  "Seu orçamento tratado como se fosse nosso. Sem desperdício.",
  "Atendimento direto com quem executa, sem intermediários",
  "Tráfego pago, SEO local e automação com IA integrados em uma só estratégia",
] as const

const WA_URL =
  "https://wa.me/5531996966686?text=Olá%2C+vim+pelo+site+e+quero+entender+como+funciona"

export default function HeroPremium() {
  const prefersReducedMotion = useReducedMotion()

  function fadeUp(delay: number): MotionProps {
    if (prefersReducedMotion) return { initial: false }
    return {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    }
  }

  function fadeIn(delay: number): MotionProps {
    if (prefersReducedMotion) return { initial: false }
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.7, delay },
    }
  }

  return (
    <section
      id="home"
      className="od-section relative min-h-[100vh] flex items-center overflow-hidden bg-[#09090b]"
      aria-label="Hero principal"
    >
      {/* Ambient glow blob */}
      <div
        className="absolute bottom-1/4 right-[-8%] w-[400px] h-[400px] bg-cyan-500/12 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      {/* Subtle radial vignette at top for nav readability */}
      <div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#09090b]/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 od-container px-4 w-full pt-24 pb-16 sm:pt-32 sm:pb-20">
        {/* Split layout: text left / process visual right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN: Copy + CTAs ── */}
          <div className="flex flex-col items-start text-left">

            {/* Eyebrow tag */}
            <motion.div {...fadeUp(0.05)}>
              <span className="od-badge mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Agência de marketing digital
              </span>
            </motion.div>

            {/* Headline — leads with transformation, closes with philosophy */}
            <motion.h1
              {...fadeUp(0.12)}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.06] tracking-tighter mb-6"
            >
              <span className="block text-white">
                Mais clientes.
              </span>
              <span className="block text-[#06b6d4] tracking-wider">
                Menos desperdício.
              </span>
              <span className="block text-white">
                Marketing que entrega.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.22)}
              className="text-base sm:text-lg od-subtitle leading-relaxed mb-8 max-w-xl"
            >
              Tráfego pago, SEO local e automação com IA executados por quem
              realmente entende do seu negócio.{" "}
              <span className="text-white font-semibold">
                Sem camadas, sem enrolação.
              </span>
            </motion.p>

            {/* Differentials — outcome language */}
            <motion.ul
              {...fadeUp(0.3)}
              className="flex flex-col gap-3 mb-10"
              aria-label="Diferenciais"
            >
              {DIFFERENTIALS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-300">
                  <CheckCircle2
                    className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.38)}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-track="hero-whatsapp-cta"
                className="group od-cta-button inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-white font-bold text-base"
              >
                Marcar diagnóstico gratuito
                <ArrowRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  aria-hidden="true"
                />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-zinc-700 text-zinc-300 font-semibold text-base hover:border-cyan-500/40 hover:text-white hover:bg-cyan-500/5 transition-all duration-300 active:scale-[0.97]"
              >
                Ver os serviços
              </a>
            </motion.div>

            {/* Micro trust line — icon instead of emoji for a11y */}
            <motion.p
              {...fadeIn(0.52)}
              className="mt-6 text-xs text-zinc-500 flex items-center gap-2"
            >
              <ShieldCheck
                className="w-3.5 h-3.5 text-zinc-500 shrink-0"
                aria-hidden="true"
              />
              <span>Atendimento direto e personalizado desde o primeiro contato</span>
            </motion.p>
          </div>

          {/* ── RIGHT COLUMN: Process Flow Visual ── */}
          <motion.div
            {...fadeIn(0.18)}
            className="relative flex flex-col gap-4 lg:pl-6"
            aria-label="Nosso processo em 3 etapas"
          >
            {/* Connecting line — visible on sm+ */}
            <div
              className="absolute left-[1.85rem] top-[3.5rem] bottom-[7.5rem] w-px bg-zinc-700/50 hidden sm:block pointer-events-none"
              aria-hidden="true"
            />

            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon
              const isViolet = step.color === "zinc"
              return (
                <motion.div
                  key={step.label}
                  {...(prefersReducedMotion
                    ? { initial: false }
                    : {
                        initial: { opacity: 0, x: 28 },
                        animate: { opacity: 1, x: 0 },
                        transition: {
                          duration: 0.55,
                          delay: 0.28 + index * 0.12,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      })}
                  className="relative od-card-soft od-card-hover p-5 sm:p-6 rounded-2xl group cursor-default"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon bubble */}
                    <div
                      className="relative shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-zinc-800/60 border border-zinc-700/50 group-hover:border-zinc-600/60 transition-colors duration-300"
                      aria-hidden="true"
                    >
                      <Icon
                        className={`w-5 h-5 ${!isViolet ? "text-cyan-400" : "text-zinc-300"}`}
                      />
                      {/* Step number */}
                      <span
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center bg-zinc-700 text-zinc-300"
                      >
                        {index + 1}
                      </span>
                    </div>

                    {/* Text */}
                    <div>
                      <h3
                        className={`font-display font-bold text-base mb-1 ${
                          !isViolet ? "text-cyan-300" : "text-zinc-200"
                        }`}
                      >
                        {step.label}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Hover glow accent line */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-px rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-zinc-600/50"
                    aria-hidden="true"
                  />
                </motion.div>
              )
            })}

            {/* Bottom trust badge — icon-based, no emoji */}
            <motion.div
              {...(prefersReducedMotion
                ? { initial: false }
                : {
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.68 },
                  })}
              className="mt-2 flex items-start gap-3 px-4 py-4 rounded-xl bg-zinc-900/60 border border-zinc-800/70"
              aria-label="Compromisso com o cliente"
            >
              <div
                className="shrink-0 w-8 h-8 rounded-lg bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center mt-0.5"
                aria-hidden="true"
              >
                <ShieldCheck className="w-4 h-4 text-zinc-400" />
              </div>
              <div>
                <p className="text-sm text-white font-semibold leading-snug mb-0.5">
                  Sem fidelidade forçada
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Continuamos porque os resultados justificam — não por contrato ou multa de saída.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
