"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import {
  GA_EVENTS,
  trackEvent,
  trackScrollDepth,
  trackSectionView,
  trackWhatsAppClick,
  trackTimeOnPage,
  trackSessionStart,
} from "@/lib/ga-events"

/**
 * Advanced Analytics Tracker — On Demand Digital
 *
 * Tracks automatically (no manual instrumentation needed per component):
 *  - Session start (once per mount)
 *  - Scroll depth: 25 / 50 / 75 / 90 / 100 %
 *  - Time on page: 30s / 60s / 120s / 300s milestones
 *  - Time on page: exact seconds when user hides the tab (visibilitychange)
 *  - WhatsApp link clicks: any <a href> containing wa.me
 *  - Section views: IntersectionObserver on #servicos, #como-trabalhamos, #blog
 *  - FAQ interactions: clicks on [data-faq] or <details> elements
 */
export default function AnalyticsTracker() {
  const pathname = usePathname()

  // ── Scroll state ────────────────────────────────────────────────────────
  const scrollTracked = useRef({
    "25": false,
    "50": false,
    "75": false,
    "90": false,
    "100": false,
  })

  // ── Time state ──────────────────────────────────────────────────────────
  const timeTracked = useRef({
    "30": false,
    "60": false,
    "120": false,
    "300": false,
  })

  const startTime = useRef<number>(0)
  const sessionFired = useRef(false)

  // ── Session start (fires once per browser session) ──────────────────────
  useEffect(() => {
    if (!sessionFired.current) {
      sessionFired.current = true
      trackSessionStart()
    }
  }, [])

  // ── Per-page tracking (resets on route change) ──────────────────────────
  useEffect(() => {
    // Reset per-page state
    scrollTracked.current = {
      "25": false,
      "50": false,
      "75": false,
      "90": false,
      "100": false,
    }
    timeTracked.current = {
      "30": false,
      "60": false,
      "120": false,
      "300": false,
    }
    startTime.current = Date.now()

    // ── Scroll depth ────────────────────────────────────────────────────
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const pct = Math.round(((scrollTop + windowHeight) / documentHeight) * 100)

      if (pct >= 25 && !scrollTracked.current["25"]) {
        scrollTracked.current["25"] = true
        trackScrollDepth(25)
        trackEvent(GA_EVENTS.SCROLL_25, { page: pathname })
      }
      if (pct >= 50 && !scrollTracked.current["50"]) {
        scrollTracked.current["50"] = true
        trackScrollDepth(50)
        trackEvent(GA_EVENTS.SCROLL_50, { page: pathname })
      }
      if (pct >= 75 && !scrollTracked.current["75"]) {
        scrollTracked.current["75"] = true
        trackScrollDepth(75)
        trackEvent(GA_EVENTS.SCROLL_75, { page: pathname })
      }
      if (pct >= 90 && !scrollTracked.current["90"]) {
        scrollTracked.current["90"] = true
        trackScrollDepth(90)
      }
      if (pct >= 95 && !scrollTracked.current["100"]) {
        scrollTracked.current["100"] = true
        trackScrollDepth(100)
        trackEvent(GA_EVENTS.SCROLL_100, { page: pathname })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // ── Time on page — fixed milestones ─────────────────────────────────
    const timeIntervals = [
      { seconds: 30, key: "30" as const, event: GA_EVENTS.TIME_ON_PAGE_30S },
      { seconds: 60, key: "60" as const, event: GA_EVENTS.TIME_ON_PAGE_60S },
      { seconds: 120, key: "120" as const, event: GA_EVENTS.TIME_ON_PAGE_120S },
      { seconds: 300, key: "300" as const, event: GA_EVENTS.TIME_ON_PAGE_300S },
    ]

    const timers = timeIntervals.map(({ seconds, key, event }) =>
      setTimeout(() => {
        if (!timeTracked.current[key]) {
          timeTracked.current[key] = true
          trackEvent(event, { page: pathname, duration_seconds: seconds })
        }
      }, seconds * 1000)
    )

    // ── Time on page — exact seconds on tab hide ─────────────────────────
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden" && startTime.current) {
        const seconds = Math.round((Date.now() - startTime.current) / 1000)
        trackTimeOnPage(seconds)
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)

    // ── WhatsApp click tracking (delegation) ─────────────────────────────
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a")
      if (!target) return
      const href = target.getAttribute("href") ?? ""
      if (!href.includes("wa.me")) return

      // Determine source from data-track attribute or fallback to page position
      const dataTrack = target.getAttribute("data-track") ?? "generic"
      trackWhatsAppClick(dataTrack)
    }
    document.addEventListener("click", handleClick)

    // ── FAQ click tracking ───────────────────────────────────────────────
    const handleFaqClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Match buttons inside [data-faq] containers
      const faqItem = target.closest("[data-faq]")
      if (faqItem) {
        const questionEl = faqItem.querySelector("[data-faq-question]")
        const question = questionEl?.textContent?.trim() ?? faqItem.getAttribute("data-faq") ?? ""
        trackEvent("faq_opened", { question, page: pathname })
        return
      }

      // Also catch native <details> elements
      const details = target.closest("details")
      if (details && !details.open) {
        const summary = details.querySelector("summary")
        const question = summary?.textContent?.trim() ?? ""
        trackEvent("faq_opened", { question, page: pathname })
      }
    }
    document.addEventListener("click", handleFaqClick)

    // ── Section view via IntersectionObserver ────────────────────────────
    const SECTIONS_TO_WATCH = ["#servicos", "#como-trabalhamos", "#blog", "#contato", "#faq"]
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id") ?? ""
            trackSectionView(id)
            sectionObserver.unobserve(entry.target) // fire once per section per page load
          }
        })
      },
      { threshold: 0.3 }
    )

    SECTIONS_TO_WATCH.forEach((selector) => {
      const el = document.querySelector(selector)
      if (el) sectionObserver.observe(el)
    })

    // ── Cleanup ──────────────────────────────────────────────────────────
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      document.removeEventListener("click", handleClick)
      document.removeEventListener("click", handleFaqClick)
      timers.forEach(clearTimeout)
      sectionObserver.disconnect()
    }
  }, [pathname])

  return null
}
