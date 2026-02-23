"use client"

import { TrendingUp, Target, Zap, Users, Cpu, Network, Sparkles } from "lucide-react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"

function Card3D({ children, glowColor }: { children: React.ReactNode; glowColor: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 })
  }

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")
    setGlowPos({ x: 50, y: 50 })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group"
      style={{
        transform,
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Dynamic glow that follows cursor */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}40, transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}

export default function AIStackProfessional() {
  const aiTools = [
    {
      name: "ChatGPT",
      company: "OpenAI",
      logo: "/openai-logo.svg",
      description: "Apoio à criação de conteúdo e variações de copy para redes sociais, blogs e anúncios",
      applications: ["Copy de Anúncios", "Posts para Redes Sociais", "Chatbot de Atendimento", "E-mail Marketing"],
      color: "emerald",
      icon: Target,
    },
    {
      name: "Claude",
      company: "Anthropic",
      logo: "/Claude_AI_logo.svg",
      description: "Apoio na leitura de dados de campanhas, relatórios e sínteses estratégicas",
      applications: ["Análise de ROI", "Relatórios Estratégicos", "Otimização de Campanhas", "Insights de Mercado"],
      color: "violet",
      icon: TrendingUp,
    },
    {
      name: "Gemini",
      company: "Google",
      logo: "/gemini-color.svg",
      description: "Leitura multimodal de imagens e vídeos para análise de criativos e tendências visuais",
      applications: ["Análise de Criativos", "SEO de Imagens", "Google Ads Intelligence", "Trends Detection"],
      color: "blue",
      icon: Zap,
    },
    {
      name: "Grok",
      company: "xAI",
      logo: "/Grok-feb-2025-logo.svg",
      description: "Monitoramento de tendências e leitura de conversas em redes sociais",
      applications: ["Social Listening", "Análise de Tendências", "Monitoramento de Marca", "Competitive Intelligence"],
      color: "amber",
      icon: Users,
    },
  ]

  const getColorConfig = (color: string) => {
    const configs = {
      emerald: {
        gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
        text: "text-emerald-400",
        border: "border-emerald-500/30",
        hoverBorder: "group-hover:border-emerald-500/60",
        bg: "bg-emerald-500/10",
        glow: "#10b981",
        dot: "bg-emerald-500",
        shadow: "group-hover:shadow-emerald-500/20",
        barBg: "bg-emerald-500",
      },
      violet: {
        gradient: "from-violet-500/20 via-violet-500/5 to-transparent",
        text: "text-violet-400",
        border: "border-violet-500/30",
        hoverBorder: "group-hover:border-violet-500/60",
        bg: "bg-violet-500/10",
        glow: "#8b5cf6",
        dot: "bg-violet-500",
        shadow: "group-hover:shadow-violet-500/20",
        barBg: "bg-violet-500",
      },
      blue: {
        gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
        text: "text-blue-400",
        border: "border-blue-500/30",
        hoverBorder: "group-hover:border-blue-500/60",
        bg: "bg-blue-500/10",
        glow: "#3b82f6",
        dot: "bg-blue-500",
        shadow: "group-hover:shadow-blue-500/20",
        barBg: "bg-blue-500",
      },
      amber: {
        gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
        text: "text-amber-400",
        border: "border-amber-500/30",
        hoverBorder: "group-hover:border-amber-500/60",
        bg: "bg-amber-500/10",
        glow: "#f59e0b",
        dot: "bg-amber-500",
        shadow: "group-hover:shadow-amber-500/20",
        barBg: "bg-amber-500",
      },
    }
    return configs[color as keyof typeof configs]
  }

  return (
    <section className="od-section sm:py-32 bg-[#09090b] relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Energy Flow Background Animation (SVG) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="energyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="energyGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 100,0 Q 300,300 100,600 T 500,1000"
            fill="none"
            stroke="url(#energyGrad1)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="hidden md:block"
          />
          <motion.path
            d="M 900,1000 Q 600,600 800,300 T 600,0"
            fill="none"
            stroke="url(#energyGrad2)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
            className="hidden lg:block"
          />
        </svg>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#06b6d4]/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#8b5cf6]/10 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="od-container px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 relative z-20 od-reveal">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#18181b] border border-[#27272a] od-subtitle text-sm font-semibold mb-6 shadow-xl"
          >
            <Cpu className="w-4 h-4 text-[#06b6d4]" />
            NOSSO ARSENAL TECNOLÓGICO
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black od-title mb-6 leading-tight text-white"
          >
            IAs <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]">Sincronizadas</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="od-subtitle max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed"
          >
            Usamos IA para apoiar pesquisa, conteúdo e leitura de dados, sempre com validação humana e foco no que faz sentido para o seu negócio.
          </motion.p>

          {/* Connection animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-3 mt-10"
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] animate-ping" />
              <div className="w-10 sm:w-16 h-[2px] bg-gradient-to-r from-emerald-500 to-violet-500 relative overflow-hidden">
                <div className="absolute top-0 bottom-0 w-full bg-white/50 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
              </div>
              <div className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_10px_#8b5cf6] animate-ping" style={{ animationDelay: '0.5s' }} />
              <div className="w-10 sm:w-16 h-[2px] bg-gradient-to-r from-violet-500 to-blue-500 relative overflow-hidden">
                <div className="absolute top-0 bottom-0 w-full bg-white/50 translate-x-[-100%] animate-[shimmer_2s_infinite_0.5s]" />
              </div>
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] animate-ping" style={{ animationDelay: '1s' }} />
              <div className="w-10 sm:w-16 h-[2px] bg-gradient-to-r from-blue-500 to-amber-500 relative overflow-hidden">
                <div className="absolute top-0 bottom-0 w-full bg-white/50 translate-x-[-100%] animate-[shimmer_2s_infinite_1s]" />
              </div>
              <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b] animate-ping" style={{ animationDelay: '1.5s' }} />
            </div>
          </motion.div>
        </div>

        {/* AI Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 od-reveal od-reveal-delay-2">
          {aiTools.map((tool, idx) => {
            const config = getColorConfig(tool.color)
            const Icon = tool.icon

            return (
              <Card3D key={idx} glowColor={config.glow}>
                <div
                  className={`relative bg-[#1e293b]/80 backdrop-blur-xl border ${config.border} ${config.hoverBorder} rounded-2xl p-6 lg:p-8 transition-all duration-500 ${config.shadow} group-hover:shadow-2xl overflow-hidden od-card-hover`}
                >
                  {/* Internal gradient overlay */}
                  <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${config.gradient} pointer-events-none`} />

                  {/* Animated corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 ${config.bg} rounded-bl-[40px] opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Header with Logo */}
                  <div className="flex items-start gap-5 mb-6 relative z-10">
                    {/* Logo with 3D effect */}
                    <div className="relative group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                      <div className={`absolute -inset-3 ${config.bg} rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition-all duration-500`} />
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl flex items-center justify-center border-2 border-white/20 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                        <img
                          src={tool.logo}
                          alt={`Logo do ${tool.name}, inteligência artificial usada para marketing digital na On Demand Digital`}
                          width={80}
                          height={80}
                          className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Name, Company & Icon */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl sm:text-2xl font-black od-title text-[#e2e8f0] group-hover:text-white transition-colors duration-300">
                          {tool.name}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${config.bg} ${config.text} border ${config.border}`}>
                          {tool.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${config.text}`} />
                        <span className={`text-xs ${config.text} font-medium`}>Ativa</span>
                        <div className={`w-1.5 h-1.5 rounded-full ${config.dot} animate-pulse`} />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#94a3b8] mb-5 leading-relaxed text-sm sm:text-base relative z-10">
                    {tool.description}
                  </p>

                  {/* Applications */}
                  <div className="relative z-10">
                    <p className="text-[10px] text-[#475569] uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                      <Network className="w-3 h-3" />
                      Aplicações Integradas
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {tool.applications.map((app, i) => (
                        <div key={i} className={`flex items-center gap-2 ${config.bg} rounded-lg px-3 py-2.5 border ${config.border} group-hover:border-opacity-60 transition-all duration-300`}>
                          <Sparkles className={`w-3 h-3 ${config.text} flex-shrink-0`} />
                          <span className="text-xs sm:text-sm text-[#cbd5e1] font-medium">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card3D>
            )
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 sm:mt-16 text-center od-reveal od-reveal-delay-3">
          <div className="inline-block bg-gradient-to-r from-[#1e293b] via-[#1e293b] to-[#1e293b] border border-[#06b6d4]/30 rounded-2xl p-6 sm:p-8 max-w-3xl backdrop-blur-xl">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Network className="w-6 h-6 text-[#06b6d4]" />
              <Sparkles className="w-5 h-5 text-[#8b5cf6]" />
            </div>
            <p className="od-subtitle text-sm sm:text-base lg:text-lg leading-relaxed">
              Todas as IAs são integradas através de <span className="text-[#06b6d4] font-bold">fluxos automatizados no n8n</span>,
              permitindo colaboração entre ferramentas e organização do processo de ponta a ponta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
