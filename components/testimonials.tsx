"use client"

import { Star, Quote } from "lucide-react"

const AVATAR_COLORS = [
  "bg-zinc-700",
  "bg-zinc-600",
  "bg-zinc-800",
]

function AvatarInitials({ name, colorIdx }: { name: string; colorIdx: number }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <div
      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${AVATAR_COLORS[colorIdx % AVATAR_COLORS.length]} flex items-center justify-center flex-shrink-0 shadow-lg`}
    >
      <span className="text-white font-bold text-lg sm:text-xl">{initials}</span>
    </div>
  )
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "C.M.",
      role: "Diretor Clínico",
      company: "Clínica de Especialidades. Saúde",
      story: "O diferencial foi o atendimento próximo e a clareza no que estava sendo feito. O time ajudou a organizar o processo comercial.",
      rating: 5,
    },
    {
      name: "J.C.",
      role: "CEO",
      company: "E-commerce. Moda",
      story: "Profissionais sérios e organizados. O trabalho trouxe consistência e mais controle sobre as decisões.",
      rating: 5,
    },
    {
      name: "R.A.",
      role: "Proprietário",
      company: "Restaurante. Gastronomia",
      story: "A presença no Google ficou mais clara e o atendimento ficou mais organizado. Comunicação simples e objetiva.",
      rating: 5,
    },
  ]

  return (
    <section className="od-section sm:py-16 lg:py-20 bg-[#111113]">
      <div className="od-container px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 od-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            <span className="text-[#e2e8f0]">O Que Nossos </span>
            <span className="text-[#06b6d4]">Clientes Dizem</span>
          </h2>
          <p className="od-subtitle max-w-2xl mx-auto text-base sm:text-lg px-4">
            Relatos de empresários que confiaram no nosso processo
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 od-reveal od-reveal-delay-1">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="od-card od-card-hover border border-[#334155]/50 rounded-lg p-6 sm:p-8 hover:border-[#06b6d4]/50 transition-all duration-300 flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#06b6d4]/30 mb-5 sm:mb-6" />

              {/* Story */}
              <p className="text-[#94a3b8] mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base flex-grow italic">
                &quot;{testimonial.story}&quot;
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-5 sm:mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#06b6d4] text-[#06b6d4] sm:w-[18px] sm:h-[18px]" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-[#334155]/50">
                <AvatarInitials name={testimonial.name} colorIdx={idx} />
                <div className="min-w-0">
                  <p className="font-semibold od-subtitle text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-[#94a3b8]">{testimonial.role}</p>
                  <p className="text-xs sm:text-sm text-[#06b6d4] font-medium truncate">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 od-card border border-[#334155]/50 rounded-lg od-reveal od-reveal-delay-2">
          <div className="text-center">
            <p className="text-5xl font-bold text-[#06b6d4] mb-2">Confiança</p>
            <p className="text-[#e2e8f0] font-semibold">Relacionamento próximo</p>
            <p className="od-subtitle text-sm mt-1">Comunicação transparente</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-[#06b6d4] mb-2">Processo</p>
            <p className="text-[#e2e8f0] font-semibold">Rotina bem definida</p>
            <p className="od-subtitle text-sm mt-1">Etapas claras e acompanhamento</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-[#06b6d4] mb-2">Experiência</p>
            <p className="text-[#e2e8f0] font-semibold">Projetos acompanhados</p>
            <p className="od-subtitle text-sm mt-1">Visão prática do mercado</p>
          </div>
        </div>
      </div>
    </section>
  )
}
