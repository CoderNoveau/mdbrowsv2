'use client';

interface TrackingAnchorProps {
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

const TrackingAnchor = ({ href, className, target, rel, children }: TrackingAnchorProps) => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'book_appointment', {
        event_category: 'engagement',
        event_label: href
      });
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