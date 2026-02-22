import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Termos de Uso",
    description: "Termos de uso dos serviços da On Demand Digital. Leia antes de contratar nossos serviços de marketing digital e automação.",
}

export default function TermosPage() {
    return (
        <main className="od-page">
            <Navigation />

            <section className="od-section pt-28 pb-16 px-4">
                <div className="od-container max-w-3xl od-reveal">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        Termos de Uso
                    </h1>
                    <p className="text-[#94a3b8] text-sm mb-8">
                        Última atualização: Fevereiro de 2026
                    </p>

                    <div className="prose prose-invert prose-sm max-w-none space-y-6 text-[#94a3b8] leading-relaxed">
                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">1. Aceitação dos Termos</h2>
                            <p>
                                Ao acessar e utilizar o site <strong className="text-[#e2e8f0]">ondemanddigital.com.br</strong> e/ou contratar os serviços da On Demand Digital, você concorda com os termos e condições aqui estabelecidos. Caso não concorde, recomendamos que não utilize nossos serviços.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">2. Serviços Oferecidos</h2>
                            <p className="mb-2">A On Demand Digital oferece serviços de:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Gestão de tráfego pago (Meta Ads, Google Ads);</li>
                                <li>SEO e otimização de Google Meu Negócio;</li>
                                <li>Automações de marketing com IA e n8n;</li>
                                <li>Criação de chatbots e assistentes virtuais;</li>
                                <li>Consultoria personalizada em marketing digital;</li>
                                <li>Desenvolvimento de sites e landing pages.</li>
                            </ul>
                            <p className="mt-2">Os detalhes específicos de cada projeto são definidos em proposta comercial individual.</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">3. Obrigações do Cliente</h2>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Fornecer informações verídicas e atualizadas;</li>
                                <li>Disponibilizar acessos necessários às plataformas (Google Ads, Meta Business, etc.);</li>
                                <li>Respeitar os prazos de pagamento acordados;</li>
                                <li>Não utilizar nossos serviços para atividades ilegais ou antiéticas.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">4. Obrigações da On Demand Digital</h2>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Executar os serviços com profissionalismo e diligência;</li>
                                <li>Manter a confidencialidade das informações do cliente;</li>
                                <li>Fornecer relatórios periódicos de desempenho;</li>
                                <li>Comunicar proativamente eventuais problemas ou necessidades de ajuste.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">5. Investimento em Mídia Paga</h2>
                            <p>
                                O investimento em anúncios (mídia paga) é de responsabilidade exclusiva do cliente e pago diretamente às plataformas (Google, Meta, etc.). A On Demand Digital não se responsabiliza por alterações de políticas ou custos das plataformas de publicidade.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">6. Resultados</h2>
                            <p>
                                Embora nos comprometamos a aplicar as melhores práticas e estratégias comprovadas, resultados específicos de campanhas dependem de múltiplos fatores externos (mercado, concorrência, sazonalidade, orçamento) e não podem ser garantidos. Cases e métricas apresentados no site representam resultados reais de clientes anteriores e servem como referência, não como garantia.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">7. Propriedade Intelectual</h2>
                            <p>
                                Todo o conteúdo deste site (textos, imagens, design, código-fonte, marca) é propriedade da On Demand Digital e está protegido por leis de direitos autorais. É proibida a reprodução sem autorização expressa.
                            </p>
                            <p className="mt-2">
                                Materiais criados especificamente para o cliente (criativos, landing pages, automações) são de propriedade do cliente após o pagamento integral.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">8. Cancelamento</h2>
                            <p>
                                Não trabalhamos com fidelidade contratual. O cancelamento pode ser solicitado com 30 dias de antecedência. Valores já pagos referentes ao mês em andamento não são reembolsáveis. Acessos e credenciais do cliente são devolvidos integralmente.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">9. Limitação de Responsabilidade</h2>
                            <p>
                                A On Demand Digital não se responsabiliza por danos indiretos, lucros cessantes ou perdas decorrentes do uso ou impossibilidade de uso dos serviços, exceto nos casos previstos em lei.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">10. Foro</h2>
                            <p>
                                Fica eleito o foro da comarca de Belo Horizonte, Minas Gerais, para dirimir quaisquer controvérsias decorrentes destes termos, com renúncia a qualquer outro, por mais privilegiado que seja.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-[#e2e8f0] mb-3">11. Contato</h2>
                            <ul className="list-none space-y-1 mt-2">
                                <li><strong className="text-[#e2e8f0]">E-mail:</strong> daviluizjk0@gmail.com</li>
                                <li><strong className="text-[#e2e8f0]">WhatsApp:</strong> (31) 99696-6686</li>
                                <li><strong className="text-[#e2e8f0]">Localização:</strong> Belo Horizonte, Minas Gerais — Brasil</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    )
}


