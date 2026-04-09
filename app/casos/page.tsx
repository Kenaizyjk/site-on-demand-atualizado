import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Casos de Sucesso | On Demand Digital',
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
}

const cases = [
  {
    segmento: 'Clínica Odontológica · BH',
    badge: 'SEO Local + Google Ads',
    badgeColor: 'cyan',
    destaque: '+187% de agendamentos via Google',
    periodo: '4 meses de trabalho',
    antes:
      'Dependia 100% de indicação. Invisível no Google Maps. Zero presença em busca paga.',
    fizemos: [
      'Perfil GMB otimizado com fotos, serviços e respostas a avaliações',
      'SEO local com palavras-chave de intenção de agendamento',
      'Campanhas Google Ads com raio de 5 km da clínica',
      'Landing page específica para conversão de novos pacientes',
    ],
    metricas: [
      { label: 'CTR orgânico', valor: '+230%' },
      { label: 'Custo por agendamento', valor: 'R$ 18' },
      { label: 'Avaliação Google', valor: '4,9★' },
    ],
  },
  {
    segmento: 'Restaurante · Centro de BH',
    badge: 'GMB + Redes Sociais',
    badgeColor: 'violet',
    destaque: 'Top 3 no Google Maps · +62 avaliações em 3 meses',
    periodo: '3 meses de trabalho',
    antes:
      'Aparecia na página 2 do Maps. Poucos clientes novos, muita dependência de cliente fiel.',
    fizemos: [
      'Reestruturação completa do perfil Google Meu Negócio',
      'Estratégia de captação de avaliações autênticas',
      'Conteúdo de redes sociais com foco em localização e cardápio',
      'Postagens semanais no GMB com promoções e eventos',
    ],
    metricas: [
      { label: 'Posição no Maps', valor: 'Top 3' },
      { label: 'Novos clientes/mês', valor: '+45%' },
      { label: 'Avaliações coletadas', valor: '62' },
    ],
  },
  {
    segmento: 'E-commerce de Moda',
    badge: 'Tráfego Pago Google + Meta',
    badgeColor: 'cyan',
    destaque: 'ROAS 4,2x em Google Shopping',
    periodo: '60 dias de otimização',
    antes:
      'Campanhas ativas sem estrutura. ROAS de 1,4x. CAC alto e sem clareza sobre qual canal vendia.',
    fizemos: [
      'Reestruturação completa do Google Shopping com feed otimizado',
      'Campanhas Meta Ads com criativos testados por segmento',
      'Funil de remarketing para abandono de carrinho',
      'Dashboard de atribuição para entender cada venda',
    ],
    metricas: [
      { label: 'ROAS Google Shopping', valor: '4,2x' },
      { label: 'Redução de CAC', valor: '-38%' },
      { label: 'Taxa de conversão', valor: '+3,1pp' },
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
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-6">
            Casos de sucesso
          </span>
          <h1 className="font-display font-black tracking-tight text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Resultados que nossos clientes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              conseguem contar
            </span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Números reais. Segmentos reais. Nada de caso genérico ou métrica inflada.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="od-section">
        <div className="od-container max-w-5xl mx-auto space-y-10">
          {cases.map((c, i) => (
            <article
              key={i}
              className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 hover:border-violet-500/30 transition-colors overflow-hidden"
            >
              {/* Header do case */}
              <div className="p-6 md:p-8 border-b border-zinc-800/60">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-zinc-400 text-sm font-medium">{c.segmento}</span>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest ${
                      c.badgeColor === 'cyan'
                        ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300'
                        : 'bg-violet-500/10 border border-violet-500/20 text-violet-300'
                    }`}
                  >
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
                    Situação antes
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{c.antes}</p>

                  <h3 className="text-zinc-300 font-semibold text-sm uppercase tracking-widest mb-3">
                    O que fizemos
                  </h3>
                  <ul className="space-y-2">
                    {c.fizemos.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-zinc-400 text-sm">
                        <span className="text-cyan-400 mt-0.5 shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Métricas */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-zinc-300 font-semibold text-sm uppercase tracking-widest mb-4">
                    Resultados alcançados
                  </h3>
                  <div className="space-y-4">
                    {c.metricas.map((m) => (
                      <div
                        key={m.label}
                        className="flex items-center justify-between rounded-xl border border-zinc-800/60 bg-zinc-950/60 px-4 py-3"
                      >
                        <span className="text-zinc-400 text-sm">{m.label}</span>
                        <span className="font-display font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
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
          * Nomes e dados identificáveis dos clientes são omitidos por acordo de
          confidencialidade. Métricas são reais e documentadas.
        </p>
      </section>

      {/* CTA */}
      <section className="od-section-lg">
        <div className="od-container text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-6">
            Próximo passo
          </span>
          <h2 className="font-display font-black tracking-tight text-3xl md:text-4xl text-white mb-4">
            Quer ser o próximo caso de sucesso?
          </h2>
          <p className="text-zinc-400 mb-8">
            Diagnóstico gratuito de 30 minutos. Analisamos o seu negócio e identificamos as
            maiores oportunidades, sem compromisso.
          </p>
          <a
            href="https://wa.me/5531996966686?text=Ol%C3%A1%2C%20vi%20os%20casos%20de%20sucesso%20e%20quero%20entender%20como%20voc%C3%AAs%20podem%20ajudar%20meu%20neg%C3%B3cio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity text-lg"
          >
            Quero resultados assim também
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
