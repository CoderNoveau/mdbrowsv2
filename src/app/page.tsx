'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import Script from 'next/script';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  // Prevent hydration errors with react-slick
  useEffect(() => {
    setMounted(true);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
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
      <div className="hero">
        {mounted && (
          <Slider {...sliderSettings}>
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
                      background: 'linear-gradient(to right, rgba(203, 192, 165, 0.7) 60%, transparent 100%)',
                      zIndex: 2
                    }}
                  />
                </div>
                <div className="slide-overlay">
                  <h1 className="slide-heading">{slide.heading}</h1>
                  {slide.subheading && <h2 className="slide-subheading">{slide.subheading}</h2>}
                  {slide.price && <div className="slide-price">{slide.price}</div>}
                  <div className="slide-buttons">
                    <a 
                      href="https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      BOOK APPOINTMENT
                    </a>
                  </div>
                  <div className="slide-phone">
                    <a href="tel:+61418188277" className="hero-phone-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                        <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/>
                      </svg>
                      Call us: 0418 188 277
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      <section className="gallery-section container" style={{ paddingTop: '0.5rem' }}>
        <h2 className="section-heading">OUR WORK GALLERY</h2>
        {/* Elfsight Instagram Feed Widget */}
        <Script src="https://static.elfsight.com/platform/platform.js" strategy="afterInteractive" />
        <div className="elfsight-app-84b79773-a065-4117-a575-67123d886124" data-elfsight-app-lazy></div>
      </section>

      <section className="services-section container">
        <h2 className="section-heading">SERVICES</h2>
        
        <div className="services-grid">
          <div className="service-card">
            <h3 className="service-title">Microblading | Eyebrow Tattooing</h3>
            <p className="service-description">
              Also known as eyebrow feathering, microblading is a semi-permanent eyebrow tattoo procedure that is carried out by our expert technicians using a special handheld microblade. Each eyebrow stroke is manually shaped and blended into the client's existing eyebrow hair which results in a more natural look.
            </p>
            <div className="service-actions">
              <Link 
                href="/services/microblading"
                className="service-link"
              >
                Learn More
              </Link>
              <a 
                href={freshaLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                BOOK APPOINTMENT
              </a>
            </div>
          </div>

          <div className="service-card">
            <h3 className="service-title">Microneedling</h3>
            <p className="service-description">
              For those looking to improve the look of wrinkles, scars or simply boost collagen for great looking skin, microneedling might can help.
            </p>
            <div className="service-actions">
              <Link 
                href="/services/microneedling"
                className="service-link"
              >
                Learn More
              </Link>
              <a 
                href={freshaLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                BOOK APPOINTMENT
              </a>
            </div>
          </div>

          <div className="service-card">
            <h3 className="service-title">Cosmetic Tattooing</h3>
            <p className="service-description">
              Cosmetic Tattooing is sometimes also referred to as semi-permanent makeup, it is a beauty treatment that involves the controlled insertion of safe colour pigments into the skin instantly improving appearance.
            </p>
            <div className="service-actions">
              <Link 
                href="/services/cosmetic-tattooing"
                className="service-link"
              >
                Learn More
              </Link>
              <a 
                href={freshaLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                BOOK APPOINTMENT
              </a>
            </div>
          </div>

          <div className="service-card">
            <h3 className="service-title">Tattoo Removal</h3>
            <p className="service-description">
              Our advanced tattoo removal techniques help fade or completely remove unwanted tattoos, including old cosmetic tattoos and microblading. Using state-of-the-art methods, we safely break down pigment particles for your body to naturally eliminate.
            </p>
            <div className="service-actions">
              <Link 
                href="/services/tattoo-removal"
                className="service-link"
              >
                Learn More
              </Link>
              <a 
                href={freshaLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                BOOK APPOINTMENT
              </a>
            </div>
          </div>

          <div className="service-card">
            <h3 className="service-title">Brow Corrections</h3>
            <p className="service-description">
              Unhappy with previous brow work? Our correction services can fix asymmetry, color issues, or poorly shaped brows. Our specialists will assess your current brows and develop a personalized plan to achieve your desired look through specialized techniques.
            </p>
            <div className="service-actions">
              <Link 
                href="/services"
                className="service-link"
              >
                Learn More
              </Link>
              <a 
                href={freshaLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                BOOK APPOINTMENT
              </a>
            </div>
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
