import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"

export const metadata: Metadata = {
  title: "Trafego Pago - Meta Ads e Google Ads em BH",
  description:
    "Gestao de campanhas em Meta Ads e Google Ads com planejamento estruturado, testes continuos e monitoramento de resultados. Atendemos empresas em Belo Horizonte e regiao.",
  alternates: {
    canonical: "https://ondemanddigital.com.br/servicos/trafego-pago",
  },
  openGraph: {
    images: [
      {
        url: `/og?title=Trafego+Pago&type=service`,
        width: 1200,
        height: 630,
      },
    ],
  },
}

const WHATSAPP_URL =
  "https://wa.me/5531996966686?text=Quero+saber+mais+sobre+Trafego+Pago"

export default function TrafegoPagoPage() {
  return (
    <main className="od-page bg-[#09090b] min-h-screen">
      <Navigation />

      <PageHero
        eyebrow="Serviço"
        title={
          <>
            Trafego Pago.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
              Meta Ads e Google Ads
            </span>
          </>
        }
        subtitle="Planejamento e gestao de campanhas pagas com foco em objetivos claros, segmentacao adequada ao seu publico e monitoramento continuo para ajustes precisos."
      />

      {/* O que fazemos */}
      <section className="od-section py-16 border-t border-zinc-800/60 od-reveal-section">
        <div className="od-container px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-display font-black text-white mb-8"
              style={{ fontSize: "var(--text-h2)" }}
            >
              O que fazemos
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 od-stagger-children">
              {[
                {
                  title: "Estruturacao de campanhas",
                  body: "Criamos a arquitetura da conta, definimos objetivos de campanha, conjuntos de anuncios e criativos alinhados ao funil de vendas do seu negocio.",
                },
                {
                  title: "Segmentacao de publico",
                  body: "Identificamos e configuramos os publicos mais propensos a converter, incluindo remarketing, lookalikes e segmentacoes por interesse e intencao de compra.",
                },
                {
                  title: "Testes e otimizacao",
                  body: "Rodamos testes A/B em criativos, textos e publicos para identificar o que gera melhor custo por resultado e escalar o que funciona.",
                },
                {
                  title: "Monitoramento e relatorio",
                  body: "Acompanhamento semanal de metricas e relatorio mensal com analise de desempenho, comparativo de periodos e proximos passos.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors"
                >
                  <h3 className="text-white font-bold mb-3">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Para quem e indicado */}
      <section className="od-section py-16 border-t border-zinc-800/60 od-reveal-section">
        <div className="od-container px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-display font-black text-white mb-6"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Para quem e indicado
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed" style={{ fontSize: "var(--text-body)" }}>
              Trafego pago funciona bem para negocios que ja tem um produto ou servico validado e precisam de previsibilidade na aquisicao de clientes. Trabalhamos com:
            </p>
            <ul className="space-y-3 od-stagger-children">
              {[
                "Empresas locais que querem aumentar o volume de contatos e visitas",
                "E-commerces que buscam reducao no custo de aquisicao por pedido",
                "Prestadores de servico que dependem de agendamentos e orcamentos",
                "Negocios que ja investem em anuncios mas nao tem clareza sobre o retorno",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-300">
                  <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Como funciona o processo */}
      <section className="od-section py-16 border-t border-zinc-800/60 od-reveal-section">
        <div className="od-container px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-display font-black text-white mb-8"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Como funciona o processo
            </h2>
            <ol className="space-y-6 od-stagger-children">
              {[
                {
                  step: "01",
                  title: "Diagnostico",
                  body: "Analisamos o historico de campanhas, o negocio, o publico e os concorrentes para definir a melhor estrategia de entrada.",
                },
                {
                  step: "02",
                  title: "Planejamento",
                  body: "Definimos objetivos, orcamento, plataformas prioritarias, estrutura de campanha e cronograma de testes.",
                },
                {
                  step: "03",
                  title: "Lancamento",
                  body: "Configuramos as campanhas, criamos os criativos iniciais e iniciamos o periodo de aprendizado das plataformas.",
                },
                {
                  step: "04",
                  title: "Otimizacao continua",
                  body: "Com base nos dados coletados, ajustamos lances, pausamos o que nao converte e escalamos o que funciona.",
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
      <section className="od-section py-20 border-t border-zinc-800/60 od-reveal-section">
        <div className="od-container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="font-display font-black text-white mb-4"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Quer estruturar suas campanhas?
            </h2>
            <p className="text-zinc-400 mb-8" style={{ fontSize: "var(--text-body)" }}>
              Fale com a gente. Fazemos um diagnostico rapido do que esta funcionando e do que pode melhorar nas suas campanhas atuais.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-base transition-all duration-200 shadow-lg shadow-violet-500/20"
            >
              Falar pelo WhatsApp
            </a>
            <p className="mt-6 text-sm text-zinc-600">
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
