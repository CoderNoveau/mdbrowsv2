import Link from 'next/link';
import Script from 'next/script';

const Footer = () => {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-logo">
        <h3 className="logo">Melbourne Designer Brows</h3>
      </div>

      <div className="footer-contact">
        <div className="location-container">
          <div className="location">
            <h4>Richmond Branch</h4>
            <p>Level 1, 382A Bridge Rd<br />RICHMOND VIC 3122</p>
          </div>
          
          <div className="location">
            <h4>Springvale Branch</h4>
            <p>Shop 4, 218 Springvale Rd<br />SPRINGVALE VIC 3171</p>
          </div>
        </div>
        
        <p>
          <strong>Phone:</strong> <a href="tel:+61418188277" className="footer-link">0418 188 277</a>
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:info@mdbrows.com.au" className="footer-link">info@mdbrows.com.au</a>
        </p>
        <p>
          <Link href="/contact" className="footer-link">More details on our Contact page</Link>
        </p>
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