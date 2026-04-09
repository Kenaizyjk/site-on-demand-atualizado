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

/** P1 — FAQ accordion item opened */
export function trackFAQOpen(question: string) {
  trackEvent("faq_opened", {
    question,
    page: typeof window !== "undefined" ? window.location.pathname : "",
  })
}

/** P0 — Newsletter form submitted */
export function trackNewsletterSubmit(source: string) {
  trackEvent("newsletter_submit", {
    event_category: "conversion",
    source,
    page: typeof window !== "undefined" ? window.location.pathname : "",
  })
}

/** P0 — Manual page view (e.g. SPA navigation) */
export function trackPageView(path: string) {
  trackEvent("page_view", {
    page_path: path,
    page_title: typeof document !== "undefined" ? document.title : "",
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

// ─── Legacy helpers (kept for backwards compatibility) ───────────────────────

/** Track external link clicks (non-WhatsApp) */
export const trackExternalLink = (url: string, linkText?: string) => {
  trackEvent("external_link_click", {
    link_url: url,
    link_text: linkText ?? url,
    outbound: true,
  })
}

/** Track file downloads */
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent("file_download", {
    file_name: fileName,
    file_type: fileType,
  })
}

// ─── GA_EVENTS constants (used by analytics-tracker and other components) ───

export const GA_EVENTS = {
  // Demo simulator
  SIMULATOR_OPENED: "simulator_opened",
  SIMULATOR_CALCULATED: "simulator_calculated",
  SIMULATOR_CTA_CLICKED: "simulator_cta_clicked",

  // Dashboard
  DASHBOARD_PERIOD_CHANGED: "dashboard_period_changed",
  DASHBOARD_CAMPAIGN_FILTERED: "dashboard_campaign_filtered",

  // Forms & Leads
  FORM_STARTED: "form_started",
  FORM_SUBMITTED: "form_submitted",
  FORM_ERROR: "form_error",
  WHATSAPP_CLICKED: "whatsapp_clicked",
  WHATSAPP_MOBILE_CLICKED: "whatsapp_mobile_clicked",
  NEWSLETTER_SIGNED: "newsletter_signed",

  // Content
  CHAT_OPENED: "chat_opened",
  CHAT_MESSAGE_SENT: "chat_message_sent",
  SEO_ANALYSIS_REQUESTED: "seo_analysis_requested",
  BLOG_POST_VIEWED: "blog_post_viewed",
  LEAD_MAGNET_DOWNLOADED: "lead_magnet_downloaded",

  // CTAs - Hero
  CTA_HERO_PRIMARY: "cta_hero_primary_clicked",
  CTA_HERO_SECONDARY: "cta_hero_secondary_clicked",

  // CTAs - General
  CTA_SERVICES_CLICKED: "cta_services_clicked",
  CTA_CONTACT_CLICKED: "cta_contact_clicked",
  CTA_PRICING_CLICKED: "cta_pricing_clicked",
  CTA_FOOTER_CLICKED: "cta_footer_clicked",

  // Exit Intent
  EXIT_INTENT_SHOWN: "exit_intent_shown",
  EXIT_INTENT_CONVERTED: "exit_intent_converted",
  EXIT_INTENT_CLOSED: "exit_intent_closed",

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

  // Case Studies
  CASE_STUDY_VIEWED: "case_study_viewed",
  CASE_STUDY_CTA_CLICKED: "case_study_cta_clicked",

  // Social Proof
  REVIEW_SECTION_VIEWED: "review_section_viewed",
  TESTIMONIAL_CLICKED: "testimonial_clicked",

  // Navigation
  NAVIGATION_CLICKED: "navigation_clicked",
  FOOTER_LINK_CLICKED: "footer_link_clicked",
  SOCIAL_MEDIA_CLICKED: "social_media_clicked",

  // Cookie Consent
  COOKIE_ACCEPTED_ALL: "cookie_accepted_all",
  COOKIE_REJECTED_ALL: "cookie_rejected_all",
  COOKIE_PREFERENCES_SAVED: "cookie_preferences_saved",

  // Error Tracking
  ERROR_OCCURRED: "error_occurred",
  PAGE_NOT_FOUND: "page_not_found",
} as const
