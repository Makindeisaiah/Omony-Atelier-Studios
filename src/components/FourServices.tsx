import React, { useState } from 'react';
import { FOUR_PRIMARY_SERVICES } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

interface FourServicesProps {
  onSelectService: (serviceName: string) => void;
  onExploreAllServices: () => void;
}

export const FourServices: React.FC<FourServicesProps> = ({
  onSelectService,
  onExploreAllServices,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services-highlight" className="py-20 lg:py-32 bg-[#0E0E0D] border-t border-[#1F1D1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-20 pb-8 border-b border-[#242220]">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-semibold block">
              EXPERTISE &amp; DISCIPLINES
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-tight break-words">
              Our Expertise
            </h2>
            <p className="text-[#9C9488] text-sm sm:text-lg font-light max-w-xl leading-relaxed">
              From concept to completion, every detail is considered.
            </p>
          </div>

          <button
            id="view-all-services-header-btn"
            onClick={onExploreAllServices}
            className="mt-6 md:mt-0 self-start md:self-auto inline-flex items-center space-x-2 text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-semibold text-[#C5A880] hover:text-[#FAF8F5] transition-colors"
          >
            <span>FULL DIRECTORY (39 SERVICES)</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* 4 Premium Service Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FOUR_PRIMARY_SERVICES.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={item.number}
                id={`service-card-${item.number}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onSelectService(item.title)}
                className="group relative cursor-pointer bg-[#141312] border border-[#262422] p-6 sm:p-8 flex flex-col justify-between min-h-[340px] sm:min-h-[380px] transition-all duration-500 hover:border-[#C5A880]/60 hover:bg-[#181715]"
              >
                {/* Subtle background ambient image on hover */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                </div>

                {/* Top: Number & Arrow Interaction */}
                <div className="relative z-10 flex items-center justify-between border-b border-[#23211F] pb-6">
                  <span className="font-editorial text-3xl text-[#9C9488] group-hover:text-[#C5A880] transition-colors">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#2D2B28] flex items-center justify-center text-[#FAF8F5] group-hover:border-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#121212] transition-all duration-300">
                    <ArrowUpRight size={18} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Bottom: Title & Description */}
                <div className="relative z-10 space-y-4 pt-8">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#FAF8F5] tracking-wide group-hover:text-[#C5A880] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#9C9488] leading-relaxed font-light">
                    {item.description}
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#7A746B] group-hover:text-[#C5A880] transition-colors inline-flex items-center space-x-1.5">
                      <span>EXPLORE DISCIPLINE</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#C5A880] transition-all duration-500 ${
                    isHovered ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
