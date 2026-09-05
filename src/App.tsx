import React, { useState } from 'react';
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

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [presetService, setPresetService] = useState<string>('');

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (service = '') => {
    setPresetService(service);
    setIsConsultationOpen(true);
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
