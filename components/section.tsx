import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionVariant = "default" | "muted" | "dark"

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  variant?: SectionVariant
  container?: boolean
  size?: "sm" | "md" | "lg"
}

const VARIANT_STYLES: Record<SectionVariant, string> = {
  default: "bg-[var(--background)]",
  muted: "bg-[var(--bg-surface-2)]",
  dark: "bg-[var(--card)]",
}

const SIZE_STYLES: Record<NonNullable<SectionProps["size"]>, string> = {
  sm: "od-section",
  md: "od-section sm:py-16 lg:py-20",
  lg: "od-section sm:py-20 lg:py-32",
}

export default function Section({
  id,
  children,
  className,
  variant = "default",
  container = true,
  size = "md",
}: SectionProps): ReactNode {
  return (
    <section
      id={id}
      className={cn(
        SIZE_STYLES[size],
        VARIANT_STYLES[variant],
        "relative overflow-hidden",
        className,
      )}
    >
      {container ? (
        <div className="od-container px-4">{children}</div>
      ) : (
        children
      )}
    </section>
  )
}
