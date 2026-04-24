"use client"

import React, { useState, useMemo, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Mail, Sparkles, User, Filter, TrendingUp } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import type { BlogArticleListItem } from "@/lib/blog-data"

/* ------------------------------------------------------------------ */
/*  Stagger container                                                  */
/* ------------------------------------------------------------------ */
function StaggerGrid({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true, margin: "-60px" })
    return (
        <div ref={ref}>
            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } },
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
                {children}
            </motion.div>
        </div>
    )
}

const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
}

/* ------------------------------------------------------------------ */
/*  Category display names (keys are data identifiers, values are      */
/*  user-visible text with proper Portuguese accents)                   */
/* ------------------------------------------------------------------ */
const CATEGORY_DISPLAY: Record<string, string> = {
    "Trafego Pago": "Tráfego Pago",
    "Automacao": "Automação",
    "Estrategia": "Estratégia",
}
function getCategoryDisplay(cat: string) {
    return CATEGORY_DISPLAY[cat] ?? cat
}

/* ------------------------------------------------------------------ */
/*  Category seal map — monochrome cinematic                           */
/* ------------------------------------------------------------------ */
const SEAL_MAP: Record<string, { label: string; className: string }> = {
    "Google Ads": { label: "Performance", className: "text-white/50 border-white/[0.1] bg-white/[0.04]" },
    "Automacao": { label: "Automação", className: "text-white/50 border-white/[0.1] bg-white/[0.04]" },
    "SEO Local": { label: "Local", className: "text-white/50 border-white/[0.1] bg-white/[0.04]" },
    "IA & Marketing": { label: "IA", className: "text-white/50 border-white/[0.1] bg-white/[0.04]" },
    "Meta Ads": { label: "Escala", className: "text-white/50 border-white/[0.1] bg-white/[0.04]" },
    "SEO": { label: "SEO", className: "text-white/50 border-white/[0.1] bg-white/[0.04]" },
    "Trafego Pago": { label: "Tráfego", className: "text-white/50 border-white/[0.1] bg-white/[0.04]" },
    "Estrategia": { label: "Estratégia", className: "text-white/50 border-white/[0.1] bg-white/[0.04]" },
    "Redes Sociais": { label: "Social", className: "text-white/50 border-white/[0.1] bg-white/[0.04]" },
}
const DEFAULT_SEAL = { label: "Editorial", className: "text-white/50 border-white/[0.1] bg-white/[0.04]" }
function getSeal(category: string) {
    return SEAL_MAP[category] ?? DEFAULT_SEAL
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function BlogClient({ articles }: { articles: BlogArticleListItem[] }) {
    const [activeCategory, setActiveCategory] = useState("Todos")

    const categories = useMemo(() => {
        if (!articles.length) return ["Todos"]
        const cats = new Set(articles.map((a) => a.category))
        return ["Todos", ...Array.from(cats)]
    }, [articles])

    const featuredArticle = articles.find((a) => a.featured) || articles[0]

    const filteredArticles = useMemo(() => {
        if (!articles.length || !featuredArticle) return []
        let filtered = articles.filter((a) => a.slug !== featuredArticle.slug)
        if (activeCategory !== "Todos") {
            filtered = filtered.filter((a) => a.category === activeCategory)
        }
        return filtered
    }, [articles, activeCategory, featuredArticle])

    if (!articles.length) {
        return (
            <section className="od-section py-16 px-4">
                <div className="od-container text-center">
                    <h2 className="text-2xl font-extralight uppercase tracking-[0.12em] text-[#e2e8f0] mb-3">Nenhum artigo disponível</h2>
                    <p className="text-white/30">Em breve novos conteúdos serão publicados.</p>
                </div>
            </section>
        )
    }

    return (
        <div className="w-full">
            {/* ============================================================ */}
            {/*  Blog Page Hero                                              */}
            {/* ============================================================ */}
            <section className="relative pt-32 pb-16 px-4 overflow-hidden">
                {/* Subtle ambient — no colored blobs */}
                <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(255,255,255,0.02)' }} />
                <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(255,255,255,0.015)' }} />

                <div className="blog-container relative z-10 text-center od-reveal">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md mb-6"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                        <TrendingUp className="w-3.5 h-3.5 text-white/50" />
                        <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">Insights & Estratégias</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extralight uppercase tracking-[0.12em] text-white mb-5 leading-[1.1]"
                    >
                        Blog{" "}
                        <span
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #ffffff, rgba(255,255,255,0.55))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            On Demand
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl max-w-2xl mx-auto mb-0"
                        style={{ color: 'rgba(255,255,255,0.45)' }}
                    >
                        Marketing digital, automação e SEO com profundidade — artigos direto ao ponto, sem enrolação.
                    </motion.p>
                </div>
            </section>

            {/* ============================================================ */}
            {/*  Sticky Category Filter Bar                                  */}
            {/* ============================================================ */}
            <section className="sticky top-16 z-30 py-4 px-4 border-b border-white/[0.06]">
                <div className="absolute inset-0 bg-[#09090b]/80 backdrop-blur-xl" />
                <div className="blog-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center gap-3 overflow-x-auto scrollbar-none pb-1"
                    >
                        <Filter className="w-4 h-4 text-white/25 flex-shrink-0" />
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`
                                    relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 min-h-[44px]
                                    ${activeCategory === cat
                                        ? "text-white"
                                        : "text-white/40 hover:text-white/70 hover:border-white/[0.12]"
                                    }
                                `}
                                style={activeCategory === cat
                                    ? { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)' }
                                    : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }
                                }
                            >
                                {getCategoryDisplay(cat)}
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activeCategoryPill"
                                        className="absolute inset-0 rounded-xl"
                                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                    />
                                )}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ============================================================ */}
            {/*  Featured Article Hero Card                                  */}
            {/* ============================================================ */}
            <AnimatePresence mode="wait">
                {activeCategory === "Todos" && (
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="blog-section py-12 px-4"
                    >
                        <div className="blog-container">
                            <Link href={`/blog/${featuredArticle.slug}`} className="group block">
                                <div
                                    className="relative overflow-hidden rounded-2xl bg-white/[0.02] backdrop-blur-md shadow-2xl shadow-black/30 transition-all duration-500"
                                    style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)' }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)' }}
                                >
                                    <div className="flex flex-col lg:flex-row min-h-[420px]">
                                        {/* Image */}
                                        <div className="relative lg:w-3/5 overflow-hidden order-1 lg:order-2 aspect-video lg:aspect-auto">
                                            <Image
                                                src={featuredArticle.coverImage}
                                                alt={featuredArticle.title}
                                                fill
                                                priority
                                                sizes="(min-width: 1024px) 60vw, 100vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent lg:bg-gradient-to-r lg:from-[#09090b] lg:via-[#09090b]/60 lg:to-transparent" />
                                        </div>

                                        {/* Content */}
                                        <div className="relative lg:w-2/5 p-5 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1 z-10">
                                            {/* Badges */}
                                            <div className="flex items-center gap-2.5 mb-6 flex-wrap">
                                                <span
                                                    className="px-3 py-1 text-white/60 text-xs font-bold rounded-lg uppercase tracking-wider backdrop-blur-sm"
                                                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                                                >
                                                    Destaque
                                                </span>
                                                <span className="text-white/45 font-medium text-sm">
                                                    {getCategoryDisplay(featuredArticle.category)}
                                                </span>
                                                <span className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border backdrop-blur-sm ${getSeal(featuredArticle.category).className}`}>
                                                    {getSeal(featuredArticle.category).label}
                                                </span>
                                            </div>

                                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight uppercase tracking-[0.04em] sm:tracking-[0.06em] text-white mb-4 sm:mb-5 leading-tight group-hover:text-white/80 transition-colors duration-300">
                                                {featuredArticle.title}
                                            </h2>

                                            <p className="text-base lg:text-lg mb-8 line-clamp-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
                                                {featuredArticle.excerpt}
                                            </p>

                                            {/* Author + CTA */}
                                            <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/[0.06]">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
                                                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                                                    >
                                                        <User className="w-5 h-5 text-white/40" />
                                                    </div>
                                                    <div>
                                                        <p className="text-white text-sm font-medium">{featuredArticle.author}</p>
                                                        <p className="text-white/30 text-xs flex items-center gap-1">
                                                            <Clock className="w-3 h-3" /> {featuredArticle.readTime} min
                                                        </p>
                                                        <p className="text-white/20 text-[11px] mt-0.5">
                                                            {new Date(featuredArticle.publishedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div
                                                    className="flex items-center justify-center w-12 h-12 rounded-xl text-white/50 transition-all duration-300 group-hover:text-white group-hover:border-white/25"
                                                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                                                >
                                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subtle glow on hover */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-inset ring-white/[0.08]" />
                                </div>
                            </Link>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* ============================================================ */}
            {/*  Article Grid with Lead Magnet Injection                     */}
            {/* ============================================================ */}
            <section className="blog-section py-12 px-4">
                <div className="blog-container">
                    {/* Category heading */}
                    <AnimatePresence mode="wait">
                        {activeCategory !== "Todos" && (
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 12 }}
                                className="mb-10"
                            >
                                <h2 className="text-2xl font-extralight uppercase tracking-[0.08em] text-white mb-2">
                                    Explorando: <span className="text-white/60">{getCategoryDisplay(activeCategory)}</span>
                                </h2>
                                <p className="text-sm text-white/30">Encontramos {filteredArticles.length} artigos nesta categoria.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <StaggerGrid>
                        {filteredArticles.map((article, idx) => (
                            <React.Fragment key={article.slug}>
                                {/* Lead Magnet injection after 2nd card */}
                                {idx === 2 && activeCategory === "Todos" && (
                                    <motion.div
                                        variants={cardVariants}
                                        className="col-span-1 md:col-span-2 lg:col-span-3"
                                    >
                                        <div
                                            className="rounded-2xl backdrop-blur-xl p-5 sm:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden shadow-2xl shadow-black/20"
                                            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}
                                        >
                                            {/* Decorative blobs — muted white */}
                                            <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[80px] pointer-events-none" style={{ background: 'rgba(255,255,255,0.02)' }} />
                                            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-[60px] pointer-events-none" style={{ background: 'rgba(255,255,255,0.015)' }} />

                                            <div className="relative z-10 max-w-xl">
                                                <div className="flex items-center gap-2 text-white/50 mb-4 font-semibold text-sm uppercase tracking-wider">
                                                    <Sparkles className="w-4 h-4" />
                                                    Guia Gratuito
                                                </div>
                                                <h3 className="text-2xl sm:text-3xl font-extralight uppercase tracking-[0.06em] text-white mb-4">
                                                    Guia de Automação para Organizar o Atendimento
                                                </h3>
                                                <p className="text-white/45 text-base sm:text-lg mb-0">
                                                    Como estruturamos fluxos para organizar qualificação e encaminhamentos com clareza.
                                                </p>
                                            </div>

                                            <div className="relative z-10 w-full md:w-auto">
                                                <button
                                                    type="button"
                                                    onClick={() => window.open('https://wa.me/5531996966686?text=Quero%20receber%20o%20guia%20de%20automa%C3%A7%C3%A3o%20do%20blog', '_blank')}
                                                    className="w-full md:w-auto px-6 py-4 text-white font-bold rounded-xl transition-all whitespace-nowrap flex items-center justify-center gap-2 hover:border-white/25 min-h-[48px]"
                                                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)' }}
                                                >
                                                    Receber Guia
                                                    <Mail className="w-4 h-4" />
                                                </button>
                                                <p className="text-xs text-white/20 mt-4 text-center md:text-left">
                                                    Sem spam. Cancele quando quiser.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Article Card */}
                                <motion.div variants={cardVariants}>
                                    <Link
                                        href={`/blog/${article.slug}`}
                                        className="group h-full flex flex-col rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-md transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
                                        style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)' }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)' }}
                                    >
                                        {/* Card image */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={article.coverImage}
                                                alt={article.title}
                                                fill
                                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />

                                            {/* Tags overlay */}
                                            <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                                                <span className="px-2.5 py-1 bg-[#09090b]/60 backdrop-blur-md rounded-lg text-xs font-semibold text-white/60 uppercase tracking-wider border border-white/[0.08]">
                                                    {getCategoryDisplay(article.category)}
                                                </span>
                                                <span className={`px-2.5 py-1 backdrop-blur-md rounded-lg text-xs font-semibold uppercase tracking-wider border ${getSeal(article.category).className}`}>
                                                    {getSeal(article.category).label}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Card body */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-xs text-white/25 mb-4">
                                                <span className="flex items-center gap-1.5">
                                                    <Clock className="w-3.5 h-3.5" /> {article.readTime} min
                                                </span>
                                                <span>
                                                    {new Date(article.publishedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-bold text-[#e2e8f0] group-hover:text-white/80 mb-3 transition-colors duration-300 line-clamp-2 leading-snug">
                                                {article.title}
                                            </h3>

                                            <p className="text-white/40 text-sm mb-6 line-clamp-2 flex-grow leading-relaxed">
                                                {article.excerpt}
                                            </p>

                                            {/* Footer */}
                                            <div className="pt-4 mt-auto border-t border-white/[0.06] flex items-center justify-between">
                                                <span className="text-sm font-medium text-white/35">{article.author}</span>
                                                <span className="text-white/50 text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                                                    Ler artigo <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            </React.Fragment>
                        ))}
                    </StaggerGrid>

                    {/* Empty state */}
                    {filteredArticles.length === 0 && (
                        <div className="text-center py-20">
                            <div
                                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                            >
                                <Filter className="w-7 h-7 text-white/20" />
                            </div>
                            <h3 className="text-2xl font-extralight uppercase tracking-[0.08em] text-white/50 mb-2">Nenhum artigo encontrado</h3>
                            <p className="text-white/30 mb-6">Tente outra categoria ou volte para ver todos.</p>
                            <button
                                onClick={() => setActiveCategory("Todos")}
                                className="px-6 py-3 min-h-[44px] text-white font-bold rounded-xl transition-all hover:border-white/25"
                                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)' }}
                            >
                                Ver todos os artigos
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
