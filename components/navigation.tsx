"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { href: "/servicos", label: "Serviços" },
  { href: "/casos", label: "Casos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
] as const

const WHATSAPP_CTA_URL =
  "https://wa.me/5531996966686?text=Quero+agendar+um+diagnóstico+gratuito"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Detect scroll position
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Detect reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const handler = () => setReducedMotion(mq.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close mobile menu on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) setIsOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  function navLinkClass(href: string): string {
    const isActive = pathname === href
    return [
      "relative text-sm font-medium transition-colors duration-200 pb-0.5",
      // Active indicator uses gradient underline via pseudo-element
      "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full",
      "after:bg-cyan-500",
      "after:transition-all after:duration-300",
      isActive
        ? "text-white after:w-full"
        : "text-zinc-400 hover:text-white after:w-0 hover:after:w-full",
    ].join(" ")
  }

  const navTransition = reducedMotion ? "none" : "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50"
        style={{
          transition: navTransition,
          backgroundColor: isScrolled ? "rgba(9,9,11,0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(39,39,42,0.7)"
            : "1px solid transparent",
          boxShadow: isScrolled
            ? "0 8px 32px -8px rgba(0,0,0,0.5)"
            : "none",
        }}
      >
        <div className="od-container px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg"
          >
            <span
              className="text-xl md:text-2xl font-black text-white"
              style={{ transition: reducedMotion ? "none" : "transform 0.2s ease" }}
            >
              On Demand{" "}
              <span className="text-[#06b6d4]">
                Digital
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass(link.href)}>
                {link.label}
              </Link>
            ))}

            <a
              href={WHATSAPP_CTA_URL}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white od-nav-cta"
              target="_blank"
              rel="noopener noreferrer"
              data-track="nav-cta"
            >
              Agendar Diagnóstico
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 min-w-[44px] min-h-[44px] flex flex-col justify-center items-center rounded-lg hover:bg-zinc-800/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {/* Animated hamburger lines */}
            <span className="sr-only">{isOpen ? "Fechar" : "Menu"}</span>
            <div className="w-5 h-4 relative flex flex-col justify-between" aria-hidden="true">
              <span
                className="block h-0.5 bg-zinc-400 rounded-full origin-center"
                style={{
                  transition: reducedMotion ? "none" : "transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isOpen ? "translateY(7.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-0.5 bg-zinc-400 rounded-full"
                style={{
                  transition: reducedMotion ? "none" : "opacity 0.2s ease, transform 0.2s ease",
                  opacity: isOpen ? 0 : 1,
                  transform: isOpen ? "scaleX(0)" : "scaleX(1)",
                }}
              />
              <span
                className="block h-0.5 bg-zinc-400 rounded-full origin-center"
                style={{
                  transition: reducedMotion ? "none" : "transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: isOpen ? "translateY(-7.5px) rotate(-45deg)" : "none",
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu — slide-in panel */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden overflow-hidden"
          style={{
            maxHeight: isOpen ? "480px" : "0",
            opacity: isOpen ? 1 : 0,
            transition: reducedMotion
              ? "none"
              : isOpen
                ? "max-height 0.38s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.28s ease"
                : "max-height 0.28s cubic-bezier(0.4, 0, 1, 1), opacity 0.2s ease",
            backgroundColor: "rgba(9,9,11,0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: isOpen ? "1px solid rgba(39,39,42,0.6)" : "none",
          }}
          aria-hidden={!isOpen}
        >
          <div className="px-4 pb-6 pt-3 space-y-1">
            {/* CTA at top of mobile menu */}
            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-track="nav-cta-mobile"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 mb-3 rounded-xl od-nav-cta text-white font-semibold text-sm"
            >
              Agendar Diagnóstico
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-3 text-sm font-medium rounded-xl transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-white bg-zinc-800/60 border border-zinc-700/50"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                }`}
                style={{
                  transitionDelay: reducedMotion ? "0ms" : `${i * 40}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile backdrop — tapping it closes the menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-sm"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
          style={{
            transition: reducedMotion ? "none" : "opacity 0.25s ease",
          }}
        />
      )}
    </>
  )
}
