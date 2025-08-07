import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TrackingAnchor from '@/components/TrackingAnchor';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Microblading Melbourne | Best Eyebrow Tattoo Melbourne | From $595',
  description: 'Award-winning microblading in Melbourne. Natural eyebrow tattoo by certified artists with 10+ years experience. Richmond & Springvale locations. Book your free consultation.',
  keywords: 'microblading Melbourne, eyebrow tattoo Melbourne, best microblading Melbourne, microblading near me, eyebrow feathering Melbourne, semi permanent eyebrows Melbourne, microblading cost Melbourne, microblading Richmond, microblading Springvale',
  openGraph: {
    title: 'Microblading Melbourne - Professional Eyebrow Tattoo Services',
    description: 'Transform your brows with Melbourne\'s #1 microblading experts. Natural results, 5-star rated, 150+ reviews.',
    images: ['/images/microblading-melbourne-og.jpg'],
  },
  alternates: {
    canonical: 'https://mdbrows.com.au/microblading-melbourne',
  },
};

export default function MicrobladingMelbourne() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  const faqItems = [
    {
      question: "How much does microblading cost in Melbourne?",
      answer: "Microblading in Melbourne typically costs between $450-$900. At Melbourne Designer Brows, our microblading service starts from $595, which includes your initial appointment and a complimentary touch-up session after 6-8 weeks."
    },
    {
      question: "How long does microblading last?",
      answer: "Microblading typically lasts 12-18 months, depending on your skin type, lifestyle, and aftercare. Oily skin types may experience faster fading, while dry skin tends to retain pigment longer."
    },
    {
      question: "Is microblading painful?",
      answer: "Most clients experience minimal discomfort. We apply a topical numbing cream before and during the procedure to ensure your comfort. Most describe it as a light scratching sensation."
    },
    {
      question: "What's the difference between microblading and eyebrow tattoo?",
      answer: "Microblading creates hair-like strokes that mimic natural brow hairs using semi-permanent pigment, lasting 12-18 months. Traditional eyebrow tattoos use permanent ink and create a solid block of color that lasts forever."
    },
    {
      question: "Can I get microblading if I have oily skin?",
      answer: "Yes, but we may recommend ombré powder brows instead, which tends to last longer on oily skin types. During your consultation, we'll assess your skin and recommend the best technique for lasting results."
    }
  ];

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://mdbrows.com.au' },
          { name: 'Microblading Melbourne', url: 'https://mdbrows.com.au/microblading-melbourne' }
        ]}
      />
      
      <ServiceSchema 
        serviceName="Microblading Melbourne"
        description="Professional microblading and eyebrow feathering in Melbourne. Natural-looking results by certified artists."
        price="595"
        duration="PT2H30M"
        ratingValue={5}
        reviewCount={150}
      />

      <section className="hero-landing">
        <div className="hero-landing-content">
          <h1 className="hero-landing-title">
            #1 Microblading Melbourne
            <span className="hero-subtitle">Natural Eyebrow Tattoo Experts</span>
          </h1>
          <p className="hero-landing-description">
            Transform your brows with Melbourne's most trusted microblading specialists. 
            10+ years experience, 150+ 5-star reviews, 2 convenient locations.
          </p>
          <div className="hero-landing-actions">
            <TrackingAnchor
              href={freshaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              trackingCategory="landing"
              trackingLabel="microblading-melbourne-hero"
            >
              Book Free Consultation
            </TrackingAnchor>
            <Link href="/gallery" className="btn btn-outline btn-lg">
              View Before & After
            </Link>
          </div>
          <div className="hero-landing-features">
            <div className="feature-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <span>5.0 Rating</span>
            </div>
            <div className="feature-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2C5.03 2 1 6.03 1 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm3.59 4L10 9.59 6.41 6 5 7.41 8.59 11 5 14.59 6.41 16 10 12.41 13.59 16 15 14.59 11.41 11 15 7.41 13.59 6z"/>
              </svg>
              <span>Certified Artists</span>
            </div>
            <div className="feature-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Safe & Sterile</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Why Choose Melbourne Designer Brows for Microblading?</h2>
              <p className="lead">
                With over 10 years of experience and 150+ satisfied clients, we're Melbourne's 
                premier destination for natural-looking microblading and eyebrow feathering.
              </p>
              
              <div className="benefits-grid">
                <div className="benefit-card">
                  <h3>Expert Artists</h3>
                  <p>Our certified technicians have performed thousands of microblading procedures with consistently stunning results.</p>
                </div>
                <div className="benefit-card">
                  <h3>Natural Results</h3>
                  <p>We create hair-like strokes that perfectly match your natural brow pattern and facial features.</p>
                </div>
                <div className="benefit-card">
                  <h3>Premium Pigments</h3>
                  <p>We use only the highest quality, organic pigments that won't change color or fade to unnatural tones.</p>
                </div>
                <div className="benefit-card">
                  <h3>Sterile Environment</h3>
                  <p>Health department approved facility with hospital-grade sterilization and single-use tools.</p>
                </div>
              </div>

              <h2>Microblading Services We Offer</h2>
              <div className="services-list">
                <div className="service-item">
                  <h3>Classic Microblading</h3>
                  <p>Traditional hair stroke technique creating natural-looking eyebrows. Perfect for those wanting a subtle enhancement.</p>
                  <p className="price">From $595</p>
                </div>
                <div className="service-item">
                  <h3>Ombré Powder Brows</h3>
                  <p>Soft powder effect ideal for oily skin types or those wanting a more defined, makeup look.</p>
                  <p className="price">From $550</p>
                </div>
                <div className="service-item">
                  <h3>Combination Brows</h3>
                  <p>Combines hair strokes with powder shading for the most natural yet defined result.</p>
                  <p className="price">From $650</p>
                </div>
              </div>

              <h2>Our Melbourne Locations</h2>
              <div className="locations-grid">
                <div className="location-card">
                  <h3>Richmond Studio</h3>
                  <p>Conveniently located in Richmond, just 5 minutes from the CBD with easy parking and public transport access.</p>
                  <Link href="/locations/richmond" className="location-link">View Richmond Location →</Link>
                </div>
                <div className="location-card">
                  <h3>Springvale Studio</h3>
                  <p>Our Springvale location serves the southeastern suburbs with the same exceptional service and results.</p>
                  <Link href="/locations/springvale" className="location-link">View Springvale Location →</Link>
                </div>
              </div>
            </div>

            <aside className="content-sidebar">
              <div className="sidebar-widget booking-widget">
                <h3>Book Your Consultation</h3>
                <p>Free 30-minute consultation to discuss your perfect brow shape and color.</p>
                <TrackingAnchor
                  href={freshaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block"
                  trackingCategory="landing"
                  trackingLabel="microblading-melbourne-sidebar"
                >
                  Book Now - It's Free
                </TrackingAnchor>
                <p className="widget-note">No deposit required for consultation</p>
              </div>

              <div className="sidebar-widget price-widget">
                <h3>Pricing</h3>
                <ul className="price-list">
                  <li>
                    <span>Microblading</span>
                    <span className="price">$595</span>
                  </li>
                  <li>
                    <span>Touch-up (6-8 weeks)</span>
                    <span className="price">Included</span>
                  </li>
                  <li>
                    <span>Annual Refresh</span>
                    <span className="price">$350</span>
                  </li>
                </ul>
              </div>

              <div className="sidebar-widget contact-widget">
                <h3>Get In Touch</h3>
                <p>Questions? We're here to help!</p>
                <a href="tel:+61390000000" className="contact-link">
                  <svg width="16" height="16" fill="currentColor">
                    <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                  Call Us
                </a>
                <Link href="/contact" className="contact-link">
                  <svg width="16" height="16" fill="currentColor">
                    <path d="M.05 3.555A2 2 0 012 2h12a2 2 0 011.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 002 14h12a2 2 0 001.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                  </svg>
                  Email Us
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <FAQSchema faqs={faqItems} />
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready for Perfect Brows?</h2>
          <p className="cta-description">
            Join thousands of Melbourne women who wake up with flawless eyebrows every day.
            Book your free consultation today and discover the perfect brow shape for your face.
          </p>
          <div className="cta-buttons">
            <TrackingAnchor
              href={freshaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary cta-primary"
              trackingCategory="landing"
              trackingLabel="microblading-melbourne-cta"
            >
              Book Free Consultation
            </TrackingAnchor>
            <Link href="/pricing" className="btn btn-outline cta-secondary">
              View Full Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}