import { NextResponse } from "next/server"
import { BLOG_ARTICLES_LIST } from "@/lib/blog-data"

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ondemand.digital"

  const rssContent = generateRSSFeed(BLOG_ARTICLES_LIST, baseUrl)

  return new NextResponse(rssContent, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}

function generateRSSFeed(articles: typeof BLOG_ARTICLES_LIST, baseUrl: string): string {
  const lastBuildDate = new Date().toUTCString()

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog - On Demand Digital</title>
    <link>${baseUrl}/blog</link>
    <description>Artigos sobre marketing digital, automação com IA e growth empresarial</description>
    <language>pt-br</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/blog/feed.xml" rel="self" type="application/rss+xml" />
    ${articles
      .map(
        (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description}]]></description>
      <link>${baseUrl}/blog/${article.slug}</link>
      <guid>${baseUrl}/blog/${article.slug}</guid>
      <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
      <category>${article.category}</category>
      <author>davi@ondemand.digital (${article.author})</author>
      <content:encoded><![CDATA[
        <p>${article.description}</p>
        <p><a href="${baseUrl}/blog/${article.slug}">Ler artigo completo</a></p>
      ]]></content:encoded>
    </item>
    `
      )
      .join("")}
  </channel>
</rss>`
}
