import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initGa4, trackEvent, trackPageView } from './ga4'

export function Ga4Analytics() {
  const location = useLocation()

  useEffect(() => {
    initGa4()
  }, [])

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null
      const anchor = target?.closest?.('a') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href') ?? ''
      if (!href) return

      const resolvedHref = href.startsWith('http') ? href : anchor.href
      if (!resolvedHref.includes('chromewebstore.google.com/detail/donna-crm/')) return

      trackEvent('install_click', {
        link_url: resolvedHref,
        link_text: anchor.textContent?.trim() || undefined,
        page_path: `${window.location.pathname}${window.location.search}`,
      })
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`)
  }, [location.pathname, location.search])

  return null
}
