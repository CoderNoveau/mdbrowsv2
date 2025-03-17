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
    
    // Check if we're in development mode
    const isDev = process.env.NODE_ENV === 'development';
    
    try {
      if (typeof window !== 'undefined') {
        if (!(window as any).gtag) {
          console.error('Google Analytics gtag not found. Make sure GA is properly initialized.');
          // Continue with navigation even if GA fails
          window.open(href, target || '_self');
          return;
        }

        // Send the event
        (window as any).gtag('event', 'book_appointment', {
          event_category: 'engagement',
          event_label: href,
          debug_mode: isDev
        });

        // Log in development
        if (isDev) {
          console.log('GA Event sent:', {
            event: 'book_appointment',
            category: 'engagement',
            label: href
          });
        }
      }

      // Small delay to ensure tracking completes before navigation
      setTimeout(() => {
        window.open(href, target || '_self');
      }, 100);
      
    } catch (error) {
      console.error('Error sending GA event:', error);
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