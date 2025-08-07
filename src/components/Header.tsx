'use client';

import { useState, useEffect, useRef, memo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import TrackingAnchor from '@/components/TrackingAnchor';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = memo(({ href, children, className = '', onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + '/');
  
  return (
    <Link 
      href={href} 
      className={`nav-link ${isActive ? 'active' : ''} ${className}`}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
});

NavLink.displayName = 'NavLink';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setServicesOpen(false);
        setAboutOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
        setAboutOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  }, []);

  const toggleServices = useCallback(() => {
    setServicesOpen(prev => !prev);
    setAboutOpen(false);
  }, []);

  const toggleAbout = useCallback(() => {
    setAboutOpen(prev => !prev);
    setServicesOpen(false);
  }, []);

  const serviceLinks = [
    { href: '/services/microblading', label: 'Microblading' },
    { href: '/services/cosmetic-tattooing', label: 'Cosmetic Tattooing' },
    { href: '/services/microneedling', label: 'Microneedling' },
    { href: '/services/brow-corrections', label: 'Brow Corrections' },
    { href: '/services/tattoo-removal', label: 'Tattoo Removal' },
  ];

  const aboutLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/locations', label: 'Our Locations' },
    { href: '/about/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      ref={headerRef} 
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
      role="banner"
    >
      <div className="header-container">
        {/* Logo */}
        <Link href="/" className="header-logo" aria-label="Melbourne Designer Brows Home">
          <Image
            src="/images/goldlogo-full.webp"
            alt="Melbourne Designer Brows"
            width={220}
            height={60}
            priority
            className="logo-image"
            style={{ objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" role="navigation" aria-label="Main navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink href="/">Home</NavLink>
            </li>
            
            {/* Services Dropdown */}
            <li className="nav-item nav-dropdown">
              <button
                className={`nav-link nav-dropdown-toggle ${servicesOpen ? 'active' : ''}`}
                onClick={toggleServices}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              {servicesOpen && (
                <ul className="dropdown-menu" role="menu">
                  {serviceLinks.map(link => (
                    <li key={link.href} role="none">
                      <NavLink href={link.href} onClick={() => setServicesOpen(false)}>
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="nav-item">
              <NavLink href="/pricing">Pricing</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink href="/gallery">Gallery</NavLink>
            </li>

            {/* About Dropdown */}
            <li className="nav-item nav-dropdown">
              <button
                className={`nav-link nav-dropdown-toggle ${aboutOpen ? 'active' : ''}`}
                onClick={toggleAbout}
                aria-expanded={aboutOpen}
                aria-haspopup="true"
              >
                About
                <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              {aboutOpen && (
                <ul className="dropdown-menu" role="menu">
                  {aboutLinks.map(link => (
                    <li key={link.href} role="none">
                      <NavLink href={link.href} onClick={() => setAboutOpen(false)}>
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className="nav-item">
              <NavLink href="/blog">Blog</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink href="/faq">FAQ</NavLink>
            </li>
          </ul>

          {/* CTA Button */}
          <TrackingAnchor
            href="https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary header-cta"
            trackingCategory="header"
            trackingLabel="book-appointment"
          >
            Book Now
          </TrackingAnchor>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="hamburger">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="mobile-nav-inner">
          <nav className="mobile-nav-content">
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <NavLink href="/" onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
              
              {/* Mobile Services Dropdown */}
              <li className="mobile-nav-item">
                <button
                  className={`mobile-nav-dropdown-toggle ${servicesOpen ? 'active' : ''}`}
                  onClick={toggleServices}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                {servicesOpen && (
                  <ul className="mobile-dropdown-menu">
                    {serviceLinks.map(link => (
                      <li key={link.href}>
                        <NavLink href={link.href} onClick={closeMobileMenu}>
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="mobile-nav-item">
                <NavLink href="/pricing" onClick={closeMobileMenu}>
                  Pricing
                </NavLink>
              </li>
              
              <li className="mobile-nav-item">
                <NavLink href="/gallery" onClick={closeMobileMenu}>
                  Gallery
                </NavLink>
              </li>

              {/* Mobile About Dropdown */}
              <li className="mobile-nav-item">
                <button
                  className={`mobile-nav-dropdown-toggle ${aboutOpen ? 'active' : ''}`}
                  onClick={toggleAbout}
                  aria-expanded={aboutOpen}
                >
                  About
                  <svg className="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                {aboutOpen && (
                  <ul className="mobile-dropdown-menu">
                    {aboutLinks.map(link => (
                      <li key={link.href}>
                        <NavLink href={link.href} onClick={closeMobileMenu}>
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="mobile-nav-item">
                <NavLink href="/blog" onClick={closeMobileMenu}>
                  Blog
                </NavLink>
              </li>
              
              <li className="mobile-nav-item">
                <NavLink href="/faq" onClick={closeMobileMenu}>
                  FAQ
                </NavLink>
              </li>
            </ul>

            {/* Mobile CTA */}
            <div className="mobile-nav-cta">
              <TrackingAnchor
                href="https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mobile-cta-button"
                onClick={closeMobileMenu}
                trackingCategory="mobile-menu"
                trackingLabel="book-appointment"
              >
                Book Appointment
              </TrackingAnchor>
            </div>

            {/* Mobile Contact Info */}
            <div className="mobile-nav-footer">
              <div className="mobile-contact-info">
                <a href="tel:+61390000000" className="mobile-contact-link">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" fill="currentColor"/>
                  </svg>
                  Call Us
                </a>
                <a href="mailto:info@mdbrows.com.au" className="mobile-contact-link">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M.05 3.555A2 2 0 012 2h12a2 2 0 011.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 002 14h12a2 2 0 001.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" fill="currentColor"/>
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default memo(Header);