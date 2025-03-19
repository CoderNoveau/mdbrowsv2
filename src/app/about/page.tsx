'use client';

import Script from 'next/script';
import Image from 'next/image';
import ClientSeo from '@/components/ClientSeo';
import TrackingAnchor from '@/components/TrackingAnchor';
import styles from './about.module.css';
import ElfsightWidget from '@/components/ElfsightWidget';

export const metadata = {
  title: 'About Us | Expert Brow Artists | Melbourne Designer Brows',
  description: 'Meet our expert brow artists at Melbourne Designer Brows. Specializing in microblading, cosmetic tattooing, and permanent makeup. Two convenient locations in Richmond & Springvale.',
  canonical: 'https://mdbrows.com.au/about',
  ogImage: '/images/about-banner.webp',
};

export default function About() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <ClientSeo
        title="About Us | Expert Brow Artists | Melbourne Designer Brows"
        description={metadata.description}
        canonical={metadata.canonical}
        ogImage={metadata.ogImage}
      />
      
      <h1 className="section-heading">About Melbourne Designer Brows</h1>
      
      <div className={styles.aboutContent}>
        <div className={styles.aboutImage}>
          <Image
            src="/images/richmond-room.webp"
            alt="Melbourne Designer Brows Richmond Studio"
            width={1200}
            height={800}
            className={styles.featuredImage}
            priority
          />
        </div>
        
        <div className={styles.aboutText}>
          <p className="page-text">
            Melbourne Designer Brows is your premier brow studio with locations in Richmond and Springvale, Melbourne. 
            Led by Anne, a microblading expert with years of experience, we combine Australian and international 
            techniques to deliver world-class brow artistry.
          </p>
          
          <p className="page-text">
            Our passion is transforming brows with precision and care, offering services like microblading, 
            ombré brows, and our signature combo. At Melbourne Designer Brows, we understand that perfectly 
            shaped eyebrows can enhance your natural beauty and boost your confidence.
          </p>
          
          <p className="page-text">
            Anne's artistic eye and attention to detail ensure each client receives customized brow designs 
            tailored to their unique facial features and preferences. Whether you're looking for natural-looking 
            enhancements or dramatic transformations, we have the expertise to achieve your desired look.
          </p>
          
          <p className="page-text">
            Book your appointment at our Richmond or Springvale studios via Fresha today and experience the difference 
            that professional brow artistry can make!
          </p>
        </div>
      </div>
      
      <div className="testimonial-section">
        <h2 className="section-heading">What Our Clients Say</h2>
        <ElfsightWidget widgetId="afd7ee50-4343-4814-9241-4e0645a154b7" />
      </div>
      
      <div className="booking-section">
        <h2 className="section-heading">Ready To Transform Your Brows?</h2>
        <TrackingAnchor 
          href={freshaLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary center-btn"
        >
          BOOK APPOINTMENT
        </TrackingAnchor>
      </div>
    </div>
  );
} 