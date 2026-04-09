/**
 * Schema.org Structured Data
 * Melhora SEO e rich snippets no Google
 */

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'On Demand Digital',
    description:
      'Agência de marketing digital com foco em estratégia, automação e conteúdo.',
    url: 'https://ondemanddigital.com.br',
    logo: 'https://ondemanddigital.com.br/logo.svg',
    foundingDate: '2022',
    founder: {
      '@type': 'Person',
      name: 'Davi Honorato',
      jobTitle: 'CEO & Fundador',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55 31 99696-6686',
      contactType: 'Sales',
      areaServed: 'BR',
      availableLanguage: ['Portuguese'],
    },
    sameAs: [
      'https://www.linkedin.com/company/ondemanddigital',
      'https://instagram.com/ondemanddigital',
      'https://www.instagram.com/daviluizjk',
      'https://www.facebook.com/ondemanddigital',
    ],
    areaServed: {
      '@type': 'City',
      name: 'Belo Horizonte',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    priceRange: '$$',
    knowsLanguage: 'pt-BR',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: 'On Demand Digital - Agência de Marketing',
    image: 'https://ondemanddigital.com.br/og-image.svg',
    description:
      'Agência de marketing digital focada em estratégia e execução responsável.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Belo Horizonte',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    telephone: '+55 31 99696-6686',
    email: 'contato@ondemanddigital.com.br',
    url: 'https://ondemanddigital.com.br',
    paymentAccepted: 'Credit Card, Debit Card, Bank Transfer, PIX',
    priceRange: '$$',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -19.9167,
      longitude: -43.9345,
    },
    hasMap: 'https://maps.google.com/?q=Belo+Horizonte+MG',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Marketing Digital',
    provider: {
      '@type': 'Organization',
      name: 'On Demand Digital',
    },
    areaServed: {
      '@type': 'City',
      name: 'Belo Horizonte',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Marketing Digital',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gestão de Tráfego Pago (Meta Ads e Google Ads)',
            description: 'Campanhas com foco em clareza, testes e melhoria contínua.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Local e Google My Business',
            description: 'Otimização para buscas locais e gestão do perfil GMB.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automações com IA',
            description: 'Chatbots, WhatsApp e automações de marketing.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Pages e Sites',
            description: 'Desenvolvimento focado em clareza, UX e conteúdo.',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleSchema({
  article,
  url,
}: {
  article: {
    title: string
    excerpt: string
    publishedAt: string
    updatedAt?: string
    author: string
  }
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'On Demand Digital',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ondemanddigital.com.br/logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
