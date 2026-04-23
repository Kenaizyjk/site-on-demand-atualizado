"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, BookOpen } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BLOG_ARTICLES_LIST } from "@/lib/blog-data"

/* ------------------------------------------------------------------ */
/*  Style maps — monochrome cinematic                                  */
/* ------------------------------------------------------------------ */
const CATEGORY_STYLES: Record<string, { badge: string; dot: string }> = {
    Automacao: {
        badge: "bg-white/[0.04] border border-white/[0.1] backdrop-blur-md",
        dot: "bg-white/40",
    },
    "IA & Marketing": {
        badge: "bg-white/[0.04] border border-white/[0.1] backdrop-blur-md",
        dot: "bg-white/40",
    },
    "Trafego Pago": {
        badge: "bg-white/[0.04] border border-white/[0.1] backdrop-blur-md",
        dot: "bg-white/40",
    },
    "Google Ads": {
        badge: "bg-white/[0.04] border border-white/[0.1] backdrop-blur-md",
        dot: "bg-white/40",
    },
    "Meta Ads": {
        badge: "bg-white/[0.04] border border-white/[0.1] backdrop-blur-md",
        dot: "bg-white/40",
    },
    "SEO Local": {
        badge: "bg-white/[0.04] border border-white/[0.1] backdrop-blur-md",
        dot: "bg-white/40",
    },
    SEO: {
        badge: "bg-white/[0.04] border border-white/[0.1] backdrop-blur-md",
        dot: "bg-white/40",
    },
    Estrategia: {
        badge: "bg-white/[0.04] border border-white/[0.1] backdrop-blur-md",
        dot: "bg-white/40",
    },
    "Redes Sociais": {
        badge: "bg-white/[0.04] border border-white/[0.1] backdrop-blur-md",
        dot: "bg-white/40",
    },
}

const DEFAULT_STYLE = {
    badge: "bg-white/[0.04] border border-white/[0.1] backdrop-blur-md",
    dot: "bg-white/40",
}

function getCategoryStyle(category: string) {
    return CATEGORY_STYLES[category] ?? DEFAULT_STYLE
}

const COVER_GRADIENTS: Record<string, string> = {
    Automacao: "from-zinc-900 via-zinc-800 to-zinc-700",
    "IA & Marketing": "from-zinc-900 via-zinc-800 to-zinc-700",
    "Trafego Pago": "from-zinc-900 via-zinc-800 to-zinc-700",
    "Google Ads": "from-zinc-900 via-zinc-800 to-zinc-700",
    "Meta Ads": "from-zinc-900 via-zinc-800 to-zinc-700",
    "SEO Local": "from-zinc-900 via-zinc-800 to-zinc-700",
    SEO: "from-zinc-900 via-zinc-800 to-zinc-700",
    Estrategia: "from-zinc-900 via-zinc-800 to-zinc-700",
    "Redes Sociais": "from-zinc-900 via-zinc-800 to-zinc-700",
}

const DEFAULT_GRADIENT = "from-zinc-900 via-zinc-800 to-zinc-700"

function getGradient(category: string) {
    return COVER_GRADIENTS[category] ?? DEFAULT_GRADIENT
}

const CATEGORY_ICONS: Record<string, string> = {
    Automacao: "\u2699\uFE0F",
    "IA & Marketing": "\uD83E\uDD16",
    "Trafego Pago": "\uD83D\uDCC8",
    "Google Ads": "\uD83D\uDD0D",
    "Meta Ads": "\uD83D\uDCF1",
    "SEO Local": "\uD83D\uDCCD",
    SEO: "\uD83D\uDD0E",
    Estrategia: "\uD83C\uDFAF",
    "Redes Sociais": "\uD83D\uDCAC",
}

