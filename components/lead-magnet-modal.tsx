"use client"

import { useState } from "react"
import { X, Download, CheckCircle2 } from "lucide-react"
import { trackEvent, GA_EVENTS } from "@/lib/ga-events"

interface LeadMagnetModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LeadMagnetModal({ isOpen, onClose }: LeadMagnetModalProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Track form start
      trackEvent(GA_EVENTS.FORM_STARTED, {
        form_name: "lead_magnet_checklist",
      })

      // Submit to Brevo API (via our edge function)
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          source: "lead_magnet_modal",
          magnet_type: "checklist_10_passos",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)

        // Track successful form submission
        trackEvent(GA_EVENTS.FORM_SUBMITTED, {
          form_name: "lead_magnet_checklist",
          email_captured: email,
        })

        // Track download
        trackEvent(GA_EVENTS.LEAD_MAGNET_DOWNLOADED, {
          magnet_type: "checklist_10_passos",
          value: "marketing_guide",
        })

        // Store in localStorage to avoid showing again
        localStorage.setItem("lead_magnet_submitted", "true")
        localStorage.setItem("lead_magnet_email", email)

        // Close modal after 3 seconds
        setTimeout(() => {
          onClose()
          setIsSubmitted(false)
          setEmail("")
          setName("")
        }, 3000)
      } else {
        console.error("Failed to submit")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      trackEvent(GA_EVENTS.FORM_ERROR, {
        form_name: "lead_magnet_checklist",
        error: String(error),
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#09090b] border border-[#334155]/50 rounded-2xl max-w-md w-full p-8 relative animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#94a3b8] hover:text-[#e2e8f0] transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#06b6d4]/20 rounded-lg flex items-center justify-center">
                  <Download className="w-6 h-6 text-[#06b6d4]" />
                </div>
                <h2 className="text-2xl font-bold text-[#e2e8f0]">
                  Guia Gratuito
                </h2>
              </div>
              <p className="text-[#94a3b8] font-semibold mb-2">
                10 Passos para Marketing Digital Escalável
              </p>
              <p className="text-sm text-[#94a3b8]">
                Descubra o checklist que nossos clientes usam para organizar processos e decisões com mais clareza
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-[#1e293b]/50 rounded-lg p-4 mb-6 border border-[#334155]/30">
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-[#e2e8f0]">
                  <CheckCircle2 className="w-4 h-4 text-[#06b6d4] mt-0.5 flex-shrink-0" />
                  <span>Estrutura completa de funil de vendas</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#e2e8f0]">
                  <CheckCircle2 className="w-4 h-4 text-[#06b6d4] mt-0.5 flex-shrink-0" />
                  <span>10 táticas de automação práticas</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#e2e8f0]">
                  <CheckCircle2 className="w-4 h-4 text-[#06b6d4] mt-0.5 flex-shrink-0" />
                  <span>Passo a passo implementação</span>
                </li>
              </ul>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#e2e8f0] mb-2">
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  required
                  className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155]/50 rounded-lg text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:border-[#06b6d4] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#e2e8f0] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155]/50 rounded-lg text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:border-[#06b6d4] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-3 bg-gradient-to-r from-[#06b6d4] to-[#0891b2] text-white font-bold rounded-lg hover:from-[#0891b2] hover:to-[#06b6d4] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Enviando..." : "Baixar Checklist Grátis"}
              </button>

              <p className="text-xs text-[#64748b] text-center">
                Seus dados são seguros. Nunca compartilhamos email.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#06b6d4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#06b6d4]" />
            </div>
            <h3 className="text-xl font-bold text-[#e2e8f0] mb-2">
              Sucesso!
            </h3>
            <p className="text-[#94a3b8] mb-4">
              Confira seu email para o guia completo. Vamos enviar mais dicas em breve!
            </p>
            <p className="text-sm text-[#64748b]">
              Redirecionando em 3 segundos...
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

