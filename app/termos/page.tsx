import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso da On Demand Digital.',
  robots: { index: false, follow: false },
}

export default function TermosPage() {
  return (
    <main className="od-page">
      <Navigation />
      <section className="od-section-lg pt-32">
        <div className="od-container px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
              Termos de Uso
            </h1>
            <p className="text-zinc-500 text-sm mb-10">Última atualização: Abril de 2026</p>

            <div className="space-y-8 text-zinc-300 leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-white mb-3">1. Aceitação dos termos</h2>
                <p>Ao acessar e utilizar o site ondemanddigital.com.br, você concorda com estes Termos de Uso. Se não concordar com alguma cláusula, pedimos que não utilize nosso site.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">2. Serviços</h2>
                <p>A On Demand Digital oferece serviços de marketing digital, incluindo tráfego pago, SEO local e automação com IA. As condições específicas de cada serviço são estabelecidas em contrato individual com cada cliente.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">3. Propriedade intelectual</h2>
                <p>Todo o conteúdo deste site (textos, imagens, logotipos e materiais) é de propriedade da On Demand Digital e protegido por direitos autorais. É proibida a reprodução sem autorização prévia por escrito.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">4. Limitação de responsabilidade</h2>
                <p>As informações neste site são fornecidas para fins informativos. Resultados de marketing digital variam conforme o mercado, o investimento e outros fatores. A On Demand Digital não garante resultados específicos sem contrato formal.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">5. Links externos</h2>
                <p>Nosso site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo ou práticas de privacidade de sites externos.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">6. Alterações nos termos</h2>
                <p>Podemos atualizar estes termos a qualquer momento. Alterações significativas serão comunicadas. O uso continuado do site após as alterações constitui aceitação dos novos termos.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">7. Contato</h2>
                <p>Dúvidas sobre estes termos? Entre em contato: <a href="mailto:contato@ondemanddigital.com.br" className="text-violet-400 hover:text-violet-300">contato@ondemanddigital.com.br</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
