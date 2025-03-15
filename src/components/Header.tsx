'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  // Handle mounting and click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
        setAboutOpen(false);
      }
    };

    // Only add listeners after component is mounted
    setMounted(true);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    if (mounted) {
      setMenuOpen(false);
      setServicesOpen(false);
      setAboutOpen(false);
    }
  }, [pathname, mounted]);

  // Function to handle link clicks
  const handleLinkClick = () => {
    if (mounted) {
      setMenuOpen(false);
      setServicesOpen(false);
      setAboutOpen(false);
    }
  };

  // Function to toggle dropdowns
  const toggleServices = (e: React.MouseEvent) => {
    if (!mounted) return;
    e.preventDefault();
    e.stopPropagation();
    setServicesOpen(!servicesOpen);
    setAboutOpen(false);
  };

  const toggleAbout = (e: React.MouseEvent) => {
    if (!mounted) return;
    e.preventDefault();
    e.stopPropagation();
    setAboutOpen(!aboutOpen);
    setServicesOpen(false);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-inner">
        {mounted && (
          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => mounted && setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        )}

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
          {/* Services dropdown */}
          <div className="nav-item-with-dropdown">
            <button 
              className={`dropdown-toggle ${pathname === '/services' ? 'active' : ''}`}
              onClick={toggleServices}
              aria-expanded={servicesOpen}
              disabled={!mounted}
            >
              Services
            </button>
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

          {/* About dropdown */}
          <div className="nav-item-with-dropdown">
            <button 
              className={`dropdown-toggle ${pathname === '/about' ? 'active' : ''}`}
              onClick={toggleAbout}
              aria-expanded={aboutOpen}
              disabled={!mounted}
            >
              About Us
            </button>
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