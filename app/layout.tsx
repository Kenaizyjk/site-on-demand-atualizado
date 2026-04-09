import type React from 'react'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { inter, plusJakarta } from './fonts'
import { ErrorBoundary } from '@/components/error-boundary'
import { OrganizationSchema, LocalBusinessSchema, ServiceSchema } from '@/components/schema-org'
import AnalyticsTracker from '@/components/analytics-tracker'
import WhatsAppStickyBar from '@/components/whatsapp-sticky-bar'
import {
  COMPANY_NAME,
  WEBSITE_URL,
  SEO_DEFAULTS,
} from '@/lib/constants'
import CursorGlow from '@/components/cursor-glow'

// ============================================
// VIEWPORT (exported separately per Next.js spec)
// ============================================
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#09090b',
}

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    default: SEO_DEFAULTS.title,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: SEO_DEFAULTS.description,
  keywords: [...SEO_DEFAULTS.keywords],
  authors: [{ name: COMPANY_NAME, url: WEBSITE_URL }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: WEBSITE_URL,
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    siteName: COMPANY_NAME,
    images: [
      {
        url: SEO_DEFAULTS.ogImage,
        width: 1200,
        height: 630,
        alt: COMPANY_NAME,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    images: [SEO_DEFAULTS.twitterImage],
    creator: '@ondemanddigital',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },

  // Verification (hardcoded)
  verification: {
    google: 'IhBhsG-FRPI0CXrm5uWXdCOWJjH3Kmz8F_E8c_v5H5k',
  },

  // Alternates
  alternates: {
    canonical: WEBSITE_URL,
    types: {
      'application/rss+xml': `${WEBSITE_URL}/blog/feed.xml`,
    },
  },

  // Other
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD for Website Search
  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY_NAME,
    url: WEBSITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${WEBSITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        {/* Preconnect para recursos externos */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://i.ibb.co" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5NJ3XP3G');`,
          }}
        />

        {/* Enhanced JSON-LD Structured Data */}
        <OrganizationSchema />
        <LocalBusinessSchema />
        <ServiceSchema />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebsite),
          }}
        />

      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5NJ3XP3G"
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <CursorGlow />
        <ErrorBoundary>
          {children}
          <WhatsAppStickyBar />
        </ErrorBoundary>
        <Analytics />
        <AnalyticsTracker />
      </body>
    </html>
  )
}
