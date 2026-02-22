/**
 * Schema.org Structured Data
 * Melhora SEO e rich snippets no Google
 */

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "On Demand Digital",
    description: "Agência de marketing digital com foco em estratégia, automação e conteúdo.",
    url: "https://ondemanddigital.com.br",
    logo: "https://ondemanddigital.com.br/logo.png",
    foundingDate: "2022",
    founder: {
      "@type": "Person",
      name: "Davi Honorato",
      jobTitle: "CEO & Fundador",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55 31 99696-6686",
      contactType: "Sales",
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
    sameAs: [
      "https://www.instagram.com/daviluizjk",
      "https://www.linkedin.com/company/ondemanddigital",
      "https://www.facebook.com/ondemanddigital",
    ],
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
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "On Demand Digital - Agência de Marketing",
    image: "https://ondemanddigital.com.br/og-image.jpg",
    description: "Agência boutique de marketing digital focada em estratégia e execução responsável.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
    telephone: "+55-11-99999-9999",
    email: "contato@ondemanddigital.com.br",
    openingHours: "Mo-Fr 09:00-18:00",
    url: "https://ondemanddigital.com.br",
    servesCuisine: [],
    paymentAccepted: "Credit Card, Debit Card, Bank Transfer, PIX",
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
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Marketing Digital",
    provider: {
      "@type": "Organization",
      name: "On Demand Digital",
    },
    areaServed: {
      "@type": "Country",
      name: "Brazil",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Marketing Digital",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gestão de Tráfego Pago (Meta Ads e Google Ads)",
            description: "Campanhas com foco em clareza, testes e melhoria contínua.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Local e Google My Business",
            description: "Otimização para buscas locais e gestão do perfil GMB.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automações com IA",
            description: "Chatbots, WhatsApp e automações de marketing.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landing Pages e Sites",
            description: "Desenvolvimento focado em clareza, UX e conteúdo.",
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

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
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
