import React from 'react';
import { PROJECTS_DATA } from '../data/content';
import { ProjectDetail } from '../types';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface FeaturedWorkProps {
  onSelectProject: (project: ProjectDetail) => void;
  onViewAllProjects: () => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({
  onSelectProject,
  onViewAllProjects,
}) => {
  // Show first 4 projects in an asymmetrical editorial masonry grid
  const featured = PROJECTS_DATA.slice(0, 4);

  return (
    <section id="featured-work-section" className="py-20 lg:py-32 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#242220]">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-semibold block">
              PORTFOLIO ARCHIVE
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-tight break-words">
              Selected Spaces
            </h2>
            <p className="text-[#9C9488] text-sm sm:text-lg font-light max-w-xl leading-relaxed">
              A selection of interiors shaped by our approach to detail, proportion and timeless design.
            </p>
          </div>

          <button
            id="featured-work-view-all-top-btn"
            onClick={onViewAllProjects}
            className="mt-6 md:mt-0 self-start md:self-auto inline-flex items-center space-x-2 text-xs tracking-[0.2em] font-semibold uppercase text-[#C5A880] hover:text-[#FAF8F5] transition-colors group"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Editorial Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Card 1: Large Featured Card (Col Span 7) */}
          <div
            id={`featured-project-${featured[0].id}`}
            onClick={() => onSelectProject(featured[0])}
            className="lg:col-span-7 group cursor-pointer space-y-4"
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-[#181716] border border-[#262422]">
              <img
                src={featured[0].coverImage}
                alt={featured[0].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute top-5 left-5 bg-[#121212]/80 backdrop-blur-md px-3 py-1.5 border border-[#33302C]">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-medium">
                  {featured[0].category}
                </span>
              </div>

              <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#121212]/90 backdrop-blur-sm border border-[#33302C] flex items-center justify-center text-[#FAF8F5] group-hover:bg-[#C5A880] group-hover:text-[#121212] transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </div>

            <div className="flex items-start justify-between pt-2">
              <div>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#9C9488] block mb-1">
                  {featured[0].location}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#FAF8F5] group-hover:text-[#C5A880] transition-colors">
                  {featured[0].title}
                </h3>
              </div>
              <span className="text-xs tracking-widest text-[#7A746B] pt-1">
                {featured[0].year}
              </span>
            </div>
            <p className="text-sm text-[#9C9488] font-light max-w-xl">
              {featured[0].overview}
            </p>
          </div>

          {/* Card 2: Vertical Editorial Card (Col Span 5) */}
          <div
            id={`featured-project-${featured[1].id}`}
            onClick={() => onSelectProject(featured[1])}
            className="lg:col-span-5 group cursor-pointer space-y-4 lg:pt-12"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#181716] border border-[#262422]">
              <img
                src={featured[1].coverImage}
                alt={featured[1].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              <div className="absolute top-5 left-5 bg-[#121212]/80 backdrop-blur-md px-3 py-1.5 border border-[#33302C]">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-medium">
                  {featured[1].category}
                </span>
              </div>

              <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#121212]/90 backdrop-blur-sm border border-[#33302C] flex items-center justify-center text-[#FAF8F5] group-hover:bg-[#C5A880] group-hover:text-[#121212] transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </div>

            <div className="flex items-start justify-between pt-2">
              <div>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#9C9488] block mb-1">
                  {featured[1].location}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#FAF8F5] group-hover:text-[#C5A880] transition-colors">
                  {featured[1].title}
                </h3>
              </div>
              <span className="text-xs tracking-widest text-[#7A746B] pt-1">
                {featured[1].year}
              </span>
            </div>
            <p className="text-sm text-[#9C9488] font-light">
              {featured[1].overview}
            </p>
          </div>

          {/* Card 3: Col Span 5 */}
          <div
            id={`featured-project-${featured[2].id}`}
            onClick={() => onSelectProject(featured[2])}
            className="lg:col-span-5 group cursor-pointer space-y-4"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#181716] border border-[#262422]">
              <img
                src={featured[2].coverImage}
                alt={featured[2].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              <div className="absolute top-5 left-5 bg-[#121212]/80 backdrop-blur-md px-3 py-1.5 border border-[#33302C]">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-medium">
                  {featured[2].category}
                </span>
              </div>

              <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#121212]/90 backdrop-blur-sm border border-[#33302C] flex items-center justify-center text-[#FAF8F5] group-hover:bg-[#C5A880] group-hover:text-[#121212] transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </div>

            <div className="flex items-start justify-between pt-2">
              <div>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#9C9488] block mb-1">
                  {featured[2].location}
                </span>
                <h3 className="font-editorial text-2xl text-[#FAF8F5] group-hover:text-[#C5A880] transition-colors">
                  {featured[2].title}
                </h3>
              </div>
              <span className="text-xs tracking-widest text-[#7A746B] pt-1">
                {featured[2].year}
              </span>
            </div>
            <p className="text-sm text-[#9C9488] font-light">
              {featured[2].overview}
            </p>
          </div>

          {/* Card 4: Col Span 7 */}
          <div
            id={`featured-project-${featured[3].id}`}
            onClick={() => onSelectProject(featured[3])}
            className="lg:col-span-7 group cursor-pointer space-y-4"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#181716] border border-[#262422]">
              <img
                src={featured[3].coverImage}
                alt={featured[3].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              <div className="absolute top-5 left-5 bg-[#121212]/80 backdrop-blur-md px-3 py-1.5 border border-[#33302C]">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-medium">
                  {featured[3].category}
                </span>
              </div>

              <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#121212]/90 backdrop-blur-sm border border-[#33302C] flex items-center justify-center text-[#FAF8F5] group-hover:bg-[#C5A880] group-hover:text-[#121212] transition-colors">
                <ArrowUpRight size={18} />
              </div>
            </div>

            <div className="flex items-start justify-between pt-2">
              <div>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#9C9488] block mb-1">
                  {featured[3].location}
                </span>
                <h3 className="font-editorial text-2xl text-[#FAF8F5] group-hover:text-[#C5A880] transition-colors">
                  {featured[3].title}
                </h3>
              </div>
              <span className="text-xs tracking-widest text-[#7A746B] pt-1">
                {featured[3].year}
              </span>
            </div>
            <p className="text-sm text-[#9C9488] font-light max-w-xl">
              {featured[3].overview}
            </p>
          </div>
        </div>

        {/* Footer Link Button */}
        <div className="mt-16 text-center">
          <button
            id="featured-work-bottom-cta"
            onClick={onViewAllProjects}
            className="px-10 py-4 text-xs tracking-[0.25em] uppercase font-semibold border border-[#C5A880]/70 text-[#FAF8F5] hover:bg-[#C5A880] hover:text-[#121212] transition-all duration-300 inline-flex items-center space-x-3"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
