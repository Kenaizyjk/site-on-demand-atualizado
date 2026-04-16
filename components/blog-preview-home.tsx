"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, BookOpen } from "lucide-react"
import { BLOG_ARTICLES_LIST } from "@/lib/blog-data"

const CATEGORY_STYLES: Record<string, { badge: string; dot: string }> = {
  Automacao: {
    badge: "bg-zinc-800/60 text-zinc-300 border border-zinc-700/50",
    dot: "bg-zinc-400",
  },
  "IA & Marketing": {
    badge: "bg-zinc-800/60 text-zinc-300 border border-zinc-700/50",
    dot: "bg-zinc-400",
  },
  "Trafego Pago": {
    badge: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
    dot: "bg-cyan-400",
  },
  "Google Ads": {
    badge: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
    dot: "bg-cyan-400",
  },
  "Meta Ads": {
    badge: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
    dot: "bg-cyan-400",
  },
  "SEO Local": {
    badge: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
    dot: "bg-emerald-400",
  },
  SEO: {
    badge: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
    dot: "bg-emerald-400",
  },
  Estrategia: {
    badge: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
    dot: "bg-amber-400",
  },
  "Redes Sociais": {
    badge: "bg-pink-500/20 text-pink-300 border border-pink-500/30",
    dot: "bg-pink-400",
  },
}

const DEFAULT_STYLE = {
  badge: "bg-slate-500/20 text-slate-300 border border-slate-500/30",
  dot: "bg-slate-400",
}

function getCategoryStyle(category: string) {
  return CATEGORY_STYLES[category] ?? DEFAULT_STYLE
}

const COVER_GRADIENTS: Record<string, string> = {
  Automacao: "from-zinc-900 via-zinc-800 to-zinc-700",
  "IA & Marketing": "from-zinc-900 via-zinc-800 to-zinc-700",
  "Trafego Pago": "from-cyan-950 via-cyan-900 to-sky-800",
  "Google Ads": "from-cyan-950 via-sky-900 to-blue-900",
  "Meta Ads": "from-blue-950 via-indigo-900 to-cyan-900",
  "SEO Local": "from-emerald-950 via-emerald-900 to-teal-800",
  SEO: "from-emerald-950 via-teal-900 to-emerald-800",
  Estrategia: "from-amber-950 via-orange-900 to-amber-800",
  "Redes Sociais": "from-pink-950 via-rose-900 to-pink-800",
}

const DEFAULT_GRADIENT = "from-slate-900 via-slate-800 to-slate-700"

function getGradient(category: string) {
  return COVER_GRADIENTS[category] ?? DEFAULT_GRADIENT
}

const CATEGORY_ICONS: Record<string, string> = {
  Automacao: "⚙️",
  "IA & Marketing": "🤖",
  "Trafego Pago": "📈",
  "Google Ads": "🔍",
  "Meta Ads": "📱",
  "SEO Local": "📍",
  SEO: "🔎",
  Estrategia: "🎯",
  "Redes Sociais": "💬",
}

const recentArticles = [...BLOG_ARTICLES_LIST]
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  .slice(0, 3)

export default function BlogPreviewHome() {
  const [featured, ...secondary] = recentArticles
  if (!featured) return null

  const featuredStyle = getCategoryStyle(featured.category)
  const featuredGradient = getGradient(featured.category)
  const featuredIcon = CATEGORY_ICONS[featured.category] ?? "📝"

  return (
    <section className="od-section sm:py-16 lg:py-20 bg-[#09090b] od-reveal-section">
      <div className="od-container px-4 od-stagger-children">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 od-reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/60 border border-zinc-700/50 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-zinc-300 text-xs font-semibold uppercase tracking-wider">Blog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#e2e8f0]">Conteúdo </span>
            <span className="text-[#06b6d4]">Prático</span>
          </h2>
          <p className="od-subtitle max-w-2xl mx-auto text-base sm:text-lg">
            Aprenda marketing digital, automação e SEO com artigos direto ao ponto — sem enrolação
          </p>
        </div>

        {/* Layout: Featured + 2 menores */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-6 mb-8 od-reveal od-reveal-delay-1">

          {/* Featured Post — ocupa 3/5 colunas */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group lg:col-span-3 block"
          >
            <article className="h-full flex flex-col rounded-2xl border border-[#334155]/30 overflow-hidden bg-[#0f1117] hover:border-[#06b6d4]/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.01]">

              {/* Cover */}
              <div className={`relative w-full aspect-[16/9] bg-gradient-to-br ${featuredGradient} overflow-hidden flex-shrink-0`}>
                {featured.coverImage ? (
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl sm:text-7xl opacity-30 select-none">{featuredIcon}</span>
                  </div>
                )}
                {/* Dark overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Badge featured */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${featuredStyle.badge}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${featuredStyle.dot}`} />
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-500/90 text-white text-xs font-bold">
                    ★ Destaque
                  </span>
                </div>
                {/* Reading time */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                  <Clock className="w-3 h-3 text-white/80" />
                  <span className="text-white/80 text-xs font-medium">{featured.readTime} min</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#e2e8f0] mb-3 line-clamp-2 group-hover:text-[#06b6d4] transition-colors duration-300 leading-snug">
                  {featured.title}
                </h3>
                <p className="od-subtitle text-sm sm:text-base flex-grow line-clamp-3 leading-relaxed mb-5">
                  {featured.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#334155]/40">
                  <span className="text-xs text-[#64748b]">
                    {new Date(featured.publishedAt).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#06b6d4] text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
                    Ler artigo completo
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          </Link>

          {/* Posts secundários — 2/5 colunas */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {secondary.map((article) => {
              const style = getCategoryStyle(article.category)
              const gradient = getGradient(article.category)
              const icon = CATEGORY_ICONS[article.category] ?? "📝"
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block flex-1"
                >
                  <article className="h-full flex flex-row rounded-xl border border-[#334155]/30 overflow-hidden bg-[#0f1117] hover:border-[#06b6d4]/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:scale-[1.015]">

                    {/* Mini cover — quadrado à esquerda */}
                    <div className={`relative w-24 sm:w-32 flex-shrink-0 bg-gradient-to-br ${gradient} overflow-hidden`}>
                      {article.coverImage ? (
                        <Image
                          src={article.coverImage}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                          sizes="128px"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl opacity-30 select-none">{icon}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-grow min-w-0">
                      <span className={`inline-flex items-center gap-1 self-start px-2 py-0.5 rounded-md text-xs font-semibold mb-2 ${style.badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                        {article.category}
                      </span>
                      <h3 className="text-sm font-bold text-[#e2e8f0] mb-1.5 line-clamp-2 group-hover:text-[#06b6d4] transition-colors duration-300 leading-snug">
                        {article.title}
                      </h3>
                      <p className="od-subtitle text-xs line-clamp-2 leading-relaxed flex-grow mb-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[#64748b]">
                          <Clock className="w-3 h-3" />
                          <span className="text-xs">{article.readTime} min</span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[#06b6d4] text-xs font-medium group-hover:gap-1.5 transition-all duration-300">
                          Ler
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>

        {/* CTA Ver todos */}
        <div className="text-center od-reveal od-reveal-delay-2">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#06b6d4]/30 text-[#06b6d4] rounded-xl hover:bg-[#06b6d4]/10 hover:border-[#06b6d4]/60 transition-all duration-300 font-semibold text-sm"
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
