import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { BlogCollectionSchema } from "@/components/blog-schema"
import BlogClient from "@/components/blog-client"
import { BLOG_ARTICLES_LIST } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog | On Demand Digital - Artigos sobre Marketing e Automação",
  description:
    "Leia artigos atualizados sobre marketing digital, automação com IA, Google Ads, Meta Ads, SEO e growth. Dicas práticas para sua empresa.",
  keywords: [
    "blog marketing digital",
    "artigos google ads",
    "automação marketing",
    "dicas seo",
    "estratégia meta ads",
    "marketing ia",
  ],
  openGraph: {
    title: "Blog - On Demand Digital",
    description: "Artigos sobre marketing digital, automação e crescimento empresarial.",
    type: "website",
    locale: "pt_BR",
  },
}

export default function BlogPage() {
  return (
    <main className="od-page">
      <Navigation />
      <BlogCollectionSchema />
      <div className="od-reveal-section">
        <BlogClient articles={BLOG_ARTICLES_LIST} />
      </div>
      <Footer />
    </main>
  )
}

