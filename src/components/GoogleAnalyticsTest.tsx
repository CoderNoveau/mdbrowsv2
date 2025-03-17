'use client';

import { useEffect } from 'react';

const GoogleAnalyticsTest = () => {
  useEffect(() => {
    // Check if gtag is defined
    if (typeof window !== 'undefined' && (window as any).gtag) {
      console.log('✅ Google Analytics (gtag) is loaded');
      
      // Test event
      try {
        (window as any).gtag('event', 'test_event', {
          event_category: 'testing',
          event_label: 'GA4 Test',
        });
        console.log('✅ Test event sent successfully');
      } catch (error) {
        console.error('❌ Error sending test event:', error);
      }
    } else {
      console.error('❌ Google Analytics (gtag) is not loaded');
    }

    // Check if dataLayer is initialized
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      console.log('✅ dataLayer is initialized');
      console.log('Current dataLayer:', (window as any).dataLayer);
    } else {
      console.error('❌ dataLayer is not initialized');
    }
  }, []);

  return null;
};

export default GoogleAnalyticsTest; 