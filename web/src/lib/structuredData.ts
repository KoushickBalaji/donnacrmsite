import { resolveSiteOrigin } from './site'

type SoftwareApplicationInput = {
  canonicalPath: string
  description: string
}

export function softwareApplicationJsonLd({
  canonicalPath,
  description,
}: SoftwareApplicationInput) {
  const origin = resolveSiteOrigin()

  return {
    '@type': 'SoftwareApplication',
    name: 'Donna CRM',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Chrome',
    url: `${origin}${canonicalPath}`,
    description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }
}
