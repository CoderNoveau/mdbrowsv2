const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript checking during production builds
    ignoreBuildErrors: true,
  },
  // Force static export
  output: 'export',
  // Image optimization settings
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
    ],
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
  // This helps with static hosting
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})

module.exports = nextConfig 