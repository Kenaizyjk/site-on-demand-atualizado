import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Chatbots e Atendimento com IA - On Demand Digital",
  description:
    "Chatbots treinados com dados do seu negocio para responder duvidas, qualificar leads e apoiar o atendimento via WhatsApp. Reducao de carga operacional com inteligencia artificial.",
  alternates: {
    canonical: "https://ondemanddigital.com.br/servicos/chatbots",
  },
  openGraph: {
    images: [
      {
        url: `/og?title=Chatbots+e+Atendimento+com+IA&type=service`,
        width: 1200,
        height: 630,
      },
    ],
  },
}

const WHATSAPP_URL =
  "https://wa.me/5531996966686?text=Quero+saber+mais+sobre+Chatbots+com+IA"

export default function ChatbotsPage() {
  return (
    <main className="od-page bg-[#09090b] min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="od-section pt-32 pb-20">
        <div className="od-container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
              Servico
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Chatbots e Atendimento{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                com IA
              </span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Atendentes virtuais treinados com informacoes do seu negocio para responder perguntas, orientar clientes e apoiar o time comercial a qualquer hora.
            </p>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="od-section py-16 border-t border-zinc-800/60">
        <div className="od-container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              O que fazemos
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Construimos chatbots com base em modelos de linguagem modernos, configurados especificamente para o seu negocio. O chatbot conhece seus servicos, precos, politicas e tom de comunicacao, respondendo com precisao e naturalidade.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              A integracao acontece principalmente via WhatsApp Business, mas pode ser estendida para sites, Instagram e outras plataformas conforme a necessidade.
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
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Atendimento inicial",
                  body: "O chatbot recebe o contato, identifica o que o cliente precisa e responde as duvidas mais frequentes antes de envolver o time humano.",
                },
                {
                  title: "Qualificacao de leads",
                  body: "Coleta informacoes basicas como servico de interesse, localizacao e orcamento disponivel para agilizar a abordagem comercial.",
                },
                {
                  title: "Agendamento de consultas",
                  body: "Para clinicas e prestadores de servico, o chatbot verifica disponibilidade e confirma horarios diretamente no fluxo de conversa.",
                },
                {
                  title: "Suporte pos-venda",
                  body: "Responde duvidas de clientes que ja compraram, reduz o volume de chamados repetitivos e melhora a experiencia de atendimento.",
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

      {/* Como funciona */}
      <section className="od-section py-16 border-t border-zinc-800/60">
        <div className="od-container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Como funciona
            </h2>
            <ol className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Mapeamento do negocio",
                  body: "Levantamos as perguntas mais frequentes, os servicos oferecidos, politicas e o tom de comunicacao que o chatbot deve seguir.",
                },
                {
                  step: "02",
                  title: "Treinamento e configuracao",
                  body: "Configuramos o modelo de IA com as informacoes mapeadas, definimos as regras de comportamento e os pontos de transferencia para atendimento humano.",
                },
                {
                  step: "03",
                  title: "Testes e ajustes",
                  body: "Simulamos conversas reais para identificar lacunas e ajustar as respostas antes de ativar o chatbot para os clientes.",
                },
                {
                  step: "04",
                  title: "Monitoramento",
                  body: "Acompanhamos as conversas regularmente para identificar novas duvidas nao mapeadas e melhorar continuamente o desempenho.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-6">
                  <span className="text-3xl font-black text-zinc-700 leading-none shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="od-section py-20 border-t border-zinc-800/60">
        <div className="od-container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              Quer um atendente de IA para o seu negocio?
            </h2>
            <p className="text-zinc-400 mb-8">
              Fale com a gente e entenda como um chatbot bem treinado pode responder seus clientes com agilidade e liberar o time para o que realmente importa.
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
