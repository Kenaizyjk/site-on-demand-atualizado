import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Serviços | On Demand Digital',
  description:
    'Tráfego pago, SEO local, automação com IA e gestão de redes sociais. Veja como a On Demand Digital executa cada serviço com método e transparência.',
  alternates: { canonical: 'https://ondemanddigital.com.br/servicos' },
  openGraph: {
    title: 'Serviços | On Demand Digital',
    description:
      'Marketing digital especializado para PMEs locais. Tráfego pago, SEO local, automação com IA e social media.',
    url: 'https://ondemanddigital.com.br/servicos',
    locale: 'pt_BR',
    type: 'website',
  },
}

const servicos = [
  {
    icone: '📈',
    titulo: 'Tráfego Pago',
    subtitulo: 'Google & Meta Ads',
    badge: 'Leads em 30 a 60 dias',
    badgeColor: 'cyan',
    paraQuem:
      'Para quem quer gerar leads e vendas agora, com controle total do custo por aquisição.',
    inclui: [
      'Configuração e estrutura de campanhas do zero',
      'Segmentação por público, intenção e localização',
      'Acompanhamento semanal com ajustes de lance e copy',
      'Relatório mensal com métricas que importam',
      'Rastreamento de conversões configurado corretamente',
    ],
    resultado: 'Leads qualificados chegando em 30 a 60 dias de campanha.',
    destaque: 'R$ 18 médio por lead em campanhas para clínicas locais',
  },
  {
    icone: '📍',
    titulo: 'SEO Local',
    subtitulo: 'Google Meu Negócio',
    badge: 'Top 3 no Maps em 60-90 dias',
    badgeColor: 'violet',
    paraQuem:
      'Para negócios locais que querem aparecer quando alguém busca o seu serviço perto deles.',
    inclui: [
      'Otimização completa do perfil Google Meu Negócio',
      'SEO on-page com palavras-chave locais',
      'Criação de conteúdo voltado para busca local',
      'Gestão e estratégia de avaliações autênticas',
      'Postagens regulares no GMB para manter relevância',
    ],
    resultado: 'Posição Top 3 no Google Maps em 60 a 90 dias para a maioria dos segmentos.',
    destaque: '+187% em agendamentos via Google para clínica odontológica em BH',
  },
  {
    icone: '🤖',
    titulo: 'Automação com IA',
    subtitulo: 'n8n + Integrações',
    badge: '60-80% menos trabalho manual',
    badgeColor: 'cyan',
    paraQuem:
      'Para quem quer escalar operação sem contratar mais pessoas para tarefas repetitivas.',
    inclui: [
      'Mapeamento dos processos que podem ser automatizados',
      'Criação de fluxos no n8n com lógica personalizada',
      'Integração com WhatsApp, CRM e ferramentas existentes',
      'Automação de follow-up, agendamento e relatórios',
      'Documentação e treinamento da equipe',
    ],
    resultado: '60 a 80% de redução de trabalho manual em processos repetitivos.',
    destaque: 'Atendimento automatizado via WhatsApp sem perder personalização',
  },
  {
    icone: '📱',
    titulo: 'Gestão de Redes Sociais',
    subtitulo: 'Instagram · LinkedIn · Facebook',
    badge: 'Presença consistente',
    badgeColor: 'violet',
    paraQuem:
      'Para quem quer presença digital consistente sem gastar horas por semana pensando em conteúdo.',
    inclui: [
      'Calendário editorial mensal alinhado com o negócio',
      'Criação de conteúdo: copy, arte e legenda',
      'Agendamento e publicação nas plataformas certas',
      'Monitoramento de comentários e mensagens',
      'Relatório mensal de alcance, engajamento e crescimento',
    ],
    resultado: 'Feed ativo, consistente e alinhado com a identidade da marca, sem você precisar se preocupar.',
    destaque: 'Calendário editorial aprovado uma vez por mês, sem reuniões semanais',
  },
]

