import Link from "next/link"
import { ArrowLeft, TrendingDown, TrendingUp, Calendar, Users, DollarSign, Target, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case: CPL R$ 85  R$ 23 em Clínicas | On Demand Digital",
  description: "Como reduzimos o Custo por Lead em 73% para clínica estética atravs de segmentação precisa e automação de WhatsApp.",
}

export default function CaseClinicaMedCarePage() {
  return (
    <main className="od-page">
      {/* Hero */}
      <section className="od-section py-20 bg-gradient-to-b from-[#0D1117] to-[#161B22] border-b border-[#30363D]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <Link href="/#cases" className="inline-flex items-center gap-2 text-sm text-[#00d9ff] hover:text-[#ff006e] transition mb-8">
            <ArrowLeft size={16} />
            Voltar para Cases
          </Link>

          <span className="inline-block px-4 py-2 bg-[#ff006e]/20 text-[#ff006e] text-sm font-bold rounded-full mb-6">
            Case de Sucesso: Clínicas Estticas
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Como Reduzimos o CPL de{" "}
            <span className="text-[#ff006e]">R$ 85 para R$ 23</span>
            <br />
            em Clínicas Estticas
          </h1>

          <p className="text-xl text-[#E6E6FA]/80 mb-8 leading-relaxed">
            Estratégia de segmentação geográfica precisa + automação de WhatsApp que gerou 350% mais leads com 73% menos custo.
          </p>

          <div className="grid od-reveal md:grid-cols-4 gap-6">
            <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
              <TrendingDown className="text-[#ff006e] mb-3" size={32} />
              <p className="text-3xl font-bold text-white mb-1">-73%</p>
              <p className="text-sm text-[#E6E6FA]/70">Redução CPL</p>
            </div>
            <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
              <TrendingUp className="text-[#00d966] mb-3" size={32} />
              <p className="text-3xl font-bold text-white mb-1">+350%</p>
              <p className="text-sm text-[#E6E6FA]/70">Mais Leads</p>
            </div>
            <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
              <Users className="text-[#00d9ff] mb-3" size={32} />
              <p className="text-3xl font-bold text-white mb-1">540</p>
              <p className="text-sm text-[#E6E6FA]/70">Leads/mês</p>
            </div>
            <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
              <DollarSign className="text-[#9d4edd] mb-3" size={32} />
              <p className="text-3xl font-bold text-white mb-1">5.2x</p>
              <p className="text-sm text-[#E6E6FA]/70">ROAS Final</p>
            </div>
          </div>
        </div>
      </section>

      {/* O Desafio */}
      <section className="od-section py-16 bg-[#161B22]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <h2 className="text-3xl font-bold mb-6 text-[#ff006e]">O Desafio</h2>
          <p className="text-lg text-[#E6E6FA]/80 mb-6 leading-relaxed">
            Uma clínica estética em So Paulo estava investindo R$ 10.200/mês em Meta Ads e Google Ads, gerando apenas 120 leads por mês. O CPL estava em R$ 85 - muito acima da média do setor (R$ 30-40).
          </p>

          <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Principais Problemas Identificados:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#ff006e] mt-2 flex-shrink-0"></div>
                <span className="text-[#E6E6FA]/80"><strong className="text-white">Segmentação muito ampla:</strong> Anúncios rodando para todo o Brasil, desperdiando impressões</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#ff006e] mt-2 flex-shrink-0"></div>
                <span className="text-[#E6E6FA]/80"><strong className="text-white">Criativos genéricos:</strong> Fotos de banco de imagens sem diferenciao</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#ff006e] mt-2 flex-shrink-0"></div>
                <span className="text-[#E6E6FA]/80"><strong className="text-white">Landing page não otimizada:</strong> Taxa de conversão de apenas 1.2%</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#ff006e] mt-2 flex-shrink-0"></div>
                <span className="text-[#E6E6FA]/80"><strong className="text-white">Sem automação:</strong> Tempo médio de resposta de 6+ horas</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* A Estratégia */}
      <section className="od-section py-16 bg-[#0D1117]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <h2 className="text-3xl font-bold mb-8 text-[#00d9ff]">A Estratégia Aplicada</h2>

          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "Segmentação Geogrfica Precisa",
                description: "Focamos em um raio de 15km da clínica, priorizando bairros com renda compatível (A e B). Resultado: 67% menos impressões mas 4x mais qualificação.",
                color: "#ff006e"
              },
              {
                number: "02",
                title: "Criativos Baseados em Prova Social",
                description: "Substituímos fotos de estoque por antes/depois reais + depoimentos em vídeo dos clientes. CTR subiu de 0.8% para 3.2%.",
                color: "#00d9ff"
              },
              {
                number: "03",
                title: "Landing Page Otimizada",
                description: "Reduzimos de 8 para 3 campos no formulário, adicionamos chat ao vivo e incluímos prova social acima da dobra. Taxa de conversão: 1,2% -> 8,7%.",
                color: "#00d966"
              },
              {
                number: "04",
                title: "Automação de WhatsApp",
                description: "Implementamos bot que responde em 30 segundos com confirmação, localização e lembretes automáticos. Taxa de agendamento: 22% -> 54%.",
                color: "#9d4edd"
              }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold" style={{ backgroundColor: `${step.color}20`, color: step.color }}>
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-[#E6E6FA]/80 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="od-section py-16 bg-[#161B22] border-y border-[#30363D]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <h2 className="text-3xl font-bold mb-8 text-[#00d966]">Resultados em 6 Meses</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="od-card">
                  <th className="border border-[#30363D] p-4 text-left text-white">Métrica</th>
                  <th className="border border-[#30363D] p-4 text-center text-white">Antes</th>
                  <th className="border border-[#30363D] p-4 text-center text-white">Depois</th>
                  <th className="border border-[#30363D] p-4 text-center text-[#00d966]">Melhoria</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: "Leads/mês", before: "120", after: "540", improvement: "+350%", highlight: true },
                  { metric: "CPL", before: "R$ 85", after: "R$ 23", improvement: "-73%", highlight: true },
                  { metric: "Taxa de Conversão", before: "1.2%", after: "8.7%", improvement: "+625%" },
                  { metric: "Investimento", before: "R$ 10.2k", after: "R$ 12.4k", improvement: "+21%" },
                  { metric: "Receita", before: "R$ 96k", after: "R$ 340k", improvement: "+254%" },
                  { metric: "ROAS", before: "0.9x", after: "5.2x", improvement: "+478%", highlight: true }
                ].map((row, idx) => (
                  <tr key={idx} className={row.highlight ? "bg-[#00d966]/5" : ""}>
                    <td className="border border-[#30363D] p-4 text-[#E6E6FA] font-semibold">{row.metric}</td>
                    <td className="border border-[#30363D] p-4 text-center text-[#E6E6FA]/60">{row.before}</td>
                    <td className="border border-[#30363D] p-4 text-center text-white font-bold">{row.after}</td>
                    <td className="border border-[#30363D] p-4 text-center text-[#00d966] font-bold">{row.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="od-section py-16 bg-[#0D1117]">
        <div className="od-container max-w-4xl px-4 od-reveal">
          <div className="bg-gradient-to-br from-[#161B22] to-[#0D1117] border-2 border-[#ff006e]/30 rounded-xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ff006e]/20 to-[#00d9ff]/20 flex items-center justify-center">
                <Users className="w-10 h-10 text-[#ff006e]" />
              </div>
              <div>
                <p className="font-bold text-xl text-white">Dr. Carlos Mendes</p>
                <p className="text-[#E6E6FA]/60">Diretor Médico, Clínica MedCare</p>
              </div>
            </div>
            <p className="text-lg text-[#E6E6FA]/90 leading-relaxed italic mb-4">
              "A transformação foi impressionante. Passamos de gastar mais de R$ 10k/mês com poucos resultados para ter uma máquina de geração de leads previsível. O melhor de tudo: os leads são muito mais qualificados. A taxa de conversão de consulta para procedimento subiu 40%."
            </p>
            <p className="text-[#E6E6FA]/90 leading-relaxed italic">
              "O diferencial da On Demand não foi apenas a estratégia técnica, mas o atendimento personalizado e a transparência total nos resultados. Dashboard em tempo real mudou como tomamos decisões."
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="od-section py-16 bg-[#161B22]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <h2 className="text-3xl font-bold mb-8 text-[#9d4edd]">Timeline do Projeto</h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff006e] via-[#00d9ff] to-[#00d966]"></div>

            {[
              { month: "Mês 1", title: "Diagnóstico e Setup", tasks: ["Auditoria completa das campanhas", "Configuração de pixels e CAPI", "Criação de landing pages otimizadas", "Setup de automação WhatsApp"] },
              { month: "Ms 2", title: "Lançamento e Testes", tasks: ["Lançamento das novas campanhas", "Testes A/B de criativos", "Ajustes de segmentação", "Primeiros leads qualificados"] },
              { month: "Ms 3", title: "Otimização", tasks: ["CPL reduziu para R$ 45", "Expansão de públicos", "Novos criativos baseados em performance", "540 leads/mês alcanados"] },
              { month: "Ms 4-6", title: "Scale e Consistência", tasks: ["CPL estabilizou em R$ 23", "ROAS consistente 5.0x-5.5x", "Automao rodando 24/7", "Receita mensal R$ 300k+"] }
            ].map((phase, idx) => (
              <div key={idx} className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-0 w-16 h-16 rounded-full bg-[#0D1117] border-4 border-[#ff006e] flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#ff006e]" />
                </div>
                <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#ff006e]/20 text-[#ff006e] text-sm font-bold rounded-full">{phase.month}</span>
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, taskIdx) => (
                      <li key={taskIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00d966] flex-shrink-0 mt-0.5" />
                        <span className="text-[#E6E6FA]/80">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="od-section py-16 bg-gradient-to-r from-[#ff006e]/10 to-[#00d9ff]/10 border-y border-[#ff006e]/30">
        <div className="od-container max-w-4xl px-4 text-center od-reveal">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Quer Resultados Similares para Sua Clnica?
          </h2>
          <p className="text-xl text-[#E6E6FA]/80 mb-8 leading-relaxed">
            Este case é replicável para outras clínicas estéticas, odontolgicas e mdicas. Agende uma análise gratuita e veja quanto você pode economizar em CPL.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff1493] to-[#ff006e] text-white font-bold text-lg uppercase tracking-wider rounded-lg hover:shadow-2xl hover:shadow-[#ff006e]/50 transition-all duration-300"
          >
            <Target className="w-6 h-6" />
            Agendar Análise Gratuita
          </Link>
        </div>
      </section>
    </main>
  )
}



