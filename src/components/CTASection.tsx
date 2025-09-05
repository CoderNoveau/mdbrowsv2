'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import TrackingAnchor from './TrackingAnchor';

const CTASection = memo(() => {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <section className="cta-section" aria-label="Call to action">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Transform Your Brows?</h2>
        <p className="cta-description">
          Join thousands of satisfied clients who wake up with perfect brows every day. 
          Book your consultation with Melbourne's most trusted microblading experts.
        </p>
        
        <div className="cta-buttons">
          <TrackingAnchor
            href={freshaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary cta-primary"
            trackingCategory="cta"
            trackingLabel="book-consultation"
          >
            Book Consultation
          </TrackingAnchor>
          
          <Link href="/pricing" className="btn btn-outline cta-secondary">
            View Pricing
          </Link>
        </div>
        
        <div className="cta-features">
          <div className="cta-feature">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>5-Star Rated</span>
          </div>
          
          <div className="cta-feature">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
            <span>8+ Years Experience</span>
          </div>
          
          <div className="cta-feature">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
            <span>Professional Artists</span>
          </div>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;