"use client"

import { Target, Zap, BarChart3, Shield, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ValueProposition() {
  const values = [
    {
      icon: Target,
      title: "Foco em Eficiência",
      description: "Menos vaidade, mais clareza sobre o que realmente sustenta o seu marketing."
    },
    {
      icon: Zap,
      title: "Ritmo e Consistência",
      description: "Implementação com etapas claras, acompanhamento e ajustes contínuos."
    },
    {
      icon: BarChart3,
      title: "Dados e Visibilidade",
      description: "Você acompanha as principais métricas para decidir com mais segurança."
    },
    {
      icon: Shield,
      title: "Transparência no Processo",
      description: "Relação clara, comunicação aberta e expectativas alinhadas."
    }
  ]

  return (
    <section id="valores" className="od-section sm:py-32 bg-[#09090b] relative overflow-hidden flex items-center justify-center min-h-screen">

      {/* Background Gigante "ON DEMAND" */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[12rem] sm:text-[20rem] md:text-[25rem] lg:text-[35rem] font-black od-title text-white leading-none whitespace-nowrap tracking-tighter"
          style={{ WebkitTextStroke: "2px rgba(255,255,255,0.1)", color: "transparent" }}
        >
          ON DEMAND
        </motion.div>
      </div>

      <div className="od-container px-4 relative z-10 w-full">
        {/* Banner Central Impactante */}
        <div className="relative mb-20 od-reveal">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] rounded-3xl p-[1px] shadow-2xl shadow-cyan-500/20"
          >
            <div className="bg-[#09090b] rounded-[23px] px-6 py-12 md:px-12 md:py-16 text-center relative overflow-hidden backdrop-blur-xl">
              {/* Glow interno banner */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4]/10 to-[#8b5cf6]/10 opacity-50" />

              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black od-title mb-6 tracking-tight text-white uppercase">
                  Por que empresas sérias <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]">
                    escolhem a On Demand?
                  </span>
                </h2>
                <p className="od-subtitle text-lg sm:text-xl md:text-2xl leading-relaxed mb-10 font-medium">
                  Porque marketing sem método vira tentativa e erro. <strong className="text-white">Estruturamos aquisição com metas, prioridades e acompanhamento constante.</strong>
                </p>
                <a
                  href="https://wa.me/553196966686?text=Ol%C3%A1!%20Quero%20entender%20como%20funciona%20a%20consultoria."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transform hover:scale-105 active:scale-95"
                >
                  Agendar Conversa
                  <ArrowRight className="w-5 h-5 text-black" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CVP Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 od-reveal od-reveal-delay-2">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="od-card od-card-hover border border-[#27272a] rounded-2xl p-8 hover:border-[#06b6d4]/50 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#09090b] border border-[#27272a] group-hover:border-[#06b6d4]/50 flex items-center justify-center transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#06b6d4]" />
                  </div>
                  <span className="text-[#3f3f46] font-mono text-xl font-bold group-hover:text-[#a1a1aa] transition-colors">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-[#a1a1aa] leading-relaxed group-hover:text-gray-300 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

