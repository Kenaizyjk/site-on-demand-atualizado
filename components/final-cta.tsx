"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function FinalCTA() {
  return (
    <section id="contato" className="od-section sm:py-16 lg:py-20 bg-[#1e293b]">
      <div className="od-container px-4 text-center max-w-4xl">
        {/* Gradiente Aurora */}
        <div className="relative od-reveal">
          <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4]/20 to-[#0891b2]/20 blur-3xl"></div>

          <div className="relative bg-[#09090b] border border-[#334155]/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6">
              <span className="text-[#e2e8f0]">Pronto Para </span>
              <span className="text-[#06b6d4]">Organizar seu marketing?</span>
            </h2>

            <p className="od-subtitle text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Agende uma conversa inicial e entenda como estruturamos o trabalho de ponta a ponta
            </p>

            {/* Garantias */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 text-sm">
              <div className="flex items-center justify-center gap-2 text-[#94a3b8]">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#06b6d4]" />
                <span>Conversa inicial</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-[#94a3b8]">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#06b6d4]" />
                <span>Alinhamento claro</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-[#94a3b8]">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#06b6d4]" />
                <span>Retorno rpido</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/553196966686?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20conversa%20sobre%20marketing%20digital"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 bg-[#06b6d4] text-white font-bold text-base sm:text-lg rounded-lg hover:bg-[#0891b2] transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-600/60 active:scale-95"
            >
              <span>Agendar Conversa</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-all duration-300" />
            </a>

            <p className="text-[#94a3b8] text-xs sm:text-sm mt-5 sm:mt-6 px-2">
              Ou nos envie um email: <a href="mailto:daviluizjk0@gmail.com" className="text-[#06b6d4] hover:underline">daviluizjk0@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
