import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-[#334155] bg-[#1e293b] px-3 py-2 text-sm text-[#e2e8f0] placeholder:text-[#64748b] focus:border-[rgba(255,255,255,0.25)] focus:outline-none focus:ring-1 focus:ring-[rgba(255,255,255,0.25)] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = "Input"

export { Input }
