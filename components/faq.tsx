"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Como funciona o processo de onboarding?",
    answer: "Após a contratação, começamos com uma reunião de alinhamento estratégico. Em seguida, configuramos ferramentas essenciais (pixels, analytics, CRM) e preparamos as primeiras campanhas. Você acompanha as etapas e decisões ao longo do processo."
  },
  {
    question: "Quanto preciso investir em mídia paga?",
    answer: "O investimento em mídia é definido com base no seu mercado, objetivos e capacidade comercial. A verba de anúncios é separada do nosso serviço."
  },
  {
    question: "Tem contrato de fidelidade?",
    answer: "Trabalhamos com contrato claro e flexível, com ajustes e renovações acordados de forma transparente."
  },
  {
    question: "Como funciona a consultoria personalizada?",
    answer: "Cada cliente recebe um plano sob medida após uma análise detalhada do negócio, objetivos e mercado. Definimos juntos as estratégias, prioridades e metas sem pacotes genéricos."
  },
  {
    question: "Vocês trabalham com qual tipo de empresa?",
    answer: "Atendemos desde profissionais autônomos até empresas em crescimento. O mais importante é ter clareza de objetivos e disponibilidade para executar o plano."
  },
  {
    question: "Como acompanho os resultados?",
    answer: "Você terá acesso a um dashboard com métricas-chave e acompanhamento periódico. Mantemos a comunicação aberta para ajustes e decisões ao longo do mês."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="od-section sm:py-16 lg:py-20 bg-[#09090b]">
      {/* FAQ Schema Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="od-container px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 od-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            <span className="text-[#e2e8f0]">Perguntas </span>
            <span className="text-[#06b6d4]">Frequentes</span>
          </h2>
          <p className="od-subtitle max-w-2xl mx-auto text-base sm:text-lg px-4">
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4 od-reveal od-reveal-delay-1">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="od-card-soft od-card-hover border border-[#334155]/50 rounded-lg overflow-hidden hover:border-[#06b6d4]/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 sm:p-6 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-[#e2e8f0] pr-3 sm:pr-4 text-sm sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#06b6d4] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-[#94a3b8] leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

