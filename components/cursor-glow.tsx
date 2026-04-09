"use client"

import { useEffect, useRef, useState } from "react"

/**
 * CursorGlow — radial gradient that follows the mouse.
 * - Desktop only (hidden below 768px)
 * - Respects prefers-reduced-motion
 * - pointer-events: none — never blocks clicks
 * - Lazy-mounts only after first mouse move so it has zero cost on touch devices
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const rafRef = useRef<number | null>(null)
  const posRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    // Skip on mobile / touch-primary devices
    if (typeof window === "undefined") return
    if (window.innerWidth < 768) return

    // Respect prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) return

    const el = glowRef.current
    if (!el) return

    function onMove(e: MouseEvent) {
      posRef.current = { x: e.clientX, y: e.clientY }

      if (!visible) setVisible(true)

      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        if (!el) return
        const { x, y } = posRef.current
        el.style.transform = `translate(${x - 150}px, ${y - 150}px)`
      })
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", onMove)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
    // visible intentionally omitted — we only need the setter
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="od-cursor-glow"
      style={{
        opacity: visible ? 1 : 0,
        // Start off-screen so first frame doesn't flash at (0,0)
        transform: "translate(-1000px, -1000px)",
      }}
    />
  )
}
