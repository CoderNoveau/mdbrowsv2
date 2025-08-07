'use client';

import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    
    // Enable analytics after consent
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
    
    // Disable analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-label="Cookie consent">
      <div className="cookie-consent-inner">
        <p className="cookie-consent-text">
          We use cookies to enhance your browsing experience and analyze our traffic. 
          By clicking "Accept", you consent to our use of cookies.
        </p>
        <div className="cookie-consent-actions">
          <button 
            onClick={acceptCookies}
            className="btn btn-primary cookie-consent-accept"
            aria-label="Accept cookies"
          >
            Accept
          </button>
          <button 
            onClick={declineCookies}
            className="btn btn-outline cookie-consent-decline"
            aria-label="Decline cookies"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;