/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mdbrows.com.au',
  generateRobotsTxt: false, // We've already created a custom robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/404', '/500'],
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    const result = [];

    // Add custom URLs with specific priorities
    result.push({
      loc: '/',
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    });

    // Services pages with high priority
    const servicePages = [
      '/services',
      '/services/microblading',
      '/services/cosmetic-tattooing',
      '/services/microneedling',
      '/services/brow-corrections',
      '/services/tattoo-removal',
    ];

    servicePages.forEach((path) => {
      result.push({
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      });
    });

    // Location pages
    const locationPages = [
      '/locations',
      '/contact',
    ];

    locationPages.forEach((path) => {
      result.push({
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    return result;
  },
}; 