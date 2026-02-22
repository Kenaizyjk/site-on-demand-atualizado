import Link from "next/link"
import { ArrowLeft, MapPin, PhoneCall, Star, DollarSign, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case: 420 Pedidos/mês com GMB | On Demand Digital",
  description: "Como geramos 420 pedidos diretos/mês para restaurante usando Google My Business e automação de WhatsApp com apenas R$ 2.400 de investimento.",
}

export default function CaseRestauranteGMBPage() {
  return (
    <main className="od-page">
      <section className="od-section py-20 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <Link href="/#cases" className="inline-flex items-center gap-2 text-sm text-[#00d9ff] hover:text-[#ff006e] transition mb-8">
            <ArrowLeft size={16} />
            Voltar
          </Link>
          <h1 className="text-5xl font-bold mb-6">GMB: <span className="text-[#00d966]">420 Pedidos/mês</span> com R$ 2.4k</h1>
          <p className="text-xl text-[#E6E6FA]/80 mb-8">Estratégia de SEO local e automação que multiplicou pedidos online por 5x reduzindo comissões de apps.</p>
          
          <div className="grid od-reveal md:grid-cols-4 gap-6">
            <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
              <TrendingUp className="text-[#00d966] mb-3" size={32} />
              <p className="text-3xl font-bold text-white mb-1">+394%</p>
              <p className="text-sm text-[#E6E6FA]/70">Pedidos Online</p>
            </div>
            <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
              <MapPin className="text-[#00d9ff] mb-3" size={32} />
              <p className="text-3xl font-bold text-white mb-1">8.900</p>
              <p className="text-sm text-[#E6E6FA]/70">Visitas GMB/mês</p>
            </div>
            <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
              <PhoneCall className="text-[#9d4edd] mb-3" size={32} />
              <p className="text-3xl font-bold text-white mb-1">340</p>
              <p className="text-sm text-[#E6E6FA]/70">Ligações/mês</p>
            </div>
            <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
              <DollarSign className="text-[#ff006e] mb-3" size={32} />
              <p className="text-3xl font-bold text-white mb-1">13.5x</p>
              <p className="text-sm text-[#E6E6FA]/70">ROI</p>
            </div>
          </div>
        </div>
      </section>

      <section className="od-section py-16 bg-[#161B22]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <h2 className="text-3xl font-bold mb-6 text-[#ff006e]">O Cliente</h2>
          <p className="text-lg text-[#E6E6FA]/80 mb-8">Rede de 3 restaurantes em Belo Horizonte. Faturamento R$ 120k/mês, apenas 15% online. Queriam aumentar delivery sem depender de iFood/Rappi (30% de comissão).</p>
          
          <div className="od-card od-card-hover border border-[#30363D] rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4 text-white">Problema:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-[#ff006e] mt-2"></div><span className="text-[#E6E6FA]/80">Invisibilidade no Google Maps</span></li>
              <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-[#ff006e] mt-2"></div><span className="text-[#E6E6FA]/80">Perfil GMB desatualizado há 8 meses</span></li>
              <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-[#ff006e] mt-2"></div><span className="text-[#E6E6FA]/80">Sem avaliações recentes</span></li>
              <li className="flex gap-3"><div className="w-2 h-2 rounded-full bg-[#ff006e] mt-2"></div><span className="text-[#E6E6FA]/80">85% dos pedidos via apps terceiros</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="od-section py-16 bg-[#0D1117]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <h2 className="text-3xl font-bold mb-8 text-[#00d9ff]">Estratégia GMB + Ads Locais</h2>
          <div className="grid od-reveal md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Otimização GMB", desc: "47 fotos profissionais, descrição otimizada, horários corretos, postagens 3x/semana" },
              { num: "02", title: "Campanha de Avaliações", desc: "E-mail pós-pedido, WhatsApp com link direto. Resultado: 12  187 avaliações (4.9)" },
              { num: "03", title: "Google Local Ads", desc: "Raio 5km, horário de pico, criativos com pratos mais pedidos. CPC: R$ 0.47" },
              { num: "04", title: "WhatsApp Ordering Bot", desc: "Cardápio interativo, pagamento integrado, rastreamento. Taxa conversão: 67%" }
            ].map((item, idx) => (
              <div key={idx} className="od-card od-card-hover border border-[#30363D] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#00d9ff]/20 flex items-center justify-center text-xl font-bold text-[#00d9ff]">{item.num}</div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-[#E6E6FA]/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="od-section py-16 bg-[#161B22] border-y border-[#30363D]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <h2 className="text-3xl font-bold mb-8 text-[#00d966]">ROI Detalhado</h2>
          
          <div className="grid od-reveal md:grid-cols-2 gap-8 mb-8">
            <div className="od-card od-card-hover border-2 border-[#ff006e]/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-[#ff006e]">Investimento Mensal</h3>
              <ul className="space-y-2">
                <li className="flex justify-between text-[#E6E6FA]/80"><span>Gestão GMB:</span><span className="font-bold text-white">R$ 800</span></li>
                <li className="flex justify-between text-[#E6E6FA]/80"><span>Ads Local:</span><span className="font-bold text-white">R$ 1.200</span></li>
                <li className="flex justify-between text-[#E6E6FA]/80"><span>Automação:</span><span className="font-bold text-white">R$ 400</span></li>
                <li className="flex justify-between pt-2 border-t border-[#30363D] text-xl"><span className="font-bold text-white">Total:</span><span className="font-bold text-[#ff006e]">R$ 2.400</span></li>
              </ul>
            </div>

            <div className="od-card od-card-hover border-2 border-[#00d966]/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-[#00d966]">Retorno Mensal</h3>
              <ul className="space-y-2">
                <li className="flex justify-between text-[#E6E6FA]/80"><span>Economia comissão:</span><span className="font-bold text-white">R$ 6.600</span></li>
                <li className="flex justify-between text-[#E6E6FA]/80"><span>Novos pedidos diretos:</span><span className="font-bold text-white">R$ 32.000</span></li>
                <li className="flex justify-between pt-2 border-t border-[#30363D] text-xl"><span className="font-bold text-white">ROI:</span><span className="font-bold text-[#00d966]">13.5x</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#00d966]/10 to-[#00d9ff]/10 border border-[#00d966]/30 rounded-lg p-6">
            <p className="text-lg text-center text-[#E6E6FA]/90">Para cada <span className="text-[#ff006e] font-bold">R$ 1</span> investido, o restaurante ganha <span className="text-[#00d966] font-bold">R$ 13.50</span></p>
          </div>
        </div>
      </section>

      <section className="od-section py-16 bg-[#0D1117]">
        <div className="od-container max-w-4xl px-4 od-reveal">
          <div className="bg-gradient-to-br from-[#161B22] to-[#0D1117] border-2 border-[#00d966]/30 rounded-xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-[#00d966]/20 flex items-center justify-center">
                <Star className="w-10 h-10 text-[#00d966]" />
              </div>
              <div>
                <p className="font-bold text-xl text-white">Roberto Almeida</p>
                <p className="text-[#E6E6FA]/60">Proprietário, Restaurante Regional Mineiro</p>
              </div>
            </div>
            <p className="text-lg text-[#E6E6FA]/90 leading-relaxed italic">
              "Recebi 420 pedidos pelo Google Maps em um mês. O ROI foi absurdo considerando o investimento baixo. Antes pagávamos 30% de comissão no iFood. Agora temos nosso próprio canal com margem de 100%. A automação de WhatsApp foi o diferencial - cliente pede em 3 cliques."
            </p>
          </div>
        </div>
      </section>

      <section className="od-section py-16 bg-gradient-to-r from-[#00d966]/10 to-[#00d9ff]/10 border-y border-[#00d966]/30">
        <div className="od-container max-w-4xl px-4 text-center od-reveal">
          <h2 className="text-4xl font-bold mb-6 text-white">Aplicável ao Seu Negócio Local?</h2>
          <p className="text-xl text-[#E6E6FA]/80 mb-8">Esta estratégia funciona para restaurantes, clínicas, academias, salões e qualquer negócio que atenda localmente. Agende uma análise gratuita do seu GMB.</p>
          <Link href="/#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00d966] to-[#00d9ff] text-white font-bold text-lg uppercase rounded-lg hover:shadow-2xl transition">
            <MapPin className="w-6 h-6" />
            Auditar Meu GMB
          </Link>
        </div>
      </section>
    </main>
  )
}



