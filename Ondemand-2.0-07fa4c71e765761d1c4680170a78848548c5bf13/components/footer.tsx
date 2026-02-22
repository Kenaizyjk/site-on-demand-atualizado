"use client"

import Link from "next/link"
import { Mail, Phone, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#09090b] border-t border-[#334155]/50 py-10 sm:py-12 px-4">
      <div className="od-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-2xl mb-4 text-[#e2e8f0]">On Demand</h3>
            <p className="text-[#94a3b8] text-sm mb-6 leading-relaxed">
              Marketing digital inteligente com automação e resultados mensuráveis.
            </p>
            <p className="text-[#94a3b8] text-xs mt-2">
              Belo Horizonte, MG — Brasil
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://wa.me/553196966686"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#06b6d4]/10 flex items-center justify-center hover:bg-[#06b6d4]/20 transition-all duration-300"
                title="WhatsApp"
              >
                <Phone size={20} className="text-[#06b6d4]" />
              </a>
              <a
                href="mailto:daviluizjk0@gmail.com"
                className="w-10 h-10 rounded-full bg-[#06b6d4]/10 flex items-center justify-center hover:bg-[#06b6d4]/20 transition-all duration-300"
                title="Email"
              >
                <Mail size={20} className="text-[#06b6d4]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#06b6d4]/10 flex items-center justify-center hover:bg-[#06b6d4]/20 transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin size={20} className="text-[#06b6d4]" />
              </a>
              <a
                href="https://instagram.com/daviluizjk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#06b6d4]/10 flex items-center justify-center hover:bg-[#06b6d4]/20 transition-all duration-300"
                title="Instagram @daviluizjk"
              >
                <Instagram size={20} className="text-[#06b6d4]" />
              </a>
            </div>
            <a
              href="https://instagram.com/daviluizjk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#94a3b8] hover:text-[#06b6d4] transition-all duration-300 mt-2 inline-block"
            >
              @daviluizjk
            </a>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-bold mb-4 text-[#e2e8f0]">Serviços</h4>
            <ul className="space-y-2 text-[#94a3b8] text-sm">
              <li>
                <Link href="/#servicos" className="hover:text-[#06b6d4] transition-all duration-300">
                  Tráfego Pago
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="hover:text-[#06b6d4] transition-all duration-300">
                  SEO & Conteúdo
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="hover:text-[#06b6d4] transition-all duration-300">
                  Automação & CRM
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="hover:text-[#06b6d4] transition-all duration-300">
                  Google Meu Negócio
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold mb-4 text-[#e2e8f0]">Empresa</h4>
            <ul className="space-y-2 text-[#94a3b8] text-sm">
              <li>
                <Link href="/#valores" className="hover:text-[#06b6d4] transition-all duration-300">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#06b6d4] transition-all duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="hover:text-[#06b6d4] transition-all duration-300">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-4 text-[#e2e8f0]">Contato</h4>
            <ul className="space-y-2 text-[#94a3b8] text-sm">
              <li>
                <a
                  href="https://wa.me/553196966686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#06b6d4] transition-all duration-300"
                >
                  (31) 99696-6686
                </a>
              </li>
              <li>
                <a
                  href="mailto:daviluizjk0@gmail.com"
                  className="hover:text-[#06b6d4] transition-all duration-300"
                >
                  daviluizjk0@gmail.com
                </a>
              </li>
              <li>
                <Link href="/#contato" className="hover:text-[#06b6d4] transition-all duration-300">
                  Formulário de Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#334155]/50 pt-8 flex flex-col md:flex-row justify-between items-center text-[#94a3b8] text-sm">
          <p className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
            <span>&copy; 2026 On Demand Digital. Todos os direitos reservados.</span>
            <span className="hidden sm:inline">|</span>
            <span>CNPJ: 60.803.333/0001-80</span>
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacidade" className="hover:text-[#06b6d4] transition-all duration-300">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-[#06b6d4] transition-all duration-300">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
