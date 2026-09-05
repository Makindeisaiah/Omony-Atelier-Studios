import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { BRAND } from '../data/content';
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: PageView }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Process', id: 'process' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#121212]/92 backdrop-blur-md border-b border-[#282624]'
            : 'py-6 bg-gradient-to-b from-[#121212]/80 via-[#121212]/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="group text-left focus:outline-none"
            aria-label="OMONY Atelier Studios Home"
          >
            <span className="block font-editorial text-2xl sm:text-3xl tracking-wider text-[#FAF8F5] group-hover:text-[#C5A880] transition-colors">
              OMONY
            </span>
            <span className="block text-[10px] tracking-[0.3em] uppercase text-[#9C9488] font-medium -mt-1">
              Atelier Studios
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav-menu"
            className="hidden lg:flex items-center space-x-7 xl:space-x-9"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-xs tracking-[0.2em] uppercase font-medium py-1 transition-colors ${
                    isActive
                      ? 'text-[#FAF8F5]'
                      : 'text-[#9C9488] hover:text-[#FAF8F5]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C5A880]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              id="nav-book-consultation-btn"
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-xs font-semibold tracking-[0.2em] uppercase border border-[#C5A880]/70 text-[#FAF8F5] hover:bg-[#C5A880] hover:text-[#121212] transition-all duration-300 rounded-none shadow-sm"
            >
              BOOK A CONSULTATION
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FAF8F5] hover:text-[#C5A880] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-40 bg-[#121212]/98 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto lg:hidden"
        >
          <div className="space-y-6 pt-4">
            <div className="border-b border-[#282624] pb-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880]">
                Navigation
              </span>
            </div>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center justify-between text-left py-2 text-xl font-editorial tracking-wide text-[#FAF8F5] hover:text-[#C5A880] transition-colors border-b border-[#1E1D1B]"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-sans tracking-[0.2em] text-[#9C9488]">
                    0{navItems.indexOf(item) + 1}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-4">
              <button
                id="mobile-drawer-consultation-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 text-center text-xs font-semibold tracking-[0.2em] uppercase bg-[#C5A880] text-[#121212] hover:bg-[#D4BC98] transition-colors"
              >
                BOOK A CONSULTATION
              </button>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#282624] space-y-4">
            <div className="text-xs text-[#9C9488] tracking-widest uppercase">
              Lagos, Nigeria
            </div>
            <div className="flex flex-col space-y-2 text-sm text-[#EFECE6]">
              <a
                href={`tel:${BRAND.phones[0].raw}`}
                className="flex items-center space-x-2 hover:text-[#C5A880] transition-colors"
              >
                <Phone size={14} className="text-[#C5A880]" />
                <span>{BRAND.phones[0].display}</span>
              </a>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#C5A880] hover:underline"
              >
                <MessageCircle size={14} />
                <span>WhatsApp Atelier Studios</span>
              </a>
            </div>
            <p className="text-xs text-[#7A746B]">
              omonyatelierstudios@gmail.com
            </p>
          </div>
        </div>
      )}
    </>
  );
};
