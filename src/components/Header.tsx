import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, ShieldCheck, Heart } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PMSI_CONTACT } from '../data/contactData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change (official React state adjustment during render)
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMobileMenuOpen(false);
  }

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Our Programs', to: '/programs' },
    { name: 'Our Projects', to: '/projects' },
    { name: 'Funding Opportunities', to: '/funding-opportunities' },
    { name: 'Partner With Us', to: '/partner-with-us' },
    { name: 'Contact', to: '/contact' },
  ];

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#12304A]/95 backdrop-blur-md shadow-lg shadow-[#12304A]/10 border-b border-white/10 py-3.5'
          : 'bg-[#12304A] border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Full Organization Name */}
          <Logo variant="light" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold tracking-wide transition-all rounded-lg whitespace-nowrap ${
                    active
                      ? 'text-[#D8A85B] bg-white/10 shadow-sm border border-white/10'
                      : 'text-slate-100 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Prominent Action Button: Donate Now */}
          <div className="hidden sm:flex items-center">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-4.5 py-2 rounded-lg text-xs xl:text-sm font-bold text-[#12304A] bg-[#D8A85B] hover:bg-[#ECD29E] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#D8A85B] focus:ring-offset-2 focus:ring-offset-[#12304A] whitespace-nowrap"
            >
              <Heart className="w-3.5 h-3.5 text-[#12304A] fill-[#12304A]" />
              <span>Donate Now</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-100 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10 focus:outline-none focus:ring-2 focus:ring-[#D8A85B] transition-colors"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#D8A85B]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown & Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop overlay for tap-to-dismiss */}
          <div
            className="lg:hidden fixed inset-0 top-full bg-black/60 backdrop-blur-xs z-40 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="lg:hidden fixed inset-x-0 top-full bg-[#12304A]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 z-50">
            <div className="px-5 pt-4 pb-6 space-y-1.5 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <div className="py-2.5 mb-2 border-b border-white/10">
                <span className="text-xs uppercase tracking-widest text-[#D8A85B] font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D8A85B]" />
                  Pakistan Minorities Support Initiative
                </span>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive(link.to)
                      ? 'text-[#D8A85B] bg-white/10 border-l-4 border-[#D8A85B] pl-3'
                      : 'text-slate-100 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 mt-3 border-t border-white/10 space-y-2.5">
                <Link
                  to="/donate"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-base font-bold text-[#12304A] bg-[#D8A85B] hover:bg-[#ECD29E] shadow-md focus:outline-none focus:ring-2 focus:ring-[#D8A85B]"
                >
                  <Heart className="w-4 h-4 text-[#12304A] fill-[#12304A]" />
                  <span>Donate Now</span>
                </Link>

                <a
                  href={PMSI_CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label={`Chat with PMSI on WhatsApp at ${PMSI_CONTACT.whatsappNumber}`}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#25D366]/20 hover:bg-[#25D366] border border-[#25D366]/40 transition-colors shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-white" />
                  <span>Chat on WhatsApp ({PMSI_CONTACT.whatsappNumber})</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
