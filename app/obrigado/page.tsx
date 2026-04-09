import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight, Calendar, TrendingUp, BookOpen } from "lucide-react"
import type { Metadata } from "next"
import { BLOG_ARTICLES_LIST } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Obrigado! Entraremos em Contato em Breve | On Demand Digital",
  description: "Recebemos sua mensagem e um especialista entrará em contato em até 24h. Enquanto isso, explore nossos materiais gratuitos.",
  robots: {
    index: false, // Don't index thank you pages
    follow: true,
  },
}

export default function ObrigadoPage() {
  const topArticles = [...BLOG_ARTICLES_LIST]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3)
  return (
    <main className="od-page">
      {/* Hero Success */}
      <section className="od-section py-20 bg-gradient-to-b from-[#0D1117] to-[#161B22] border-b border-[#30363D]">
        <div className="od-container max-w-4xl px-4 od-reveal text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00d966]/20 to-[#00d9ff]/20 border-2 border-[#00d966] flex items-center justify-center animate-pulse">
              <CheckCircle className="w-12 h-12 text-[#00d966]" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00d966] to-[#00d9ff] bg-clip-text text-transparent">
              Mensagem Recebida!
            </span>
          </h1>

          <p className="text-xl text-[#E6E6FA]/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            Obrigado pelo seu interesse na On Demand Digital.
            <strong className="text-white"> Um especialista entrará em contato em até 24 horas</strong> para agendar sua análise gratuita.
          </p>

          {/* Timeline */}
          <div className="inline-block bg-[#161B22] border border-[#30363D] rounded-lg p-6 text-left">
            <p className="text-sm uppercase tracking-wider text-[#00d9ff] mb-4 font-semibold text-center">
              Próximos Passos
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00d966]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00d966] font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Análise da sua Solicitação</p>
                  <p className="text-sm text-[#E6E6FA]/70">Nossa equipe está revisando seus dados (2-4h)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00d9ff]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00d9ff] font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Contato Personalizado</p>
                  <p className="text-sm text-[#E6E6FA]/70">Especialista liga/envia WhatsApp (em até 24h)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#ff006e]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#ff006e] font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Análise Gratuita Agendada</p>
                  <p className="text-sm text-[#E6E6FA]/70">60 minutos para entender seu negócio e propor estratégia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Confirmation */}
          <div className="mt-8 p-4 bg-[#00d9ff]/10 border-l-4 border-[#00d9ff] rounded text-left max-w-2xl mx-auto">
            <p className="text-sm text-[#E6E6FA]/90">
              <strong className="text-white">Email de confirmação enviado!</strong> Verifique sua caixa de entrada (e spam) para confirmar o recebimento.
              Se não receber em 10 minutos, entre em contato via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Materiais Gratuitos Enquanto Aguarda */}
      <section className="od-section py-16 bg-[#161B22]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enquanto Você Aguarda...
            </h2>
            <p className="text-lg text-[#E6E6FA]/70">
              Explore nossos materiais gratuitos e cases de sucesso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <Link
              href="/blog"
              className="bg-[#0D1117] border border-[#30363D] rounded-lg p-6 hover:border-[#00d9ff]/50 transition group"
            >
              <div className="w-12 h-12 rounded-full bg-[#00d9ff]/20 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-[#00d9ff]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d9ff] transition">
                Blog de Marketing Digital
              </h3>
              <p className="text-[#E6E6FA]/80 mb-4 leading-relaxed">
                6 artigos completos com estratégias práticas de Meta Ads, Google Ads, SEO Local e Automações.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#00d9ff]">
                <span>Ler Artigos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </Link>

            {/* Nossos Serviços */}
            <Link
              href="/"
              className="bg-[#0D1117] border border-[#30363D] rounded-lg p-6 hover:border-[#00d966]/50 transition group"
            >
              <div className="w-12 h-12 rounded-full bg-[#00d966]/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#00d966]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d966] transition">
                Nossos Serviços
              </h3>
              <p className="text-[#E6E6FA]/80 mb-4 leading-relaxed">
                Conheça nossas soluções de tráfego pago, SEO, automação e Google Meu Negócio.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#00d966]">
                <span>Ver Serviços</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </Link>

            {/* Fale Conosco */}
            <Link
              href="/#contato"
              className="bg-[#0D1117] border border-[#30363D] rounded-lg p-6 hover:border-[#ff006e]/50 transition group"
            >
              <div className="w-12 h-12 rounded-full bg-[#ff006e]/20 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-[#ff006e]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff006e] transition">
                Fale Conosco
              </h3>
              <p className="text-[#E6E6FA]/80 mb-4 leading-relaxed">
                Entre em contato para agendar sua análise gratuita com um especialista.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#ff006e]">
                <span>Entrar em Contato</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Top 3 Blog Posts */}
      <section className="od-section py-16 bg-[#0D1117] border-y border-[#30363D]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Artigos Mais Lidos
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {topArticles.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-[#161B22] border border-[#30363D] rounded-lg overflow-hidden hover:border-[#00d9ff]/50 transition group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.coverImage} alt={post.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#ff006e]/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00d9ff] transition">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-[#E6E6FA]/60">
                    <span>{post.readTime} min</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="od-section py-16 bg-[#161B22]">
        <div className="od-container max-w-4xl px-4 od-reveal">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "Em quanto tempo vocês entram em contato?",
                answer: "Em até 24 horas úteis. Na maioria dos casos, entre 2-6 horas. Se for urgente, envie WhatsApp diretamente.",
              },
              {
                question: "A análise gratuita é realmente grátis?",
                answer: "Sim! Sem pegadinhas. É uma reunião de 60min onde entendemos seu negócio e apresentamos uma proposta personalizada. Zero compromisso de contratação.",
              },
              {
                question: "Vocês atendem meu setor?",
                answer: "Focamos em 4 setores: Saúde & Estética, E-commerce, Alimentação e Serviços B2B. Se você está em um desses, temos estratégias comprovadas para você.",
              },
              {
                question: "Como funciona o limite de 30 clientes?",
                answer: "Trabalhamos com no máximo 30 empresas simultaneamente para garantir qualidade e atenção personalizada. Se estiver cheio, você entra em lista de espera prioritária.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#0D1117] border border-[#30363D] rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-[#E6E6FA]/80 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - WhatsApp Direto */}
      <section className="od-section py-16 bg-gradient-to-r from-[#00d966]/10 to-[#00d9ff]/10">
        <div className="od-container max-w-4xl px-4 od-reveal text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Não Quer Esperar?
          </h2>
          <p className="text-xl text-[#E6E6FA]/80 mb-8 leading-relaxed">
            Fale agora mesmo com um especialista via WhatsApp
          </p>
          <a
            href="https://wa.me/5531996966686?text=Ol%C3%A1%2C%20vim%20da%20p%C3%A1gina%20Obrigado%20e%20gostaria%20de%20agendar%20minha%20an%C3%A1lise%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#00d966] text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-[#00d966]/50 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar no WhatsApp Agora
          </a>

          <p className="mt-6 text-sm text-[#E6E6FA]/60">
            Horário de atendimento: Segunda a Sexta, 9h às 18h
          </p>
        </div>
      </section>
    </main>
  )
}










