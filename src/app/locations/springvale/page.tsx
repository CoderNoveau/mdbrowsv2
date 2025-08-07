import Image from 'next/image';
import Link from 'next/link';
import TrackingAnchor from '@/components/TrackingAnchor';
import StructuredData from '@/components/StructuredData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Springvale Location | Melbourne Designer Brows | Professional Microblading Springvale',
  description: 'Visit our Springvale microblading studio for expert eyebrow services. Convenient location serving Springvale, Glen Waverley, and surrounding areas with professional microblading and cosmetic tattooing.',
  alternates: {
    canonical: 'https://mdbrows.com.au/locations/springvale',
  },
  openGraph: {
    title: 'Springvale Location | Melbourne Designer Brows',
    description: 'Visit our Springvale microblading studio for expert eyebrow services. Convenient location serving Springvale, Glen Waverley, and surrounding areas with professional microblading and cosmetic tattooing.',
    url: 'https://mdbrows.com.au/locations/springvale',
    images: [{
      url: 'https://mdbrows.com.au/images/springvale-studio.webp',
    }],
    type: 'website',
  },
};

export default function SpringvaleLocation() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <StructuredData 
        name="Melbourne Designer Brows - Springvale"
        address={{
          streetAddress: "Springvale Studio Location",
          addressLocality: "Springvale",
          addressRegion: "Victoria",
          postalCode: "3171",
          addressCountry: "AU"
        }}
        geo={{
          latitude: -37.9530,
          longitude: 145.1503
        }}
        services={[
          "Microblading Springvale",
          "Cosmetic Tattooing Springvale", 
          "Eyebrow Feathering Springvale",
          "Brow Corrections Springvale",
          "Semi-Permanent Makeup Springvale"
        ]}
      />
      
      <div className="location-hero" style={{ 
        background: 'linear-gradient(135deg, #f5f2ea 0%, #ffffff 100%)',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="page-section-inner">
          <h1 className="page-section-heading">Melbourne Designer Brows - Springvale</h1>
          <p className="location-subtitle" style={{ 
            fontSize: '1.2rem', 
            color: '#666', 
            maxWidth: '600px', 
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Discover premium microblading and cosmetic tattooing services at our Springvale location. 
            Conveniently serving Springvale, Glen Waverley, Clayton, and the greater south-east Melbourne region.
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
              <h2 className="service-subtitle">Springvale Studio Details</h2>
              
              <div className="info-card" style={{
                background: '#fff',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
                marginBottom: '2rem'
              }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Location & Contact</h3>
                <div className="contact-details" style={{ lineHeight: '1.8' }}>
                  <p><strong>Address:</strong> Springvale, Melbourne VIC 3171</p>
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
                    Evening appointments available upon request
                  </p>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="location-services">
              <h2 className="service-subtitle">Services at Springvale Studio</h2>
              
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
                      Microblading Springvale
                    </Link>
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Expert microblading creating natural, beautiful brows. From $595 with complimentary touch-up included.
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
                      Cosmetic Tattooing Springvale
                    </Link>
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Premium cosmetic tattooing for eyebrows, eyeliner, and lips. Professional, long-lasting results.
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
                      Brow Corrections Springvale
                    </Link>
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Specialized correction services for unsatisfactory previous work. Transform your brows with confidence.
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
                    <Link href="/services/tattoo-removal" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                      Tattoo Removal Springvale
                    </Link>
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Safe, effective removal of unwanted cosmetic tattoos and microblading using advanced techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="page-section" style={{ background: '#f9f9f9' }}>
        <div className="page-section-inner">
          <h2 className="page-section-heading">Areas We Serve from Springvale</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            marginTop: '2rem'
          }}>
            
            <div className="area-card" style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>South-East Melbourne</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Springvale • Glen Waverley • Clayton • Monash • Oakleigh • Mulgrave • 
                Wheelers Hill • Noble Park • Keysborough
              </p>
            </div>

            <div className="area-card" style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Convenient Access</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Easy access via Princes Highway, close to public transport. 
                Perfect for clients throughout the south-eastern suburbs.
              </p>
            </div>

            <div className="area-card" style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Multicultural Hub</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Our Springvale location serves Melbourne's diverse multicultural community 
                with culturally sensitive beauty services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Springvale Location */}
      <section className="page-section">
        <div className="page-section-inner">
          <h2 className="page-section-heading">Why Choose Our Springvale Studio?</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginTop: '2rem'
          }}>
            
            <div className="benefit-card" style={{
              background: '#fff8f5',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Experienced Team</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Our Springvale artists bring years of experience and specialized training in microblading 
                and cosmetic tattooing. Committed to delivering exceptional results for every client.
              </p>
            </div>

            <div className="benefit-card" style={{
              background: '#fff8f5',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Modern Facilities</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                State-of-the-art studio with the latest equipment and technology. 
                Maintained to the highest standards of cleanliness and safety protocols.
              </p>
            </div>

            <div className="benefit-card" style={{
              background: '#fff8f5',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Personalized Service</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Individual consultations to understand your unique needs and preferences. 
                Custom brow designs that complement your facial features and lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="page-section" style={{ background: 'linear-gradient(135deg, #f5f2ea 0%, #ffffff 100%)' }}>
        <div className="page-section-inner" style={{ textAlign: 'center' }}>
          <h2 className="page-section-heading">Book Your Springvale Appointment</h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666', 
            maxWidth: '600px', 
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Experience the Melbourne Designer Brows difference at our convenient Springvale location. 
            Professional microblading and cosmetic tattooing services with results that exceed expectations.
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
              Book Springvale Appointment
            </TrackingAnchor>
            
            <Link 
              href="/contact" 
              className="btn btn-outline"
              style={{ fontSize: '1.1rem', padding: '15px 30px' }}
            >
              Contact Us
            </Link>
          </div>
          
          <div style={{ 
            marginTop: '3rem',
            padding: '2rem',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Special Offers for Springvale Clients</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              New clients receive a <strong>free consultation</strong> and <strong>complimentary touch-up</strong> within 6-8 weeks. 
              Ask about our payment plans and package deals for multiple services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}