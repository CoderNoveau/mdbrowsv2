'use client';

import React, { useEffect, useState, memo, useCallback } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

const slides = [
  {
    image: {
      desktop: '/images/hero1.webp',
      tablet: '/images/hero1-tablet.webp',
      mobile: '/images/hero1-mobile.webp',
    },
    heading: 'MICROBLADING',
    subheading: 'LIMITED TIME ONLY',
    price: '$595',
    alt: 'Microbladed brows close-up',
  },
  {
    image: {
      desktop: '/images/hero2.webp',
      tablet: '/images/hero2-tablet.webp',
      mobile: '/images/hero2-mobile.webp',
    },
    heading: 'WAKE UP WITH PERFECT EYEBROWS',
    subheading: 'EVERY DAY',
    alt: 'Client with tinted brows',
  },
  {
    image: {
      desktop: '/images/hero3.webp',
      tablet: '/images/hero3-tablet.webp',
      mobile: '/images/hero3-mobile.webp',
    },
    heading: 'DESIGNER BROWS AWAIT YOU',
    subheading: 'BOOK TODAY',
    alt: 'Springvale salon interior',
  },
];

// Memoized slide content component
const SlideContent = memo(({ slide, isVisible, getAnimationClass }: {
  slide: typeof slides[0];
  isVisible: boolean;
  getAnimationClass: (baseClass: string) => string;
}) => (
  <div className={`hero-content ${isVisible ? 'hero-content-visible' : 'hero-content-hidden'}`}>
    <div className="slide-text-container">
      <h1 className={getAnimationClass('slide-heading')}>
        {slide.heading}
      </h1>
      {slide.subheading && (
        <h2 className={getAnimationClass('slide-subheading')}>
          {slide.subheading}
        </h2>
      )}
      {slide.price && (
        <div className={getAnimationClass('slide-price')}>
          {slide.price}
        </div>
      )}
    </div>
    <div className={getAnimationClass('slide-buttons')}>
      <a 
        href="https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429" 
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        BOOK APPOINTMENT
      </a>
    </div>
    <div className={getAnimationClass('slide-phone')}>
      <a href="tel:+61418188277" className="hero-phone-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
          <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/>
        </svg>
        Call us: 0418 188 277
      </a>
    </div>
  </div>
));

// Memoized slide component
const Slide: React.FC<{ slide: typeof slides[0] }> = ({ slide }) => (
  <div className="slide">
    <div style={{ position: 'relative', width: '100%', height: '80vh', backgroundColor: '#f9ebeb' }}>
      <Image
        src={slide.image.mobile}
        alt={slide.alt}
        fill
        priority={true}
        className="slide-image"
        quality={75}
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qQEBALkE6Oz5DRVlLT0xXY1xbZF9kZ2R5Z1xkY1//2wBDARUXFyAeIBohHh4hRSgkKEVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUX/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
      <div 
        className="slide-side-overlay" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '40%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)',
          zIndex: 2
        }}
      />
    </div>
  </div>
);
Slide.displayName = 'Slide';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [sliderInitialized, setSliderInitialized] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSliderInitialized(true);
  }, []);

  const getAnimationClass = useCallback((baseClass: string) => {
    return animating ? `${baseClass} hide-animation` : `${baseClass} show-animation`;
  }, [animating]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: mounted,
    autoplaySpeed: 7000,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    lazyLoad: 'progressive' as const,
    beforeChange: (_oldIndex: number, newIndex: number) => {
      if (!mounted) return;
      setAnimating(true);
      setCurrentSlide(newIndex);
    },
    afterChange: (index: number) => {
      if (!mounted) return;
      setCurrentSlide(index);
      setAnimating(false);
    }
  };

  if (!mounted || !sliderInitialized) {
    return (
      <div className="hero" style={{ position: 'relative' }}>
        <div className="hero-slider-container">
          <Slide slide={slides[0]} />
        </div>
        <div className="hero-content-overlay">
          <SlideContent
            slide={slides[0]}
            isVisible={true}
            getAnimationClass={(baseClass) => `${baseClass} show-animation`}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="hero" style={{ position: 'relative' }}>
      <div className="hero-slider-container">
        <Slider {...sliderSettings} className="hero-slider">
          {slides.map((slide, index) => (
            <Slide key={index} slide={slide} />
          ))}
        </Slider>
      </div>

      <div className="hero-content-overlay">
        {slides.map((slide, index) => (
          <SlideContent
            key={`content-${index}`}
            slide={slide}
            isVisible={index === currentSlide}
            getAnimationClass={getAnimationClass}
          />
        ))}
      </div>
    </div>
  );
};
Hero.displayName = 'Hero';

export default Hero; 