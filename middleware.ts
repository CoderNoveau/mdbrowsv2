import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // If this is a sitemap.xml request, bypass all redirects
  if (request.nextUrl.pathname === '/sitemap.xml') {
    return NextResponse.next({
      headers: {
        'Cache-Control': 'public, max-age=3600',
        'Content-Type': 'application/xml'
      }
    })
  }

  return NextResponse.next()
}

// Only run middleware on sitemap.xml requests
export const config = {
  matcher: '/sitemap.xml'
} 