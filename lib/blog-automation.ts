import type { BlogArticle } from './blog-data'

export function autoMetaTitle(title: string, siteName = 'On Demand Digital'): string {
  const maxLen = 60 - siteName.length - 3
  if (title.length <= maxLen) return title
  return `${title.slice(0, maxLen - 3)}...`
}

export function autoMetaDescription(excerpt: string): string {
  if (excerpt.length <= 155) return excerpt
  const truncated = excerpt.slice(0, 152)
  const lastSpace = truncated.lastIndexOf(' ')
  return `${truncated.slice(0, lastSpace)}...`
}

export function estimateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function getArticlesByCategory(articles: BlogArticle[], category: string): BlogArticle[] {
  return articles.filter((a) => a.category === category)
}

export function getFeaturedArticles(articles: BlogArticle[], limit = 3): BlogArticle[] {
  return articles
    .filter((a) => a.featured && !a.noindex)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

export function getRecentArticles(articles: BlogArticle[], limit = 3): BlogArticle[] {
  return [...articles]
    .filter((a) => !a.noindex)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}
