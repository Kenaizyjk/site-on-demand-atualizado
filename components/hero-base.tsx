import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HeroAction {
  label: string
  href: string
  variant: "primary" | "secondary"
  external?: boolean
}

interface HeroBaseProps {
  headline: ReactNode
  subheadline: string
  actions?: HeroAction[]
  badge?: string
  children?: ReactNode
  className?: string
}

function HeroActionLink({ action }: { action: HeroAction }): ReactNode {
  const isPrimary = action.variant === "primary"

  const baseStyles = cn(
    "px-8 py-4 sm:px-10 sm:py-5 font-bold text-base sm:text-lg rounded-lg",
    "flex items-center justify-center gap-3 transition-all duration-300",
    "transform active:scale-95",
  )

  const variantStyles = isPrimary
    ? "bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 shadow-lg shadow-[var(--glow-cyan)]"
    : "bg-[var(--background)] border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--primary)]/50 hover:bg-[var(--card)]"

  const externalProps = action.external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {}

  return (
    <a
      href={action.href}
      className={cn(baseStyles, variantStyles)}
      {...externalProps}
    >
      {action.label}
    </a>
  )
}

export default function HeroBase({
  headline,
  subheadline,
  actions = [],
  badge,
  children,
  className,
}: HeroBaseProps): ReactNode {
  return (
    <section
      className={cn(
        "relative min-h-[100vh] flex items-center justify-center",
        "overflow-hidden bg-[var(--background)]",
        className,
      )}
    >
      <div className="relative z-10 od-container px-4 py-8 sm:py-12 w-full text-center">
        <div className="max-w-5xl mx-auto">
          {badge && (
            <div className="hidden sm:inline-flex items-center gap-3 bg-[var(--card)]/80 border border-[var(--border)] px-6 py-2.5 rounded-full mb-10 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              <span className="text-[var(--text-muted)] font-medium text-sm tracking-wide">
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black od-title mb-6 sm:mb-8 leading-[0.9] tracking-tighter px-2 uppercase">
            {headline}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl od-subtitle mb-10 sm:mb-14 font-medium leading-relaxed max-w-3xl mx-auto px-4">
            {subheadline}
          </p>

          {actions.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 px-4">
              {actions.map(function (action) {
                return (
                  <HeroActionLink key={action.label} action={action} />
                )
              })}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  )
}
