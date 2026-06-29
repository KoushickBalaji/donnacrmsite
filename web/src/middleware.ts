import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const isProduction =
    process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production'
  if (!isProduction) return NextResponse.next()

  const url = new URL(request.url)
  const forwardedProto = request.headers.get('x-forwarded-proto')
  const shouldRedirectToHttps = forwardedProto && forwardedProto !== 'https'
  const shouldRedirectToWww = url.hostname === 'donnacrm.com'

  if (shouldRedirectToHttps || shouldRedirectToWww) {
    url.protocol = 'https:'
    if (shouldRedirectToWww) url.hostname = 'www.donnacrm.com'
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
