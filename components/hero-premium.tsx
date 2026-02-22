"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function HeroPremium() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Cinemactic scroll effects
  const { scrollY } = useScroll()
  const heroContentY = useTransform(scrollY, [0, 800], [0, 150])
  const heroContentOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.1])
  const energyLinesY = useTransform(scrollY, [0, 800], [0, -100])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(9, 9, 11, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 182, 212, ${particle.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section
      id="home"
      className="od-section relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#09090b]"
    >
      {/* Animated Canvas Background */}
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.6, scale: bgScale }}
      />

      {/* Background Energy Lines (Cinematic) */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center"
        style={{ y: energyLinesY }}
      >
        <div className="w-px h-[200%] bg-gradient-to-b from-transparent via-[#06b6d4] to-transparent absolute left-[20%] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="w-px h-[200%] bg-gradient-to-b from-transparent via-[#8b5cf6] to-transparent absolute left-[50%] animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="w-px h-[200%] bg-gradient-to-b from-transparent via-[#06b6d4] to-transparent absolute right-[20%] animate-pulse" style={{ animationDuration: '5s' }} />
      </motion.div>

      {/* Gradiente Aurora Radial em Cyan - MAIS INTENSO */}
      <motion.div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/30 via-[#09090b] to-[#8b5cf6]/20" style={{ scale: bgScale }}></motion.div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#06b6d4]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#8b5cf6]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <motion.div
        className="relative z-10 od-container px-4 py-8 sm:py-12 w-full text-center"
        style={{ y: heroContentY, opacity: heroContentOpacity }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Badge Superior - APENAS DESKTOP */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden sm:inline-flex items-center gap-3 bg-[#18181b]/80 border border-[#27272a] px-6 py-2.5 rounded-full mb-10 backdrop-blur-md shadow-lg shadow-black/50 hover:border-[#06b6d4]/50 transition-colors duration-300"
          >
            <div className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
            <span className="text-[#a1a1aa] font-medium text-sm tracking-wide">
              Estratégia clara, execução consistente e foco no que importa
            </span>
          </motion.div>

          {/* Headline Principal - MOBILE FIRST */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black od-title mb-6 sm:mb-8 leading-[0.9] tracking-tighter px-2 uppercase"
          >
            <span className="block text-white">Marketing</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] via-cyan-300 to-[#8b5cf6]">
              com Método
            </span>
          </motion.h1>

          {/* Subttulo - MOBILE OPTIMIZED */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl od-subtitle mb-10 sm:mb-14 font-medium leading-relaxed max-w-3xl mx-auto px-4"
          >
            Mais clareza, menos ruído. Diagnóstico, execução e otimização contínua para estruturar seu marketing com responsabilidade e foco no que traz valor real.
          </motion.p>

          {/* CTA Principal - MOBILE OPTIMIZED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 px-4"
          >
            <a
              href="https://wa.me/553196966686?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20entender%20como%20voc%C3%AAs%20trabalham."
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-[#06b6d4] to-[#0891b2] text-white font-bold text-base sm:text-lg rounded-lg hover:from-[#0891b2] hover:to-[#06b6d4] transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-600/70 hover:scale-105 transform active:scale-95"
            >
              <span>Agendar Conversa</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-all duration-300" />
            </a>

            <a
              href="#servicos"
              className="px-8 py-4 sm:px-10 sm:py-5 bg-[#09090b] border border-[#27272a] text-[#f8fafc] font-bold text-base sm:text-lg rounded-lg hover:bg-[#18181b] hover:border-[#06b6d4]/50 transition-all duration-300 flex items-center justify-center transform active:scale-95"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Ver Como Trabalhamos
            </a>
          </motion.div>

          {/* Social Proof Simples / Features Reta */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mt-8 text-sm sm:text-base text-[#a1a1aa] font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#06b6d4]" />
              <span>Processo claro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#06b6d4]" />
              <span>Automação aplicada ao dia a dia</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#06b6d4]" />
              <span>Métricas acompanhadas</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* CSS para animao do gradiente */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }
        .animate-gradient {
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  )
}
