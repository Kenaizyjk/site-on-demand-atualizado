import Link from "next/link"
import { FileText, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Uso | On Demand Digital",
  description: "Termos e condições de uso do site e serviços da On Demand Digital.",
}

export default function TermsPage() {
  return (
    <main className="od-page">
      <section className="od-section py-20 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
        <div className="od-container max-w-4xl px-4 od-reveal">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#00d9ff] hover:text-[#ff006e] transition mb-8">
            <ArrowLeft size={16} />
            Voltar
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <FileText className="text-[#00d9ff]" size={48} />
            <h1 className="text-5xl font-bold">Termos de Uso</h1>
          </div>
          
          <p className="text-[#E6E6FA]/70 mb-8">Última atualização: 18 de novembro de 2024</p>

          <div className="space-y-8 text-[#E6E6FA]/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
              <p>Ao acessar e usar este site, você aceita estar vinculado a estes Termos de Uso. Se não concordar, não use nossos serviços.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Serviços Oferecidos</h2>
              <p className="mb-4">A On Demand Digital oferece:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Gestão de campanhas de marketing digital (Meta Ads, Google Ads)</li>
                <li>Otimização de SEO e Google My Business</li>
                <li>Criação de landing pages e sites</li>
                <li>Automações de marketing e IA</li>
                <li>Consultoria estratégica</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Contratação</h2>
              <p>Contratos de serviço são formalizados após:</p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>Análise gratuita do negócio</li>
                <li>Apresentação de proposta comercial</li>
                <li>Aceite formal via assinatura eletrônica ou contrato físico</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Responsabilidades do Cliente</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Fornecer informações precisas sobre o negócio</li>
                <li>Aprovar materiais (criativos, copies) em até 48h</li>
                <li>Manter orçamento de mídia paga conforme acordado</li>
                <li>Responder leads gerados em tempo hábil</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Garantias</h2>
              <p className="mb-4">Garantimos:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong className="text-white">Transparência:</strong> Dashboard com métricas em tempo real</li>
                <li><strong className="text-white">Suporte:</strong> Resposta em até 24h úteis</li>
                <li><strong className="text-white">Qualidade:</strong> Trabalho realizado por profissionais certificados</li>
              </ul>
              <p className="mt-4 text-[#ff006e]"><strong>Importante:</strong> Resultados dependem de múltiplos fatores incluindo produto, mercado, budget e colaboração do cliente.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Propriedade Intelectual</h2>
              <p>Todo conteúdo criado pela On Demand (criativos, copies, estratégias) permanece de propriedade do cliente após quitação dos pagamentos.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Rescisão</h2>
              <p>Contratos podem ser rescindidos com aviso prévio de 30 dias por qualquer parte, sem multa, respeitando serviços já prestados.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitação de Responsabilidade</h2>
              <p>Não nos responsabilizamos por:</p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>Mudanças em algoritmos de plataformas (Meta, Google)</li>
                <li>Problemas técnicos fora do nosso controle</li>
                <li>Resultados não atingidos por falta de colaboração do cliente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Lei Aplicável</h2>
              <p>Estes termos são regidos pelas leis brasileiras. Foro: São Paulo/SP.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contato</h2>
              <p>Dúvidas? <a href="mailto:contato@ondemanddigital.com.br" className="text-[#00d9ff] hover:text-[#ff006e] transition">contato@ondemanddigital.com.br</a></p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}

