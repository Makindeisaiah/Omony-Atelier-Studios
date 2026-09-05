import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/content';
import { ProjectCategory, ProjectDetail } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsViewProps {
  onSelectProject: (project: ProjectDetail) => void;
  onBookConsultation: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onSelectProject,
  onBookConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');

  const categories: ProjectCategory[] = [
    'ALL',
    'RESIDENTIAL',
    'COMMERCIAL',
    'HOSPITALITY',
    'RENOVATION',
  ];

  const filteredProjects = PROJECTS_DATA.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  return (
    <div id="projects-page-view" className="pt-28 pb-24 bg-[#121212] text-[#EFECE6]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-8 pb-14 border-b border-[#23211F]">
        <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-semibold block mb-4">
          OMONY ATELIER STUDIOS • SELECTED WORKS
        </span>
        <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-[#FAF8F5] leading-[1.08] max-w-4xl">
          Where Architecture Meets Living.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#C5BFB5] font-light max-w-2xl leading-relaxed">
          A visual archive of bespoke residential and commercial spaces shaped by proportion, enduring materials, and meticulous execution in Lagos, Nigeria.
        </p>

        {/* Categories Bar */}
        <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto pt-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`portfolio-filter-${cat}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-medium whitespace-nowrap transition-colors border ${
                activeCategory === cat
                  ? 'bg-[#C5A880] text-[#121212] border-[#C5A880]'
                  : 'bg-[#181716] text-[#9C9488] border-[#2B2926] hover:text-[#FAF8F5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer space-y-4 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#181716] border border-[#282624]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#121212]/85 backdrop-blur-md px-3 py-1 border border-[#33302C]">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A880] font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Hover Trigger */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#121212]/90 backdrop-blur-sm border border-[#33302C] flex items-center justify-center text-[#FAF8F5] group-hover:bg-[#C5A880] group-hover:text-[#121212] transition-colors">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Card Meta */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#9C9488] tracking-widest uppercase">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-editorial text-2xl text-[#FAF8F5] group-hover:text-[#C5A880] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#9C9488] font-light leading-relaxed line-clamp-2">
                  {project.overview}
                </p>

                <div className="pt-2">
                  <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#7A746B] group-hover:text-[#C5A880] transition-colors inline-flex items-center space-x-1">
                    <span>VIEW CASE STUDY</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="max-w-4xl mx-auto px-6 text-center pt-12 border-t border-[#23211F]">
        <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-2">
          BESPOKE ARCHITECTURAL COMMISSIONS
        </span>
        <h2 className="font-editorial text-3xl sm:text-4xl text-[#FAF8F5] mb-4">
          Have a space in mind?
        </h2>
        <p className="text-sm text-[#9C9488] max-w-lg mx-auto font-light mb-6">
          Whether constructing a new residence or transforming a commercial establishment in Lagos, we bring spatial intention to life.
        </p>
        <button
          id="portfolio-bottom-consultation-btn"
          onClick={onBookConsultation}
          className="px-8 py-3.5 bg-[#C5A880] text-[#121212] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#D4BC98] transition-colors"
        >
          BOOK A CONSULTATION
        </button>
      </section>
    </div>
  );
};
