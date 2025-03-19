import React from 'react';
import { Metadata } from 'next';
import ElfsightWidget from '@/components/ElfsightWidget';
import ClientSeo from '@/components/ClientSeo';

export const metadata: Metadata = {
  title: 'Microblading Near Me Melbourne | Richmond & Springvale | Melbourne Designer Brows',
  description: 'Visit our convenient microblading studios in Richmond and Springvale, Melbourne. Expert eyebrow services at both locations. Easy booking and free consultations available.',
};

export default function Locations() {
  return (
    <div className="page-content">
      <ClientSeo
        title="Our Locations | Melbourne Designer Brows"
        description="Visit our convenient locations in Richmond and Springvale. Melbourne Designer Brows offers premium microblading and cosmetic tattooing services."
        canonical="https://mdbrows.com.au/locations"
        ogType="website"
      />
      
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
            <ElfsightWidget widgetId="b28e1104-b9c6-4171-9f26-e2562ecd3ae2" />
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
            <ElfsightWidget widgetId="4c5fa5e7-825f-41ca-aab1-bdd16c9c092d" />
          </div>
        </div>
      </div>
    </div>
  );
}
