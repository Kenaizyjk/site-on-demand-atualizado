import { useEffect, useState } from "react"

/**
 * Custom hook to detect exit intent and show popup once per session
 * Returns true when popup should be shown
 */
export const useExitIntent = (enabled = true) => {
  const [showExitIntent, setShowExitIntent] = useState(false)

  useEffect(() => {
    if (!enabled) return

    // Check if already shown in this session
    const hasShown = sessionStorage.getItem("exit_intent_shown")
    if (hasShown) {
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect if mouse is leaving towards top of page (exit intent)
      // clientY <= 0 means mouse left from the top
      if (e.clientY <= 0 && !hasShown) {
        setShowExitIntent(true)
        sessionStorage.setItem("exit_intent_shown", "true")
      }
    }

    // Only add listener on desktop (not mobile)
    const isDesktop =
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 769px)").matches

    if (isDesktop) {
      document.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [enabled])

  return showExitIntent
}

/**
 * Custom hook to manage lead magnet modal
 * Shows after 30 seconds if user hasn't submitted before
 */
export const useLeadMagnetModal = (enabled = true) => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (!enabled) return

    // Check if already submitted/dismissed recently
    const lastDismissed = localStorage.getItem("lead_magnet_dismissed_at")
    const now = Date.now()
    const oneDayMs = 24 * 60 * 60 * 1000

    // Don't show if dismissed in last 24h
    if (lastDismissed && now - parseInt(lastDismissed) < oneDayMs) {
      return
    }

    // Don't show if already submitted
    const alreadySubmitted = localStorage.getItem("lead_magnet_submitted")
    if (alreadySubmitted) {
      return
    }

    // Show modal after 30 seconds
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 30000)

    return () => clearTimeout(timer)
  }, [enabled])

  const handleClose = () => {
    setShowModal(false)
    localStorage.setItem("lead_magnet_dismissed_at", Date.now().toString())
  }

  return { showModal, handleClose }
}

/**
 * Custom hook to detect scroll depth
 * Useful for tracking user engagement
 */
export const useScrollDepth = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const totalScroll = documentHeight - windowHeight
      const progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0

      setScrollPercentage(Math.round(progress))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollPercentage
}
