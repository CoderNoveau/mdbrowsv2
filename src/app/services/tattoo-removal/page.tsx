import Link from 'next/link';
import Image from 'next/image';
import TrackingAnchor from '@/components/TrackingAnchor';
import ServiceSchema from '@/components/ServiceSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tattoo Removal Melbourne | Melbourne Designer Brows',
  description: 'Professional tattoo removal services in Melbourne. Safe and effective removal of unwanted tattoos, including cosmetic tattoos and microblading. Book your consultation today.',
  alternates: {
    canonical: 'https://mdbrows.com.au/services/tattoo-removal',
  },
  openGraph: {
    title: 'Tattoo Removal Melbourne | Melbourne Designer Brows',
    description: 'Professional tattoo removal services in Melbourne. Safe and effective removal of unwanted tattoos, including cosmetic tattoos and microblading. Book your consultation today.',
    url: 'https://mdbrows.com.au/services/tattoo-removal',
    images: [{
      url: 'https://mdbrows.com.au/images/service-tattoo-removal.webp',
    }],
    type: 'article',
  },
};

export default function TattooRemoval() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <ServiceSchema 
        serviceName="Tattoo Removal"
        description="Professional tattoo removal services using advanced techniques to safely and effectively remove unwanted tattoos including cosmetic tattoos and microblading"
        price="350"
        duration="PT1H"
        category="Tattoo Removal"
      />
      <h1 className="page-section-heading">Tattoo Removal</h1>
      
      <div className="service-image-container" style={{ marginBottom: '2rem', position: 'relative', width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
        <Image 
          src="/images/service-tattoo-removal.webp"
          alt="Tattoo Removal procedure" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="service-description">
        <p className="page-text">
          Our advanced tattoo removal service helps you safely and effectively remove unwanted tattoos, 
          including old cosmetic tattoos and microblading. Using state-of-the-art Q-switched laser technology, 
          we can significantly fade or completely remove your unwanted ink with minimal discomfort and 
          exceptional results.
        </p>
        
        <p className="page-text" style={{ marginBottom: '2.5rem' }}>
          Whether you're looking to remove an old cosmetic procedure or prepare for a new one, our 
          experienced technicians will create a customized treatment plan to achieve your desired results.
          We understand that everyone's skin and tattoo are different, which is why we take a personalized 
          approach to each removal procedure.
        </p>
        
        <div className="service-section" style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f5f5ff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0', textAlign: 'center' }}>Our Advanced Technology</h3>
          
          <p className="page-text">
            At Melbourne Designer Brows, we use two primary methods for tattoo removal:
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '1.5rem 0' }}>
            <div style={{ flex: '1 1 48%', minWidth: '280px', margin: '0.5rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', textAlign: 'center' }}>Q-Switched Laser Technology</h4>
              <p style={{ marginBottom: '1rem' }}>
                Our advanced Q-switched laser delivers ultra-short pulses of concentrated energy that shatter tattoo pigment 
                into tiny particles without damaging surrounding tissue. This technology is:
              </p>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>Effective on multiple ink colors</li>
                <li>Precise enough for cosmetic tattoo removal</li>
                <li>Designed to minimize risk of scarring</li>
                <li>Capable of targeting specific depths</li>
                <li>Gentle enough for sensitive areas</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 48%', minWidth: '280px', margin: '0.5rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', textAlign: 'center' }}>Saline Removal Method</h4>
              <p style={{ marginBottom: '1rem' }}>
                For some cosmetic tattoos, especially eyebrow treatments, we offer a specialized saline removal method that:
              </p>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>Works particularly well on permanent makeup</li>
                <li>Creates a controlled osmotic reaction</li>
                <li>Draws pigment out of the skin naturally</li>
                <li>Can be gentler for certain skin types</li>
                <li>Is ideal for preparing the area for new cosmetic tattooing</li>
              </ul>
            </div>
          </div>
          
          <p className="page-text">
            During your consultation, our experts will assess your tattoo and recommend the most appropriate removal 
            method based on the tattoo's age, ink type, location, and your skin characteristics.
          </p>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#fff8f5', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0' }}>The Removal Process</h3>
          
        <p className="page-text">
          The treatment uses advanced technology to break down tattoo pigments, which are then naturally 
            eliminated by your body's immune system. Multiple sessions may be required depending on the size, color, depth, and age
            of your tattoo, with most clients seeing significant fading after 3-6 sessions.
          </p>
          
          <div style={{ margin: '1.5rem 0', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '6px' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', textAlign: 'center' }}>Our Treatment Method</h4>
            <ol style={{ paddingLeft: '1.2rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Consultation & Assessment:</strong> We thoroughly examine your tattoo, discussing your goals and expectations.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Customized Plan:</strong> We develop a treatment strategy based on ink color, depth, location, and age.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Comfort Measures:</strong> We apply numbing cream before treatment to minimize discomfort.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Treatment Application:</strong> Using either laser or saline technique to break down the pigment.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Post-Treatment Care:</strong> We apply cooling and provide detailed aftercare instructions.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Natural Elimination:</strong> Your body naturally removes the fragmented ink particles through the lymphatic system.</li>
              <li><strong>Follow-up Sessions:</strong> Scheduled at optimal intervals (typically 6-8 weeks apart) to continue the removal process.</li>
            </ol>
          </div>
          
          <div style={{ margin: '1.5rem 0', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '6px', borderLeft: '4px solid var(--accent)' }}>
            <p style={{ fontSize: '0.95rem', fontStyle: 'italic', margin: '0' }}>
              <strong>Note on Pain Management:</strong> We prioritize your comfort during tattoo removal treatments. Unlike many other studios, we use premium numbing creams applied 30 minutes before treatment to ensure maximum comfort. Most clients describe the sensation as manageable—similar to a rubber band snap or warm pinprick sensation. Our technicians are trained to make the experience as comfortable as possible.
            </p>
          </div>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f8fff5', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0' }}>What We Can Remove</h3>
          <p className="page-text" style={{ marginBottom: '1.5rem' }}>
            Our advanced technology allows us to effectively treat a wide range of tattoos and permanent makeup:
          </p>
          <ul className="service-benefits" style={{ margin: '1.5rem 0' }}>
            <li><strong>Old cosmetic tattoos</strong> including eyebrows, eyeliner, and lip liner</li>
            <li><strong>Previous microblading work</strong> that has faded or was poorly executed</li>
            <li><strong>Unwanted permanent makeup</strong> from outdated techniques</li>
            <li><strong>Traditional tattoos</strong> of various sizes and colors</li>
            <li><strong>Various ink colors and pigments</strong> with our specialized technology</li>
          </ul>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '1.5rem 0' }}>
            <div style={{ flex: '1 1 48%', minWidth: '280px', margin: '0.5rem', padding: '1rem', backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', textAlign: 'center' }}>Best Candidates for Removal</h4>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>Older tattoos (typically easier to remove)</li>
                <li>Black and dark blue inks (respond best to treatment)</li>
                <li>Amateur or less-dense tattoos</li>
                <li>Tattoos on areas with good circulation</li>
                <li>Clients with healthy immune systems</li>
                <li>Non-smokers (typically see faster results)</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 48%', minWidth: '280px', margin: '0.5rem', padding: '1rem', backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', textAlign: 'center' }}>More Challenging Removals</h4>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <li>Newer, professionally applied tattoos</li>
                <li>Colorful inks (greens, yellows, whites)</li>
                <li>Dense, saturated tattoos</li>
                <li>Tattoos on extremities (hands, feet)</li>
                <li>Tattoos on areas with less circulation</li>
                <li>Scarred or previously treated areas</li>
              </ul>
            </div>
          </div>
          
          <p className="page-text">
            During your consultation, we'll provide a realistic assessment of your specific tattoo and expected results. 
            Even challenging tattoos can often be significantly faded, if not completely removed, with our advanced techniques.
          </p>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0', textAlign: 'center' }}>What to Expect</h3>
          <p className="page-text" style={{ marginBottom: '1rem' }}>
            The tattoo removal journey requires patience and multiple sessions:
          </p>
          <ul style={{ paddingLeft: '1.2rem' }}>
            <li><strong>Treatment Sessions:</strong> Most clients require 3-12 sessions depending on the tattoo size, color, depth, and age</li>
            <li><strong>Treatment Intervals:</strong> Sessions are typically spaced 6-8 weeks apart to allow your body to process the ink</li>
            <li><strong>Sensation:</strong> Some mild discomfort during the procedure (similar to a rubber band snap), minimized with our premium numbing creams</li>
            <li><strong>Immediate After-Effects:</strong> Temporary redness, swelling, and possible blistering that typically subsides within a few days</li>
            <li><strong>Progressive Results:</strong> Gradual fading between sessions as your body processes the ink particles</li>
            <li><strong>Treatment Time:</strong> Sessions typically last 15-30 minutes depending on the size of the tattoo</li>
          </ul>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', textAlign: 'center' }}>The Removal Timeline</h4>
            <p className="page-text" style={{ marginBottom: '1rem' }}>
              Tattoo removal is a gradual process that follows this general timeline:
            </p>
            <ol style={{ paddingLeft: '1.2rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>First 1-3 Sessions:</strong> Initial breaking up of ink particles, with noticeable fading beginning</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Sessions 4-6:</strong> Significant fading becomes apparent, with some tattoos showing 50-75% reduction</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Sessions 7-9:</strong> Further reduction of remaining ink, with greater detail loss</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Sessions 10-12:</strong> Final clearing of resistant pigments for complete or near-complete removal</li>
            </ol>
            <p className="page-text">
              Remember that results vary based on individual factors, and some tattoos may require fewer or additional sessions.
            </p>
          </div>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f0f8f5', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0', textAlign: 'center' }}>Aftercare</h3>
          <p className="page-text" style={{ marginBottom: '1rem' }}>
            Proper aftercare is essential for optimal results and minimizing potential side effects:
          </p>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>Immediate Aftercare (First 48 Hours)</h4>
            <ul style={{ paddingLeft: '1.2rem' }}>
              <li>Keep the area clean and dry</li>
              <li>Apply cold compresses for 5-10 minutes every few hours to reduce swelling</li>
              <li>Avoid tight clothing over the treated area</li>
              <li>Elevate the treated area when possible to minimize swelling</li>
              <li>Take any recommended pain relievers as directed</li>
            </ul>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>Ongoing Care (Days 3-14)</h4>
            <ul style={{ paddingLeft: '1.2rem' }}>
              <li>Apply any recommended ointments as directed</li>
              <li>Keep the area moisturized with fragrance-free lotion</li>
              <li>Avoid direct sun exposure and use SPF 30+ when healed</li>
              <li>Do not pick or scratch the treated area, even if blisters form</li>
              <li>Avoid swimming pools, hot tubs, and saunas until fully healed</li>
              <li>Gently wash the area with mild, fragrance-free soap</li>
            </ul>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>Long-Term Care (Between Sessions)</h4>
            <ul style={{ paddingLeft: '1.2rem' }}>
              <li>Maintain sun protection on the treated area</li>
              <li>Stay hydrated to help your lymphatic system process the ink</li>
              <li>Maintain a healthy lifestyle to support your immune system</li>
              <li>Avoid smoking, which can slow the removal process</li>
              <li>Attend all scheduled follow-up appointments for optimal results</li>
        </ul>
          </div>
          
          <p className="page-text" style={{ fontWeight: 'bold', marginTop: '1.5rem' }}>
            Always follow the specific aftercare instructions provided by your technician, as they may be customized 
            for your particular treatment area and skin type. If you experience any unusual symptoms or have concerns, 
            please contact us immediately.
          </p>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#fff5f8', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0', textAlign: 'center' }}>Frequently Asked Questions</h3>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>How painful is tattoo removal?</h4>
            <p className="page-text">
              Tattoo removal involves some discomfort, often described as a sensation similar to a rubber band snapping against the skin or a warm pinprick feeling. At Melbourne Designer Brows, we prioritize your comfort by applying premium numbing cream 30 minutes before your treatment begins. This significantly reduces discomfort during the procedure. Most clients find the process very tolerable, especially compared to getting the original tattoo.
            </p>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>How many sessions will I need?</h4>
            <p className="page-text">
              The number of sessions required varies significantly based on several factors: tattoo age (older tattoos typically require fewer sessions), ink colors (black and dark blue respond best), tattoo depth and density, location on the body (areas with better circulation respond faster), and individual factors like skin type and immune system function. On average, most clients require 6-10 sessions for significant removal, though this can range from 3-15 sessions in total. During your consultation, we'll provide a more specific estimate based on your particular tattoo.
            </p>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Is tattoo removal safe?</h4>
            <p className="page-text">
              Yes, when performed by trained professionals using quality equipment, tattoo removal is very safe. Our technicians are certified and experienced in the latest removal techniques. Side effects are typically minor and temporary, including redness, swelling, blistering, and temporary changes in skin texture. More serious side effects like scarring are rare when proper aftercare is followed. We conduct a thorough consultation to identify any contraindications before beginning treatment.
            </p>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>How much does tattoo removal cost?</h4>
            <p className="page-text">
              Tattoo removal pricing is based primarily on the size of the tattoo being treated. We offer single sessions as well as discounted packages of 3 or 6 sessions, which provide significant savings. Our transparent pricing structure is detailed in the pricing section below. During your consultation, we'll provide a precise quote based on your specific tattoo and treatment plan.
            </p>
          </div>
          
          <div style={{ margin: '1.5rem 0' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Can all tattoo colors be removed?</h4>
            <p className="page-text">
              While our advanced technology can effectively target most ink colors, some colors respond better than others. Black, dark blue, and red typically respond well to laser treatment. Green, yellow, and white can be more challenging and may require more sessions or may not completely disappear. During your consultation, we'll assess your specific tattoo colors and provide realistic expectations for the removal process.
            </p>
          </div>
        </div>
        
        <h3 className="page-section-subheading" style={{ marginTop: '3rem', textAlign: 'center' }}>Pricing</h3>
        
        <div className="price-section">
          <div className="price-table">
            <div className="price-table-header">
              <div>Tattoo Size</div>
              <div>Single Session</div>
              <div>Package Deals</div>
            </div>
            <div className="price-row">
              <div className="price-service">8cm x 4cm (32cm²)</div>
              <div className="price-amount">$100</div>
              <div className="price-special">3 sessions: $240<br />6 sessions: $450</div>
            </div>
            <div className="price-row">
              <div className="price-service">10cm x 6cm (60cm²)</div>
              <div className="price-amount">$150</div>
              <div className="price-special">3 sessions: $360<br />6 sessions: $675</div>
            </div>
            <div className="price-row">
              <div className="price-service">12cm x 8cm (96cm²)</div>
              <div className="price-amount">$210</div>
              <div className="price-special">3 sessions: $504<br />6 sessions: $945</div>
            </div>
            <div className="price-row">
              <div className="price-service">15cm x 12cm (180cm²)</div>
              <div className="price-amount">$250</div>
              <div className="price-special">3 sessions: $600<br />6 sessions: $1,125</div>
            </div>
            <div className="price-row">
              <div className="price-service">21cm x 15cm (315cm²)</div>
              <div className="price-amount">$350</div>
              <div className="price-special">3 sessions: $840<br />6 sessions: $1,575</div>
            </div>
            <div className="price-row">
              <div className="price-service">21cm x 20cm (420cm²)</div>
              <div className="price-amount">$400</div>
              <div className="price-special">3 sessions: $960<br />6 sessions: $1,800</div>
            </div>
            <div className="price-row">
              <div className="price-service">21cm x 30cm (630cm²)</div>
              <div className="price-amount">$450</div>
              <div className="price-special">3 sessions: $1,080<br />6 sessions: $2,025</div>
            </div>
          </div>
          <p className="price-note">
            Package deals: 20% discount for three sessions, 25% discount for six sessions.
          </p>
        </div>
        
        <h3 className="page-section-subheading">Package Deals</h3>
        <p className="page-text">
          Purchase three sessions at once for a 20% discount on the total price, or six sessions for a 25% discount.
          Multiple sessions are often required for complete removal, making our package deals a cost-effective option.
        </p>
        
        <h3 className="page-section-subheading">Additional Services</h3>
        <p className="page-text">
          We offer free consultations including test patches and personalized quotes to help you understand 
          the removal process and expected results before committing to treatment.
        </p>
        
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