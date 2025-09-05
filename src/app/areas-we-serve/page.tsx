import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Areas We Serve | Microblading Melbourne Suburbs | MDBrows',
  description: 'Melbourne Designer Brows provides microblading and cosmetic tattooing services across Melbourne. Studios in Richmond and Springvale serving all Melbourne suburbs.',
  alternates: {
    canonical: 'https://mdbrows.com.au/areas-we-serve',
  },
};

const melbourneSuburbs = {
  'Inner Melbourne': [
    { name: 'Richmond', distance: '0km', featured: true },
    { name: 'South Yarra', distance: '3km' },
    { name: 'Toorak', distance: '4km' },
    { name: 'Prahran', distance: '4km' },
    { name: 'St Kilda', distance: '6km' },
    { name: 'Carlton', distance: '5km' },
    { name: 'Fitzroy', distance: '4km' },
    { name: 'Collingwood', distance: '3km' },
    { name: 'Abbotsford', distance: '2km' },
    { name: 'Hawthorn', distance: '5km' },
  ],
  'Eastern Suburbs': [
    { name: 'Camberwell', distance: '7km' },
    { name: 'Kew', distance: '6km' },
    { name: 'Balwyn', distance: '9km' },
    { name: 'Box Hill', distance: '14km' },
    { name: 'Doncaster', distance: '16km' },
    { name: 'Templestowe', distance: '18km' },
    { name: 'Blackburn', distance: '17km' },
    { name: 'Glen Waverley', distance: '20km' },
    { name: 'Mount Waverley', distance: '18km' },
    { name: 'Burwood', distance: '12km' },
  ],
  'South Eastern Suburbs': [
    { name: 'Springvale', distance: '0km', featured: true },
    { name: 'Noble Park', distance: '3km' },
    { name: 'Dandenong', distance: '5km' },
    { name: 'Keysborough', distance: '4km' },
    { name: 'Clayton', distance: '5km' },
    { name: 'Mulgrave', distance: '7km' },
    { name: 'Wheelers Hill', distance: '8km' },
    { name: 'Rowville', distance: '12km' },
    { name: 'Endeavour Hills', distance: '10km' },
    { name: 'Hallam', distance: '12km' },
  ],
  'Bayside Suburbs': [
    { name: 'Brighton', distance: '12km' },
    { name: 'Elwood', distance: '8km' },
    { name: 'Sandringham', distance: '14km' },
    { name: 'Hampton', distance: '13km' },
    { name: 'Beaumaris', distance: '18km' },
    { name: 'Cheltenham', distance: '16km' },
    { name: 'Mentone', distance: '18km' },
    { name: 'Mordialloc', distance: '22km' },
    { name: 'Parkdale', distance: '20km' },
  ],
  'Northern Suburbs': [
    { name: 'Brunswick', distance: '8km' },
    { name: 'Coburg', distance: '12km' },
    { name: 'Preston', distance: '14km' },
    { name: 'Reservoir', distance: '16km' },
    { name: 'Thomastown', distance: '20km' },
    { name: 'Bundoora', distance: '18km' },
    { name: 'Heidelberg', distance: '15km' },
    { name: 'Ivanhoe', distance: '10km' },
    { name: 'Northcote', distance: '7km' },
    { name: 'Thornbury', distance: '9km' },
  ],
  'Western Suburbs': [
    { name: 'Footscray', distance: '10km' },
    { name: 'Yarraville', distance: '11km' },
    { name: 'Williamstown', distance: '13km' },
    { name: 'Newport', distance: '12km' },
    { name: 'Altona', distance: '18km' },
    { name: 'Sunshine', distance: '15km' },
    { name: 'Maribyrnong', distance: '9km' },
    { name: 'Essendon', distance: '12km' },
    { name: 'Moonee Ponds', distance: '10km' },
  ],
};

