import Link from "next/link"
import { ArrowLeft, TrendingUp, ShoppingCart, Target, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case: ROAS 1.8x → 6.8x E-commerce | On Demand Digital",
  description: "Como escalamos um e-commerce de moda de R$ 85k para R$ 520k/mês com retargeting inteligente e recovery de carrinho.",
}

export default function CaseEcommercePage() {
  return (
    <main className="od-page">
      <section className="od-section py-20 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <Link href="/#cases" className="inline-flex items-center gap-2 text-sm text-[#00d9ff] hover:text-[#ff006e] transition mb-8">
            <ArrowLeft size={16} />
            Voltar
          </Link>
          <h1 className="text-5xl font-bold mb-6">De ROAS <span className="text-[#ff006e]">1.8x para 6.8x</span> em E-commerce</h1>
          <p className="text-xl text-[#E6E6FA]/80 mb-8">Estratégia de funil completo que triplicou o faturamento em 4 meses.</p>
          
          <div className="grid od-reveal md:grid-cols-4 gap-6">
            <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
              <TrendingUp className="text-[#00d966] mb-3" size={32} />
              <p className="text-3xl font-bold text-white mb-1">6.8x</p>
              <p className="text-sm text-[#E6E6FA]/70">ROAS Final</p>
            </div>
            <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
              <ShoppingCart className="text-[#00d9ff] mb-3" size={32} />
              <p className="text-3xl font-bold text-white mb-1">R$ 520k</p>
              <p className="text-sm text-[#E6E6FA]/70">Faturamento/mês</p>
            </div>
            <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
              <Target className="text-[#9d4edd] mb-3" size={32} />
              <p className="text-3xl font-bold text-white mb-1">38%</p>
              <p className="text-sm text-[#E6E6FA]/70">Recovery Carrinho</p>
            </div>
            <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
              <CheckCircle className="text-[#00d966] mb-3" size={32} />
              <p className="text-3xl font-bold text-white mb-1">31%</p>
              <p className="text-sm text-[#E6E6FA]/70">Taxa Recompra</p>
            </div>
          </div>
        </div>
      </section>

      <section className="od-section py-16 bg-[#161B22]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <h2 className="text-3xl font-bold mb-6 text-[#ff006e]">O Contexto</h2>
          <p className="text-lg text-[#E6E6FA]/80 mb-8">E-commerce de moda feminina faturando R$ 85k/mês. ROAS estava em 1.8x - marginalmente lucrativo mas sem espaço para crescer. Ticket médio R$ 180.</p>
          
          <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4 text-white">Problemas Identificados:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-[#ff006e] mt-2"></div><span className="text-[#E6E6FA]/80">67% dos visitantes abandonavam carrinho sem recuperação</span></li>
              <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-[#ff006e] mt-2"></div><span className="text-[#E6E6FA]/80">Sem estratégia de retargeting estruturada</span></li>
              <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-[#ff006e] mt-2"></div><span className="text-[#E6E6FA]/80">Criativos saturados (mesmas imagens há 6 meses)</span></li>
              <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-[#ff006e] mt-2"></div><span className="text-[#E6E6FA]/80">Taxa de recompra baixíssima (8%)</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="od-section py-16 bg-[#0D1117]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <h2 className="text-3xl font-bold mb-8 text-[#00d9ff]">A Estratégia em 4 Fases</h2>
          <div className="space-y-6">
            {[
              { phase: "Fase 1", title: "Estruturação do Funil", desc: "TOF (Awareness): Campanhas de vídeo + carrossel lifestyle. MOF (Consideration): Retargeting 7-30 dias. BOF (Conversion): Carrinho abandonado + última chance." },
              { phase: "Fase 2", title: "Recovery de Carrinho", desc: "Sequência automatizada: Email instantâneo (5 min) → WhatsApp 2h depois → Email com desconto 24h. Recovery rate: 12% → 38%." },
              { phase: "Fase 3", title: "Novos Criativos Mensais", desc: "12 novos criativos/mês testados. Análise semanal de performance. Rotação dos top 3 performers. Saturação reduzida de 21 para 7 dias." },
              { phase: "Fase 4", title: "LTV Optimization", desc: "Programa de fidelidade implementado. Email pós-compra automatizado. Taxa de recompra: 8% → 31% em 90 dias." }
            ].map((item, idx) => (
              <div key={idx} className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-[#00d9ff]/20 text-[#00d9ff] text-sm font-bold rounded-full">{item.phase}</span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-[#E6E6FA]/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="od-section py-16 bg-[#161B22] border-y border-[#30363D]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <h2 className="text-3xl font-bold mb-8 text-[#00d966]">Resultados em 4 Meses</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="od-card">
                  <th className="border border-[#30363D] p-4 text-left text-white">KPI</th>
                  <th className="border border-[#30363D] p-4 text-center text-white">Início</th>
                  <th className="border border-[#30363D] p-4 text-center text-white">4 Meses</th>
                  <th className="border border-[#30363D] p-4 text-center text-[#00d966]">Crescimento</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { kpi: "Faturamento", start: "R$ 85k/mês", end: "R$ 520k/mês", growth: "+512%" },
                  { kpi: "ROAS", start: "1.8x", end: "6.8x", growth: "+278%" },
                  { kpi: "CAC", start: "R$ 78", end: "R$ 28", growth: "-64%" },
                  { kpi: "LTV", start: "R$ 215", end: "R$ 640", growth: "+198%" },
                  { kpi: "Ticket Médio", start: "R$ 180", end: "R$ 245", growth: "+36%" }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="border border-[#30363D] p-4 text-[#E6E6FA] font-semibold">{row.kpi}</td>
                    <td className="border border-[#30363D] p-4 text-center text-[#E6E6FA]/60">{row.start}</td>
                    <td className="border border-[#30363D] p-4 text-center text-white font-bold">{row.end}</td>
                    <td className="border border-[#30363D] p-4 text-center text-[#00d966] font-bold">{row.growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="od-section py-16 bg-gradient-to-r from-[#ff006e]/10 to-[#00d9ff]/10 border-y border-[#ff006e]/30">
        <div className="od-container max-w-4xl px-4 text-center od-reveal">
          <h2 className="text-4xl font-bold mb-6 text-white">Escale Seu E-commerce com Estratégia Comprovada</h2>
          <p className="text-xl text-[#E6E6FA]/80 mb-8">Agende uma análise gratuita do seu e-commerce e veja onde estão as oportunidades de scale.</p>
          <Link href="/#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff1493] to-[#ff006e] text-white font-bold text-lg uppercase rounded-lg hover:shadow-2xl transition">
            Analisar Meu E-commerce
          </Link>
        </div>
      </section>
    </main>
  )
}



