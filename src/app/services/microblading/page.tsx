import Link from 'next/link';
import Image from 'next/image';
import ClientSeo from '@/components/ClientSeo';

export const metadata = {
  title: 'Microblading & Eyebrow Feathering | Melbourne Designer Brows',
  description: 'Professional microblading services in Melbourne. Natural, semi-permanent eyebrows with hair-like strokes that look real and last 12-24 months. Book your appointment today.',
};

export default function Microblading() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <ClientSeo
        title="Microblading & Eyebrow Feathering | Melbourne Designer Brows"
        description="Professional microblading services in Melbourne. Natural, semi-permanent eyebrows with hair-like strokes that look real and last 12-24 months. Book your appointment today."
        canonical="https://mdbrows.com.au/services/microblading"
        ogImage="/images/service-microblading.webp"
        ogType="article"
      />
      
      <h2 className="page-section-heading">Microblading & Eyebrow Feathering</h2>
      
      <div className="service-image-container" style={{ marginBottom: '2rem', position: 'relative', width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
        <Image 
          src="/images/service-microblading.webp"
          alt="Microblading service" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="service-description">
        <h3 className="page-section-subheading">What is Microblading?</h3>
        <p className="page-text">
          Microblading, also known as Eyebrow Feathering, is a technique in cosmetic tattooing used to create fuller, 
          natural-looking eyebrows. This method involves the use of a handheld microblade to manually draw delicate 
          hair strokes. Each stroke is crafted to blend seamlessly with the existing eyebrow hairs, enhancing the 
          overall look of the brows and giving a realistic and defined shape.
        </p>
        
        <p className="page-text">
          Each eyebrow stroke is manually shaped and blended into the client's existing eyebrow hair which results 
          in a more natural look. Microblading is perfect for anyone who wants to enhance their natural brows. 
          Whether you have thin, over-plucked, or patchy eyebrows, microblading can give you perfect, 
          natural-looking brows.
        </p>
        
        <div className="view-gallery" style={{ textAlign: 'center', margin: '2rem 0' }}>
          <Link href="/gallery" className="btn btn-outline">
            VIEW GALLERY
          </Link>
        </div>
        
        <h3 className="page-section-subheading">Why choose Melbourne Designer Brows for Microblading & Eyebrow Feathering?</h3>
        <p className="page-text">
          Melbourne Designer Brows is a leader in the field of Microblading and Eyebrow Feathering. Our lead artist, 
          Anne Nguyen, is renowned for her precise and detailed approach, producing beautifully natural eyebrows 
          tailored to each client's features. Anne's techniques, developed through extensive training both in Australia 
          and internationally, are designed to create the best possible results for our clients.
        </p>
        
        <p className="page-text">
          We invite you to explore our gallery of previous work to see the exceptional results we achieve and 
          encourage you to book an appointment to experience our services firsthand.
        </p>
        
        <div className="book-appointment" style={{ textAlign: 'center', margin: '2rem 0' }}>
          <a 
            href={freshaLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary" 
          >
            BOOK APPOINTMENT
          </a>
        </div>
        
        <h3 className="page-section-subheading">How Long does Microblading Last?</h3>
        <p className="page-text">
          Microblading is a semi-permanent treatment that can last between 12 to 24 months, depending on individual 
          factors like skin type and lifestyle. For instance, those with oily skin or who are frequently exposed to 
          the sun may notice a faster fading of the pigment.
        </p>
        
        <p className="page-text">
          To maintain the desired eyebrow shape and color intensity, clients can return for periodic touch-ups.
        </p>
        
        <h3 className="page-section-subheading">What is the difference between Microblading & Eyebrow Feathering?</h3>
        <p className="page-text">
          Microblading and Eyebrow Feathering are terms often used interchangeably and refer to the same process 
          of applying semi-permanent pigment using a microblade. The technique focuses on creating thin, hair-like 
          strokes that blend seamlessly with your natural eyebrows.
        </p>
        
        <p className="page-text">
          While some practitioners may vary the thickness and number of strokes, the fundamental method remains 
          consistent across both terms.
        </p>
        
        <h3 className="page-section-subheading">The Microblading | Eyebrow Tattooing Procedure</h3>
        <p className="page-text">
          The Microblading procedure typically requires two appointments.
        </p>
        
        <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.1rem', fontWeight: '600' }}>First Appointment</h4>
        <p className="page-text">
          During your initial visit, our artists will consult with you to determine your ideal eyebrow shape and 
          color based on your facial features and personal style. We use specialized tools to measure and outline 
          your brows for approval before proceeding. After the planning phase, the artist will perform the microblading, 
          followed by providing an aftercare kit and instructions to ensure proper healing.
        </p>
        
        <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.1rem', fontWeight: '600' }}>Second Appointment</h4>
        <p className="page-text">
          The follow-up session is scheduled about six weeks after the initial treatment. This touch-up appointment 
          allows the artist to refine your eyebrows and ensure the pigment has settled properly into the skin, making 
          any necessary adjustments to perfect the appearance of your brows.
        </p>
        
        <p className="page-text">
          We look forward to helping you achieve your ideal eyebrow look at Melbourne Designer Brows. Contact us 
          today to schedule your appointment.
        </p>
        
        <h3 className="page-section-subheading">Benefits of Microblading</h3>
        <ul className="service-benefits">
          <li>Save time on your morning makeup routine</li>
          <li>Wake up with perfect brows every day</li>
          <li>Results last 1-3 years with proper aftercare</li>
          <li>Waterproof and smudge-proof</li>
          <li>Natural-looking results</li>
          <li>Ideal for those with thin or sparse eyebrows</li>
          <li>Perfect for active lifestyles</li>
        </ul>
        
        <h3 className="page-section-subheading">Pricing</h3>
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
    </div>
  );
} 