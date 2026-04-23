"use client"

import { useRef } from "react"
import Image from "next/image"

/* ── Google G mark — accurate 4-color version ─────────────────────────────── */
function GoogleGMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M39.2 20.45c0-.9-.08-1.77-.22-2.6H20v4.92h10.8c-.47 2.02-1.87 3.74-3.98 4.88v4.06h6.45C36.46 28.84 39.2 25.04 39.2 20.45z" fill="#4285F4"/>
      <path d="M20 40c5.42 0 9.97-1.8 13.28-4.88l-6.45-4.06c-1.8 1.2-4.1 1.92-6.83 1.92-5.26 0-9.71-3.55-11.3-8.32H2.06v4.19C5.35 35.72 12.16 40 20 40z" fill="#34A853"/>
      <path d="M8.7 24.66A12.06 12.06 0 0 1 8.08 20c0-1.62.28-3.2.62-4.66V11.15H2.06A19.92 19.92 0 0 0 0 20c0 3.22.78 6.26 2.06 9.04l6.64-4.38z" fill="#FBBC05"/>
      <path d="M20 7.96c2.96 0 5.62 1.02 7.72 3.02l5.79-5.79C29.97 1.9 25.42 0 20 0 12.16 0 5.35 4.28 2.06 10.96l6.64 4.38C10.29 10.57 14.74 7.96 20 7.96z" fill="#EA4335"/>
      <path d="M39.2 20.45H20v2.32h10.8l8.4-.1v-2.22z" fill="#4285F4" opacity="0"/>
    </svg>
  )
}

/* ── Tool logos ─────────────────────────────────────────────────────────────── */
function LogoN8n() {
  return (
    <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#EA4B71] flex items-center justify-center flex-shrink-0">
      <Image src="/N8n-logo-new.svg" alt="n8n" width={28} height={28} className="object-contain" />
    </div>
  )
}

function LogoGoogleAds() {
  return (
    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        {/* Megaphone / campaign icon */}
        <path d="M22 6L12 10.5v7L22 22V6z" fill="#4285F4"/>
        <rect x="7" y="10.5" width="5" height="7" rx="1" fill="#4285F4"/>
        <path d="M12 17.5l1.5 5h2.5l-1.5-5H12z" fill="#FBBC05"/>
        <circle cx="22" cy="14" r="2.5" fill="#34A853"/>
      </svg>
    </div>
  )
}

function LogoMetaAds() {
  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#0866FF" }}>
      <svg width="24" height="14" viewBox="0 0 240 140" fill="none" aria-hidden="true">
        <path d="M0 90 C0 60 15 30 40 30 C62 30 78 50 90 70 C102 50 118 30 140 30 C165 30 180 60 180 90 C180 120 168 140 152 140 C136 140 124 120 112 100 C100 120 88 140 72 140 C56 140 44 120 32 100 C20 80 0 120 0 90Z" fill="white"/>
      </svg>
    </div>
  )
}

function LogoGoogleAnalytics() {
  return (
    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <rect x="2" y="17" width="5" height="8" rx="1.5" fill="#E37400"/>
        <rect x="10" y="11" width="5" height="14" rx="1.5" fill="#E37400" opacity="0.8"/>
        <rect x="18" y="4" width="5" height="21" rx="1.5" fill="#E37400"/>
        <circle cx="4.5" cy="9" r="3" fill="#E37400" opacity="0.6"/>
      </svg>
    </div>
  )
}

function LogoGMB() {
  return (
    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
      <svg width="24" height="26" viewBox="0 0 24 26" fill="none" aria-hidden="true">
        <path d="M12 0C7.03 0 3 4.03 3 9c0 6.75 9 17 9 17s9-10.25 9-17c0-4.97-4.03-9-9-9z" fill="#34A853"/>
        <circle cx="12" cy="9" r="3.5" fill="white"/>
      </svg>
    </div>
  )
}

function LogoWhatsApp() {
  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#25D366" }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </div>
  )
}

function LogoSearchConsole() {
  return (
    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
      <div className="flex flex-col gap-0.5">
        <GoogleGMark size={20} />
      </div>
    </div>
  )
}

function LogoClaude() {
  return (
    <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
      <Image src="/Claude_AI_logo.svg" alt="Claude AI" width={24} height={24} className="object-contain" />
    </div>
  )
}

function LogoOpenAI() {
  return (
    <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
      <Image src="/openai-logo.svg" alt="OpenAI" width={22} height={22} className="object-contain invert" />
    </div>
  )
}

