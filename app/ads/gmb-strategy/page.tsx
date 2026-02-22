"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function GMBLandingPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    try {
      // GA event
      if (window.gtag) {
        window.gtag("event", "generate_lead", {
          event_category: "landing_page",
          event_label: "gmb_strategy",
          value: email,
        })
      }

      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: "GMB Lead",
          source: "gmb_landing",
          magnet_type: "gmb_strategy",
        }),
      })

      if (response.ok) {
        setEmail("")
        alert("Relatório enviado para seu email!")
      }
    } catch (error) {
      console.error("Erro ao enviar:", error)
      alert("Erro ao enviar. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="od-page">
      <Navigation />

      {/* Hero Section */}
      <section className="od-section pt-32 pb-16 px-4 border-b border-[#334155]/30">
        <div className="od-container max-w-4xl text-center od-reveal">
          <Badge className="mb-4 bg-[#06b6d4]/20 text-[#06b6d4] border-[#06b6d4]/50">
            Estratégia Aplicada
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#e2e8f0]">Melhore sua </span>
            <span className="text-[#06b6d4]">presença local</span>
            <span className="text-[#e2e8f0]"> com Google Meu Negócio</span>
          </h1>

          <p className="text-xl text-[#94a3b8] mb-8 max-w-2xl mx-auto">
            Organize seu perfil, reputação e conteúdo para melhorar visibilidade e facilitar o contato com clientes locais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-6 bg-[#06b6d4] hover:bg-[#0891b2] text-white text-lg font-semibold rounded-lg shadow-lg shadow-cyan-500/50">
              Começar Agora <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 border-[#334155] hover:bg-[#1e293b] text-[#e2e8f0] text-lg font-semibold rounded-lg"
            >
              Ver Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="od-section py-16 px-4 border-b border-[#334155]/30">
        <div className="od-container max-w-4xl od-reveal">
          <h2 className="text-3xl font-bold mb-12 text-center">Checklist Essencial de GMB</h2>

          <div className="bg-[#1e293b] border border-[#334155]/30 rounded-lg p-8 space-y-4">
            {[
              "Perfil do Google Meu Negócio preenchido",
              "Fotos do negócio com boa qualidade",
              "Categoria correta selecionada",
              "Descrição clara e objetiva",
              "Horários atualizados",
              "Contato (WhatsApp e telefone) configurado",
              "Respostas às avaliações",
              "Postagens recorrentes",
              "Fotos reais do espaço e equipe",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 rounded accent-[#06b6d4]" disabled />
                <label className="text-[#94a3b8]">{item}</label>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#64748b] mt-6">
            Faltam itens? Isso significa oportunidade de organização e melhoria contínua.
          </p>
        </div>
      </section>

      {/* CTA Principal */}
      <section className="py-20 px-4 border-b border-[#334155]/30">
        <div className="od-container max-w-4xl text-center od-reveal">
          <h2 className="text-4xl font-bold mb-6">Receba o Guia de GMB</h2>
          <p className="text-xl text-[#94a3b8] mb-8 max-w-2xl mx-auto">
            Baixe nosso guia e organize seu perfil com passos claros e exemplos práticos.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2">
            <Input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#1e293b] border-[#334155] text-[#e2e8f0] placeholder:text-[#64748b]"
            />
            <Button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-[#06b6d4] hover:bg-[#0891b2] text-white font-semibold rounded-lg"
            >
              {loading ? "Enviando..." : "Baixar"}
            </Button>
          </form>

          <p className="text-sm text-[#64748b] mt-4">Sem spam. Respeito à sua privacidade.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="od-section py-16 px-4 border-b border-[#334155]/30">
        <div className="od-container max-w-4xl od-reveal">
          <h2 className="text-3xl font-bold mb-12 text-center">Perguntas Frequentes</h2>

          <div className="space-y-6">
            {[
              {
                q: "Quanto tempo leva para ver mudanças?",
                a: "Depende do seu ponto de partida e da consistência de execução. O foco é construir base sólida antes de comparar resultados.",
              },
              {
                q: "Preciso investir em anúncios?",
                a: "Não necessariamente. O GMB trabalha a presença orgânica, e anúncios podem complementar conforme o seu objetivo.",
              },
              {
                q: "Funciona para qualquer segmento?",
                a: "Funciona melhor para negócios locais com atendimento presencial ou regional. Avaliamos caso a caso.",
              },
              {
                q: "Posso combinar com Google Ads?",
                a: "Sim. É comum alinhar presença orgânica e mídia paga quando há orçamento e estrutura.",
              },
              {
                q: "O que define a qualidade do resultado?",
                a: "Perfil bem estruturado, reviews consistentes, conteúdo atualizado e atendimento organizado.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="bg-[#1e293b] border-[#334155]/30">
                <CardHeader>
                  <CardTitle className="text-[#e2e8f0]">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#94a3b8]">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0891b2] to-[#06b6d4] text-[#09090b]">
        <div className="od-container max-w-4xl text-center od-reveal">
          <h2 className="text-4xl font-bold mb-4">Quer organizar sua presença local?</h2>
          <p className="text-lg mb-8 opacity-90">Podemos orientar os próximos passos com base no seu contexto.</p>
          <Link
            href="/#contato"
            className="inline-block px-8 py-4 bg-[#09090b] text-[#06b6d4] font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Agendar Conversa
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
