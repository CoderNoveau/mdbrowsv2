import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

// Force static generation for better performance and SEO
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour for fresh content

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mdbrows.com.au'
  
  // Get all blog posts dynamically
  const posts = await getAllPosts()
  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Define all static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    // Core service pages - CRITICAL FOR RANKINGS
    {
      url: `${baseUrl}/services/microblading`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0, // Max priority for main money page
    },
    {
      url: `${baseUrl}/services/cosmetic-tattooing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.98, // Very high priority
    },
    {
      url: `${baseUrl}/services/microneedling`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    // Other service pages
    {
      url: `${baseUrl}/services/brow-lamination`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/brow-corrections`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/lash-lift`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/lip-blush`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/scalp-micropigmentation`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // Location pages - CRITICAL FOR LOCAL SEO
    {
      url: `${baseUrl}/locations/richmond`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const, // More frequent for local SEO
      priority: 0.95, // Higher priority for local rankings
    },
    {
      url: `${baseUrl}/locations/springvale`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    // Important pages
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // SEO landing pages - TARGET KEYWORDS
    {
      url: `${baseUrl}/microblading-melbourne`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0, // MAX PRIORITY - Main target keyword page
    },
    {
      url: `${baseUrl}/eyebrow-tattoo-melbourne`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.98, // Very high - important keyword
    },
    {
      url: `${baseUrl}/cosmetic-tattooing-melbourne`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/microblading-cost-melbourne`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.95, // High priority - commercial intent
    },
    {
      url: `${baseUrl}/microblading-healing-stages`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/microblading-vs-eyebrow-tattoo`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/eyebrow-shapes-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
  ]

  return [...routes, ...blogPosts]
}