import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-logo">
        <h3 className="logo">Melbourne Designer Brows</h3>
      </div>

      <div className="footer-content" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between' }}>
        <div className="footer-locations">
          <h4 style={{ marginBottom: '1rem' }}>Our Studios</h4>
          <div className="location" style={{ marginBottom: '1rem' }}>
            <strong>Richmond</strong>
            <p>Level 1, 382A Bridge Rd<br />RICHMOND VIC 3122</p>
          </div>
          <div className="location">
            <strong>Springvale</strong>
            <p>Shop 4, 218 Springvale Rd<br />SPRINGVALE VIC 3171</p>
          </div>
        </div>

        <div className="footer-services">
          <h4 style={{ marginBottom: '1rem' }}>Services</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="/services/microblading" className="footer-link">Microblading</Link></li>
            <li><Link href="/services/cosmetic-tattooing" className="footer-link">Cosmetic Tattooing</Link></li>
            <li><Link href="/services/brow-corrections" className="footer-link">Brow Corrections</Link></li>
            <li><Link href="/pricing" className="footer-link">Pricing</Link></li>
          </ul>
        </div>

        <div className="footer-info">
          <h4 style={{ marginBottom: '1rem' }}>Information</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="/about" className="footer-link">About Us</Link></li>
            <li><Link href="/areas-we-serve" className="footer-link">Areas We Serve</Link></li>
            <li><Link href="/locations/richmond" className="footer-link">Richmond Studio</Link></li>
            <li><Link href="/locations/springvale" className="footer-link">Springvale Studio</Link></li>
            <li><Link href="/blog" className="footer-link">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 style={{ marginBottom: '1rem' }}>Contact</h4>
          <p>
            <strong>Phone:</strong> <a href="tel:+61418188277" className="footer-link">0418 188 277</a>
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@mdbrows.com.au" className="footer-link">info@mdbrows.com.au</a>
          </p>
          <p>
            <a href="https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="footer-link">
              Book Online
            </a>
          </p>
        </div>
      </div>

      <div className="footer-social">
        <a href="https://www.facebook.com/mdbrowsau/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          FB
        </a>
        <a href="https://www.instagram.com/mdbrowsau/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          IG
        </a>
      </div>

      <div className="footer-copyright">
        <p>© {currentYear} Melbourne Designer Brows. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 