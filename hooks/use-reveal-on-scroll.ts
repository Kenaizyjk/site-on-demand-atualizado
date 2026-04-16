"use client"

import { useEffect } from "react"

/**
 * Activates the CSS scroll-reveal system declared in app/globals.css
 * by setting data-revealed="true" on .od-reveal-section, .od-reveal-scale,
 * and .od-stagger-children elements when they enter the viewport.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll(".od-reveal-section, .od-reveal-scale, .od-stagger-children")
        .forEach((el) => el.setAttribute("data-revealed", "true"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true")
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
    )

    const targets = document.querySelectorAll(
      ".od-reveal-section, .od-reveal-scale, .od-stagger-children",
    )
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
