'use client';

import { useState } from 'react';
import Image from 'next/image';
import ResponsiveGallery from './ResponsiveGallery';

export default function GalleryGrid() {
  // Gallery images from public/images folder
  const galleryImages = [
    {
      id: '1',
      src: '/images/123604908_1248429128848330_6953079350082454213_n.jpg',
      alt: 'Microblading result - Natural brow enhancement',
      category: 'Microblading',
      width: 800,
      height: 800,
    },
    {
      id: '2',
      src: '/images/127818178_3512228795512219_7043619154800284491_n.jpg',
      alt: 'Cosmetic tattooing - Perfect brow shape',
      category: 'Cosmetic Tattooing',
      width: 800,
      height: 800,
    },
    {
      id: '3',
      src: '/images/160316993_779337922696402_9101659405131205642_n.jpg',
      alt: 'Brow correction - Asymmetry fixed',
      category: 'Brow Corrections',
      width: 800,
      height: 800,
    },
    {
      id: '4',
      src: '/images/161359823_1408238112867124_8507923638337232682_n.jpg',
      alt: 'Ombre brows - Beautiful gradient effect',
      category: 'Cosmetic Tattooing',
      width: 800,
      height: 800,
    },
    {
      id: '5',
      src: '/images/200738988_807084803537124_8618234955157045528_n.jpg',
      alt: 'Microblading - Hair stroke technique',
      category: 'Microblading',
      width: 800,
      height: 800,
    },
    // Add placeholder images for more variety
    {
      id: '6',
      src: '/images/service-microblading.webp',
      alt: 'Microblading service showcase',
      category: 'Microblading',
      width: 800,
      height: 600,
    },
    {
      id: '7',
      src: '/images/service-cosmetic-tattooing.webp',
      alt: 'Cosmetic tattooing results',
      category: 'Cosmetic Tattooing',
      width: 800,
      height: 600,
    },
    {
      id: '8',
      src: '/images/service-brow-correction.webp',
      alt: 'Brow correction transformation',
      category: 'Brow Corrections',
      width: 800,
      height: 600,
    },
  ];

  const categories = ['All', 'Microblading', 'Cosmetic Tattooing', 'Brow Corrections'];

  return (
    <div className="gallery-section">
      <ResponsiveGallery 
        images={galleryImages} 
        categories={categories}
      />
      
      <div className="gallery-cta" style={{ 
        textAlign: 'center', 
        marginTop: '3rem',
        padding: '2rem',
        background: 'linear-gradient(135deg, #f5f2ea 0%, #ffffff 100%)',
        borderRadius: '12px'
      }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--accent)', fontFamily: 'var(--serif)' }}>
          See More of Our Work
        </h3>
        <p style={{ marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          Follow us on Instagram for daily updates, behind-the-scenes content, and the latest transformations.
        </p>
        <a 
          href="https://www.instagram.com/mdbrowsau/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
          style={{ display: 'inline-block' }}
        >
          Follow @mdbrowsau
        </a>
      </div>
    </div>
  );
}