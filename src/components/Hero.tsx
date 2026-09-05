import React from 'react';
import { BRAND } from '../data/content';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onViewWork: () => void;
  onBookConsultation: () => void;
  onScrollDown: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewWork,
  onBookConsultation,
  onScrollDown,
}) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#121212]"
    >
      {/* Background Photography with Sophisticated Dark/Neutral Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90"
          alt="OMONY Atelier Studios luxury interior architecture"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Editorial gradient overlay for perfect contrast & mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/55 to-[#121212]/35" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#121212]/30 to-[#121212]/80 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-24 pb-20 flex flex-col items-center">
        {/* Subtle Brand Tag */}
        <motion.div
          initial={{ opacity: 0.8, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-3 mb-6"
        >
          <span className="w-8 h-[1px] bg-[#C5A880]/70" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#E6E1D8] font-medium">
            LAGOS, NIGERIA • BESPOKE ARCHITECTURE & INTERIORS
          </span>
          <span className="w-8 h-[1px] bg-[#C5A880]/70" />
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0.9, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-editorial text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#FAF8F5] leading-[1.08] max-w-4xl"
        >
          {BRAND.headline}
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0.9, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 sm:mt-8 text-base sm:text-xl text-[#D8D2C7] font-light max-w-2xl leading-relaxed"
        >
          {BRAND.supportingHeroText}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0.9, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            id="hero-view-work-btn"
            onClick={onViewWork}
            className="w-full sm:w-auto px-8 py-4 text-xs tracking-[0.25em] font-semibold uppercase bg-[#FAF8F5] text-[#121212] hover:bg-[#C5A880] transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>VIEW OUR WORK</span>
            <ArrowUpRight size={16} />
          </button>

          <button
            id="hero-book-consultation-btn"
            onClick={onBookConsultation}
            className="w-full sm:w-auto px-8 py-4 text-xs tracking-[0.25em] font-semibold uppercase border border-[#C5A880] text-[#FAF8F5] hover:bg-[#C5A880]/15 transition-all duration-300"
          >
            BOOK A CONSULTATION
          </button>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        id="hero-scroll-indicator"
        onClick={onScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 text-[#9C9488] hover:text-[#FAF8F5] transition-colors group cursor-pointer focus:outline-none"
        aria-label="Scroll down to explore OMONY Atelier Studios"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-light group-hover:tracking-[0.35em] transition-all">
          EXPLORE
        </span>
        <ArrowDown size={16} className="animate-bounce text-[#C5A880]" />
      </button>
    </section>
  );
};
