import React, { useState } from 'react';
import { SERVICE_CATEGORIES } from '../data/content';
import { ArrowUpRight, Search, X } from 'lucide-react';

interface ServicesViewProps {
  onSelectServiceForConsultation: (serviceName: string) => void;
  initialSearchQuery?: string;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onSelectServiceForConsultation,
  initialSearchQuery = '',
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);

  const filteredCategories = SERVICE_CATEGORIES.filter((cat) => {
    if (selectedCategoryId !== 'all' && cat.id !== selectedCategoryId) return false;
    return true;
  });

  const totalMatchingServices = filteredCategories.reduce((acc, cat) => {
    return (
      acc +
      cat.services.filter((svc) =>
        svc.toLowerCase().includes(searchQuery.toLowerCase().trim())
      ).length
    );
  }, 0);

  return (
    <div id="services-page-view" className="pt-28 pb-24 bg-[#121212] text-[#EFECE6]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-8 pb-16 border-b border-[#23211F]">
        <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-semibold block mb-4">
          OMONY ATELIER STUDIOS • SERVICE DIRECTORY
        </span>
        <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-[#FAF8F5] leading-[1.08] max-w-4xl">
          Comprehensive Interior Disciplines.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#C5BFB5] font-light max-w-2xl leading-relaxed">
          From architectural space planning and residential renovations to bespoke commercial environments and meticulous finishing supervision in Lagos, Nigeria.
        </p>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-8 border-b border-[#201E1C]">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              id="services-filter-all"
              onClick={() => setSelectedCategoryId('all')}
              className={`px-4 py-2 text-xs tracking-wider uppercase font-medium whitespace-nowrap transition-colors border ${
                selectedCategoryId === 'all'
                  ? 'bg-[#C5A880] text-[#121212] border-[#C5A880]'
                  : 'bg-[#181716] text-[#9C9488] border-[#2D2B28] hover:text-[#FAF8F5]'
              }`}
            >
              ALL CATEGORIES (39)
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                id={`services-filter-${cat.id}`}
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-4 py-2 text-xs tracking-wider uppercase font-medium whitespace-nowrap transition-colors border ${
                  selectedCategoryId === cat.id
                    ? 'bg-[#C5A880] text-[#121212] border-[#C5A880]'
                    : 'bg-[#181716] text-[#9C9488] border-[#2D2B28] hover:text-[#FAF8F5]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px]">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A746B]" />
            <input
              id="services-search-input"
              type="text"
              placeholder="Search 39 disciplines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#181716] border border-[#2D2B28] pl-10 pr-9 py-2 text-xs text-[#FAF8F5] placeholder-[#7A746B] focus:outline-none focus:border-[#C5A880] transition-colors rounded-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A746B] hover:text-[#FAF8F5]"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Categorized Services List or Empty State */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 space-y-20">
        {totalMatchingServices === 0 ? (
          <div className="py-16 text-center space-y-4 max-w-lg mx-auto bg-[#161514] border border-[#262422] p-8">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block">
              SEARCH RESULTS
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#FAF8F5]">
              No direct matches for &ldquo;{searchQuery}&rdquo;
            </h3>
            <p className="text-xs text-[#9C9488] font-light leading-relaxed">
              Our atelier offers tailored spatial commissions across residential, commercial, and architectural finishing. You can clear the search or request a bespoke consultation.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => setSearchQuery('')}
                className="px-5 py-2.5 bg-[#1E1D1B] border border-[#33302C] text-xs font-semibold tracking-wider uppercase text-[#FAF8F5] hover:border-[#C5A880] transition-colors"
              >
                VIEW ALL 39 SERVICES
              </button>
              <button
                onClick={() => onSelectServiceForConsultation(searchQuery || 'Bespoke Interior Design')}
                className="px-5 py-2.5 bg-[#C5A880] text-[#121212] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4BC98] transition-colors"
              >
                ENQUIRE ABOUT THIS
              </button>
            </div>
          </div>
        ) : (
          filteredCategories.map((category) => {
            const matchingServices = category.services.filter((svc) =>
              svc.toLowerCase().includes(searchQuery.toLowerCase().trim())
            );

            if (matchingServices.length === 0) return null;

            return (
              <div key={category.id} className="space-y-8">
                {/* Category Header */}
                <div className="border-b border-[#242220] pb-4 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] block font-mono">
                      CATEGORY
                    </span>
                    <h2 className="font-editorial text-3xl sm:text-4xl text-[#FAF8F5]">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-[#9C9488] max-w-lg font-light">
                    {category.description}
                  </p>
                </div>

                {/* Grid of Services in this category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {matchingServices.map((serviceName) => (
                    <div
                      key={serviceName}
                      id={`service-item-${serviceName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      onClick={() => onSelectServiceForConsultation(serviceName)}
                      className="group cursor-pointer p-6 bg-[#161514] border border-[#262422] hover:border-[#C5A880] hover:bg-[#1A1918] transition-all duration-300 flex flex-col justify-between min-h-[130px]"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="font-medium text-base text-[#FAF8F5] group-hover:text-[#C5A880] transition-colors pr-4">
                          {serviceName}
                        </h3>
                        <div className="w-7 h-7 rounded-full border border-[#2E2C2A] flex items-center justify-center text-[#7A746B] group-hover:border-[#C5A880] group-hover:text-[#C5A880] transition-colors shrink-0">
                          <ArrowUpRight size={14} />
                        </div>
                      </div>
                      <div className="pt-4 flex items-center space-x-2 text-[11px] text-[#7A746B] group-hover:text-[#E6E1D8] transition-colors">
                        <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                        <span>Consult with Atelier team</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </section>

      {/* Bottom Conversion Prompt */}
      <section className="max-w-4xl mx-auto px-6 text-center pt-10 border-t border-[#23211F]">
        <h3 className="font-editorial text-3xl text-[#FAF8F5] mb-3">
          Custom Turnkey Commissions
        </h3>
        <p className="text-sm text-[#9C9488] font-light max-w-xl mx-auto mb-6">
          Require a tailored combination of architectural space planning, luxury finishing materials, and full site supervision?
        </p>
        <button
          onClick={() => onSelectServiceForConsultation('Turnkey Interior Design')}
          className="px-8 py-3.5 bg-[#C5A880] text-[#121212] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D4BC98] transition-colors"
        >
          REQUEST BESPOKE PROPOSAL
        </button>
      </section>
    </div>
  );
};
