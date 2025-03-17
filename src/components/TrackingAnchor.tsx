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
    
    // Check if we're in development mode
    const isDev = process.env.NODE_ENV === 'development';
    console.log('Environment:', isDev ? 'development' : 'production');
    
    try {
      if (typeof window !== 'undefined') {
        console.log('Window object available');
        console.log('gtag available:', !!(window as any).gtag);
        
        if (!(window as any).gtag) {
          console.error('Google Analytics gtag not found. Make sure GA is properly initialized.');
          console.log('Available window properties:', Object.keys(window));
          // Continue with navigation even if GA fails
          console.log('Navigating to:', href);
          window.open(href, target || '_self');
          return;
        }

        // Send the event
        console.log('Attempting to send GA event...');
        (window as any).gtag('event', 'book_appointment', {
          event_category: 'engagement',
          event_label: href,
          debug_mode: isDev
        });
        console.log('GA event sent successfully');

        // Log in development
        if (isDev) {
          console.log('GA Event details:', {
            event: 'book_appointment',
            category: 'engagement',
            label: href
          });
        }
      } else {
        console.log('Window object not available');
      }

      // Small delay to ensure tracking completes before navigation
      console.log('Setting navigation timeout...');
      setTimeout(() => {
        console.log('Navigating to:', href);
        window.open(href, target || '_self');
      }, 100);
      
    } catch (error) {
      console.error('Error in TrackingAnchor:', error);
      // Log the full error details
      if (error instanceof Error) {
        console.log('Error details:', {
          message: error.message,
          stack: error.stack,
          href: href,
          target: target
        });
      } else {
        console.log('Unknown error:', error);
      }
      // Continue with navigation even if tracking fails
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