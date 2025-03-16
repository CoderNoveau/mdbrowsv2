import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/images/goldlogo-full.jpg" as="image" />
        
        {/* Add DNS prefetch */}
        <link rel="dns-prefetch" href="https://static.elfsight.com" />
        
        {/* Add meta tags for better caching */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 