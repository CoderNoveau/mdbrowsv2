'use client';

import React, { memo, useCallback } from 'react';

interface TrackingAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  trackingCategory?: string;
  trackingLabel?: string;
  trackingValue?: number;
}

const TrackingAnchor = memo(({ 
  children, 
  onClick,
  trackingCategory = 'engagement',
  trackingLabel,
  trackingValue = 1,
  ...props 
}: TrackingAnchorProps) => {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    // Send analytics event without blocking navigation
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: trackingCategory,
        event_label: trackingLabel || props.href,
        value: trackingValue,
        transport_type: 'beacon' // Ensures event is sent even if page navigates
      });
    }
    
    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }
  }, [onClick, trackingCategory, trackingLabel, trackingValue, props.href]);

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
});

TrackingAnchor.displayName = 'TrackingAnchor';

export default TrackingAnchor;