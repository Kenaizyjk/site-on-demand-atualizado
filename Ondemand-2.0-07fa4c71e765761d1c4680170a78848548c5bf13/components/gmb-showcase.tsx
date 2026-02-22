"use client"

import { MapPin, Star, Phone, TrendingUp, CheckCircle2, Eye } from "lucide-react"

export default function GMBShowcase() {
  const metrics = [
    {
      label: "Visibilidade Local",
      value: "Em evolução",
      description: "Perfil mais encontrado",
      icon: Eye,
      color: "emerald",
    },
    {
      label: "Chamadas",
      value: "Mais contato",
      description: "Atendimento mais fluido",
      icon: Phone,
      color: "cyan",
    },
    {
      label: "Avaliações",
      value: "Melhor percepção",
      description: "Reputação mais consistente",
      icon: Star,
      color: "amber",
    },
    {
      label: "Agendamentos",
      value: "Fluxo estável",
      description: "Rotina organizada",
      icon: MapPin,
      color: "violet",
    },
  ]

  const deliverables = [
    "Criação e otimização completa do perfil GMB",
    "Descrição alinhada à busca local",
    "Organização de fotos e categorias",
    "Configuração de produtos/serviços",
    "Estratégia de gestão de avaliações",
    "Postagens recorrentes",
    "Relatório periódico de performance",
    "Resposta a avaliações (positivas e negativas)",
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30",
      cyan: "text-[#06b6d4] bg-[#06b6d4]/10 border-[#06b6d4]/30",
      amber: "text-amber-500 bg-amber-500/10 border-amber-500/30",
      violet: "text-violet-500 bg-violet-500/10 border-violet-500/30",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section className="od-section sm:py-20 lg:py-28 bg-[#09090b] relative overflow-hidden">
      <div className="od-container px-4 relative z-10">
        {/* Hero Header with 3D Google Icon */}
        <div className="text-center mb-12 sm:mb-16 od-reveal">
          {/* Large 3D Google Icon */}
          <div className="relative inline-block mb-8">
            {/* Glow behind icon */}
            <div className="absolute inset-0 w-40 h-40 sm:w-52 sm:h-52 mx-auto bg-gradient-to-br from-blue-500/30 via-red-500/20 to-yellow-500/30 rounded-full blur-3xl" />

            {/* Google "G" 3D SVG */}
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 mx-auto flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-28 h-28 sm:w-36 sm:h-36 drop-shadow-2xl" style={{ filter: 'drop-shadow(0 10px 30px rgba(66,133,244,0.4)) drop-shadow(0 4px 10px rgba(219,68,55,0.3))' }}>
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-5 py-2.5 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Google My Business
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black od-title mb-4 sm:mb-6 leading-tight">
            <span className="text-[#e2e8f0]">Visibilidade </span>
            <span className="text-emerald-500">Local </span>
            <span className="text-[#e2e8f0]">com Google</span>
          </h2>

          <p className="od-subtitle max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Organizamos seu perfil e sua reputação para melhorar a presença local e facilitar o contato de quem está por perto.
          </p>
        </div>

        {/* Indicadores de foco */}
        <div className="od-card-soft od-card-hover border border-emerald-500/30 rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 max-w-5xl mx-auto od-reveal od-reveal-delay-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#e2e8f0]">Focos de melhoria no GMB</h3>
              <p className="od-subtitle text-sm">O que organizamos na prática</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon
              const colorClasses = getColorClasses(metric.color)

              return (
                <div
                  key={idx}
                  className={`${colorClasses.split(' ')[1]} border ${colorClasses.split(' ')[2]} rounded-xl p-4 sm:p-5 text-center`}
                >
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colorClasses.split(' ')[0]} mx-auto mb-2`} />
                  <div className={`text-2xl sm:text-3xl font-black od-title ${colorClasses.split(' ')[0]} mb-1`}>
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-[#e2e8f0] mb-0.5">{metric.label}</div>
                  <div className="text-[10px] text-[#94a3b8]">{metric.description}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* O Que Est Includo - Simplified */}
        <div className="max-w-4xl mx-auto od-reveal od-reveal-delay-2">
          <h3 className="text-xl sm:text-2xl font-bold text-[#e2e8f0] mb-6 text-center">
            O que está incluído
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#1e293b]/50 rounded-lg px-4 py-3 border border-[#334155]/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="od-subtitle text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <p className="text-[#94a3b8] mb-4 text-sm">
              Otimização GMB incluída conforme necessidade e contexto do negócio
            </p>
            <a
              href="https://wa.me/553196966686?text=Ol%C3%A1!%20Gostaria%20de%20entender%20como%20funciona%20a%20otimiza%C3%A7%C3%A3o%20de%20GMB."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/50 active:scale-95"
            >
              <span>Agendar Conversa</span>
              <TrendingUp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
