import Link from 'next/link';
import Image from 'next/image';
import TrackingAnchor from '@/components/TrackingAnchor';
import ServiceSchema from '@/components/ServiceSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Microblading Richmond | Expert Eyebrow Services',
  description: 'Professional microblading services in Richmond Melbourne. Transform your brows with our expert artists. Natural-looking results, convenient Richmond location. Book today from $595.',
  alternates: {
    canonical: 'https://mdbrows.com.au/services/microblading-richmond/',
  },
  openGraph: {
    title: 'Microblading Richmond | Melbourne Designer Brows',
    description: 'Get perfect eyebrows with microblading in Richmond. Expert artists, natural results, convenient location near Richmond Station.',
    url: 'https://mdbrows.com.au/services/microblading-richmond/',
    images: [{
      url: 'https://mdbrows.com.au/images/richmond-microblading.webp',
    }],
    type: 'article',
  },
};

export default function MicrobladingRichmond() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <ServiceSchema 
        serviceName="Microblading Richmond"
        description="Professional microblading services in Richmond Melbourne. Expert eyebrow feathering creating natural, semi-permanent brows"
        price="595"
        duration="PT2H30M"
        category="Cosmetic Tattooing"
      />
      <StructuredData 
        name="Melbourne Designer Brows - Richmond Microblading"
        address={{
          streetAddress: "Richmond",
          addressLocality: "Richmond",
          addressRegion: "Victoria",
          postalCode: "3121",
          addressCountry: "AU"
        }}
        geo={{
          latitude: -37.8208,
          longitude: 144.9966
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mdbrows.com.au/" },
          { name: "Services", url: "https://mdbrows.com.au/services/" },
          { name: "Microblading", url: "https://mdbrows.com.au/services/microblading/" },
          { name: "Richmond", url: "https://mdbrows.com.au/services/microblading-richmond/" }
        ]}
      />
      
      <h1 className="page-section-heading">Microblading Richmond - Transform Your Brows Today</h1>
      
      <div className="location-hero" style={{ 
        marginBottom: '3rem',
        padding: '2rem',
        background: 'linear-gradient(135deg, #f5f2ea 0%, #ffffff 100%)',
        borderRadius: '8px'
      }}>
        <p className="page-text" style={{ 
          fontSize: '1.2rem', 
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.8'
        }}>
          Looking for professional microblading in Richmond? Melbourne Designer Brows offers 
          expert eyebrow microblading services at our convenient Richmond location. Our skilled 
          artists specialize in creating natural-looking, beautiful brows that enhance your features.
        </p>
      </div>

      <section className="richmond-services" style={{ marginBottom: '3rem' }}>
        <h2 className="service-subtitle">Why Choose Microblading in Richmond?</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <div className="benefit-card" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            borderTop: '4px solid var(--accent)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Convenient Richmond Location</h3>
            <p style={{ lineHeight: '1.6' }}>
              Our Richmond studio is easily accessible by public transport and offers street parking. 
              Perfect for clients from Richmond, Hawthorn, Collingwood, and surrounding suburbs.
            </p>
          </div>

          <div className="benefit-card" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            borderTop: '4px solid var(--accent)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Expert Richmond Artists</h3>
            <p style={{ lineHeight: '1.6' }}>
              Our Richmond-based microblading artists have years of experience and hundreds of 
              satisfied clients throughout inner Melbourne. We understand the sophisticated Richmond aesthetic.
            </p>
          </div>

          <div className="benefit-card" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            borderTop: '4px solid var(--accent)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Richmond's Premium Service</h3>
            <p style={{ lineHeight: '1.6' }}>
              Experience luxury beauty services in the heart of Richmond. Our studio provides a 
              relaxing, professional environment where your comfort and satisfaction are paramount.
            </p>
          </div>
        </div>
      </section>

      <section className="richmond-process" style={{ 
        background: '#fff8f5',
        padding: '3rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem'
      }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center' }}>
          The Richmond Microblading Experience
        </h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="page-text" style={{ marginBottom: '2rem', textAlign: 'center' }}>
            When you choose microblading at our Richmond location, you're choosing excellence. 
            Here's what makes our Richmond studio special:
          </p>
          
          <div className="process-steps">
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                1. Personalized Richmond Consultation
              </h4>
              <p style={{ lineHeight: '1.6' }}>
                We begin with a detailed consultation at our Richmond studio to understand your 
                desired look, assess your skin type, and create a custom brow design that 
                complements your features.
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                2. Precision Microblading Technique
              </h4>
              <p style={{ lineHeight: '1.6' }}>
                Using the latest microblading tools and premium pigments, our Richmond artists 
                create incredibly natural hair-like strokes that blend seamlessly with your 
                existing brows.
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                3. Richmond Aftercare Support
              </h4>
              <p style={{ lineHeight: '1.6' }}>
                We provide comprehensive aftercare instructions and ongoing support from our 
                Richmond studio. Your success is our priority, and we're here for you throughout 
                the healing process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="richmond-areas" style={{ marginBottom: '3rem' }}>
        <h2 className="service-subtitle">Serving Richmond and Surrounding Areas</h2>
        
        <div style={{ 
          background: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
        }}>
          <p className="page-text" style={{ marginBottom: '2rem' }}>
            Our Richmond microblading studio proudly serves clients from across inner Melbourne:
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '1rem'
          }}>
            {[
              'Richmond', 'Hawthorn', 'Collingwood', 'Fitzroy', 
              'South Yarra', 'Prahran', 'Toorak', 'Burnley',
              'East Melbourne', 'Abbotsford', 'Kew', 'Camberwell'
            ].map((suburb, index) => (
              <div key={index} style={{
                padding: '0.5rem 1rem',
                background: '#f5f2ea',
                borderRadius: '4px',
                textAlign: 'center',
                fontSize: '0.95rem'
              }}>
                {suburb}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="richmond-pricing" style={{ 
        background: 'linear-gradient(135deg, #f5f2ea 0%, #ffffff 100%)',
        padding: '3rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <h2 className="service-subtitle">Richmond Microblading Investment</h2>
        
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            marginBottom: '2rem'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
              Microblading Full Procedure
            </h3>
            <p style={{ fontSize: '2rem', fontWeight: '600', color: 'var(--accent)' }}>
              From $595
            </p>
            <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
              Includes initial consultation, custom brow design, microblading procedure, 
              and complimentary 6-8 week touch-up
            </p>
          </div>
          
          <p className="page-text" style={{ fontStyle: 'italic' }}>
            * Flexible payment plans available for Richmond clients
          </p>
        </div>
      </section>

      <section className="richmond-faqs" style={{ marginBottom: '3rem' }}>
        <h2 className="service-subtitle">Richmond Microblading FAQs</h2>
        
        <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="faq-item" style={{
            background: '#fff',
            padding: '1.5rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
              How do I get to your Richmond microblading studio?
            </h3>
            <p style={{ lineHeight: '1.6' }}>
              Our Richmond studio is conveniently located with easy access via tram, train, 
              and bus. Street parking is available, and we're a short walk from Richmond Station.
            </p>
          </div>

          <div className="faq-item" style={{
            background: '#fff',
            padding: '1.5rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
              Do you offer consultations at the Richmond location?
            </h3>
            <p style={{ lineHeight: '1.6' }}>
              Yes! We offer free consultations at our Richmond studio. This allows you to 
              meet your artist, discuss your goals, and see our facilities before committing.
            </p>
          </div>

          <div className="faq-item" style={{
            background: '#fff',
            padding: '1.5rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
              What makes Richmond microblading special?
            </h3>
            <p style={{ lineHeight: '1.6' }}>
              Our Richmond studio combines the sophistication of inner Melbourne with 
              personalized service. We understand the Richmond lifestyle and create brows 
              that suit your professional and social needs.
            </p>
          </div>
        </div>
      </section>

      <section className="richmond-cta" style={{ 
        textAlign: 'center',
        padding: '3rem 2rem',
        background: '#fff8f5',
        borderRadius: '8px'
      }}>
        <h2 className="service-subtitle">Book Your Richmond Microblading Appointment</h2>
        <p className="page-text" style={{ 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          fontSize: '1.1rem' 
        }}>
          Ready to transform your brows at our Richmond studio? Book your consultation today 
          and discover why we're Richmond's preferred microblading destination.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <TrackingAnchor 
            href={freshaLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ fontSize: '1.1rem', padding: '15px 30px' }}
          >
            Book Richmond Appointment
          </TrackingAnchor>
          
          <Link 
            href="/locations/richmond" 
            className="btn btn-outline"
            style={{ fontSize: '1.1rem', padding: '15px 30px' }}
          >
            Richmond Studio Info
          </Link>
        </div>
        
        <p style={{ marginTop: '2rem', color: '#666' }}>
          <strong>Richmond Studio Hours:</strong> Monday-Saturday 9AM-5PM
        </p>
      </section>
    </div>
  );
}