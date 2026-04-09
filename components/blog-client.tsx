"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Mail, Sparkles, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { BlogArticleListItem } from "@/lib/blog-data"

export default function BlogClient({ articles }: { articles: BlogArticleListItem[] }) {
    const [activeCategory, setActiveCategory] = useState("Todos")
    const sealMap: Record<string, { label: string; className: string }> = {
        "Google Ads": { label: "Selo Performance", className: "text-[#7dd3fc] border-[#225070]" },
        "Automacao": { label: "Selo Automacao", className: "text-[#a7f3d0] border-[#1f3a2e]" },
        "SEO Local": { label: "Selo Local", className: "text-[#fcd34d] border-[#4b3b1a]" },
        "IA & Marketing": { label: "Selo IA", className: "text-[#c4b5fd] border-[#3a2e5a]" },
        "Meta Ads": { label: "Selo Escala", className: "text-[#60a5fa] border-[#1f3352]" },
        "SEO": { label: "Selo SEO", className: "text-[#86efac] border-[#1f3a2b]" },
        "Trafego Pago": { label: "Selo Trafego", className: "text-[#f97316] border-[#4b2e1a]" },
        "Estrategia": { label: "Selo Estrategia", className: "text-[#a78bfa] border-[#3a2e5a]" },
        "Redes Sociais": { label: "Selo Social", className: "text-[#fb7185] border-[#4b1a2e]" },
    }
    const getSeal = (category: string) =>
        sealMap[category] ?? { label: "Selo Editorial", className: "text-[#94a3b8] border-[#233246]" }

    if (!articles.length) {
        return (
            <section className="od-section py-16 px-4">
                <div className="od-container text-center">
                    <h2 className="text-2xl font-bold text-slate-200 mb-3">Nenhum artigo disponível</h2>
                    <p className="text-slate-500">Em breve novos conteúdos serão publicados.</p>
                </div>
            </section>
        )
    }

    // Derivar categorias únicas
    const categories = useMemo(() => {
        const cats = new Set(articles.map((a) => a.category))
        return ["Todos", ...Array.from(cats)]
    }, [articles])

    // Identificar o post destaque (primeiro com featured: true)
    const featuredArticle = articles.find((a) => a.featured) || articles[0]

    // Filtrar os outros artigos (excluindo o destaque se estiver no topo, ou não)
    const filteredArticles = useMemo(() => {
        let filtered = articles.filter((a) => a.slug !== featuredArticle.slug)
        if (activeCategory !== "Todos") {
            filtered = filtered.filter((a) => a.category === activeCategory)
        }
        return filtered
    }, [articles, activeCategory, featuredArticle.slug])

    return (
        <div className="w-full">
            {/* Search & Filter Section */}
            <section className="blog-section py-10 px-4 border-b border-[#1f2a3a]/60">
                <div className="blog-container flex flex-col md:flex-row items-center justify-between gap-6 od-reveal">
                    <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                                    ? "bg-[#06b6d4] text-white shadow-lg shadow-cyan-500/20"
                                    : "bg-[#0f172a] text-[#94a3b8] hover:bg-[#111827] hover:text-[#e2e8f0]"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hero Featured Article (Only show if "Todos" is selected) */}
            <AnimatePresence mode="wait">
                {activeCategory === "Todos" && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                        className="blog-section py-12 px-4"
                    >
                        <div className="blog-container od-reveal">
                            <Link href={`/blog/${featuredArticle.slug}`} className="group block">
                                <div className="blog-surface relative overflow-hidden flex flex-col lg:flex-row min-h-[420px]">
                                    {/* Image Part */}
                                    <div className="relative lg:w-3/5 overflow-hidden order-1 lg:order-2 aspect-video lg:aspect-auto">
                                        <Image
                                            src={featuredArticle.coverImage}
                                            alt={featuredArticle.title}
                                            fill
                                            priority
                                            sizes="(min-width: 1024px) 60vw, 100vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b111a] via-[#0b111a]/30 to-transparent lg:bg-gradient-to-r lg:from-[#0b111a] lg:via-[#0b111a]/60 lg:to-transparent" />
                                    </div>

                                    {/* Content Part */}
                                    <div className="relative lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1 z-10">
                                        <div className="flex items-center gap-3 mb-5 flex-wrap">
                                            <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded-md uppercase tracking-wide">
                                                Post Destaque
                                            </span>
                                            <span className="text-cyan-300 font-medium text-sm">
                                                {featuredArticle.category}
                                            </span>
                                            <span className={`px-3 py-1 bg-[#0b111a] border text-xs font-bold rounded-lg uppercase tracking-wider ${getSeal(featuredArticle.category).className}`}>
                                                {getSeal(featuredArticle.category).label}
                                            </span>
                                        </div>

                                        <h2 className="text-3xl lg:text-4xl font-black od-title text-white mb-5 leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                                            {featuredArticle.title}
                                        </h2>

                                        <p className="od-subtitle text-base lg:text-lg mb-8 line-clamp-3 text-[#cbd5e1]">
                                            {featuredArticle.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#1f2a3a]/70">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-[#0f172a] flex items-center justify-center border border-[#1f2a3a]">
                                                    <User className="w-5 h-5 text-slate-400" />
                                                </div>
                                                <div>
                                                    <p className="text-white text-sm font-medium">{featuredArticle.author}</p>
                                                    <p className="text-slate-400 text-xs flex items-center gap-1">
                                                        <Clock className="w-3 h-3" /> {featuredArticle.readTime} min read
                                                    </p>
                                                    <p className="text-slate-500 text-[11px] mt-1">
                                                        {new Date(featuredArticle.publishedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-cyan-500 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* Grid Articles with Lead Magnet Injection */}
            <section className="blog-section py-12 px-4">
                <div className="blog-container od-reveal">
                    {activeCategory !== "Todos" && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold od-title text-white mb-2">
                                Explorando: <span className="text-cyan-400">{activeCategory}</span>
                            </h2>
                            <p className="od-subtitle">Encontramos {filteredArticles.length} artigos nesta categoria.</p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {filteredArticles.map((article, idx) => (
                            <React.Fragment key={article.slug}>
                                {/* Injete o Lead Magnet após o 2º card (idx === 2) no grid */}
                                {idx === 2 && activeCategory === "Todos" && (
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 rounded-3xl bg-[#0b111a]/80 border border-[#1f2a3a]/70 p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 my-6 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay"></div>
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

                                        <div className="relative z-10 max-w-xl">
                                            <div className="flex items-center gap-2 text-indigo-400 mb-4 font-semibold text-sm uppercase tracking-wider">
                                                <Sparkles className="w-4 h-4" />
                                                Guia Gratuito
                                            </div>
                                            <h3 className="text-3xl font-black text-white mb-4">
                                                Guia de Automação para Organizar o Atendimento
                                            </h3>
                                            <p className="text-slate-300 text-lg mb-0">
                                                Como estruturamos fluxos para organizar qualificação e encaminhamentos com clareza.
                                            </p>
                                        </div>

                                        <div className="relative z-10 w-full md:w-auto">
                                    <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                                        <input
                                            type="email"
                                            placeholder="Seu melhor e-mail corporativo"
                                            className="px-5 py-4 rounded-xl bg-[#0f172a] border border-[#1f2a3a] text-white focus:outline-none focus:border-cyan-500 flex-grow"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => window.open('https://wa.me/5531996966686?text=Quero%20receber%20o%20guia%20de%20automa%C3%A7%C3%A3o%20do%20blog', '_blank')}
                                            className="px-6 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-colors whitespace-nowrap shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2"
                                        >
                                            Receber Guia
                                            <Mail className="w-4 h-4" />
                                        </button>
                                    </form>
                                    <p className="text-xs text-slate-500 mt-4 text-center md:text-left">
                                        Sem spam. Cancele quando quiser.
                                    </p>
                                </div>
                            </div>
                        )}

                                {/* Normal Article Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <Link href={`/blog/${article.slug}`} className="blog-surface group h-full flex flex-col hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1">
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={article.coverImage}
                                                alt={article.title}
                                                fill
                                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-[#0f172a]/80 backdrop-blur-md rounded-md text-xs font-semibold text-slate-200 uppercase tracking-wider border border-[#1f2a3a]/70">
                                                    {article.category}
                                                </span>
                                                <span className={`px-3 py-1 bg-[#0b111a]/80 backdrop-blur-md rounded-md text-xs font-semibold uppercase tracking-wider border ${getSeal(article.category).className}`}>
                                                    {getSeal(article.category).label}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                                                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {article.readTime} min</span>
                                                <span>{new Date(article.publishedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}</span>
                                            </div>

                                            <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 mb-3 transition-colors line-clamp-2">
                                                {article.title}
                                            </h3>

                                            <p className="text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">
                                                {article.excerpt}
                                            </p>

                                            <div className="pt-4 mt-auto border-t border-[#1f2a3a]/70 flex items-center justify-between">
                                                <span className="text-sm font-medium text-slate-300">{article.author}</span>
                                                <span className="text-cyan-500 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    Ler artigo <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            </React.Fragment>
                        ))}
                    </div>

                    {filteredArticles.length === 0 && (
                        <div className="text-center py-20">
                            <h3 className="text-2xl font-bold text-slate-400 mb-2">Nenhum artigo encontrado</h3>
                            <p className="text-slate-500">Volte para ver mais artigos.</p>
                            <button
                                onClick={() => setActiveCategory("Todos")}
                                className="mt-6 px-6 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-colors"
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

