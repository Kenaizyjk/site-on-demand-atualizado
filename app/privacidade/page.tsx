import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Política de Privacidade",
    description: "Política de privacidade da On Demand Digital conforme a LGPD (Lei 13.709/2018). Saiba como tratamos seus dados pessoais.",
}

export default function PrivacidadePage() {
    return (
        <main className="od-page">
            <Navigation />

            <section className="od-section pt-28 pb-16 px-4">
                <div className="od-container max-w-3xl od-reveal">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        Política de Privacidade
                    </h1>
                    <p className="text-[#94a3b8] text-sm mb-8">
                        Última atualização: Fevereiro de 2026
                    </p>

                    <div className="prose prose-invert prose-sm max-w-none space-y-6 text-[#94a3b8] leading-relaxed">
                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">1. Introdução</h2>
                            <p>
                                A <strong className="text-[#e2e8f0]">On Demand Digital</strong> (&quot;nós&quot;, &quot;nosso&quot;) respeita a sua privacidade e está comprometida em proteger os dados pessoais que você nos fornece, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
                            </p>
                            <p className="mt-2">
                                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nosso site e serviços.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">2. Dados que Coletamos</h2>
                            <p className="mb-2">Podemos coletar os seguintes dados pessoais:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li><strong className="text-[#e2e8f0]">Dados de identificação:</strong> nome, e-mail, telefone, empresa — fornecidos por você em formulários de contato ou WhatsApp.</li>
                                <li><strong className="text-[#e2e8f0]">Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência, cookies e dados de sessão.</li>
                                <li><strong className="text-[#e2e8f0]">Dados de interação:</strong> mensagens trocadas com nosso assistente de IA, cliques em botões e formulários.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">3. Finalidade do Tratamento</h2>
                            <p className="mb-2">Utilizamos seus dados para:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Responder às suas solicitações e fornecer nossos serviços de marketing digital;</li>
                                <li>Enviar comunicações relevantes sobre nossos serviços (somente com seu consentimento);</li>
                                <li>Melhorar a experiência de navegação no site;</li>
                                <li>Analisar métricas de desempenho do site;</li>
                                <li>Cumprir obrigações legais e regulatórias.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">4. Cookies e Tecnologias de Rastreamento</h2>
                            <p className="mb-2">Nosso site utiliza as seguintes tecnologias:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li><strong className="text-[#e2e8f0]">Google Analytics (G-0TW8KVEPS9):</strong> análise de comportamento de navegação.</li>
                                <li><strong className="text-[#e2e8f0]">Google Tag Manager:</strong> gerenciamento de tags e scripts.</li>
                                <li><strong className="text-[#e2e8f0]">Meta Pixel (Facebook):</strong> rastreamento de conversões e remarketing.</li>
                                <li><strong className="text-[#e2e8f0]">Hotjar:</strong> gravação de sessões e mapas de calor para melhorar a UX.</li>
                                <li><strong className="text-[#e2e8f0]">LinkedIn Insight Tag:</strong> rastreamento de conversões.</li>
                                <li><strong className="text-[#e2e8f0]">TikTok Pixel:</strong> rastreamento de conversões.</li>
                                <li><strong className="text-[#e2e8f0]">Vercel Analytics:</strong> métricas de desempenho.</li>
                            </ul>
                            <p className="mt-2">
                                Você pode gerenciar suas preferências de cookies a qualquer momento através do banner de consentimento exibido na primeira visita.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">5. Compartilhamento de Dados</h2>
                            <p>
                                Não vendemos seus dados pessoais. Podemos compartilhar informações com:
                            </p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                                <li>Plataformas de publicidade (Google, Meta, LinkedIn, TikTok) para fins de remarketing;</li>
                                <li>Ferramentas de análise (Google Analytics, Hotjar) para melhorar nossos serviços;</li>
                                <li>Autoridades legais, quando exigido por lei.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">6. Retenção de Dados</h2>
                            <p>
                                Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, ou conforme exigido por lei. Dados de navegação e cookies são retidos por até 26 meses.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">7. Seus Direitos (LGPD)</h2>
                            <p className="mb-2">Conforme a LGPD, você tem direito a:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Confirmar a existência de tratamento de seus dados;</li>
                                <li>Acessar seus dados pessoais;</li>
                                <li>Corrigir dados incompletos ou desatualizados;</li>
                                <li>Solicitar a anonimização, bloqueio ou eliminação de dados;</li>
                                <li>Revogar o consentimento a qualquer momento;</li>
                                <li>Solicitar a portabilidade dos dados.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">8. Segurança</h2>
                            <p>
                                Adotamos medidas técnicas e organizativas adequadas para proteger seus dados contra acessos não autorizados, perda ou destruição. O site utiliza criptografia HTTPS para todas as comunicações.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">9. Contato</h2>
                            <p>
                                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
                            </p>
                            <ul className="list-none space-y-1 mt-2">
                                <li><strong className="text-[#e2e8f0]">E-mail:</strong> daviluizjk0@gmail.com</li>
                                <li><strong className="text-[#e2e8f0]">WhatsApp:</strong> (31) 99696-6686</li>
                                <li><strong className="text-[#e2e8f0]">Localização:</strong> Belo Horizonte, Minas Gerais — Brasil</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">10. Alterações</h2>
                            <p>
                                Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente. A data da última atualização está indicada no início do documento.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}


