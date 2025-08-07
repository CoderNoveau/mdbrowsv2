import Image from 'next/image';
import Link from 'next/link';
import TrackingAnchor from '@/components/TrackingAnchor';
import StructuredData from '@/components/StructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Richmond Location | Melbourne Designer Brows | Professional Microblading Richmond',
  description: 'Visit our Richmond microblading studio for expert eyebrow services. Convenient location with professional artists specializing in microblading, cosmetic tattooing, and brow corrections in Richmond Melbourne.',
  alternates: {
    canonical: 'https://mdbrows.com.au/locations/richmond',
  },
  openGraph: {
    title: 'Richmond Location | Melbourne Designer Brows',
    description: 'Visit our Richmond microblading studio for expert eyebrow services. Convenient location with professional artists specializing in microblading, cosmetic tattooing, and brow corrections in Richmond Melbourne.',
    url: 'https://mdbrows.com.au/locations/richmond',
    images: [{
      url: 'https://mdbrows.com.au/images/richmond-studio.webp',
    }],
    type: 'website',
  },
};

export default function RichmondLocation() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <StructuredData 
        name="Melbourne Designer Brows - Richmond"
        address={{
          streetAddress: "Richmond Studio Location",
          addressLocality: "Richmond",
          addressRegion: "Victoria",
          postalCode: "3121",
          addressCountry: "AU"
        }}
        geo={{
          latitude: -37.8208,
          longitude: 144.9966
        }}
        services={[
          "Microblading Richmond",
          "Cosmetic Tattooing Richmond", 
          "Eyebrow Feathering Richmond",
          "Brow Corrections Richmond",
          "Semi-Permanent Makeup Richmond"
        ]}
      />
      
      <div className="location-hero" style={{ 
        background: 'linear-gradient(135deg, #f5f2ea 0%, #ffffff 100%)',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="page-section-inner">
          <h1 className="page-section-heading">Melbourne Designer Brows - Richmond</h1>
          <p className="location-subtitle" style={{ 
            fontSize: '1.2rem', 
            color: '#666', 
            maxWidth: '600px', 
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Experience premium microblading and cosmetic tattooing services at our convenient Richmond location. 
            Our expert artists specialize in creating natural, beautiful brows for Richmond and surrounding Melbourne suburbs.
          </p>
        </div>
      </div>

      <section className="page-section">
        <div className="page-section-inner">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '3rem',
            alignItems: 'start'
          }}>
            
            {/* Location Information */}
            <div className="location-info">
              <h2 className="service-subtitle">Richmond Studio Details</h2>
              
              <div className="info-card" style={{
                background: '#fff',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
                marginBottom: '2rem'
              }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Location & Contact</h3>
                <div className="contact-details" style={{ lineHeight: '1.8' }}>
                  <p><strong>Address:</strong> Richmond, Melbourne VIC 3121</p>
                  <p><strong>Phone:</strong> Available upon booking</p>
                  <p><strong>Email:</strong> info@mdbrows.com.au</p>
                </div>
              </div>

              <div className="info-card" style={{
                background: '#fff',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
                marginBottom: '2rem'
              }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Opening Hours</h3>
                <div className="hours-details" style={{ lineHeight: '1.8' }}>
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 4:00 PM</p>
                  <p><strong>Sunday:</strong> By appointment only</p>
                  <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#666' }}>
                    Extended hours available for special appointments
                  </p>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="location-services">
              <h2 className="service-subtitle">Services at Richmond Studio</h2>
              
              <div className="services-grid" style={{ 
                display: 'grid', 
                gap: '1.5rem' 
              }}>
                
                <div className="service-card" style={{
                  background: '#fff',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid var(--accent)'
                }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>
                    <Link href="/services/microblading" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                      Microblading Richmond
                    </Link>
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Premium microblading services creating natural, hair-like strokes. From $595 including touch-up.
                  </p>
                </div>

                <div className="service-card" style={{
                  background: '#fff',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid var(--accent)'
                }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>
                    <Link href="/services/cosmetic-tattooing" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                      Cosmetic Tattooing Richmond
                    </Link>
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Professional cosmetic tattooing for eyebrows, eyeliner, and lips. Long-lasting, natural results.
                  </p>
                </div>

                <div className="service-card" style={{
                  background: '#fff',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid var(--accent)'
                }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>
                    <Link href="/services/brow-corrections" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                      Brow Corrections Richmond
                    </Link>
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Expert correction services for previous microblading or cosmetic tattoo work. Restore your confidence.
                  </p>
                </div>

                <div className="service-card" style={{
                  background: '#fff',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid var(--accent)'
                }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>
                    <Link href="/services/microneedling" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                      Microneedling Richmond
                    </Link>
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Advanced skin rejuvenation treatments to improve texture, reduce fine lines, and boost collagen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Richmond Location */}
      <section className="page-section" style={{ background: '#f9f9f9' }}>
        <div className="page-section-inner">
          <h2 className="page-section-heading">Why Choose Our Richmond Studio?</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            marginTop: '2rem'
          }}>
            
            <div className="benefit-card" style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Convenient Location</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Easily accessible Richmond location with public transport links and parking options. 
                Perfect for clients from Richmond, Collingwood, Fitzroy, and surrounding areas.
              </p>
            </div>

            <div className="benefit-card" style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Expert Artists</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Our Richmond studio features experienced microblading artists with thousands of successful procedures. 
                Specialized training in the latest techniques and safety protocols.
              </p>
            </div>

            <div className="benefit-card" style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Premium Environment</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Modern, clean, and comfortable studio environment designed for your relaxation and safety. 
                State-of-the-art equipment and strict hygiene protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="page-section">
        <div className="page-section-inner" style={{ textAlign: 'center' }}>
          <h2 className="page-section-heading">Book Your Richmond Appointment Today</h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666', 
            maxWidth: '600px', 
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Ready to transform your brows at our Richmond location? Book your consultation today and take the first step 
            toward beautiful, natural-looking eyebrows that enhance your features and boost your confidence.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
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
              href="/pricing" 
              className="btn btn-outline"
              style={{ fontSize: '1.1rem', padding: '15px 30px' }}
            >
              View Pricing
            </Link>
          </div>
          
          <p style={{ 
            marginTop: '2rem', 
            color: '#888', 
            fontStyle: 'italic' 
          }}>
            Free consultations available • Complimentary touch-up included • Flexible payment plans
          </p>
        </div>
      </section>
    </div>
  );
}