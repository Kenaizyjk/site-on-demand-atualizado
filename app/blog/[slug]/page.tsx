import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowLeft, ArrowRight, Calendar, User, Clock, Share2, ChevronRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { BlogArticleSchema, BreadcrumbSchema } from "@/components/blog-schema"
import ReadingProgress from "@/components/reading-progress"
import { BLOG_ARTICLES, getBlogArticleBySlug } from "@/lib/blog-data"
import Image from "next/image"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const legacyRedirects: Record<string, string> = {
    "automação-whatsapp-leads": "automacao-whatsapp-leads",
    "meta-ads-segmentação": "meta-ads-segmentacao",
  }
  const normalizedSlug = legacyRedirects[slug] || slug
  const article = getBlogArticleBySlug(normalizedSlug)

  if (!article) {
    return {
      title: "Artigo não encontrado",
      description: "O artigo que você procura não existe.",
    }
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      locale: "pt_BR",
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
    authors: [{ name: article.author }],
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const legacyRedirects: Record<string, string> = {
    "automação-whatsapp-leads": "automacao-whatsapp-leads",
    "meta-ads-segmentação": "meta-ads-segmentacao",
  }
  if (legacyRedirects[slug]) {
    redirect(`/blog/${legacyRedirects[slug]}`)
  }
  const article = getBlogArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const publishDate = new Date(article.publishedAt)
  const formattedDate = publishDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ondemanddigital.com.br"

  const relatedArticles = BLOG_ARTICLES.filter((item) => item.slug !== article.slug).slice(0, 2)

  const categorySealMap: Record<string, { label: string; className: string }> = {
    "Google Ads": { label: "Selo Performance", className: "text-[#7dd3fc] border-[#225070]" },
    "Automação": { label: "Selo Automação", className: "text-[#a7f3d0] border-[#1f3a2e]" },
    "SEO Local": { label: "Selo Local", className: "text-[#fcd34d] border-[#4b3b1a]" },
    "IA & Marketing": { label: "Selo IA", className: "text-[#c4b5fd] border-[#3a2e5a]" },
    "Meta Ads": { label: "Selo Escala", className: "text-[#60a5fa] border-[#1f3352]" },
    "SEO": { label: "Selo SEO", className: "text-[#86efac] border-[#1f3a2b]" },
  }
  const categorySeal = categorySealMap[article.category] ?? {
    label: "Selo Editorial",
    className: "text-[#94a3b8] border-[#233246]",
  }

  const ctaVariants: Record<string, { title: string; description: string; ctaLabel: string }> = {
    "10-erros-google-ads": {
      title: "Destrave sua performance em 30 dias",
      description: "Receba um diagnóstico direto com prioridades e cortes de desperdício.",
      ctaLabel: "Quero destravar",
    },
    "automacao-whatsapp-leads": {
      title: "Organize seu atendimento com fluxo real",
      description: "Mapeamos seu atendimento e entregamos um fluxo pronto para operar.",
      ctaLabel: "Quero o fluxo",
    },
    "gmb-local-seo": {
      title: "Apareça quando o cliente busca por você",
      description: "Ajustamos seu GMB com foco em presença local e conversão.",
      ctaLabel: "Quero otimizar",
    },
    "ia-marketing-2025": {
      title: "Use IA como vantagem, não como risco",
      description: "Mostramos onde aplicar IA com segurança e resultado.",
      ctaLabel: "Quero aplicar IA",
    },
    "meta-ads-segmentacao": {
      title: "Segmentação mais simples, CPA menor",
      description: "Montamos a estrutura de testes e escala com foco em resultados.",
      ctaLabel: "Quero segmentar",
    },
    "funil-vendas-seo": {
      title: "SEO que vira venda, não só tráfego",
      description: "Alinhamos conteúdo e jornada para converter com consistência.",
      ctaLabel: "Quero estruturar",
    },
  }
  const ctaVariant = ctaVariants[article.slug] ?? {
    title: "Organize suas campanhas com método",
    description: "Se quiser um olhar externo e direto, podemos revisar seu cenário e apontar próximos passos.",
    ctaLabel: "Agendar conversa",
  }

  // The inline CTA HTML string to inject into the markdown payload
  const ctaHtml = `
    <div class="my-12 p-8 sm:p-10 rounded-3xl bg-[#09090b] border border-[#06b6d4]/30 text-center shadow-2xl relative overflow-hidden group">
      <div class="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      <div class="absolute top-0 right-0 w-64 h-64 bg-[#06b6d4]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#8b5cf6]/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div class="relative z-10 flex flex-col items-center">
        <div class="w-12 h-12 bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] rounded-xl flex items-center justify-center mb-5 rotate-3 shadow-lg">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
        </div>
        <h3 class="text-2xl sm:text-3xl font-black text-white mb-4">${ctaVariant.title}</h3>
        <p class="text-[#94a3b8] mb-8 max-w-lg mx-auto text-lg">${ctaVariant.description}</p>
        <a href="https://wa.me/5531996966686?text=Ol%C3%A1!%20Estou%20lendo%20o%20artigo%20sobre%20${encodeURIComponent(article.title)}%20e%20gostaria%20de%20uma%20consultoria." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#06b6d4] to-[#0891b2] hover:from-[#0891b2] hover:to-[#06b6d4] text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/30 transform hover:-translate-y-1">
          ${ctaVariant.ctaLabel}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
      </div>
    </div>
  `

  const articleShellClassName =
    "blog-surface relative px-8 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
  const proseClassName =
    "prose prose-invert prose-lg max-w-none " +
    "prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight " +
    "prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-[1.9rem] prose-h2:leading-tight prose-h2:border-b prose-h2:border-[#2a3a4d]/60 prose-h2:pb-5 " +
    "prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-[1.35rem] prose-h3:text-[#e2e8f0] prose-h3:font-bold " +
    "prose-p:my-8 prose-p:text-[#e2e8f0] prose-p:leading-[2.0] " +
    "prose-strong:text-white prose-strong:font-semibold " +
    "prose-a:font-semibold prose-a:text-[#7dd3fc] prose-a:no-underline prose-a:border-b prose-a:border-[#7dd3fc]/40 hover:prose-a:text-[#bae6fd] hover:prose-a:border-[#bae6fd] prose-a:transition-colors " +
    "prose-ul:my-10 prose-ul:space-y-3 prose-ul:pl-7 " +
    "prose-ol:my-10 prose-ol:pl-7 " +
    "prose-li:my-3 prose-li:text-[#d5deea] prose-li:marker:text-[#38bdf8] " +
    "prose-code:rounded-md prose-code:bg-[#111827] prose-code:px-2 prose-code:py-0.5 prose-code:text-[#fdba74] prose-code:font-medium prose-code:before:content-none prose-code:after:content-none " +
    "prose-pre:my-10 prose-pre:overflow-x-auto prose-pre:rounded-2xl prose-pre:border prose-pre:border-[#233246]/60 prose-pre:bg-[#0b1322] prose-pre:shadow-xl " +
    "prose-hr:my-14 prose-hr:border-[#243447]/70 " +
    "prose-blockquote:my-12 prose-blockquote:rounded-r-2xl prose-blockquote:border-l-4 prose-blockquote:border-[#38bdf8] prose-blockquote:bg-[#0b1426] prose-blockquote:px-6 prose-blockquote:py-6 prose-blockquote:text-[#c7d2fe] prose-blockquote:italic"

  return (
    <main className="od-page">
      <Navigation />
      <ReadingProgress />

      {/* Schemas */}
      <BlogArticleSchema
        title={article.title}
        description={article.description}
        author={article.author}
        publishedDate={article.publishedAt}
        image={article.image}
        slug={article.slug}
        readTime={article.readTime}
      />
      {BreadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Blog", url: `${siteUrl}/blog` },
        { name: article.title, url: `${siteUrl}/blog/${article.slug}` },
      ])}

      {/* Hero Interativo Premium */}
      <section className="blog-section relative pt-32 pb-16 lg:pb-24 px-4 overflow-hidden border-b border-[#334155]/30">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-[#06b6d4]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-[#8b5cf6]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="blog-container max-w-4xl relative z-10 od-reveal">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#06b6d4] transition-colors mb-8 font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para todos os artigos
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-[#1e293b] border border-[#334155]/50 text-[#06b6d4] text-xs font-bold rounded-lg uppercase tracking-wider shadow-sm">
              {article.category}
            </span>
            <span className={`px-3 py-1 bg-[#0b111a] border text-xs font-bold rounded-lg uppercase tracking-wider ${categorySeal.className}`}>
              {categorySeal.label}
            </span>
            <span className="text-[#64748b] text-sm flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {article.readTime} min read
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black od-title text-white mb-6 leading-[1.15] tracking-tight">
            {article.title}
          </h1>

          <p className="text-xl sm:text-2xl od-subtitle leading-relaxed mb-10 max-w-3xl">
            {article.description}
          </p>

          <div className="flex items-center gap-4 pt-6 border-t border-[#334155]/40">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center p-[2px]">
              <div className="w-full h-full bg-[#09090b] rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-[#94a3b8]" />
              </div>
            </div>
            <div>
              <p className="text-white font-bold">{article.author}</p>
              <p className="text-[#64748b] text-sm flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Publicado em {formattedDate}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capa do Artigo */}
      <section className="blog-section px-4 -mt-4 sm:-mt-6 lg:-mt-8">
        <div className="blog-container max-w-5xl">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#334155]/40 shadow-2xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(min-width: 1024px) 800px, (min-width: 768px) 90vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/50 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <article className="blog-container px-4 pt-12 pb-14 lg:pt-16 lg:pb-24 relative od-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Coluna Central de Conteudo */}
          <div className="lg:col-span-8 lg:col-start-1">
            <div className={articleShellClassName}>
              <div className="blog-reading">
                <div className={proseClassName}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: convertMarkdownToHtml(article.content, ctaHtml),
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Tags e Share Section Inferior */}
            <div className="mt-16 pt-8 border-t border-[#334155]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[#94a3b8] text-sm font-semibold mr-2">Tags:</span>
                {article.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-[#1e293b] text-[#cbd5e1] text-xs font-medium rounded-md border border-[#334155]/50">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#94a3b8] text-sm font-semibold">Compartilhar:</span>
                <div className="flex gap-2">
                  <ShareButton
                    platform="LI"
                    url={`https://www.linkedin.com/sharing/share-offsite/?url=${siteUrl}/blog/${article.slug}`}
                    icon={<Share2 className="w-4 h-4" />}
                  />
                  <ShareButton
                    platform="WA"
                    url={`https://wa.me/?text=${encodeURIComponent(article.title)} ${siteUrl}/blog/${article.slug}`}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21 " /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" /><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" /><path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" /></svg>}
                  />
                </div>
              </div>
            </div>

            {/* Related Articles (Mobile) */}
            <div className="mt-12 lg:hidden">
              <h3 className="text-lg font-bold text-white mb-4">Leitura Recomendada</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map((item) => (
                  <RelatedArticle
                    key={item.slug}
                    title={item.title}
                    slug={item.slug}
                    category={item.category}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar Right */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24 hidden lg:block">

            {/* Table of Contents Modern */}
            {article.tableOfContents && (
              <div className="p-6 bg-[#1e293b]/50 backdrop-blur-md rounded-2xl border border-[#334155]/40 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#06b6d4] to-[#8b5cf6]"></div>
                <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  Conteúdo do Artigo
                </h3>
                <nav className="space-y-3">
                  {article.tableOfContents.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#section-${idx}`}
                      className="group flex flex-col text-sm text-[#94a3b8] hover:text-[#06b6d4] transition-colors"
                    >
                      <span className="flex items-start gap-2">
                        <span className="text-[#334155] font-mono text-xs mt-0.5 group-hover:text-[#06b6d4]/50">{String(idx + 1).padStart(2, '0')}</span>
                        <span className="leading-snug">{item}</span>
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Author Profile Card */}
            <div className="p-6 bg-[#1e293b]/50 backdrop-blur-md rounded-2xl border border-[#334155]/40 shadow-xl flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-4 rounded-full border-2 border-[#06b6d4] overflow-hidden p-1">
                <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                  <User className="w-10 h-10 text-slate-500" />
                </div>
              </div>
              <h3 className="font-bold text-white text-lg">{article.author}</h3>
              <p className="text-[#06b6d4] text-xs font-semibold uppercase tracking-wider mb-4">Founder, Especialista Growth & IA</p>
              <p className="text-[#94a3b8] text-sm mb-6 leading-relaxed">
                Experiência em campanhas de múltiplos segmentos com foco em consistência, automação e clareza de execução.
              </p>
              <a
                href="https://www.linkedin.com/in/davi-honorato-209955367"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#09090b] hover:bg-[#334155] border border-[#334155] text-white text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Conectar no LinkedIn
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Related Articles Compact */}
            <div className="p-6 bg-gradient-to-br from-[#09090b] to-[#1e293b] rounded-2xl border border-[#334155]/40 shadow-xl">
              <h3 className="font-bold text-white mb-5">Leitura Recomendada</h3>
              <div className="space-y-4">
                {relatedArticles.map((item) => (
                  <RelatedArticle
                    key={item.slug}
                    title={item.title}
                    slug={item.slug}
                    category={item.category}
                  />
                ))}
              </div>
            </div>

          </aside>
        </div>
      </article>

      <Footer />
    </main>
  )
}

function ShareButton({ platform, url, icon }: { platform: string; url: string; icon: React.ReactNode }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 bg-[#1e293b] hover:bg-[#06b6d4] hover:text-white border border-[#334155]/50 text-[#94a3b8] rounded-xl transition-all group"
      aria-label={`Share on ${platform}`}
    >
      {icon}
    </a>
  )
}

function RelatedArticle({ title, slug, category }: { title: string; slug: string; category: string }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block p-4 rounded-xl bg-[#09090b]/50 hover:bg-[#1e293b] border border-[#334155]/30 transition-all group"
    >
      <span className="text-[10px] font-bold text-[#06b6d4] uppercase tracking-wider mb-2 block">{category}</span>
      <p className="text-sm font-semibold text-[#e2e8f0] group-hover:text-white transition-colors line-clamp-2 leading-snug mb-3">
        {title}
      </p>
      <span className="text-xs text-[#64748b] font-medium flex items-center gap-1 group-hover:text-[#06b6d4] transition-colors">
        Ler Artigo <ArrowRight className="w-3 h-3" />
      </span>
    </Link>
  )
}

// Markdown parser improved with Tailwind Typography alignment and dynamic CTA injection
function convertMarkdownToHtml(markdown: string, ctaHtml: string): string {
  let html = markdown

  // Inject IDs to H2 items for Table of Contents binding
  let sectionIdx = 0
  html = html.replace(/^## (.*?)$/gm, (match, p1) => {
    const id = `section-${sectionIdx++}`
    return `<h2 id="${id}" class="scroll-mt-32">${p1}</h2>`
  })

  // Headers (Remaining)
  html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>')
  html = html.replace(/^# (.*?)$/gm, '<h1 class="scroll-mt-32">$1</h1>')

  // Divider
  html = html.replace(/^\s*---\s*$/gm, "<hr />")

  // Bold & Italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, src) => {
    const safeAlt = alt || "Imagem do artigo"
    return `
      <figure class="my-10 sm:my-12">
        <div class="blog-image-frame overflow-hidden rounded-2xl border border-[#1f2a3a]/70 bg-[#0b111a]/80 shadow-[0_18px_50px_rgba(2,6,23,0.45)]">
          <img src="${src}" alt="${safeAlt}" loading="lazy" class="blog-image" />
        </div>
        <figcaption class="mt-3 text-xs text-[#94a3b8] uppercase tracking-[0.2em]">${safeAlt}</figcaption>
      </figure>
    `
  })

  // Blockquotes (GitHub style) & Checklists (simulated for simplicity)
  html = html.replace(/^> (.*?)$/gm, '<blockquote>$1</blockquote>')
  html = html.replace(/^- \[ \] (.*?)$/gm, '<li class="list-none flex items-center gap-2"><svg class="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg> $1</li>')
  html = html.replace(/^- \[x\] (.*?)$/gm, '<li class="list-none flex items-center gap-2"><svg class="w-4 h-4 text-[#06b6d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 12l2 2 4-4"></path></svg> $1</li>')

  // Lists (Bulleted items that aren't checklists)
  html = html.replace(/^\- (.*?)$/gm, (match, p1) => {
    if (p1.startsWith('<svg')) return match
    return `<li>${p1}</li>`
  })

  // Wrap consecutive <li> blocks into a single <ul>
  html = html.replace(/(?:<li>[\s\S]*?<\/li>\s*)+/g, (block) => {
    if (block.includes("<ul>")) return block
    return `<ul>${block.trim()}</ul>`
  })

  // Code blocks (inline and block)
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
  html = html.replace(/`(.*?)`/g, '<code>$1</code>')

  // Paragraph wrapping
  html = html.replace(/^(?!<h|<u|<li|<blockquote|<pre|<div|<ul|<hr|<\/)(.*?)$/gm, (match) => {
    if (match.trim().length === 0) return ''
    return `<p>${match}</p>`
  })

  // Inject CTA after the 2nd H2
  let h2Count = 0
  html = html.replace(/<h2/g, (match) => {
    h2Count++
    if (h2Count === 2) {
      return `${ctaHtml}<h2`
    }
    return match
  })

  // Style "Resumo rápido" section as a callout block
  html = html.replace(
    /<h2 id="section-(\d+)" class="scroll-mt-32">Resumo rápido<\/h2>\s*<ul>([\s\S]*?)<\/ul>/,
    (_match, id, list) =>
      `<div class="my-8 sm:my-10 rounded-2xl border border-[#334155]/50 bg-[#0b1220]/60 p-6 sm:p-8 shadow-xl">
        <div class="text-xs uppercase tracking-[0.25em] text-[#94a3b8] mb-3">Resumo rápido</div>
        <h2 id="section-${id}" class="scroll-mt-32 text-white text-2xl font-black mb-4">Resumo rápido</h2>
        <ul>${list}</ul>
      </div>`
  )

  // Style "Checklist relâmpago" section as a highlighted block
  html = html.replace(
    /<h2 id="section-(\d+)" class="scroll-mt-32">Checklist relâmpago<\/h2>\s*<ul>([\s\S]*?)<\/ul>/,
    (_match, id, list) =>
      `<div class="my-8 sm:my-10 rounded-2xl border border-[#223246]/70 bg-[#0b1426]/70 p-6 sm:p-8 shadow-xl">
        <div class="text-xs uppercase tracking-[0.25em] text-[#7dd3fc] mb-3">Checklist</div>
        <h2 id="section-${id}" class="scroll-mt-32 text-white text-2xl font-black mb-5">Checklist relâmpago</h2>
        <ul class="grid gap-3">${list}</ul>
      </div>`
  )

  // Style "Insight rápido" section as a callout
  html = html.replace(
    /<h2 id="section-(\d+)" class="scroll-mt-32">Insight rápido<\/h2>\s*<p>([\s\S]*?)<\/p>/,
    (_match, id, content) =>
      `<div class="my-10 rounded-2xl border border-[#1f3b4a]/70 bg-[#0b1624]/80 p-6 sm:p-8">
        <div class="text-xs uppercase tracking-[0.25em] text-[#7dd3fc] mb-3">Insight rápido</div>
        <h2 id="section-${id}" class="scroll-mt-32 text-white text-2xl font-black mb-4">Insight rápido</h2>
        <p class="m-0 text-[#d5deea]">${content}</p>
      </div>`
  )

  // Style "Exemplo real" section as a case block
  html = html.replace(
    /<h2 id="section-(\d+)" class="scroll-mt-32">Exemplo real<\/h2>\s*<p>([\s\S]*?)<\/p>/,
    (_match, id, content) =>
      `<div class="my-10 rounded-2xl border border-[#223246]/70 bg-[#0b111a]/80 p-6 sm:p-8 shadow-xl">
        <div class="text-xs uppercase tracking-[0.25em] text-[#a7f3d0] mb-3">Exemplo real</div>
        <h2 id="section-${id}" class="scroll-mt-32 text-white text-2xl font-black mb-4">Exemplo real</h2>
        <p class="m-0 text-[#d5deea]">${content}</p>
      </div>`
  )

  // Style "FAQ" section as stacked cards
  html = html.replace(
    /<h2 id="section-(\d+)" class="scroll-mt-32">FAQ<\/h2>\s*<ul>([\s\S]*?)<\/ul>/,
    (_match, id, list) =>
      `<div class="my-10 rounded-2xl border border-[#223246]/70 bg-[#0b1426]/70 p-6 sm:p-8 shadow-xl">
        <div class="text-xs uppercase tracking-[0.25em] text-[#c4b5fd] mb-3">FAQ</div>
        <h2 id="section-${id}" class="scroll-mt-32 text-white text-2xl font-black mb-5">FAQ</h2>
        <ul class="grid gap-4">${list}</ul>
      </div>`
  )

  // Style "O problema" and "O ajuste" blocks
  html = html.replace(
    /<h3>O problema<\/h3>\s*<p>([\s\S]*?)<\/p>/g,
    (_match, content) =>
      `<div class="my-6 rounded-xl border border-[#2a3a4d]/70 bg-[#0b1220]/70 px-5 py-4">
        <div class="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#94a3b8] mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
          O problema
        </div>
        <p class="m-0">${content}</p>
      </div>`
  )
  html = html.replace(
    /<h3>O ajuste<\/h3>\s*<p>([\s\S]*?)<\/p>/g,
    (_match, content) =>
      `<div class="my-6 rounded-xl border border-[#1f3b4a]/70 bg-[#0b1724]/70 px-5 py-4">
        <div class="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#7dd3fc] mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          O ajuste
        </div>
        <p class="m-0">${content}</p>
      </div>`
  )

  // Wrap each "Erro #X" section into a card
  html = html.replace(
    /(<h2 id="section-(\d+)" class="scroll-mt-32">Erro #(\d+):\s*([^<]+)<\/h2>)([\s\S]*?)(?=<h2 id="section-|$)/g,
    (_match, heading, _id, number, title, body) =>
      `<section class="my-10 rounded-2xl border border-[#1f2a3a]/70 bg-[#0b111a]/70 p-6 sm:p-8 shadow-[0_18px_60px_rgba(2,6,23,0.45)]">
        <div class="flex flex-wrap items-center gap-3 mb-5">
          <span class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#0b1724] border border-[#224a63]/70 text-[#7dd3fc] text-xs font-bold uppercase tracking-wider">Erro ${number}</span>
          <span class="text-sm text-[#94a3b8] uppercase tracking-[0.2em]">Ponto crítico</span>
        </div>
        ${heading.replace(
          /class="scroll-mt-32"/,
          'class="scroll-mt-32 text-white text-2xl font-black mb-2"'
        )}
        <p class="text-[#94a3b8] text-sm mb-6">O que está travando e como corrigir.</p>
        ${body}
      </section>`
  )

  // Style "Próximos passos" section as a CTA block
  html = html.replace(
    /<h2 id="section-(\d+)" class="scroll-mt-32">Próximos passos<\/h2>\s*<p>([\s\S]*?)<\/p>/,
    (_match, id, content) =>
      `<div class="my-10 rounded-2xl border border-[#1f3b4a]/70 bg-[#0b1624]/80 p-6 sm:p-8">
        <div class="text-xs uppercase tracking-[0.25em] text-[#7dd3fc] mb-3">Próximos passos</div>
        <h2 id="section-${id}" class="scroll-mt-32 text-white text-2xl font-black mb-4">Próximos passos</h2>
        <p class="m-0 text-[#d5deea]">${content}</p>
      </div>`
  )

  // Style "Resumo final" section as a closing block
  html = html.replace(
    /<h2 id="section-(\d+)" class="scroll-mt-32">Resumo final<\/h2>\s*<ul>([\s\S]*?)<\/ul>/,
    (_match, id, list) =>
      `<div class="my-10 rounded-2xl border border-[#223246]/70 bg-[#0b1426]/70 p-6 sm:p-8 shadow-xl">
        <div class="text-xs uppercase tracking-[0.25em] text-[#7dd3fc] mb-3">Resumo final</div>
        <h2 id="section-${id}" class="scroll-mt-32 text-white text-2xl font-black mb-5">Resumo final</h2>
        <ul>${list}</ul>
      </div>`
  )

  // Wrap remaining H2 sections into cards (editorial blocks)
  html = html.replace(
    /<h2 id="section-(\d+)" class="scroll-mt-32[^"]*">([^<]+)<\/h2>([\s\S]*?)(?=<h2 id="section-|$)/g,
    (_match, id, title, body) => {
      const normalizedTitle = String(title).trim()
      const skipTitles = new Set([
        "Resumo rápido",
        "Checklist relâmpago",
        "Insight rápido",
        "Exemplo real",
        "FAQ",
        "Resumo final",
        "Próximos passos",
      ])
      if (normalizedTitle.startsWith("Erro #") || skipTitles.has(normalizedTitle)) {
        return `<h2 id="section-${id}" class="scroll-mt-32">${title}</h2>${body}`
      }
      return `
        <section class="my-10 rounded-2xl border border-[#1f2a3a]/70 bg-[#0b111a]/70 p-6 sm:p-8 shadow-[0_18px_60px_rgba(2,6,23,0.45)]">
          <div class="text-xs uppercase tracking-[0.25em] text-[#94a3b8] mb-3">Seção</div>
          <h2 id="section-${id}" class="scroll-mt-32 text-white text-2xl font-black mb-4">${title}</h2>
          ${body}
        </section>`
    }
  )

  return html
}
