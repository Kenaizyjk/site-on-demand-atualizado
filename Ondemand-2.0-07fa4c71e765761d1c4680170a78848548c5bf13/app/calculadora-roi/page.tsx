import ROICalculatorAdvanced from "@/components/roi-calculator-advanced"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Calculadora de ROI | On Demand Digital",
  description: "Simulador para entender cenários de retorno e impacto de automação no seu negócio.",
}

export default function CalculadoraROIPage() {
  return (
    <main className="od-page">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="od-container px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-pink-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Home
          </Link>
        </div>
      </div>

      {/* Calculator */}
      <div className="od-section py-12">
        <ROICalculatorAdvanced />
      </div>

      {/* Info Section */}
      <section className="od-section border-t border-gray-800 bg-gray-900/30 py-16">
        <div className="od-container max-w-4xl px-4 od-reveal">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Como Funciona a Calculadora?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">Dados que você fornece</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Investimento mensal em marketing</li>
                <li>Quantidade de leads gerados</li>
                <li>Taxa de conversão atual</li>
                <li>Ticket médio de venda</li>
                <li>Tamanho da equipe de vendas</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-purple-400 mb-3">O que calculamos</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Impactos de tempo de resposta no atendimento</li>
                <li>Estimativas de impacto financeiro</li>
                <li>Otimização de processos</li>
                <li>Cenários de evolução</li>
                <li>Indicadores de retorno (estimados)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">Metodologia</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Os cálculos são estimativas baseadas nos dados que você informa e em referências gerais de mercado.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              Use como referência para conversas internas e planejamento. Os resultados variam conforme execução, time e contexto.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-4">Quer conversar sobre o seu cenário?</p>
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full text-white font-bold hover:shadow-lg hover:shadow-pink-500/50 transition-all"
            >
              Agendar Conversa
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

