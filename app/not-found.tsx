import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página que você buscou não foi encontrada. Volte para a home ou entre em contato.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <main className="od-page">
      <Navigation />

      <section className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <p className="text-8xl font-extralight uppercase tracking-[0.12em] text-white/20 mb-4">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl font-extralight uppercase tracking-[0.12em] text-[#e2e8f0] mb-4">
            Página não encontrada
          </h1>
          <p className="text-white/[0.45] mb-8 text-lg">
            O endereço que você acessou não existe ou foi movido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              Voltar para Home
            </Link>
            <a
              href="https://wa.me/5531996966686"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl text-white/70 font-semibold transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
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
