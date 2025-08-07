import React from 'react';
import { Metadata } from 'next';
import ElfsightWidget from '@/components/ElfsightWidget';
import Script from 'next/script';
import Image from 'next/image';
import TrackingAnchor from '@/components/TrackingAnchor';

export const metadata: Metadata = {
  title: 'Our Locations | Melbourne Designer Brows',
  description: 'Visit our premium microblading and cosmetic tattooing studios in Melbourne. Directions and contact information for both our Richmond and Springvale locations.',
  alternates: {
    canonical: 'https://mdbrows.com.au/locations',
  },
  openGraph: {
    title: 'Our Locations | Melbourne Designer Brows',
    description: 'Visit our premium microblading and cosmetic tattooing studios in Melbourne. Directions and contact information for both our Richmond and Springvale locations.',
    url: 'https://mdbrows.com.au/locations',
    images: [{
      url: 'https://mdbrows.com.au/images/locations-banner.webp',
    }],
    type: 'website',
  },
};

export default function Locations() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <h1 className="page-section-heading">Our Studio Locations</h1>
      
      <div className="locations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        {/* Richmond Location */}
        <div className="location-block">
          <div className="location" style={{ textAlign: 'center', padding: '1.5rem', borderRadius: '8px', backgroundColor: '#f9f7f3', marginBottom: '1rem' }}>
            <h2 className="contact-heading">Richmond Branch</h2>
            <p className="contact-detail">
              Level 1, 382A Bridge Rd<br />RICHMOND VIC 3122
            </p>
          </div>
          <div className="location-map" style={{ borderRadius: '8px', overflow: 'hidden', height: '400px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <ElfsightWidget widgetId="b28e1104-b9c6-4171-9f26-e2562ecd3ae2" />
          </div>
        </div>

        {/* Springvale Location */}
        <div className="location-block">
          <div className="location" style={{ textAlign: 'center', padding: '1.5rem', borderRadius: '8px', backgroundColor: '#f9f7f3', marginBottom: '1rem' }}>
            <h2 className="contact-heading">Springvale Branch</h2>
            <p className="contact-detail">
              Shop 4, 218 Springvale Rd<br />SPRINGVALE VIC 3171
            </p>
          </div>
          <div className="location-map" style={{ borderRadius: '8px', overflow: 'hidden', height: '400px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
            <ElfsightWidget widgetId="4c5fa5e7-825f-41ca-aab1-bdd16c9c092d" />
          </div>
        </div>
      </div>
    </div>
  );
}
