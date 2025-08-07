import Link from 'next/link';
import Image from 'next/image';
import TrackingAnchor from '@/components/TrackingAnchor';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FAQSchema from '@/components/FAQSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Microblading vs Cosmetic Tattooing | Which is Best?',
  description: 'Compare microblading and cosmetic tattooing to find the best eyebrow solution for you. Learn about differences in technique, results, longevity, and cost at Melbourne Designer Brows.',
  alternates: {
    canonical: 'https://mdbrows.com.au/services/microblading-vs-cosmetic-tattooing/',
  },
  openGraph: {
    title: 'Microblading vs Cosmetic Tattooing Comparison | Melbourne Designer Brows',
    description: 'Compare microblading and cosmetic tattooing to find the best eyebrow solution for you. Expert advice from Melbourne Designer Brows.',
    url: 'https://mdbrows.com.au/services/microblading-vs-cosmetic-tattooing/',
    type: 'article',
  },
};

export default function MicrobladingVsCosmeticTattooing() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';
  
  const comparisonFAQs = [
    {
      question: "What's the main difference between microblading and cosmetic tattooing?",
      answer: "Microblading uses a manual handheld tool to create hair-like strokes that mimic natural eyebrow hairs, while cosmetic tattooing uses a machine to deposit pigment in a powdered or solid fill effect. Microblading creates a more natural, feathered look, while cosmetic tattooing provides fuller coverage."
    },
    {
      question: "Which lasts longer - microblading or cosmetic tattooing?",
      answer: "Cosmetic tattooing typically lasts 2-5 years, while microblading lasts 12-24 months. The longer duration of cosmetic tattooing is due to the deeper pigment placement and technique used."
    },
    {
      question: "Which technique is better for oily skin?",
      answer: "Cosmetic tattooing (powder brows) is generally better for oily skin types as the pigment holds better. Microblading strokes may blur or fade faster on very oily skin due to excess sebum production."
    },
    {
      question: "What is the healing time difference?",
      answer: "Both techniques have similar healing times of 4-6 weeks for complete healing. However, microblading may have slightly less initial swelling and scabbing compared to cosmetic tattooing."
    },
    {
      question: "Can I switch from one technique to the other?",
      answer: "Yes, you can transition between techniques. Many clients start with microblading and later choose cosmetic tattooing for longer-lasting results, or combine both techniques for a hybrid approach."
    }
  ];

  return (
    <div className="page-content">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://mdbrows.com.au/" },
          { name: "Services", url: "https://mdbrows.com.au/services/" },
          { name: "Microblading vs Cosmetic Tattooing", url: "https://mdbrows.com.au/services/microblading-vs-cosmetic-tattooing/" }
        ]}
      />
      <FAQSchema faqs={comparisonFAQs} pageUrl="https://mdbrows.com.au/services/microblading-vs-cosmetic-tattooing/" />
      
      <h1 className="page-section-heading">Microblading vs Cosmetic Tattooing: Complete Comparison Guide</h1>
      
      <div className="comparison-intro" style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <p className="page-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Choosing between microblading and cosmetic tattooing can be challenging. Both offer beautiful, 
          long-lasting eyebrow enhancements, but they differ in technique, appearance, and longevity. 
          This comprehensive guide will help you make the best decision for your unique needs.
        </p>
      </div>

      {/* Comparison Table */}
      <section className="comparison-table-section" style={{ marginBottom: '4rem' }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Quick Comparison Overview
        </h2>
        
        <div className="comparison-table" style={{ 
          maxWidth: '1000px', 
          margin: '0 auto',
          overflowX: 'auto'
        }}>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            backgroundColor: '#fff',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--accent)', color: '#fff' }}>
                <th style={{ padding: '1.5rem 1rem', textAlign: 'left', fontWeight: '600' }}>Feature</th>
                <th style={{ padding: '1.5rem 1rem', textAlign: 'center', fontWeight: '600' }}>Microblading</th>
                <th style={{ padding: '1.5rem 1rem', textAlign: 'center', fontWeight: '600' }}>Cosmetic Tattooing</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '500' }}>Technique</td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>Manual hand tool with fine blade</td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>Electric tattoo machine</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '500' }}>Appearance</td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>Natural hair-like strokes</td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>Powdered/ombré fill effect</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '500' }}>Best For</td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>Normal to dry skin</td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>All skin types, especially oily</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '500' }}>Longevity</td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>12-24 months</td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>2-5 years</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '500' }}>Initial Cost</td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>From $595</td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>From $450</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee', backgroundColor: '#f9f9f9' }}>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '500' }}>Pain Level</td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>Mild to moderate</td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>Mild</td>
              </tr>
              <tr>
                <td style={{ padding: '1.2rem 1rem', fontWeight: '500' }}>Touch-up Frequency</td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>Annual</td>
                <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>Every 2-3 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Comparison Sections */}
      <section className="detailed-comparison" style={{ marginBottom: '4rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          
          {/* Microblading Details */}
          <div className="technique-detail">
            <h3 className="service-subtitle">Microblading in Detail</h3>
            
            <div className="technique-card" style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>The Natural Choice</h4>
              
              <p className="page-text" style={{ marginBottom: '1.5rem' }}>
                Microblading creates incredibly natural-looking eyebrows by mimicking individual hair strokes. 
                Using a specialized handheld tool with ultra-fine needles, our artists draw each stroke to 
                match your natural hair growth pattern.
              </p>
              
              <h5 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Ideal Candidates:</h5>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                <li>Those with normal to dry skin</li>
                <li>People wanting a natural, feathered look</li>
                <li>Clients with some existing eyebrow hair</li>
                <li>Those who prefer a less filled-in appearance</li>
              </ul>
              
              <h5 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Advantages:</h5>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                <li>Most natural-looking results</li>
                <li>Perfect for enhancing sparse areas</li>
                <li>Creates realistic hair texture</li>
                <li>Less invasive than traditional tattooing</li>
              </ul>
              
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link href="/services/microblading" className="btn btn-primary">
                  Learn More About Microblading
                </Link>
              </div>
            </div>
          </div>

          {/* Cosmetic Tattooing Details */}
          <div className="technique-detail">
            <h3 className="service-subtitle">Cosmetic Tattooing in Detail</h3>
            
            <div className="technique-card" style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>The Long-Lasting Solution</h4>
              
              <p className="page-text" style={{ marginBottom: '1.5rem' }}>
                Cosmetic tattooing, including powder brows and ombré techniques, uses a digital machine to 
                create a soft, powdered effect. This method provides more coverage and definition, perfect 
                for those wanting a more polished, makeup-like finish.
              </p>
              
              <h5 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Ideal Candidates:</h5>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                <li>All skin types, especially oily</li>
                <li>People wanting fuller coverage</li>
                <li>Those who regularly fill in their brows</li>
                <li>Clients seeking longer-lasting results</li>
              </ul>
              
              <h5 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Advantages:</h5>
              <ul style={{ marginLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                <li>Lasts 2-5 years</li>
                <li>Great for oily skin types</li>
                <li>Creates defined, polished look</li>
                <li>Less frequent touch-ups needed</li>
              </ul>
              
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link href="/services/cosmetic-tattooing" className="btn btn-primary">
                  Learn More About Cosmetic Tattooing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Option */}
      <section className="hybrid-option" style={{ 
        background: 'linear-gradient(135deg, #f5f2ea 0%, #ffffff 100%)',
        padding: '3rem 0',
        marginBottom: '3rem',
        borderRadius: '8px'
      }}>
        <div className="page-section-inner">
          <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            The Best of Both Worlds: Combo Brows
          </h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p className="page-text" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Can't decide? Our Combo Brows technique combines microblading hair strokes with a 
              powder brow base, giving you natural-looking hair strokes with the longevity and 
              fullness of cosmetic tattooing.
            </p>
            
            <div style={{ 
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
              marginBottom: '2rem'
            }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Combo Brows Benefits:</h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                lineHeight: '2',
                fontSize: '1.05rem' 
              }}>
                <li>✓ Natural hair strokes at the front of the brow</li>
                <li>✓ Powder fill for density and definition</li>
                <li>✓ Suitable for most skin types</li>
                <li>✓ Longer lasting than microblading alone</li>
                <li>✓ Perfect for sparse or patchy brows</li>
              </ul>
            </div>
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

      {/* Booking CTA */}
      <section className="booking-cta" style={{ 
        textAlign: 'center',
        padding: '3rem 0',
        background: '#fff8f5',
        borderRadius: '8px'
      }}>
        <h2 className="service-subtitle" style={{ marginBottom: '1rem' }}>
          Ready to Transform Your Brows?
        </h2>
        <p className="page-text" style={{ 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          fontSize: '1.1rem' 
        }}>
          Book a free consultation with our experts to discuss which technique is best for your 
          unique features, skin type, and lifestyle. We'll help you achieve your perfect brows!
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
            href="/gallery" 
            className="btn btn-outline"
            style={{ fontSize: '1.1rem', padding: '15px 30px' }}
          >
            View Before & After
          </Link>
        </div>
      </section>
    </div>
  );
}