export default function AreasWeServe() {
  return (
    <div className="page-content">
      <h1 className="page-section-heading">Melbourne Areas We Serve</h1>
      
      <div className="areas-intro" style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <p className="page-text">
          Melbourne Designer Brows proudly serves clients across all of Melbourne from our two convenient locations 
          in <strong>Richmond</strong> and <strong>Springvale</strong>. Whether you're looking for microblading, 
          cosmetic tattooing, or brow corrections, we're easily accessible from anywhere in Melbourne.
        </p>
      </div>

      <div className="studios-section" style={{ marginBottom: '4rem' }}>
        <h2 className="section-subheading" style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Studio Locations</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div className="location-card" style={{ 
            border: '2px solid var(--accent)', 
            borderRadius: '8px', 
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(192,166,105,0.05) 0%, rgba(255,255,255,0) 100%)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Richmond Studio</h3>
            <p>📍 Richmond, VIC 3121</p>
            <p>🚊 2 min walk from Richmond Station</p>
            <p>🅿️ Street parking available</p>
            <p>☎️ Book: <a href="tel:+61390000000">03 9000 0000</a></p>
            <Link href="/locations/richmond" className="btn btn-outline" style={{ marginTop: '1rem' }}>
              View Richmond Details
            </Link>
          </div>

          <div className="location-card" style={{ 
            border: '2px solid var(--accent)', 
            borderRadius: '8px', 
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(192,166,105,0.05) 0%, rgba(255,255,255,0) 100%)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Springvale Studio</h3>
            <p>📍 Springvale, VIC 3171</p>
            <p>🚊 5 min walk from Springvale Station</p>
            <p>🅿️ Free parking on-site</p>
            <p>☎️ Book: <a href="tel:+61390000000">03 9000 0000</a></p>
            <Link href="/locations/springvale" className="btn btn-outline" style={{ marginTop: '1rem' }}>
              View Springvale Details
            </Link>
          </div>
        </div>
      </div>

      <div className="suburbs-section">
        <h2 className="section-subheading" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Melbourne Suburbs We Service
        </h2>
        
        <p className="page-text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Our expert microblading and cosmetic tattooing services are available to clients from all across Melbourne. 
          Find your suburb below to see which of our studios is closest to you.
        </p>

        {Object.entries(melbourneSuburbs).map(([region, suburbs]) => (
          <div key={region} className="region-section" style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              color: 'var(--accent)', 
              marginBottom: '1.5rem',
              borderBottom: '2px solid var(--accent)',
              paddingBottom: '0.5rem'
            }}>
              {region}
            </h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
              gap: '1rem' 
            }}>
              {suburbs.map((suburb) => (
                <div 
                  key={suburb.name} 
                  className="suburb-item"
                  style={{
                    padding: '1rem',
                    background: suburb.featured ? 'linear-gradient(135deg, rgba(192,166,105,0.1) 0%, rgba(255,255,255,0) 100%)' : '#f9f9f9',
                    borderRadius: '4px',
                    border: suburb.featured ? '2px solid var(--accent)' : '1px solid #e0e0e0'
                  }}
                >
                  <strong>{suburb.name}</strong>
                  {suburb.featured && <span style={{ color: 'var(--accent)', marginLeft: '0.5rem' }}>★</span>}
                  <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.25rem' }}>
                    {suburb.distance} from nearest studio
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="transport-section" style={{ marginTop: '4rem', padding: '2rem', background: '#f9f9f9', borderRadius: '8px' }}>
        <h2 className="section-subheading">Getting to Our Studios</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h4>🚊 By Public Transport</h4>
            <p>Both studios are conveniently located near train stations with regular services from Melbourne CBD.</p>
          </div>
          
          <div>
            <h4>🚗 By Car</h4>
            <p>Easy access via major roads. Richmond via Punt Road/Swan Street. Springvale via Springvale Road.</p>
          </div>
          
          <div>
            <h4>🅿️ Parking</h4>
            <p>Richmond: 2-hour street parking. Springvale: Free on-site parking available for all clients.</p>
          </div>
          
          <div>
            <h4>♿ Accessibility</h4>
            <p>Both studios are wheelchair accessible with ground floor entry and accessible bathrooms.</p>
          </div>
        </div>
      </div>

      <div className="service-areas-seo" style={{ marginTop: '4rem' }}>
        <h2 className="section-subheading">Professional Microblading Across Melbourne</h2>
        
        <p className="page-text">
          Melbourne Designer Brows is proud to be Melbourne's premier destination for microblading and cosmetic tattooing. 
          Our clients travel from all corners of Melbourne including the CBD, inner suburbs, and outer metropolitan areas. 
          Whether you're searching for "microblading near me" in Richmond, Springvale, South Yarra, Toorak, Brighton, 
          Camberwell, or any other Melbourne suburb, our experienced artists are here to help you achieve perfect brows.
        </p>
        
        <p className="page-text">
          We understand that choosing the right microblading artist is important. That's why we offer free consultations 
          at both our Richmond and Springvale locations. During your consultation, we'll discuss your desired look, 
          assess your natural brow shape, and create a customized treatment plan just for you.
        </p>
      </div>

      <div className="cta-section" style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h2 className="section-subheading">Ready to Transform Your Brows?</h2>
        <p className="page-text" style={{ marginBottom: '2rem' }}>
          No matter where you are in Melbourne, perfect brows are just a short trip away!
        </p>
        <a 
          href="https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Book Your Free Consultation
        </a>
      </div>
    </div>
  );
}