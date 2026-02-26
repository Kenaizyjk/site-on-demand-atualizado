import type React from 'react'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { ErrorBoundary } from '@/components/error-boundary'
import { OrganizationSchema, LocalBusinessSchema, ServiceSchema } from '@/components/schema-org'
import CookieConsent from '@/components/cookie-consent'
import AnalyticsTracker from '@/components/analytics-tracker'
import RootClientLayout from '@/components/root-client-layout'
import RetargetingPixels from '@/components/retargeting-pixels'
import {
  COMPANY_NAME,
  WHATSAPP_NUMBER,
  WEBSITE_URL,
  SEO_DEFAULTS,
} from '@/lib/constants'

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

  // Verification (add your codes)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    // yandex: 'your-yandex-verification',
    // bing: 'your-bing-verification',
  },

  // Alternates
  alternates: {
    canonical: WEBSITE_URL,
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
    <html lang="pt-BR">
      <head>
        {/* Viewport otimizado para mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="google-site-verification" content="IhBhsG-FRPI0CXrm5uWXdCOWJjH3Kmz8F_E8c_v5H5k" />
        {/* Preconnect para recursos externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* RSS Feed para Blog */}
        <link rel="alternate" type="application/rss+xml" title={`${COMPANY_NAME} Blog`} href="/blog/feed.xml" />
        <link rel="preconnect" href="https://i.ibb.co" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Retargeting Pixels - Facebook, Google Ads, Hotjar, LinkedIn, TikTok */}
        <RetargetingPixels />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5NJ3XP3G');`,
          }}
        />

        {/* Google tag (gtag.js) */}
        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0TW8KVEPS9"
        />
        <Script
          id="gtag-inline"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date());
              gtag('config', 'G-0TW8KVEPS9');
            `,
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

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="ga-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}

        {/* Block Floating Widgets Script */}
        <Script id="block-widgets" strategy="afterInteractive">
          {`
            (function() {
              const removeFloatingWidgets = () => {
                const selectors = [
                  '[class*="notification"]',
                  '[class*="popup"]',
                  '[class*="toast"]',
                  '[class*="widget"]',
                  '[class*="floating"]',
                  '[class*="social-proof"]',
                  '[class*="testimonial-popup"]',
                  '[class*="review-widget"]',
                  '[id*="notification"]',
                  '[id*="popup"]',
                  '[id*="widget"]',
                  '[data-widget]',
                  '[data-notification]',
                ];

                selectors.forEach(selector => {
                  try {
                    document.querySelectorAll(selector).forEach(el => {
                      const htmlEl = el;
                      if (!htmlEl.closest('main') && !htmlEl.id.startsWith('__next')) {
                        const computedStyle = window.getComputedStyle(htmlEl);
                        const isFloating =
                          computedStyle.position === 'fixed' ||
                          computedStyle.position === 'absolute';
                        const bottom = parseInt(computedStyle.bottom) || 0;
                        const right = parseInt(computedStyle.right) || 0;
                        const isBottomRight = bottom < 100 && right < 100;

                        if (isFloating && isBottomRight) {
                          // Removing floating widget
                          htmlEl.remove();
                        }
                      }
                    });
                  } catch (error) {
                    // Widget removal failed silently
                  }
                });
              };

              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', removeFloatingWidgets);
              } else {
                removeFloatingWidgets();
              }

              setInterval(removeFloatingWidgets, 2000);

              const observer = new MutationObserver(removeFloatingWidgets);
              observer.observe(document.body, {
                childList: true,
                subtree: true
              });
            })();
          `}
        </Script>

        {/* WhatsApp Link Metadata */}
        <meta property="whatsapp:phone" content={WHATSAPP_NUMBER} />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5NJ3XP3G"
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <ErrorBoundary>
          {children}
          {/* FloatingReviews removido - poluio visual */}
        </ErrorBoundary>
        <Analytics />
        <AnalyticsTracker />
        <CookieConsent />
        <RootClientLayout />
      </body>
    </html>
  )
}