const processo = [
  {
    step: '01',
    titulo: 'Diagnóstico',
    descricao: 'Mapeamos o cenário atual: o que existe, o que funciona e onde estão os buracos.',
  },
  {
    step: '02',
    titulo: 'Estratégia',
    descricao: 'Definimos quais canais e táticas fazem sentido para o seu momento e orçamento.',
  },
  {
    step: '03',
    titulo: 'Execução',
    descricao: 'Implementamos com atenção a cada detalhe: segmentação, copy, landing, automação.',
  },
  {
    step: '04',
    titulo: 'Relatório',
    descricao: 'Você recebe um relatório mensal claro, com o que funcionou, o que ajustamos e o próximo passo.',
  },
]

export default function ServicosPage() {
  return (
    <div className="od-page">
      <Navigation />

      {/* Hero */}
      <section className="od-section-lg pt-32">
        <div className="od-container text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-6">
            Serviços
          </span>
          <h1 className="font-display font-black tracking-tight text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            O que fazemos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              e como fazemos diferente
            </span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Especialização focada em cada serviço. Sem tentar fazer tudo para todo mundo.
          </p>
        </div>
      </section>

      {/* Cards de serviços */}
      <section className="od-section">
        <div className="od-container max-w-5xl mx-auto space-y-8">
          {servicos.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 hover:border-violet-500/30 transition-colors overflow-hidden"
            >
              <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                {/* Esquerda */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{s.icone}</span>
                    <div>
                      <h2 className="font-display font-black text-2xl text-white leading-tight">
                        {s.titulo}
                      </h2>
                      <p className="text-zinc-500 text-sm">{s.subtitulo}</p>
                    </div>
                  </div>

                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${
                      s.badgeColor === 'cyan'
                        ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300'
                        : 'bg-violet-500/10 border border-violet-500/20 text-violet-300'
                    }`}
                  >
                    {s.badge}
                  </span>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{s.paraQuem}</p>

                  <div className="rounded-xl border border-zinc-800/60 bg-zinc-950/40 px-4 py-3">
                    <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Resultado esperado</p>
                    <p className="text-white text-sm font-medium">{s.resultado}</p>
                  </div>
                </div>

                {/* Direita */}
                <div>
                  <h3 className="text-zinc-300 font-semibold text-sm uppercase tracking-widest mb-4">
                    O que está incluso
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {s.inclui.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-zinc-400 text-sm">
                        <span className="text-cyan-400 mt-0.5 shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3">
                    <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-1">
                      Destaque real
                    </p>
                    <p className="text-zinc-300 text-sm">{s.destaque}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Processo */}
      <section className="od-section bg-zinc-950/40">
        <div className="od-container">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-4">
              Processo
            </span>
            <h2 className="font-display font-black tracking-tight text-3xl md:text-4xl text-white">
              Como funciona na prática
            </h2>
            <p className="text-zinc-400 mt-3 max-w-xl mx-auto">
              Para todos os serviços, seguimos o mesmo processo. Consistência gera resultado.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processo.map((p, i) => (
              <div key={i} className="relative">
                <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 hover:border-cyan-500/30 transition-colors h-full">
                  <div className="font-display font-black text-4xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-violet-400 mb-3 leading-none">
                    {p.step}
                  </div>
                  <h3 className="font-display font-black text-white text-lg mb-2">{p.titulo}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{p.descricao}</p>
                </div>
                {i < processo.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-zinc-700 text-lg">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="od-section-lg">
        <div className="od-container text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-6">
            Próximo passo
          </span>
          <h2 className="font-display font-black tracking-tight text-3xl md:text-4xl text-white mb-4">
            Não sabe qual serviço é certo para você?
          </h2>
          <p className="text-zinc-400 mb-8">
            Me conta o que você quer resolver e a gente te indica qual caminho faz sentido,
            sem tentar vender o que não cabe no seu momento.
          </p>
          <a
            href="https://wa.me/5531996966686?text=Ol%C3%A1%2C%20vi%20os%20servi%C3%A7os%20da%20On%20Demand%20e%20quero%20entender%20qual%20faz%20mais%20sentido%20para%20meu%20neg%C3%B3cio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-opacity text-lg"
          >
            Ver qual serviço é certo para mim
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
