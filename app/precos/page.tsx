import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PricingTableStrategic from "@/components/pricing-table-strategic"
import Link from "next/link"
import { ArrowLeft, Zap, TrendingUp, Shield, Users, MessageSquare, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Planos | On Demand Digital - Automação de Marketing",
  description: "Planos de automação de marketing sob consulta, com escopo definido após diagnstico. Compare as opções e entenda o que faz sentido para o seu momento.",
  keywords: [
    "preços automação marketing",
    "planos marketing digital",
    "automação whatsapp preço",
    "quanto custa automação",
    "roi marketing digital",
    "garantia de leads",
    "plano growth marketing",
    "automação empresarial"
  ],
  openGraph: {
    title: "Planos - On Demand Digital",
    description: "Planos de automação com escopo definido após diagnstico. Compare as opções e entenda o processo.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planos - On Demand Digital",
    description: "Automação de marketing com escopo definido após diagnstico.",
  },
  alternates: {
    canonical: "https://ondemanddigital.com.br/precos"
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function PrecosPage() {
  return (
    <main className="od-page">
      <Navigation />

      {/* Header Breadcrumb */}
      <div className="border-b border-gray-800 bg-[#161B22]">
        <div className="od-container px-4 py-6 od-reveal">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-pink-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Home
          </Link>
        </div>
      </div>

      {/* Main Pricing Section */}
      <section className="od-section py-20 px-4">
        <div className="od-container od-reveal">
          <PricingTableStrategic />
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 px-4 bg-[#161B22] border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black od-title text-center text-white mb-12">
            Por que trabalhar com a <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">On Demand</span>?
          </h2>

          <div className="grid od-reveal md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="od-card border border-gray-800 rounded-xl p-6 hover:border-pink-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Implementação Organizada</h3>
              <p className="od-subtitle text-gray-400">
                Processo com etapas claras, alinhamento e acompanhamento contínuo.
              </p>
            </div>

            <div className="od-card border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Acompanhamento de Métricas</h3>
              <p className="od-subtitle text-gray-400">
                Acompanhamos indicadores essenciais para orientar decisões com mais segurança.
              </p>
            </div>

            <div className="od-card border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Escopo Transparente</h3>
              <p className="od-subtitle text-gray-400">
                Escopo, metas e prioridades definidos desde o início.
              </p>
            </div>

            <div className="od-card border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Time Dedicado</h3>
              <p className="od-subtitle text-gray-400">
                Você tem uma equipe estratégica focada em organizar e executar o plano.
              </p>
            </div>

            <div className="od-card border border-gray-800 rounded-xl p-6 hover:border-pink-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Suporte ágil</h3>
              <p className="od-subtitle text-gray-400">
                Comunicação direta para resolver o que importa com rapidez.
              </p>
            </div>

            <div className="od-card border border-gray-800 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Contrato Flexível</h3>
              <p className="od-subtitle text-gray-400">
                Condições claras e ajustes definidos em conjunto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="od-section py-16 px-4">
        <div className="od-container max-w-5xl od-reveal">
          <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 border border-pink-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-black od-title text-center text-white mb-12">
              Indicadores do nosso <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">Processo</span>
            </h2>

            <div className="grid od-reveal md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black od-title bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  Foco
                </div>
                <p className="od-subtitle text-gray-400 text-sm">Objetivos bem definidos</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-black od-title bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                  Método
                </div>
                <p className="od-subtitle text-gray-400 text-sm">Execução com rotina</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-black od-title bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  Ajuste
                </div>
                <p className="od-subtitle text-gray-400 text-sm">Otimização contínua</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-black od-title bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                  Clareza
                </div>
                <p className="od-subtitle text-gray-400 text-sm">Comunicação direta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 px-4 bg-[#161B22] border-y border-gray-800">
        <div className="od-container max-w-5xl od-reveal">
          <h2 className="text-3xl md:text-4xl font-black od-title text-center text-white mb-12">
            O que nossos <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">Clientes</span> dizem
          </h2>

          <div className="grid od-reveal md:grid-cols-3 gap-6">
            <div className="od-card border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-400 text-xl"></span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "O processo trouxe clareza e organização. A equipe foi direta e o acompanhamento ajudou a ajustar o que precisava."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Marcos Silva</p>
                  <p className="od-subtitle text-gray-400 text-xs">CEO - Clínica Odontológica</p>
                </div>
              </div>
            </div>

            <div className="od-card border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-400 text-xl"></span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "A implementação foi bem conduzida e o suporte foi consistente durante todo o processo."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  C
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Carla Mendes</p>
                  <p className="od-subtitle text-gray-400 text-xs">Diretora - Escola de Idiomas</p>
                </div>
              </div>
            </div>

            <div className="od-card border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-yellow-400 text-xl"></span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                "A automação organizou o atendimento e deixou a operao mais previsvel."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Roberto Alves</p>
                  <p className="od-subtitle text-gray-400 text-xs">Fundador - Imobiliria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="od-section py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black od-title text-white mb-6">
            Pronto para <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">organizar</span> seu marketing?
          </h2>

          <p className="text-xl text-gray-400 mb-8">
            Vamos mapear seu contexto e definir o melhor caminho para o seu momento.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              href="#pricing"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-xl font-black od-title uppercase tracking-wider hover:shadow-2xl hover:shadow-pink-500/50 transition-all hover:scale-105"
            >
              Ver opções
            </Link>

            <Link
              href="/calculadora-roi"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 rounded-xl font-bold hover:bg-cyan-500/10 transition-colors"
            >
              Entender meu cenrio
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Contrato transparente " Escopo claro " Comunicação direta
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}



