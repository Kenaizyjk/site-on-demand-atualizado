"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { GA_EVENTS, trackEvent } from "@/lib/ga-events"

/**
 * Advanced Analytics Tracker
 * Automatically tracks:
 * - Scroll depth (25%, 50%, 75%, 100%)
 * - Time on page (30s, 60s, 120s, 300s)
 * - Page views
 */
export default function AnalyticsTracker() {
  const pathname = usePathname()
  const scrollTracked = useRef({
    "25": false,
    "50": false,
    "75": false,
    "100": false,
  })
  const timeTracked = useRef({
    "30": false,
    "60": false,
    "120": false,
    "300": false,
  })
  const startTime = useRef<number>(0)

  useEffect(() => {
    // Reset tracking on page change
    scrollTracked.current = {
      "25": false,
      "50": false,
      "75": false,
      "100": false,
    }
    timeTracked.current = {
      "30": false,
      "60": false,
      "120": false,
      "300": false,
    }
    startTime.current = Date.now()

    // Track scroll depth
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      )

      // Track milestones
      if (scrollPercentage >= 25 && !scrollTracked.current["25"]) {
        scrollTracked.current["25"] = true
        trackEvent(GA_EVENTS.SCROLL_25, { page: pathname })
      }
      if (scrollPercentage >= 50 && !scrollTracked.current["50"]) {
        scrollTracked.current["50"] = true
        trackEvent(GA_EVENTS.SCROLL_50, { page: pathname })
      }
      if (scrollPercentage >= 75 && !scrollTracked.current["75"]) {
        scrollTracked.current["75"] = true
        trackEvent(GA_EVENTS.SCROLL_75, { page: pathname })
      }
      if (scrollPercentage >= 95 && !scrollTracked.current["100"]) {
        scrollTracked.current["100"] = true
        trackEvent(GA_EVENTS.SCROLL_100, { page: pathname })
      }
    }

    // Track time on page
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
          trackEvent(event, {
            page: pathname,
            duration_seconds: seconds,
          })
        }
      }, seconds * 1000)
    )

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      timers.forEach(clearTimeout)
    }
  }, [pathname])

  return null // This component doesn't render anything
}
