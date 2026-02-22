"use client"

import { useState, useEffect, useCallback } from "react"
import { X, Cookie, Shield, Settings } from "lucide-react"
import Link from "next/link"
import { trackEvent, GA_EVENTS } from "@/lib/ga-events"

/**
 * LGPD-Compliant Cookie Consent Banner
 *
 * Features:
 * - Granular cookie preferences (necessary, analytics, marketing)
 * - LocalStorage persistence
 * - Links to privacy policy
 * - Respects user choices for GA
 */

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always enabled
    analytics: false,
    marketing: false,
  })

  const applyConsent = useCallback((prefs: typeof preferences) => {
    // Apply analytics consent to Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: prefs.analytics ? "granted" : "denied",
        ad_storage: prefs.marketing ? "granted" : "denied",
      })
    }
  }, [])

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Show banner after 1 second delay
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent)
        setPreferences(saved)
        applyConsent(saved)
      } catch (e) {
        console.error("Failed to parse cookie consent:", e)
      }
    }
  }, [applyConsent])

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs))
    applyConsent(prefs)
    setShowBanner(false)
    setShowPreferences(false)
  }

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    savePreferences(allAccepted)
    trackEvent(GA_EVENTS.COOKIE_ACCEPTED_ALL)
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    setPreferences(onlyNecessary)
    savePreferences(onlyNecessary)
    trackEvent(GA_EVENTS.COOKIE_REJECTED_ALL)
  }

  const handleSavePreferences = () => {
    savePreferences(preferences)
    trackEvent(GA_EVENTS.COOKIE_PREFERENCES_SAVED, {
      analytics: preferences.analytics,
      marketing: preferences.marketing,
    })
  }

  if (!showBanner) return null

  return (
    <>
      {/* Main Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#0D1117] border-t-2 border-[#30363D] shadow-2xl animate-slide-up">
        <div className="od-container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Icon & Text */}
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-[#ff006e]/20 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-[#ff006e]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#00d966]" />
                  Privacidade e Cookies
                </h3>
                <p className="text-sm text-[#E6E6FA]/80 leading-relaxed mb-2">
                  Usamos cookies para melhorar sua experiência, analisar tráfego e personalizar conteúdo.
                  Ao clicar em "Aceitar Todos", você concorda com nosso uso de cookies conforme nossa{" "}
                  <Link href="/politica-de-privacidade" className="text-[#00d9ff] hover:underline">
                    Política de Privacidade
                  </Link>.
                </p>
                <p className="text-xs text-[#E6E6FA]/60">
                  De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a controlar seus dados.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 bg-[#161B22] border border-[#30363D] text-white rounded-lg hover:border-[#00d9ff] transition flex items-center justify-center gap-2 text-sm font-medium"
              >
                <Settings className="w-4 h-4" />
                Preferências
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 bg-[#161B22] border border-[#30363D] text-white rounded-lg hover:border-[#ff006e] transition text-sm font-medium"
              >
                Rejeitar Todos
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 bg-gradient-to-r from-[#00d966] to-[#00d9ff] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-[#00d966]/50 transition text-sm"
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0D1117] border-2 border-[#30363D] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="p-6 border-b border-[#30363D] flex items-center justify-between sticky top-0 bg-[#0D1117] z-10">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Settings className="w-6 h-6 text-[#00d9ff]" />
                Preferências de Cookies
              </h2>
              <button
                onClick={() => setShowPreferences(false)}
                className="w-8 h-8 rounded-full bg-[#161B22] border border-[#30363D] flex items-center justify-center hover:border-[#ff006e] transition"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <p className="text-[#E6E6FA]/80 leading-relaxed">
                Gerenciamos cookies para melhorar sua experiência. Você pode escolher quais tipos de cookies deseja permitir.
              </p>

              {/* Necessary Cookies */}
              <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">Cookies Necessários</h3>
                    <p className="text-sm text-[#E6E6FA]/70">
                      Essenciais para o funcionamento do site. Não podem ser desativados.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <span className="text-sm text-[#00d966] font-semibold">Sempre Ativo</span>
                    <div className="w-12 h-6 bg-[#00d966] rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <ul className="text-xs text-[#E6E6FA]/60 space-y-1 mt-3">
                  <li>Autenticação e segurança</li>
                  <li>Preferências de idioma</li>
                  <li>Carrinho de compras (se aplicável)</li>
                </ul>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">Cookies de Análise</h3>
                    <p className="text-sm text-[#E6E6FA]/70">
                      Nos ajudam a entender como os visitantes usam o site. Dados anônimos e agregados.
                    </p>
                  </div>
                  <button
                    onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                    className="ml-4 flex-shrink-0"
                  >
                    <div
                      className={`w-12 h-6 rounded-full flex items-center transition ${
                        preferences.analytics
                          ? "bg-[#00d966] justify-end"
                          : "bg-[#30363D] justify-start"
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </button>
                </div>
                <ul className="text-xs text-[#E6E6FA]/60 space-y-1 mt-3">
                  <li>Google Analytics 4</li>
                  <li>Páginas mais visitadas</li>
                  <li>Tempo de permanência</li>
                </ul>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">Cookies de Marketing</h3>
                    <p className="text-sm text-[#E6E6FA]/70">
                      Usados para rastrear visitantes e exibir anúncios relevantes. Podem ser usados por parceiros.
                    </p>
                  </div>
                  <button
                    onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                    className="ml-4 flex-shrink-0"
                  >
                    <div
                      className={`w-12 h-6 rounded-full flex items-center transition ${
                        preferences.marketing
                          ? "bg-[#00d966] justify-end"
                          : "bg-[#30363D] justify-start"
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </button>
                </div>
                <ul className="text-xs text-[#E6E6FA]/60 space-y-1 mt-3">
                  <li>Meta Pixel / Facebook Ads</li>
                  <li>Google Ads Remarketing</li>
                  <li>Personalização de anúncios</li>
                </ul>
              </div>

              <div className="p-4 bg-[#00d9ff]/10 border-l-4 border-[#00d9ff] rounded">
                <p className="text-sm text-[#E6E6FA]/90">
                  <strong className="text-white">Seus Direitos (LGPD):</strong> Você pode solicitar acesso, correção
                  ou exclusão de seus dados a qualquer momento através do{" "}
                  <Link href="/politica-de-privacidade" className="text-[#00d9ff] hover:underline">
                    nosso canal de privacidade
                  </Link>.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[#30363D] flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 bg-[#0D1117] sticky bottom-0">
              <button
                onClick={handleRejectAll}
                className="px-6 py-2 bg-[#161B22] border border-[#30363D] text-white rounded-lg hover:border-[#ff006e] transition font-medium"
              >
                Rejeitar Todos
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2 bg-gradient-to-r from-[#00d966] to-[#00d9ff] text-white font-bold rounded-lg hover:shadow-lg hover:shadow-[#00d966]/50 transition"
              >
                Salvar Preferências
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

