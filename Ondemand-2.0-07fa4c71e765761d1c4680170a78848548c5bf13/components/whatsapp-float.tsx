"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/contact-info"
import { trackEvent, GA_EVENTS } from "@/lib/ga-events"

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mostrar após 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  const whatsappLink = getWhatsAppLink(WHATSAPP_MESSAGES.general)

  return (
    <>
      {/* Botão Flutuante */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent(GA_EVENTS.WHATSAPP_CLICKED, { location: "floating_button", device: "desktop" })}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Falar no WhatsApp"
      >
        <div className="relative">
          {/* Botão */}
          <div className="relative">
            {/* Pulso animado */}
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>

            {/* Botão principal */}
            <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/50 hover:scale-110 transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-white" />

              {/* Badge de notificação */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">1</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}
