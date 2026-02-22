"use client"

import { Megaphone, MapPin, GitBranch, Search, MessageSquare, BarChart3 } from "lucide-react"

const items = [
  {
    title: "Tráfego Pago",
    icon: Megaphone,
    description: "Campanhas com objetivos claros, estrutura de teste e ajustes contínuos com base em dados.",
    points: [
      "Planejamento por etapa do funil",
      "Gestão de criativos e variações",
      "Mensuração de eventos relevantes",
      "Ajustes com cadência definida",
    ],
    color: "from-[#06b6d4] to-[#3b82f6]",
  },
  {
    title: "Google Meu Negócio",
    icon: MapPin,
    description: "Organização do perfil local para melhorar visibilidade e facilitar o contato com quem está por perto.",
    points: [
      "Perfil completo e coerente",
      "Gestão de avaliações",
      "Posts e fotos recorrentes",
      "Categorias e serviços bem definidos",
    ],
    color: "from-[#10b981] to-[#059669]",
  },
  {
    title: "Automações n8n",
    icon: GitBranch,
    description: "Fluxos que conectam atendimento, CRM e rotina comercial para reduzir fricção e ganhar clareza.",
    points: [
      "Qualificação automática de leads",
      "Encaminhamento por regras",
      "Integrações com CRM e planilhas",
      "Alertas e follow-ups",
    ],
    color: "from-[#8b5cf6] to-[#ec4899]",
  },
  {
    title: "SEO & Conteúdo",
    icon: Search,
    description: "Conteúdo útil, alinhado à intenção de busca e à jornada do cliente.",
    points: [
      "Pautas baseadas em demanda",
      "Estrutura on-page consistente",
      "Atualização de conteúdos antigos",
      "Monitoramento de palavras-chave",
    ],
    color: "from-[#f59e0b] to-[#ea580c]",
  },
  {
    title: "Chatbots & Atendimento",
    icon: MessageSquare,
    description: "Atendimento inicial organizado, com respostas úteis e escalonamento quando necessário.",
    points: [
      "Base de conhecimento por tema",
      "Tons de voz alinhados ao negócio",
      "Encaminhamento para equipe",
      "Logs e melhorias contínuas",
    ],
    color: "from-[#6366f1] to-[#4338ca]",
  },
  {
    title: "Analytics & CRM",
    icon: BarChart3,
    description: "Visão clara do que acontece no funil e onde ajustar o processo.",
    points: [
      "Dashboards essenciais",
      "Eventos críticos mapeados",
      "Relatórios objetivos",
      "Acompanhamento periódico",
    ],
    color: "from-[#ec4899] to-[#be185d]",
  },
]

export default function ModalitiesSection() {
  return (
    <section id="modalidades" className="od-section py-16 lg:py-24 bg-[#0b0b10]">
      <div className="od-container px-4">
        <div className="text-center mb-12 od-reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-[#94a3b8] mb-3">Modalidades</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black od-title text-white mb-4">
            O que fazemos em cada frente
          </h2>
          <p className="od-subtitle max-w-2xl mx-auto text-base sm:text-lg">
            Cada modalidade é tratada com método, rotina e comunicação clara. Sem promessas vazias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="od-card-soft od-card-hover border border-[#334155]/30 rounded-2xl p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>

                <p className="text-sm text-[#94a3b8] mb-4">
                  {item.description}
                </p>

                <div className="mt-auto">
                  <p className="text-xs text-[#64748b] mb-2">O que envolve:</p>
                  <div className="flex flex-col gap-2 text-sm text-[#cbd5e1]">
                    {item.points.map((point) => (
                      <span key={point} className="flex items-start gap-2">
                        <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
