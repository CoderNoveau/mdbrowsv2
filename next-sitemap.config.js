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
    additionalSitemaps: [
      'https://www.mdbrows.com.au/sitemap.xml',
    ],
  },
  exclude: ['/server-sitemap.xml'],
  sitemapSize: 5000,
}; 