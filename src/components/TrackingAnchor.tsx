'use client';

interface TrackingAnchorProps {
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

const TrackingAnchor = ({ href, className, target, rel, children }: TrackingAnchorProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent the default navigation
    e.preventDefault();
    console.log('Click intercepted on TrackingAnchor');
    
    try {
      if (typeof window !== 'undefined') {
        console.log('Window object available');
        console.log('gtag available:', !!(window as any).gtag);
        
        if (!(window as any).gtag) {
          console.error('Google Analytics gtag not found. Make sure GA is properly initialized.');
          window.open(href, target || '_self');
          return;
        }

        // First, ensure measurement ID is configured
        (window as any).gtag('config', 'G-Y2NNP8B3YY', {
          debug_mode: true
        });

        // Then send a simple conversion event
        console.log('Attempting to send GA event...');
        (window as any).gtag('event', 'conversion', {
          send_to: 'G-Y2NNP8B3YY',
          event_category: 'booking',
          event_label: href,
          value: 1
        });

        // Also send a standard GA4 event
        (window as any).gtag('event', 'generate_lead', {
          send_to: 'G-Y2NNP8B3YY',
          currency: 'AUD',
          value: 1,
          source: 'website',
          medium: 'booking_button'
        });

        console.log('GA events sent successfully');

        // Small delay to ensure tracking completes before navigation
        console.log('Setting navigation timeout...');
        setTimeout(() => {
          console.log('Navigating to:', href);
          window.open(href, target || '_self');
        }, 200); // Increased timeout slightly
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