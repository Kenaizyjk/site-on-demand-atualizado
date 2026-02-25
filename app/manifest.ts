import { MetadataRoute } from 'next'
import { COMPANY_NAME, COMPANY_TAGLINE, COMPANY_DESCRIPTION } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY_NAME} - ${COMPANY_TAGLINE}`,
    short_name: 'OnDemand',
    description: COMPANY_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#00d9ff',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'pt-BR',
    categories: ['business', 'marketing', 'productivity'],
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  }
}
