import Link from 'next/link';
import Image from 'next/image';
import TrackingAnchor from '@/components/TrackingAnchor';
import ServiceSchema from '@/components/ServiceSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Microblading Melbourne | From $595',
  description: 'Professional microblading and eyebrow feathering in Melbourne. Our skilled artists create natural, semi-permanent eyebrows with hair-like strokes. Experience perfect brows that last 12-24 months. Book your consultation today.',
  alternates: {
    canonical: 'https://mdbrows.com.au/services/microblading/',
  },
  openGraph: {
    title: 'Microblading Services | Melbourne Designer Brows',
    description: 'Professional microblading and eyebrow feathering in Melbourne. Our skilled artists create natural, semi-permanent eyebrows with hair-like strokes. Experience perfect brows that last 12-24 months. Book your consultation today.',
    url: 'https://mdbrows.com.au/services/microblading/',
    images: [{
      url: 'https://mdbrows.com.au/images/service-microblading.webp',
    }],
    type: 'article',
  },
};

export default function Microblading() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <>
      <div className="page-content">
        <ServiceSchema 
        serviceName="Microblading"
        description="Professional microblading and eyebrow feathering technique creating natural, semi-permanent eyebrows with precision hair-like strokes"
        price="595"
        duration="PT2H30M"
        category="Cosmetic Tattooing"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mdbrows.com.au/" },
          { name: "Services", url: "https://mdbrows.com.au/services/" },
          { name: "Microblading", url: "https://mdbrows.com.au/services/microblading/" }
        ]}
      />
      
      <h1 className="page-section-heading">Microblading & Eyebrow Feathering</h1>
      
      <div className="service-image-container" style={{ marginBottom: '2rem', position: 'relative', width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
        <Image 
          src="/images/service-microblading.webp"
          alt="Microblading service in Melbourne" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <article className="service-description">
        <p className="page-text">
          Microblading, also known as Eyebrow Feathering, is a sophisticated semi-permanent cosmetic tattooing technique 
          used to create fuller, natural-looking eyebrows. This precision artistry involves the use of a specialized handheld 
          microblade to manually draw delicate hair-like strokes. Each meticulously crafted stroke is designed to blend 
          seamlessly with your existing eyebrow hairs, enhancing the overall appearance of your brows while creating 
          a realistic and beautifully defined shape.
        </p>
        
        <p className="page-text" style={{ marginBottom: '2.5rem' }}>
          Unlike traditional eyebrow tattooing, microblading deposits pigment into the superficial layers of the skin, 
          creating fine, crisp strokes that truly mimic the appearance of natural brow hair. Each eyebrow stroke is 
          individually shaped and artfully blended into your existing eyebrow hair, resulting in a remarkably natural look. 
          Microblading is perfect for anyone wanting to enhance their natural brows, whether you have thin, over-plucked, 
          or patchy eyebrows, or if you&apos;ve experienced hair loss due to age, health conditions, or over-styling.
        </p>
        
        <div className="view-gallery" style={{ textAlign: 'center', margin: '2.5rem 0', padding: '1rem 0' }}>
          <p className="page-text" style={{ marginBottom: '1rem', fontStyle: 'italic' }}>Browse our gallery to see examples of our microblading work</p>
          <Link href="/gallery" className="btn btn-outline">
            VIEW GALLERY
          </Link>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#fff8f5', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0' }}>Why choose Melbourne Designer Brows for Microblading & Eyebrow Feathering?</h3>
          <p className="page-text">
            Melbourne Designer Brows is a leader in the field of Microblading and Eyebrow Feathering. Our lead artist, 
            Anne Nguyen, is renowned for her precise and detailed approach, producing beautifully natural eyebrows 
            tailored to each client's features. Anne's techniques, developed through extensive training both in Australia 
            and internationally, are designed to create the best possible results for our clients.
          </p>
          
          <p className="page-text">
            With years of specialized experience in eyebrow artistry, our technicians understand the importance 
            of facial harmony and proportion. We consider your unique facial structure, skin tone, and personal style 
            to create brows that complement and enhance your natural beauty. Our commitment to excellence is 
            reflected in our attention to detail, use of premium pigments, and adherence to the highest hygiene standards.
          </p>
          
          <div style={{ margin: '1.5rem 0', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '6px' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', textAlign: 'center' }}>Our Expertise</h4>
            <ul style={{ paddingLeft: '1.2rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Advanced training in the latest microblading techniques</li>
              <li style={{ marginBottom: '0.5rem' }}>Custom pigment formulation to match your hair and skin tone</li>
              <li style={{ marginBottom: '0.5rem' }}>Precision mapping for perfectly symmetrical brows</li>
              <li style={{ marginBottom: '0.5rem' }}>Experience with all skin types and tones</li>
              <li style={{ marginBottom: '0.5rem' }}>Specialized approaches for sensitive skin</li>
              <li>Comprehensive aftercare guidance for optimal results</li>
            </ul>
          </div>
          
          <p className="page-text">
            We invite you to explore our gallery of previous work to see the exceptional results we achieve and 
            encourage you to book an appointment to experience our services firsthand.
          </p>
        </div>
        
        <div className="book-appointment" style={{ textAlign: 'center', margin: '2.5rem 0' }}>
          <a 
            href={freshaLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary" 
          >
            BOOK APPOINTMENT
          </a>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#fff8f5', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0' }}>How Long does Microblading Last?</h3>
          <p className="page-text">
            Microblading is a semi-permanent treatment that typically lasts between 12 to 24 months, depending on individual 
            factors like skin type, lifestyle, and personal skincare routine. Clients with oily skin may experience 
            faster fading as oil production can cause the pigment to break down more quickly. Similarly, those who are 
            frequently exposed to the sun or use exfoliating skincare products may notice their microbladed brows 
            fading sooner.
          </p>
          
          <p className="page-text">
            The longevity of your microbladed brows also depends on factors such as:
          </p>
          
          <ul style={{ paddingLeft: '1.2rem', margin: '1rem 0' }}>
            <li>Your body's natural metabolism of the pigment</li>
            <li>Exposure to environmental factors like sun and pollution</li>
            <li>Your adherence to aftercare instructions</li>
            <li>The quality of pigments used (we use only premium, long-lasting pigments)</li>
            <li>The depth of pigment placement during the procedure</li>
          </ul>
          
          <p className="page-text">
            To maintain the desired eyebrow shape and color intensity, clients can return for periodic touch-ups. 
            We recommend a touch-up every 12-18 months to keep your brows looking fresh and defined. This maintenance 
            schedule ensures continuous beautiful results and prevents the need for a complete redo of the procedure.
          </p>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0' }}>What is the difference between Microblading & Eyebrow Feathering?</h3>
          <p className="page-text">
            Microblading and Eyebrow Feathering are terms often used interchangeably in Australia and refer to the same 
            process of applying semi-permanent pigment using a microblade. Both techniques focus on creating thin, 
            hair-like strokes that blend seamlessly with your natural eyebrows, enhancing their appearance while 
            maintaining a natural look.
          </p>
          
          <p className="page-text">
            While the core technique is the same, some practitioners may distinguish between the terms based on subtle 
            variations in approach:
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '1.5rem 0' }}>
            <div style={{ flex: '1 1 48%', minWidth: '250px', margin: '0.5rem', padding: '1rem', backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', textAlign: 'center' }}>Microblading</h4>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>May refer to creating slightly more defined, crisp strokes</li>
                <li>Sometimes associated with slightly deeper pigment placement</li>
                <li>Often marketed as the general term for the technique</li>
                <li>Typically used for creating a variety of brow styles</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 48%', minWidth: '250px', margin: '0.5rem', padding: '1rem', backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', textAlign: 'center' }}>Eyebrow Feathering</h4>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>Sometimes implies a softer, more wispy stroke pattern</li>
                <li>May be marketed as creating a more subtle effect</li>
                <li>Often preferred term for a more natural look</li>
                <li>Popular term in Australia and the UK</li>
              </ul>
            </div>
          </div>
          
          <p className="page-text">
            At Melbourne Designer Brows, we customize our approach based on your specific needs and desired outcome, 
            rather than rigidly adhering to terminology. Our skilled artists will discuss your preferences during 
            your consultation and recommend the best technique to achieve your ideal brows.
          </p>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', border: '1px solid #e0e0e0', padding: '2rem', borderRadius: '8px' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0', textAlign: 'center', marginBottom: '1.5rem' }}>The Microblading | Eyebrow Tattooing Procedure</h3>
          
          <p className="page-text">
            At Melbourne Designer Brows, our microblading process is meticulous and personalized, ensuring beautiful, 
            natural-looking results. The complete treatment involves two essential appointments:
          </p>
          
          <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.1rem', fontWeight: '600', color: 'var(--accent)' }}>First Appointment (2-3 hours)</h4>
          <ol style={{ paddingLeft: '1.2rem', margin: '1rem 0 1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Consultation:</strong> We begin with a thorough discussion about your desired brow shape, thickness, 
              and color. We'll review your medical history to ensure you're a good candidate for the procedure.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Design & Mapping:</strong> Using specialized tools and the golden ratio principle, we'll measure and 
              map your ideal brow shape, taking into account your facial features, symmetry, and bone structure. You'll 
              approve the design before we proceed.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Color Selection:</strong> We'll help you select the perfect pigment shade that complements your 
              skin tone, hair color, and personal preference.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Numbing:</strong> A topical anesthetic is applied to ensure your comfort throughout the procedure. 
              This takes approximately 20-30 minutes to take effect.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Microblading Application:</strong> Using our specialized hand tool, we'll create precise, hair-like 
              strokes that deposit pigment into the superficial layers of your skin, following your approved design.
            </li>
            <li>
              <strong>Aftercare Instructions:</strong> We'll provide detailed aftercare instructions and a specialized 
              healing balm to ensure optimal results during the healing process.
            </li>
          </ol>
          
          <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.1rem', fontWeight: '600', color: 'var(--accent)' }}>Healing Period (4-6 weeks)</h4>
          <p className="page-text">
            During this time, your brows will go through several phases:
          </p>
          <ul style={{ paddingLeft: '1.2rem', margin: '0.5rem 0 1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Days 1-3:</strong> Brows appear darker and more defined than the final result
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Days 4-7:</strong> Possible flaking and scabbing as the skin heals
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Days 7-14:</strong> Color may appear lighter as new skin forms
            </li>
            <li>
              <strong>Weeks 2-4:</strong> True color gradually develops as the pigment settles
            </li>
          </ul>
          
          <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1.1rem', fontWeight: '600', color: 'var(--accent)' }}>Second Appointment: Perfection Visit (1-2 hours)</h4>
          <p className="page-text">
            This critical follow-up session occurs 6-8 weeks after your initial treatment, allowing us to:
          </p>
          <ul style={{ paddingLeft: '1.2rem', margin: '0.5rem 0 1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              Assess how your skin has retained the pigment
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Fill in any areas that may need more definition
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Make adjustments to perfect the shape and density
            </li>
            <li>
              Ensure symmetry and overall natural appearance
            </li>
          </ul>
          
          <div style={{ margin: '1.5rem 0', padding: '1rem', backgroundColor: 'rgba(250,245,255,0.5)', borderRadius: '6px', borderLeft: '4px solid var(--accent)' }}>
            <p style={{ fontStyle: 'italic', margin: '0' }}>
              <strong>Important:</strong> The perfection visit is a crucial element of the full microblading process, separate from your initial 
              appointment, and is key to achieving the best possible results. Though it may not be necessary for everyone,  
              we strongly recommend this additional session for most clients to ensure perfection. 
            </p>
          </div>
          
        <p className="page-text">
            We look forward to helping you achieve your ideal eyebrow look at Melbourne Designer Brows. Contact us 
            today to schedule your appointment.
          </p>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem' }}>
          <h3 className="page-section-subheading" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Benefits of Microblading</h3>
          <ul className="service-benefits" style={{ margin: '1.5rem 0' }}>
            <li><strong>Save time</strong> on your morning makeup routine</li>
            <li><strong>Wake up</strong> with perfect brows every day</li>
            <li><strong>Results last</strong> 1-3 years with proper aftercare</li>
            <li><strong>Waterproof</strong> and smudge-proof</li>
            <li><strong>Natural-looking</strong> results</li>
            <li><strong>Ideal</strong> for those with thin or sparse eyebrows</li>
            <li><strong>Perfect</strong> for active lifestyles</li>
          </ul>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', backgroundColor: '#f0f8f5', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0', textAlign: 'center' }}>Microblading Aftercare Guide</h3>
          <p className="page-text">
            Proper aftercare is essential for achieving optimal results from your microblading treatment. Following these 
            instructions will help ensure better pigment retention and minimize the risk of complications during healing.
          </p>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>Immediate Aftercare (First 24 Hours)</h4>
            <ul style={{ paddingLeft: '1.2rem' }}>
              <li>Keep the area completely dry</li>
              <li>Avoid touching the treated area except for necessary aftercare</li>
              <li>Apply the aftercare ointment provided only if instructed to do so on day one</li>
              <li>Sleep with your face up to avoid pressure on your brows</li>
              <li>Avoid exercise, swimming, and excessive sweating</li>
            </ul>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>Days 2-7 (Critical Healing Period)</h4>
            <ul style={{ paddingLeft: '1.2rem' }}>
              <li>Apply a thin layer of the provided aftercare balm with clean fingers 2-3 times per day</li>
              <li>Do not pick, scratch or rub the treated area – let scabs fall off naturally</li>
              <li>Avoid makeup on the brow area until fully healed</li>
              <li>Avoid direct sun exposure, saunas, steam rooms, and swimming pools</li>
              <li>Avoid strenuous exercise that causes excessive sweating</li>
              <li>Do not use facial scrubs, peels, or anti-aging products around the brow area</li>
            </ul>
          </div>
          
          <div style={{ margin: '1rem 0 1.5rem', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '6px', borderLeft: '4px solid var(--accent)' }}>
            <p style={{ fontSize: '0.95rem', fontStyle: 'italic', margin: '0' }}>
              <strong>Important Note:</strong> During the healing process, your brows will go through several phases. Initially, they will appear 
              30-40% darker and more defined than the final result. Around days 3-5, flaking and scabbing may occur. 
              By days 7-10, the color may appear lighter as new skin forms over the area. The true color will develop 
              over 4-6 weeks as the pigment settles.
            </p>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>Long-Term Care (After Healing)</h4>
            <ul style={{ paddingLeft: '1.2rem' }}>
              <li>Apply sunscreen (minimum SPF 30) to the brow area when exposed to direct sunlight</li>
              <li>Avoid chemical treatments directly on the brow area (including glycolic acid, retinol)</li>
              <li>Minimize oil-based products around the brow area</li>
              <li>Schedule regular touch-ups every 12-18 months to maintain your results</li>
        </ul>
          </div>
          
          <p className="page-text" style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>
            Following these aftercare instructions carefully will help ensure your microblading results look their 
            best and last as long as possible. If you experience any unusual redness, swelling, or signs of infection, 
            please contact us immediately.
          </p>
        </div>
        
        <div className="pricing-section" style={{ marginTop: '3rem', backgroundColor: '#f8f5ff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <h2 className="page-section-heading" style={{ textAlign: 'center', marginTop: '0' }}>Pricing</h2>
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
          <p className="price-note" style={{ marginTop: '1rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
            * Please contact us to discuss if you require correction of work done by others. We are able to assist in most cases however suitability is on a case by case basis. Corrective work may require removal or lightening procedures performed.
          </p>
        </div>
        
        <div className="service-section" style={{ marginTop: '3rem', backgroundColor: '#f5f8ff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <h2 className="page-section-heading" style={{ textAlign: 'center', marginTop: '0' }}>Frequently Asked Questions</h2>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Is microblading painful?</h4>
            <p className="page-text">
              Discomfort during microblading varies from person to person. We apply a topical numbing cream before the procedure to minimize any pain. Most clients describe the sensation as uncomfortable rather than painful, similar to a scratching feeling. The initial pass may be more noticeable, but as the numbing cream takes effect, discomfort typically decreases.
            </p>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>What is the healing process like?</h4>
            <p className="page-text">
              The healing process takes approximately 10-14 days. Initially, your brows will appear 30-40% darker and more defined than the final result. During the first week, you may experience some flaking and scabbing as the skin heals. It's essential to follow the aftercare instructions provided. After healing, the color will soften, and the strokes will appear more natural. A touch-up session 6-8 weeks later ensures the best results.
            </p>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Who is not a good candidate for microblading?</h4>
            <p className="page-text">
              Microblading is not recommended for individuals who:
            </p>
            <ul style={{ paddingLeft: '1.2rem' }}>
              <li>Are pregnant or breastfeeding</li>
              <li>Have diabetes (unless well-controlled)</li>
              <li>Have a history of keloids or hypertrophic scarring</li>
              <li>Are using Accutane (must be off for at least 6 months)</li>
              <li>Are undergoing chemotherapy (consult your doctor)</li>
              <li>Have a bleeding disorder or take blood thinners</li>
              <li>Have extremely oily skin (results may not last as long)</li>
              <li>Have active skin conditions in the brow area</li>
            </ul>
            <p className="page-text">
              During your consultation, we'll discuss your medical history to determine if microblading is right for you.
            </p>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>How do I prepare for my microblading appointment?</h4>
            <p className="page-text">
              For optimal results, we recommend:
            </p>
            <ul style={{ paddingLeft: '1.2rem' }}>
              <li>Avoid alcohol, caffeine, and painkillers (except Tylenol) for 24 hours before your appointment</li>
              <li>Avoid blood thinners like aspirin, vitamin E, and fish oil supplements for 48 hours before (if medically safe for you)</li>
              <li>Avoid chemical peels, Botox, or other facial treatments for 2-3 weeks before</li>
              <li>Avoid sun exposure and tanning before your appointment</li>
              <li>Come with clean brows, without makeup</li>
              <li>Avoid eyebrow threading, waxing, or tinting for at least one week before</li>
            </ul>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>How do I maintain my microbladed eyebrows?</h4>
            <p className="page-text">
              To maintain your microbladed eyebrows:
            </p>
            <ul style={{ paddingLeft: '1.2rem' }}>
              <li>Follow the aftercare instructions carefully for the first 7-14 days</li>
              <li>Avoid excessive sun exposure and apply SPF to protect the pigment</li>
              <li>Avoid chemical exfoliants directly on the brow area</li>
              <li>Use gentle cleansers around the brow area</li>
              <li>Schedule touch-ups every 12-18 months to maintain the shape and color</li>
              <li>Avoid picking or scratching the brow area</li>
            </ul>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>What's the difference between microblading and machine brows/powder brows?</h4>
            <p className="page-text">
              Microblading uses a manual hand tool to create fine, hair-like strokes, resulting in a natural appearance. Machine brows or powder brows use a digital machine to implant pigment, creating a softer, shaded effect similar to brow powder makeup. Powder brows typically last longer than microblading and may be better for oily skin but provide a more filled-in look rather than the defined hair strokes of microblading.
            </p>
          </div>
        </div>

        <div className="service-section" style={{ marginTop: '3rem', backgroundColor: '#fff5f8', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0', textAlign: 'center' }}>What Results to Expect</h3>
          
          <p className="page-text">
            Microblading delivers remarkable results, but it's important to have realistic expectations about the process 
            and outcome. Here's what you can expect at different stages:
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '1.5rem 0' }}>
            <div style={{ flex: '1 1 48%', minWidth: '280px', margin: '0.5rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', textAlign: 'center' }}>Immediately After Procedure</h4>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>Brows will appear 30-40% darker than final result</li>
                <li>More defined and sharper edges than the healed result</li>
                <li>Slightly swollen and red around the treated area</li>
                <li>Very crisp, detailed strokes that may look "too perfect"</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 48%', minWidth: '280px', margin: '0.5rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', textAlign: 'center' }}>After 7-14 Days</h4>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>Color may appear to have faded significantly</li>
                <li>Some areas might look patchy or uneven</li>
                <li>Strokes appear less defined as skin has healed over them</li>
                <li>Some clients experience a "ghosting" phase where the color seems to disappear</li>
              </ul>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '1.5rem 0' }}>
            <div style={{ flex: '1 1 48%', minWidth: '280px', margin: '0.5rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', textAlign: 'center' }}>After 4-6 Weeks</h4>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>True color has developed as pigment settles in the skin</li>
                <li>Some areas may need reinforcement (addressed at touch-up)</li>
                <li>More natural-looking as the initial intensity has softened</li>
                <li>Any gaps or inconsistencies become more apparent</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 48%', minWidth: '280px', margin: '0.5rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', textAlign: 'center' }}>After Touch-Up (Final Result)</h4>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>Perfectly balanced, symmetrical brows</li>
                <li>Natural-looking hair strokes that blend with your own brow hair</li>
                <li>Ideal color that complements your skin tone and hair</li>
                <li>Even distribution of pigment and definition</li>
                <li>Results typically last 12-24 months depending on skin type</li>
              </ul>
            </div>
          </div>
          
          <p className="page-text" style={{ margin: '1.5rem 0 0.5rem' }}>
            Remember that microblading is not a one-size-fits-all treatment. Your results will be unique to your skin 
            type, lifestyle, and how closely you follow the aftercare instructions. Our experienced artists at Melbourne 
            Designer Brows will work with you to achieve the most natural, beautiful results possible for your specific 
            features and preferences.
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
      </article>

      <div className="service-hero">
        <div className="service-hero-content">
          <h3>Transform Your Brows with Expert Microblading</h3>
          <p>
            Experience the art of microblading at Melbourne Designer Brows. Our skilled technicians create natural-looking, perfectly shaped eyebrows that enhance your features.
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
    </>
  );
} 