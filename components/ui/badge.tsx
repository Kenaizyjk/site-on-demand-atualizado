import * as React from "react"

import { cn } from "@/lib/utils"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(255,255,255,0.15)] focus:ring-offset-2",
        variant === "default" &&
          "border-white/10 bg-white/[0.04] text-white/60",
        variant === "secondary" &&
          "border-transparent bg-[#1e293b] text-[#e2e8f0]",
        variant === "destructive" &&
          "border-transparent bg-red-500 text-white",
        variant === "outline" && "text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
