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

  // Close menu when viewport expands beyond mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-container">
          <Link href="/" className="logo-link">
            <Image 
              src="/images/goldlogo-full.jpg" 
              alt="Melbourne Designer Brows Logo" 
              width={240} 
              height={85} 
              className="site-logo"
              priority
            />
          </Link>
        </div>
        
        <div 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        
        <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <div className="nav-item-with-dropdown">
            <Link 
              href="/services" 
              className={`has-dropdown ${pathname === '/services' ? 'active' : ''}`}
              onMouseEnter={() => setServicesOpen(true)}
            >
              Services
            </Link>
            <div 
              className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link href="/services/microblading">Microblading</Link>
              <Link href="/services/microneedling">Microneedling</Link>
              <Link href="/services/cosmetic-tattooing">Cosmetic Tattooing</Link>
              <Link href="/services/tattoo-removal">Tattoo Removal</Link>
              <Link href="/services/brow-corrections">Brow Corrections</Link>
            </div>
          </div>
          <Link href="/pricing" className={pathname === '/pricing' ? 'active' : ''}>
            Pricing
          </Link>
          <Link href="/gallery" className={pathname === '/gallery' ? 'active' : ''}>
            Gallery
          </Link>
          <div className="nav-item-with-dropdown">
            <Link 
              href="/about" 
              className={`has-dropdown ${pathname === '/about' ? 'active' : ''}`}
              onMouseEnter={() => setAboutOpen(true)}
            >
              About Us
            </Link>
            <div 
              className={`dropdown-menu ${aboutOpen ? 'show' : ''}`}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          <Link href="/faq" className={pathname === '/faq' ? 'active' : ''}>
            FAQ
          </Link>
          <a 
            href={freshaLink}
            target="_blank" 
            rel="noopener noreferrer"
            className={pathname === '/bookings' ? 'active' : ''}
          >
            Bookings
          </a>
        </nav>

        <div className="header-actions">
          <div className="phone-number">
            <a href="tel:+61418188277" className="header-phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/>
              </svg>
              0418 188 277
            </a>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/mdbrowsau/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="currentColor">
                <path d="M9.6 3h-3.2c-.4 0-.8.3-.8.7v2.3h4v3.3h-4V18H2.4V9.3H0V6h2.4V3.7C2.4 1.7 3.8 0 5.6 0h4v3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/mdbrowsau/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                <path d="M9 1.6c2.4 0 2.7 0 3.6.1.9 0 1.4.2 1.7.3.4.2.7.4 1 .7.3.3.5.6.7 1 .1.3.3.8.3 1.7.1 1 .1 1.2.1 3.6s0 2.7-.1 3.6c0 .9-.2 1.4-.3 1.7-.2.4-.4.7-.7 1-.3.3-.6.5-1 .7-.3.1-.8.3-1.7.3-1 .1-1.2.1-3.6.1s-2.7 0-3.6-.1c-.9 0-1.4-.2-1.7-.3-.4-.2-.7-.4-1-.7-.3-.3-.5-.6-.7-1-.1-.3-.3-.8-.3-1.7-.1-1-.1-1.2-.1-3.6s0-2.7.1-3.6c0-.9.2-1.4.3-1.7.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.3-.1.8-.3 1.7-.3 1-.1 1.2-.1 3.6-.1M9 0C6.6 0 6.2 0 5.3.1c-1 0-1.6.2-2.2.4-.6.2-1.1.6-1.6 1-.5.5-.8 1-1 1.6-.2.6-.4 1.2-.4 2.2C0 6.2 0 6.6 0 9s0 2.8.1 3.7c0 1 .2 1.6.4 2.2.2.6.6 1.1 1 1.6.5.5 1 .8 1.6 1 .6.2 1.2.4 2.2.4 1 .1 1.3.1 3.7.1s2.8 0 3.7-.1c1 0 1.6-.2 2.2-.4.6-.2 1.1-.6 1.6-1 .5-.5.8-1 1-1.6.2-.6.4-1.2.4-2.2.1-1 .1-1.3.1-3.7s0-2.8-.1-3.7c0-1-.2-1.6-.4-2.2-.2-.6-.6-1.1-1-1.6-.5-.5-1-.8-1.6-1-.6-.2-1.2-.4-2.2-.4C12.8 0 12.4 0 9 0zm0 4.4c-2.5 0-4.6 2-4.6 4.6 0 2.5 2 4.6 4.6 4.6 2.5 0 4.6-2 4.6-4.6 0-2.5-2.1-4.6-4.6-4.6zm0 7.6c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm5.9-7.8c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1z"/>
              </svg>
            </a>
          </div>
          <a 
            href={freshaLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary header-cta" 
          >
            BOOK APPOINTMENT
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 