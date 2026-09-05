import React from 'react';

export const DesignApproach: React.FC = () => {
  return (
    <section id="design-approach-section" className="py-24 lg:py-32 bg-[#0E0E0D] border-y border-[#211F1D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Architectural Image with Tactile Material Insets */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#161514] border border-[#2B2926]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                alt="Designed with intention by OMONY Atelier Studios"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0D]/60 to-transparent" />
            </div>

            {/* Material Attributes Pill Strip */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Honed Travertine', 'Bleached White Oak', 'Hand-applied Plaster', 'Brushed Brass', 'Washed Belgian Linen'].map((mat) => (
                <span
                  key={mat}
                  className="text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 bg-[#171615] border border-[#282624] text-[#9C9488]"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Typography Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-semibold block">
                ATELIER PHILOSOPHY
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-[1.12]">
                Designed With Intention.
              </h2>
            </div>

            <blockquote className="font-editorial text-2xl sm:text-3xl text-[#E6E1D8] italic leading-relaxed font-light border-l-2 border-[#C5A880] pl-6 py-2">
              &ldquo;We believe exceptional interiors should balance beauty with purpose. Every material, proportion, finish and detail is considered to create spaces that are both refined and enduring.&rdquo;
            </blockquote>

            <div className="space-y-4 text-sm sm:text-base text-[#9C9488] font-light leading-relaxed">
              <p>
                At OMONY Atelier Studios, architecture is not merely decorative; it is the structural canvas of how life unfolds. We examine how natural daylight travels through a residence, how acoustics temper conversation, and how tactile finishes elevate everyday interactions.
              </p>
              <p>
                From private family estates across Lagos to high-profile commercial sanctums, our studio approaches every commission with quiet restraint, uncompromising rigor, and tailored precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
