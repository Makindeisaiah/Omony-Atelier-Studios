import React from 'react';
import { BRAND } from '../data/content';
import { PageView } from '../types';
import { Instagram, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; id: PageView }[] = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Process', id: 'process' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#0E0E0D] text-[#EFECE6] border-t border-[#23211F] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#23211F]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <span className="block font-editorial text-3xl sm:text-4xl tracking-wider text-[#FAF8F5]">
                OMONY
              </span>
              <span className="block text-xs tracking-[0.35em] uppercase text-[#C5A880] font-medium mt-1">
                Atelier Studios
              </span>
            </div>
            <p className="text-[#9C9488] text-sm sm:text-base font-normal max-w-sm leading-relaxed">
              &ldquo;{BRAND.tagline}&rdquo;
            </p>
            <p className="text-xs text-[#7A746B] leading-relaxed max-w-sm">
              Creating timeless bespoke residential and commercial spaces defined by refined aesthetics, meticulous execution, and functional elegance.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-nav-${link.id}`}
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-sm text-[#9C9488] hover:text-[#FAF8F5] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
              Atelier Inquiries
            </h4>
            <div className="space-y-3 text-sm text-[#9C9488]">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#C5A880] shrink-0 mt-0.5" />
                <span className="text-[#FAF8F5]">{BRAND.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#C5A880] shrink-0" />
                <div className="space-y-0.5">
                  <div>
                    <a
                      href={`tel:${BRAND.phones[0].raw}`}
                      className="hover:text-[#FAF8F5] transition-colors"
                    >
                      {BRAND.phones[0].display}
                    </a>
                  </div>
                  <div>
                    <a
                      href={`tel:${BRAND.phones[1].raw}`}
                      className="hover:text-[#FAF8F5] transition-colors"
                    >
                      {BRAND.phones[1].display}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#C5A880] shrink-0" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-[#FAF8F5] transition-colors break-all"
                >
                  {BRAND.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 pt-2">
                <Instagram size={16} className="text-[#C5A880] shrink-0" />
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF8F5] transition-colors"
                >
                  {BRAND.instagram}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A746B] space-y-4 sm:space-y-0">
          <p>© 2026 OMONY Atelier Studios. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="tracking-wider">LAGOS, NIGERIA</span>
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-[#9C9488] hover:text-[#C5A880] transition-colors"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
