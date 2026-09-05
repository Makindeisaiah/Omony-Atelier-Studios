import React from 'react';
import { ProjectDetail } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { X, ArrowLeft, ArrowUpRight, MapPin, Calendar, Check, Layers } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onBookConsultation,
}) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0A0A09]/95 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
    >
      {/* Top Sticky Bar */}
      <div className="sticky top-0 z-30 bg-[#121212]/90 backdrop-blur-md border-b border-[#262422] px-6 sm:px-8 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#9C9488] hover:text-[#FAF8F5] transition-colors"
        >
          <ArrowLeft size={16} />
          <span>BACK TO PORTFOLIO</span>
        </button>

        <div className="flex items-center space-x-4">
          <button
            onClick={onBookConsultation}
            className="hidden sm:inline-block px-5 py-2 text-xs tracking-[0.2em] uppercase font-semibold bg-[#C5A880] text-[#121212] hover:bg-[#D4BC98] transition-colors"
          >
            BOOK CONSULTATION
          </button>
          <button
            onClick={onClose}
            className="p-2 text-[#9C9488] hover:text-[#FAF8F5] hover:bg-[#1E1D1B] transition-colors rounded-none"
            aria-label="Close project details"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 space-y-16 pb-24 text-[#EFECE6]">
        {/* Project Hero Image */}
        <div className="space-y-6">
          <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-[#181716] border border-[#282624] relative shadow-2xl">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-mono">
                {project.category}
              </span>
              <h1 className="font-editorial text-4xl sm:text-6xl text-[#FAF8F5]">
                {project.title}
              </h1>
            </div>
          </div>

          {/* Meta Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-[#23211F] py-5 text-xs text-[#9C9488]">
            <div className="flex items-center space-x-2">
              <span className="uppercase tracking-widest text-[#7A746B]">Category:</span>
              <span className="text-[#FAF8F5] uppercase tracking-wider">{project.category}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} className="text-[#C5A880]" />
              <span className="uppercase tracking-widest text-[#7A746B]">Location:</span>
              <span className="text-[#FAF8F5]">{project.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={14} className="text-[#C5A880]" />
              <span className="uppercase tracking-widest text-[#7A746B]">Year:</span>
              <span className="text-[#FAF8F5]">{project.year}</span>
            </div>
          </div>
        </div>

        {/* Overview & Design Concept Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-[#23211F] pb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              01 • OVERVIEW
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#FAF8F5]">
              The Spatial Context
            </h2>
            <p className="text-base sm:text-lg text-[#9C9488] font-light leading-relaxed">
              {project.overview}
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              02 • DESIGN CONCEPT
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#FAF8F5]">
              Architectural Intention
            </h2>
            <p className="text-base sm:text-lg text-[#9C9488] font-light leading-relaxed">
              {project.designConcept}
            </p>
          </div>
        </div>

        {/* Scope of Work */}
        <div className="space-y-6 border-b border-[#23211F] pb-16">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              03 • SCOPE OF WORK
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#FAF8F5]">
              Disciplines Delivered
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {project.scopeOfWork.map((scope, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#161514] border border-[#262422] flex items-center space-x-3"
              >
                <div className="w-5 h-5 rounded-full bg-[#C5A880]/20 flex items-center justify-center text-[#C5A880] shrink-0">
                  <Check size={12} />
                </div>
                <span className="text-sm text-[#FAF8F5]">{scope}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Design Details */}
        <div className="space-y-6 border-b border-[#23211F] pb-16">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              04 • DESIGN DETAILS
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#FAF8F5]">
              Materiality &amp; Articulation
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {project.designDetails.map((detail, idx) => (
              <div key={idx} className="p-6 bg-[#161514] border border-[#262422] space-y-3">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
                  {detail.title}
                </span>
                <p className="text-sm text-[#9C9488] font-light leading-relaxed">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="space-y-6 border-b border-[#23211F] pb-16">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              05 • IMAGE GALLERY
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#FAF8F5]">
              Visual Perspectives
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                className="aspect-[4/3] overflow-hidden bg-[#181716] border border-[#262422] group"
              >
                <img
                  src={img}
                  alt={`${project.title} detail perspective ${idx + 1}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Before / After (if available) */}
        {project.beforeAfter && (
          <div className="space-y-6 border-b border-[#23211F] pb-16">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
                06 • BEFORE &amp; AFTER
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#FAF8F5]">
                {project.beforeAfter.label}
              </h2>
            </div>
            <BeforeAfterSlider
              beforeImage={project.beforeAfter.before}
              afterImage={project.beforeAfter.after}
              title=""
              subtitle="Drag slider to inspect the spatial transition."
            />
          </div>
        )}

        {/* Final Reveal */}
        <div className="space-y-6 border-b border-[#23211F] pb-16">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              FINAL REVEAL
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#FAF8F5]">
              The Completed Atmosphere
            </h2>
          </div>
          <blockquote className="font-editorial text-2xl sm:text-3xl text-[#E6E1D8] italic leading-relaxed font-light border-l-2 border-[#C5A880] pl-6 py-2">
            &ldquo;{project.finalRevealNote}&rdquo;
          </blockquote>
        </div>

        {/* Bottom CTA Block */}
        <div className="bg-[#151413] border border-[#2B2926] p-10 sm:p-14 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
            OMONY ATELIER STUDIOS
          </span>
          <h3 className="font-editorial text-4xl sm:text-5xl text-[#FAF8F5]">
            Have a space in mind?
          </h3>
          <p className="text-[#9C9488] text-base font-light max-w-lg mx-auto">
            Discuss your residential or commercial vision with our Lagos-based interior architecture atelier.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="px-10 py-4 bg-[#C5A880] text-[#121212] font-semibold text-xs tracking-[0.25em] uppercase hover:bg-[#D4BC98] transition-colors"
            >
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
