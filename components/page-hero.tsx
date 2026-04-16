import { ReactNode } from "react"

type PageHeroProps = {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="od-reveal-section border-b border-[color:var(--border)]">
      <div className="od-container px-4 py-20 md:py-28">
        {eyebrow && (
          <p
            className="uppercase tracking-[0.2em] text-cyan-400/80 mb-4"
            style={{ fontSize: "var(--text-small)" }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className="font-display text-balance"
          style={{ fontSize: "var(--text-h1)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 max-w-2xl text-zinc-400"
            style={{ fontSize: "var(--text-body)", lineHeight: 1.7 }}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
