"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { WHATSAPP_NUMBER } from "@/lib/constants"

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
      className="border-t border-zinc-800/70 last:border-b"
      style={{ borderColor: isOpen ? "rgba(139,92,246,0.2)" : undefined }}
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
            borderColor: isOpen ? "rgba(139,92,246,0.5)" : "rgba(63,63,70,0.8)",
            background: isOpen ? "rgba(139,92,246,0.12)" : "transparent",
            color: isOpen ? "#c4b5fd" : "#52525b",
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
        <p className="text-[#b4b4bc] text-sm sm:text-base leading-relaxed pb-7 max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-[#09090b] py-24 lg:py-36">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">
            Dúvidas
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.05]">
            Perguntas frequentes
          </h2>
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
        <div className="mt-16 pt-10 border-t border-zinc-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-[#b4b4bc] text-sm">
            Ainda tem dúvidas? A equipe responde direto pelo WhatsApp.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá%2C+tenho+uma+dúvida+sobre+os+serviços`}
            target="_blank"
            rel="noopener noreferrer"
            data-track="faq-whatsapp-cta"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-violet-500/40 hover:text-white transition-all duration-200 active:scale-[0.97]"
          >
            Perguntar pelo WhatsApp
          </a>
        </div>

      </div>
    </section>
  )
}
