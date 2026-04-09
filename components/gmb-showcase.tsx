"use client"

import { CheckCircle2, MessageCircle, Star, MapPin, Phone, Globe } from "lucide-react"
import GoogleLogo3DIso from "@/components/google-logo-3d-iso"
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
    <section className="od-section sm:py-24 lg:py-32 bg-[#09090b] relative overflow-hidden">

      {/* Background radial — Google blue haze */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(66,133,244,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="od-container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left column: text ── */}
          <div className="order-2 lg:order-1 od-reveal">
            <div className="inline-flex items-center gap-2 bg-[#4285F4]/10 border border-[#4285F4]/30 px-4 py-2 rounded-full mb-6">
              <span className="block w-2 h-2 rounded-full bg-[#4285F4]" />
              <span className="text-[#4285F4] font-semibold text-xs uppercase tracking-widest">
                Google Business Profile
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black od-title leading-tight mb-4">
              <span className="text-[#e2e8f0]">Sua empresa no topo</span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #4285F4 0%, #34A853 40%, #FBBC05 70%, #EA4335 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                das buscas locais
              </span>
            </h2>

            <p className="text-[#b4b4bc] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Otimizamos seu perfil para aparecer quando alguém busca o que você
              oferece por perto. Com autoridade e completude que o algoritmo do
              Google valoriza.
            </p>

            <ul className="space-y-3 mb-10">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#34A853] flex-shrink-0 mt-0.5" />
                  <span className="text-[#b4b4bc] text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Quero%20melhorar%20meu%20Google%20Business%20Profile`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-sm sm:text-base transition-all duration-300 active:scale-95 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                boxShadow: "0 8px 32px rgba(37,211,102,0.35)",
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Falar sobre meu GBP
            </a>
          </div>

          {/* ── Right column: 3D logo + GBP card mockup ── */}
          <div className="order-1 lg:order-2 od-reveal od-reveal-delay-1 flex flex-col items-center gap-8">

            {/* Isometric 3D Google G — panel vote: unanimous ISO */}
            <div className="flex items-center justify-center">
              <GoogleLogo3DIso size={220} />
            </div>

            {/* Google Business Profile card mockup — no fake metrics */}
            <div
              className="w-full max-w-sm rounded-2xl border border-[#27272a] bg-[#18181b] overflow-hidden shadow-2xl"
              aria-label="Exemplo de perfil Google Business Profile"
            >
              {/* Card header — cover photo placeholder */}
              <div
                className="h-24 w-full relative"
                style={{
                  background:
                    "linear-gradient(135deg, #1e3a5f 0%, #1a1a2e 50%, #16213e 100%)",
                }}
                aria-hidden
              >
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.03) 8px, rgba(255,255,255,0.03) 16px)",
                  }}
                />
                {/* Logo placeholder */}
                <div className="absolute -bottom-6 left-4 w-12 h-12 rounded-xl bg-[#09090b] border-2 border-[#27272a] flex items-center justify-center shadow-lg">
                  <span className="text-lg font-black text-[#4285F4]">B</span>
                </div>
              </div>

              {/* Card body */}
              <div className="pt-8 px-4 pb-4">
                {/* Business name + category */}
                <div className="mb-3">
                  <p className="font-bold text-white text-base leading-tight">
                    Seu Negócio Local
                  </p>
                  <p className="text-[#b4b4bc] text-xs mt-0.5">
                    Categoria · Cidade, Estado
                  </p>
                </div>

                {/* Star row — no fake number, just the stars as UI example */}
                <div className="flex items-center gap-1.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]"
                    />
                  ))}
                  <span className="text-[#b4b4bc] text-xs ml-1">
                    Perfil otimizado ✓
                  </span>
                </div>

                {/* Contact info rows */}
                <div className="space-y-2 border-t border-[#27272a] pt-3">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#4285F4] flex-shrink-0" />
                    <span className="text-[#b4b4bc] text-xs">
                      Endereço verificado e completo
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-[#34A853] flex-shrink-0" />
                    <span className="text-[#b4b4bc] text-xs">
                      Telefone e horários configurados
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-3.5 h-3.5 text-[#EA4335] flex-shrink-0" />
                    <span className="text-[#b4b4bc] text-xs">
                      Site vinculado com UTM tracking
                    </span>
                  </div>
                </div>

                {/* Status badge */}
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-[#34A853]/10 border border-[#34A853]/20 px-3 py-2">
                  <span className="block w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
                  <span className="text-[#34A853] text-xs font-semibold">
                    Perfil ativo e sendo monitorado
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
