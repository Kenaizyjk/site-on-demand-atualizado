"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const CYAN = "#06b6d4"
const CYAN_MUTED = "rgba(6,182,212,0.12)"
const CYAN_BORDER = "rgba(6,182,212,0.33)"

const services = [
  {
    number: "01",
    title: "Tráfego Pago",
    tagline: "Campanhas que geram clientes, não só cliques.",
    description:
      "Gerenciamos Google Ads e Meta Ads com estrutura de testes, segmentação por intenção de compra e acompanhamento semanal para que cada real investido faça sentido.",
    deliverables: [
      "Criação e gestão de campanhas no Google e Meta",
      "Testes de criativos, audiências e páginas de destino",
      "Relatórios semanais com ajustes baseados em dados",
    ],
    platforms: ["Google Ads", "Meta Ads"],
  },
  {
    number: "02",
    title: "SEO Local e Google Business",
    tagline: "Encontrado por quem já busca o que você oferece.",
    description:
      "Otimizamos seu perfil no Google Business e estruturamos conteúdo local para que seu negócio apareça quando alguém pesquisa o que você faz na sua região.",
    deliverables: [
      "Otimização do perfil no Google Business Profile",
      "Conteúdo local com palavras-chave geográficas",
      "Monitoramento de posicionamento e visitas orgânicas",
    ],
    platforms: ["Google Business", "Google Search"],
  },
  {
    number: "03",
    title: "Automação com IA",
    tagline: "Fluxos que qualificam e atendem enquanto você trabalha.",
    description:
      "Construímos automações com n8n que conectam WhatsApp, CRM e e-mail em fluxos que qualificam leads e eliminam tarefas repetitivas do seu time.",
    deliverables: [
      "Fluxos n8n para qualificação e encaminhamento de leads",
      "Integração entre WhatsApp, CRM e planilhas",
      "Chatbots treinados com as informações do seu negócio",
    ],
    platforms: ["n8n", "WhatsApp API", "IA"],
  },
  {
    number: "04",
    title: "Estratégia Digital",
    tagline: "Um plano com metas reais e cronograma definido.",
    description:
      "Organizamos canais, definimos prioridades e montamos um plano de ação com metas claras para que cada iniciativa digital tenha propósito e direção.",
    deliverables: [
      "Diagnóstico dos canais e oportunidades mapeadas",
      "Planejamento com metas e cronograma definidos",
      "Acompanhamento mensal com revisão de estratégia",
    ],
    platforms: ["Analytics", "Consultoria"],
  },
]

export default function ServicesSimple() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="servicos" className="od-reveal-section relative bg-[#09090b] py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-20 lg:mb-24">
          <p
            className="font-bold uppercase text-zinc-500 mb-4"
            style={{ fontSize: "var(--text-small)", letterSpacing: "0.2em" }}
          >
            O que fazemos
          </p>
          <h2
            className="font-black tracking-tight text-white leading-[1.05]"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Serviços com<br />
            <span style={{ color: CYAN }}>
              entrega clara.
            </span>
          </h2>
        </div>

        {/* Service list */}
        <div className="od-stagger-children">
          {services.map((s, i) => (
            <div
              key={s.number}
              onMouseEnter={() => setHovered(s.number)}
              onMouseLeave={() => setHovered(null)}
              className="group relative transition-all duration-300"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.07)",
                borderBottom: i === services.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                borderLeft: hovered === s.number ? `2px solid ${CYAN}` : "2px solid transparent",
                backgroundColor: hovered === s.number ? "rgba(6,182,212,0.03)" : "transparent",
              }}
            >
              <div className="py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-[96px_1fr_1fr] gap-6 lg:gap-12 items-start">

                {/* Number */}
                <div
                  className="font-black text-6xl lg:text-7xl leading-none select-none transition-colors duration-300"
                  style={{
                    color: hovered === s.number ? CYAN : "rgba(255,255,255,0.05)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                  aria-hidden="true"
                >
                  {s.number}
                </div>

                {/* Title + description */}
                <div>
                  <h3
                    className="font-black text-white mb-3 leading-snug"
                    style={{ fontSize: "var(--text-h2)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="font-semibold mb-4 transition-colors duration-300"
                    style={{
                      fontSize: "var(--text-body)",
                      color: hovered === s.number ? CYAN : "#94a3b8",
                    }}
                  >
                    {s.tagline}
                  </p>
                  <p
                    className="text-[#b4b4bc] leading-relaxed max-w-md"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    {s.description}
                  </p>

                  {/* Platforms */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {s.platforms.map((p) => (
                      <span
                        key={p}
                        className="font-semibold px-2.5 py-1 rounded-full border transition-all duration-300"
                        style={{
                          fontSize: "var(--text-small)",
                          color: hovered === s.number ? CYAN : "#52525b",
                          borderColor: hovered === s.number ? CYAN_BORDER : "rgba(255,255,255,0.06)",
                          backgroundColor: hovered === s.number ? CYAN_MUTED : "transparent",
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="flex flex-col justify-between h-full">
                  <ul className="space-y-3 mb-8">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <span
                          className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-300"
                          style={{ backgroundColor: hovered === s.number ? CYAN : "#52525b" }}
                          aria-hidden="true"
                        />
                        <span
                          className="text-[#b4b4bc] leading-relaxed"
                          style={{ fontSize: "var(--text-body)" }}
                        >
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/5531996966686?text=Olá%2C+quero+saber+mais+sobre+${encodeURIComponent(s.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold transition-all duration-200 group/link"
                    style={{
                      fontSize: "var(--text-small)",
                      color: hovered === s.number ? CYAN : "#71717a",
                    }}
                    data-track={`services-${s.number}-cta`}
                  >
                    Saiba mais
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
