/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://mdbrows.com.au',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'], // Exclude server-side generated pages if any
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://mdbrows.com.au/server-sitemap.xml', // Add dynamic sitemap if needed in the future
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom transform function for changing priority and changefreq
    // Set default values for all URLs
    const defaultValues = {
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };

    // Set higher priority for important pages
    if (path === '/') {
      return {
        ...defaultValues,
        priority: 1.0,
        changefreq: 'daily',
      };
    }

    if (path.startsWith('/services/')) {
      return {
        ...defaultValues,
        priority: 0.9,
        changefreq: 'weekly',
      };
    }

    if (
      path === '/services' ||
      path === '/locations' ||
      path === '/gallery' ||
      path === '/contact'
    ) {
      return {
        ...defaultValues,
        priority: 0.8,
        changefreq: 'weekly',
      };
    }

    // For all other pages
    return defaultValues;
  },
}; 