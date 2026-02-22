import { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

/**
 * Robots.txt Configuration
 * Controls which pages search engines can crawl
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/obrigado',  // Don't index thank you pages
          '/_next/',
          '/static/',
        ],
      },
      {
        userAgent: 'GPTBot',  // OpenAI crawler
        disallow: '/',  // Optionally block AI training crawlers
      },
      {
        userAgent: 'CCBot',  // Common Crawl
        disallow: '/',
      },
    ],
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  }
}
