'use client';

import Script from 'next/script';

// Declare GA ID as a constant
const GA_ID = 'G-Y2NNP8B3YY';

const GoogleAnalytics = () => {
  return (
    <Script
      id="google-analytics"
      strategy="lazyOnload"
    >
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}

        if (typeof window !== 'undefined') {
          const script = document.createElement('script');
          script.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
          script.async = true;
          document.head.appendChild(script);

          script.onload = function() {
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              send_page_view: true,
              debug_mode: ${process.env.NODE_ENV === 'development'}
            });
          };
        }
      `}
    </Script>
  );
};

export default GoogleAnalytics; 