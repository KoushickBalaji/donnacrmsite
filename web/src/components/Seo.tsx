import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type SeoProps = {
  title?: string
  description?: string
  canonicalPath?: string
  noindex?: boolean
  imagePath?: string
  type?: 'website' | 'article'
}

const SITE_NAME = 'Donna CRM'
const DEFAULT_DESCRIPTION =
  'Donna CRM is a Chrome extension that brings contact management, deal tracking, and email productivity tools directly into your Gmail inbox.'
const DEFAULT_TITLE = 'CRM inside Gmail'

function resolveSiteOrigin() {
  const configuredOrigin = import.meta.env.VITE_SITE_ORIGIN as string | undefined
  if (configuredOrigin) return configuredOrigin.replace(/\/+$/, '')
  return window.location.origin
}

function resolveCanonicalUrl(pathname: string) {
  const origin = resolveSiteOrigin()
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${origin}${path}`
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attribute}="${CSS.escape(key)}"]`
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attribute, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${CSS.escape(rel)}"]`
  let el = document.head.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function removeMeta(attribute: 'name' | 'property', key: string) {
  const selector = `meta[${attribute}="${CSS.escape(key)}"]`
  document.head.querySelector<HTMLMetaElement>(selector)?.remove()
}

export function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath,
  noindex,
  imagePath,
  type = 'website',
}: SeoProps) {
  const location = useLocation()
  const canonical = resolveCanonicalUrl(canonicalPath ?? location.pathname)
  const resolvedTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${DEFAULT_TITLE} | ${SITE_NAME}`
  const resolvedImageUrl = imagePath ? resolveCanonicalUrl(imagePath) : undefined

  useEffect(() => {
    document.title = resolvedTitle

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow')
    upsertMeta('name', 'theme-color', '#0077b8')
    upsertLink('canonical', canonical)

    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:title', resolvedTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    if (resolvedImageUrl) upsertMeta('property', 'og:image', resolvedImageUrl)
    else removeMeta('property', 'og:image')

    upsertMeta('name', 'twitter:card', resolvedImageUrl ? 'summary_large_image' : 'summary')
    upsertMeta('name', 'twitter:title', resolvedTitle)
    upsertMeta('name', 'twitter:description', description)
    if (resolvedImageUrl) upsertMeta('name', 'twitter:image', resolvedImageUrl)
    else removeMeta('name', 'twitter:image')
  }, [canonical, description, noindex, resolvedImageUrl, resolvedTitle, type])

  return null
}
