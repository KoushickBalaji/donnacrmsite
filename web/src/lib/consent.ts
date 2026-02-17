export type Consent = {
  analytics: boolean
  marketing: boolean
}

const storageKey = 'donna_consent_v1'
const storageVersion = 1 as const
const maxAgeMs = 180 * 24 * 60 * 60 * 1000

type StoredConsentV1 = {
  v: typeof storageVersion
  analytics: boolean
  marketing: boolean
  updatedAt: number
}

export function isDoNotTrackEnabled() {
  if (typeof navigator === 'undefined') return false

  const nav = navigator as Navigator & { doNotTrack?: string }
  const dnt = nav.doNotTrack
  if (dnt === '1' || dnt === 'yes') return true

  if (typeof window !== 'undefined') {
    const win = window as unknown as { doNotTrack?: string }
    if (win.doNotTrack === '1' || win.doNotTrack === 'yes') return true
  }

  return false
}

export function readConsent(): { consent: Consent; updatedAt: number } | null {
  if (typeof window === 'undefined') return null

  let raw: string | null = null
  try {
    raw = window.localStorage.getItem(storageKey)
  } catch {
    return null
  }
  if (!raw) return null

  let parsed: Partial<StoredConsentV1>
  try {
    parsed = JSON.parse(raw) as Partial<StoredConsentV1>
  } catch {
    try {
      window.localStorage.removeItem(storageKey)
    } catch {
      // ignore
    }
    return null
  }

  if (parsed.v !== storageVersion) return null
  if (typeof parsed.analytics !== 'boolean' || typeof parsed.marketing !== 'boolean') {
    return null
  }
  if (typeof parsed.updatedAt !== 'number' || !Number.isFinite(parsed.updatedAt)) return null

  const age = Date.now() - parsed.updatedAt
  if (!Number.isFinite(age) || age < 0 || age > maxAgeMs) {
    try {
      window.localStorage.removeItem(storageKey)
    } catch {
      // ignore
    }
    return null
  }

  return {
    consent: { analytics: parsed.analytics, marketing: parsed.marketing },
    updatedAt: parsed.updatedAt,
  }
}

export function writeConsent(consent: Consent) {
  if (typeof window === 'undefined') return

  const record: StoredConsentV1 = {
    v: storageVersion,
    analytics: Boolean(consent.analytics),
    marketing: Boolean(consent.marketing),
    updatedAt: Date.now(),
  }

  try {
    window.localStorage.setItem(storageKey, JSON.stringify(record))
  } catch {
    // ignore
  }
}

function deleteCookie(name: string, domain?: string) {
  if (typeof document === 'undefined') return

  const base = `${encodeURIComponent(name)}=; Max-Age=0; Path=/; SameSite=Lax`
  try {
    document.cookie = base
    if (domain) document.cookie = `${base}; Domain=${domain}`
  } catch {
    // ignore
  }
}

function getParentDomain(hostname: string) {
  const parts = hostname.split('.').filter(Boolean)
  if (parts.length <= 2) return hostname
  return parts.slice(-2).join('.')
}

export function clearGoogleCookies(options?: { analytics?: boolean; marketing?: boolean }) {
  if (typeof document === 'undefined') return

  const cookieHeader = document.cookie
  if (!cookieHeader) return

  const clearAnalytics = options?.analytics ?? true
  const clearMarketing = options?.marketing ?? true

  const cookieNames = cookieHeader
    .split(';')
    .map((cookie) => cookie.split('=')[0]?.trim())
    .filter((name): name is string => Boolean(name))

  const shouldClear = (name: string) => {
    if (clearAnalytics) {
      if (name === '_gid' || name === '_gat') return true
      if (name.startsWith('_ga')) return true
    }
    if (clearMarketing) {
      if (name === '_gcl_au') return true
      if (name.startsWith('_gcl_')) return true
      if (name.startsWith('_gac_')) return true
    }
    return false
  }

  const hostname = typeof window !== 'undefined' ? window.location.hostname : ''
  const parentDomain = hostname ? getParentDomain(hostname) : ''

  const domains = new Set<string | undefined>([
    undefined,
    hostname || undefined,
    hostname ? `.${hostname}` : undefined,
    parentDomain || undefined,
    parentDomain ? `.${parentDomain}` : undefined,
  ])

  for (const name of cookieNames) {
    if (!shouldClear(name)) continue
    for (const domain of domains) deleteCookie(name, domain)
  }
}
