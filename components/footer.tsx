import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"
import {
  WHATSAPP_LINK,
  WHATSAPP_NUMBER,
  COMPANY_EMAIL,
  COMPANY_PHONE,
} from "@/lib/constants"

const WA_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[#09090b] py-10 sm:py-12 px-4" style={{
      borderTop: "1px solid #27272a",
    }}>
      <div className="od-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">

          {/* Brand */}
          <div>
            <h3
              className="font-bold text-2xl mb-4"
              style={{
                color: "#ffffff",
              }}
            >
              On Demand Digital
            </h3>
            <p className="text-[#94a3b8] text-sm mb-4 leading-relaxed">
              Marketing digital com automação, estratégia e resultados mensuráveis.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-track="footer-whatsapp-social"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-zinc-800/60 border border-zinc-700/50 text-zinc-400 hover:bg-zinc-700/60 hover:border-zinc-600/60"
                title="WhatsApp"
                aria-label="WhatsApp On Demand Digital"
              >
                {WA_ICON}
              </a>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-zinc-800/60 border border-zinc-700/50 text-zinc-400 hover:bg-zinc-700/60 hover:border-zinc-600/60"
                title="Email"
                aria-label={`Enviar e-mail para ${COMPANY_EMAIL}`}
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/ondemanddigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-zinc-800/60 border border-zinc-700/50 text-zinc-400 hover:bg-zinc-700/60 hover:border-zinc-600/60"
                title="LinkedIn"
                aria-label="On Demand Digital no LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com/ondemanddigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-zinc-800/60 border border-zinc-700/50 text-zinc-400 hover:bg-zinc-700/60 hover:border-zinc-600/60"
                title="Instagram @ondemanddigital"
                aria-label="On Demand Digital no Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            <a
              href="https://instagram.com/ondemanddigital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#94a3b8] hover:text-[#06b6d4] transition-all duration-300 mt-2 inline-block"
            >
              @ondemanddigital
            </a>
          </div>

          {/* Serviços — only real services, no Redes Sociais */}
          <div>
            <h4 className="font-semibold mb-4 text-[#e2e8f0] text-sm tracking-wide uppercase" style={{ letterSpacing: "0.07em" }}>
              Serviços
            </h4>
            <ul className="space-y-2.5 text-[#94a3b8] text-sm">
              <li>
                <Link href="/#trafego-pago" className="hover:text-[#06b6d4] transition-colors duration-200">
                  Tráfego Pago
                </Link>
              </li>
              <li>
                <Link href="/#seo-local" className="hover:text-[#06b6d4] transition-colors duration-200">
                  SEO Local + GMB
                </Link>
              </li>
              <li>
                <Link href="/#automacao" className="hover:text-[#06b6d4] transition-colors duration-200">
                  Automação com IA
                </Link>
              </li>
              <li>
                <Link href="/#sites" className="hover:text-[#06b6d4] transition-colors duration-200">
                  Sites em Next.js
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4 text-[#e2e8f0] text-sm tracking-wide uppercase" style={{ letterSpacing: "0.07em" }}>
              Empresa
            </h4>
            <ul className="space-y-2.5 text-[#94a3b8] text-sm">
              <li>
                <Link href="/sobre" className="hover:text-[#06b6d4] transition-colors duration-200">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/casos" className="hover:text-[#06b6d4] transition-colors duration-200">
                  Casos de Sucesso
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#06b6d4] transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#06b6d4] transition-colors duration-200">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>

            {/* Legal */}
            <h4 className="font-semibold mt-6 mb-3 text-[#e2e8f0] text-sm tracking-wide uppercase" style={{ letterSpacing: "0.07em" }}>
              Legal
            </h4>
            <ul className="space-y-2.5 text-[#94a3b8] text-sm">
              <li>
                <Link href="/privacidade" className="hover:text-[#06b6d4] transition-colors duration-200">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-[#06b6d4] transition-colors duration-200">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4 text-[#e2e8f0] text-sm tracking-wide uppercase" style={{ letterSpacing: "0.07em" }}>
              Contato
            </h4>
            <ul className="space-y-3 text-[#94a3b8] text-sm">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="footer-whatsapp-phone"
                  className="hover:text-[#06b6d4] transition-colors duration-200"
                >
                  {COMPANY_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="hover:text-[#06b6d4] transition-colors duration-200 break-all"
                >
                  {COMPANY_EMAIL}
                </a>
              </li>
            </ul>

            {/* CTA inline */}
            <div className="mt-6">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Quero+agendar+um+diagnóstico+gratuito`}
                target="_blank"
                rel="noopener noreferrer"
                data-track="footer-whatsapp-cta"
                className="inline-flex items-center gap-2 px-[18px] py-[10px] rounded-lg text-sm font-semibold transition-all duration-200 border border-zinc-700 text-zinc-300 hover:border-cyan-500/40 hover:text-white hover:bg-cyan-500/5"
              >
                Marcar diagnóstico gratuito
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          style={{
            height: 1,
            background: "#27272a",
            marginBottom: "2rem",
          }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[#64748b] text-xs gap-3">
          <p className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} On Demand Digital. Todos os direitos reservados.</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>CNPJ: 60.803.333/0001-80</span>
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacidade" className="hover:text-[#94a3b8] transition-colors duration-200">
              Privacidade
            </Link>
            <span aria-hidden="true" className="text-[#334155]">·</span>
            <Link href="/termos" className="hover:text-[#94a3b8] transition-colors duration-200">
              Termos
            </Link>
            <span aria-hidden="true" className="text-[#334155]">·</span>
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="hover:text-[#94a3b8] transition-colors duration-200"
            >
              {COMPANY_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
