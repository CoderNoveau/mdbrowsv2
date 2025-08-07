'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TrackingAnchor from './TrackingAnchor';
import './Hero.css';

const Hero = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      title: 'Perfect Brows,',
      subtitle: 'Every Day',
      description: 'Award-winning microblading & cosmetic tattooing in Melbourne',
      cta: 'Book Consultation',
      ctaLink: 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429',
      image: {
        desktop: '/images/hero1.webp',
        tablet: '/images/hero1-tablet.webp',
        mobile: '/images/hero1-mobile.webp',
      }
    },
    {
      id: 2,
      title: 'Natural Looking',
      subtitle: 'Microblading',
      description: 'Wake up with perfect eyebrows that last up to 2 years',
      cta: 'View Services',
      ctaLink: '/services',
      image: {
        desktop: '/images/hero2.webp',
        tablet: '/images/hero2-tablet.webp',
        mobile: '/images/hero2-mobile.webp',
      }
    },
    {
      id: 3,
      title: 'Expert Artists',
      subtitle: '10+ Years Experience',
      description: 'Melbourne\'s most trusted cosmetic tattoo specialists',
      cta: 'Meet Our Team',
      ctaLink: '/about',
      image: {
        desktop: '/images/hero3.webp',
        tablet: '/images/hero3-tablet.webp',
        mobile: '/images/hero3-mobile.webp',
      }
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  // Mark as loaded for animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    // Resume auto-advance after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  }, [slides.length]);

  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <section className={`hero-section ${isLoaded ? 'loaded' : ''}`} aria-label="Hero carousel">
      <div className="hero-container">
        {/* Slides */}
        <div className="hero-slides">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-slide-item ${index === currentSlide ? 'active' : ''} ${
                index < currentSlide ? 'prev' : index > currentSlide ? 'next' : ''
              }`}
              aria-hidden={index !== currentSlide}
            >
              {/* Background Image */}
              <div className="hero-bg-wrapper">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={slide.image.desktop}
                  />
                  <source
                    media="(min-width: 640px)"
                    srcSet={slide.image.tablet}
                  />
                  <Image
                    src={slide.image.mobile}
                    alt={`${slide.title} ${slide.subtitle}`}
                    fill
                    priority={index === 0}
                    quality={90}
                    className="hero-bg-image"
                    sizes="100vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </picture>
                <div className="hero-gradient-overlay" />
              </div>

              {/* Content */}
              <div className="hero-content-wrapper">
                <div className="hero-content-box">
                  <h1 className="hero-heading">
                    <span className="hero-heading-main">{slide.title}</span>
                    <span className="hero-heading-accent">{slide.subtitle}</span>
                  </h1>
                  <p className="hero-text">{slide.description}</p>
                  
                  <div className="hero-buttons">
                    {slide.ctaLink.startsWith('http') ? (
                      <TrackingAnchor
                        href={slide.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-hero"
                        trackingCategory="hero"
                        trackingLabel={`hero-slide-${index + 1}`}
                      >
                        {slide.cta}
                        <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </TrackingAnchor>
                    ) : (
                      <Link href={slide.ctaLink} className="btn btn-primary btn-hero">
                        {slide.cta}
                        <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    )}
                    <Link href="/gallery" className="btn btn-glass btn-hero">
                      View Gallery
                      <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 7L14 10L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>

                  {/* Trust Badges */}
                  <div className="hero-badges">
                    <div className="badge-item">
                      <svg className="badge-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                      <span>5.0 Rating</span>
                    </div>
                    <div className="badge-item">
                      <svg className="badge-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm5 7.59l-6.5 6.5a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l2.47 2.47 5.97-5.97a.75.75 0 011.06 1.06z"/>
                      </svg>
                      <span>150+ Reviews</span>
                    </div>
                    <div className="badge-item">
                      <svg className="badge-icon" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2l2.39 4.84 5.34.78-3.86 3.77.91 5.33L10 14.18l-4.78 2.54.91-5.33L2.27 7.62l5.34-.78L10 2z"/>
                      </svg>
                      <span>10+ Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="hero-nav hero-nav-prev"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          className="hero-nav hero-nav-next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="hero-dots" role="tablist">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentSlide}
              role="tab"
            >
              <span className="dot-progress" />
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a href="#services" className="hero-scroll" aria-label="Scroll to services">
          <span className="scroll-label">Scroll</span>
          <svg className="scroll-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;