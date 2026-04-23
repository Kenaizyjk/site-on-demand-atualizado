import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, ChevronRight, Linkedin } from "lucide-react"

const DAVI_PHOTO = "/davi-honorato.jpg"

const CATEGORY_DISPLAY_MAP: Record<string, string> = {
  "Trafego Pago": "Tráfego Pago",
  "Automacao": "Automação",
  "Estrategia": "Estratégia",
}
function getCategoryDisplayName(cat: string) {
  return CATEGORY_DISPLAY_MAP[cat] ?? cat
}
import Link from "next/link"
import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { BlogArticleSchema, BreadcrumbSchema } from "@/components/blog-schema"
import { BLOG_ARTICLES, getBlogArticleBySlug } from "@/lib/blog-data"
import Image from "next/image"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({ slug: article.slug }))
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
    return { title: "Artigo não encontrado" }
  }

  return {
    title: article.metaTitle ?? article.title,
    description: article.metaDescription ?? article.excerpt.slice(0, 155),
    keywords: [...(article.keywords ?? []), ...article.tags],
    robots: article.noindex ? { index: false } : { index: true, follow: true },
    alternates: { canonical: `https://ondemanddigital.com.br/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      locale: "pt_BR",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [article.author],
      tags: article.tags,
      url: `https://ondemanddigital.com.br/blog/${article.slug}`,
      images: [
        {
          url: `https://ondemanddigital.com.br/og?title=${encodeURIComponent(article.title)}&type=blog`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [`https://ondemanddigital.com.br/og?title=${encodeURIComponent(article.title)}&type=blog`],
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

  const relatedArticles = BLOG_ARTICLES.filter((item) => item.slug !== article.slug).slice(0, 3)

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

  const ctaHtml = `
    <div class="my-16 p-8 sm:p-10 rounded-2xl text-center relative overflow-hidden" style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08)">
      <div class="relative z-10 flex flex-col items-center">
        <h3 class="text-2xl sm:text-3xl font-extralight uppercase tracking-[0.06em] text-white mb-4">${ctaVariant.title}</h3>
        <p class="text-white/40 mb-8 max-w-lg mx-auto text-lg">${ctaVariant.description}</p>
        <a href="https://wa.me/5531996966686?text=Ol%C3%A1!%20Estou%20lendo%20o%20artigo%20sobre%20${encodeURIComponent(article.title)}%20e%20gostaria%20de%20uma%20consultoria." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl transition-all" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.15)">
          ${ctaVariant.ctaLabel}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
      </div>
    </div>
  `

  const proseClassName =
    "prose prose-invert prose-lg max-w-none " +
    "prose-headings:text-white prose-headings:font-extralight prose-headings:uppercase prose-headings:tracking-[0.08em] " +
    "prose-h2:mt-20 prose-h2:mb-8 prose-h2:text-[1.75rem] prose-h2:leading-tight prose-h2:pl-5 prose-h2:border-l-2 prose-h2:border-white/[0.15] " +
    "prose-h3:mt-14 prose-h3:mb-6 prose-h3:text-[1.2rem] prose-h3:text-white/80 prose-h3:font-semibold prose-h3:normal-case prose-h3:tracking-normal " +
    "prose-p:my-7 prose-p:text-white/[0.55] prose-p:leading-[2.0] " +
    "prose-strong:text-white/80 prose-strong:font-semibold " +
    "prose-a:font-semibold prose-a:text-white/60 prose-a:no-underline prose-a:border-b prose-a:border-white/25 hover:prose-a:text-white/80 hover:prose-a:border-white/40 prose-a:transition-colors " +
    "prose-ul:my-8 prose-ul:space-y-2 prose-ul:pl-6 " +
    "prose-ol:my-8 prose-ol:pl-6 " +
    "prose-li:my-2 prose-li:text-white/[0.55] prose-li:marker:text-white/25 " +
    "prose-code:rounded-md prose-code:bg-white/[0.04] prose-code:px-2 prose-code:py-0.5 prose-code:text-white/60 prose-code:font-medium prose-code:before:content-none prose-code:after:content-none " +
    "prose-pre:my-10 prose-pre:overflow-x-auto prose-pre:rounded-2xl prose-pre:border prose-pre:border-white/[0.06] prose-pre:bg-white/[0.02] prose-pre:backdrop-blur-md " +
    "prose-hr:my-16 prose-hr:border-white/[0.06] " +
    "prose-blockquote:my-10 prose-blockquote:rounded-r-xl prose-blockquote:border-l-2 prose-blockquote:border-white/[0.15] prose-blockquote:bg-transparent prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:text-white/[0.45] prose-blockquote:italic"

  return (
    <main className="od-page">
      <Navigation />

      {/* JSON-LD Article Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        author: { '@type': 'Person', name: article.author },
        datePublished: article.publishedAt,
        dateModified: article.updatedAt ?? article.publishedAt,
        publisher: { '@type': 'Organization', name: 'On Demand Digital', url: 'https://ondemanddigital.com.br' },
        image: article.coverImage.startsWith('http') ? article.coverImage : `${siteUrl}${article.coverImage}`,
        mainEntityOfPage: `${siteUrl}/blog/${article.slug}`,
      }) }} />

      {/* Schemas */}
      <BlogArticleSchema
        title={article.title}
        description={article.excerpt}
        author={article.author}
        publishedDate={article.publishedAt}
        modifiedDate={article.updatedAt}
        image={article.coverImage}
        slug={article.slug}
        readTime={article.readTime}
      />
      {BreadcrumbSchema([
        { name: "Home", url: siteUrl },
        { name: "Blog", url: `${siteUrl}/blog` },
        { name: article.title, url: `${siteUrl}/blog/${article.slug}` },
      ])}

      {/* ============================================================ */}
      {/*  Immersive Cover Hero                                         */}
      {/* ============================================================ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Full-bleed cover image */}
        <div className="absolute inset-0">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Heavy gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/70 to-[#09090b]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/40 to-transparent" />
        </div>

        {/* Content overlaying the image */}
        <div className="relative z-10 w-full max-w-[720px] mx-auto px-6 pb-16 pt-40">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors mb-8 font-medium text-sm group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Blog
          </Link>

          {/* Category + Read time */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="px-3 py-1 text-white/60 text-xs font-bold rounded-lg uppercase tracking-wider backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {getCategoryDisplayName(article.category)}
            </span>
            <span className="text-white/30 text-sm flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {article.readTime} min
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight uppercase tracking-[0.08em] text-white mb-6 leading-[1.15]">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg sm:text-xl text-white/45 leading-relaxed mb-8 max-w-2xl">
            {article.excerpt}
          </p>

          {/* Author row */}
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-white/[0.15] ring-offset-2 ring-offset-[#09090b] relative">
              <Image
                src={DAVI_PHOTO}
                alt="Davi Honorato, fundador da On Demand Digital"
                width={44}
                height={44}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">{article.author}</p>
              <p className="text-white/30 text-xs flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                {formattedDate}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Article Content — Single Column, Centered                    */}
      {/* ============================================================ */}
      <article className="relative px-6 pt-16 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-[720px] mx-auto">
          {/* Prose content */}
          <div className={proseClassName}>
            <div
              dangerouslySetInnerHTML={{
                __html: convertMarkdownToHtml(article.content ?? '', ctaHtml),
              }}
            />
          </div>
        </div>
      </article>

      {/* ============================================================ */}
      {/*  Tags + Share                                                 */}
      {/* ============================================================ */}
      <section className="px-6 pb-16">
        <div className="max-w-[720px] mx-auto pt-10 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2">
              {article.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/[0.03] text-white/40 text-xs font-medium rounded-lg border border-white/[0.06]">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-white/30 text-xs font-semibold mr-1">Compartilhar</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${siteUrl}/blog/${article.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.15] text-white/40 hover:text-white/70 rounded-lg transition-all"
                aria-label="Compartilhar no LinkedIn"
              >
                <Share2 className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${article.title} ${siteUrl}/blog/${article.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.15] text-white/40 hover:text-white/70 rounded-lg transition-all"
                aria-label="Compartilhar no WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Author Card                                                  */}
      {/* ============================================================ */}
      <section className="px-6 pb-20">
        <div className="max-w-[720px] mx-auto">
          <div
            className="flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 ring-2 ring-white/[0.1] ring-offset-2 ring-offset-[#09090b] relative">
              <Image
                src={DAVI_PHOTO}
                alt="Davi Honorato, especialista em growth e IA na On Demand Digital"
                width={80}
                height={80}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-center sm:text-left flex-1">
              <p className="text-white font-semibold text-lg">{article.author}</p>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-2">Founder, Especialista Growth & IA</p>
              <p className="text-white/35 text-sm leading-relaxed">
                Experiência em campanhas de múltiplos segmentos com foco em consistência, automação e clareza de execução.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/davi-honorato-209955367"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.1] hover:border-white/[0.2] text-white/60 hover:text-white text-sm font-semibold rounded-xl transition-all"
            >
              <Linkedin className="w-4 h-4" />
              Conectar
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  Related Articles                                             */}
      {/* ============================================================ */}
      <section className="px-6 pb-24">
        <div className="max-w-[960px] mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-extralight uppercase tracking-[0.12em] text-white">
              Continue lendo
            </h2>
            <Link
              href="/blog"
              className="text-white/40 hover:text-white/70 text-sm font-semibold flex items-center gap-1.5 transition-colors"
            >
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#09090b]/60 backdrop-blur-sm rounded-md text-[10px] font-bold text-white/50 uppercase tracking-wider border border-white/[0.08]">
                    {getCategoryDisplayName(item.category)}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors line-clamp-2 leading-snug mb-3">
                    {item.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/[0.04]">
                    <span className="text-white/25 text-xs">{item.readTime} min</span>
                    <span className="text-white/40 text-xs font-semibold flex items-center gap-1 group-hover:text-white/60 transition-colors">
                      Ler <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ------------------------------------------------------------------ */
/*  Markdown → HTML converter (simplified, no special boxes)           */
/* ------------------------------------------------------------------ */
function convertMarkdownToHtml(markdown: string, ctaHtml: string): string {
  let html = markdown

  // H2 with section IDs for anchor links
  let sectionIdx = 0
  html = html.replace(/^## (.*?)$/gm, (_match, p1) => {
    const id = `section-${sectionIdx++}`
    return `<h2 id="${id}" class="scroll-mt-32">${p1}</h2>`
  })

  // H3, H1
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
        <div class="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
          <img src="${src}" alt="${safeAlt}" loading="lazy" class="w-full" />
        </div>
        <figcaption class="mt-3 text-xs text-white/30 uppercase tracking-[0.2em]">${safeAlt}</figcaption>
      </figure>
    `
  })

  // Blockquotes
  html = html.replace(/^> (.*?)$/gm, '<blockquote>$1</blockquote>')

  // Convert checklist items to regular list items
  html = html.replace(/^- \[ \] (.*?)$/gm, '<li>$1</li>')
  html = html.replace(/^- \[x\] (.*?)$/gm, '<li>$1</li>')

  // Regular list items
  html = html.replace(/^\- (.*?)$/gm, '<li>$1</li>')

  // Wrap consecutive <li> blocks
  html = html.replace(/(?:<li>[\s\S]*?<\/li>\s*)+/g, (block) => {
    if (block.includes("<ul>")) return block
    return `<ul>${block.trim()}</ul>`
  })

  // Code blocks
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
  html = html.replace(/`(.*?)`/g, '<code>$1</code>')

  // Paragraph wrapping
  html = html.replace(/^(?!<h|<u|<li|<blockquote|<pre|<div|<ul|<hr|<\/|<figure|<section)(.*?)$/gm, (match) => {
    if (match.trim().length === 0) return ''
    return `<p>${match}</p>`
  })

  // Inject CTA after 2nd H2
  let h2Count = 0
  html = html.replace(/<h2/g, (match) => {
    h2Count++
    if (h2Count === 2) {
      return `${ctaHtml}<h2`
    }
    return match
  })

  return html
}
