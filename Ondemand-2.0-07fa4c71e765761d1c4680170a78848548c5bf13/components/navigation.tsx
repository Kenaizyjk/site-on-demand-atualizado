"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#09090b]/70 backdrop-blur-lg border-b border-[#334155]/50">
      <div className="od-container px-4 py-3 flex justify-between items-center">
        {/* Logo Simples */}
        <Link href="/" className="group">
          <span className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] group-hover:from-[#0891b2] group-hover:to-[#a855f7] transition-all duration-300">
            On Demand Digital
          </span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/#home" className="text-sm uppercase tracking-wider text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300">
            Home
          </Link>
          <Link href="/#valores" className="text-sm uppercase tracking-wider text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300">
            Valores
          </Link>
          <Link href="/#servicos" className="text-sm uppercase tracking-wider text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300">
            Serviços
          </Link>
          <Link href="/#contato" className="text-sm uppercase tracking-wider text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300">
            Contato
          </Link>
          <Link href="/blog" className="text-sm uppercase tracking-wider text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300">
            Blog
          </Link>
          <Link
            href="/#contato"
            className="px-6 py-2.5 bg-[#06b6d4] text-white hover:bg-[#0891b2] transition-all duration-300 font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-600/60"
          >
            Agendar Conversa
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-4 min-w-[48px] min-h-[48px] flex flex-col justify-center items-center"
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
          aria-expanded={isOpen}
        >
          <div className="space-y-1.5">
            <div className={`w-7 h-0.5 bg-[#06b6d4] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-7 h-0.5 bg-[#06b6d4] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-7 h-0.5 bg-[#06b6d4] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-lg border-t border-[#334155]/50 p-4 space-y-4">
          <Link href="/#home" onClick={() => setIsOpen(false)} className="block text-sm uppercase tracking-wider text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300 py-2">
            Home
          </Link>
          <Link href="/#valores" onClick={() => setIsOpen(false)} className="block text-sm uppercase tracking-wider text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300 py-2">
            Valores
          </Link>
          <Link href="/#servicos" onClick={() => setIsOpen(false)} className="block text-sm uppercase tracking-wider text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300 py-2">
            Serviços
          </Link>
          <Link href="/#contato" onClick={() => setIsOpen(false)} className="block text-sm uppercase tracking-wider text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300 py-2">
            Contato
          </Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="block text-sm uppercase tracking-wider text-[#cbd5e1] hover:text-[#06b6d4] transition-all duration-300 py-2">
            Blog
          </Link>
          <Link
            href="/#contato"
            className="block w-full px-4 py-2.5 bg-[#06b6d4] text-white hover:bg-[#0891b2] transition-all duration-300 font-semibold text-center rounded-lg shadow-lg shadow-cyan-500/50"
          >
            Agendar Conversa
          </Link>
        </div>
      )}
    </nav>
  )
}

