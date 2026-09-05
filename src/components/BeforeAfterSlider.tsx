import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_FEATURED } from '../data/content';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage = BEFORE_AFTER_FEATURED.beforeImage,
  afterImage = BEFORE_AFTER_FEATURED.afterImage,
  beforeLabel = BEFORE_AFTER_FEATURED.beforeLabel,
  afterLabel = BEFORE_AFTER_FEATURED.afterLabel,
  title = BEFORE_AFTER_FEATURED.title,
  subtitle = BEFORE_AFTER_FEATURED.subtitle,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after-section" className="py-24 lg:py-32 bg-[#0E0E0D] border-t border-[#23211F] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-semibold block">
            METAMORPHOSIS IN CRAFT
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5]">
            {title}
          </h2>
          <p className="text-[#9C9488] text-base sm:text-lg font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div className="max-w-5xl mx-auto">
          <div
            id="before-after-container"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#161514] border border-[#2B2926] select-none cursor-ew-resize shadow-2xl"
          >
            {/* After Image (Full Base) */}
            <img
              src={afterImage}
              alt="OMONY Atelier Studios Completed Interior"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              loading="lazy"
            />

            {/* Before Image (Clipped Left Layer) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={beforeImage}
                alt="Initial space before transformation"
                className="absolute inset-y-0 left-0 max-w-none h-full object-cover object-center"
                style={{
                  width: containerRef.current
                    ? `${containerRef.current.clientWidth}px`
                    : '100%',
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#121212]/30" />
            </div>

            {/* Drag Divider Line & Handle */}
            <div
              className="absolute inset-y-0 pointer-events-none flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Vertical Divider Line */}
              <div className="w-[2px] h-full bg-[#FAF8F5]/90 shadow-md" />

              {/* Central Drag Knob */}
              <div className="absolute w-11 h-11 rounded-full bg-[#121212] border-2 border-[#C5A880] text-[#FAF8F5] flex items-center justify-center shadow-2xl pointer-events-auto transform -translate-x-1/2">
                <ChevronsLeftRight size={18} className="text-[#C5A880]" />
              </div>
            </div>

            {/* Persistent Floating Labels */}
            <div className="absolute top-6 left-6 z-10 bg-[#121212]/80 backdrop-blur-md px-3.5 py-1.5 border border-[#33302C] pointer-events-none">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#9C9488] font-semibold">
                {beforeLabel}
              </span>
            </div>

            <div className="absolute top-6 right-6 z-10 bg-[#121212]/80 backdrop-blur-md px-3.5 py-1.5 border border-[#C5A880]/60 pointer-events-none">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-semibold">
                {afterLabel}
              </span>
            </div>

            {/* Helper Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#121212]/85 backdrop-blur-md px-4 py-1.5 border border-[#2B2926] pointer-events-none text-[10px] uppercase tracking-[0.25em] text-[#9C9488] hidden sm:block">
              Drag slider left or right to compare
            </div>
          </div>

          {/* Asset Swapping Developer/Client Note */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A746B] border-t border-[#1C1B19] pt-4">
            <span>Asset Slot: Replaceable high-resolution project transformation photography</span>
            <span className="text-[#9C9488]">Lagos, Nigeria Project Archive</span>
          </div>
        </div>
      </div>
    </section>
  );
};
