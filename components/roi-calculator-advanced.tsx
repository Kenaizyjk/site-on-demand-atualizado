'use client'

import Link from "next/link"

interface ROICalculatorProps {
  className?: string
}

export default function ROICalculatorAdvanced({ className = '' }: ROICalculatorProps) {
  return (
    <section className={`relative w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117] via-purple-900/20 to-[#0D1117] rounded-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)] rounded-3xl" />

      <div className="relative z-10 bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-500/20 mb-4">
          <span className="text-sm text-gray-300">Simulador de cenário</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ajustando a calculadora para mais clareza
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Estamos refinando este simulador para evitar promessas e manter a comunicação transparente. Se quiser,
          analisamos seu cenário em uma conversa direta e sem pressão.
        </p>
        <Link
          href="/#contato"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full text-white font-bold hover:shadow-lg hover:shadow-pink-500/50 transition-all"
        >
          Agendar conversa
        </Link>
      </div>
    </section>
  )
}
