import Image from 'next/image';
import Link from 'next/link';
import TrackingAnchor from '@/components/TrackingAnchor';
import WebPageSchema from '@/components/WebPageSchema';
import HowToSchema from '@/components/HowToSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Microblading Healing Stages 2024 | Day-by-Day Recovery Guide',
  description: 'Complete guide to microblading healing stages with photos. Learn what to expect each day, how to care for your brows, and ensure perfect healing. Expert advice from Melbourne Designer Brows.',
  alternates: {
    canonical: 'https://mdbrows.com.au/microblading-healing-stages',
  },
  openGraph: {
    title: 'Microblading Healing Process | Complete Recovery Timeline',
    description: 'Detailed day-by-day guide to microblading healing. Understand each stage, see real photos, and get expert aftercare tips for perfect results.',
    url: 'https://mdbrows.com.au/microblading-healing-stages',
    type: 'article',
    images: [{
      url: 'https://mdbrows.com.au/images/microblading-healing-stages.webp',
      width: 1200,
      height: 630,
      alt: 'Microblading Healing Stages Timeline',
    }],
  },
};

export default function MicrobladingHealingStages() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  const healingSteps = [
    {
      name: "Day 1-2: Fresh Microblading",
      text: "Brows appear darker and bolder than final result. Slight redness and tenderness. Apply aftercare balm every 2 hours.",
      image: "https://mdbrows.com.au/images/healing-day-1.webp"
    },
    {
      name: "Day 3-4: Darkening Phase",
      text: "Brows reach peak darkness and may feel tight. Continue gentle cleaning and aftercare application. Avoid water directly on brows.",
      image: "https://mdbrows.com.au/images/healing-day-3.webp"
    },
    {
      name: "Day 5-7: Flaking Begins",
      text: "Light scabbing and flaking starts. DO NOT pick or scratch. Let flakes fall naturally. Brows may appear patchy.",
      image: "https://mdbrows.com.au/images/healing-day-5.webp"
    },
    {
      name: "Day 8-10: Major Peeling",
      text: "Most flaking occurs during this phase. Color appears very light underneath. This is normal - pigment will resurface.",
      image: "https://mdbrows.com.au/images/healing-day-8.webp"
    },
    {
      name: "Day 11-14: Color Returns",
      text: "Flaking completes and true color begins to show. Brows may still look uneven. Continue gentle aftercare routine.",
      image: "https://mdbrows.com.au/images/healing-day-11.webp"
    },
    {
      name: "Day 15-30: Final Healing",
      text: "Color continues to develop and settle. By day 30, you'll see 70% of final result. Schedule touch-up for week 6-8.",
      image: "https://mdbrows.com.au/images/healing-day-30.webp"
    }
  ];

  return (
    <div className="page-content">
      <WebPageSchema
        title="Microblading Healing Stages - Complete Recovery Guide"
        description="Comprehensive day-by-day guide to microblading healing process with timeline and aftercare instructions"
        url="https://mdbrows.com.au/microblading-healing-stages/"
        breadcrumbs={[
          { name: "Home", url: "https://mdbrows.com.au/" },
          { name: "Microblading Healing Stages", url: "https://mdbrows.com.au/microblading-healing-stages/" }
        ]}
        speakable={[".healing-intro", ".stage-description", ".aftercare-tips"]}
      />
      
      <HowToSchema
        name="How to Care for Microblading During Healing"
        description="Step-by-step guide to properly care for your microbladed eyebrows during the healing process"
        totalTime="PT720H"
        estimatedCost={{ value: "50", currency: "AUD" }}
        supply={["Aftercare balm", "Cotton swabs", "Distilled water", "Clean pillowcase"]}
        steps={healingSteps}
        image="https://mdbrows.com.au/images/microblading-healing-guide.webp"
      />
      
      <h1 className="page-section-heading">Microblading Healing Stages: Your Complete Recovery Guide</h1>
      
      <div className="healing-intro" style={{ 
        maxWidth: '800px', 
        margin: '0 auto 3rem', 
        textAlign: 'center' 
      }}>
        <p className="page-text" style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8' 
        }}>
          Understanding the microblading healing process is crucial for achieving perfect results. 
          This comprehensive guide walks you through each stage of healing, what to expect, and 
          how to care for your brows during the 4-week recovery period.
        </p>
      </div>

      {/* Visual Timeline */}
      <section className="healing-timeline" style={{ 
        marginBottom: '4rem',
        background: '#f9f9f9',
        padding: '3rem 2rem',
        borderRadius: '8px'
      }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          The 30-Day Healing Timeline
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          maxWidth: '1000px',
          margin: '0 auto',
          marginBottom: '2rem'
        }}>
          {['Day 1', 'Day 3', 'Day 5', 'Day 7', 'Day 10', 'Day 14', 'Day 21', 'Day 30'].map((day, index) => (
            <div key={index} style={{
              background: '#fff',
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: index < 4 ? '#f5f2ea' : 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.5rem',
                color: index < 4 ? 'var(--accent)' : '#fff',
                fontWeight: 'bold'
              }}>
                {day.split(' ')[1]}
              </div>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>{day}</p>
            </div>
          ))}
        </div>
        
        <div style={{
          background: '#fff',
          padding: '1.5rem',
          borderRadius: '8px',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <p style={{ margin: 0, fontWeight: '600' }}>
            💡 <strong>Key Timeline:</strong> Days 1-7 (Initial healing) → Days 8-14 (Peeling phase) → 
            Days 15-30 (Color development) → Week 6-8 (Touch-up appointment)
          </p>
        </div>
      </section>

      {/* Detailed Stages */}
      <section className="detailed-stages" style={{ marginBottom: '4rem' }}>
        <h2 className="service-subtitle">Day-by-Day Healing Breakdown</h2>
        
        {/* Days 1-2 */}
        <div className="stage-section" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '2rem',
          marginBottom: '3rem',
          alignItems: 'start'
        }}>
          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: '20px'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Days 1-2</h3>
            <h4 style={{ marginBottom: '1rem' }}>Fresh & Bold Phase</h4>
            <div style={{
              background: '#f5f2ea',
              padding: '1rem',
              borderRadius: '6px',
              marginBottom: '1rem'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                <strong>Appearance:</strong> 40-60% darker than final result
              </p>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li>✓ Slight swelling</li>
              <li>✓ Mild tenderness</li>
              <li>✓ Bold, defined look</li>
              <li>✓ Minor redness</li>
            </ul>
          </div>
          
          <div className="stage-description" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
          }}>
            <h4 style={{ marginBottom: '1rem' }}>What's Happening</h4>
            <p style={{ marginBottom: '1rem' }}>
              Your brows will appear significantly darker and more defined than the healed result. 
              This is completely normal and expected. The pigment oxidizes when exposed to air, 
              creating a darker appearance that will fade during healing.
            </p>
            
            <h4 style={{ marginBottom: '1rem' }}>Care Instructions</h4>
            <ol style={{ lineHeight: '1.8' }}>
              <li>Gently blot lymph fluid every hour for the first day</li>
              <li>Apply a rice grain-sized amount of aftercare balm</li>
              <li>Sleep on a clean pillowcase</li>
              <li>Avoid touching your brows unnecessarily</li>
              <li>No water directly on the brow area</li>
            </ol>
            
            <div style={{
              background: '#fee',
              padding: '1rem',
              borderRadius: '6px',
              marginTop: '1rem'
            }}>
              <p style={{ margin: 0, color: '#c00' }}>
                <strong>Warning:</strong> Do not apply makeup or skincare products near the brow area
              </p>
            </div>
          </div>
        </div>

        {/* Days 3-4 */}
        <div className="stage-section" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '2rem',
          marginBottom: '3rem',
          alignItems: 'start'
        }}>
          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: '20px'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Days 3-4</h3>
            <h4 style={{ marginBottom: '1rem' }}>Darkening Phase</h4>
            <div style={{
              background: '#f5f2ea',
              padding: '1rem',
              borderRadius: '6px',
              marginBottom: '1rem'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                <strong>Appearance:</strong> Darkest point of healing
              </p>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li>✓ Tightness sensation</li>
              <li>✓ Dry feeling</li>
              <li>✓ Very dark color</li>
              <li>✓ Slight itching begins</li>
            </ul>
          </div>
          
          <div className="stage-description" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
          }}>
            <h4 style={{ marginBottom: '1rem' }}>What's Happening</h4>
            <p style={{ marginBottom: '1rem' }}>
              Your brows reach their darkest point during this phase. A thin protective layer 
              forms over the pigment, making them appear even bolder. You may feel tightness 
              or mild itching as the healing process accelerates.
            </p>
            
            <h4 style={{ marginBottom: '1rem' }}>Care Instructions</h4>
            <ol style={{ lineHeight: '1.8' }}>
              <li>Continue applying aftercare balm 2-3 times daily</li>
              <li>Resist the urge to scratch or rub</li>
              <li>Pat dry if brows get wet (don't rub)</li>
              <li>Avoid steamy showers and saunas</li>
              <li>Sleep on your back if possible</li>
            </ol>
            
            <div style={{
              background: '#f0f8ff',
              padding: '1rem',
              borderRadius: '6px',
              marginTop: '1rem'
            }}>
              <p style={{ margin: 0, color: '#069' }}>
                <strong>Tip:</strong> This is when most clients worry about the darkness. 
                Trust the process - they will lighten significantly!
              </p>
            </div>
          </div>
        </div>

        {/* Days 5-7 */}
        <div className="stage-section" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '2rem',
          marginBottom: '3rem',
          alignItems: 'start'
        }}>
          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: '20px'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Days 5-7</h3>
            <h4 style={{ marginBottom: '1rem' }}>Flaking Begins</h4>
            <div style={{
              background: '#f5f2ea',
              padding: '1rem',
              borderRadius: '6px',
              marginBottom: '1rem'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                <strong>Appearance:</strong> Patchy as flaking starts
              </p>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li>✓ Light scabbing</li>
              <li>✓ Flaking begins</li>
              <li>✓ Itchy sensation</li>
              <li>✓ Uneven appearance</li>
            </ul>
          </div>
          
          <div className="stage-description" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
          }}>
            <h4 style={{ marginBottom: '1rem' }}>What's Happening</h4>
            <p style={{ marginBottom: '1rem' }}>
              The most critical phase begins. Your skin starts to regenerate, causing the 
              protective layer to flake off. This reveals lighter skin underneath, making 
              your brows appear patchy or even "disappeared" in some areas.
            </p>
            
            <h4 style={{ marginBottom: '1rem' }}>Care Instructions</h4>
            <ol style={{ lineHeight: '1.8' }}>
              <li>DO NOT pick, scratch, or pull flakes</li>
              <li>Let flakes fall off naturally</li>
              <li>Continue light aftercare application</li>
              <li>Use a clean pillowcase daily</li>
              <li>Avoid makeup on or near brows</li>
            </ol>
            
            <div style={{
              background: '#fee',
              padding: '1rem',
              borderRadius: '6px',
              marginTop: '1rem'
            }}>
              <p style={{ margin: 0, color: '#c00' }}>
                <strong>Critical:</strong> Picking at flakes can remove pigment and cause scarring. 
                Let them fall naturally!
              </p>
            </div>
          </div>
        </div>

        {/* Days 8-14 */}
        <div className="stage-section" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '2rem',
          marginBottom: '3rem',
          alignItems: 'start'
        }}>
          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: '20px'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Days 8-14</h3>
            <h4 style={{ marginBottom: '1rem' }}>Major Peeling</h4>
            <div style={{
              background: '#f5f2ea',
              padding: '1rem',
              borderRadius: '6px',
              marginBottom: '1rem'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                <strong>Appearance:</strong> Very light, may look "gone"
              </p>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li>✓ Heavy flaking</li>
              <li>✓ Very light color</li>
              <li>✓ "Disappeared" look</li>
              <li>✓ Smooth new skin</li>
            </ul>
          </div>
          
          <div className="stage-description" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
          }}>
            <h4 style={{ marginBottom: '1rem' }}>What's Happening</h4>
            <p style={{ marginBottom: '1rem' }}>
              This is often called the "ugly duckling" phase. Most of the flaking occurs now, 
              revealing new skin that appears to have little or no pigment. Don't panic - 
              the pigment is settling beneath the skin and will resurface.
            </p>
            
            <h4 style={{ marginBottom: '1rem' }}>Care Instructions</h4>
            <ol style={{ lineHeight: '1.8' }}>
              <li>Continue resisting the urge to pick</li>
              <li>You can now gently wash your face</li>
              <li>Apply minimal aftercare balm</li>
              <li>Avoid sun exposure</li>
              <li>Be patient - color will return!</li>
            </ol>
            
            <div style={{
              background: '#f0f8ff',
              padding: '1rem',
              borderRadius: '6px',
              marginTop: '1rem'
            }}>
              <p style={{ margin: 0, color: '#069' }}>
                <strong>Reassurance:</strong> Many clients panic during this phase. The "ghosting" 
                effect is temporary - your beautiful brows will return!
              </p>
            </div>
          </div>
        </div>

        {/* Days 15-30 */}
        <div className="stage-section" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '2rem',
          alignItems: 'start'
        }}>
          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: '20px'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Days 15-30</h3>
            <h4 style={{ marginBottom: '1rem' }}>Color Development</h4>
            <div style={{
              background: '#f5f2ea',
              padding: '1rem',
              borderRadius: '6px',
              marginBottom: '1rem'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                <strong>Appearance:</strong> 70% of final result
              </p>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li>✓ Color resurfaces</li>
              <li>✓ Natural appearance</li>
              <li>✓ Soft definition</li>
              <li>✓ Healed skin</li>
            </ul>
          </div>
          
          <div className="stage-description" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
          }}>
            <h4 style={{ marginBottom: '1rem' }}>What's Happening</h4>
            <p style={{ marginBottom: '1rem' }}>
              The exciting phase! Your true healed color begins to surface as the skin 
              completes its regeneration. The pigment that seemed to disappear gradually 
              returns, revealing your beautiful new brows.
            </p>
            
            <h4 style={{ marginBottom: '1rem' }}>Care Instructions</h4>
            <ol style={{ lineHeight: '1.8' }}>
              <li>Resume normal skincare routine (avoid acids on brows)</li>
              <li>Apply SPF when in sun</li>
              <li>You can now wear brow makeup if desired</li>
              <li>Take photos to track progress</li>
              <li>Book your 6-8 week touch-up</li>
            </ol>
            
            <div style={{
              background: '#e8f5e9',
              padding: '1rem',
              borderRadius: '6px',
              marginTop: '1rem'
            }}>
              <p style={{ margin: 0, color: '#2e7d32' }}>
                <strong>Success!</strong> Your brows are nearly healed. The touch-up appointment 
                will perfect any areas that need more pigment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts */}
      <section className="dos-donts" style={{
        background: '#f9f9f9',
        padding: '3rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem'
      }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Healing Do's and Don'ts
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{
            background: '#e8f5e9',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>✓ DO's</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li>✓ Keep brows dry for first 7 days</li>
              <li>✓ Apply aftercare balm as directed</li>
              <li>✓ Sleep on clean pillowcases</li>
              <li>✓ Let flakes fall naturally</li>
              <li>✓ Take progress photos</li>
              <li>✓ Be patient with the process</li>
              <li>✓ Contact us with concerns</li>
              <li>✓ Attend your touch-up appointment</li>
            </ul>
          </div>
          
          <div style={{
            background: '#fee',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h3 style={{ color: '#c00', marginBottom: '1rem' }}>✗ DON'Ts</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li>✗ Pick or scratch flakes</li>
              <li>✗ Apply makeup on healing brows</li>
              <li>✗ Exercise heavily for 7 days</li>
              <li>✗ Swim or use saunas</li>
              <li>✗ Use skincare acids near brows</li>
              <li>✗ Expose to direct sunlight</li>
              <li>✗ Sleep on your face</li>
              <li>✗ Touch with dirty hands</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Aftercare Products */}
      <section className="aftercare-tips" style={{ marginBottom: '3rem' }}>
        <h2 className="service-subtitle">Essential Aftercare Products</h2>
        
        <div style={{
          background: '#fff',
          padding: '3rem',
          borderRadius: '8px',
          boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#f5f2ea',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                🧴
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Aftercare Balm</h4>
              <p style={{ fontSize: '0.95rem' }}>
                Specialized healing balm to protect and moisturize during recovery
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#f5f2ea',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                💧
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>Gentle Cleanser</h4>
              <p style={{ fontSize: '0.95rem' }}>
                Fragrance-free, gentle cleanser for washing around the brow area
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#f5f2ea',
                borderRadius: '50%',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                ☀️
              </div>
              <h4 style={{ marginBottom: '0.5rem' }}>SPF Protection</h4>
              <p style={{ fontSize: '0.95rem' }}>
                Mineral sunscreen to protect healed brows from UV damage
              </p>
            </div>
          </div>
          
          <div style={{
            background: '#f5f2ea',
            padding: '1.5rem',
            borderRadius: '6px',
            textAlign: 'center'
          }}>
            <p style={{ margin: 0, fontSize: '1.1rem' }}>
              <strong>All aftercare products are included</strong> with your microblading service at 
              Melbourne Designer Brows
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="healing-faq" style={{ marginBottom: '3rem' }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Common Healing Questions
        </h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            marginBottom: '1rem'
          }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
              Why do my brows look so dark at first?
            </h4>
            <p>
              The pigment oxidizes when exposed to air, appearing 40-60% darker initially. 
              This darkness fades significantly during healing, revealing your true color by day 30.
            </p>
          </div>
          
          <div style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            marginBottom: '1rem'
          }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
              Is it normal for my brows to disappear during healing?
            </h4>
            <p>
              Yes! Days 8-14 often show very light or "missing" brows. This is the "ghosting" 
              phase where pigment appears to vanish but is actually settling beneath the skin.
            </p>
          </div>
          
          <div style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            marginBottom: '1rem'
          }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
              When can I wear makeup again?
            </h4>
            <p>
              You can apply makeup to other areas immediately, but avoid the brow area for 
              at least 14 days. After day 14, you can carefully apply brow makeup if needed.
            </p>
          </div>
          
          <div style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            marginBottom: '1rem'
          }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
              What if I accidentally pick a scab?
            </h4>
            <p>
              Don't panic, but avoid further picking. Apply aftercare balm and let us know 
              at your touch-up appointment. We can add more pigment to any affected areas.
            </p>
          </div>
        </div>
      </section>

      {/* Touch-Up Information */}
      <section className="touch-up-info" style={{
        background: 'linear-gradient(135deg, #f5f2ea 0%, #ffffff 100%)',
        padding: '3rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem'
      }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          The Importance of Your Touch-Up
        </h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p className="page-text" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Your 6-8 week touch-up appointment is crucial for perfecting your results. 
            During initial healing, some areas may heal lighter or lose pigment. The touch-up 
            allows us to:
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: '#fff',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Add Density</h4>
              <p style={{ fontSize: '0.95rem' }}>
                Fill any areas that healed lighter than desired
              </p>
            </div>
            
            <div style={{
              background: '#fff',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Perfect Shape</h4>
              <p style={{ fontSize: '0.95rem' }}>
                Refine and adjust the shape based on healed results
              </p>
            </div>
            
            <div style={{
              background: '#fff',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Extend Longevity</h4>
              <p style={{ fontSize: '0.95rem' }}>
                Ensure your results last the full 12-24 months
              </p>
            </div>
          </div>
          
          <p style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            fontWeight: '600'
          }}>
            Your touch-up is included in your initial service price - don't skip it!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="healing-cta" style={{ 
        textAlign: 'center',
        padding: '3rem 2rem',
        background: '#fff8f5',
        borderRadius: '8px'
      }}>
        <h2 className="service-subtitle">Ready for Beautiful, Healing Brows?</h2>
        <p className="page-text" style={{ 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          fontSize: '1.1rem' 
        }}>
          Understanding the healing process helps ensure perfect results. Our expert team 
          guides you through every stage, providing support and reassurance along the way.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <TrackingAnchor 
            href={freshaLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ fontSize: '1.1rem', padding: '15px 30px' }}
          >
            Book Your Microblading
          </TrackingAnchor>
          
          <Link 
            href="/services/microblading" 
            className="btn btn-outline"
            style={{ fontSize: '1.1rem', padding: '15px 30px' }}
          >
            Learn About Microblading
          </Link>
        </div>
        
        <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
          Questions about healing? Call us anytime - we're here to help!
        </p>
      </section>
    </div>
  );
}