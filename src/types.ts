export type PageView = 'home' | 'about' | 'services' | 'projects' | 'process' | 'testimonials' | 'contact';

export type ProjectCategory = 'ALL' | 'RESIDENTIAL' | 'COMMERCIAL' | 'HOSPITALITY' | 'RENOVATION';

export interface ProjectDetail {
  id: string;
  title: string;
  category: 'RESIDENTIAL' | 'COMMERCIAL' | 'HOSPITALITY' | 'RENOVATION';
  placeholderType: 'RESIDENTIAL INTERIOR' | 'COMMERCIAL INTERIOR' | 'INTERIOR TRANSFORMATION';
  location: string;
  year: string;
  coverImage: string;
  overview: string;
  designConcept: string;
  scopeOfWork: string[];
  designDetails: {
    title: string;
    description: string;
  }[];
  gallery: string[];
  beforeAfter?: {
    before: string;
    after: string;
    label: string;
  };
  finalRevealNote: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  quote: string;
  source: 'Google Review';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables?: string[];
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  projectLocation: string;
  estimatedScope: string;
  message: string;
}
