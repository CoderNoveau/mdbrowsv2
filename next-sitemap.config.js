/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mdbrows.com.au',
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
}; 