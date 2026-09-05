import React from 'react';
import { CAPABILITIES_LIST } from '../data/content';
import { Sparkles, ArrowRight } from 'lucide-react';

interface CapabilitiesGridProps {
  onConsultationClick: (capability?: string) => void;
}

export const CapabilitiesGrid: React.FC<CapabilitiesGridProps> = ({
  onConsultationClick,
}) => {
  return (
    <section id="capabilities-section" className="py-24 lg:py-32 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#242220]">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-semibold block">
              COMPREHENSIVE CAPABILITIES
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5]">
              Tailored Architecture &amp; Interior Services
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#9C9488] font-light max-w-sm">
            Complete turnkey solutions structured to support high-net-worth homeowners, architects, and developers.
          </p>
        </div>

        {/* 14 Capabilities in Refined Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CAPABILITIES_LIST.map((cap, idx) => (
            <div
              key={cap}
              id={`capability-item-${idx + 1}`}
              onClick={() => onConsultationClick(cap)}
              className="group cursor-pointer p-6 bg-[#161514] border border-[#242220] hover:border-[#C5A880]/50 hover:bg-[#1A1918] transition-all duration-300 flex flex-col justify-between min-h-[140px]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.25em] font-mono text-[#7A746B] group-hover:text-[#C5A880] transition-colors">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#2A2826] group-hover:bg-[#C5A880] transition-colors" />
              </div>
              <div className="pt-4">
                <h4 className="text-sm sm:text-base font-medium text-[#FAF8F5] tracking-wide group-hover:text-[#C5A880] transition-colors leading-snug">
                  {cap}
                </h4>
                <div className="mt-2 flex items-center space-x-1 text-[11px] text-[#7A746B] group-hover:text-[#FAF8F5] transition-colors">
                  <span>Enquire service</span>
                  <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
