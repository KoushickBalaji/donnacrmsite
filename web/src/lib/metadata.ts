import type { Metadata } from 'next'
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE_PATH, SITE_NAME } from './site'

type PageMetadataInput = {
  title: string
  description?: string
  canonicalPath: string
}

export function pageMetadata(input: PageMetadataInput): Metadata {
  const description = input.description ?? DEFAULT_DESCRIPTION
  return {
    title: input.title,
    description,
    alternates: { canonical: input.canonicalPath },
    openGraph: {
      title: input.title,
      description,
      siteName: SITE_NAME,
      url: input.canonicalPath,
      type: 'website',
      images: [{ url: DEFAULT_OG_IMAGE_PATH, width: 1200, height: 630 }],
    },
  }
}
