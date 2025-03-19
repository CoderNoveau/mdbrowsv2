import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // If this is a sitemap.xml request
  if (request.nextUrl.pathname === '/sitemap.xml') {
    // Get the current host
    const host = request.headers.get('host') || ''
    
    // If we're on the non-www domain and it's a sitemap request,
    // serve the sitemap directly instead of redirecting
    if (host === 'mdbrows.com.au') {
      // Clone the request but change the host to www
      const url = new URL(request.url)
      url.host = 'www.mdbrows.com.au'
      return NextResponse.rewrite(url)
    }
  }

  // For all other requests, continue normal processing
  return NextResponse.next()
}

// Only run middleware on sitemap.xml requests
export const config = {
  matcher: '/sitemap.xml'
} 