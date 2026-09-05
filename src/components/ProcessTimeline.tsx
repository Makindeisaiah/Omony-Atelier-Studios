import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { CheckCircle2 } from 'lucide-react';

interface ProcessTimelineProps {
  onStartConsultation: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  onStartConsultation,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="process-section" className="py-20 lg:py-32 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#242220]">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-semibold block">
              METHODOLOGY &amp; RIGOR
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-tight break-words">
              Six Steps to Timeless Living
            </h2>
            <p className="text-[#9C9488] text-sm sm:text-lg font-light max-w-xl leading-relaxed">
              A transparent, structured progression ensuring absolute precision from initial brief to turnkey completion.
            </p>
          </div>

          <button
            id="process-start-consultation-btn"
            onClick={onStartConsultation}
            className="mt-6 md:mt-0 self-start md:self-auto px-6 py-3 text-xs tracking-[0.2em] uppercase font-semibold border border-[#C5A880] text-[#FAF8F5] hover:bg-[#C5A880] hover:text-[#121212] transition-colors"
          >
            BEGIN AT STEP 01
          </button>
        </div>

        {/* Desktop Horizontal Timeline (Visible on lg and above) */}
        <div className="hidden lg:block relative pt-12 pb-16">
          {/* Horizontal connecting line */}
          <div className="absolute top-[4.25rem] left-8 right-8 h-[1px] bg-[#2A2826]" />

          <div className="grid grid-cols-6 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <div
                  key={step.step}
                  id={`process-desktop-step-${step.step}`}
                  onMouseEnter={() => setActiveStepIndex(idx)}
                  className="cursor-pointer group flex flex-col items-start"
                >
                  {/* Step Node Marker */}
                  <div className="mb-6 flex items-center justify-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono font-semibold transition-all duration-300 border ${
                        isActive
                          ? 'bg-[#C5A880] text-[#121212] border-[#C5A880] scale-110 shadow-lg'
                          : 'bg-[#181716] text-[#9C9488] border-[#33302C] group-hover:border-[#C5A880]'
                      }`}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="space-y-2">
                    <h3
                      className={`font-editorial text-xl transition-colors ${
                        isActive ? 'text-[#C5A880]' : 'text-[#FAF8F5]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#9C9488] leading-relaxed font-light">
                      {step.description}
                    </p>

                    {step.deliverables && (
                      <div className="pt-3 space-y-1">
                        {step.deliverables.map((d) => (
                          <div
                            key={d}
                            className="text-[10px] tracking-wider uppercase text-[#7A746B] flex items-center space-x-1"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#C5A880]" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (Visible below lg) */}
        <div className="block lg:hidden space-y-6 sm:space-y-8 relative pl-8 sm:pl-10">
          {/* Vertical connecting line */}
          <div className="absolute top-3 bottom-6 left-4 w-[1px] bg-[#2A2826]" />

          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              id={`process-mobile-step-${step.step}`}
              className="relative group bg-[#161514] border border-[#242220] p-5 sm:p-6 space-y-3"
            >
              {/* Step indicator node centered on the vertical line */}
              <div className="absolute -left-[30px] sm:-left-[34px] top-5 w-7 h-7 rounded-full bg-[#121212] border border-[#C5A880] flex items-center justify-center text-[10px] font-mono text-[#C5A880] z-10 shadow-md">
                {step.step}
              </div>

              {/* Responsive Phase Header with stacked eyebrow to guarantee no overflow on mobile */}
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] tracking-[0.25em] font-mono text-[#C5A880] uppercase whitespace-nowrap">
                    PHASE {step.step}
                  </span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl lg:text-3xl text-[#FAF8F5] leading-tight break-words">
                  {step.title}
                </h3>
              </div>

              <p className="text-sm text-[#9C9488] font-light leading-relaxed">
                {step.description}
              </p>

              {step.deliverables && (
                <div className="pt-3 border-t border-[#23211F] flex flex-wrap gap-1.5">
                  {step.deliverables.map((d) => (
                    <span
                      key={d}
                      className="text-[10px] tracking-wider uppercase px-2.5 py-1 bg-[#1C1B19] text-[#E6E1D8] border border-[#262422] break-words"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
