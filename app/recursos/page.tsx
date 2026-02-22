import Link from "next/link"
import { Download, BookOpen, BarChart3, Code2, Zap, Calculator } from "lucide-react"
import ROICalculatorAdvanced from "@/components/roi-calculator-advanced"

const resources = [
  {
    category: "Guias",
    icon: BookOpen,
    items: [
      {
        title: "Guia Completo: Meta Ads 2025",
        description: "Tudo que mudou em 2025. Advantage+, Pixel, segmentação automática e benchmarks atualizados.",
        type: "PDF",
        size: "2.4 MB",
      },
      {
        title: "SEO Local para Negócios Locais",
        description: "Passo a passo prático: GMB, avaliações, backlinks locais, posts e integração com site.",
        type: "PDF",
        size: "1.8 MB",
      },
      {
        title: "Landing Pages que Convertem",
        description: "7 elementos essenciais, copywriting, design, CTA e A/B testing para aumentar conversões.",
        type: "PDF",
        size: "3.1 MB",
      },
    ],
  },
  {
    category: "Planilhas & Templates",
    icon: BarChart3,
    items: [
      {
        title: "Calculadora de ROI Marketing",
        description: "Simule seu ROI: insira ticket, CPL, conversão e veja faturamento projetado.",
        type: "Google Sheets",
        size: "Online",
      },
      {
        title: "Template: Plano de Marketing Digital",
        description: "Estrutura completa de estratégia, canais, KPIs, orçamento e timeline.",
        type: "Google Docs",
        size: "Editable",
      },
      {
        title: "Audit de Campanhas Meta Ads",
        description: "Checklist detalhado para revisar estrutura de conta, performance e otimizações.",
        type: "Google Sheets",
        size: "Online",
      },
    ],
  },
  {
    category: "Ferramentas",
    icon: Code2,
    items: [
      {
        title: "Calculadora de CPL por Segmento",
        description: "Veja qual é o CPL esperado para seu setor e compare sua performance.",
        type: "Web Tool",
        size: "Instant",
      },
      {
        title: "Gerador de Briefing de Projeto",
        description: "Ferramenta que gera briefing profissional em minutos para apresentar ao cliente.",
        type: "Web Tool",
        size: "Instant",
      },
      {
        title: "Analisador de Landing Page",
        description: "Cole URL e receba scorecard de conversão com recomendações de melhoria.",
        type: "Web Tool",
        size: "Instant",
      },
    ],
  },
  {
    category: "Automações",
    icon: Zap,
    items: [
      {
        title: "n8n: Fluxo de Captura de Leads",
        description: "Template pronto para automação: form → email → WhatsApp → CRM.",
        type: "n8n Export",
        size: "JSON",
      },
      {
        title: "n8n: Follow-up Automático",
        description: "Fluxo de follow-up inteligente que ajusta mensagens por comportamento do lead.",
        type: "n8n Export",
        size: "JSON",
      },
      {
        title: "Zapier: Meta Ads → Spreadsheet",
        description: "Extrai dados de campanhas Meta Ads e alimenta Google Sheets automaticamente.",
        type: "Zapier Zap",
        size: "Pronto",
      },
    ],
  },
]

export const metadata = {
  title: "Recursos - On Demand Digital | Guias, Templates e Ferramentas",
  description: "Downloads gratuitos: guias, planilhas, templates de automação e ferramentas de marketing.",
}

export default function RecursosPage() {
  return (
    <main className="od-page">
      {/* Header */}
      <section className="od-section py-20 bg-gradient-to-b from-[#0D1117] to-[#161B22] border-b border-[#30363D]">
        <div className="od-container px-4 od-reveal">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#00d9ff] hover:text-[#ff006e] transition mb-8"
          >
            ← Voltar para Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 rose-glow">Recursos Gratuitos</h1>
          <p className="text-xl text-[#E6E6FA]/70 max-w-3xl">
            Ferramentas, guias, templates e automações prontas para acelerar seu marketing digital. Todos os recursos
            criados por nosso time especializado.
          </p>
        </div>
      </section>

      {/* ROI Calculator - Featured */}
      <section className="od-section py-20 bg-[#0D1117]">
        <div className="od-container px-4 od-reveal">
          <div className="flex items-center gap-3 mb-8">
            <Calculator size={32} className="text-[#ff006e]" />
            <h2 className="text-3xl font-bold text-[#E6E6FA]">Calculadora de ROI Interativa</h2>
          </div>
          <p className="text-[#E6E6FA]/70 mb-12 max-w-3xl">
            Descubra quanto você está perdendo sem automação e qual pode ser seu retorno com nossa solução.
            Ajuste os valores e veja os resultados em tempo real.
          </p>
          <ROICalculatorAdvanced />
        </div>
      </section>

      {/* Resources */}
      <section className="od-section py-20 bg-[#161B22]">
        <div className="od-container px-4 od-reveal">
          {resources.map((section, idx) => {
            const Icon = section.icon
            return (
              <div key={idx} className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <Icon size={32} className="text-[#ff006e]" />
                  <h2 className="text-3xl font-bold text-[#E6E6FA]">{section.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="border border-[#30363D] bg-[#0D1117] rounded-lg p-6 hover:border-[#ff006e] transition group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="px-3 py-1 bg-[#00d9ff]/10 text-[#00d9ff] text-xs font-semibold rounded">
                          {item.type}
                        </span>
                        <Download size={20} className="text-[#ff006e] opacity-0 group-hover:opacity-100 transition" />
                      </div>

                      <h3 className="text-lg font-bold mb-2 text-[#E6E6FA] group-hover:text-[#ff006e] transition">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#E6E6FA]/70 mb-4">{item.description}</p>

                      <div className="text-xs text-[#E6E6FA]/50">{item.size}</div>

                      <button className="w-full mt-4 px-4 py-2 bg-[#ff006e] text-white font-bold rounded hover:shadow-lg hover:shadow-[#ff006e]/50 transition">
                        Baixar
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="od-section py-16 bg-[#0D1117] border-t border-[#30363D]">
        <div className="od-container max-w-4xl px-4 od-reveal text-center">
          <h2 className="text-3xl font-bold mb-4 rose-glow">Novos Recursos Todo Mês</h2>
          <p className="text-[#E6E6FA]/70 mb-6">
            Inscreva-se em nossa newsletter para receber novos guias, templates e ferramentas exclusivas.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 bg-[#1a1a2e] border border-[#2d2d3d] rounded text-[#f5f5f0] placeholder-[#808080] focus:border-[#ff006e] focus:outline-none"
            />
            <button className="px-8 py-3 bg-[#ff006e] text-white font-bold rounded hover:shadow-lg hover:shadow-[#ff006e]/50 transition">
              Inscrever
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}


