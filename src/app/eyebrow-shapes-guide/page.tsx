import Image from 'next/image';
import Link from 'next/link';
import TrackingAnchor from '@/components/TrackingAnchor';
import WebPageSchema from '@/components/WebPageSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eyebrow Shapes Guide 2024 | Find Your Perfect Brow Shape',
  description: 'Complete guide to eyebrow shapes for every face. Learn which brow shape suits you best - arch, straight, rounded, or S-shaped. Expert advice from Melbourne Designer Brows.',
  alternates: {
    canonical: 'https://mdbrows.com.au/eyebrow-shapes-guide/',
  },
  openGraph: {
    title: 'Ultimate Eyebrow Shapes Guide | Find Your Perfect Match',
    description: 'Discover which eyebrow shape complements your face shape. Complete guide with examples and expert tips from Melbourne\'s leading brow artists.',
    url: 'https://mdbrows.com.au/eyebrow-shapes-guide/',
    type: 'article',
    images: [{
      url: 'https://mdbrows.com.au/images/eyebrow-shapes-guide.webp',
      width: 1200,
      height: 630,
      alt: 'Eyebrow Shapes Guide',
    }],
  },
};

export default function EyebrowShapesGuide() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "name": "Eyebrow Shapes Guide for Different Face Shapes",
    "contentUrl": "https://mdbrows.com.au/images/eyebrow-shapes-guide.webp",
    "description": "Visual guide showing different eyebrow shapes and which face shapes they complement",
    "thumbnailUrl": "https://mdbrows.com.au/images/eyebrow-shapes-guide-thumb.webp"
  };

  return (
    <div className="page-content">
      <WebPageSchema
        title="Eyebrow Shapes Guide 2024 - Find Your Perfect Brow Shape"
        description="Comprehensive guide to choosing the perfect eyebrow shape for your face shape"
        url="https://mdbrows.com.au/eyebrow-shapes-guide/"
        breadcrumbs={[
          { name: "Home", url: "https://mdbrows.com.au/" },
          { name: "Eyebrow Shapes Guide", url: "https://mdbrows.com.au/eyebrow-shapes-guide/" }
        ]}
        speakable={[".guide-intro", ".shape-description", ".face-shape-section"]}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
      
      <h1 className="page-section-heading">The Ultimate Eyebrow Shapes Guide 2024</h1>
      
      <div className="guide-intro" style={{ 
        maxWidth: '800px', 
        margin: '0 auto 3rem', 
        textAlign: 'center' 
      }}>
        <p className="page-text" style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8' 
        }}>
          Your eyebrows frame your face and can dramatically enhance your natural beauty. 
          Choosing the right eyebrow shape is crucial for achieving facial harmony. This 
          comprehensive guide will help you discover which brow shape perfectly complements 
          your unique features.
        </p>
      </div>

      {/* Visual Guide Section */}
      <section className="visual-guide" style={{ 
        marginBottom: '4rem',
        background: '#f9f9f9',
        padding: '3rem 2rem',
        borderRadius: '8px'
      }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          The 5 Essential Eyebrow Shapes
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Soft Arch */}
          <div className="shape-card" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '150px',
              height: '80px',
              background: '#f5f2ea',
              borderRadius: '8px',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem'
            }}>
              ⌒
            </div>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Soft Arch</h3>
            <p className="shape-description" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              The most versatile shape. Features a gentle curve with the highest point 
              2/3 from the inner corner. Perfect for most face shapes.
            </p>
          </div>

          {/* High Arch */}
          <div className="shape-card" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '150px',
              height: '80px',
              background: '#f5f2ea',
              borderRadius: '8px',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem'
            }}>
              ⌃
            </div>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>High Arch</h3>
            <p className="shape-description" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Dramatic and bold with a pronounced peak. Creates a lifting effect and 
              opens up the eye area. Ideal for round faces.
            </p>
          </div>

          {/* Straight */}
          <div className="shape-card" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '150px',
              height: '80px',
              background: '#f5f2ea',
              borderRadius: '8px',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem'
            }}>
              —
            </div>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Straight</h3>
            <p className="shape-description" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Horizontal with minimal arch. Creates a youthful appearance and makes 
              faces appear shorter. Popular in Korean beauty.
            </p>
          </div>

          {/* Rounded */}
          <div className="shape-card" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '150px',
              height: '80px',
              background: '#f5f2ea',
              borderRadius: '8px',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem'
            }}>
              ⌒
            </div>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Rounded</h3>
            <p className="shape-description" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Follows the eye's natural curve with no sharp angles. Softens angular 
              features and creates a friendly appearance.
            </p>
          </div>

          {/* S-Shaped */}
          <div className="shape-card" style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '150px',
              height: '80px',
              background: '#f5f2ea',
              borderRadius: '8px',
              margin: '0 auto 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem'
            }}>
              ~
            </div>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>S-Shaped</h3>
            <p className="shape-description" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Combines soft and angular elements with a slight dip. Creates dimension 
              and adds character to the face.
            </p>
          </div>
        </div>
      </section>

      {/* Face Shape Matching Guide */}
      <section className="face-shape-guide" style={{ marginBottom: '4rem' }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Match Your Face Shape to the Perfect Brow
        </h2>
        
        <div className="face-shapes" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Oval Face */}
          <div className="face-shape-section" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '2rem',
            marginBottom: '3rem',
            alignItems: 'center'
          }}>
            <div style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Oval Face</h3>
              <div style={{
                width: '120px',
                height: '150px',
                background: '#f5f2ea',
                borderRadius: '60px',
                margin: '0 auto'
              }}></div>
            </div>
            <div style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ marginBottom: '1rem' }}>Best Brow Shapes:</h4>
              <ul style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                <li><strong>Soft Arch:</strong> Enhances natural balance</li>
                <li><strong>High Arch:</strong> Adds drama without overwhelming</li>
                <li><strong>Straight:</strong> Creates a youthful look</li>
              </ul>
              <p style={{ fontStyle: 'italic' }}>
                Oval faces are the most versatile and can wear almost any brow shape. 
                Focus on enhancing your natural arch.
              </p>
            </div>
          </div>

          {/* Round Face */}
          <div className="face-shape-section" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '2rem',
            marginBottom: '3rem',
            alignItems: 'center'
          }}>
            <div style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Round Face</h3>
              <div style={{
                width: '150px',
                height: '150px',
                background: '#f5f2ea',
                borderRadius: '50%',
                margin: '0 auto'
              }}></div>
            </div>
            <div style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ marginBottom: '1rem' }}>Best Brow Shapes:</h4>
              <ul style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                <li><strong>High Arch:</strong> Creates vertical lines to elongate</li>
                <li><strong>Angular:</strong> Adds definition and structure</li>
                <li><strong>S-Shaped:</strong> Provides dimension</li>
              </ul>
              <p style={{ fontStyle: 'italic' }}>
                Avoid rounded brows that emphasize circular features. Focus on creating 
                height and angles to add length to your face.
              </p>
            </div>
          </div>

          {/* Square Face */}
          <div className="face-shape-section" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '2rem',
            marginBottom: '3rem',
            alignItems: 'center'
          }}>
            <div style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Square Face</h3>
              <div style={{
                width: '140px',
                height: '140px',
                background: '#f5f2ea',
                borderRadius: '8px',
                margin: '0 auto'
              }}></div>
            </div>
            <div style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ marginBottom: '1rem' }}>Best Brow Shapes:</h4>
              <ul style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                <li><strong>Soft Arch:</strong> Balances strong jawline</li>
                <li><strong>Rounded:</strong> Softens angular features</li>
                <li><strong>Curved:</strong> Adds femininity</li>
              </ul>
              <p style={{ fontStyle: 'italic' }}>
                Avoid flat or overly angular brows. Focus on curved shapes to soften 
                your naturally strong features.
              </p>
            </div>
          </div>

          {/* Heart Face */}
          <div className="face-shape-section" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '2rem',
            marginBottom: '3rem',
            alignItems: 'center'
          }}>
            <div style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Heart Face</h3>
              <div style={{
                width: '140px',
                height: '140px',
                background: '#f5f2ea',
                borderRadius: '70px 70px 8px 8px',
                margin: '0 auto',
                transform: 'rotate(180deg)'
              }}></div>
            </div>
            <div style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ marginBottom: '1rem' }}>Best Brow Shapes:</h4>
              <ul style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                <li><strong>Soft Arch:</strong> Complements without competing</li>
                <li><strong>Low Arch:</strong> Balances wider forehead</li>
                <li><strong>Rounded:</strong> Softens the point of chin</li>
              </ul>
              <p style={{ fontStyle: 'italic' }}>
                Avoid high arches that emphasize forehead width. Keep brows soft and 
                natural to maintain balance.
              </p>
            </div>
          </div>

          {/* Long/Oblong Face */}
          <div className="face-shape-section" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Long Face</h3>
              <div style={{
                width: '100px',
                height: '180px',
                background: '#f5f2ea',
                borderRadius: '50px',
                margin: '0 auto'
              }}></div>
            </div>
            <div style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
            }}>
              <h4 style={{ marginBottom: '1rem' }}>Best Brow Shapes:</h4>
              <ul style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                <li><strong>Straight:</strong> Creates horizontal lines</li>
                <li><strong>Flat:</strong> Makes face appear shorter</li>
                <li><strong>Extended tails:</strong> Widens the face</li>
              </ul>
              <p style={{ fontStyle: 'italic' }}>
                Avoid high arches that add vertical height. Focus on horizontal lines 
                to create the illusion of width.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Tips */}
      <section className="pro-tips" style={{ 
        background: '#fff8f5',
        padding: '3rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem'
      }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Professional Brow Shaping Tips
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
              The Golden Ratio
            </h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Your brow should start directly above your nostril, arch at the outer 
              edge of your iris, and end at a 45-degree angle from your nostril.
            </p>
          </div>

          <div style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
              Thickness Matters
            </h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Your brow thickness should be proportional to your features. Delicate 
              features suit thinner brows, while stronger features can carry fuller brows.
            </p>
          </div>

          <div style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
              Consider Your Lifestyle
            </h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Choose a shape that fits your maintenance preferences. High-maintenance 
              shapes require more frequent touch-ups.
            </p>
          </div>

          <div style={{
            background: '#fff',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
              Age Considerations
            </h4>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              As we age, softer, fuller brows tend to be more flattering. Avoid 
              overly thin or harsh shapes that can age the face.
            </p>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mistakes-section" style={{ marginBottom: '3rem' }}>
        <h2 className="service-subtitle">Common Eyebrow Shaping Mistakes to Avoid</h2>
        
        <div style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 15px rgba(0,0,0,0.1)'
        }}>
          <ul style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ display: 'flex', alignItems: 'start' }}>
              <span style={{ color: '#e74c3c', marginRight: '0.5rem', fontSize: '1.2rem' }}>✗</span>
              <div>
                <strong>Over-plucking:</strong> Creates sparse, unnatural brows that age your face
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'start' }}>
              <span style={{ color: '#e74c3c', marginRight: '0.5rem', fontSize: '1.2rem' }}>✗</span>
              <div>
                <strong>Wrong arch placement:</strong> Can make eyes appear droopy or surprised
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'start' }}>
              <span style={{ color: '#e74c3c', marginRight: '0.5rem', fontSize: '1.2rem' }}>✗</span>
              <div>
                <strong>Ignoring natural growth:</strong> Fighting your brow pattern leads to maintenance issues
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'start' }}>
              <span style={{ color: '#e74c3c', marginRight: '0.5rem', fontSize: '1.2rem' }}>✗</span>
              <div>
                <strong>Following trends blindly:</strong> Not every trend suits every face
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'start' }}>
              <span style={{ color: '#e74c3c', marginRight: '0.5rem', fontSize: '1.2rem' }}>✗</span>
              <div>
                <strong>Making brows too dark:</strong> Harsh color overwhelms natural features
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'start' }}>
              <span style={{ color: '#e74c3c', marginRight: '0.5rem', fontSize: '1.2rem' }}>✗</span>
              <div>
                <strong>Creating identical twins:</strong> Brows should be sisters, not twins
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Microblading Solution */}
      <section className="microblading-solution" style={{ 
        background: 'linear-gradient(135deg, #f5f2ea 0%, #ffffff 100%)',
        padding: '3rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem'
      }}>
        <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Achieve Your Perfect Brow Shape with Microblading
        </h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p className="page-text" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Struggling to achieve your ideal brow shape? Microblading offers a semi-permanent 
            solution that creates perfectly shaped brows tailored to your face. Our expert 
            artists at Melbourne Designer Brows analyze your facial structure, natural hair 
            growth, and personal style to design your perfect brows.
          </p>
          
          <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
            marginBottom: '2rem'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
              Why Choose Professional Brow Shaping?
            </h3>
            <ul style={{ 
              textAlign: 'left', 
              maxWidth: '600px', 
              margin: '0 auto',
              lineHeight: '1.8' 
            }}>
              <li>Expert analysis of your face shape and features</li>
              <li>Custom design that enhances your natural beauty</li>
              <li>Long-lasting results (12-24 months)</li>
              <li>No daily makeup routine needed</li>
              <li>Waterproof and smudge-proof</li>
              <li>Natural-looking hair strokes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="shapes-cta" style={{ 
        textAlign: 'center',
        padding: '3rem 2rem',
        background: '#fff8f5',
        borderRadius: '8px'
      }}>
        <h2 className="service-subtitle">Ready for Your Perfect Brows?</h2>
        <p className="page-text" style={{ 
          maxWidth: '600px', 
          margin: '0 auto 2rem',
          fontSize: '1.1rem' 
        }}>
          Book a free consultation with our brow experts. We'll analyze your face shape, 
          discuss your preferences, and design the perfect brows just for you.
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
            View Our Work
          </Link>
        </div>
      </section>
    </div>
  );
}