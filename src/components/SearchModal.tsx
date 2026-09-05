import React, { useState, useEffect, useRef } from 'react';
import { PageView, ProjectDetail } from '../types';
import { PROJECTS_DATA, SERVICE_CATEGORIES, FOUR_PRIMARY_SERVICES } from '../data/content';
import { Search, X, ArrowUpRight, FolderKanban, Sparkles, Layers } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageView) => void;
  onSelectProject: (project: ProjectDetail) => void;
  onSelectService: (serviceName: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onSelectProject,
  onSelectService,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Search in projects
  const matchingProjects = PROJECTS_DATA.filter(
    (p) =>
      p.title.toLowerCase().includes(trimmed) ||
      p.overview.toLowerCase().includes(trimmed) ||
      p.location.toLowerCase().includes(trimmed) ||
      p.category.toLowerCase().includes(trimmed)
  );

  // Search in services
  const matchingServices: { name: string; category: string }[] = [];
  SERVICE_CATEGORIES.forEach((cat) => {
    cat.services.forEach((svc) => {
      if (svc.toLowerCase().includes(trimmed) || cat.title.toLowerCase().includes(trimmed)) {
        matchingServices.push({ name: svc, category: cat.title });
      }
    });
  });

  // Navigation options matching
  const pageItems: { name: string; page: PageView; desc: string }[] = [
    { name: 'Selected Projects & Portfolio', page: 'projects', desc: 'Curated architectural case studies' },
    { name: 'All 39 Disciplines & Services', page: 'services', desc: 'Residential, commercial, and finishing' },
    { name: 'About OMONY & Founder', page: 'about', desc: 'Atelier story and Beauty Kumolu-Johnson' },
    { name: 'Six-Step Design Process', page: 'process', desc: 'From initial concept to completion' },
    { name: 'Client Testimonials', page: 'testimonials', desc: 'Google reviews and client feedback' },
    { name: 'Book a Consultation / Contact', page: 'contact', desc: 'Direct studio enquiry and WhatsApp' },
  ];

  const matchingPages = pageItems.filter(
    (p) => p.name.toLowerCase().includes(trimmed) || p.desc.toLowerCase().includes(trimmed)
  );

  return (
    <div
      id="global-search-modal"
      className="fixed inset-0 z-50 bg-[#0A0A09]/92 backdrop-blur-md flex items-start justify-center pt-20 px-4 sm:px-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#141312] border border-[#2D2B28] shadow-2xl p-6 relative max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-[#2D2B28] pb-4 flex items-center">
          <Search size={18} className="text-[#C5A880] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search projects, services, disciplines, or studio..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-[#FAF8F5] placeholder-[#7A746B] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-[#7A746B] hover:text-[#FAF8F5] transition-colors ml-2"
            aria-label="Close search"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto mt-4 space-y-6 flex-1 pr-1">
          {/* Quick Pages */}
          {matchingPages.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-semibold block">
                PAGES &amp; SECTIONS
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {matchingPages.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => {
                      onNavigate(item.page);
                      onClose();
                    }}
                    className="flex items-center justify-between p-3 text-left bg-[#191817] hover:bg-[#22201D] border border-transparent hover:border-[#33302C] transition-colors group"
                  >
                    <div>
                      <span className="text-xs text-[#FAF8F5] group-hover:text-[#C5A880] font-medium block">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-[#7A746B]">{item.desc}</span>
                    </div>
                    <ArrowUpRight size={14} className="text-[#7A746B] group-hover:text-[#C5A880]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects Results */}
          {matchingProjects.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-semibold block">
                PORTFOLIO PROJECTS ({matchingProjects.length})
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchingProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      onSelectProject(project);
                      onClose();
                    }}
                    className="flex items-center space-x-3 p-2.5 bg-[#191817] hover:bg-[#22201D] border border-transparent hover:border-[#33302C] transition-colors text-left group"
                  >
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-12 h-12 object-cover shrink-0 border border-[#2D2B28]"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-xs text-[#FAF8F5] group-hover:text-[#C5A880] font-medium block truncate">
                        {project.title}
                      </span>
                      <span className="text-[10px] text-[#7A746B] uppercase tracking-wider block">
                        {project.category} • {project.location}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Services Results */}
          {matchingServices.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-semibold block">
                SERVICES &amp; DISCIPLINES ({matchingServices.slice(0, 8).length})
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {matchingServices.slice(0, 8).map((svc, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onSelectService(svc.name);
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 bg-[#191817] hover:bg-[#22201D] border border-transparent hover:border-[#33302C] transition-colors text-left group"
                  >
                    <div className="truncate pr-2">
                      <span className="text-xs text-[#FAF8F5] group-hover:text-[#C5A880] font-medium block truncate">
                        {svc.name}
                      </span>
                      <span className="text-[10px] text-[#7A746B] uppercase tracking-wider block">
                        {svc.category}
                      </span>
                    </div>
                    <ArrowUpRight size={13} className="text-[#7A746B] group-hover:text-[#C5A880] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {trimmed !== '' && matchingProjects.length === 0 && matchingServices.length === 0 && matchingPages.length === 0 && (
            <div className="py-8 text-center space-y-3">
              <p className="text-sm text-[#FAF8F5]">No direct results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-[#7A746B]">
                Looking for a custom project? You can book a consultation directly.
              </p>
              <button
                onClick={() => {
                  onNavigate('contact');
                  onClose();
                }}
                className="px-5 py-2 text-xs bg-[#C5A880] text-[#121212] font-semibold tracking-wider uppercase hover:bg-[#D4BC98] transition-colors"
              >
                GO TO CONTACT
              </button>
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="mt-4 pt-3 border-t border-[#22201E] flex items-center justify-between text-[10px] text-[#7A746B]">
          <span>Tip: Press ESC to close</span>
          <span>OMONY Atelier Studios</span>
        </div>
      </div>
    </div>
  );
};
