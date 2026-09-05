import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { BRAND } from '../data/content';

interface IntroSectionProps {
  onDiscover: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onDiscover }) => {
  return (
    <section id="intro-section" className="py-24 lg:py-32 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Text Content */}
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-semibold block">
                OMONY ATELIER STUDIOS
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-[1.12]">
                Spaces designed around the way you live.
              </h2>
            </div>

            <div className="space-y-6 text-[#9C9488] text-base sm:text-lg leading-relaxed font-light">
              <p>
                OMONY Atelier Studios is a luxury interior architecture and design studio based in Lagos, Nigeria. Known for our refined aesthetic and meticulous execution, we specialize in creating bespoke residential and commercial spaces that embody elegance and functionality.
              </p>
              <p className="text-[#D8D2C7]">
                With an unwavering commitment to quality, we transform our clients' visions into timeless interiors tailored to their lifestyle.
              </p>
            </div>

            {/* Core Values / Known For Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {['Refined Aesthetic', 'Meticulous Execution', 'Bespoke Residential', 'Bespoke Commercial'].map((item) => (
                <div key={item} className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#FAF8F5]/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                id="intro-discover-btn"
                onClick={onDiscover}
                className="inline-flex items-center space-x-3 text-xs tracking-[0.25em] font-semibold uppercase text-[#FAF8F5] pb-2 border-b border-[#C5A880] hover:text-[#C5A880] transition-colors group"
              >
                <span>DISCOVER OMONY</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Large Architectural Photography Beside Text */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative group">
              <div className="aspect-[4/5] overflow-hidden bg-[#1A1918] border border-[#282624]">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                  alt="Architectural interior craftsmanship by OMONY Atelier Studios"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Floating Architectural Detail Card */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-8 bg-[#1A1918]/95 backdrop-blur-md border border-[#33302C] p-6 max-w-xs shadow-2xl hidden sm:block">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] block mb-1">
                  ATELIER PHILOSOPHY
                </span>
                <p className="font-editorial text-lg text-[#FAF8F5] italic leading-snug">
                  &ldquo;Refined aesthetic &amp; meticulous execution.&rdquo;
                </p>
                <div className="mt-2 text-[11px] text-[#9C9488] tracking-widest uppercase">
                  Lagos, Nigeria
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
