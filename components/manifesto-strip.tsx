export default function ManifestoStrip() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Linha topo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-zinc-800" />

      {/* Fundo diferenciado */}
      <div className="absolute inset-0 bg-zinc-900/40" />
      <div className="absolute inset-0 border-y border-zinc-800/50" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Citação principal */}
        <blockquote
          className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-white mb-8"
        >
          <span className="text-white">
            Marketing digital que faz sentido para o seu negócio.
          </span>{" "}
          <span className="text-zinc-400">
            Não para o nosso portfólio.
          </span>
        </blockquote>

        {/* Linha decorativa central */}
        <div className="w-16 h-px bg-zinc-700 mx-auto mb-8" />

        {/* Parágrafo de apoio */}
        <p className="text-[#b4b4bc] text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
          A On Demand existe porque dono de clínica não deveria precisar entender de tráfego pago para crescer.
          A gente entende por você.
        </p>
      </div>

      {/* Linha base */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-800" />
    </section>
  )
}
