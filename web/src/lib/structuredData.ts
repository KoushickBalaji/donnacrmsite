import { resolveSiteOrigin } from './site'
import { DONNA_PRODUCT_FACTS } from './productFacts'

type SoftwareApplicationInput = {
  description: string
}

export function softwareApplicationJsonLd({
  description,
}: SoftwareApplicationInput) {
  const origin = resolveSiteOrigin()

  return {
    '@type': 'SoftwareApplication',
    '@id': `${origin}/#software`,
    name: 'Donna CRM',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Chrome',
    url: origin,
    description,
    downloadUrl: DONNA_PRODUCT_FACTS.chromeWebStoreUrl,
    offers: {
      '@type': 'Offer',
      price: String(DONNA_PRODUCT_FACTS.monthlyPriceUsd),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${origin}/pricing`,
      description: `Monthly plan after a ${DONNA_PRODUCT_FACTS.trialDays}-day free trial.`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: DONNA_PRODUCT_FACTS.ratingValue,
      ratingCount: DONNA_PRODUCT_FACTS.ratingCount,
      bestRating: 5,
      worstRating: 1,
    },
  }
}
