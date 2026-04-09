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
              <span className="text-[#e2e8f0]">Já vi muita empresa boa </span>
              <span className="text-[#06b6d4]">
                perder cliente
              </span>
              <span className="text-[#e2e8f0]"> por causa disso.</span>
            </h2>

            {/* Quote Icon */}
            <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#06b6d4]/30 mb-3 sm:mb-4" />

            {/* Story Paragraphs */}
            <div className="space-y-4 sm:space-y-5 text-[#94a3b8] text-base sm:text-lg leading-relaxed">
              <p>
                Restaurante com boa comida — mesa vazia no almoço. Clínica com ótimo atendimento — agenda
                pela metade. Loja com produto bom — que ninguém acha no Google.
              </p>

              <p className="text-[#e2e8f0] font-semibold">
                Isso não é azar. É falta de presença digital no lugar certo.
              </p>

              <p>
                Abri a On Demand Digital pra resolver exatamente isso: colocar em ordem o que está errado,
                atrair o cliente que já está procurando o que você oferece e medir o resultado de verdade.
              </p>

              <p>
                <span className="text-[#06b6d4] font-semibold">Sem promessa grande. Sem relatório bonito que não significa nada.</span>
                {" "}Você fala diretamente com quem executa — do diagnóstico à entrega.
              </p>

              <p className="text-[#e2e8f0] border-l-2 border-[#06b6d4]/40 pl-4 italic">
                &ldquo;A maioria dos donos de negócio que me procura acha que o problema é o produto.
                Quase sempre, é a visibilidade.&rdquo;
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
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[#334155]/50">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-1.5">
                  <TrendingUp className="w-4 h-4 text-[#06b6d4] flex-shrink-0" />
                  <div className="text-2xl sm:text-3xl font-black text-[#06b6d4]">30+</div>
                </div>
                <div className="text-xs sm:text-sm text-[#94a3b8] leading-snug">negócios locais atendidos em BH</div>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-1.5">
                  <Users className="w-4 h-4 text-white flex-shrink-0" />
                  <div className="text-2xl sm:text-3xl font-black text-white">1:1</div>
                </div>
                <div className="text-xs sm:text-sm text-[#94a3b8] leading-snug">você fala direto com quem executa</div>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#06b6d4] flex-shrink-0" />
                  <div className="text-2xl sm:text-3xl font-black text-[#06b6d4]">0</div>
                </div>
                <div className="text-xs sm:text-sm text-[#94a3b8] leading-snug">intermediários ou repassadores</div>
              </div>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end od-reveal od-reveal-delay-2">
            <div className="relative group">
              {/* Photo Container */}
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl shadow-black/40 transition-all duration-300">
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