/* ------------------------------------------------------------------ */
/*  Category display names                                             */
/* ------------------------------------------------------------------ */
const CATEGORY_DISPLAY: Record<string, string> = {
    "Trafego Pago": "Tráfego Pago",
    Automacao: "Automação",
    Estrategia: "Estratégia",
}
function getCategoryDisplay(cat: string) {
    return CATEGORY_DISPLAY[cat] ?? cat
}

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
    },
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const recentArticles = [...BLOG_ARTICLES_LIST]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3)

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function BlogPreviewHome() {
    const [featured, ...secondary] = recentArticles
    const ref = useRef<HTMLElement>(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    if (!featured) return null

    const featuredStyle = getCategoryStyle(featured.category)
    const featuredGradient = getGradient(featured.category)
    const featuredIcon = CATEGORY_ICONS[featured.category] ?? "\uD83D\uDCDD"

    return (
        <section ref={ref} className="od-section sm:py-16 lg:py-20 relative overflow-hidden">
            {/* Ambient decoration — muted */}
            <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(255,255,255,0.02)' }} />
            <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] rounded-full blur-[80px] pointer-events-none" style={{ background: 'rgba(255,255,255,0.02)' }} />

            <div className="od-container px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md mb-5"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <BookOpen className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.5)' }} />
                        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>Blog</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight uppercase mb-4" style={{ letterSpacing: '0.12em' }}>
                        <span className="text-[#e2e8f0]">Conteúdo </span>
                        <span style={{ backgroundImage: 'linear-gradient(90deg, #ffffff, rgba(255,255,255,0.55))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Prático</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Aprenda marketing digital, automação e SEO com artigos direto ao ponto
                    </p>
                </motion.div>

                {/* Layout: Featured + 2 secondary */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-6 mb-10"
                >
                    {/* Featured Post — 3/5 columns */}
                    <motion.div variants={itemVariants} className="lg:col-span-3">
                        <Link href={`/blog/${featured.slug}`} className="group block h-full">
                            <article className="h-full flex flex-col rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-md transition-all duration-400 hover:shadow-xl hover:scale-[1.01]"
                                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)' }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)' }}>
                                {/* Cover */}
                                <div className={`relative w-full aspect-[16/9] bg-gradient-to-br ${featuredGradient} overflow-hidden flex-shrink-0`}>
                                    {featured.coverImage ? (
                                        <Image
                                            src={featured.coverImage}
                                            alt={featured.title}
                                            fill
                                            className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                                            sizes="(max-width: 1024px) 100vw, 60vw"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-6xl sm:text-7xl opacity-30 select-none">{featuredIcon}</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/70 via-[#09090b]/10 to-transparent" />

                                    {/* Badge overlay */}
                                    <div className="absolute top-4 left-4 flex items-center gap-2">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${featuredStyle.badge}`} style={{ color: 'rgba(255,255,255,0.5)' }}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${featuredStyle.dot}`} />
                                            {getCategoryDisplay(featured.category)}
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg backdrop-blur-md text-xs font-bold"
                                            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}>
                                            Destaque
                                        </span>
                                    </div>

                                    {/* Read time */}
                                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-[#09090b]/50 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/[0.08]">
                                        <Clock className="w-3 h-3 text-white/80" />
                                        <span className="text-white/80 text-xs font-medium">{featured.readTime} min</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#e2e8f0] mb-3 line-clamp-2 transition-colors duration-300 leading-snug group-hover:text-white/80">
                                        {featured.title}
                                    </h3>
                                    <p className="text-sm sm:text-base flex-grow line-clamp-3 leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                                        {featured.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                                        <span className="text-xs text-[#64748b]">
                                            {new Date(featured.publishedAt).toLocaleDateString("pt-BR", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all duration-300" style={{ color: 'rgba(255,255,255,0.5)' }}>
                                            Ler artigo completo
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    </motion.div>

                    {/* Secondary articles — 2/5 columns */}
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        {secondary.map((article) => {
                            const style = getCategoryStyle(article.category)
                            const gradient = getGradient(article.category)
                            const icon = CATEGORY_ICONS[article.category] ?? "\uD83D\uDCDD"
                            return (
                                <motion.div key={article.slug} variants={itemVariants} className="flex-1">
                                    <Link href={`/blog/${article.slug}`} className="group block h-full">
                                        <article className="h-full flex flex-row rounded-xl overflow-hidden bg-white/[0.02] backdrop-blur-md transition-all duration-400 hover:shadow-lg hover:scale-[1.015]"
                                            style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)' }}
                                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)' }}>
                                            {/* Mini cover */}
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
                                                <span className={`inline-flex items-center gap-1 self-start px-2 py-0.5 rounded-md text-xs font-semibold mb-2 ${style.badge}`} style={{ color: 'rgba(255,255,255,0.5)' }}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                                                    {getCategoryDisplay(article.category)}
                                                </span>
                                                <h3 className="text-sm font-bold text-[#e2e8f0] mb-1.5 line-clamp-2 group-hover:text-white/80 transition-colors duration-300 leading-snug">
                                                    {article.title}
                                                </h3>
                                                <p className="text-xs line-clamp-2 leading-relaxed flex-grow mb-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
                                                    {article.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-1 text-[#64748b]">
                                                        <Clock className="w-3 h-3" />
                                                        <span className="text-xs">{article.readTime} min</span>
                                                    </div>
                                                    <span className="inline-flex items-center gap-1 text-xs font-medium group-hover:gap-1.5 transition-all duration-300" style={{ color: 'rgba(255,255,255,0.5)' }}>
                                                        Ler
                                                        <ArrowRight className="w-3 h-3" />
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-md transition-all duration-300 font-semibold text-sm text-white"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)' }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)' }}
                    >
                        Ver todos os artigos
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
