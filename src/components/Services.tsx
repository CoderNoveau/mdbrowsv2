'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TrackingAnchor from './TrackingAnchor';

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  href: string;
  popular?: boolean;
}

const Services = memo(() => {
  const services: Service[] = [
    {
      id: 'microblading',
      title: 'Microblading',
      description: 'Natural hair-like strokes that create perfectly shaped eyebrows. Our signature technique lasts 12-18 months.',
      price: 'From $595',
      duration: '2.5 hours',
      image: '/images/service-microblading.webp',
      href: '/services/microblading',
      popular: true,
    },
    {
      id: 'cosmetic-tattooing',
      title: 'Cosmetic Tattooing',
      description: 'Semi-permanent makeup for brows, lips, and eyeliner. Wake up beautiful every day.',
      price: 'From $495',
      duration: '2-3 hours',
      image: '/images/service-cosmetic-tattooing.webp',
      href: '/services/cosmetic-tattooing',
    },
    {
      id: 'ombre-brows',
      title: 'Ombré Powder Brows',
      description: 'Soft powder effect that creates a gradient look. Perfect for oily skin types.',
      price: 'From $550',
      duration: '2.5 hours',
      image: '/images/placeholder-cosmetic-tattooing.webp',
      href: '/services/microblading#ombre',
      popular: true,
    },
    {
      id: 'microneedling',
      title: 'Microneedling',
      description: 'Rejuvenate your skin with collagen induction therapy. Reduces scars and fine lines.',
      price: 'From $350',
      duration: '1.5 hours',
      image: '/images/service-microneedling.webp',
      href: '/services/microneedling',
    },
    {
      id: 'brow-corrections',
      title: 'Brow Corrections',
      description: 'Fix previous work with our expert correction services. Color and shape adjustments.',
      price: 'From $695',
      duration: '3 hours',
      image: '/images/service-brow-correction.webp',
      href: '/services/brow-corrections',
    },
    {
      id: 'tattoo-removal',
      title: 'Tattoo Removal',
      description: 'Safe and effective removal of unwanted cosmetic tattoos using latest techniques.',
      price: 'From $250',
      duration: '1 hour',
      image: '/images/service-tattoo-removal.webp',
      href: '/services/tattoo-removal',
    },
  ];

  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <section id="services" className="services-section" aria-label="Our Services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
            <span className="title-accent">Our</span>
            <span className="title-main">Services</span>
          </h2>
          <p className="services-subtitle">
            Professional cosmetic tattooing services delivered by Melbourne's most experienced artists
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              {service.popular && (
                <span className="service-badge">Popular</span>
              )}
              
              <Link href={service.href} className="service-image-link">
                <div className="service-image-wrapper">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="service-image"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="service-image-overlay">
                    <span className="service-view-more">Learn More</span>
                  </div>
                </div>
              </Link>

              <div className="service-content">
                <h3 className="service-title">
                  <Link href={service.href}>{service.title}</Link>
                </h3>
                
                <p className="service-description">{service.description}</p>
                
                <div className="service-meta">
                  <div className="service-price">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                    </svg>
                    <span>{service.price}</span>
                  </div>
                  <div className="service-duration">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z"/>
                      <path d="M8 16A8 8 0 108 0a8 8 0 000 16zm7-8A7 7 0 111 8a7 7 0 0114 0z"/>
                    </svg>
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div className="service-actions">
                  <Link href={service.href} className="btn btn-outline service-details-btn">
                    View Details
                  </Link>
                  <TrackingAnchor
                    href={freshaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary service-book-btn"
                    trackingCategory="services"
                    trackingLabel={`book-${service.id}`}
                  >
                    Book Now
                  </TrackingAnchor>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="services-footer">
          <Link href="/services" className="btn btn-outline view-all-btn">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;