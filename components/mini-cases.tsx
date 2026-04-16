"use client"

import { cases } from "@/lib/cases-data"

export default function MiniCases() {
  return (
    <section className="od-reveal-section bg-[#09090b] py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <p
            className="font-bold uppercase text-zinc-500 mb-4"
            style={{ fontSize: "var(--text-small)", letterSpacing: "0.2em" }}
          >
            Resultados
          </p>
          <h2
            className="font-black tracking-tight text-white leading-[1.05]"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Resultados reais de clientes reais.
          </h2>
        </div>

        {/* Cards */}
        <div className="od-stagger-children grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.slug}
              className="flex flex-col bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 sm:p-8"
            >
              {/* Segment label */}
              <p
                className="font-semibold uppercase text-zinc-500 mb-6"
                style={{ fontSize: "var(--text-small)", letterSpacing: "0.15em" }}
              >
                {c.company}
              </p>

              {/* Big metric */}
              <p
                className="font-black leading-none mb-2"
                style={{ fontSize: "var(--text-display)", color: "#06b6d4" }}
              >
                {c.metric}
              </p>

              {/* Metric label */}
              <p
                className="font-semibold uppercase text-zinc-500 mb-6"
                style={{ fontSize: "var(--text-small)", letterSpacing: "0.12em" }}
              >
                {c.label}
              </p>

              {/* One-line story */}
              <p
                className="text-[#b4b4bc] leading-relaxed"
                style={{ fontSize: "var(--text-body)" }}
              >
                {c.story}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
