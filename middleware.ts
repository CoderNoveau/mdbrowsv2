import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers);
  
  // Create response
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Security Headers - World-class security
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
  
  // Content Security Policy - Strict but functional
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com https://static.elfsight.com https://cdnjs.cloudflare.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com;
    img-src 'self' data: https: blob:;
    font-src 'self' data: https://fonts.gstatic.com;
    connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://vitals.vercel-insights.com;
    media-src 'self';
    object-src 'none';
    frame-src 'self' https://www.fresha.com https://static.elfsight.com;
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();
  
  response.headers.set('Content-Security-Policy', cspHeader);
  
  // Cache Control Headers for different resource types
  const pathname = request.nextUrl.pathname;
  
  // Special handling for sitemap
  if (pathname === '/sitemap.xml' || pathname === '/sitemap-0.xml') {
    response.headers.set('Cache-Control', 'public, max-age=3600');
    response.headers.set('Content-Type', 'application/xml');
    return response;
  }
  
  // Static assets - long cache
  if (pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|ico|svg|woff|woff2|ttf|eot)$/i)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // CSS and JS - moderate cache with revalidation
  else if (pathname.match(/\.(css|js)$/i)) {
    response.headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
  }
  // HTML pages - short cache with revalidation
  else if (!pathname.startsWith('/api')) {
    response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  }
  // API routes - no cache
  else {
    response.headers.set('Cache-Control', 'no-store, max-age=0');
  }
  
  // Add custom headers for monitoring
  response.headers.set('X-Robots-Tag', 'index, follow');
  response.headers.set('X-UA-Compatible', 'IE=edge');
  
  // Redirects for SEO
  const redirects: { [key: string]: string } = {
    '/microblading.html': '/services/microblading',
    '/cosmetic-tattooing.html': '/services/cosmetic-tattooing',
    '/eyebrow-tattoo': '/services/microblading',
    '/brow-tattoo': '/services/microblading',
    '/semi-permanent-makeup': '/services/cosmetic-tattooing',
    '/permanent-makeup': '/services/cosmetic-tattooing',
    '/locations/melbourne': '/locations',
    '/richmond': '/locations/richmond',
    '/springvale': '/locations/springvale',
    '/book-now': 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429',
    '/book-appointment': 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429',
  };
  
  // Check for redirects
  const redirect = redirects[pathname];
  if (redirect) {
    if (redirect.startsWith('http')) {
      // External redirect
      return NextResponse.redirect(new URL(redirect));
    } else {
      // Internal redirect
      return NextResponse.redirect(new URL(redirect, request.url));
    }
  }
  
  // Handle trailing slashes (remove them for consistency)
  if (pathname !== '/' && pathname.endsWith('/')) {
    const url = new URL(request.url);
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }
  
  // Handle www to non-www redirect
  const host = request.headers.get('host');
  if (host?.startsWith('www.')) {
    const url = new URL(request.url);
    url.host = host.replace('www.', '');
    return NextResponse.redirect(url, 301);
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};