/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mdbrows.com.au',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/about/reviews',
          '/services',
          '/services/*',
          '/pricing',
          '/gallery',
          '/faq',
          '/contact',
          '/locations'
        ],
        disallow: [
          '/api/*',
          '/_next/*',
          '/static/*',
          '/*.js$',
          '/*.json$'
        ]
      },
    ],
    additionalSitemaps: [
      'https://mdbrows.com.au/sitemap.xml',
    ],
  },
  exclude: [
    '/api/*',
    '/_next/*',
    '/static/*',
    '/server-sitemap.xml',
    '/*.js',
    '/*.json'
  ],
  sitemapSize: 5000,
}; 