"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle2,
  MessageSquare,
  Workflow,
  Bot,
  BarChart3,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function AutomationDemoPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: "Automation Lead",
          source: "automation_demo",
          magnet_type: "automation_guide",
        }),
      })

      if (response.ok) {
        setEmail("")
        alert("Guia enviado para seu e-mail!")
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

      {/* Hero */}
      <section className="od-section pt-32 pb-16 px-4 border-b border-[#334155]/30">
        <div className="od-container max-w-4xl text-center od-reveal">
          <Badge className="mb-4 bg-[#06b6d4]/20 text-[#06b6d4] border-[#06b6d4]/50">
            Automação aplicada
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[#e2e8f0]">Automação para </span>
            <span className="text-[#06b6d4]">organizar atendimento e vendas</span>
          </h1>

          <p className="text-xl text-[#94a3b8] mb-8 max-w-2xl mx-auto">
            Estruturamos fluxos para reduzir trabalho manual, organizar contatos e apoiar o time comercial com mais clareza.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-6 bg-[#06b6d4] hover:bg-[#0891b2] text-white text-lg font-semibold rounded-lg shadow-lg shadow-cyan-500/50">
              Ver demonstração <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 border-[#334155] hover:bg-[#1e293b] text-[#e2e8f0] text-lg font-semibold rounded-lg"
            >
              Falar com a equipe
            </Button>
          </div>
        </div>
      </section>

      {/* Problemas e Soluções */}
      <section className="od-section py-16 px-4 border-b border-[#334155]/30">
        <div className="od-container max-w-4xl od-reveal">
          <h2 className="text-3xl font-bold mb-8 text-center">O que a automação resolve na prática</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[#1e293b] border-[#334155]/30">
              <CardHeader>
                <CardTitle className="text-[#e2e8f0]">Problemas comuns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-red-500">?</span>
                  <p className="text-[#94a3b8]">Respostas lentas e atendimento inconsistente</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500">?</span>
                  <p className="text-[#94a3b8]">Perda de informações durante o contato</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-500">?</span>
                  <p className="text-[#94a3b8]">Processos repetitivos que consomem tempo</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1e293b] border-[#334155]/30">
              <CardHeader>
                <CardTitle className="text-[#06b6d4]">Como organizamos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#06b6d4] flex-shrink-0" />
                  <p className="text-[#94a3b8]">Fluxo claro de atendimento e qualificação</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#06b6d4] flex-shrink-0" />
                  <p className="text-[#94a3b8]">Registros consistentes no CRM</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#06b6d4] flex-shrink-0" />
                  <p className="text-[#94a3b8]">Rotinas automatizadas para tarefas repetitivas</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="od-section py-16 px-4 border-b border-[#334155]/30">
        <div className="od-container max-w-4xl od-reveal">
          <h2 className="text-3xl font-bold mb-12 text-center">Como funciona o fluxo</h2>

          <div className="space-y-8">
            {[
              {
                title: "Lead chega no site",
                text: "Capturamos as informações essenciais e registramos no CRM.",
                icon: MessageSquare,
              },
              {
                title: "Chatbot orienta o atendimento",
                text: "O chatbot coleta contexto e encaminha para o time quando necessário.",
                icon: Bot,
              },
              {
                title: "Workflow organiza o processo",
                text: "As etapas são automatizadas conforme regras definidas.",
                icon: Workflow,
              },
              {
                title: "Acompanhamento e ajustes",
                text: "Monitoramos o fluxo e ajustamos para melhorar a experiência.",
                icon: BarChart3,
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#06b6d4]/20 text-[#06b6d4]">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#e2e8f0] mb-2">{item.title}</h3>
                  <p className="text-[#94a3b8]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="od-section py-16 px-4 border-b border-[#334155]/30">
        <div className="od-container max-w-4xl od-reveal">
          <h2 className="text-3xl font-bold mb-12 text-center">Tecnologias que usamos</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[#1e293b] border-[#334155]/30">
              <CardHeader>
                <CardTitle className="text-[#e2e8f0]">Chatbot IA</CardTitle>
                <CardDescription className="text-[#94a3b8]">Atendimento guiado e organizado</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-[#1e293b] border-[#334155]/30">
              <CardHeader>
                <CardTitle className="text-[#e2e8f0]">Workflows (n8n)</CardTitle>
                <CardDescription className="text-[#94a3b8]">Integrações e rotinas automatizadas</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-[#1e293b] border-[#334155]/30">
              <CardHeader>
                <CardTitle className="text-[#e2e8f0]">Email e WhatsApp</CardTitle>
                <CardDescription className="text-[#94a3b8]">Comunicação recorrente e controlada</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-[#1e293b] border-[#334155]/30">
              <CardHeader>
                <CardTitle className="text-[#e2e8f0]">Analytics</CardTitle>
                <CardDescription className="text-[#94a3b8]">Métricas essenciais para decisão</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Guia */}
      <section className="py-20 px-4 border-b border-[#334155]/30">
        <div className="od-container max-w-4xl text-center od-reveal">
          <h2 className="text-4xl font-bold mb-6">Receba o Guia de Automação</h2>
          <p className="text-xl text-[#94a3b8] mb-8 max-w-2xl mx-auto">
            Um guia direto para entender o que automatizar primeiro e como organizar seu processo.
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

          <p className="text-sm text-[#64748b] mt-4">
            Sem spam. Respeito  sua privacidade.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="od-section py-16 px-4 border-b border-[#334155]/30">
        <div className="od-container max-w-4xl od-reveal">
          <h2 className="text-3xl font-bold mb-12 text-center">Perguntas Frequentes</h2>

          <div className="space-y-6">
            {[
              {
                q: "Isso serve para qualquer neg?cio?",
                a: "Funciona melhor quando existe rotina comercial e vontade de organizar processos.",
              },
              {
                q: "Preciso trocar meu CRM?",
                a: "Nem sempre. Avaliamos as integraes possveis com o que voc j usa.",
              },
              {
                q: "A automação substitui o time?",
                a: "No. Ela organiza o fluxo e libera tempo para decises e atendimentos mais qualificados.",
              },
              {
                q: "Quanto tempo leva a implementao?",
                a: "Depende do escopo. O importante  comear simples e evoluir com consistncia.",
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
          <h2 className="text-4xl font-bold mb-4">Quer organizar seu processo?</h2>
          <p className="text-lg mb-8 opacity-90">
            Podemos conversar e mapear o melhor caminho para o seu contexto.
          </p>
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



