import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TrackingAnchor from '@/components/TrackingAnchor';
import ServiceSchema from '@/components/ServiceSchema';
import FAQSchema from '@/components/FAQSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Eyebrow Tattoo Melbourne | MDBrows',
  description: 'Professional eyebrow tattoo in Melbourne. Cosmetic tattooing experts with 8+ years experience. Natural results using premium pigments. Book your consultation today.',
  keywords: 'eyebrow tattoo Melbourne, cosmetic tattooing Melbourne, permanent makeup Melbourne, eyebrow feathering Melbourne, powder brows Melbourne, ombre brows Melbourne, eyebrow tattoo Richmond, eyebrow tattoo Springvale',
  openGraph: {
    title: 'Eyebrow Tattoo Melbourne - Expert Cosmetic Tattooing',
    description: 'Transform your brows with Melbourne\'s leading eyebrow tattoo specialists. Natural results, certified artists, 150+ 5-star reviews.',
    images: ['/images/eyebrow-tattoo-melbourne-og.jpg'],
  },
  alternates: {
    canonical: 'https://mdbrows.com.au/eyebrow-tattoo-melbourne',
  },
};

export default function EyebrowTattooMelbourne() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  const faqItems = [
    {
      question: "What is the difference between eyebrow tattoo and microblading?",
      answer: "Eyebrow tattooing encompasses various techniques including microblading (hair strokes), powder brows (shading), and combination brows. Microblading is one type of eyebrow tattoo that creates hair-like strokes, while other techniques create different effects."
    },
    {
      question: "How long does eyebrow tattooing last?",
      answer: "Semi-permanent eyebrow tattoos typically last 12-24 months depending on the technique used, your skin type, and aftercare. Traditional permanent tattoos last forever but may fade and change color over time."
    },
    {
      question: "Is eyebrow tattooing safe?",
      answer: "Yes, when performed by certified professionals in a sterile environment. We use hospital-grade sterilization, single-use needles, and premium organic pigments that are TGA-approved for cosmetic use."
    },
    {
      question: "What techniques do you offer for eyebrow tattooing?",
      answer: "We offer microblading (hair strokes), powder brows (soft shading), ombre brows (gradient effect), and combination brows (strokes + shading). Your artist will recommend the best technique based on your skin type and desired look."
    },
    {
      question: "How much does eyebrow tattooing cost in Melbourne?",
      answer: "Eyebrow tattooing in Melbourne ranges from $450-$900. Our services start from $550 and include your initial appointment plus a complimentary touch-up session after 6-8 weeks to perfect your results."
    },
    {
      question: "What is the healing process like?",
      answer: "Healing takes about 4-6 weeks. Initially, brows appear darker, then lighten as they heal. You'll experience light scabbing around days 4-10, which naturally sheds to reveal your final color. We provide detailed aftercare instructions."
    }
  ];

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://mdbrows.com.au' },
          { name: 'Eyebrow Tattoo Melbourne', url: 'https://mdbrows.com.au/eyebrow-tattoo-melbourne' }
        ]}
      />
      
      <ServiceSchema 
        serviceName="Eyebrow Tattoo Melbourne"
        description="Professional eyebrow tattooing and cosmetic tattooing services in Melbourne. Expert artists, natural results, premium pigments."
        price="550"
        duration="PT2H30M"
        ratingValue={5}
        reviewCount={150}
      />

      <section className="hero-landing">
        <div className="hero-landing-content">
          <h1 className="hero-landing-title">
            Expert Eyebrow Tattoo Melbourne
            <span className="hero-subtitle">Cosmetic Tattooing Specialists Since 2014</span>
          </h1>
          <p className="hero-landing-description">
            Professional eyebrow tattoo artists creating natural, beautiful brows. 
            Certified professionals, premium pigments, 150+ happy clients.
          </p>
          <div className="hero-landing-actions">
            <TrackingAnchor
              href={freshaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              trackingCategory="landing"
              trackingLabel="eyebrow-tattoo-melbourne-hero"
            >
              Book Your Consultation
            </TrackingAnchor>
            <Link href="/gallery" className="btn btn-outline btn-lg">
              See Our Work
            </Link>
          </div>
          <div className="hero-landing-features">
            <div className="feature-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
              <span>Professional Artists</span>
            </div>
            <div className="feature-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2C5.03 2 1 6.03 1 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm3.59 4L10 9.59 6.41 6 5 7.41 8.59 11 5 14.59 6.41 16 10 12.41 13.59 16 15 14.59 11.41 11 15 7.41 13.59 6z"/>
              </svg>
              <span>8+ Years Experience</span>
            </div>
            <div className="feature-item">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>TGA Approved</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Melbourne's Leading Eyebrow Tattoo Studio</h2>
              <p className="lead">
                Melbourne Designer Brows has been transforming eyebrows since 2014. Our certified 
                cosmetic tattoo artists combine artistic skill with technical expertise to create 
                beautiful, natural-looking brows that enhance your features.
              </p>
              
              <div className="benefits-grid">
                <div className="benefit-card">
                  <h3>Certified Artists</h3>
                  <p>All our technicians are fully certified in cosmetic tattooing with ongoing training in the latest techniques and safety protocols.</p>
                </div>
                <div className="benefit-card">
                  <h3>Premium Pigments</h3>
                  <p>We use only TGA-approved, organic pigments that maintain their color integrity and won't fade to unnatural tones.</p>
                </div>
                <div className="benefit-card">
                  <h3>Customized Design</h3>
                  <p>Every brow is custom-designed to complement your unique facial features, skin tone, and personal style.</p>
                </div>
                <div className="benefit-card">
                  <h3>Sterile Environment</h3>
                  <p>Health department approved facility with hospital-grade sterilization and single-use equipment for your safety.</p>
                </div>
              </div>

              <h2>Eyebrow Tattoo Techniques We Offer</h2>
              <div className="services-list">
                <div className="service-item">
                  <h3>Microblading (Hair Strokes)</h3>
                  <p>Creates realistic hair-like strokes that mimic natural brow hairs. Perfect for filling gaps and creating natural fullness.</p>
                  <p className="price">From $595</p>
                </div>
                <div className="service-item">
                  <h3>Powder Brows</h3>
                  <p>Soft, powdered effect similar to makeup. Ideal for oily skin types and those wanting a more defined, filled-in look.</p>
                  <p className="price">From $550</p>
                </div>
                <div className="service-item">
                  <h3>Ombre Brows</h3>
                  <p>Gradient effect that's lighter at the front and darker at the tail. Creates depth and dimension for a sophisticated look.</p>
                  <p className="price">From $575</p>
                </div>
                <div className="service-item">
                  <h3>Combination Brows</h3>
                  <p>Combines hair strokes with shading for the most natural yet defined result. Best of both techniques.</p>
                  <p className="price">From $650</p>
                </div>
              </div>

              <h2>The Eyebrow Tattoo Process</h2>
              <div className="process-steps">
                <div className="step">
                  <span className="step-number">1</span>
                  <h4>Consultation</h4>
                  <p>Discuss your desired look, analyze your face shape, and design your perfect brow shape.</p>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <h4>Design & Mapping</h4>
                  <p>Precise measurement and mapping to ensure symmetry and proportion with your facial features.</p>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <h4>Color Selection</h4>
                  <p>Custom color matching to complement your skin tone and hair color for natural results.</p>
                </div>
                <div className="step">
                  <span className="step-number">4</span>
                  <h4>Application</h4>
                  <p>Gentle application with numbing cream for comfort. The process takes 2-3 hours.</p>
                </div>
                <div className="step">
                  <span className="step-number">5</span>
                  <h4>Touch-Up</h4>
                  <p>Complimentary touch-up after 6-8 weeks to perfect color and add any additional strokes.</p>
                </div>
              </div>

              <h2>Why Choose Cosmetic Tattooing?</h2>
              <ul className="benefits-list">
                <li><strong>Time-Saving:</strong> Wake up with perfect brows every day, no daily makeup routine needed</li>
                <li><strong>Waterproof:</strong> Swim, sweat, and shower without worrying about your brows</li>
                <li><strong>Natural Looking:</strong> Modern techniques create incredibly realistic results</li>
                <li><strong>Confidence Boost:</strong> Always look polished and put-together</li>
                <li><strong>Cost-Effective:</strong> Save money on brow products and salon visits over time</li>
                <li><strong>Customizable:</strong> Techniques and colors tailored to your preferences</li>
              </ul>

              <h2>Our Melbourne Studios</h2>
              <div className="locations-grid">
                <div className="location-card">
                  <h3>Richmond Location</h3>
                  <p>Our Richmond studio is conveniently located near the CBD with easy access via public transport and street parking available.</p>
                  <Link href="/locations/richmond" className="location-link">Visit Richmond Studio →</Link>
                </div>
                <div className="location-card">
                  <h3>Springvale Location</h3>
                  <p>Serving Melbourne's southeast, our Springvale studio offers the same exceptional service in a convenient location.</p>
                  <Link href="/locations/springvale" className="location-link">Visit Springvale Studio →</Link>
                </div>
              </div>
            </div>

            <aside className="content-sidebar">
              <div className="sidebar-widget booking-widget">
                <h3>Ready to Transform Your Brows?</h3>
                <p>Book your personalized consultation to discuss your perfect eyebrow tattoo.</p>
                <TrackingAnchor
                  href={freshaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block"
                  trackingCategory="landing"
                  trackingLabel="eyebrow-tattoo-melbourne-sidebar"
                >
                  Book Your Consultation
                </TrackingAnchor>
                <p className="widget-note">No obligation, no deposit required</p>
              </div>

              <div className="sidebar-widget price-widget">
                <h3>Investment Guide</h3>
                <ul className="price-list">
                  <li>
                    <span>Microblading</span>
                    <span className="price">$595</span>
                  </li>
                  <li>
                    <span>Powder Brows</span>
                    <span className="price">$550</span>
                  </li>
                  <li>
                    <span>Ombre Brows</span>
                    <span className="price">$575</span>
                  </li>
                  <li>
                    <span>Combination</span>
                    <span className="price">$650</span>
                  </li>
                  <li>
                    <span>Touch-Up</span>
                    <span className="price">Included</span>
                  </li>
                </ul>
                <p className="widget-note">Payment plans available</p>
              </div>

              <div className="sidebar-widget testimonial-widget">
                <h3>Client Love</h3>
                <blockquote>
                  "Best decision ever! Anne is an absolute artist. My brows look so natural, everyone thinks they're real."
                  <cite>- Sarah M.</cite>
                </blockquote>
                <blockquote>
                  "Professional, clean, and amazing results. Highly recommend Melbourne Designer Brows!"
                  <cite>- Lisa T.</cite>
                </blockquote>
                <Link href="/about/reviews" className="widget-link">Read More Reviews →</Link>
              </div>

              <div className="sidebar-widget aftercare-widget">
                <h3>Aftercare Support</h3>
                <p>We provide comprehensive aftercare instructions and support throughout your healing journey.</p>
                <Link href="/blog/microblading-aftercare-complete-guide" className="widget-link">View Aftercare Guide →</Link>
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
          <h2 className="cta-title">Start Your Eyebrow Transformation</h2>
          <p className="cta-description">
            Join hundreds of Melbourne women who've discovered the confidence that comes with 
            perfect eyebrows. Our expert artists are ready to create your dream brows.
          </p>
          <div className="cta-buttons">
            <TrackingAnchor
              href={freshaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary cta-primary"
              trackingCategory="landing"
              trackingLabel="eyebrow-tattoo-melbourne-cta"
            >
              Book Your Professional Consultation
            </TrackingAnchor>
            <Link href="/services" className="btn btn-outline cta-secondary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}