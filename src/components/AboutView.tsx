import React from 'react';
import { BRAND } from '../data/content';
import { ArrowRight, MapPin, Handshake, CheckCircle2 } from 'lucide-react';

interface AboutViewProps {
  onBookConsultation: () => void;
  onExploreProjects: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onBookConsultation,
  onExploreProjects,
}) => {
  return (
    <div id="about-page-view" className="pt-24 sm:pt-28 pb-20 sm:pb-24 bg-[#121212] text-[#EFECE6]">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 sm:pb-16 lg:pb-24 border-b border-[#23211F]">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#C5A880] font-semibold block mb-3 sm:mb-4">
          OMONY ATELIER STUDIOS • ABOUT
        </span>
        <h1 className="font-editorial text-3xl sm:text-6xl lg:text-8xl text-[#FAF8F5] leading-[1.1] max-w-4xl break-words">
          Designing Spaces With Purpose.
        </h1>
        <p className="mt-6 sm:mt-8 text-base sm:text-2xl text-[#C5BFB5] font-light max-w-3xl leading-relaxed">
          OMONY Atelier Studios is a luxury interior architecture and design studio based in Lagos, Nigeria.
        </p>
      </section>

      {/* Narrative Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6 text-[#9C9488] text-base sm:text-lg font-light leading-relaxed">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#FAF8F5] leading-snug">
              Bespoke Residential &amp; Commercial Environments
            </h2>
            <p>
              We specialize in creating bespoke residential and commercial spaces with a steadfast focus on elegance, functionality, quality and meticulous execution.
            </p>
            <p>
              Every residence, executive suite, and hospitality environment we craft is an enduring response to the client's lifestyle. We believe that true luxury lies in spatial proportion, quiet tactile materials, and the flawless resolution of architectural details.
            </p>
            <p className="text-[#E6E1D8]">
              From initial spatial diagrams to on-site finishing supervision, our studio delivers end-to-end creative clarity.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              {BRAND.knownFor.map((item) => (
                <span
                  key={item}
                  className="text-xs tracking-wider uppercase px-3.5 py-1.5 bg-[#181716] border border-[#2D2B28] text-[#FAF8F5]/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden bg-[#181716] border border-[#262422]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Refined architectural craftsmanship at OMONY Atelier Studios"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Founder Section */}
      <section className="bg-[#0E0E0D] border-y border-[#23211F] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Founder Portrait Framing */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group">
                <div className="aspect-[3/4] overflow-hidden bg-[#161514] border border-[#2B2926]">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
                    alt="Beauty Kumolu-Johnson - Founder & CEO OMONY Atelier Studios"
                    className="w-full h-full object-cover object-top filter grayscale contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0D] via-transparent to-transparent opacity-60" />
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-[#7A746B]">
                  <span>FOUNDER PORTRAIT</span>
                  <span className="text-[#C5A880]">BEAUTY KUMOLU-JOHNSON</span>
                </div>
              </div>
            </div>

            {/* Founder Biography & Editorial Statements (VERBATIM from prompt) */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-semibold block">
                  LEADERSHIP &amp; VISION
                </span>
                <h3 className="font-editorial text-4xl sm:text-5xl text-[#FAF8F5]">
                  {BRAND.founder.name}
                </h3>
                <p className="text-sm uppercase tracking-[0.2em] text-[#9C9488]">
                  {BRAND.founder.title}
                </p>
              </div>

              {/* Exact Provided Bio Text */}
              <div className="space-y-4 text-base sm:text-lg text-[#C5BFB5] font-light leading-relaxed pt-2">
                {BRAND.founder.bioParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Location & Collaboration Tags (VERBATIM) */}
              <div className="pt-6 border-t border-[#23211F] space-y-3">
                <div className="flex items-center space-x-2 text-sm text-[#FAF8F5]">
                  <MapPin size={16} className="text-[#C5A880]" />
                  <span>{BRAND.founder.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[#C5A880]">
                  <Handshake size={16} />
                  <span>{BRAND.founder.availabilityNote}</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  id="about-discuss-collaboration-btn"
                  onClick={onBookConsultation}
                  className="px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase bg-[#C5A880] text-[#121212] hover:bg-[#D4BC98] transition-colors"
                >
                  DISCUSS PARTNERSHIP OR PROJECT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 text-center space-y-6">
        <h3 className="font-editorial text-3xl sm:text-4xl text-[#FAF8F5]">
          Explore Our Architectural Works
        </h3>
        <p className="text-[#9C9488] text-sm sm:text-base font-light max-w-xl mx-auto">
          Discover a curated portfolio of spaces shaped by detail, proportion, and timeless materiality.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="about-view-projects-btn"
            onClick={onExploreProjects}
            className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold border border-[#FAF8F5] text-[#FAF8F5] hover:bg-[#FAF8F5] hover:text-[#121212] transition-colors"
          >
            VIEW PORTFOLIO
          </button>
          <button
            id="about-book-btn"
            onClick={onBookConsultation}
            className="px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold bg-[#C5A880] text-[#121212] hover:bg-[#D4BC98] transition-colors"
          >
            BOOK A CONSULTATION
          </button>
        </div>
      </section>
    </div>
  );
};
