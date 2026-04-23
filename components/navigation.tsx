"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#casos", label: "Casos" },
  { href: "#sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
] as const

/** Delay for auto-opening links after hero intro (ON at 5.8s + 1.4s anim ≈ 7.2s) */
const INTRO_OPEN_DELAY = 7.5

export default function Navigation() {
  const [introOpen, setIntroOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()
  const isHome = pathname === "/"

  // Scroll detection
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Reduced motion detection
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const handler = () => setReducedMotion(mq.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  // Auto-open links: immediately on non-home pages, after intro delay on homepage
  useEffect(() => {
    if (!isHome) {
      setIntroOpen(true)
      return
    }
    const delay = reducedMotion ? 0 : INTRO_OPEN_DELAY * 1000
    const id = setTimeout(() => setIntroOpen(true), delay)
    return () => clearTimeout(id)
  }, [reducedMotion, isHome])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav
      ref={navRef}
      className="od-cinematic-nav"
      data-scrolled={isScrolled}
    >
      {/* Flex row: ON · links · DEMAND */}
      <div className="od-nav-row" data-expanded={introOpen}>
        <button
          className="od-nav-word od-nav-word--on"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          ON
        </button>

        <span
          className="od-nav-dot"
          data-expanded={introOpen}
          aria-hidden="true"
        />

        <div
          id="nav-links"
          className="od-nav-links"
          data-visible={introOpen}
          role="navigation"
          aria-label="Menu principal"
          aria-hidden={!introOpen}
        >
          {NAV_LINKS.filter((link) => !(link.href === "/" && isHome)).map(
            (link) =>
              link.href.startsWith("#") ? (
                isHome ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="od-nav-link"
                    tabIndex={introOpen ? 0 : -1}
                    onClick={(e) => {
                      e.preventDefault()
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={`/${link.href}`}
                    className="od-nav-link"
                    tabIndex={introOpen ? 0 : -1}
                  >
                    {link.label}
                  </Link>
                )
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="od-nav-link"
                  data-active={pathname === link.href}
                  tabIndex={introOpen ? 0 : -1}
                >
                  {link.label}
                </Link>
              )
          )}
        </div>

        <button
          className="od-nav-word od-nav-word--demand"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          DEMAND
        </button>
      </div>
    </nav>
  )
}
