import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd } from '../../../components/JsonLd'
import { DEFAULT_OG_IMAGE_PATH, SITE_NAME, resolveSiteOrigin } from '../../../lib/site'
import { getResourceArticleBySlug, resourceArticles } from '../../../content/resources'
import { ResourceArticlePage } from '../../../views/ResourceArticle'

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return resourceArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getResourceArticleBySlug(slug)
  if (!article) return {}

  const canonicalPath = `/resources/${article.slug}`
  const title = article.seoTitle ?? article.title
  return {
    title,
    description: article.description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title,
      description: article.description,
      siteName: SITE_NAME,
      url: canonicalPath,
      type: 'article',
      images: [{ url: DEFAULT_OG_IMAGE_PATH, width: 1200, height: 630 }],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getResourceArticleBySlug(slug)
  if (!article) notFound()

  const origin = resolveSiteOrigin()
  const url = `${origin}/resources/${article.slug}`
  const dateModified = article.updatedAt ?? article.publishedAt

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: origin,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: origin,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    image: [`${origin}${DEFAULT_OG_IMAGE_PATH}`],
  }

  return (
    <>
      <JsonLd id={`donna-jsonld-resource-${article.slug}`} data={jsonLd} />
      <ResourceArticlePage article={article} />
    </>
  )
}
