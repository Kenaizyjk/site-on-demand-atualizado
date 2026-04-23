"use client"

import { useEffect, useState } from "react"

type Phase = "playing" | "exiting" | "done"

export default function CinematicIntro() {
  const [phase, setPhase] = useState<Phase>("playing")

  useEffect(() => {
    // Skip intro for users who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done")
      return
    }

    const exitTimer = setTimeout(() => setPhase("exiting"), 5500)
    return () => clearTimeout(exitTimer)
  }, [])

  useEffect(() => {
    if (phase !== "exiting") return

    const doneTimer = setTimeout(() => setPhase("done"), 800)
    return () => clearTimeout(doneTimer)
  }, [phase])

  if (phase === "done") return null

  return (
    <div
      className="od-intro"
      data-exiting={phase === "exiting" ? "true" : undefined}
      aria-hidden="true"
    >
      {/* Letterbox bars */}
      <div className="od-intro-bar od-intro-bar--top" />
      <div className="od-intro-bar od-intro-bar--bottom" />

      {/* Film grain */}
      <div className="od-intro-grain" />

      {/* Vignette */}
      <div className="od-intro-vignette" />

      {/* Text */}
      <div className="od-intro-text font-display text-3xl sm:text-5xl md:text-6xl">
        ON DEMAND
        <div className="od-intro-line" />
      </div>
    </div>
  )
}
