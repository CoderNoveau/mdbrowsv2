import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* This ensures canonical URLs are included in the static export */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var pathSegments = window.location.pathname.split('/');
                var path = window.location.pathname;
                
                // Remove trailing slash if needed for canonical URL
                if (path.endsWith('/') && path.length > 1) {
                  path = path.slice(0, -1);
                }
                
                // Create canonical link if it doesn't exist
                var canonical = document.querySelector('link[rel="canonical"]');
                if (!canonical) {
                  var link = document.createElement('link');
                  link.rel = 'canonical';
                  link.href = 'https://mdbrows.com.au' + path;
                  document.head.appendChild(link);
                }
              })();
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 