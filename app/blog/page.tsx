import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import { BlogCollectionSchema } from "@/components/blog-schema"
import BlogClient from "@/components/blog-client"
import { BLOG_ARTICLES_LIST } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog | Artigos sobre Marketing Digital e Automação",
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
  alternates: {
    canonical: "https://ondemanddigital.com.br/blog",
  },
  openGraph: {
    title: "Blog - On Demand Digital",
    description: "Artigos sobre marketing digital, automação e crescimento empresarial.",
    url: "https://ondemanddigital.com.br/blog",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://ondemanddigital.com.br/og?title=Blog%20%7C%20On%20Demand%20Digital",
        width: 1200,
        height: 630,
        alt: "Blog - On Demand Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - On Demand Digital",
    description: "Artigos sobre marketing digital, automação e crescimento empresarial.",
    images: ["https://ondemanddigital.com.br/og?title=Blog%20%7C%20On%20Demand%20Digital"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BlogPage() {
  return (
    <main id="main-content" className="od-page">
      <Navigation />
      <BlogCollectionSchema />
      <BlogClient articles={BLOG_ARTICLES_LIST} />
      <Footer />
    </main>
  )
}

