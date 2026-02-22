import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { BLOG_ARTICLES_LIST } from "@/lib/blog-data"

const recentArticles = [...BLOG_ARTICLES_LIST]
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  .slice(0, 3)

export default function BlogPreviewHome() {
  return (
    <section className="od-section sm:py-16 lg:py-20 bg-[#09090b]">
      <div className="od-container px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 od-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-[#e2e8f0]">Conteúdo </span>
            <span className="text-[#06b6d4]">Prático</span>
          </h2>
          <p className="od-subtitle max-w-2xl mx-auto text-base sm:text-lg">
            Aprenda marketing digital e automação com nossos artigos práticos
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 od-reveal od-reveal-delay-1">
          {recentArticles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
              <div className="h-full flex flex-col rounded-xl border border-[#334155]/30 overflow-hidden od-card-soft od-card-hover hover:border-[#06b6d4]/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={`Artigo sobre ${article.category}: ${article.title}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 bg-[#06b6d4]/90 text-white text-xs font-bold rounded-lg">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-lg">
                    <Clock className="w-3 h-3 text-white/80" />
                    <span className="text-white/80 text-xs">{article.readTime} min</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-[#e2e8f0] mb-2 line-clamp-2 group-hover:text-[#06b6d4] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="od-subtitle text-sm flex-grow line-clamp-2 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#64748b] mt-4 pt-3 border-t border-[#334155]/40">
                    <span>
                      {new Date(article.publishedAt).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span>{article.readTime} min</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#06b6d4] text-xs font-medium mt-2 group-hover:gap-2 transition-all">
                    <span>Ler artigo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center od-reveal od-reveal-delay-2">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#06b6d4]/30 text-[#06b6d4] rounded-lg hover:bg-[#06b6d4]/10 transition-all duration-300 font-medium text-sm"
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

