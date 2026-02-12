import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const isProduction = process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production'
  if (!isProduction) return NextResponse.next()

  const forwardedProto = request.headers.get('x-forwarded-proto')
  if (forwardedProto && forwardedProto !== 'https') {
    const url = new URL(request.url)
    url.protocol = 'https:'
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}

