import Link from "next/link"
import { Shield, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidade | On Demand Digital",
  description: "Política de Privacidade e proteção de dados pessoais em conformidade com a LGPD.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="od-page">
      <section className="od-section py-20 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
        <div className="od-container max-w-4xl px-4 od-reveal">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#00d9ff] hover:text-[#ff006e] transition mb-8">
            <ArrowLeft size={16} />
            Voltar para Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <Shield className="text-[#00d966]" size={48} />
            <h1 className="text-5xl font-bold">Política de Privacidade</h1>
          </div>
          
          <p className="text-[#E6E6FA]/70 mb-8">Última atualização: 18 de novembro de 2024</p>

          <div className="space-y-8 text-[#E6E6FA]/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Informações que Coletamos</h2>
              <p className="mb-4">Coletamos as seguintes informações quando você utiliza nosso site:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong className="text-white">Dados de Identificação:</strong> Nome, e-mail, telefone</li>
                <li><strong className="text-white">Dados de Navegação:</strong> Páginas visitadas, tempo de permanência, cliques</li>
                <li><strong className="text-white">Dados Técnicos:</strong> Endereço IP, navegador, dispositivo</li>
                <li><strong className="text-white">Cookies:</strong> Para melhorar sua experiência (ver Política de Cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Como Usamos Seus Dados</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Responder suas solicitações de contato e agendamento</li>
                <li>Enviar materiais gratuitos solicitados</li>
                <li>Melhorar nosso site e serviços</li>
                <li>Enviar comunicações sobre nossos serviços (com seu consentimento)</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Compartilhamento de Dados</h2>
              <p className="mb-4">Seus dados podem ser compartilhados com:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong className="text-white">Prestadores de Serviço:</strong> Google Analytics, plataformas de e-mail marketing</li>
                <li><strong className="text-white">Autoridades:</strong> Quando exigido por lei</li>
                <li className="text-[#00d966]"><strong className="text-white">NÃO vendemos</strong> seus dados a terceiros</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Seus Direitos (LGPD)</h2>
              <p className="mb-4">Você tem direito a:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Confirmação do tratamento de dados</li>
                <li>Acesso aos seus dados</li>
                <li>Correção de dados incompletos/inexatos</li>
                <li>Anonimização, bloqueio ou eliminação</li>
                <li>Portabilidade dos dados</li>
                <li>Revogação do consentimento</li>
              </ul>
              <p className="mt-4">Para exercer esses direitos, entre em contato: <a href="mailto:contato@ondemanddigital.com.br" className="text-[#00d9ff] hover:text-[#ff006e] transition">contato@ondemanddigital.com.br</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Segurança</h2>
              <p>Utilizamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, incluindo criptografia SSL e servidores seguros.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Retenção de Dados</h2>
              <p>Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas, exceto quando exigido por lei manter por período superior.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Alterações nesta Política</h2>
              <p>Podemos atualizar esta política. A data da última atualização estará sempre no topo da página.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contato</h2>
              <p>Dúvidas sobre privacidade?</p>
              <p className="mt-2">E-mail: <a href="mailto:privacidade@ondemanddigital.com.br" className="text-[#00d9ff] hover:text-[#ff006e] transition">privacidade@ondemanddigital.com.br</a></p>
              <p>WhatsApp: <a href="https://wa.me/5511999999999" className="text-[#00d9ff] hover:text-[#ff006e] transition">(11) 99999-9999</a></p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}

