import type { MetadataRoute } from "next"
import { BLOG_SLUGS } from "@/lib/blog-data"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ondemanddigital.com.br"

const staticRoutes = [
  "",
  "/sobre",
  "/precos",
  "/blog",
  "/casos-v2",
  "/clinicas",
  "/recursos",
  "/privacidade",
  "/politica-de-privacidade",
  "/termos",
  "/termos-de-uso",
  "/calculadora-roi",
  "/ads/gmb-strategy",
  "/ads/automation-demo",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }))

  const blogEntries = BLOG_SLUGS.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}
