import CaseStudiesV2 from "@/components/case-studies-v2"

export const metadata = {
  title: "Casos de Sucesso 2.0 | On Demand Digital",
  description:
    "Resultados reais e ultra-detalhados dos nossos clientes. Veja como transformamos negócios com marketing digital e automação.",
}

export default function CasosV2Page() {
  return (
    <main className="od-page">
      {/* Header */}
      <section className="od-section py-20 bg-gradient-to-b from-[#0a0a0e] to-[#0D1117] border-b border-[#30363D]">
        <div className="od-container px-4 od-reveal text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 rose-glow">Casos de Sucesso 2.0</h1>
          <p className="text-xl text-[#E6E6FA]/70 max-w-3xl mx-auto mb-8">
            Transparência total. Cada número, cada estratégia, cada resultado documentado em detalhes.
            <br />
            <span className="text-[#ff006e] font-semibold">Sem enrolação. Só resultados reais.</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <div className="px-4 py-2 bg-[#161B22] border border-[#30363D] rounded">
              ✓ Casos Verificados
            </div>
            <div className="px-4 py-2 bg-[#161B22] border border-[#30363D] rounded">
              ✓ Auditados por Terceiros
            </div>
            <div className="px-4 py-2 bg-[#161B22] border border-[#30363D] rounded">
              ✓ Screenshots Reais
            </div>
            <div className="px-4 py-2 bg-[#161B22] border border-[#30363D] rounded">
              ✓ Depoimentos em Vídeo
            </div>
          </div>
        </div>
      </section>

      {/* Casos Component */}
      <CaseStudiesV2 />

      {/* Final CTA */}
      <section className="od-section py-20 bg-[#0D1117] border-t border-[#30363D]">
        <div className="od-container max-w-4xl px-4 od-reveal text-center">
          <h2 className="text-3xl font-bold text-[#E6E6FA] mb-4">
            Seu negócio pode ser o próximo caso de sucesso
          </h2>
          <p className="text-[#E6E6FA]/70 mb-8">
            Temos vagas limitadas para novos clientes. Agende um diagnóstico gratuito e descubra o potencial real do seu
            negócio.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contato"
              className="px-8 py-4 bg-gradient-to-r from-[#ff006e] to-[#ba1cbe] text-white font-bold uppercase tracking-wider rounded hover:shadow-lg hover:shadow-[#ff006e]/50 transition"
            >
              Agendar Diagnóstico Gratuito
            </a>
            <a
              href="#calculator"
              className="px-8 py-4 border border-[#ff006e] text-[#ff006e] font-semibold rounded hover:bg-[#ff006e]/10 transition"
            >
              Calcular Meu Potencial
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}


