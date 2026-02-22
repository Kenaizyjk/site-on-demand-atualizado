"use client"

import { Megaphone, Search, GitBranch, Target, BrainCircuit, LineChart, Activity } from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesSimple() {

  const services = [
    {
      icon: Target,
      title: "Tráfego Pago",
      description: "Planejamento e gestão de campanhas em Meta e Google Ads com objetivos claros, testes estruturados e monitoramento contínuo.",
      color: "from-[#06b6d4] to-[#3b82f6]",
      tag: "Ads & Escala",
      delay: 0.1
    },
    {
      icon: GitBranch,
      title: "Automação com IA (n8n)",
      description: "Fluxos automatizados que organizam, qualificam e encaminham conversas no WhatsApp com critérios definidos.",
      color: "from-[#8b5cf6] to-[#ec4899]",
      tag: "Sistemas & Robôs",
      delay: 0.2
    },
    {
      icon: Search,
      title: "SEO Local & Conteúdo",
      description: "Estruturas de conteúdo e otimização local para organizar a presença orgânica e facilitar o encontro no Google.",
      color: "from-[#10b981] to-[#059669]",
      tag: "Busca Orgânica",
      delay: 0.3
    },
    {
      icon: BrainCircuit,
      title: "Chatbots e IA",
      description: "Atendentes de IA treinados com seus dados para responder dúvidas, orientar o cliente e apoiar o time.",
      color: "from-[#f59e0b] to-[#ea580c]",
      tag: "Inteligência Artificial",
      delay: 0.4
    },
    {
      icon: LineChart,
      title: "Web Analytics & Growth",
      description: "Dashboards e acompanhamento para decisões mais consistentes e alinhadas aos objetivos do negócio.",
      color: "from-[#6366f1] to-[#4338ca]",
      tag: "Business Intelligence",
      delay: 0.5
    },
    {
      icon: Megaphone,
      title: "Gestão de Marca & Copy",
      description: "Criativos e copy alinhados ao posicionamento e ao perfil do público, com foco em clareza e intenção.",
      color: "from-[#ec4899] to-[#be185d]",
      tag: "Conversão",
      delay: 0.6
    }
  ]

  return (
    <section id="servicos" className="od-section lg:py-32 bg-[#09090b] relative overflow-hidden">
      {/* Background Energy Lines */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-[#06b6d4] to-transparent absolute left-[20%] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-[#8b5cf6] to-transparent absolute left-[50%] animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-[#06b6d4] to-transparent absolute right-[20%] animate-pulse" style={{ animationDuration: '5s' }} />
      </div>

      <div className="od-container px-4 relative z-10">

        {/* Header Header */}
        <div className="text-center mb-16 lg:mb-24 od-reveal">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#18181b] border border-[#27272a] od-subtitle text-sm font-semibold mb-6 shadow-xl"
          >
            <Activity className="w-4 h-4 text-[#06b6d4]" />
            O QUE NÓS FAZEMOS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black od-title mb-6 tracking-tight text-white"
          >
            Estrutura certa para <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]">
              crescer com consistência
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="od-subtitle max-w-3xl mx-auto text-lg sm:text-xl px-4 leading-relaxed"
          >
            Organizamos aquisição, automação e conteúdo para dar clareza ao que funciona e ao que precisa ser ajustado.
          </motion.p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 od-reveal od-reveal-delay-2">
          {services.map((service, index) => {
            const Icon = service.icon
                        return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: service.delay }}
                className="group relative od-card-hover bg-[#18181b] border border-[#27272a] rounded-3xl p-8 hover:bg-[#18181b] transition-all duration-500 overflow-hidden transform-gpu hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] cursor-pointer h-full flex flex-col"
              >
                {/* Dynamic Gradient Background Reveal */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none`}
                />

                {/* Glowing Orb */}
                <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-700`} />

                {/* Top Section */}
                <div className="relative z-10 mb-8 flex justify-between items-start">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-[#09090b] shadow-inner border border-[#27272a] group-hover:border-transparent transition-colors duration-300 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    <Icon className={`w-7 h-7 text-[#a1a1aa] group-hover:text-white transition-colors duration-300 z-10 relative`} />
                  </div>

                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#27272a] text-[#71717a] group-hover:border-[#3f3f46] group-hover:text-[#a1a1aa] transition-colors duration-300`}>
                    {service.tag}
                  </span>
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#a1a1aa] leading-relaxed group-hover:text-[#e4e4e7] transition-colors duration-300">
                    {service.description}
                  </p>
                </div>


              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
