"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { WHATSAPP_NUMBER } from "@/lib/constants"
import Script from "next/script"

const faqs = [
  {
    question: "Como funciona o diagnóstico gratuito?",
    answer:
      "É uma conversa de 30 minutos onde entendemos seu negócio, os canais que você já usa e onde estão as maiores oportunidades. Sem apresentações longas ou vendas forçadas. O objetivo é entender se faz sentido trabalharmos juntos.",
  },
  {
    question: "Quais serviços vocês oferecem?",
    answer:
      "Trabalhamos com tráfego pago (Google Ads e Meta Ads), SEO local e Google Business Profile, automação de marketing com IA, criação de sites em Next.js e estratégia digital integrada. Cada projeto recebe um conjunto de serviços definido conforme os objetivos do cliente.",
  },
  {
    question: "Quanto tempo para ver os primeiros resultados?",
    answer:
      "Depende do canal e do objetivo. Campanhas de tráfego pago costumam gerar os primeiros leads em dias após a ativação. SEO e autoridade orgânica constroem resultados ao longo de semanas e meses. Estabelecemos expectativas realistas na fase de planejamento.",
  },
  {
    question: "Como funciona o acompanhamento dos resultados?",
    answer:
      "Você terá acesso a um painel com as métricas principais do projeto e reuniões periódicas de performance. Entre os encontros, mantemos canal de comunicação direto para dúvidas e ajustes. Tudo documentado e transparente.",
  },
  {
    question: "Vocês atendem qualquer tipo de negócio?",
    answer:
      "Atendemos negócios locais, prestadores de serviço, clínicas, e-commerces e empresas em crescimento. O critério não é o segmento, mas sim a clareza de objetivos e disposição para executar o plano. Fazemos uma avaliação antes de fechar qualquer proposta para garantir que há fit real.",
  },
  {
    question: "O que é automação com IA na prática?",
    answer:
      "É o uso de ferramentas como n8n e modelos de linguagem para automatizar tarefas repetitivas: respostas a leads, qualificação de contatos, envio de follow-ups, geração de relatórios e integrações entre sistemas. O objetivo é reduzir trabalho manual e aumentar a velocidade de resposta do seu negócio.",
  },
  {
    question: "Vocês fazem sites também?",
    answer:
      "Sim. Desenvolvemos sites institucionais e landing pages em Next.js, com foco em performance, SEO técnico e conversão. Entregamos projetos rápidos, acessíveis e otimizados para os motores de busca, integrados às estratégias de marketing do cliente.",
  },
  {
    question: "Quanto custa trabalhar com a On Demand Digital?",
    answer:
      "Não publicamos tabelas de preço fixas porque cada projeto tem escopo, canais e objetivos diferentes. O investimento é definido após o diagnóstico inicial, quando entendemos exatamente o que faz sentido para o seu momento. O diagnóstico é gratuito e sem compromisso.",
  },
]

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <div
      className="rounded-lg transition-all duration-300"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderColor: isOpen ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.06)",
        background: isOpen ? "rgba(255,255,255,0.02)" : "transparent",
        padding: isOpen ? "0 1rem" : "0",
        ...(isOpen ? {
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: "inset 3px 0 0 rgba(255,255,255,0.15)",
        } : {}),
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-7 text-left group focus-visible:outline-none"
        aria-expanded={isOpen}
      >
        <span
          className="text-base sm:text-lg font-semibold leading-snug transition-colors duration-200"
          style={{ color: isOpen ? "#ffffff" : "#e4e4e7" }}
        >
          {question}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 mt-0.5"
          style={{
            borderColor: isOpen ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.1)",
            background: isOpen ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            color: isOpen ? "rgba(255,255,255,0.7)" : "#52525b",
          }}
          aria-hidden="true"
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <p className="text-white/[0.45] text-sm sm:text-base leading-relaxed pb-7 max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // FAQ structured data for Google rich results
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
    <section id="faq" className="py-16 sm:py-24 lg:py-36 relative">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/30 mb-4">
            Dúvidas
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight uppercase tracking-[0.12em] text-white leading-[1.05]">
            Perguntas frequentes
          </h2>
          {/* Decorative line */}
          <div className="w-16 h-px mt-6" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.25) 0%, transparent 100%)" }} aria-hidden="true" />
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              index={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-white/[0.45] text-sm">
            Ainda tem dúvidas? A equipe responde direto pelo WhatsApp.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C+tenho+uma+d%C3%BAvida+sobre+os+servi%C3%A7os`}
            target="_blank"
            rel="noopener noreferrer"
            data-track="faq-whatsapp-cta"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3.5 sm:py-2.5 rounded-xl text-white/50 text-sm font-semibold hover:text-white transition-all duration-200 active:scale-[0.97]"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)" }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)" }}
          >
            Perguntar pelo WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}
