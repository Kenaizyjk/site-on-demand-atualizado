/**
 * Typed GA4 event helpers — On Demand Digital
 *
 * Rules:
 * - Safe for SSR (typeof window check)
 * - console.log only in development
 * - No duplicate events: scroll/time events are handled in analytics-tracker.tsx
 */

// ─── Global type declarations ───────────────────────────────────────────────

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

// ─── Core dispatcher ────────────────────────────────────────────────────────

export const trackEvent = (
  eventName: string,
  eventData?: Record<string, unknown>
) => {
  if (typeof window === "undefined") return
  if (typeof window.gtag !== "function") return

  try {
    window.gtag("event", eventName, eventData ?? {})

    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log("[GA4]", eventName, eventData ?? {})
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.error("[GA4] tracking error:", error)
    }
  }
}

// ─── Typed event functions ───────────────────────────────────────────────────

/** P0 — WhatsApp link click */
export function trackWhatsAppClick(source: string) {
  if (typeof window === "undefined") return
  trackEvent("whatsapp_click", {
    event_category: "conversion",
    event_label: typeof document !== "undefined" ? document.title : "",
    page_path:
      typeof window !== "undefined" ? window.location.pathname : "",
    source,
  })
}

/** P0 — Scroll depth milestone (25 / 50 / 75 / 90 / 100) */
export function trackScrollDepth(depth: number) {
  trackEvent("scroll_depth", {
    depth,
    page: typeof window !== "undefined" ? window.location.pathname : "",
  })
}

/** P1 — Section became visible via IntersectionObserver */
export function trackSectionView(sectionId: string) {
  trackEvent("section_viewed", {
    section_id: sectionId,
    page: typeof window !== "undefined" ? window.location.pathname : "",
  })
}

/** P1 — User left page (visibilitychange hidden) */
export function trackTimeOnPage(seconds: number) {
  trackEvent("time_on_page", {
    seconds,
    page: typeof window !== "undefined" ? window.location.pathname : "",
  })
}

/** P0 — First meaningful render / session start */
export function trackSessionStart() {
  if (typeof window === "undefined" || typeof document === "undefined") return
  trackEvent("session_start", {
    page_title: document.title,
    referrer: document.referrer || "direct",
    page_path: window.location.pathname,
  })
}

// ─── GA_EVENTS constants (used by analytics-tracker and other components) ───

export const GA_EVENTS = {
  // Forms & Leads
  WHATSAPP_CLICKED: "whatsapp_clicked",

  // Engagement - Scroll
  SCROLL_25: "scroll_25_percent",
  SCROLL_50: "scroll_50_percent",
  SCROLL_75: "scroll_75_percent",
  SCROLL_100: "scroll_100_percent",

  // Page Engagement - Time
  TIME_ON_PAGE_30S: "time_on_page_30s",
  TIME_ON_PAGE_60S: "time_on_page_60s",
  TIME_ON_PAGE_120S: "time_on_page_120s",
  TIME_ON_PAGE_300S: "time_on_page_300s",
} as const
