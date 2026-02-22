import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Target, Users, Heart, TrendingUp, Shield, Award, Lightbulb } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Ns - Histria e Valores | On Demand Digital",
  description: "Conhea a histria da On Demand Digital, agncia boutique de marketing digital fundada por Davi Honorato. Mximo 30 clientes para garantir excelncia.",
  openGraph: {
    title: "Sobre Ns - Nossa Histria e Valores",
    description: "AgÃªncia boutique de marketing digital com foco absoluto em qualidade e resultados mensurÃ¡veis.",
  },
}

export default function SobrePage() {
  return (
    <main className="od-page">
      {/* Hero */}
      <section className="od-section py-20 bg-gradient-to-b from-[#0D1117] to-[#161B22] border-b border-[#30363D]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#00d9ff] hover:text-[#ff006e] transition mb-8">
            <ArrowLeft size={16} />
            Voltar para Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <Heart className="text-[#ff006e]" size={48} />
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-[#ff006e] to-[#ff1493] bg-clip-text text-transparent">
                Nossa
              </span>{" "}
              <span className="text-white">Histria</span>
            </h1>
          </div>

          <p className="text-xl text-[#E6E6FA]/80 leading-relaxed max-w-3xl">
            De filho de comerciantes a fundador de uma das agncias de marketing mais exclusivas do Brasil.
            Esta Ã© a histÃ³ria de como a On Demand Digital nasceu de uma frustraÃ§Ã£o genuÃ­na e se tornou referÃªncia em resultados mensurÃ¡veis.
          </p>
        </div>
      </section>

      {/* Histria do Fundador */}
      <section className="od-section py-16 bg-[#161B22]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Foto Davi */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden border-2 border-[#ff006e]/30">
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=faces" alt="Davi Honorato - CEO & Fundador On Demand Digital" fill sizes="(min-width: 1024px) 33vw, 80vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#0D1117] border-2 border-[#00d966] rounded-lg p-4">
                <p className="text-sm text-[#E6E6FA]/70">Fundador & CEO</p>
                <p className="text-lg font-bold text-white">Davi Honorato</p>
                <p className="text-sm text-[#00d966]">Belo Horizonte, MG</p>
              </div>
            </div>

            {/* Histria */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-6">
                A Histria de <span className="text-[#ff006e]">Davi Honorato</span>
              </h2>

              <div className="space-y-4 text-[#E6E6FA]/80 leading-relaxed">
                <p>
                  <strong className="text-white">Filho de comerciantes</strong>, Davi cresceu vendo de perto a luta diria de pequenos e mdios empresrios.
                  Seu pai tinha uma loja de materiais de construÃ§Ã£o na periferia de SÃ£o Paulo, e sua mÃ£e vendia roupas em feiras livres aos finais de semana.
                </p>

                <p>
                  Presenciou o fechamento da loja do pai. <strong className="text-white">No por falta de qualidade nos produtos,
                  no por atendimento ruim, mas por falta de clientes</strong>. A loja estava invisvel enquanto grandes redes dominavam as buscas e as redes sociais.
                </p>

                <p>
                  Foi quando Davi teve o <strong className="text-[#00d9ff]">insight que mudaria sua vida</strong>: "Empresas boas esto fechando
                  porque ningum sabe que elas existem. Marketing no  luxo -  sobrevivncia."
                </p>

                <p>
                  Durante a graduao, comeou a estudar marketing digital por conta prpria.
                  YouTube, cursos online e testes com pequenos negócios. O primeiro cliente mostrou que método e consistência fazem diferença.
                </p>

                <p>
                  Com o tempo, passou a gerir oramento de marketing para empresas de diferentes portes.
                  Mas percebia um padro: <strong className="text-[#ff006e]">agncias grandes tratavam clientes pequenos como nmeros</strong>.
                  Relatrios bonitos, mtricas de vaidade e pouca evoluo real.
                </p>

                <p className="text-lg font-semibold text-white border-l-4 border-[#00d966] pl-4">
                  "Decidi criar a agncia que eu gostaria que meu pai tivesse contratado.
                  Uma agência que trata cada negócio como se fosse próprio. Que liga quando o ROI cai.
                  Que comemora quando o cliente fatura. Que fala a verdade, mesmo quando dói."
                </p>

                <p>
                  Assim nasceu a <strong className="text-[#ff006e]">On Demand Digital</strong> em 2022.
                  Uma agncia boutique, limitada a 30 clientes, onde cada projeto recebe ateno de CEO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que mximo 30 clientes */}
      <section className="od-section py-16 bg-[#0D1117] border-y border-[#30363D]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 text-[#00d9ff] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Por que <span className="text-[#ff006e]">MÃ¡ximo 30</span> Clientes?
            </h2>
            <p className="text-lg text-[#E6E6FA]/70 max-w-2xl mx-auto">
              Esta  a deciso mais importante que tomamos - e a que mais nos diferencia no mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#ff006e] text-4xl">L</span>
                O que NO fazemos
              </h3>
              <ul className="space-y-4">
                {[
                  "Atender volume acima da capacidade real do time",
                  "Delegar tudo para estagirios ou jniores",
                  "Reunies de 10 minutos 's pra bater ponto'",
                  "Responder email em 3 dias teis",
                  "Empurrar pacotes genricos para todos",
                  "Prometer resultados impossveis s pra fechar",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#ff006e] mt-2 flex-shrink-0"></div>
                    <span className="text-[#E6E6FA]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#00d966]/10 to-[#00d9ff]/10 border-2 border-[#00d966] rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#00d966] text-4xl"></span>
                O que priorizamos
              </h3>
              <ul className="space-y-4">
                {[
                  "ReuniÃ£o semanal de 30-60min com gestor sÃªnior",
                  "WhatsApp direto (no  chatbot ou 'suporte nvel 1')",
                  "Ajustes em at 4h teis (no 3 dias)",
                  "Estratgia personalizada (no template)",
                  "Liderana presente no dia a dia",
                  "Se ROI cair, ligamos primeiro - voc no precisa cobrar",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00d966] mt-2 flex-shrink-0"></div>
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-[#ff006e]/10 to-[#00d9ff]/10 border-l-4 border-[#ff006e] rounded-lg">
            <p className="text-lg text-white leading-relaxed">\n              <strong>A lgica  simples:</strong> com poucos projetos por vez, conseguimos dedicar tempo real a cada cliente.\n              Isso significa decises melhores, comunicao mais clara e evoluo consistente do plano.\n            </p>
          </div>
        </div>
      </section>

      {/* Nossa Misso & Valores */}
      <section className="od-section py-16 bg-[#161B22]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <div className="text-center mb-12">
            <Target className="w-12 h-12 text-[#ff006e] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Misso, Viso e <span className="text-[#00d9ff]">Valores</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#0D1117] border border-[#30363D] rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-[#ff006e]/20 flex items-center justify-center mb-4">
                <Target className="text-[#ff006e]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Misso</h3>
              <p className="text-[#E6E6FA]/80 leading-relaxed">
                Democratizar marketing de excelÃªncia para PMEs, oferecendo o mesmo nÃ­vel de estratÃ©gia
                que antes s grandes corporaes tinham acesso.
              </p>
            </div>

            <div className="bg-[#0D1117] border border-[#30363D] rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-[#00d9ff]/20 flex items-center justify-center mb-4">
                <Lightbulb className="text-[#00d9ff]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Viso</h3>
              <p className="text-[#E6E6FA]/80 leading-relaxed">
                Ser a agncia de referncia em ROI e transparncia no Brasil,
                provando que qualidade {'>'} quantidade em Serviços de marketing.
              </p>
            </div>

            <div className="bg-[#0D1117] border border-[#30363D] rounded-lg p-6">
              <div className="w-12 h-12 rounded-full bg-[#00d966]/20 flex items-center justify-center mb-4">
                <Heart className="text-[#00d966]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Propsito</h3>
              <p className="text-[#E6E6FA]/80 leading-relaxed">
                Evitar que empresas boas fechem por falta de visibilidade.
                Cada cliente salvo  uma famlia que continua sustentada.
              </p>
            </div>
          </div>

          {/* Valores Detalhados */}
          <div className="bg-[#0D1117] border border-[#30363D] rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Nossos <span className="text-[#ff006e]">4 Valores</span> Inegociveis
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "1. Transparncia Radical",
                  description: "Dashboard 24/7 com ROI real. Sem 'mÃ©tricas de vaidade'. VocÃª vÃª exatamente quanto investiu e quanto faturou. Se estÃ¡ ruim, falamos PRIMEIRO - vocÃª nÃ£o precisa descobrir sozinho.",
                  color: "#00d9ff"
                },
                {
                  icon: TrendingUp,
                  title: "2. Resultados > Serviços",
                  description: "No vendemos 'posts', 'anncios' ou 'horas de consultoria'. Vendemos LEADS QUALIFICADOS e FATURAMENTO. Se voc no ganhar dinheiro, nosso trabalho no valeu nada.",
                  color: "#00d966"
                },
                {
                  icon: Award,
                  title: "3. Anti-Enrolao",
                  description: "Zero relatÃ³rio com grÃ¡fico bonito mas ROI negativo. Zero reuniÃ£o sÃ³ pra 'marcar presenÃ§a'. Se algo nÃ£o funciona em 30 dias, cortamos e testamos outra estratÃ©gia. Rapidez > ego.",
                  color: "#ff006e"
                },
                {
                  icon: Users,
                  title: "4. Parceria de Longo Prazo",
                  description: "92% dos clientes renovam porque tratamos seu negócio como nosso. Não somos 'mais uma agência' - somos extensão do seu time comercial. Seu crescimento é nosso KPI.",
                  color: "#9d4edd"
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 bg-[#161B22] rounded-lg border border-[#30363D] hover:border-[#00d9ff]/50 transition"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${value.color}20` }}>
                    <value.icon className="w-6 h-6" style={{ color: value.color }} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                    <p className="text-[#E6E6FA]/80 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nmeros & Credibilidade */}
      <section className="od-section py-16 bg-[#0D1117] border-y border-[#30363D]">
        <div className="od-container max-w-5xl px-4 od-reveal">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            On Demand Digital <span className="text-[#00d9ff]">em Nmeros</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "2022", label: "Ano de Fundao", color: "#ff006e" },
              { number: "50+", label: "Empresas Atendidas", color: "#00d9ff" },
              { number: "R$ 2.8M+", label: "Investimento Gerenciado", color: "#00d966" },
              { number: "6.2x", label: "ROAS MÃ©dio", color: "#9d4edd" },
              { number: "92%", label: "Taxa de Renovao", color: "#ff006e" },
              { number: "30", label: "Mximo de Clientes", color: "#00d9ff" },
              { number: "4h", label: "Tempo Mdio de Resposta", color: "#00d966" },
              { number: "4.9/5", label: "Avaliao Mdia", color: "#9d4edd" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#161B22] border border-[#30363D] rounded-lg p-6 text-center hover:border-[#00d9ff]/50 transition"
              >
                <p className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                  {stat.number}
                </p>
                <p className="text-sm text-[#E6E6FA]/70">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-[#E6E6FA]/80 max-w-3xl mx-auto leading-relaxed">
              Cada nmero aqui representa uma histria real. Uma empresa que deixou de depender de indicao.
              Um empreendedor que finalmente viu ROI positivo. Uma famlia que pode planejar o futuro com mais segurana.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="od-section py-16 bg-gradient-to-r from-[#ff006e]/10 to-[#00d9ff]/10">
        <div className="od-container max-w-4xl px-4 text-center od-reveal">
          <h2 className="text-4xl font-bold text-white mb-6">
            Quer conversar sobre o seu projeto?
          </h2>
          <p className="text-xl text-[#E6E6FA]/80 mb-8 leading-relaxed">
            Atualmente estamos com <strong className="text-white">3 vagas disponveis</strong>.
            Agende uma anÃ¡lise gratuita e descubra se sua empresa se qualifica para nossa metodologia boutique.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff1493] to-[#ff006e] text-white font-bold text-lg uppercase tracking-wider rounded-lg hover:shadow-2xl hover:shadow-[#ff006e]/50 transition-all duration-300"
          >
            <Users className="w-6 h-6" />
            Agendar Conversa
          </Link>

          <p className="mt-6 text-sm text-[#E6E6FA]/60">
            Sem presso  Conversa direta  Alinhamento claro
          </p>
        </div>
      </section>
    </main>
  )
}











