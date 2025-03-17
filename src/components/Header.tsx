'use client';

import { useState, useEffect, useRef, memo, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Memoized navigation links component
const NavigationLinks = memo(({ 
  handleLinkClick, 
  pathname 
}: { 
  handleLinkClick: () => void;
  pathname: string;
}) => (
  <>
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
    <Link 
      href="/faq" 
      className={pathname === '/faq' ? 'active' : ''}
      onClick={handleLinkClick}
    >
      FAQ
    </Link>
  </>
));

// Memoized dropdown component
const DropdownMenu = memo(({ 
  isOpen, 
  items, 
  handleLinkClick 
}: { 
  isOpen: boolean;
  items: Array<{ href: string; label: string; }>;
  handleLinkClick: () => void;
}) => (
  <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
    {items.map((item, index) => (
      <Link key={index} href={item.href} onClick={handleLinkClick}>
        {item.label}
      </Link>
    ))}
  </div>
));

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  // Memoize dropdown items
  const serviceItems = useMemo(() => [
    { href: '/services/microblading', label: 'Microblading' },
    { href: '/services/microneedling', label: 'Microneedling' },
    { href: '/services/cosmetic-tattooing', label: 'Cosmetic Tattooing' },
    { href: '/services/tattoo-removal', label: 'Tattoo Removal' },
    { href: '/services/brow-corrections', label: 'Brow Corrections' }
  ], []);

  const aboutItems = useMemo(() => [
    { href: '/about', label: 'About Us' },
    { href: '/locations', label: 'Locations' },
    { href: '/about/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ], []);

  // Memoized click handler
  const handleLinkClick = useCallback(() => {
    if (mounted) {
      setMenuOpen(false);
      setServicesOpen(false);
      setAboutOpen(false);
    }
  }, [mounted]);

  // Memoized toggle handlers
  const toggleServices = useCallback((e: React.MouseEvent) => {
    if (!mounted) return;
    e.preventDefault();
    e.stopPropagation();
    setServicesOpen(prev => !prev);
    setAboutOpen(false);
  }, [mounted]);

  const toggleAbout = useCallback((e: React.MouseEvent) => {
    if (!mounted) return;
    e.preventDefault();
    e.stopPropagation();
    setAboutOpen(prev => !prev);
    setServicesOpen(false);
  }, [mounted]);

  // Handle mounting and click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
        setAboutOpen(false);
      }
    };

    setMounted(true);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    if (mounted) {
      handleLinkClick();
    }
  }, [pathname, mounted, handleLinkClick]);

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
              src="/images/goldlogo-full.webp" 
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
            <DropdownMenu 
              isOpen={servicesOpen}
              items={serviceItems}
              handleLinkClick={handleLinkClick}
            />
          </div>

          <NavigationLinks 
            handleLinkClick={handleLinkClick}
            pathname={pathname}
          />

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
            <DropdownMenu 
              isOpen={aboutOpen}
              items={aboutItems}
              handleLinkClick={handleLinkClick}
            />
          </div>
          
          {/* Book Now button at the bottom for mobile */}
          <a 
            href="https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429"
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

Header.displayName = 'Header';

export default memo(Header);