import React, { useState, useEffect, useCallback } from 'react';
import { PageView, ProjectDetail } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { FourServices } from './components/FourServices';
import { FeaturedWork } from './components/FeaturedWork';
import { DesignApproach } from './components/DesignApproach';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProcessTimeline } from './components/ProcessTimeline';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { ProjectsView } from './components/ProjectsView';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SearchModal } from './components/SearchModal';

const VALID_PAGES: PageView[] = ['home', 'about', 'services', 'projects', 'process', 'testimonials', 'contact'];

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [presetService, setPresetService] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [servicesInitialQuery, setServicesInitialQuery] = useState<string>('');

  // Synchronize with URL hash and search params on load & hashchange
  const syncWithUrl = useCallback(() => {
    try {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const params = new URLSearchParams(window.location.search);
      const querySearch = params.get('q') || params.get('search');
      const pageParam = params.get('page')?.toLowerCase() as PageView | undefined;

      if (querySearch) {
        setServicesInitialQuery(querySearch);
        setCurrentPage('services');
        return;
      }

      if (pageParam && VALID_PAGES.includes(pageParam)) {
        setCurrentPage(pageParam);
        return;
      }

      if (hash && VALID_PAGES.includes(hash as PageView)) {
        setCurrentPage(hash as PageView);
      }
    } catch {
      // Fallback cleanly to home
      setCurrentPage('home');
    }
  }, []);

  useEffect(() => {
    syncWithUrl();
    window.addEventListener('hashchange', syncWithUrl);
    window.addEventListener('popstate', syncWithUrl);
    return () => {
      window.removeEventListener('hashchange', syncWithUrl);
      window.removeEventListener('popstate', syncWithUrl);
    };
  }, [syncWithUrl]);

  // Global keyboard shortcut: Ctrl+K or Cmd+K to open Search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    try {
      if (page === 'home') {
        history.pushState(null, '', window.location.pathname);
      } else {
        window.location.hash = page;
      }
    } catch {
      // safe fallback
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (service = '') => {
    setPresetService(service);
    setIsConsultationOpen(true);
  };

  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };

  const handleScrollDownFromHero = () => {
    const introEl = document.getElementById('intro-section');
    if (introEl) {
      introEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#EFECE6] flex flex-col font-sans selection:bg-[#C5A880] selection:text-[#121212]">
      {/* Sticky Luxury Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenSearch={handleOpenSearch}
      />

      {/* Main Content Area Based on Current View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Full-width Striking Hero */}
            <Hero
              onViewWork={() => handleNavigate('projects')}
              onBookConsultation={() => handleOpenConsultation()}
              onScrollDown={handleScrollDownFromHero}
            />

            {/* Editorial Split Introduction */}
            <IntroSection onDiscover={() => handleNavigate('about')} />

            {/* 4 Premium Service Blocks */}
            <FourServices
              onSelectService={(serviceTitle) => handleOpenConsultation(serviceTitle)}
              onExploreAllServices={() => handleNavigate('services')}
            />

            {/* Visual Portfolio: Selected Spaces */}
            <FeaturedWork
              onSelectProject={(project) => setSelectedProject(project)}
              onViewAllProjects={() => handleNavigate('projects')}
            />

            {/* Design Approach & Philosophy */}
            <DesignApproach />

            {/* 14 Capabilities Grid */}
            <CapabilitiesGrid
              onConsultationClick={(cap) => handleOpenConsultation(cap)}
            />

            {/* Interactive Before & After Comparison Slider */}
            <BeforeAfterSlider />

            {/* Six-Step Process Timeline */}
            <ProcessTimeline
              onStartConsultation={() => handleOpenConsultation('Consultation Phase 01')}
            />

            {/* Real Google Testimonials */}
            <TestimonialsSection />

            {/* Editorial Contact & Consultation Section */}
            <ContactSection />
          </>
        )}

        {currentPage === 'about' && (
          <AboutView
            onBookConsultation={() => handleOpenConsultation()}
            onExploreProjects={() => handleNavigate('projects')}
          />
        )}

        {currentPage === 'services' && (
          <ServicesView
            initialSearchQuery={servicesInitialQuery}
            onSelectServiceForConsultation={(serviceName) =>
              handleOpenConsultation(serviceName)
            }
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsView
            onSelectProject={(project) => setSelectedProject(project)}
            onBookConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'process' && (
          <div className="pt-24">
            <ProcessTimeline
              onStartConsultation={() => handleOpenConsultation('Consultation')}
            />
            <DesignApproach />
            <ContactSection />
          </div>
        )}

        {currentPage === 'testimonials' && (
          <div className="pt-24">
            <TestimonialsSection />
            <ContactSection />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="pt-24">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Minimal Luxury Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Atelier Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
        onSelectProject={(project) => {
          setSelectedProject(project);
        }}
        onSelectService={(serviceName) => {
          handleOpenConsultation(serviceName);
        }}
      />

      {/* Reusable Project Detail Template Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookConsultation={() => {
          setSelectedProject(null);
          handleOpenConsultation();
        }}
      />

      {/* Quick Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        presetService={presetService}
      />

      {/* Floating WhatsApp Quick Link */}
      <FloatingWhatsApp />
    </div>
  );
}
