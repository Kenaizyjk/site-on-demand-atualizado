/** @type {import('next').NextConfig} */
const nextConfig = {
  // ============================================
  // TRANSPILE PACKAGES (Fix recharts and other ESM packages)
  // ============================================
  transpilePackages: ['recharts', 'react-is'],

  // ============================================
  // TYPESCRIPT CONFIGURATION
  // ============================================
  typescript: {
    ignoreBuildErrors: false, // ✅ Detectar erros de TypeScript
  },

  // ============================================
  // IMAGE OPTIMIZATION
  // ============================================
  images: {
    formats: ['image/avif', 'image/webp'], // ✅ Formatos modernos
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // ✅ Cache de 1 ano
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // ============================================
  // SECURITY HEADERS
  // ============================================
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // -------------------------------------------------
          // Content Security Policy
          // -------------------------------------------------
          // 'unsafe-inline' in script-src: REQUIRED by Google Tag Manager.
          //   GTM injects inline <script> tags at runtime and the GTM
          //   bootstrap snippet itself is an inline script. A nonce-based
          //   approach would only cover the bootstrap but NOT the scripts
          //   GTM injects later, so 'unsafe-inline' is the pragmatic
          //   choice while GTM is in use.
          //
          // 'unsafe-eval' has been REMOVED — it is not needed by Next.js
          //   in production and dramatically weakens XSS protection.
          //
          // fonts.googleapis.com removed from script-src (it serves CSS,
          //   not scripts — it already appears in style-src).
          // -------------------------------------------------
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Scripts: self + GTM/GA/FB hosts. 'unsafe-inline' needed for GTM (see note above).
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://connect.facebook.net https://tagmanager.google.com",
              // Styles: 'unsafe-inline' needed for Tailwind/Next.js runtime style injection.
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Images
              "img-src 'self' data: https: blob:",
              // Fonts
              "font-src 'self' data: https://fonts.gstatic.com",
              // XHR / fetch / WebSocket
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.facebook.com https://connect.facebook.net https://region1.google-analytics.com https://www.googletagmanager.com",
              // Iframes
              "frame-src 'self' https://www.youtube.com https://www.google.com",
              // Block <object>, <embed>, <applet>
              "object-src 'none'",
              // Restrict <base href>
              "base-uri 'self'",
              // Restrict form targets
              "form-action 'self'",
              // Prevent framing (clickjacking)
              "frame-ancestors 'self'",
              // Auto-upgrade http → https
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ]
  },

  // ============================================
  // REDIRECTS (www → non-www)
  // ============================================
  async redirects() {
    return [
      // www → non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.ondemanddigital.com.br',
          },
        ],
        destination: 'https://ondemanddigital.com.br/:path*',
        permanent: true,
      },
      // Deleted service sub-pages → main services page (301)
      {
        source: '/servicos/automacao',
        destination: '/servicos',
        permanent: true,
      },
      {
        source: '/servicos/chatbots',
        destination: '/servicos',
        permanent: true,
      },
      {
        source: '/servicos/seo-local',
        destination: '/servicos',
        permanent: true,
      },
      {
        source: '/servicos/trafego-pago',
        destination: '/servicos',
        permanent: true,
      },
    ]
  },

  // ============================================
  // EXPERIMENTAL FEATURES
  // ============================================
  experimental: {
    optimizePackageImports: [
      'recharts',
      'lucide-react',
      '@radix-ui/react-icons',
      'framer-motion',
    ],
  },

  // ============================================
  // COMPILER OPTIONS
  // ============================================
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // ============================================
  // PERFORMANCE
  // ============================================
  poweredByHeader: false,
  compress: true,
  generateEtags: true,

  // ============================================
  // ENVIRONMENT VARIABLES
  // ============================================
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://ondemanddigital.com.br',
  },
}

export default nextConfig
