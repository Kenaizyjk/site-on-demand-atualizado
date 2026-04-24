import { FC } from "react"

interface BlogArticleSchemaProps {
  title: string
  description: string
  author: string
  publishedDate: string
  modifiedDate?: string
  image?: string
  slug: string
  readTime: number
}

/**
 * Componente para adicionar Schema JSON-LD de BlogPosting
 * Melhora SEO e gera snippets ricos em resultados de busca
 *
 * Uso em app/blog/[slug]/page.tsx:
 * <BlogArticleSchema {...props} />
 */
export const BlogArticleSchema: FC<BlogArticleSchemaProps> = ({
  title,
  description,
  author,
  publishedDate,
  modifiedDate,
  image,
  slug,
  readTime,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: author,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
      sameAs: ["https://www.linkedin.com/in/davi-honorato-209955367"],
    },
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
    },
    image: {
      "@type": "ImageObject",
      url: image?.startsWith('http') ? image : `${process.env.NEXT_PUBLIC_SITE_URL}${image || '/og-image.svg'}`,
      width: 1200,
      height: 630,
    },
    publisher: {
      "@type": "Organization",
      name: "On Demand Digital",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.svg`,
        width: 250,
        height: 60,
      },
    },
    articleBody: description,
    wordCount: readTime * 250, // Estimativa: ~250 palavras/minuto de leitura
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

/**
 * Schema para página de blog (listagem)
 */
export const BlogCollectionSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog - On Demand Digital",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
    description: "Artigos sobre marketing digital, automação com IA e growth empresarial",
    publisher: {
      "@type": "Organization",
      name: "On Demand Digital",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.svg`,
        width: 250,
        height: 60,
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

/**
 * Schema para FAQ (perguntas frequentes)
 * Pode ser usada em artigos com seções de FAQ
 */
export const FAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

/**
 * Schema BreadcrumbList para navegação estruturada
 */
export const BreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}
