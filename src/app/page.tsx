'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import Script from 'next/script';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  // Prevent hydration errors with react-slick
  useEffect(() => {
    setMounted(true);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    fade: true,
    cssEase: 'ease-in-out',
    beforeChange: (oldIndex: number, newIndex: number) => {
      // Set animating flag to true when slide transition starts
      setAnimating(true);
      // Pre-emptively update the current slide for smoother content transition
      setCurrentSlide(newIndex);
    },
    afterChange: (index: number) => {
      // Update current slide and reset animating flag after transition completes
      setCurrentSlide(index);
      // Short delay to ensure slide is fully visible before starting animations
      setTimeout(() => {
        setAnimating(false);
      }, 50);
    }
  };

  const slides = [
    {
      image: '/images/hero1.webp',
      heading: 'MICROBLADING',
      subheading: 'LIMITED TIME ONLY',
      price: '$595',
      alt: 'Microbladed brows close-up',
    },
    {
      image: '/images/hero2.webp',
      heading: 'WAKE UP WITH PERFECT EYEBROWS',
      subheading: 'EVERY DAY',
      alt: 'Client with tinted brows',
    },
    {
      image: '/images/hero3.webp',
      heading: 'DESIGNER BROWS AWAIT YOU',
      subheading: 'BOOK TODAY',
      alt: 'Springvale salon interior',
    },
  ];

  // CSS class names for animated elements based on current state
  const getAnimationClass = (baseClass: string) => {
    return animating ? `${baseClass} hide-animation` : `${baseClass} show-animation`;
  };

  const reviews = [
    {
      name: "Clodagh Lynch",
      text: "Just got my brows done and I absolutely love them. Anne is a genius. I'll be back 100%",
      time: "1 year ago"
    },
    {
      name: "Madi Lia",
      text: "I have been insecure about my eyebrows for as long as I can remember. Booking this experience with Anne has been absolutely life changing! I've never met someone so lovely and caring, she truly made sure I was comfortable and made it clear from the beginning that nothing would be done without me being 100% on board and happy! She absolutely loves what she does and it shows! She is incredibly professional and I couldn't recommend someone more!",
      time: "1 year ago"
    },
    {
      name: "Louise Ayoubi",
      text: "I had my eyebrows done by Anne, she is amazing, very professional made me feel very welcome, explained everything and made sure l was happy from start to finish. I highly recommend Anne as she is a beautiful caring person and knows what she is doing. 😊",
      time: "1 year ago"
    }
  ];

  return (
    <>
      <div className="hero" style={{ position: 'relative' }}>
        {mounted && (
          <>
            {/* Slider containing ONLY images */}
            <div className="hero-slider-container">
              <Slider {...sliderSettings} className="hero-slider">
                {slides.map((slide, index) => (
                  <div key={index} className="slide">
                    <div style={{ position: 'relative', width: '100%', height: '80vh', backgroundColor: '#f9ebeb' }}>
        <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        priority={true}
                        className="slide-image"
                        sizes="100vw"
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
                ))}
              </Slider>
            </div>

            {/* Content overlay - no separate background */}
            <div className="hero-content-overlay">
              {slides.map((slide, index) => (
                <div 
                  key={`content-${index}`} 
                  className={`hero-content ${index === currentSlide ? 'hero-content-visible' : 'hero-content-hidden'}`}
                >
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
              ))}
            </div>
          </>
        )}
      </div>

      <section className="gallery-section container" style={{ paddingTop: '0.5rem' }}>
        <h2 className="section-heading">OUR WORK GALLERY</h2>
        {/* Elfsight Instagram Feed Widget */}
        <Script src="https://static.elfsight.com/platform/platform.js" strategy="afterInteractive" />
        <div className="elfsight-app-84b79773-a065-4117-a575-67123d886124" data-elfsight-app-lazy></div>
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
                <div className="beauty-service-footer">
                  <a href="/services/microblading" className="service-details-link">View Details</a>
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
                <div className="beauty-service-footer">
                  <a href="/services/cosmetic-tattooing" className="service-details-link">View Details</a>
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
                <div className="beauty-service-footer">
                  <a href="/services/microneedling" className="service-details-link">View Details</a>
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
                <div className="beauty-service-footer">
                  <a href="/services/brow-corrections" className="service-details-link">View Details</a>
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
                <div className="beauty-service-footer">
                  <a href="/services/tattoo-removal" className="service-details-link">View Details</a>
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

      <section className="reviews-section container">
        <h2 className="section-heading">REVIEWS</h2>
        {/* Elfsight Google Reviews Widget */}
        <Script src="https://static.elfsight.com/platform/platform.js" strategy="afterInteractive" />
        <div className="elfsight-app-afd7ee50-4343-4814-9241-4e0645a154b7" data-elfsight-app-lazy></div>
      </section>

      <section className="contact-section container">
        <h2 className="section-heading">GET IN TOUCH</h2>
        <div className="contact-info-home">
          <p className="contact-phone">
            <strong>Call us:</strong> <a href="tel:+61418188277" className="footer-link">0418 188 277</a>
          </p>
          <p className="contact-email">
            <strong>Email:</strong> <a href="mailto:info@mdbrows.com.au" className="footer-link">info@mdbrows.com.au</a>
          </p>
        </div>
        <a
          href={freshaLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary center-btn"
        >
          BOOK APPOINTMENT
        </a>
      </section>
    </>
  );
}
