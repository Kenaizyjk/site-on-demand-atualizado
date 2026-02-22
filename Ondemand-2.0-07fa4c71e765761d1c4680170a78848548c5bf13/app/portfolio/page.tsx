import Link from "next/link"
import { ArrowRight } from "lucide-react"

const portfolioItems = [
  {
    title: "Clínica Excellence - 350% Mais Leads",
    category: "Clínica Estética",
    description: "Estruturação completa de marketing digital, Meta Ads otimizado, GMB e automação WhatsApp",
    metrics: ["+350% leads", "CPL R$ 85  R$ 23", "ROAS 5.2x"],
    image: "*",
    services: ["Meta Ads", "GMB", "WhatsApp Bot", "Landing Page"],
    color: "from-[#ff1493] to-[#9d4edd]",
  },
  {
    title: "JC Fashion Store - ROAS 6.8x",
    category: "E-commerce",
    description: "Estratégia completa de tráfego pago, retargeting inteligente e recovery de carrinho automatizado",
    metrics: ["ROAS 1.8x  6.8x", "+512% faturamento", "CAC -64%"],
    image: "*",
    services: ["Meta Ads", "Google Ads", "Retargeting", "Email Marketing"],
    color: "from-[#00d9ff] to-[#ff1493]",
  },
  {
    title: "Sabor & Tradição - 420 Pedidos/mês",
    category: "Restaurante",
    description: "SEO local, GMB otimizado, Google Local Ads e bot de pedidos automático",
    metrics: ["420+ pedidos/mês", "ROI 13.5x", "Comissão -61%"],
    image: "*",
    services: ["GMB", "Google Ads", "SEO Local", "Automação n8n"],
    color: "from-[#9d4edd] to-[#00d9ff]",
  },
  {
    title: "Tech Startup - 120k Visitantes/mês",
    category: "B2B SaaS",
    description: "Site performático, SEO técnico, conteúdo técnico otimizado e lead magnets",
    metrics: ["120k visitas/mês", "Lead rate 4.2%", "10 leads qualificados/dia"],
    image: "*",
    services: ["Site Performance", "SEO", "Content Marketing", "Landing Pages"],
    color: "from-[#ff006e] to-[#ff1493]",
  },
  {
    title: "Agência Imobiliária - 85% Conversão",
    category: "Imóveis",
    description: "Website premium, virtual tours, leads qualificados e CRM integrado",
    metrics: ["85% conversão", "Lead-to-visita 92%", "Ciclo vendas -40%"],
    image: "*",
    services: ["Web Design", "Virtual Tour", "CRM", "Automação"],
    color: "from-[#00d9ff] to-[#00d966]",
  },
  {
    title: "Academia FitPro - Social Media 180k",
    category: "Fitness",
    description: "Gestão de redes sociais, conteúdo viral, community building e conversão",
    metrics: ["180k seguidores", "50 membros/mês", "Engajamento 8.2%"],
    image: "*",
    services: ["Social Media", "Content Creation", "Ads", "Community"],
    color: "from-[#ff1493] to-[#00d9ff]",
  },
]

export const metadata = {
  title: "Portfólio - On Demand Digital | Casos de Sucesso",
  description: "Veja os projetos que transformaram negócios. Clínicas, e-commerce, restaurantes, B2B e muito mais.",
}

export default function PortfolioPage() {
  return (
    <main className="od-page">
      {/* Header */}
      <section className="od-section py-20 bg-gradient-to-b from-[#0D1117] to-[#161B22] border-b border-[#30363D]">
        <div className="od-container px-4 od-reveal">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#00d9ff] hover:text-[#ff006e] transition mb-8"
          >
             Voltar para Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 rose-glow">Portfólio de Projetos</h1>
          <p className="text-xl text-[#E6E6FA]/70 max-w-3xl">
            Conheça os negócios que transformamos com estratégia digital e execução impecável. Casos reais, resultados
            mensuráveis, histórias de sucesso.
          </p>
        </div>
      </section>

      {/* Portfólio Grid */}
      <section className="od-section py-20 bg-[#161B22]">
        <div className="od-container px-4 od-reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-[#30363D] bg-[#0D1117] rounded-lg overflow-hidden hover:border-[#ff006e] transition group flex flex-col h-full"
              >
                {/* Image Area */}
                <div className={`bg-gradient-to-br ${item.color} h-32 flex items-center justify-center text-6xl`}>
                  {item.image}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-[#ff006e] mb-2">{item.category}</span>
                  <h3 className="text-xl font-bold mb-2 text-[#E6E6FA] group-hover:text-[#ff006e] transition">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#E6E6FA]/70 mb-4">{item.description}</p>

                  {/* Metrics */}
                  <div className="mb-4 p-3 bg-[#1a1a2e] rounded border border-[#2d2d3d]">
                    <p className="text-xs text-[#00d9ff] font-semibold mb-2">Resultados:</p>
                    <div className="space-y-1">
                      {item.metrics.map((metric, i) => (
                        <p key={i} className="text-sm text-[#f5f5f0] flex items-center gap-2">
                          <span className="text-[#00d966]">-</span>
                          {metric}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                    {item.services.map((service) => (
                      <span key={service} className="px-2 py-1 bg-[#30363D] text-[#E6E6FA]/60 text-xs rounded">
                        {service}
                      </span>
                    ))}
                  </div>

                  <button className="w-full px-4 py-2 bg-[#ff006e] text-white font-bold rounded hover:shadow-lg hover:shadow-[#ff006e]/50 transition flex items-center justify-center gap-2">
                    Ver Detalhes
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="od-section py-16 bg-[#0D1117] border-b border-[#30363D]">
        <div className="od-container px-4 od-reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#ff006e] mb-2">50+</p>
              <p className="text-[#E6E6FA]/70">Projetos Executados</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#00d9ff] mb-2">R$ 45M+</p>
              <p className="text-[#E6E6FA]/70">ROI Gerado</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#ff1493] mb-2">98%</p>
              <p className="text-[#E6E6FA]/70">Satisfação do Cliente</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#9d4edd] mb-2">5+ anos</p>
              <p className="text-[#E6E6FA]/70">No Mercado</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="od-section py-20 bg-[#161B22]">
        <div className="od-container max-w-4xl px-4 od-reveal text-center">
          <h2 className="text-4xl font-bold mb-4 rose-glow">Seu Negócio Pode Ser o Próximo</h2>
          <p className="text-xl text-[#E6E6FA]/70 mb-8">
            Os casos que você viu foram transformados pela mesma metodologia que aplicaremos no seu projeto. Vamos
            começar?
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#ff006e] to-[#ba1cbe] text-white font-bold uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-[#ff006e]/50 transition"
          >
            Agendar Consultoria Gratuita
          </Link>
        </div>
      </section>
    </main>
  )
}



