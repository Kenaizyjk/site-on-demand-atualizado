"use client"

import { Quote, Sparkles, TrendingUp, Users, Linkedin, Instagram } from "lucide-react"

export default function FounderStory() {
  return (
    <section className="od-section sm:py-16 lg:py-24 bg-[#09090b] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/10 rounded-full blur-3xl"></div>

      <div className="od-container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Side - Story Content */}
          <div className="order-2 lg:order-1 od-reveal">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#06b6d4]/10 border border-[#06b6d4]/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#06b6d4]" />
              <span className="text-[#06b6d4] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                Minha História
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 sm:mb-6 leading-tight">
              <span className="text-[#e2e8f0]">Da Frustração à </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]">
                Inovação
              </span>
            </h2>

            {/* Quote Icon */}
            <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#06b6d4]/30 mb-3 sm:mb-4" />

            {/* Story Paragraphs */}
            <div className="space-y-3 sm:space-y-4 text-[#94a3b8] text-base sm:text-lg leading-relaxed">
              <p>
                Comecei minha jornada no marketing digital como muitos: fazendo tudo manualmente,
                gastando horas em tarefas repetitivas e vendo resultados medianos.
              </p>

              <p className="text-[#e2e8f0] font-semibold">
                Mas eu sabia que tinha que existir uma forma melhor.
              </p>

              <p>
                Foi quando descobri o poder da automação e da inteligência artificial.
                Comecei a integrar ferramentas, criar fluxos automatizados e usar IAs para
                potencializar estratégias.
              </p>

              <p>
                <span className="text-[#06b6d4] font-semibold">Os resultados foram consistentes:</span>
                {" "}processos mais organizados, atendimento mais ágil e decisões guiadas por dados.
              </p>

              <p className="text-[#e2e8f0]">
                Hoje, minha missão é ajudar outras empresas a alcançarem esses mesmos resultados,
                combinando tecnologia de ponta com estratégias comprovadas de marketing digital.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://linkedin.com/in/daviluizjk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077b5]/10 border border-[#0077b5]/30 text-[#0077b5] rounded-lg hover:bg-[#0077b5]/20 transition-all duration-300 text-sm font-medium"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://instagram.com/daviluizjk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#E4405F]/10 border border-[#E4405F]/30 text-[#E4405F] rounded-lg hover:bg-[#E4405F]/20 transition-all duration-300 text-sm font-medium"
              >
                <Instagram className="w-4 h-4" />
                @daviluizjk
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-12 mt-10 pt-10 border-t border-[#334155]/50">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-[#06b6d4] flex-shrink-0" />
                  <div className="text-2xl font-black text-[#06b6d4]">Foco</div>
                </div>
                <div className="text-sm text-[#94a3b8]">Crescimento Sustentável</div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-[#8b5cf6] flex-shrink-0" />
                  <div className="text-2xl font-black text-[#8b5cf6]">Experiência</div>
                </div>
                <div className="text-sm text-[#94a3b8]">Projetos Acompanhados</div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-[#06b6d4] flex-shrink-0" />
                  <div className="text-2xl font-black text-[#06b6d4]">Presença</div>
                </div>
                <div className="text-sm text-[#94a3b8]">Atuação Contínua</div>
              </div>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end od-reveal od-reveal-delay-2">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#06b6d4]/20 to-[#8b5cf6]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

              {/* Photo Container */}
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border-4 border-[#06b6d4]/30 shadow-2xl shadow-cyan-500/20 group-hover:border-[#06b6d4]/50 transition-all duration-300">
                <img
                  src="https://i.ibb.co/HDD72X2D/f54529e5-caf7-4d00-8130-7de0af4bde00.jpg"
                  alt="Davi Honorato, fundador da On Demand Digital, especialista em marketing digital e automação com IA em Belo Horizonte MG"
                  className="w-full h-full object-cover object-center"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/60 via-transparent to-transparent"></div>

                {/* Name Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="text-white font-bold text-xl mb-1">Davi Honorato</div>
                  <div className="text-[#06b6d4] text-sm font-semibold">Fundador & Especialista em IA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
