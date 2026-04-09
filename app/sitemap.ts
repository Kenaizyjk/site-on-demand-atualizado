import type { MetadataRoute } from "next"
import { BLOG_SLUGS } from "@/lib/blog-data"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ondemanddigital.com.br"

const staticRoutes = [
  { path: "", priority: 1.0 },
  { path: "/sobre", priority: 0.9 },
  { path: "/servicos", priority: 0.9 },
  { path: "/casos", priority: 0.85 },
  { path: "/contato", priority: 0.85 },
  { path: "/blog", priority: 0.8 },
  { path: "/servicos/trafego-pago", priority: 0.7 },
  { path: "/servicos/automacao", priority: 0.7 },
  { path: "/servicos/seo-local", priority: 0.7 },
  { path: "/servicos/chatbots", priority: 0.7 },
  { path: "/privacidade", priority: 0.7 },
  { path: "/termos", priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries = staticRoutes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }))

  const blogEntries = BLOG_SLUGS.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...blogEntries]
}
