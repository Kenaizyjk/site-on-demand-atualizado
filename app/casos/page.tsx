import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Casos de Sucesso em Marketing Digital',
  description:
    'Resultados reais de clientes reais. Veja como a On Demand Digital ajudou clínicas, restaurantes e e-commerces em BH a crescer com marketing digital.',
  alternates: { canonical: 'https://ondemanddigital.com.br/casos' },
  openGraph: {
    title: 'Casos de Sucesso | On Demand Digital',
    description:
      'Números reais. Segmentos reais. Veja os resultados que nossos clientes conseguem contar.',
    url: 'https://ondemanddigital.com.br/casos',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const cases = [
  {
    segmento: 'Clinica Odontologica · BH',
    badge: 'SEO Local + Google Ads',
    destaque: '+187% de agendamentos via Google',
    periodo: '4 meses de trabalho',
    antes:
      'Dependia 100% de indicacao. Invisivel no Google Maps. Zero presenca em busca paga.',
    fizemos: [
      'Perfil GMB otimizado com fotos, servicos e respostas a avaliacoes',
      'SEO local com palavras-chave de intencao de agendamento',
      'Campanhas Google Ads com raio de 5 km da clinica',
      'Landing page especifica para conversao de novos pacientes',
    ],
    metricas: [
      { label: 'CTR organico', valor: '+230%' },
      { label: 'Custo por agendamento', valor: 'R$ 18' },
      { label: 'Avaliacao Google', valor: '4,9\u2605' },
    ],
  },
  {
    segmento: 'Restaurante · Centro de BH',
    badge: 'GMB + Redes Sociais',
    destaque: 'Top 3 no Google Maps · +62 avaliacoes em 3 meses',
    periodo: '3 meses de trabalho',
    antes:
      'Aparecia na pagina 2 do Maps. Poucos clientes novos, muita dependencia de cliente fiel.',
    fizemos: [
      'Reestruturacao completa do perfil Google Meu Negocio',
      'Estrategia de captacao de avaliacoes autenticas',
      'Conteudo de redes sociais com foco em localizacao e cardapio',
      'Postagens semanais no GMB com promocoes e eventos',
    ],
    metricas: [
      { label: 'Posicao no Maps', valor: 'Top 3' },
      { label: 'Novos clientes/mes', valor: '+45%' },
      { label: 'Avaliacoes coletadas', valor: '62' },
    ],
  },
  {
    segmento: 'E-commerce de Moda',
    badge: 'Trafego Pago Google + Meta',
    destaque: 'ROAS 4,2x em Google Shopping',
    periodo: '60 dias de otimizacao',
    antes:
      'Campanhas ativas sem estrutura. ROAS de 1,4x. CAC alto e sem clareza sobre qual canal vendia.',
    fizemos: [
      'Reestruturacao completa do Google Shopping com feed otimizado',
      'Campanhas Meta Ads com criativos testados por segmento',
      'Funil de remarketing para abandono de carrinho',
      'Dashboard de atribuicao para entender cada venda',
    ],
    metricas: [
      { label: 'ROAS Google Shopping', valor: '4,2x' },
      { label: 'Reducao de CAC', valor: '-38%' },
      { label: 'Taxa de conversao', valor: '+3,1pp' },
    ],
  },
]

export default function CasosPage() {
  return (
    <div className="od-page">
      <Navigation />

      {/* Hero */}
      <section className="od-section-lg pt-32">
        <div className="od-container text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-white/50 text-xs font-semibold uppercase tracking-widest mb-6">
            Casos de sucesso
          </span>
          <h1 className="font-display font-black tracking-tight text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Resultados que nossos clientes{' '}
            <span className="text-white/60">
              conseguem contar
            </span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Numeros reais. Segmentos reais. Nada de caso generico ou metrica inflada.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="od-section">
        <div className="od-container max-w-5xl mx-auto space-y-10">
          {cases.map((c, i) => (
            <article
              key={i}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-colors overflow-hidden"
            >
              {/* Header do case */}
              <div className="p-6 md:p-8 border-b border-white/[0.06]">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-zinc-400 text-sm font-medium">{c.segmento}</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/[0.04] border border-white/[0.1] text-white/50">
                    {c.badge}
                  </span>
                </div>
                <h2 className="font-display font-black text-2xl md:text-3xl text-white mb-2">
                  {c.destaque}
                </h2>
                <p className="text-zinc-500 text-sm">{c.periodo}</p>
              </div>

              {/* Corpo do case */}
              <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-zinc-300 font-semibold text-sm uppercase tracking-widest mb-3">
                    Situacao antes
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{c.antes}</p>

                  <h3 className="text-zinc-300 font-semibold text-sm uppercase tracking-widest mb-3">
                    O que fizemos
                  </h3>
                  <ul className="space-y-2">
                    {c.fizemos.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-zinc-400 text-sm">
                        <span className="text-white/40 mt-0.5 shrink-0">&rarr;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metricas */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-zinc-300 font-semibold text-sm uppercase tracking-widest mb-4">
                    Resultados alcancados
                  </h3>
                  <div className="space-y-4">
                    {c.metricas.map((m) => (
                      <div
                        key={m.label}
                        className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-zinc-950/60 px-4 py-3"
                      >
                        <span className="text-zinc-400 text-sm">{m.label}</span>
                        <span className="font-display font-black text-xl text-white">
                          {m.valor}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Aviso de privacidade */}
      <section className="od-container max-w-5xl mx-auto px-4 pb-4">
        <p className="text-zinc-600 text-xs text-center">
          * Nomes e dados identificaveis dos clientes sao omitidos por acordo de
          confidencialidade. Metricas sao reais e documentadas.
        </p>
      </section>

      {/* CTA */}
      <section className="od-section-lg">
        <div className="od-container text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-white/50 text-xs font-semibold uppercase tracking-widest mb-6">
            Proximo passo
          </span>
          <h2 className="font-display font-black tracking-tight text-3xl md:text-4xl text-white mb-4">
            Quer ser o proximo caso de sucesso?
          </h2>
          <p className="text-zinc-400 mb-8">
            Diagnostico gratuito de 30 minutos. Analisamos o seu negocio e identificamos as
            maiores oportunidades, sem compromisso.
          </p>
          <a
            href="https://wa.me/5531996966686?text=Ol%C3%A1%2C%20vi%20os%20casos%20de%20sucesso%20e%20quero%20entender%20como%20voc%C3%AAs%20podem%20ajudar%20meu%20neg%C3%B3cio."
            target="_blank"
            rel="noopener noreferrer"
            className="od-cta-button inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-lg"
          >
            Quero resultados assim tambem
          </a>
          <p className="text-zinc-600 text-sm mt-4">
            Resposta em ate 2 horas em dias uteis
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
