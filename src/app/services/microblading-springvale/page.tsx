import Link from 'next/link';
import Image from 'next/image';
import TrackingAnchor from '@/components/TrackingAnchor';
import ServiceSchema from '@/components/ServiceSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Microblading Springvale | Professional Eyebrow Services',
  description: 'Expert microblading services in Springvale Melbourne. Natural-looking eyebrows by skilled artists. Serving Springvale, Glen Waverley, Clayton & south-east suburbs. Book from $595.',
  alternates: {
    canonical: 'https://mdbrows.com.au/services/microblading-springvale',
  },
  openGraph: {
    title: 'Microblading Springvale | Melbourne Designer Brows',
    description: 'Transform your brows with microblading in Springvale. Professional artists, natural results, convenient south-east Melbourne location.',
    url: 'https://mdbrows.com.au/services/microblading-springvale',
    images: [{
      url: 'https://mdbrows.com.au/images/springvale-microblading.webp',
    }],
    type: 'article',
  },
};

export default function MicrobladingSpringvale() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <ServiceSchema 
        serviceName="Microblading Springvale"
        description="Professional microblading services in Springvale Melbourne. Expert eyebrow feathering for south-east Melbourne clients"
        price="595"
        duration="PT2H30M"
        category="Cosmetic Tattooing"
      />
      <StructuredData 
        name="Melbourne Designer Brows - Springvale Microblading"
        address={{
          streetAddress: "Springvale",
          addressLocality: "Springvale",
          addressRegion: "Victoria",
          postalCode: "3171",
          addressCountry: "AU"
        }}
        geo={{
          latitude: -37.9530,
          longitude: 145.1503
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mdbrows.com.au/" },
          { name: "Services", url: "https://mdbrows.com.au/services/" },
          { name: "Microblading", url: "https://mdbrows.com.au/services/microblading/" },
          { name: "Springvale", url: "https://mdbrows.com.au/services/microblading-springvale/" }
        ]}
      />
      
      <h1 className="page-section-heading">Microblading Springvale - South-East Melbourne's Premier Studio</h1>
      
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
          Discover exceptional microblading services at our Springvale location. Melbourne Designer Brows 
          brings professional eyebrow artistry to south-east Melbourne, serving Springvale, Glen Waverley, 
          Clayton, and surrounding communities with natural, beautiful microblading results.
        </p>
      </div>

      <section className="springvale-benefits" style={{ marginBottom: '3rem' }}>
        <h2 className="service-subtitle">Why Choose Microblading in Springvale?</h2>
        
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
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>South-East Convenience</h3>
            <p style={{ lineHeight: '1.6' }}>
              Our Springvale studio is perfectly positioned for clients across south-east Melbourne. 
              Easy access from Princes Highway, with ample parking available for your convenience.
            </p>
          </div>

          <div className="benefit-card" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            borderTop: '4px solid var(--accent)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Multicultural Expertise</h3>
            <p style={{ lineHeight: '1.6' }}>
              Our Springvale artists understand diverse beauty preferences and work with all skin 
              types and ethnicities. We celebrate Springvale's multicultural community.
            </p>
          </div>

          <div className="benefit-card" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            borderTop: '4px solid var(--accent)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Springvale's Trusted Studio</h3>
            <p style={{ lineHeight: '1.6' }}>
              Established reputation in Springvale with hundreds of satisfied clients. We're proud 
              to be south-east Melbourne's premier destination for microblading excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="springvale-expertise" style={{ 
        background: '#fff8f5',
        padding: '3rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem'
      }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center' }}>
          Springvale Microblading Specialists
        </h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="page-text" style={{ marginBottom: '2rem', textAlign: 'center' }}>
            Our Springvale studio specializes in creating beautiful, natural-looking eyebrows for 
            the diverse communities of south-east Melbourne. Here's what sets us apart:
          </p>
          
          <div className="expertise-areas">
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                Cultural Sensitivity & Understanding
              </h4>
              <p style={{ lineHeight: '1.6' }}>
                We understand that beauty standards vary across cultures. Our Springvale artists 
                are trained to create brows that honor your cultural preferences while enhancing 
                your natural features.
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                All Skin Types Welcome
              </h4>
              <p style={{ lineHeight: '1.6' }}>
                Expert experience with Asian, Middle Eastern, European, and all skin types. 
                We use specialized techniques and pigments suited to your unique skin tone 
                and undertones.
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                Language Support
              </h4>
              <p style={{ lineHeight: '1.6' }}>
                Our Springvale team can assist in multiple languages, ensuring clear 
                communication throughout your microblading journey. Your comfort and 
                understanding are our priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="springvale-suburbs" style={{ marginBottom: '3rem' }}>
        <h2 className="service-subtitle">Serving Springvale and South-East Melbourne</h2>
        
        <div style={{ 
          background: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
        }}>
          <p className="page-text" style={{ marginBottom: '2rem' }}>
            Our Springvale microblading studio proudly serves clients from across south-east Melbourne:
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '1rem'
          }}>
            {[
              'Springvale', 'Glen Waverley', 'Clayton', 'Noble Park', 
              'Keysborough', 'Mulgrave', 'Wheelers Hill', 'Dandenong',
              'Oakleigh', 'Mount Waverley', 'Clarinda', 'Sandown',
              'Springvale South', 'Clayton South', 'Dingley Village', 'Lyndhurst'
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

      <section className="springvale-process" style={{ 
        marginBottom: '3rem'
      }}>
        <h2 className="service-subtitle">The Springvale Microblading Journey</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'var(--accent)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              color: '#fff',
              fontWeight: 'bold'
            }}>
              1
            </div>
            <h4 style={{ marginBottom: '0.5rem' }}>Free Consultation</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Visit our Springvale studio for a complimentary consultation to discuss your goals
            </p>
          </div>

          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'var(--accent)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              color: '#fff',
              fontWeight: 'bold'
            }}>
              2
            </div>
            <h4 style={{ marginBottom: '0.5rem' }}>Custom Design</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              We create a personalized brow shape that complements your unique features
            </p>
          </div>

          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'var(--accent)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              color: '#fff',
              fontWeight: 'bold'
            }}>
              3
            </div>
            <h4 style={{ marginBottom: '0.5rem' }}>Expert Application</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Precise microblading technique creating natural, hair-like strokes
            </p>
          </div>

          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'var(--accent)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              color: '#fff',
              fontWeight: 'bold'
            }}>
              4
            </div>
            <h4 style={{ marginBottom: '0.5rem' }}>Ongoing Support</h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Comprehensive aftercare and complimentary touch-up within 6-8 weeks
            </p>
          </div>
        </div>
      </section>

      <section className="springvale-pricing" style={{ 
        background: 'linear-gradient(135deg, #f5f2ea 0%, #ffffff 100%)',
        padding: '3rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <h2 className="service-subtitle">Springvale Microblading Pricing</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '800px',
          margin: '2rem auto'
        }}>
          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
              Full Microblading
            </h3>
            <p style={{ fontSize: '2rem', fontWeight: '600', color: 'var(--accent)', marginBottom: '1rem' }}>
              From $595
            </p>
            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li>✓ Initial consultation</li>
              <li>✓ Custom brow mapping</li>
              <li>✓ Microblading procedure</li>
              <li>✓ Premium pigments</li>
              <li>✓ 6-8 week touch-up</li>
            </ul>
          </div>

          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
              Annual Touch-Up
            </h3>
            <p style={{ fontSize: '2rem', fontWeight: '600', color: 'var(--accent)', marginBottom: '1rem' }}>
              From $295
            </p>
            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li>✓ Color refresh</li>
              <li>✓ Shape refinement</li>
              <li>✓ Maintain results</li>
              <li>✓ Quick procedure</li>
              <li>✓ Existing clients only</li>
            </ul>
          </div>
        </div>
        
        <p className="page-text" style={{ fontStyle: 'italic', marginTop: '2rem' }}>
          * Payment plans available for Springvale clients • Student discounts with valid ID
        </p>
      </section>

      <section className="springvale-cta" style={{ 
        textAlign: 'center',
        padding: '3rem 2rem',
        background: '#fff8f5',
        borderRadius: '8px'
      }}>
        <h2 className="service-subtitle">Book Your Springvale Microblading Appointment</h2>
        <p className="page-text" style={{ 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          fontSize: '1.1rem' 
        }}>
          Join hundreds of satisfied clients who've transformed their brows at our Springvale studio. 
          Experience the Melbourne Designer Brows difference in south-east Melbourne.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <TrackingAnchor 
            href={freshaLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ fontSize: '1.1rem', padding: '15px 30px' }}
          >
            Book Springvale Appointment
          </TrackingAnchor>
          
          <Link 
            href="/locations/springvale" 
            className="btn btn-outline"
            style={{ fontSize: '1.1rem', padding: '15px 30px' }}
          >
            Springvale Studio Details
          </Link>
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <p style={{ color: '#666', marginBottom: '0.5rem' }}>
            <strong>Springvale Studio Hours:</strong> Monday-Saturday 9AM-5PM
          </p>
          <p style={{ color: '#666' }}>
            <strong>Languages:</strong> English, Vietnamese, Mandarin, Cantonese
          </p>
        </div>
      </section>
    </div>
  );
}