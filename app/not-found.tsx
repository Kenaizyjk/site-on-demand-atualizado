import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Página não encontrada | On Demand Digital",
  description: "A página que você buscou não foi encontrada.",
}

export default function NotFound() {
  return (
    <main className="od-page">
      <Navigation />

      <section className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <p className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] mb-4">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#e2e8f0] mb-4">
            Página não encontrada
          </h1>
          <p className="text-[#94a3b8] mb-8 text-lg">
            O endereço que você acessou não existe ou foi movido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 bg-[#06b6d4] text-white font-bold rounded-lg hover:bg-[#0891b2] transition-all duration-300 shadow-lg shadow-cyan-500/50"
            >
              Voltar para Home
            </Link>
            <a
              href="https://wa.me/5531996966686"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#18181b] border border-[#334155]/50 text-[#e2e8f0] font-bold rounded-lg hover:border-[#06b6d4]/50 transition-all duration-300"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
