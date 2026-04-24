"use client"

import {
  CheckCircle2,
  MessageCircle,
  Star,
  MapPin,
  Phone,
  Globe,
  Navigation,
  Bookmark,
  Share2,
  Clock,
  ChevronRight,
  X,
  MoreVertical,
  UtensilsCrossed,
  Wifi,
  Music,
} from "lucide-react"
import Image from "next/image"
import { WHATSAPP_NUMBER } from "@/lib/constants"

// ─── Visual identity ──────────────────────────────────────────────────────────
// Muted text: #b4b4bc  (WCAG AA — NOT #a1a1aa)

const deliverables = [
  "Perfil GBP verificado e 100% completo",
  "Descrição otimizada para busca local",
  "Estratégia estruturada de avaliações",
  "Postagens e fotos organizadas",
  "Relatório mensal de performance",
]

export default function GMBShowcase() {
  return (
    <section id="casos" className="od-section sm:py-24 lg:py-32 relative overflow-hidden">

      {/* Background radial — muted white haze */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)",
        }}
      />

      <div className="od-container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left column: text ── */}
          <div className="order-2 lg:order-1 od-reveal">
            <div className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.15] px-4 py-2 rounded-full mb-6">
              <span className="block w-2 h-2 rounded-full bg-white/40" />
              <span className="text-white/60 font-semibold text-xs uppercase tracking-widest">
                Google Business Profile
              </span>
            </div>

            {/* Decorative line */}
            <div className="w-16 h-px mb-6" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.25) 0%, transparent 100%)" }} aria-hidden="true" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight uppercase tracking-[0.12em] od-title leading-tight mb-4">
              <span className="text-[#e2e8f0]">Sua empresa no topo</span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.55) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                das buscas locais
              </span>
            </h2>

            <p className="text-white/[0.45] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Otimizamos seu perfil para aparecer quando alguém busca o que você
              oferece por perto. Com autoridade e completude que o algoritmo do
              Google valoriza.
            </p>

            <ul className="space-y-3 mb-10">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/40 flex-shrink-0 mt-0.5" />
                  <span className="text-white/[0.45] text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Quero%20melhorar%20meu%20Google%20Business%20Profile`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white/70 text-sm sm:text-base transition-all duration-300 active:scale-95 hover:-translate-y-0.5 border border-white/[0.15] hover:text-white hover:border-white/[0.25]"
            >
              <MessageCircle className="w-5 h-5" />
              Falar sobre meu GBP
            </a>
          </div>

          {/* ── Right column: GBP card mockup ── */}
          <div className="order-1 lg:order-2 od-reveal od-reveal-delay-1 flex flex-col items-center">

            {/* Google Maps business listing card mockup */}
            <div
              className="w-full max-w-sm rounded-2xl bg-[#202124] border border-white/[0.08] overflow-hidden shadow-2xl"
              style={{
                boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 80px rgba(255,255,255,0.02)",
              }}
              aria-label="Exemplo de perfil Google Business Profile otimizado"
            >
              {/* ── Header: name, rating, category ── */}
              <div className="px-4 pt-4 pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-lg leading-tight">
                      Café & Bistrô Aurora
                    </h3>
                    <div className="flex items-center gap-1 mt-1 flex-wrap">
                      <span className="text-[#FBBC05] text-sm font-semibold">4,9</span>
                      <Star className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                      <span className="text-[#b4b4bc] text-xs">(4,2 mil)</span>
                      <span className="text-[#b4b4bc] text-xs">· Cafeteria</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full">
                      <MoreVertical className="w-4 h-4 text-[#9aa0a6]" />
                    </span>
                    <span className="w-8 h-8 flex items-center justify-center rounded-full">
                      <X className="w-4 h-4 text-[#9aa0a6]" />
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Tab bar ── */}
              <div className="flex items-center border-b border-[#3c4043] px-4">
                {[
                  { label: "Geral", active: true },
                  { label: "Cardápio", active: false },
                  { label: "Avaliar", active: false },
                  { label: "Fotos", active: false },
                ].map((tab) => (
                  <span
                    key={tab.label}
                    className={`px-3 py-2.5 text-xs font-semibold relative ${
                      tab.active ? "text-white/60" : "text-[#9aa0a6]"
                    }`}
                  >
                    {tab.label}
                    {tab.active && (
                      <span className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-white/60" aria-hidden />
                    )}
                  </span>
                ))}
              </div>

              {/* ── Photo carousel with real images ── */}
              <div className="flex gap-1 px-3 py-2.5">
                <div className="relative flex-[2] h-32 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop&q=80"
                    alt="Interior do café com iluminação aconchegante"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <div className="relative flex-1 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=150&fit=crop&q=80"
                      alt="Café espresso artesanal"
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                  </div>
                  <div className="relative flex-1 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=200&h=150&fit=crop&q=80"
                      alt="Ambiente externo do café"
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                    {/* Photo count overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white text-[10px] font-semibold">+48</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Action buttons ── */}
              <div className="px-3 pb-2.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {[
                    { icon: Globe, label: "Site" },
                    { icon: Navigation, label: "Rotas" },
                    { icon: Bookmark, label: "Salvar" },
                    { icon: Share2, label: "Compartilhar" },
                  ].map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#5f6368] text-white/40 text-[10px] font-medium whitespace-nowrap"
                    >
                      <Icon className="w-3 h-3" />
                      {label}
                    </span>
                  ))}
                  <span className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#5f6368] text-white/40 text-[10px] font-medium">
                    <Phone className="w-3 h-3" />
                    Ligar
                  </span>
                </div>
              </div>

              {/* ── Info rows ── */}
              <div className="px-3 pb-3">
                <div className="border-t border-[#3c4043]" />

                {/* Amenities */}
                <div className="flex items-center gap-2.5 py-2.5 border-b border-[#3c4043]/60">
                  <UtensilsCrossed className="w-3.5 h-3.5 text-[#9aa0a6] flex-shrink-0" />
                  <span className="text-[#bdc1c6] text-[11px]">
                    Mesas externas · Wi-Fi grátis · Música ao vivo
                  </span>
                </div>

                {/* Hours */}
                <div className="flex items-center justify-between py-2.5 border-b border-[#3c4043]/60">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-3.5 h-3.5 text-[#9aa0a6] flex-shrink-0" />
                    <div className="flex items-center gap-1">
                      <span className="text-white/50 text-[11px] font-semibold">Aberto</span>
                      <span className="text-[#bdc1c6] text-[11px]">· Fecha às 23:00</span>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#9aa0a6]" />
                </div>

                {/* Special notice */}
                <div className="flex items-start gap-2.5 py-2.5 border-b border-[#3c4043]/60 bg-white/[0.03] -mx-3 px-3">
                  <Clock className="w-3.5 h-3.5 text-white/40 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/50 text-[11px] font-semibold block">Horário especial hoje</span>
                    <span className="text-[#bdc1c6] text-[10px]">Happy hour das 17h às 20h com desconto</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#9aa0a6] flex-shrink-0 mt-0.5 ml-auto" />
                </div>

                {/* Address with mini map */}
                <div className="flex items-center justify-between py-2.5 border-b border-[#3c4043]/60">
                  <div className="flex items-center gap-2.5 flex-1 min-w-0">
                    <MapPin className="w-3.5 h-3.5 text-[#9aa0a6] flex-shrink-0" />
                    <span className="text-[#bdc1c6] text-[11px] leading-relaxed">
                      R. dos Guajajaras, 842 - Centro, Belo Horizonte - MG, 30180-100
                    </span>
                  </div>
                  <div
                    className="w-12 h-9 rounded ml-2 flex-shrink-0 relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #1a3a2a 0%, #0d1b2a 100%)" }}
                    aria-hidden
                  >
                    <div className="absolute inset-0 opacity-30" style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                      backgroundSize: "8px 8px",
                    }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="w-3 h-3 text-[#EA4335]" />
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-center gap-2.5 py-2.5 border-b border-[#3c4043]/60">
                  <Globe className="w-3.5 h-3.5 text-[#9aa0a6] flex-shrink-0" />
                  <span className="text-white/40 text-[11px]">cafebistraurora.com.br</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2.5 py-2.5 border-b border-[#3c4043]/60">
                  <Phone className="w-3.5 h-3.5 text-[#9aa0a6] flex-shrink-0" />
                  <span className="text-[#bdc1c6] text-[11px]">(31) 3333-4567</span>
                </div>

                {/* Rating summary */}
                <div className="flex items-center justify-between py-2.5">
                  <div className="flex items-center gap-2.5">
                    <Star className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05] flex-shrink-0" />
                    <div className="flex items-center gap-1.5">
                      <span className="text-white text-[11px] font-semibold">4,9</span>
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-2.5 h-2.5 fill-[#FBBC05] text-[#FBBC05]" />
                        ))}
                      </div>
                      <span className="text-[#bdc1c6] text-[10px]">4.233 Avaliações</span>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#9aa0a6]" />
                </div>
              </div>

              {/* ── Status footer ── */}
              <div className="px-3 pb-3">
                <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/[0.08] px-3 py-2">
                  <span className="block w-2 h-2 rounded-full bg-white/30 animate-pulse" />
                  <span className="text-white/30 text-[10px] font-semibold">
                    Perfil otimizado pela On Demand
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
