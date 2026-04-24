import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade da On Demand Digital. Saiba como coletamos, usamos e protegemos seus dados conforme a LGPD.',
  alternates: {
    canonical: 'https://ondemanddigital.com.br/privacidade',
  },
  robots: { index: true, follow: true },
}

export default function PrivacidadePage() {
  return (
    <main id="main-content" className="od-page">
      <Navigation />
      <section className="od-section-lg pt-32">
        <div className="od-container px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display font-black text-4xl md:text-5xl text-white mb-4 tracking-tight">
              Política de Privacidade
            </h1>
            <p className="text-zinc-500 text-sm mb-10">Última atualização: Abril de 2026</p>

            <div className="space-y-8 text-zinc-300 leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-white mb-3">1. Dados coletados</h2>
                <p>Coletamos apenas os dados que você nos fornece diretamente, como nome, e-mail e mensagens enviadas via formulário ou WhatsApp. Também coletamos dados de navegação anonimizados via Google Analytics para melhorar nosso site.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">2. Como usamos seus dados</h2>
                <p>Utilizamos seus dados exclusivamente para: responder suas mensagens e solicitações, enviar nossa newsletter (somente com seu consentimento), e melhorar nossos serviços. Nunca vendemos ou compartilhamos seus dados com terceiros para fins comerciais.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">3. Cookies</h2>
                <p>Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos (Google Analytics) para entender como nossos visitantes utilizam o site. Você pode desativar cookies nas configurações do seu navegador.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">4. Newsletter</h2>
                <p>Ao se inscrever em nossa newsletter, você consente com o recebimento de e-mails informativos sobre marketing digital. Você pode cancelar a inscrição a qualquer momento clicando no link de descadastro presente em todos os e-mails.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">5. Seus direitos (LGPD)</h2>
                <p>De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a: acessar seus dados, corrigir dados incorretos, solicitar a exclusão dos seus dados, e revogar o consentimento a qualquer momento. Para exercer esses direitos, entre em contato: <a href="mailto:contato@ondemanddigital.com.br" className="text-white/60 hover:text-white/80 underline underline-offset-2">contato@ondemanddigital.com.br</a></p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">6. Contato</h2>
                <p>Dúvidas sobre nossa política de privacidade? Fale conosco em <a href="mailto:contato@ondemanddigital.com.br" className="text-white/60 hover:text-white/80 underline underline-offset-2">contato@ondemanddigital.com.br</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
