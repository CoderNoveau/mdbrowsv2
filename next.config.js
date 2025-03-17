/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript checking during production builds
    ignoreBuildErrors: true,
  },
  // These were moved from experimental to root level
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  // Force static export
  output: 'export',
  // Image optimization settings
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Performance optimizations
  compress: true, // Enable GZIP compression
  poweredByHeader: false, // Remove X-Powered-By header
  // Cache settings
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000, // 1 hour
    pagesBufferLength: 2,
  },
  // Static generation settings
  staticPageGenerationTimeout: 120,
  // Asset optimization
  assetPrefix: '',
  // Instead of redirects, we'll use client-side navigation
  // or handle redirects through your hosting platform (Vercel)
  trailingSlash: true, // This helps with static hosting
}

module.exports = nextConfig 