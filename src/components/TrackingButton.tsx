'use client';

import Link from 'next/link';

interface TrackingButtonProps {
  href: string;
  className?: string;
  target?: string;
  children: React.ReactNode;
}

const TrackingButton = ({ href, className, target, children }: TrackingButtonProps) => {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'book_appointment', {
        event_category: 'engagement',
        event_label: href
      });
    }
  };

  return (
    <Link 
      href={href} 
      className={className} 
      target={target}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default TrackingButton; 