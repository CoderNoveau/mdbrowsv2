/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.mdbrows.com.au',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/server-sitemap.xml'],
  sitemapSize: 5000,
  transform: (config, url) => {
    // Ensure all URLs use www
    const modifiedUrl = url.replace('https://mdbrows.com.au', 'https://www.mdbrows.com.au')
    return {
      loc: modifiedUrl,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  }
} 