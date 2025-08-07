/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mdbrows.com.au',
  generateRobotsTxt: false, // We have a custom robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  exclude: [
    '/server-sitemap.xml',
    '/api/*',
    '/admin/*',
    '/_next/*',
    '/404',
    '/500'
  ],
  alternateRefs: [
    {
      href: 'https://mdbrows.com.au',
      hreflang: 'en-AU',
    },
  ],
  transform: async (config, path) => {
    // Homepage - highest priority
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    
    // Core service pages - very high priority
    const coreServices = [
      '/services/microblading',
      '/services/cosmetic-tattooing',
      '/services/microneedling'
    ];
    if (coreServices.includes(path)) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.95,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    
    // Other service pages
    if (path.startsWith('/services/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    
    // Location pages - critical for local SEO
    if (path.startsWith('/locations/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    
    // Pricing page - high conversion value
    if (path === '/pricing') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    
    // Gallery - visual proof/social proof
    if (path === '/gallery') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.85,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    
    // Blog listing page
    if (path === '/blog') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.8,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    
    // Individual blog posts
    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.75,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    
    // FAQ - important for featured snippets
    if (path === '/faq') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    
    // About and contact pages
    if (path === '/about' || path === '/contact') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    
    // Reviews page
    if (path.includes('/reviews')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.75,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    
    // SEO landing pages (if they exist)
    const seoPages = [
      '/microblading-melbourne',
      '/eyebrow-tattoo-melbourne',
      '/cosmetic-tattooing-melbourne',
      '/microblading-cost-melbourne',
      '/microblading-healing-stages',
      '/microblading-vs-eyebrow-tattoo',
      '/eyebrow-shapes-guide'
    ];
    if (seoPages.includes(path)) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.85,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      };
    }
    
    // Default for other pages
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  
  // Additional options for better SEO
  additionalPaths: async (config) => {
    const result = [];
    
    // Add any dynamic routes that might not be automatically discovered
    const dynamicPaths = [
      '/services/microblading-richmond',
      '/services/microblading-springvale',
      '/locations/richmond',
      '/locations/springvale'
    ];
    
    for (const path of dynamicPaths) {
      result.push(await config.transform(config, path));
    }
    
    return result;
  },
};