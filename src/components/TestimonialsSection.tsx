import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials-section" className="py-24 lg:py-32 bg-[#0E0E0D] border-t border-[#23211F] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-semibold block">
            CLIENT ENDORSEMENTS
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5]">
            Reflections of Trust
          </h2>
          <p className="text-[#9C9488] text-sm sm:text-base font-light">
            Verified client feedback reflecting our commitment to meticulous execution and refined interior architecture in Lagos, Nigeria.
          </p>
        </div>

        {/* 4 Testimonials in Sophisticated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TESTIMONIALS.map((test, index) => (
            <div
              key={test.id}
              id={`testimonial-card-${index + 1}`}
              className="group bg-[#151413] border border-[#242220] p-8 sm:p-10 flex flex-col justify-between hover:border-[#C5A880]/50 transition-all duration-300"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between text-[#C5A880]">
                  <Quote size={28} className="opacity-80 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#7A746B] font-mono">
                    TESTIMONIAL 0{index + 1}
                  </span>
                </div>

                <blockquote className="font-editorial text-xl sm:text-2xl text-[#FAF8F5] leading-relaxed italic font-light">
                  &ldquo;{test.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-8 border-t border-[#201E1C] mt-8 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold tracking-wider text-[#FAF8F5] uppercase">
                    {test.clientName}
                  </h4>
                  <p className="text-xs text-[#9C9488] tracking-widest mt-0.5">
                    Lagos, Nigeria
                  </p>
                </div>

                <span className="text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 bg-[#1C1B19] border border-[#2B2926] text-[#C5A880]">
                  {test.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Authenticity Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#7A746B] tracking-wider uppercase">
            Genuine Client Reviews • Google Verified
          </p>
        </div>
      </div>
    </section>
  );
};
