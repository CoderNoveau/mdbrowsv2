'use client';

import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ElfsightWidget from '@/components/ElfsightWidget';
import ClientSeo from '@/components/ClientSeo';

export default function Home() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <>
      <ClientSeo
        title="Melbourne Designer Brows | Microblading & Cosmetic Tattooing Specialists"
        description="Melbourne's premier studio for microblading, cosmetic tattooing, and eyebrow services. Our expert artists create beautiful, natural-looking results tailored to your unique features."
        canonical="https://mdbrows.com.au/"
        ogImage="/images/goldlogo-full.jpg"
      />
      
      <Hero />

      <section className="gallery-section container" style={{ paddingTop: '0.5rem' }}>
        <h2 className="section-heading">OUR WORK GALLERY</h2>
        <ElfsightWidget widgetId="84b79773-a065-4117-a575-67123d886124" />
      </section>

      <section className="reviews-section">
        <div className="reviews-section-inner">
          <h2 className="section-heading">WHAT OUR CLIENTS SAY</h2>
          <ElfsightWidget widgetId="afd7ee50-4343-4814-9241-4e0645a154b7" />
        </div>
      </section>

      <section id="services" className="page-section">
        <div className="page-section-inner">
          <h2 className="page-section-heading">OUR SERVICES</h2>
          <div className="beauty-services">
            <div className="beauty-service">
              <div className="service-image-wrapper">
                <div className="service-image service-image-microblading"></div>
              </div>
              <div className="service-content">
                <h3 className="beauty-service-title">Microblading</h3>
                <p className="beauty-service-description">
                  Transform your eyebrows with our precision microblading technique. 
                  This semi-permanent procedure creates natural-looking, hair-like strokes
                  that enhance your features and create the perfect brow shape for your face.
                  Enjoy waking up with perfect brows every day.
                </p>
                <div className="service-actions">
                  <Link href="/services/microblading" className="service-details-link">View Details</Link>
                  <a href={freshaLink} target="_blank" rel="noopener noreferrer" className="btn-book-now">Book Now</a>
                </div>
              </div>
            </div>
            
            <div className="beauty-service">
              <div className="service-image-wrapper">
                <div className="service-image service-image-cosmetic"></div>
              </div>
              <div className="service-content">
                <h3 className="beauty-service-title">Cosmetic Tattooing</h3>
                <p className="beauty-service-description">
                  From eyeliner to lips, our cosmetic tattooing services offer 
                  long-lasting enhancement with minimal maintenance. Our expert technicians
                  use state-of-the-art equipment and techniques to create subtle, natural-looking
                  results that enhance your natural beauty.
                </p>
                <div className="service-actions">
                  <Link href="/services/cosmetic-tattooing" className="service-details-link">View Details</Link>
                  <a href={freshaLink} target="_blank" rel="noopener noreferrer" className="btn-book-now">Book Now</a>
                </div>
              </div>
            </div>
            
            <div className="beauty-service">
              <div className="service-image-wrapper">
                <div className="service-image service-image-microneedling"></div>
              </div>
              <div className="service-content">
                <h3 className="beauty-service-title">Microneedling</h3>
                <p className="beauty-service-description">
                  Rejuvenate your skin with our advanced microneedling treatments. 
                  This minimally invasive procedure stimulates collagen production to reduce
                  fine lines, acne scars, and improve overall skin texture and tone. Experience
                  the benefits of younger, firmer, and more radiant skin.
                </p>
                <div className="service-actions">
                  <Link href="/services/microneedling" className="service-details-link">View Details</Link>
                  <a href={freshaLink} target="_blank" rel="noopener noreferrer" className="btn-book-now">Book Now</a>
                </div>
              </div>
            </div>
            
            <div className="beauty-service">
              <div className="service-image-wrapper">
                <div className="service-image service-image-correction"></div>
              </div>
              <div className="service-content">
                <h3 className="beauty-service-title">Brow Corrections</h3>
                <p className="beauty-service-description">
                  Not happy with a previous microblading or tattooing experience? Our correction
                  services can help transform uneven, discolored, or poorly shaped brows into
                  the beautiful eyebrows you deserve. Our specialists are trained in the latest
                  correction techniques to achieve optimal results.
                </p>
                <div className="service-actions">
                  <Link href="/services/brow-corrections" className="service-details-link">View Details</Link>
                  <a href={freshaLink} target="_blank" rel="noopener noreferrer" className="btn-book-now">Book Now</a>
                </div>
              </div>
            </div>
            
            <div className="beauty-service">
              <div className="service-image-wrapper">
                <div className="service-image service-image-removal"></div>
              </div>
              <div className="service-content">
                <h3 className="beauty-service-title">Tattoo Removal</h3>
                <p className="beauty-service-description">
                  Our specialized tattoo removal services use the latest techniques to safely
                  and effectively fade or remove unwanted cosmetic tattoos and microblading.
                  Our gentle approach minimizes discomfort while achieving the best possible
                  results for your skin.
                </p>
                <div className="service-actions">
                  <Link href="/services/tattoo-removal" className="service-details-link">View Details</Link>
                  <a href={freshaLink} target="_blank" rel="noopener noreferrer" className="btn-book-now">Book Now</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="view-all-services">
            <Link href="/services" className="btn btn-outline" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>VIEW ALL SERVICES</Link>
          </div>
        </div>
      </section>
    </>
  );
}