function LogoBrevo() {
  return (
    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#0B99FF" }}>
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M16 13h9c3.3 0 6 2.2 6 5a4.5 4.5 0 0 1-2 3.8A5 5 0 0 1 31 27c0 3.3-2.7 8-7 8H16V13z" fill="none" stroke="white" strokeWidth="3" strokeLinejoin="round"/>
        <line x1="16" y1="24" x2="27" y2="24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

function LogoGTM() {
  return (
    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 6L38 20v12L24 44 10 32V20L24 6z" stroke="#4285F4" strokeWidth="2.5" fill="none"/>
        <path d="M24 6L38 20v12L24 44 10 32V20L24 6z" fill="#4285F4" opacity="0.08"/>
        <path d="M18 24h12M28 19.5l4.5 4.5-4.5 4.5" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  )
}

/* ── Tool data ─────────────────────────────────────────────────────────────── */
interface Tool {
  name: string
  description: string
  logo: React.ReactNode
  accent: string
}

const ROW_1: Tool[] = [
  { name: "n8n", description: "Automação de fluxos sem código", logo: <LogoN8n />, accent: "#EA4B71" },
  { name: "Google Ads", description: "Campanhas de tráfego pago", logo: <LogoGoogleAds />, accent: "#4285F4" },
  { name: "Meta Ads", description: "Anúncios em Facebook e Instagram", logo: <LogoMetaAds />, accent: "#0866FF" },
  { name: "Google Analytics", description: "Rastreamento e atribuição", logo: <LogoGoogleAnalytics />, accent: "#E37400" },
  { name: "Google Business", description: "SEO local e Maps", logo: <LogoGMB />, accent: "#34A853" },
  { name: "WhatsApp API", description: "Atendimento e follow-up", logo: <LogoWhatsApp />, accent: "#25D366" },
]

const ROW_2: Tool[] = [
  { name: "Search Console", description: "Performance orgânica", logo: <LogoSearchConsole />, accent: "#4285F4" },
  { name: "Claude AI", description: "IA de linguagem e conteúdo", logo: <LogoClaude />, accent: "#D97706" },
  { name: "ChatGPT", description: "Geração e análise com IA", logo: <LogoOpenAI />, accent: "#10a37f" },
  { name: "Brevo", description: "E-mail marketing e CRM", logo: <LogoBrevo />, accent: "#0B99FF" },
  { name: "Google Tag Manager", description: "Rastreamento de eventos", logo: <LogoGTM />, accent: "#4285F4" },
  { name: "n8n", description: "Automação de fluxos sem código", logo: <LogoN8n />, accent: "#EA4B71" },
]

/* ── Tool card ─────────────────────────────────────────────────────────────── */
function ToolCard({ tool }: { tool: Tool }) {
  const cardRef = useRef<HTMLDivElement>(null)

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = ((e.clientX - left) / width - 0.5) * 10
    const y = ((e.clientY - top) / height - 0.5) * -10
    el.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) translateY(-4px)`
    el.style.boxShadow = `0 16px 40px -8px ${tool.accent}55`
    el.style.borderColor = `${tool.accent}55`
  }

  function onLeave() {
    const el = cardRef.current
    if (!el) return
    el.style.transform = ""
    el.style.boxShadow = ""
    el.style.borderColor = ""
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      role="listitem"
      className="flex-shrink-0 flex items-center gap-3.5 px-4 py-3.5 rounded-2xl select-none"
      style={{
        minWidth: "200px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(8px)",
        transition: "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease",
        transformStyle: "preserve-3d",
        cursor: "default",
      }}
    >
      {tool.logo}
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-semibold text-zinc-100 leading-tight whitespace-nowrap">
          {tool.name}
        </span>
        <span className="text-xs text-zinc-500 leading-tight whitespace-nowrap mt-0.5">
          {tool.description}
        </span>
      </div>
    </div>
  )
}

/* ── Marquee row ───────────────────────────────────────────────────────────── */
function MarqueeRow({
  tools,
  direction = "left",
  duration = 35,
}: {
  tools: Tool[]
  direction?: "left" | "right"
  duration?: number
}) {
  const doubled = [...tools, ...tools, ...tools]

  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div
        role="list"
        className="flex gap-3"
        style={{
          width: "max-content",
          animationName: direction === "left" ? "ts-left" : "ts-right",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {doubled.map((tool, i) => (
          <ToolCard key={`${tool.name}-${i}`} tool={tool} />
        ))}
      </div>
    </div>
  )
}

/* ── Section ───────────────────────────────────────────────────────────────── */
export default function TechStack() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "transparent",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Ambient blobs */}
      <div className="od-blob od-blob--purple absolute top-1/4 left-1/4 w-[500px] h-[300px]" aria-hidden="true" />
      <div className="od-blob od-blob--cyan absolute bottom-1/4 right-1/4 w-[400px] h-[250px]" aria-hidden="true" />

      {/* Header */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4">
          Stack de ferramentas
        </p>
        <h2 className="text-3xl sm:text-4xl font-extralight uppercase tracking-[0.12em] text-white">
          Tecnologia que{" "}
          <span
            className="text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #ffffff, rgba(255,255,255,0.55))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            trabalha por você
          </span>
        </h2>
        <p className="mt-3 text-sm text-zinc-500 max-w-md mx-auto leading-relaxed">
          Cada ferramenta escolhida por resultados reais. Nada por modismo.
        </p>
      </div>

      {/* Marquees */}
      <div className="flex flex-col gap-3 relative">
        <MarqueeRow tools={ROW_1} direction="left" duration={36} />
        <MarqueeRow tools={ROW_2} direction="right" duration={44} />

        {/* Edge fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40"
          style={{ background: "linear-gradient(to right, rgba(9,9,11,0.9), transparent)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40"
          style={{ background: "linear-gradient(to left, rgba(9,9,11,0.9), transparent)" }}
        />
      </div>

      <style>{`
        @keyframes ts-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes ts-right {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animationName"] { animation: none !important; }
        }
      `}</style>
    </section>
  )
}
