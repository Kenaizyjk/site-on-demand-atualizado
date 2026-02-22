/**
 * Track Google Analytics events
 * Includes automatic error handling and consent checking
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export const trackEvent = (eventName: string, eventData?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && window.gtag) {
    try {
      window.gtag("event", eventName, eventData || {})
    } catch (error) {
      console.error("GA tracking error:", error)
    }
  }
}

/**
 * Track scroll depth percentage
 */
export const trackScrollDepth = (percentage: number) => {
  trackEvent("scroll_depth", {
    scroll_percentage: percentage,
    page: window.location.pathname,
  })
}

/**
 * Track time on page
 */
export const trackTimeOnPage = (seconds: number) => {
  trackEvent("time_on_page", {
    duration_seconds: seconds,
    page: window.location.pathname,
  })
}

/**
 * Track external link clicks
 */
export const trackExternalLink = (url: string, linkText?: string) => {
  trackEvent("external_link_click", {
    link_url: url,
    link_text: linkText || url,
    outbound: true,
  })
}

/**
 * Track file downloads
 */
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent("file_download", {
    file_name: fileName,
    file_type: fileType,
  })
}

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
  CTA_HERO_PRIMARY: "cta_hero_primary_clicked", // "Falar com Especialista"
  CTA_HERO_SECONDARY: "cta_hero_secondary_clicked", // "Ver Como Funciona"

  // CTAs - General
  CTA_SERVICES_CLICKED: "cta_services_clicked",
  CTA_CONTACT_CLICKED: "cta_contact_clicked",
  CTA_PRICING_CLICKED: "cta_pricing_clicked",
  CTA_FOOTER_CLICKED: "cta_footer_clicked",

  // Exit Intent
  EXIT_INTENT_SHOWN: "exit_intent_shown",
  EXIT_INTENT_CONVERTED: "exit_intent_converted",
  EXIT_INTENT_CLOSED: "exit_intent_closed",

  // Engagement - Advanced
  SCROLL_25: "scroll_25_percent",
  SCROLL_50: "scroll_50_percent",
  SCROLL_75: "scroll_75_percent",
  SCROLL_100: "scroll_100_percent",

  // Page Engagement
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
}
