"use client"

import { useEffect, useState } from "react"
import { X, Zap } from "lucide-react"
import { trackEvent, GA_EVENTS } from "@/lib/ga-events"

interface ExitIntentPopupProps {
  onClose: () => void
}

export default function ExitIntentPopup({ onClose }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Check cooldown
      const lastShown = localStorage.getItem("exitIntentLastShown")
      const now = new Date().getTime()

      // 30 seconds cooldown (30000 ms)
      if (lastShown && now - parseInt(lastShown) < 30000) {
        return
      }

      // Detect if mouse is leaving towards top of page (exit intent)
      if (e.clientY <= 0) {
        setIsVisible(true)
        localStorage.setItem("exitIntentLastShown", now.toString())
        trackEvent(GA_EVENTS.EXIT_INTENT_SHOWN)
      }
    }

    // Only add listener if not on mobile
    if (typeof window !== "undefined" && !window.matchMedia("(max-width: 768px)").matches) {
      document.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    trackEvent(GA_EVENTS.EXIT_INTENT_CLOSED)
    onClose()
  }

  const handleCTA = () => {
    setIsVisible(false)
    trackEvent(GA_EVENTS.EXIT_INTENT_CONVERTED)
    // Link to WhatsApp
    window.open(
      "https://wa.me/5531996966686?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20personalizada.",
      "_blank"
    )
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#09090b] to-[#1e293b] border border-[#06b6d4]/30 rounded-2xl max-w-md w-full p-8 relative animate-in fade-in scale-in duration-300 shadow-2xl shadow-[#06b6d4]/20">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#94a3b8] hover:text-[#e2e8f0] transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#06b6d4]/20 rounded-full mb-4">
            <Zap className="w-7 h-7 text-[#06b6d4]" />
          </div>

          <h2 className="text-2xl font-bold text-[#e2e8f0] mb-3">Espera aí!</h2>

          <p className="text-[#94a3b8] mb-6 leading-relaxed">
            Antes de sair, confira nosso <span className="text-[#06b6d4] font-semibold">guia: "10 Passos para Marketing Digital Escalável"</span> para organizar presença, conteúdo e anúncios com mais consistência.
          </p>

          {/* Orientation */}
          <div className="bg-[#09090b] border border-[#ff006e]/30 rounded-lg p-4 mb-6">
            <p className="text-[#ff006e] font-bold text-sm mb-2">Atendimento direto</p>
            <p className="text-[#e2e8f0] font-bold text-lg">Orientação inicial e próximos passos</p>
            <p className="text-[#94a3b8] text-sm mt-1">Sem promessas, com clareza sobre o seu cenário</p>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <button
              onClick={handleCTA}
              className="w-full px-4 py-3 bg-gradient-to-r from-[#06b6d4] to-[#0891b2] text-white font-bold rounded-lg hover:from-[#0891b2] hover:to-[#06b6d4] transition-all duration-300 hover:scale-105"
            >
              Agendar Conversa
            </button>

            <button
              onClick={handleClose}
              className="w-full px-4 py-3 bg-transparent border border-[#334155]/50 text-[#94a3b8] font-semibold rounded-lg hover:border-[#94a3b8] hover:text-[#e2e8f0] transition-all duration-300"
            >
              Apenas Continuar Navegando
            </button>
          </div>

          <p className="text-xs text-[#64748b] mt-4">Sem compromisso - Resposta por WhatsApp - Diagnóstico inicial</p>
        </div>
      </div>
    </div>
  )
}

