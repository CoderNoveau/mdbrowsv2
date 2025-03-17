'use client';

interface TrackingAnchorProps {
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GA_MEASUREMENT_ID = 'G-Y2NNP8B3YY';

const TrackingAnchor = ({ href, className, target, rel, children }: TrackingAnchorProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent the default navigation
    e.preventDefault();
    console.log('Click intercepted on TrackingAnchor');
    
    try {
      if (typeof window !== 'undefined' && window.gtag) {
        // Send the conversion event
        console.log('Attempting to send GA event...');
        
        // First send a standard button click event
        window.gtag('event', 'click', {
          event_category: 'button',
          event_label: 'booking',
          value: 1,
          send_to: GA_MEASUREMENT_ID
        });

        // Then send a conversion event
        window.gtag('event', 'conversion', {
          send_to: GA_MEASUREMENT_ID,
          event_category: 'booking',
          event_label: href,
          value: 1
        });

        console.log('GA events sent successfully');

        // Navigate after a short delay
        setTimeout(() => {
          console.log('Navigating to:', href);
          window.open(href, target || '_self');
        }, 200);
      } else {
        console.error('Google Analytics not initialized');
        window.open(href, target || '_self');
      }
    } catch (error) {
      console.error('Error in TrackingAnchor:', error);
      if (error instanceof Error) {
        console.log('Error details:', {
          message: error.message,
          stack: error.stack,
          href: href
        });
      }
      window.open(href, target || '_self');
    }
  };

  return (
    <a 
      href={href} 
      className={className} 
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default TrackingAnchor; 