import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'
import ManifestoStrip from '@/components/manifesto-strip'
import TechStack from '@/components/tech-stack'

export const metadata: Metadata = {
  title: 'Sobre | On Demand Digital',
  description:
    'Conheça a On Demand Digital: agência de marketing digital em BH. Método, transparência e resultado mensurável para negócios locais.',
  alternates: { canonical: 'https://ondemanddigital.com.br/sobre' },
  openGraph: {
    title: 'Sobre | On Demand Digital',
    description:
      'Agência de marketing digital em BH. Método, transparência e resultado mensurável para negócios locais.',
    url: 'https://ondemanddigital.com.br/sobre',
    locale: 'pt_BR',
    type: 'website',
  },
}

const filosofia = [
  {
    titulo: 'Transparência total',
    descricao:
      'Você vê tudo: campanhas, métricas, custos, resultados. Sem relatório bonito que esconde o que não funcionou.',
    icone: '🔍',
  },
  {
    titulo: 'Execução focada',
    descricao:
      'Menos projetos simultâneos, mais atenção por cliente. Preferimos fazer menos e fazer bem do que pulverizar esforço.',
    icone: '🎯',
  },
  {
    titulo: 'Resultado mensurável',
    descricao:
      'Se não dá para medir, não conta. Toda ação tem KPI definido antes de começar e prestação de contas depois.',
    icone: '📊',
  },
]

const metodologia = [
  {
    step: '01',
    titulo: 'Diagnóstico',
    descricao:
      'Entendemos o negócio, o público, a concorrência e o que já foi tentado antes. Sem pular etapas.',
  },
  {
    step: '02',
    titulo: 'Estratégia',
    descricao:
      'Definimos canais, metas e prioridades com base em dados, não em achismos ou modismo.',
  },
  {
    step: '03',
    titulo: 'Execução',
    descricao:
      'Implementamos com atenção a cada detalhe: copy, segmentação, landing page, automação.',
  },
  {
    step: '04',
    titulo: 'Otimização',
    descricao:
      'Analisamos o que funciona, cortamos o que não funciona e iteramos. Marketing é processo, não evento.',
  },
]

const numeros = [
  { valor: '40+', label: 'Clientes atendidos' },
  { valor: '4 anos', label: 'De experiência' },
  { valor: '3', label: 'Serviços especializados' },
  { valor: '4,9★', label: 'Média de satisfação' },
]

const valores = [
  {
    titulo: 'Especialização real',
    descricao: 'Atuamos em tráfego pago, SEO local e automação com IA. Não tentamos fazer tudo para todo mundo.',
  },
  {
    titulo: 'Parceria de negócio',
    descricao: 'Cada cliente recebe atenção direta e comprometimento com resultados. Não somos mais uma fornecedora.',
  },
  {
    titulo: 'Conformidade e ética',
    descricao: 'Comunicamos dentro das normas de cada setor, incluindo CFM, CFO e LGPD. Crescimento sem atalhos.',
  },
]

export default function SobrePage() {
  return (
    <div className="od-page">
      <Navigation />

      <PageHero
        eyebrow="Sobre a agência"
        title={
          <>
            Método. Transparência.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              Resultados que você consegue medir.
            </span>
          </>
        }
        subtitle="A On Demand Digital é uma agência de marketing digital em Belo Horizonte focada em pequenas e médias empresas que querem crescer com consistência."
      />

      {/* ManifestoStrip */}
      <div className="od-reveal-section">
        <ManifestoStrip />
      </div>

      {/* A história */}
      <section className="od-section od-reveal-section">
        <div className="od-container">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-4">
                A história
              </span>
              <h2
                className="font-display font-black tracking-tight text-white mb-6"
                style={{ fontSize: "var(--text-h2)" }}
              >
                Por que a On Demand existe
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed" style={{ fontSize: "var(--text-body)" }}>
                <p>
                  A On Demand nasceu em 2022 para preencher um gap claro no mercado:
                  PMEs locais tinham acesso apenas a grandes agências que tratavam
                  cada cliente como mais um número, ou a freelancers generalistas sem método
                  nem responsabilidade sobre resultados.
                </p>
                <p>
                  Construímos uma alternativa com foco em especialização, atenção ao cliente
                  e comprometimento real com resultados. Nada de deck bonito e entrega medíocre.
                </p>
                <p>
                  Hoje atendemos clínicas, restaurantes e e-commerces em BH e região,
                  com foco em tráfego pago, SEO local e automação com IA, sempre com
                  métricas claras e transparência total.
                </p>
              </div>
            </div>

            {/* Valores institucionais */}
            <div className="space-y-4 od-stagger-children">
              {valores.map((item) => (
                <div
                  key={item.titulo}
                  className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 hover:border-cyan-500/30 transition-colors"
                >
                  <h3
                    className="font-display font-black text-white mb-2"
                    style={{ fontSize: "var(--text-body)" }}
                  >
                    {item.titulo}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="od-section bg-zinc-950/40 od-reveal-section">
        <div className="od-container">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4">
              Filosofia
            </span>
            <h2
              className="font-display font-black tracking-tight text-white"
              style={{ fontSize: "var(--text-h2)" }}
            >
              O que guia cada decisão
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto od-stagger-children">
            {filosofia.map((item) => (
              <div
                key={item.titulo}
                className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 hover:border-violet-500/30 transition-colors"
              >
                <div className="text-3xl mb-4">{item.icone}</div>
                <h3
                  className="font-display font-black text-white mb-3"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  {item.titulo}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="od-section od-reveal-section">
        <div className="od-container">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-4">
              Metodologia
            </span>
            <h2
              className="font-display font-black tracking-tight text-white"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Como trabalhamos
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto od-stagger-children">
            {metodologia.map((item) => (
              <div key={item.step} className="relative">
                <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 hover:border-cyan-500/30 transition-colors h-full">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-violet-400 mb-3 font-display leading-none">
                    {item.step}
                  </div>
                  <h3 className="font-display font-black text-white text-lg mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="od-section bg-zinc-950/40 od-reveal-section">
        <div className="od-container">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4">
              Em números
            </span>
            <h2
              className="font-display font-black tracking-tight text-white"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Resultados construídos ao longo do tempo
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto od-stagger-children">
            {numeros.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 text-center hover:border-cyan-500/30 transition-colors"
              >
                <div
                  className="font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-violet-400 mb-2"
                  style={{ fontSize: "var(--text-h1)" }}
                >
                  {item.valor}
                </div>
                <div className="text-zinc-400 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TechStack */}
      <div className="od-reveal-section">
        <TechStack />
      </div>

      {/* CTA */}
      <section className="od-section-lg od-reveal-section">
        <div className="od-container text-center max-w-2xl mx-auto">
          <h2
            className="font-display font-black tracking-tight text-white mb-4"
            style={{ fontSize: "var(--text-h2)" }}
          >
            Quer conversar com nossa equipe?
          </h2>
          <p className="text-zinc-400 mb-8" style={{ fontSize: "var(--text-body)" }}>
            Diagnóstico gratuito de 30 minutos. Sem compromisso. Sem pitch de vendas no
            primeiro contato.
          </p>
          <a
            href="https://wa.me/5531996966686?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20Sobre%20e%20gostaria%20de%20conversar%20com%20a%20equipe."
            target="_blank"
            rel="noopener noreferrer"
            data-track="sobre-whatsapp-cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold rounded-xl shadow-lg hover:opacity-90 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 text-lg"
          >
            Conversar com nossa equipe
          </a>
          <p className="text-zinc-600 text-sm mt-4">
            Resposta em até 2 horas em dias úteis
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
