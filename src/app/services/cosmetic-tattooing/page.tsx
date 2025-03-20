import Link from 'next/link';
import Image from 'next/image';
import TrackingAnchor from '@/components/TrackingAnchor';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cosmetic Tattooing Melbourne | Lips, Eyeliner & More | Melbourne Designer Brows',
  description: 'Professional cosmetic tattooing services in Melbourne. Enhance your features with semi-permanent makeup for lips, eyeliner, and more. Natural-looking results by expert artists.',
  openGraph: {
    title: 'Cosmetic Tattooing Melbourne | Lips, Eyeliner & More | Melbourne Designer Brows',
    description: 'Professional cosmetic tattooing services in Melbourne. Enhance your features with semi-permanent makeup for lips, eyeliner, and more. Natural-looking results by expert artists.',
    url: 'https://mdbrows.com.au/services/cosmetic-tattooing/',
    images: [{
      url: 'https://mdbrows.com.au/images/service-cosmetic-tattooing.webp',
    }],
    type: 'article',
  },
};

export default function CosmeticTattooing() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <h1 className="page-section-heading">Cosmetic Tattooing</h1>
      
      <div className="service-image-container" style={{ marginBottom: '2rem', position: 'relative', width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
        <Image 
          src="/images/placeholder-cosmetic-tattooing.webp"
          alt="Cosmetic Tattooing procedure" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="service-description">
        <p className="page-text">
          Cosmetic Tattooing, sometimes also referred to as semi-permanent makeup, is a beauty treatment that involves 
          the controlled insertion of safe color pigments into the skin. This instantly improves the appearance of your 
          features and can save you time on your daily beauty routine.
        </p>
        
        <p className="page-text" style={{ marginBottom: '2.5rem' }}>
          Our experienced technicians specialize in creating natural, flattering results that enhance your facial features 
          while ensuring they still look authentic and suit your unique face. We use only the highest quality pigments available 
          in the market, with a diverse range of colors specifically formulated to match any skin tone perfectly.
        </p>
        
        <div className="service-section" style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#fff8f5', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0' }}>Our Cosmetic Tattooing Services</h3>
          
          <div className="cosmetic-service-item" style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Lip Blushing</h4>
            <p>Lip blushing is a semi-permanent cosmetic tattoo technique that enhances the natural color and shape of your lips, creating a soft, natural-looking tint that can last 2-3 years with proper care.</p>
            
            <div style={{ margin: '1rem 0' }}>
              <h5 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: '600' }}>What Lip Blushing Can Improve:</h5>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>Uneven lip tone or discoloration</li>
                <li>Asymmetrical lip shape</li>
                <li>Lips that have lost definition with age</li>
                <li>Small or thin lips (creates the illusion of fuller lips)</li>
                <li>Scars or imperfections on the lips</li>
              </ul>
            </div>
            
            <div style={{ margin: '1rem 0' }}>
              <h5 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: '600' }}>The Lip Blushing Process:</h5>
              <ol style={{ paddingLeft: '1.2rem' }}>
                <li>Consultation and lip shape design</li>
                <li>Custom color selection from our premium pigment collection</li>
                <li>Topical numbing (continuously reapplied for maximum comfort)</li>
                <li>Precise application of pigment using advanced techniques</li>
                <li>Initial healing (7-14 days) followed by a touch-up appointment</li>
              </ol>
            </div>
          </div>
          
          <div className="cosmetic-service-item" style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Eyeliner Enhancement</h4>
            <p>Permanent eyeliner creates a stunning, always-perfect lined effect that enhances your eye shape, creates the appearance of fuller lashes, and eliminates the daily struggle with traditional eyeliner. Our treatments are customized to your desired style, from subtle lash enhancement to bold designer looks.</p>
            
            <div style={{ margin: '1rem 0' }}>
              <h5 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: '600' }}>Eyeliner Style Options:</h5>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li><strong>Lash Enhancement:</strong> Ultra-fine line along the lash line for a subtle, natural look</li>
                <li><strong>Classic Eyeliner:</strong> Defined line that creates a clean, polished appearance</li>
                <li><strong>Designer Eyeliner:</strong> Thicker, more dramatic line that can include subtle wing effects</li>
                <li><strong>Top and Bottom Eyeliner:</strong> Complete eye definition for maximum impact</li>
              </ul>
            </div>
            
            <div style={{ margin: '1rem 0' }}>
              <h5 style={{ fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: '600' }}>Benefits of Permanent Eyeliner:</h5>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>Time-saving - wake up with perfectly lined eyes</li>
                <li>Ideal for active lifestyles - waterproof and smudge-proof</li>
                <li>Perfect for contact lens wearers and those with sensitivities to makeup</li>
                <li>Enhances eye shape and makes lashes appear fuller</li>
                <li>Custom color selection for your unique eye color and skin tone</li>
              </ul>
            </div>
          </div>

          <div className="cosmetic-service-item" style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Ombré Brows</h4>
            <p>A soft shading technique that creates a powdered effect, similar to brow powder. Perfect for those wanting a more defined, filled-in look with seamless gradation from light to dark. Ideal for clients with oily skin or those wanting a more makeup-like appearance rather than individual hair strokes.</p>
          </div>
        
        <div className="cosmetic-service-item">
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Signature Combo Brows</h4>
            <p>Our signature treatment combines both microblading and shading techniques for the most natural and dimensional look. This hybrid approach creates the perfect balance between defined hair-like strokes and soft powdered fill, resulting in beautifully textured, three-dimensional brows that adapt to your unique facial features.</p>
          </div>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f0f8f5', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0' }}>The Process</h3>
          <p className="page-text">
            Each cosmetic tattooing procedure at Melbourne Designer Brows follows our comprehensive process designed for optimal results:
          </p>
          
          <ol style={{ paddingLeft: '1.2rem', margin: '1.5rem 0' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Consultation:</strong> We begin with a thorough discussion about your desired results, analyzing your facial features and skin tone to create a personalized treatment plan.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Design &amp; Color Selection:</strong> We custom design your shape and select the perfect pigment shade from our premium collection to complement your coloring. Our high-quality pigments are specially formulated for superior results and longevity.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Pain Management:</strong> We apply a topical anesthetic before beginning the procedure and continue to reapply throughout the entire treatment to ensure maximum comfort. Many of our clients find the process so comfortable that they actually fall asleep during treatment.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Application:</strong> Using state-of-the-art equipment and advanced techniques, we precisely apply the pigment to achieve the desired effect, whether it's defining lips, creating perfectly lined eyes, or enhancing brows.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <strong>Aftercare Guidance:</strong> We provide comprehensive aftercare instructions and products to ensure optimal healing and longevity of your results.
            </li>
            <li>
              <strong>Perfection Visit:</strong> 6-8 weeks after your initial treatment, you'll return for a touch-up session to perfect your results and ensure the pigment has settled beautifully.
            </li>
          </ol>
          
          <div style={{ margin: '1.5rem 0', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '6px', borderLeft: '4px solid var(--accent)' }}>
            <p style={{ fontSize: '0.95rem', fontStyle: 'italic', margin: '0' }}>
              <strong>Note on Pain Management:</strong> Unlike many other studios, we prioritize your comfort by continuously reapplying numbing throughout the entire procedure, not just at the beginning. This comprehensive approach to pain management is so effective that many of our clients experience minimal discomfort, with some even falling asleep during their treatment. The level of discomfort varies by procedure and individual pain tolerance, with eyeliner typically being more sensitive than lip or brow treatments.
            </p>
          </div>
        </div>

        <div className="service-section" style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#fff5f8', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0', textAlign: 'center' }}>Our Premium Pigments</h3>
          
          <p className="page-text">
            At Melbourne Designer Brows, we use only the highest quality pigments available in the market. Our premium collection includes:
          </p>
          
          <ul style={{ paddingLeft: '1.2rem', margin: '1.5rem 0' }}>
            <li style={{ marginBottom: '0.5rem' }}>A diverse range of colors specifically formulated to match any skin tone perfectly</li>
            <li style={{ marginBottom: '0.5rem' }}>Professional-grade pigments chosen for their longevity and color stability</li>
            <li style={{ marginBottom: '0.5rem' }}>Hypoallergenic formulations suitable for sensitive skin</li>
            <li style={{ marginBottom: '0.5rem' }}>Pigments that age beautifully, gradually fading rather than changing to unwanted tones</li>
            <li>Custom-blended shades tailored to your unique coloring for the most natural-looking results</li>
          </ul>
          
          <p className="page-text">
            Our technicians have extensive training in color theory and skin undertone analysis, allowing them to select or custom-blend the perfect shade for your specific features. Whether you're looking for a natural enhancement or a more defined look, our pigment selection ensures beautiful, long-lasting results.
          </p>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem' }}>
          <h3 className="page-section-subheading" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Benefits of Cosmetic Tattooing</h3>
          <ul className="service-benefits" style={{ margin: '1.5rem 0' }}>
            <li><strong>Wake up</strong> with makeup already applied</li>
            <li><strong>Save time</strong> on your daily makeup routine</li>
            <li><strong>Waterproof</strong> and smudge-proof</li>
            <li><strong>Results last</strong> 1-3 years depending on the treatment</li>
            <li><strong>Enhances</strong> natural beauty</li>
            <li><strong>Perfect</strong> for active lifestyles and those with makeup allergies</li>
          </ul>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0', textAlign: 'center' }}>Frequently Asked Questions</h3>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Is cosmetic tattooing painful?</h4>
            <p className="page-text">
              At Melbourne Designer Brows, we prioritize your comfort during cosmetic tattooing procedures. We apply a topical numbing cream before beginning and, unlike many other studios, we continuously reapply numbing throughout the entire procedure—not just at the beginning. This comprehensive approach to pain management is so effective that many of our clients experience minimal discomfort, with some even falling asleep during their treatment. The level of discomfort varies by procedure and individual pain tolerance, with eyeliner typically being more sensitive than lip or brow treatments.
            </p>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>How long do the results last?</h4>
            <p className="page-text">
              Results typically last 1-3 years depending on the treatment area, your skin type, lifestyle, and aftercare. Lip blushing generally lasts 2-3 years, eyeliner 3-5 years, and brow treatments 1-3 years. Factors that can affect longevity include sun exposure, skincare routines containing exfoliants or retinol, and how your body processes the pigment. Touch-ups are recommended every 12-18 months to maintain optimal results.
            </p>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>What type of pigments do you use?</h4>
            <p className="page-text">
              We use only the highest quality pigments available in the market. Our premium collection includes a diverse range of colors specifically formulated to match any skin tone perfectly. These professional-grade pigments are chosen for their longevity, color stability, and hypoallergenic properties. We carefully select the perfect shade to complement your natural coloring, ensuring your results look completely natural while enhancing your features. Our pigments are also designed to age beautifully, gradually fading rather than changing to unwanted tones as they break down.
            </p>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>What is the healing process like?</h4>
        <p className="page-text">
              The healing process varies by treatment but generally follows these stages: Initial 24-48 hours may involve some swelling and intensity of color; days 3-7 typically include flaking or scabbing as the skin heals; and after 7-14 days, the color will appear lighter as new skin forms. The true color develops over 4-6 weeks as the pigment settles. For lip blushing, expect 3-5 days of swelling and 7-10 days of flaking. For eyeliner, expect 2-3 days of swelling and 5-7 days of flaking. We provide detailed aftercare instructions specific to your treatment to ensure optimal healing.
            </p>
          </div>
        </div>

        <h3 className="page-section-subheading" style={{ marginTop: '3rem', textAlign: 'center' }}>Pricing</h3>
        
        <div className="price-section">
          <h4 className="service-subtitle">Eyeliner</h4>
          <div className="price-table">
            <div className="price-table-header">
              <div>Service</div>
              <div>Regular Price</div>
              <div>Special Offer</div>
            </div>
            <div className="price-row">
              <div className="price-service">Lash Enhancement</div>
              <div className="price-amount has-special">$550</div>
              <div className="price-special">$450</div>
            </div>
            <div className="price-row">
              <div className="price-service">Eyeliner Top</div>
              <div className="price-amount has-special">$650</div>
              <div className="price-special">$550</div>
            </div>
            <div className="price-row">
              <div className="price-service">Designer Eyeliner (Thick)</div>
              <div className="price-amount has-special">$750</div>
              <div className="price-special">$650</div>
            </div>
            <div className="price-row">
              <div className="price-service">Eyeliner Bottom</div>
              <div className="price-amount">$350</div>
              <div className="price-special"></div>
            </div>
            <div className="price-row">
              <div className="price-service">Eyeliner Top and Bottom</div>
              <div className="price-amount has-special">$1,000</div>
              <div className="price-special">$750</div>
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
          </div>
        </div>

        <div className="price-section" style={{ marginTop: '2rem' }}>
          <h4 className="service-subtitle">Lips</h4>
          <div className="price-table">
            <div className="price-table-header">
              <div>Service</div>
              <div>Regular Price</div>
              <div>Special Offer</div>
            </div>
            <div className="price-row">
              <div className="price-service">Lip Line</div>
              <div className="price-amount has-special">$750</div>
              <div className="price-special">$500</div>
            </div>
            <div className="price-row">
              <div className="price-service">Lip Line and Blend</div>
              <div className="price-amount has-special">$850</div>
              <div className="price-special">$600</div>
            </div>
            <div className="price-row">
              <div className="price-service">Lips Full</div>
              <div className="price-amount has-special">$990</div>
              <div className="price-special">$690</div>
            </div>
            <div className="price-row">
              <div className="price-service">Lips Neutralisation</div>
              <div className="price-amount has-special">$990</div>
              <div className="price-special">from $690</div>
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
          </div>
        </div>
        
        <div className="service-cta" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <TrackingAnchor 
            href={freshaLink}
            className="btn btn-primary" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            BOOK APPOINTMENT
          </TrackingAnchor>
        </div>
      </div>
    </div>
  );
} 