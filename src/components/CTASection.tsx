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
              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
            </svg>
            <span>Free Consultation</span>
          </div>
          
          <div className="cta-feature">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>5-Star Rated</span>
          </div>
          
          <div className="cta-feature">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            <span>100% Safe</span>
          </div>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;