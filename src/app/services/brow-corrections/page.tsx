import Link from 'next/link';
import Image from 'next/image';
import TrackingAnchor from '@/components/TrackingAnchor';
import ServiceSchema from '@/components/ServiceSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eyebrow Corrections Melbourne',
  description: 'Expert eyebrow correction services in Melbourne. We fix botched microblading, uneven brows, and failed cosmetic tattoos. Restore your confidence with our specialized repair techniques.',
  alternates: {
    canonical: 'https://mdbrows.com.au/services/brow-corrections',
  },
  openGraph: {
    title: 'Eyebrow Corrections Melbourne',
    description: 'Expert eyebrow correction services in Melbourne. We fix botched microblading, uneven brows, and failed cosmetic tattoos. Restore your confidence with our specialized repair techniques.',
    url: 'https://mdbrows.com.au/services/brow-corrections',
    images: [{
      url: 'https://mdbrows.com.au/images/service-brow-corrections.webp',
    }],
    type: 'article',
  },
};

export default function BrowCorrections() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <ServiceSchema 
        serviceName="Brow Corrections"
        description="Expert eyebrow correction and repair services to fix botched microblading, uneven brows, and failed cosmetic tattoos using specialized techniques"
        price="750"
        duration="PT3H"
        category="Corrective Cosmetic Tattooing"
      />
      <h1 className="page-section-heading">Eyebrow Correction & Repair</h1>
      
      <div className="service-image-container" style={{ marginBottom: '2rem', position: 'relative', width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
        <Image 
          src="/images/service-brow-correction.webp"
          alt="Brow Correction procedure" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="service-description">
        <p className="page-text">
          At Melbourne Designer Brows, we specialize in correcting and transforming unsatisfactory eyebrow 
          tattooing or microblading results into beautiful, natural-looking brows that enhance your features 
          and restore your confidence.
        </p>
        
        <p className="page-text" style={{ marginBottom: '2.5rem' }}>
          We understand how frustrating and emotionally distressing it can be when your brows don't meet your 
          expectations. Our correction services focus on restoring balance and creating the natural, beautiful 
          look you originally wanted.
        </p>
        
        <div className="service-section" style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#fff8f5', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0' }}>Common Eyebrow Correction Issues We Solve</h3>
          <p className="page-text">
            Many clients come to us feeling disappointed with previous eyebrow treatments from other salons. 
            Our expert correction services address:
          </p>
          
          <ul className="service-benefits" style={{ margin: '1.5rem 0' }}>
            <li><strong>Uneven or Asymmetrical Brows</strong>: When one eyebrow sits higher, lower, or has a different shape than the other</li>
            <li><strong>Harsh or Unnatural Color</strong>: Eyebrows that appear too dark, have turned blueish/gray, or have an orange/red undertone</li>
            <li><strong>Poor Shape Design</strong>: Brows that don't complement your facial features or follow unnatural arches</li>
            <li><strong>Blurred or Migrated Pigment</strong>: When pigment has spread beyond the intended area, creating a "smudged" appearance</li>
            <li><strong>Too Thick or Too Thin</strong>: Brows that are disproportionate to your face or don't match your aesthetic preferences</li>
            <li><strong>Pigment Inconsistency</strong>: Patchy areas or inconsistent color distribution throughout the brow</li>
          </ul>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem' }}>
          <h3 className="page-section-subheading">Why Previous Eyebrow Treatments May Have Failed</h3>
          <p className="page-text">
            Understanding why your previous treatment didn't meet expectations is crucial for successful correction:
          </p>
          
          <ul className="service-benefits" style={{ margin: '1.5rem 0' }}>
            <li>Inexperienced technicians lacking proper training</li>
            <li>Poor pigment quality that changes color over time</li>
            <li>Incorrect color selection for your skin undertone</li>
            <li>Inadequate aftercare instructions</li>
            <li>Improper technique causing pigment migration or scarring</li>
            <li>One-size-fits-all approach instead of customized design</li>
          </ul>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem' }}>
          <h3 className="page-section-subheading" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Our Correction Process</h3>
        <p className="page-text">
            Our approach to eyebrow corrections is methodical and personalized:
          </p>
          
          <ol style={{ margin: '1.5rem 0 2.5rem', paddingLeft: '1.2rem' }}>
            <li style={{ marginBottom: '1rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--accent)' }}>Comprehensive Consultation</strong>: We begin with a detailed assessment of your current brows, discussing your concerns and desired outcomes.</li>
            <li style={{ marginBottom: '1rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--accent)' }}>Customized Correction Plan</strong>: Based on your specific issues, we develop a tailored plan that may include color correction, shape refinement, or complete restoration.</li>
            <li style={{ marginBottom: '1rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--accent)' }}>Advanced Techniques</strong>: We utilize specialized correction methods including pigment neutralization, strategic shading, and precise microblading to transform your brows.</li>
            <li style={{ marginBottom: '0', lineHeight: '1.6' }}><strong style={{ color: 'var(--accent)' }}>Gradual Transformation</strong>: Some corrections require multiple sessions for optimal results, allowing us to build depth and dimension gradually.</li>
          </ol>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0', textAlign: 'center' }}>Why Choose Melbourne Designer Brows for Corrections</h3>

          <p className="page-text" style={{ marginBottom: '1.5rem' }}>
            Eyebrow corrections require exceptional skill, knowledge, and expertise that many salons simply don't possess. While other studios may turn away clients with challenging correction cases, we specialize in these transformations:
          </p>

          <ul className="service-benefits" style={{ margin: '1.5rem 0 0.5rem' }}>
            <li><strong>Advanced Expertise</strong>: Our artists have undergone extensive specialized training in correction techniques that most technicians haven't mastered</li>
            <li><strong>Proven Results</strong>: Our portfolio demonstrates our ability to dramatically improve even severely problematic brows that other salons deemed "unfixable"</li>
            <li><strong>Custom Pigment Formulation</strong>: We create custom color blends specifically designed to neutralize and correct previous work</li>
            <li><strong>Gentle Approach</strong>: We prioritize skin health during the correction process, using techniques that minimize trauma to already compromised skin</li>
            <li><strong>Realistic Expectations</strong>: We provide honest assessments about what can be achieved, based on our extensive experience with correction cases</li>
            <li><strong>Specialized Knowledge</strong>: We understand the complexities of working with previously tattooed skin and how to address pigment migration, color shifts, and scarring</li>
            <li><strong>Correction-Specific Tools</strong>: We invest in specialized equipment and products specifically designed for brow corrections that standard salons don't have</li>
          </ul>

          <p className="page-text" style={{ marginTop: '1.5rem', fontWeight: '500' }}>
            When other salons say "it can't be fixed," that's where our expertise begins. Our advanced training and years of experience with correction cases allow us to take on the challenges that others avoid, giving you the beautiful brows you deserve.
          </p>
        </div>
        
        <div className="view-gallery" style={{ textAlign: 'center', margin: '2.5rem 0', padding: '1rem 0' }}>
          <p className="page-text" style={{ marginBottom: '1rem', fontStyle: 'italic' }}>See our transformation gallery for before and after examples</p>
          <Link href="/gallery" className="btn btn-outline">
            VIEW GALLERY
          </Link>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', border: '1px solid #e0e0e0', padding: '2rem', borderRadius: '8px' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0' }}>Before Your Correction Appointment</h3>
          <p className="page-text">
            If you're considering brow correction:
          </p>
          <ul className="service-benefits" style={{ margin: '1rem 0 1.5rem' }}>
            <li>Allow adequate healing time from your previous procedure (minimum 8-12 weeks)</li>
            <li>Bring photos of your brows before any previous work if possible</li>
            <li>Be prepared to discuss your eyebrow history, including all previous procedures</li>
            <li>Understand that correction is often a journey requiring patience for optimal results</li>
        </ul>
          
          <p className="page-text" style={{ fontWeight: '500', fontSize: '1.05rem', textAlign: 'center', margin: '1.5rem 0 0', padding: '0 1rem' }}>
            Don't continue hiding behind makeup, hats, or bangs. Whether your eyebrows need subtle refinement or 
            complete reconstruction, our correction specialists can help you achieve the natural, flattering brows 
            you deserve.
          </p>
        </div>
        
        <h3 className="page-section-subheading" style={{ marginTop: '3rem', textAlign: 'center' }}>Pricing</h3>
        <div className="price-section">
          <div className="price-table">
            <div className="price-table-header">
              <div>Service</div>
              <div>Regular Price</div>
              <div>Special Offer</div>
            </div>
            <div className="price-row">
              <div className="price-service">Microblading / Eyebrow Feathering</div>
              <div className="price-amount has-special">$795</div>
              <div className="price-special">$595</div>
            </div>
            <div className="price-row">
              <div className="price-service">Eyebrow Shading</div>
              <div className="price-amount has-special">$795</div>
              <div className="price-special">$595</div>
            </div>
            <div className="price-row">
              <div className="price-service">Combo Brow (Microblading & Shading)</div>
              <div className="price-amount has-special">$990</div>
              <div className="price-special">$795</div>
            </div>
            <div className="price-row">
              <div className="price-service">Correction of work done by others*</div>
              <div className="price-amount has-special">$990</div>
              <div className="price-special">from $595</div>
            </div>
            <div className="price-row">
              <div className="price-service">Perfection Visit (Up to 8 weeks)</div>
              <div className="price-amount">$270</div>
              <div className="price-special"></div>
            </div>
            <div className="price-row">
              <div className="price-service">Touch up within 12 months</div>
              <div className="price-amount">$350</div>
              <div className="price-special"></div>
            </div>
            <div className="price-row">
              <div className="price-service">Touch up within 18 months</div>
              <div className="price-amount">$425</div>
              <div className="price-special"></div>
            </div>
            <div className="price-row">
              <div className="price-service">Touch up within 24 months</div>
              <div className="price-amount">$495</div>
              <div className="price-special"></div>
            </div>
            <div className="price-row">
              <div className="price-service">Brow Shaping & Design</div>
              <div className="price-amount">$90</div>
              <div className="price-special"></div>
            </div>
            <div className="price-row">
              <div className="price-service">Brow Tattoo Removal (Saline)</div>
              <div className="price-amount">$200 per visit</div>
              <div className="price-special"></div>
            </div>
            <div className="price-row">
              <div className="price-service">Brow Tattoo Removal (Laser)</div>
              <div className="price-amount has-special">$200 per visit</div>
              <div className="price-special">$100</div>
            </div>
          </div>
          <p className="price-note">
            * Please contact us to discuss if you require correction of work done by others. We are able to assist in most cases however suitability is on a case by case basis. Corrective work may require removal or lightening procedures performed.
          </p>
        </div>
        
        <div className="service-cta" style={{ marginTop: '2rem', textAlign: 'center' }}>
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

      <div className="service-hero">
        <div className="service-hero-content">
          <h3>Expert Brow Correction Services</h3>
          <p>
            Trust our experienced technicians to correct and enhance your brows. We specialize in fixing uneven, asymmetrical, or poorly done eyebrow procedures.
          </p>
          <div className="service-hero-buttons">
            <Link href="/gallery" className="btn btn-outline">View Gallery</Link>
            <TrackingAnchor 
              href={freshaLink} 
              className="btn" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </TrackingAnchor>
          </div>
        </div>
      </div>
    </div>
  );
} 