import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Automacao com IA e n8n - Fluxos e Integracao de Sistemas",
  description:
    "Automacao de marketing e operacoes com n8n e inteligencia artificial. Qualificacao de leads, follow-up automatico, integracao com CRM e WhatsApp Business.",
  alternates: {
    canonical: "https://ondemanddigital.com.br/servicos/automacao",
  },
  openGraph: {
    images: [
      {
        url: `/og?title=Automacao+com+IA+e+n8n&type=service`,
        width: 1200,
        height: 630,
      },
    ],
  },
}

const WHATSAPP_URL =
  "https://wa.me/5531996966686?text=Quero+saber+mais+sobre+Automacao+com+IA"

export default function AutomacaoPage() {
  return (
    <main className="od-page bg-[#09090b] min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="od-section pt-32 pb-20">
        <div className="od-container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-violet-400 mb-4">
              Servico
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Automacao com IA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">
                e n8n
              </span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Fluxos automatizados que conectam seus canais, qualificam contatos e organizam o atendimento, sem depender de processos manuais repetitivos.
            </p>
          </div>
        </div>
      </section>

      {/* O que e automacao de marketing */}
      <section className="od-section py-16 border-t border-zinc-800/60">
        <div className="od-container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              O que e automacao de marketing
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Automacao de marketing e o uso de sistemas e fluxos para executar acoes repetitivas de forma automatica. Isso inclui desde o envio de uma mensagem de boas-vindas ate a qualificacao de leads, passando por integracoes entre plataformas como CRM, WhatsApp e formularios.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Usamos o n8n como plataforma central de orquestracao, integrado a modelos de inteligencia artificial como o Claude AI, para tornar os fluxos mais inteligentes e menos dependentes de regras rigidas.
            </p>
          </div>
        </div>
      </section>

      {/* Casos de uso */}
      <section className="od-section py-16 border-t border-zinc-800/60">
        <div className="od-container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Casos de uso
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Qualificacao de leads",
                  body: "Quando um contato chega pelo WhatsApp ou formulario, o fluxo identifica o perfil, faz perguntas relevantes e classifica o lead antes de repassar para o time comercial.",
                },
                {
                  title: "Follow-up automatico",
                  body: "Sequencias de mensagens enviadas nos momentos certos para leads que nao responderam, aumentando a taxa de retorno sem esforco manual.",
                },
                {
                  title: "Sync com CRM",
                  body: "Toda interacao e registrada automaticamente no CRM, com etapa de funil atualizada, notas e proximo passo definido pelo proprio fluxo.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
                >
                  <h3 className="text-white font-bold mb-3">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ferramentas utilizadas */}
      <section className="od-section py-16 border-t border-zinc-800/60">
        <div className="od-container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Ferramentas utilizadas
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  name: "n8n",
                  desc: "Plataforma de automacao open source que conecta sistemas, APIs e webhooks. Permite criar fluxos complexos sem codigo e com total controle sobre os dados.",
                },
                {
                  name: "Claude AI",
                  desc: "Modelo de inteligencia artificial da Anthropic utilizado para interpretar mensagens, classificar inencoes e gerar respostas contextualizadas nos fluxos.",
                },
                {
                  name: "WhatsApp Business",
                  desc: "Canal principal de comunicacao integrado aos fluxos. Recebe, processa e responde mensagens de forma automatizada com base em regras e IA.",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
                >
                  <h3 className="text-violet-400 font-bold mb-3">{item.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="od-section py-20 border-t border-zinc-800/60">
        <div className="od-container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              Quer automatizar seu processo comercial?
            </h2>
            <p className="text-zinc-400 mb-8">
              Fale com a gente e entenda como um fluxo bem estruturado pode reduzir o tempo gasto com tarefas manuais no seu negocio.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-base transition-all duration-200 shadow-lg shadow-violet-500/20"
            >
              Falar pelo WhatsApp
            </a>
            <p className="mt-6 text-sm">
              <Link href="/servicos" className="text-zinc-500 hover:text-zinc-400 transition-colors">
                Ver todos os servicos
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
