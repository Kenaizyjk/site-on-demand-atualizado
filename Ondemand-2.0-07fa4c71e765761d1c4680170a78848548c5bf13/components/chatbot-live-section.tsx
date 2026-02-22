"use client"

import { Bot, Sparkles, Zap, Send, Loader2, Brain, Shield, Clock, Cpu } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface Message {
  role: "user" | "assistant" | "system"
  content: string
}

const CHAT_SESSION_STORAGE_KEY = "ondemand_chat_session_id"

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "server-session"

  const existing = window.localStorage.getItem(CHAT_SESSION_STORAGE_KEY)
  if (existing) return existing

  const created = `chat_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`
  window.localStorage.setItem(CHAT_SESSION_STORAGE_KEY, created)
  return created
}

export default function ChatbotLiveSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Olá! Sou o assistente de IA da On Demand Digital. Como posso ajudá-lo hoje?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef(true)

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")

    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10s timeout

      const response = await fetch("/api/chat-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          context: "Cliente interessado em serviços de marketing digital",
          sessionId: getOrCreateSessionId(),
          history: messages
            .filter((msg) => msg.role === "user" || msg.role === "assistant")
            .map((msg) => ({ role: msg.role, content: msg.content })),
        }),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "system",
            content:
              "Desculpe, nosso assistente está com alta demanda no momento. Por favor, clique abaixo para falar diretamente comigo pelo WhatsApp.",
          },
        ])
        return
      }

      const data = await response.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          content: "Desculpe, nosso assistente está com alta demanda no momento. Por favor, clique abaixo para falar diretamente comigo pelo WhatsApp.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <section className="od-section sm:py-28 bg-[#09090b] relative overflow-hidden">
      {/* Advanced background effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />

        {/* Radial tech circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#06b6d4]/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#8b5cf6]/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#06b6d4]/10 rounded-full animate-pulse" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-[10%] w-80 h-80 bg-[#06b6d4]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#06b6d4]/5 rounded-full blur-3xl" />
      </div>

      <div className="od-container px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 od-reveal">
            {/* Tech Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#06b6d4]/15 via-[#8b5cf6]/10 to-[#06b6d4]/15 border border-[#06b6d4]/30 px-6 py-3 rounded-full mb-6 backdrop-blur-md">
              <div className="relative">
                <Brain className="w-5 h-5 text-[#06b6d4]" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] font-bold text-sm uppercase tracking-wider">
                Neural Engine Ativa
              </span>
              <Cpu className="w-4 h-4 text-[#8b5cf6]" />
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black od-title mb-6 leading-tight">
              <span className="text-[#e2e8f0]">Converse com Nosso </span>
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#06b6d4] bg-[length:200%_auto] animate-gradient">
                Assistente IA
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-[#94a3b8] mb-6 leading-relaxed max-w-3xl mx-auto">
              Chat em tempo real com nossa IA especializada em marketing digital. Tire dúvidas, peça orçamentos e descubra soluções
              <span className="text-[#06b6d4] font-semibold"> agora mesmo</span>!
            </p>

            {/* Live stats bar */}
            <div className="flex items-center justify-center gap-6 text-xs text-[#64748b]">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Online</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-[#06b6d4]" />
                <span>Resposta &lt; 3s</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-[#8b5cf6]" />
                <span>Criptografado</span>
              </div>
            </div>
          </div>

          {/* Chatbot Card */}
          <div className="relative group od-reveal od-reveal-delay-1">
            {/* Outer glow ring */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-[#06b6d4] via-[#8b5cf6] to-[#06b6d4] rounded-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 blur-sm" />

            {/* Corner accent dots */}
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#06b6d4] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#8b5cf6] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#8b5cf6] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#06b6d4] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Main Card */}
            <div className="relative bg-[#09090b]/90 backdrop-blur-xl border border-[#334155]/50 rounded-2xl p-6 sm:p-8 shadow-2xl od-card-hover">
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#334155]/50">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] rounded-full blur-sm opacity-60" />
                    <div className="relative w-12 h-12 bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[#e2e8f0] font-bold text-lg flex items-center gap-2">
                      Assistente IA
                      <span className="text-[10px] bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white px-2 py-0.5 rounded-full font-bold uppercase">v2.0</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-[#94a3b8]">Online agora</span>
                    </div>
                  </div>
                </div>

                {/* Powered by */}
                <div className="hidden sm:flex items-center gap-2 bg-[#1e293b] px-4 py-2 rounded-lg border border-[#334155]/50">
                  <Sparkles className="w-4 h-4 text-[#06b6d4]" />
                  <span className="text-xs text-[#94a3b8]">Powered by OpenAI</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div
                ref={chatContainerRef}
                className="h-[350px] sm:h-[400px] overflow-y-auto mb-4 space-y-4 pr-2 scrollbar-thin scrollbar-thumb-[#334155] scrollbar-track-transparent"
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
                  >
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`rounded-2xl px-4 py-3 max-w-lg ${message.role === "assistant"
                        ? "bg-[#1e293b] border border-[#334155]/50 rounded-tl-none"
                        : "bg-gradient-to-r from-[#06b6d4] to-[#0891b2] rounded-tr-none shadow-lg shadow-cyan-500/20"
                        }`}
                    >
                      <p
                        className={`text-sm leading-relaxed ${message.role === "user" ? "text-white" : "text-[#e2e8f0]"
                          }`}
                      >
                        {message.content}
                      </p>
                      {message.role === "system" && (
                        <a
                          href="https://wa.me/5531996966686?text=Ol%C3%A1!%20Tentei%20usar%20o%20chat%20do%20site%20mas%20n%C3%A3o%20consegui.%20Pode%20me%20ajudar%3F"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-3 px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg text-xs font-bold hover:bg-green-500/30 transition-all"
                        >
                          Falar no WhatsApp
                        </a>
                      )}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-[#1e293b] border border-[#334155]/50 rounded-2xl rounded-tl-none px-4 py-3">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-[#06b6d4] rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-[#06b6d4] rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                        <div className="w-2 h-2 bg-[#06b6d4] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="relative">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#06b6d4]/30 to-[#8b5cf6]/30 rounded-xl opacity-0 focus-within:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none" />
                <div className="relative flex gap-3 bg-[#1e293b] border border-[#334155]/50 rounded-xl p-2 focus-within:border-[#06b6d4]/50 transition-all duration-300">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua mensagem..."
                    disabled={isLoading}
                    className="flex-1 bg-transparent px-3 py-2 text-[#e2e8f0] placeholder:text-[#475569] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="bg-gradient-to-r from-[#06b6d4] to-[#0891b2] text-white p-3 rounded-lg hover:from-[#0891b2] hover:to-[#06b6d4] transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[48px]"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => setInput("Quais são os planos disponíveis?")}
                  disabled={isLoading}
                  className="text-xs bg-[#1e293b] border border-[#334155]/50 px-4 py-2.5 rounded-lg text-[#94a3b8] hover:text-[#06b6d4] hover:border-[#06b6d4]/50 hover:bg-[#06b6d4]/5 transition-all duration-300 disabled:opacity-50"
                >
                  Ver planos
                </button>
                <button
                  onClick={() => setInput("Como funciona a automação com IA?")}
                  disabled={isLoading}
                  className="text-xs bg-[#1e293b] border border-[#334155]/50 px-4 py-2.5 rounded-lg text-[#94a3b8] hover:text-[#8b5cf6] hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/5 transition-all duration-300 disabled:opacity-50"
                >
                  Automação IA
                </button>
                <button
                  onClick={() => setInput("Quero aumentar minhas vendas")}
                  disabled={isLoading}
                  className="text-xs bg-[#1e293b] border border-[#334155]/50 px-4 py-2.5 rounded-lg text-[#94a3b8] hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 disabled:opacity-50"
                >
                  Aumentar vendas
                </button>
              </div>
            </div>
          </div>

          {/* Tech Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 od-reveal od-reveal-delay-2">
            {[
              {
                icon: Zap,
                title: "Respostas Instantâneas",
                desc: "IA treinada responde em segundos",
                color: "cyan",
              },
              {
                icon: Clock,
                title: "Disponível 24/7",
                desc: "Atendimento automático ininterrupto",
                color: "violet",
              },
              {
                icon: Brain,
                title: "Aprendizado Contínuo",
                desc: "IA que evolui a cada interação",
                color: "cyan",
              },
              {
                icon: Shield,
                title: "100% Seguro",
                desc: "Conversas privadas e criptografadas",
                color: "violet",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              const isCyan = feature.color === "cyan"
              return (
                <div key={idx} className="relative group">
                  <div className={`absolute inset-0 ${isCyan ? 'bg-[#06b6d4]' : 'bg-[#8b5cf6]'}/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative bg-[#1e293b]/50 backdrop-blur-sm border border-[#334155]/30 rounded-xl p-5 text-center group-hover:border-[#06b6d4]/30 transition-all duration-300 od-card-hover">
                    <div className={`w-12 h-12 ${isCyan ? 'bg-[#06b6d4]/10' : 'bg-[#8b5cf6]/10'} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <Icon className={`w-6 h-6 ${isCyan ? 'text-[#06b6d4]' : 'text-[#8b5cf6]'}`} />
                    </div>
                    <h3 className="text-[#e2e8f0] font-bold mb-1 text-sm">{feature.title}</h3>
                    <p className="text-xs text-[#94a3b8]">{feature.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Gradient Animation CSS */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        .animate-gradient {
          animation: gradient 3s linear infinite;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thumb-\\[#334155\\]::-webkit-scrollbar-thumb {
          background-color: #334155;
          border-radius: 3px;
        }
        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background-color: transparent;
        }
      `}</style>
    </section>
  )
}

