import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import PageHero from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Contato | On Demand Digital',
  description:
    'Agende um diagnóstico gratuito de 30 minutos com a On Demand Digital. Entendemos seu negócio antes de qualquer proposta.',
  alternates: { canonical: 'https://ondemanddigital.com.br/contato' },
  openGraph: {
    title: 'Contato | On Demand Digital',
    description:
      'Diagnóstico gratuito de 30 minutos. Sem compromisso. Entendemos seu negócio antes de qualquer proposta.',
    url: 'https://ondemanddigital.com.br/contato',
    locale: 'pt_BR',
    type: 'website',
  },
}

const steps = [
  {
    numero: '01',
    titulo: 'Analisamos o que já existe',
    descricao:
      'Campanhas ativas, presença orgânica, perfil GMB, redes sociais. Entendemos o ponto de partida real, não o que você gostaria que fosse.',
  },
  {
    numero: '02',
    titulo: 'Identificamos os maiores gargalos',
    descricao:
      'Onde está vazando dinheiro, onde há oportunidade sendo ignorada e qual canal faz mais sentido para o seu momento atual.',
  },
  {
    numero: '03',
    titulo: 'Você sai com clareza',
    descricao:
      'Mesmo que não feche com a gente, você sai sabendo o que precisa fazer. Sem pitch. Sem pressão. Informação útil em 30 minutos.',
  },
]

export default function ContatoPage() {
  return (
    <div className="od-page">
      <Navigation />

      <PageHero
        eyebrow="Diagnóstico gratuito"
        title={
          <>
            Diagnóstico Gratuito{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              de 30 Minutos
            </span>
          </>
        }
        subtitle="Entendemos seu negócio antes de qualquer proposta. Sem pitch. Sem pressão."
      />

      {/* O que acontece na conversa */}
      <section className="od-section od-reveal-section">
        <div className="od-container">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4">
              O que acontece
            </span>
            <h2
              className="font-display font-black tracking-tight text-white"
              style={{ fontSize: "var(--text-h2)" }}
            >
              O que cabe em 30 minutos
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto od-stagger-children">
            {steps.map((s) => (
              <div
                key={s.numero}
                className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 hover:border-cyan-500/30 transition-colors"
              >
                <div
                  className="font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-violet-400 mb-4 leading-none"
                  style={{ fontSize: "var(--text-h1)" }}
                >
                  {s.numero}
                </div>
                <h3
                  className="font-display font-black text-white mb-3"
                  style={{ fontSize: "var(--text-body)" }}
                >
                  {s.titulo}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA principal — WhatsApp */}
      <section className="od-section bg-zinc-950/40 od-reveal-section">
        <div className="od-container">
          <div className="max-w-2xl mx-auto rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 p-8 md:p-12 text-center">
            <div className="text-5xl mb-6">💬</div>
            <h2
              className="font-display font-black tracking-tight text-white mb-4"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Falar agora pelo WhatsApp
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed" style={{ fontSize: "var(--text-body)" }}>
              Clique abaixo e já vá com uma ideia do que quer resolver. Quanto mais
              contexto, melhor o diagnóstico.
            </p>
            <a
              href="https://wa.me/5531996966686?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito%20de%2030%20minutos%20para%20entender%20como%20posso%20melhorar%20meu%20marketing%20digital."
              target="_blank"
              rel="noopener noreferrer"
              data-track="contato-whatsapp-cta"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold rounded-xl shadow-lg hover:opacity-90 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar diagnóstico gratuito
            </a>
            <p className="text-zinc-600 text-sm mt-4">
              (31) 99696-6686 · Resposta em até 2h em dias úteis
            </p>
          </div>
        </div>
      </section>

      {/* Alternativa por email */}
      <section className="od-section od-reveal-section">
        <div className="od-container">
          <div className="max-w-xl mx-auto rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 text-center hover:border-violet-500/30 transition-colors">
            <div className="text-2xl mb-3">✉️</div>
            <h3
              className="font-display font-black text-white mb-2"
              style={{ fontSize: "var(--text-body)" }}
            >
              Prefere email?
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              Se preferir um contato mais formal ou quiser enviar materiais antes,
              pode escrever diretamente.
            </p>
            <a
              href="mailto:contato@ondemanddigital.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20diagn%C3%B3stico&body=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20para%20meu%20neg%C3%B3cio."
              className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-colors font-semibold text-sm"
            >
              contato@ondemanddigital.com.br
            </a>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="od-section bg-zinc-950/40 od-reveal-section">
        <div className="od-container max-w-2xl mx-auto text-center">
          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-8">
            <div className="text-3xl mb-4">🤝</div>
            <h2
              className="font-display font-black text-white mb-3"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Nossa garantia de valor
            </h2>
            <p className="text-zinc-300 leading-relaxed" style={{ fontSize: "var(--text-body)" }}>
              &ldquo;Se em 30 minutos você não aprender nada novo sobre o seu marketing,
              não pedimos nem email.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
