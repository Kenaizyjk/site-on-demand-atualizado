import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PageHero from "@/components/page-hero"
import GMBShowcase from "@/components/gmb-showcase"

export const metadata: Metadata = {
  title: "SEO Local e Google Meu Negocio em BH - On Demand Digital",
  description:
    "Otimizacao de SEO local para empresas em Belo Horizonte. Melhoramos sua visibilidade no Google Meu Negocio, buscas organicas locais e conteudo para atrair clientes na sua regiao.",
  alternates: {
    canonical: "https://ondemanddigital.com.br/servicos/seo-local",
  },
  openGraph: {
    images: [
      {
        url: `/og?title=SEO+Local+e+Google+Meu+Negocio&type=service`,
        width: 1200,
        height: 630,
      },
    ],
  },
}

const WHATSAPP_URL =
  "https://wa.me/5531996966686?text=Quero+saber+mais+sobre+SEO+Local"

export default function SeoLocalPage() {
  return (
    <main className="od-page bg-[#09090b] min-h-screen">
      <Navigation />

      <PageHero
        eyebrow="Serviço"
        title={
          <>
            SEO Local e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Google Meu Negocio
            </span>
          </>
        }
        subtitle="Estruturamos a presenca organica da sua empresa nas buscas locais, para que clientes da sua regiao encontrem voce com facilidade no Google."
      />

      {/* GMB Showcase */}
      <div className="od-reveal-section">
        <GMBShowcase />
      </div>

      {/* O que e SEO local */}
      <section className="od-section py-16 border-t border-zinc-800/60 od-reveal-section">
        <div className="od-container px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-display font-black text-white mb-6"
              style={{ fontSize: "var(--text-h2)" }}
            >
              O que e SEO local
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4" style={{ fontSize: "var(--text-body)" }}>
              SEO local e o conjunto de tecnicas que melhora a posicao de um negocio nas buscas geograficamente relevantes. Quando alguem pesquisa "clinica odontologica em BH" ou "restaurante perto de mim", os resultados que aparecem no topo foram otimizados para isso.
            </p>
            <p className="text-zinc-400 leading-relaxed" style={{ fontSize: "var(--text-body)" }}>
              O Google Meu Negocio e o ponto central dessa estrategia. Um perfil bem configurado aparece no Maps, no painel lateral do Google e em resultados de busca local, aumentando a visibilidade sem depender de anuncios pagos.
            </p>
          </div>
        </div>
      </section>

      {/* Por que e importante para negocios em BH */}
      <section className="od-section py-16 border-t border-zinc-800/60 od-reveal-section">
        <div className="od-container px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-display font-black text-white mb-6"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Por que e importante para negocios em BH
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6" style={{ fontSize: "var(--text-body)" }}>
              Belo Horizonte e uma cidade grande, com alta concorrencia em praticamente todos os segmentos. Estar bem posicionado nas buscas locais faz diferenca para negocios que dependem de clientes da regiao: clinicas, escritorios, lojas fisicas, restaurantes e prestadores de servico.
            </p>
            <ul className="space-y-3 od-stagger-children">
              {[
                "Clientes que pesquisam com intencao de contratar ou visitar tendem a converter mais",
                "Presenca organica nao depende de investimento continuo em anuncios",
                "Avaliaces e fotos atualizadas aumentam a confianca antes do primeiro contato",
                "Negocios com perfil otimizado aparecem no mapa e nos resultados locais ao mesmo tempo",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-300">
                  <span className="mt-1 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* O que otimizamos */}
      <section className="od-section py-16 border-t border-zinc-800/60 od-reveal-section">
        <div className="od-container px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="font-display font-black text-white mb-8"
              style={{ fontSize: "var(--text-h2)" }}
            >
              O que otimizamos
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 od-stagger-children">
              {[
                {
                  title: "Google Meu Negocio",
                  body: "Configuracao e otimizacao completa do perfil: categoria, horario, fotos, descricao, perguntas e respostas e publicacoes regulares.",
                },
                {
                  title: "Consistencia de NAP",
                  body: "Verificamos e corrigimos nome, endereco e telefone em todos os diretorios e plataformas para garantir consistencia e credibilidade com o Google.",
                },
                {
                  title: "Conteudo local",
                  body: "Criacao de paginas e textos otimizados para palavras-chave com intencao local, como bairros, servicos e diferenciais da empresa.",
                },
                {
                  title: "Acompanhamento de posicoes",
                  body: "Monitoramento das posicoes para as principais palavras-chave locais e analise mensal de cliques, impressoes e acoes no perfil.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors"
                >
                  <h3 className="text-white font-bold mb-3">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
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
              Sua empresa aparece bem nas buscas locais?
            </h2>
            <p className="text-zinc-400 mb-8" style={{ fontSize: "var(--text-body)" }}>
              Fale com a gente e veja como podemos organizar sua presenca organica para atrair mais clientes da regiao sem depender de anuncios.
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
