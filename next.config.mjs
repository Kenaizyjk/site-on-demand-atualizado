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
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://fonts.googleapis.com https://www.googletagmanager.com https://www.google-analytics.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: https: blob:;
              font-src 'self' data: https://fonts.gstatic.com;
              connect-src 'self' https://fonts.googleapis.com https://www.google-analytics.com https://analytics.google.com;
              frame-src 'self' https://www.youtube.com https://www.google.com;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'self';
              upgrade-insecure-requests;
            `.replace(/\s{2,}/g, ' ').trim(),
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
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.ondemanddigital.com',
          },
        ],
        destination: 'https://ondemanddigital.com.br/:path*',
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
