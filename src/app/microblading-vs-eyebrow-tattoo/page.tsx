import Link from 'next/link';
import TrackingAnchor from '@/components/TrackingAnchor';
import WebPageSchema from '@/components/WebPageSchema';
import FAQSchema from '@/components/FAQSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Microblading vs Eyebrow Tattoo 2024 | Key Differences Explained',
  description: 'Complete comparison of microblading vs eyebrow tattoo. Learn the differences in technique, longevity, cost, and results. Expert guide from Melbourne Designer Brows.',
  alternates: {
    canonical: 'https://mdbrows.com.au/microblading-vs-eyebrow-tattoo',
  },
  openGraph: {
    title: 'Microblading vs Eyebrow Tattoo | Complete Comparison Guide',
    description: 'Detailed comparison between microblading and eyebrow tattoos. Understand which technique is right for you with expert advice from Melbourne.',
    url: 'https://mdbrows.com.au/microblading-vs-eyebrow-tattoo',
    type: 'article',
  },
};

export default function MicrobladingVsEyebrowTattoo() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';
  
  const comparisonFAQs = [
    {
      question: "What's the main difference between microblading and eyebrow tattoos?",
      answer: "Microblading uses a manual hand tool to create hair-like strokes in the skin's upper layers, lasting 12-24 months. Eyebrow tattoos use an electric machine to implant ink deeper into the skin, lasting 3-5 years or permanently."
    },
    {
      question: "Which is more natural looking - microblading or eyebrow tattoo?",
      answer: "Microblading typically looks more natural because it creates individual hair-like strokes that mimic real eyebrow hairs. Traditional eyebrow tattoos can look more solid and makeup-like, though modern techniques have improved this."
    },
    {
      question: "Is microblading or eyebrow tattoo more painful?",
      answer: "Both procedures involve some discomfort, but microblading is generally considered less painful as it only penetrates the skin's surface. Eyebrow tattoos go deeper and may cause more discomfort."
    },
    {
      question: "Which lasts longer - microblading or eyebrow tattoo?",
      answer: "Eyebrow tattoos last longer (3-5 years or permanent) because the ink is placed deeper in the skin. Microblading lasts 12-24 months as it's placed in the skin's upper layers and naturally fades."
    },
    {
      question: "Can I get microblading over an old eyebrow tattoo?",
      answer: "It depends on the existing tattoo's color, depth, and condition. Sometimes laser removal or color correction is needed first. Our artists assess each case individually during consultation."
    }
  ];

  return (
    <div className="page-content">
      <WebPageSchema
        title="Microblading vs Eyebrow Tattoo - Complete Comparison Guide"
        description="Comprehensive comparison between microblading and eyebrow tattoos covering technique, results, longevity, and cost"
        url="https://mdbrows.com.au/microblading-vs-eyebrow-tattoo/"
        breadcrumbs={[
          { name: "Home", url: "https://mdbrows.com.au/" },
          { name: "Microblading vs Eyebrow Tattoo", url: "https://mdbrows.com.au/microblading-vs-eyebrow-tattoo/" }
        ]}
        speakable={[".comparison-intro", ".technique-differences", ".faq-answer"]}
      />
      <FAQSchema faqs={comparisonFAQs} pageUrl="https://mdbrows.com.au/microblading-vs-eyebrow-tattoo/" />
      
      <h1 className="page-section-heading">Microblading vs Eyebrow Tattoo: Complete 2024 Comparison</h1>
      
      <div className="comparison-intro" style={{ 
        maxWidth: '800px', 
        margin: '0 auto 3rem', 
        textAlign: 'center' 
      }}>
        <p className="page-text" style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8',
          marginBottom: '2rem' 
        }}>
          Choosing between microblading and eyebrow tattoos can be confusing. While both create 
          beautiful, long-lasting brows, they use different techniques and offer distinct advantages. 
          This comprehensive guide breaks down everything you need to know to make the right choice.
        </p>
        
        <div style={{
          background: 'linear-gradient(135deg, #f5f2ea 0%, #ffffff 100%)',
          padding: '2rem',
          borderRadius: '8px',
          fontSize: '1.1rem'
        }}>
          <strong>Quick Summary:</strong> Microblading creates natural hair-like strokes with 
          12-24 month results, while eyebrow tattoos provide solid color coverage lasting 3-5 years.
        </div>
      </div>

      {/* Main Comparison Table */}
      <section className="main-comparison" style={{ marginBottom: '4rem' }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Head-to-Head Comparison
        </h2>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ 
            width: '100%', 
            maxWidth: '1000px',
            margin: '0 auto',
            borderCollapse: 'collapse',
            backgroundColor: '#fff',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--accent)', color: '#fff' }}>
                <th style={{ padding: '1.5rem 1rem', textAlign: 'left' }}>Factor</th>
                <th style={{ padding: '1.5rem 1rem', textAlign: 'center' }}>Microblading</th>
                <th style={{ padding: '1.5rem 1rem', textAlign: 'center' }}>Eyebrow Tattoo</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '600' }}>Technique</td>
                <td style={{ padding: '1.2rem 1rem' }}>Manual hand tool, hair-like strokes</td>
                <td style={{ padding: '1.2rem 1rem' }}>Electric machine, solid coverage</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '600' }}>Appearance</td>
                <td style={{ padding: '1.2rem 1rem' }}>Natural, textured hair strokes</td>
                <td style={{ padding: '1.2rem 1rem' }}>Solid, makeup-like finish</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '600' }}>Longevity</td>
                <td style={{ padding: '1.2rem 1rem' }}>12-24 months</td>
                <td style={{ padding: '1.2rem 1rem' }}>3-5 years or permanent</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '600' }}>Skin Depth</td>
                <td style={{ padding: '1.2rem 1rem' }}>Surface layer (epidermis)</td>
                <td style={{ padding: '1.2rem 1rem' }}>Deeper (dermis)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '600' }}>Healing Time</td>
                <td style={{ padding: '1.2rem 1rem' }}>7-14 days</td>
                <td style={{ padding: '1.2rem 1rem' }}>14-21 days</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '600' }}>Touch-ups</td>
                <td style={{ padding: '1.2rem 1rem' }}>Every 12-18 months</td>
                <td style={{ padding: '1.2rem 1rem' }}>Every 3-5 years (if needed)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '600' }}>Cost (Melbourne)</td>
                <td style={{ padding: '1.2rem 1rem' }}>$550-$750</td>
                <td style={{ padding: '1.2rem 1rem' }}>$800-$1200</td>
              </tr>
              <tr style={{ backgroundColor: '#f9f9f9' }}>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '600' }}>Best For</td>
                <td style={{ padding: '1.2rem 1rem' }}>Natural look, flexibility</td>
                <td style={{ padding: '1.2rem 1rem' }}>Long-term solution, dramatic change</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Technique Differences */}
      <section className="technique-differences" style={{ marginBottom: '4rem' }}>
        <h2 className="service-subtitle">How the Techniques Differ</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '3rem',
          marginTop: '2rem'
        }}>
          {/* Microblading */}
          <div className="technique-card" style={{
            background: '#fff',
            padding: '2.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Microblading Technique
            </h3>
            
            <div style={{
              background: '#f5f2ea',
              padding: '2rem',
              borderRadius: '8px',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✏️</div>
              <p style={{ margin: 0, fontWeight: '600' }}>Manual Hand Tool</p>
            </div>
            
            <h4 style={{ marginBottom: '1rem' }}>How It Works:</h4>
            <ul style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
              <li>Uses a fine blade with 7-21 micro-needles</li>
              <li>Artist manually creates each hair stroke</li>
              <li>Pigment deposited in skin's upper layer</li>
              <li>Mimics natural eyebrow hair direction</li>
            </ul>
            
            <h4 style={{ marginBottom: '1rem' }}>Advantages:</h4>
            <ul style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
              <li>✓ Incredibly natural appearance</li>
              <li>✓ Individual hair-like strokes</li>
              <li>✓ Less traumatic to skin</li>
              <li>✓ Easier to correct or adjust</li>
              <li>✓ Fades naturally over time</li>
            </ul>
            
            <h4 style={{ marginBottom: '1rem' }}>Best For:</h4>
            <ul style={{ lineHeight: '1.8' }}>
              <li>Those wanting natural enhancement</li>
              <li>People with some existing brow hair</li>
              <li>First-time cosmetic tattoo clients</li>
              <li>Those preferring flexibility in style</li>
            </ul>
          </div>

          {/* Eyebrow Tattoo */}
          <div className="technique-card" style={{
            background: '#fff',
            padding: '2.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Eyebrow Tattoo Technique
            </h3>
            
            <div style={{
              background: '#f5f2ea',
              padding: '2rem',
              borderRadius: '8px',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <p style={{ margin: 0, fontWeight: '600' }}>Electric Machine</p>
            </div>
            
            <h4 style={{ marginBottom: '1rem' }}>How It Works:</h4>
            <ul style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
              <li>Uses vibrating needle machine</li>
              <li>Penetrates deeper into skin layers</li>
              <li>Creates solid color coverage</li>
              <li>Can include shading and ombré effects</li>
            </ul>
            
            <h4 style={{ marginBottom: '1rem' }}>Advantages:</h4>
            <ul style={{ lineHeight: '1.8', marginBottom: '2rem' }}>
              <li>✓ Long-lasting results</li>
              <li>✓ Good for sparse or no brow hair</li>
              <li>✓ Consistent color coverage</li>
              <li>✓ Various style options</li>
              <li>✓ Less frequent touch-ups</li>
            </ul>
            
            <h4 style={{ marginBottom: '1rem' }}>Best For:</h4>
            <ul style={{ lineHeight: '1.8' }}>
              <li>Those with little to no brow hair</li>
              <li>People wanting dramatic transformation</li>
              <li>Those preferring bold, defined brows</li>
              <li>Clients seeking long-term commitment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results Comparison */}
      <section className="results-comparison" style={{
        background: '#f9f9f9',
        padding: '3rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem'
      }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          What to Expect: Results Timeline
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Microblading Timeline */}
          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Microblading Timeline
            </h3>
            
            <div className="timeline-item" style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Day 1-7</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                Dark, bold appearance with light flaking starting around day 5
              </p>
            </div>
            
            <div className="timeline-item" style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Day 8-14</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                Major peeling phase, brows may appear very light or "missing"
              </p>
            </div>
            
            <div className="timeline-item" style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Day 15-30</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                True color emerges, showing 70% of final result
              </p>
            </div>
            
            <div className="timeline-item">
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Week 6-8</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                Touch-up appointment for perfect results
              </p>
            </div>
          </div>

          {/* Tattoo Timeline */}
          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Eyebrow Tattoo Timeline
            </h3>
            
            <div className="timeline-item" style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Day 1-10</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                Bold, solid appearance with potential swelling and scabbing
              </p>
            </div>
            
            <div className="timeline-item" style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Day 11-21</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                Scabs fall off revealing lighter color underneath
              </p>
            </div>
            
            <div className="timeline-item" style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Month 1-3</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                Color continues to settle and reach final shade
              </p>
            </div>
            
            <div className="timeline-item">
              <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Month 6</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                Touch-up if needed for density or color adjustment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing Guide */}
      <section className="choosing-guide" style={{ marginBottom: '3rem' }}>
        <h2 className="service-subtitle">How to Choose What's Right for You</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <div style={{
            background: '#e8f5e9',
            padding: '2rem',
            borderRadius: '8px',
            border: '2px solid #4caf50'
          }}>
            <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>Choose Microblading If:</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li>✓ You want the most natural look</li>
              <li>✓ You have some existing brow hair</li>
              <li>✓ You're new to cosmetic tattoos</li>
              <li>✓ You prefer flexibility in style changes</li>
              <li>✓ You want to test the waters first</li>
              <li>✓ You have oily skin (powder brows better)</li>
              <li>✓ Budget is a consideration</li>
            </ul>
          </div>
          
          <div style={{
            background: '#e3f2fd',
            padding: '2rem',
            borderRadius: '8px',
            border: '2px solid #2196f3'
          }}>
            <h3 style={{ color: '#1976d2', marginBottom: '1rem' }}>Choose Eyebrow Tattoo If:</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
              <li>✓ You have little to no brow hair</li>
              <li>✓ You want long-lasting results</li>
              <li>✓ You prefer bold, defined brows</li>
              <li>✓ You're ready for a permanent change</li>
              <li>✓ You want minimal maintenance</li>
              <li>✓ You need complete brow reconstruction</li>
              <li>✓ You're comfortable with commitment</li>
            </ul>
          </div>
        </div>
        
        <div style={{
          background: '#fff8f5',
          padding: '2rem',
          borderRadius: '8px',
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          <h4 style={{ marginBottom: '1rem' }}>Still Unsure?</h4>
          <p style={{ marginBottom: '1rem' }}>
            Many clients start with microblading to experience semi-permanent brows, 
            then decide if they want to move to permanent tattoo later.
          </p>
          <p style={{ fontWeight: '600' }}>
            Book a free consultation - our experts will assess your brows and lifestyle 
            to recommend the best option for you.
          </p>
        </div>
      </section>

      {/* Myths vs Facts */}
      <section className="myths-facts" style={{
        background: '#fff',
        padding: '3rem',
        borderRadius: '8px',
        boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
        marginBottom: '3rem'
      }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Common Myths vs Facts
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            background: '#fee',
            padding: '1.5rem',
            borderRadius: '6px',
            borderLeft: '4px solid #e74c3c'
          }}>
            <h4 style={{ color: '#c0392b', marginBottom: '0.5rem' }}>❌ MYTH</h4>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
              "Microblading and eyebrow tattoos are the same thing"
            </p>
            <p style={{ fontSize: '0.95rem' }}>
              They're completely different techniques using different tools, 
              depths, and longevity.
            </p>
          </div>
          
          <div style={{
            background: '#e8f5e9',
            padding: '1.5rem',
            borderRadius: '6px',
            borderLeft: '4px solid #27ae60'
          }}>
            <h4 style={{ color: '#27ae60', marginBottom: '0.5rem' }}>✅ FACT</h4>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
              "Both techniques require skill and experience"
            </p>
            <p style={{ fontSize: '0.95rem' }}>
              Success depends heavily on artist expertise, regardless 
              of which technique you choose.
            </p>
          </div>
          
          <div style={{
            background: '#fee',
            padding: '1.5rem',
            borderRadius: '6px',
            borderLeft: '4px solid #e74c3c'
          }}>
            <h4 style={{ color: '#c0392b', marginBottom: '0.5rem' }}>❌ MYTH</h4>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
              "Eyebrow tattoos always look unnatural"
            </p>
            <p style={{ fontSize: '0.95rem' }}>
              Modern techniques like powder brows and ombré can look 
              very natural when done by skilled artists.
            </p>
          </div>
          
          <div style={{
            background: '#e8f5e9',
            padding: '1.5rem',
            borderRadius: '6px',
            borderLeft: '4px solid #27ae60'
          }}>
            <h4 style={{ color: '#27ae60', marginBottom: '0.5rem' }}>✅ FACT</h4>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
              "Both procedures require proper aftercare"
            </p>
            <p style={{ fontSize: '0.95rem' }}>
              Following aftercare instructions is crucial for both 
              techniques to heal properly and achieve best results.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="comparison-faq" style={{ marginBottom: '3rem' }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Frequently Asked Questions
        </h2>
        
        <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {comparisonFAQs.map((faq, index) => (
            <div key={index} className="faq-item" style={{
              background: '#fff',
              padding: '1.5rem',
              marginBottom: '1rem',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <h3 className="faq-question" style={{ 
                color: 'var(--accent)', 
                marginBottom: '0.5rem',
                fontSize: '1.1rem'
              }}>
                {faq.question}
              </h3>
              <p className="faq-answer" style={{ lineHeight: '1.6' }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Melbourne Designer Brows Expertise */}
      <section className="expertise-section" style={{
        background: 'linear-gradient(135deg, #f5f2ea 0%, #ffffff 100%)',
        padding: '3rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem'
      }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Expert Guidance at Melbourne Designer Brows
        </h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p className="page-text" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Our experienced artists are skilled in both microblading and eyebrow tattooing 
            techniques. We'll assess your features, lifestyle, and goals to recommend the 
            perfect approach for your dream brows.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: '#fff',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Expert Assessment</h4>
              <p style={{ fontSize: '0.95rem' }}>
                Detailed consultation to determine the best technique for you
              </p>
            </div>
            
            <div style={{
              background: '#fff',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Dual Expertise</h4>
              <p style={{ fontSize: '0.95rem' }}>
                Skilled in both microblading and tattoo techniques
              </p>
            </div>
            
            <div style={{
              background: '#fff',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Honest Advice</h4>
              <p style={{ fontSize: '0.95rem' }}>
                We recommend what's truly best for your goals and features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="comparison-cta" style={{ 
        textAlign: 'center',
        padding: '3rem 2rem',
        background: '#fff8f5',
        borderRadius: '8px'
      }}>
        <h2 className="service-subtitle">Ready to Choose Your Perfect Brow Technique?</h2>
        <p className="page-text" style={{ 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          fontSize: '1.1rem' 
        }}>
          Book a free consultation with our brow experts. We'll help you understand which 
          technique - microblading or eyebrow tattoo - will give you the results you're dreaming of.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <TrackingAnchor 
            href={freshaLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ fontSize: '1.1rem', padding: '15px 30px' }}
          >
            Book Free Consultation
          </TrackingAnchor>
          
          <Link 
            href="/services" 
            className="btn btn-outline"
            style={{ fontSize: '1.1rem', padding: '15px 30px' }}
          >
            View All Services
          </Link>
        </div>
        
        <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
          💬 Free consultations • Expert guidance • No pressure recommendations
        </p>
      </section>
    </div>
  );
}