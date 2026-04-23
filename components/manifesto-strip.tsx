export default function ManifestoStrip() {
  return (
    <section id="sobre" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Ambient blobs */}
      <div className="od-blob od-blob--purple absolute top-0 left-1/4 w-[400px] h-[300px]" aria-hidden="true" />
      <div className="od-blob od-blob--cyan absolute bottom-0 right-1/4 w-[300px] h-[250px]" aria-hidden="true" />

      {/* Glass container */}
      <div className="absolute inset-0 od-glass" style={{ borderRadius: 0 }} />

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
        <div className="w-16 h-px mx-auto mb-8" style={{ background: "rgba(255,255,255,0.15)" }} />

        {/* Parágrafo de apoio */}
        <p className="text-[#b4b4bc] text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
          A On Demand existe porque dono de clínica não deveria precisar entender de tráfego pago para crescer.
          A gente entende por você.
        </p>
      </div>
    </section>
  )
}
