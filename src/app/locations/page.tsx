import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Our Locations | Melbourne Designer Brows',
  description: 'Visit our convenient locations in Richmond and Springvale. Melbourne Designer Brows offers premium microblading and cosmetic tattooing services.',
};

export default function Locations() {
  return (
    <div className="page-content">
      <h2 className="page-section-heading">OUR LOCATIONS</h2>
      
      <div className="locations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        {/* Richmond Location */}
        <div className="location-block">
          <div className="location" style={{ textAlign: 'center', padding: '1.5rem', borderRadius: '8px', backgroundColor: '#f9f7f3', marginBottom: '1rem' }}>
            <h3 className="contact-heading">Richmond Branch</h3>
            <p className="contact-detail">
              Level 1, 382A Bridge Rd<br />RICHMOND VIC 3122
            </p>
          </div>
          <div className="location-map" style={{ borderRadius: '8px', overflow: 'hidden', height: '400px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <div className="elfsight-app-b28e1104-b9c6-4171-9f26-e2562ecd3ae2" data-elfsight-app-lazy></div>
          </div>
        </div>

        {/* Springvale Location */}
        <div className="location-block">
          <div className="location" style={{ textAlign: 'center', padding: '1.5rem', borderRadius: '8px', backgroundColor: '#f9f7f3', marginBottom: '1rem' }}>
            <h3 className="contact-heading">Springvale Branch</h3>
            <p className="contact-detail">
              Shop 4, 218 Springvale Rd<br />SPRINGVALE VIC 3171
            </p>
          </div>
          <div className="location-map" style={{ borderRadius: '8px', overflow: 'hidden', height: '400px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <div className="elfsight-app-4c5fa5e7-825f-41ca-aab1-bdd16c9c092d" data-elfsight-app-lazy></div>
          </div>
        </div>
      </div>

      {/* Single Script for both widgets */}
      <Script src="https://static.elfsight.com/platform/platform.js" strategy="afterInteractive" />
    </div>
  );
}
