"use client"

import { useState } from "react"

interface Case {
  segment: string
  accentColor: string
  borderColor: string
  tagColor: string
  resultColor: string
  situation: string
  action: string
  result: string
  cta: string
  waText: string
}

const cases: Case[] = [
  {
    segment: "Clínica Odontológica",
    accentColor: "from-cyan-500/20 to-cyan-400/5",
    borderColor: "border-cyan-500/40",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    resultColor: "text-cyan-300",
    situation: "Agenda com horários vagos toda semana",
    action: "Campanha no Google Ads com automação de agendamento via WhatsApp",
    result: "Agenda ocupada em 3 semanas de campanha",
    cta: "Quero isso para minha clínica",
    waText: "Ol%C3%A1%2C+vim+pelo+site+e+quero+encher+a+agenda+da+minha+cl%C3%ADnica",
  },
  {
    segment: "Restaurante e Delivery",
    accentColor: "from-emerald-500/20 to-emerald-400/5",
    borderColor: "border-emerald-500/40",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    resultColor: "text-emerald-300",
    situation: "Baixa visibilidade no Google Maps local",
    action: "Otimização do Google Meu Negócio com postagens regulares",
    result: "Apareceu no Top 3 local para buscas do bairro",
    cta: "Quero aparecer no Google",
    waText: "Ol%C3%A1%2C+vim+pelo+site+e+quero+aparecer+no+Google+Maps+local",
  },
  {
    segment: "Clínica de Estética",
    accentColor: "from-violet-500/20 to-violet-400/5",
    borderColor: "border-violet-500/40",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/30",
    resultColor: "text-violet-300",
    situation: "Dependente só de indicações, sem presença digital",
    action: "Perfil GMB otimizado com Meta Ads de segmentação local",
    result: "Primeiros clientes pelo digital em menos de 30 dias",
    cta: "Quero clientes pelo digital",
    waText: "Ol%C3%A1%2C+vim+pelo+site+e+quero+atrair+clientes+pelo+digital",
  },
]

function CaseCard({ c, index }: { c: Case; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative flex flex-col bg-zinc-900/60 border rounded-2xl p-6 sm:p-8 transition-all duration-300 cursor-default
        ${hovered ? `${c.borderColor} -translate-y-1 shadow-lg` : "border-zinc-800/70"}
      `}
      style={{ transform: hovered ? "translateY(-4px)" : "translateY(0)" }}
    >
      {/* Brilho de fundo no hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${c.accentColor} transition-opacity duration-300 pointer-events-none ${hovered ? "opacity-100" : "opacity-0"}`}
      />

      <div className="relative z-10 flex flex-col flex-1">
        {/* Tag de segmento */}
        <span
          className={`self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-5 ${c.tagColor}`}
        >
          {c.segment}
        </span>

        {/* Situacao antes */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
          <span className="text-zinc-500 font-semibold uppercase text-xs tracking-wider block mb-1">
            Situação antes
          </span>
          {c.situation}
        </p>

        {/* Linha divisoria */}
        <hr className="border-zinc-800/80 mb-4" />

        {/* O que fizemos */}
        <p className="text-zinc-300 text-sm leading-relaxed mb-4">
          <span className="text-zinc-500 font-semibold uppercase text-xs tracking-wider block mb-1">
            O que fizemos
          </span>
          {c.action}
        </p>

        {/* Resultado em destaque */}
        <div className="bg-zinc-950/60 border border-zinc-800/60 rounded-xl px-4 py-3 mb-6">
          <span className="text-zinc-500 font-semibold uppercase text-xs tracking-wider block mb-1">
            Resultado
          </span>
          <p className={`font-bold text-base leading-snug ${c.resultColor}`}>
            {c.result}
          </p>
        </div>

        {/* CTA para WhatsApp */}
        <a
          href={`https://wa.me/5531996966686?text=${c.waText}`}
          target="_blank"
          rel="noopener noreferrer"
          data-track="mini-cases-whatsapp-cta"
          className={`
            mt-auto w-full text-center text-sm font-bold py-3 px-4 rounded-xl border transition-all duration-200
            ${c.borderColor} ${c.tagColor}
            hover:brightness-110 hover:shadow-md active:scale-95
          `}
        >
          {c.cta}
        </a>
      </div>
    </div>
  )
}

export default function MiniCases() {
  return (
    <section className="od-section py-16 lg:py-24 bg-[#09090b] relative overflow-hidden">
      {/* Gradiente de fundo sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-violet-600/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="od-container px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Resultados de quem ja{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              trabalhou com a gente
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Cada negocio tem um contexto diferente. Aqui estao alguns que a gente ajudou.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c, i) => (
            <CaseCard key={i} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
