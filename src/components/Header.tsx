'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const pathname = usePathname();
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  // Close menu when changing pages
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  // Function to handle link clicks
  const handleLinkClick = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <div></div>
          <div></div>
          <div></div>
        </button>

        <div className="logo-container">
          <Link href="/" className="logo-link" onClick={handleLinkClick}>
            <Image 
              src="/images/goldlogo-full.jpg" 
              alt="Melbourne Designer Brows Logo" 
              width={180} 
              height={45} 
              className="site-logo"
              priority
            />
          </Link>
        </div>
        
        <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <div 
            className="nav-item-with-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link 
              href="/services" 
              className={`has-dropdown ${pathname === '/services' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <div className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
              <Link href="/services/microblading" onClick={handleLinkClick}>Microblading</Link>
              <Link href="/services/microneedling" onClick={handleLinkClick}>Microneedling</Link>
              <Link href="/services/cosmetic-tattooing" onClick={handleLinkClick}>Cosmetic Tattooing</Link>
              <Link href="/services/tattoo-removal" onClick={handleLinkClick}>Tattoo Removal</Link>
              <Link href="/services/brow-corrections" onClick={handleLinkClick}>Brow Corrections</Link>
            </div>
          </div>
          <Link 
            href="/pricing" 
            className={pathname === '/pricing' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Pricing
          </Link>
          <Link 
            href="/gallery" 
            className={pathname === '/gallery' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Gallery
          </Link>
          <div 
            className="nav-item-with-dropdown"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <Link 
              href="/about" 
              className={`has-dropdown ${pathname === '/about' ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              About Us
            </Link>
            <div className={`dropdown-menu ${aboutOpen ? 'show' : ''}`}>
              <Link href="/contact" onClick={handleLinkClick}>Contact Us</Link>
            </div>
          </div>
          <Link 
            href="/faq" 
            className={pathname === '/faq' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            FAQ
          </Link>
          <a 
            href={freshaLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="mobile-nav-book"
            onClick={handleLinkClick}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 