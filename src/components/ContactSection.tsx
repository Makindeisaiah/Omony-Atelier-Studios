import React, { useState } from 'react';
import { BRAND } from '../data/content';
import { ConsultationFormData } from '../types';
import { Phone, Mail, Instagram, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProjectType = '',
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: initialProjectType || 'Residential Interior Design',
    projectLocation: 'Lagos, Nigeria',
    estimatedScope: 'Full Interior Architecture & Execution',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable consultation submission with user acknowledgement
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello OMONY Atelier Studios,\n\nI am reaching out regarding a project enquiry:\n• Name: ${formData.fullName || 'Client'}\n• Project Type: ${formData.projectType}\n• Location: ${formData.projectLocation}\n• Message: ${formData.message || 'I would like to schedule an interior design consultation.'}`
    );
    return `https://wa.me/2348168223827?text=${text}`;
  };

  return (
    <section id="contact-section" className="py-20 lg:py-32 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Channels & Studio Address */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-semibold block">
                ATELIER ENGAGEMENT
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-[1.12] break-words">
                Let's Create Something Exceptional.
              </h2>
              <p className="text-[#9C9488] text-sm sm:text-lg font-light leading-relaxed">
                Tell us about your space, your vision and what you would like to create. Our team will be happy to discuss your project.
              </p>
            </div>

            {/* Direct Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-2">
              <a
                id="contact-whatsapp-btn"
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-[#181716] border border-[#2D2B28] hover:border-[#C5A880] text-[#FAF8F5] transition-colors flex items-center space-x-2.5 sm:space-x-3 group min-w-0"
              >
                <MessageCircle size={18} className="text-[#C5A880] shrink-0" />
                <div className="text-left min-w-0">
                  <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-[#7A746B] block">Direct</span>
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase group-hover:text-[#C5A880] truncate block">WHATSAPP</span>
                </div>
              </a>

              <a
                id="contact-call-btn"
                href={`tel:${BRAND.phones[0].raw}`}
                className="p-3 sm:p-4 bg-[#181716] border border-[#2D2B28] hover:border-[#C5A880] text-[#FAF8F5] transition-colors flex items-center space-x-2.5 sm:space-x-3 group min-w-0"
              >
                <Phone size={18} className="text-[#C5A880] shrink-0" />
                <div className="text-left min-w-0">
                  <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-[#7A746B] block">Direct</span>
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase group-hover:text-[#C5A880] truncate block">CALL US</span>
                </div>
              </a>

              <a
                id="contact-email-btn"
                href={`mailto:${BRAND.email}?subject=Project%20Enquiry%20-%20OMONY%20Atelier%20Studios`}
                className="p-3 sm:p-4 bg-[#181716] border border-[#2D2B28] hover:border-[#C5A880] text-[#FAF8F5] transition-colors flex items-center space-x-2.5 sm:space-x-3 group min-w-0"
              >
                <Mail size={18} className="text-[#C5A880] shrink-0" />
                <div className="text-left min-w-0">
                  <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-[#7A746B] block">Direct</span>
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase group-hover:text-[#C5A880] truncate block">EMAIL US</span>
                </div>
              </a>

              <a
                id="contact-instagram-btn"
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-[#181716] border border-[#2D2B28] hover:border-[#C5A880] text-[#FAF8F5] transition-colors flex items-center space-x-2.5 sm:space-x-3 group min-w-0"
              >
                <Instagram size={18} className="text-[#C5A880] shrink-0" />
                <div className="text-left min-w-0">
                  <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-[#7A746B] block">Social</span>
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase group-hover:text-[#C5A880] truncate block">INSTAGRAM</span>
                </div>
              </a>
            </div>

            {/* Detailed Info */}
            <div className="space-y-4 pt-4 border-t border-[#23211F] text-sm text-[#9C9488]">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#FAF8F5] block font-medium">Studio Location</span>
                  <span>{BRAND.location}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#FAF8F5] block font-medium">Phone Enquiries</span>
                  <span>{BRAND.phones[0].display}</span> • <span>{BRAND.phones[1].display}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#FAF8F5] block font-medium">Email Dispatch</span>
                  <span>{BRAND.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#151413] border border-[#262422] p-8 sm:p-12 relative">
              <div className="mb-8">
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#FAF8F5]">
                  Consultation Enquiry
                </h3>
                <p className="text-xs text-[#9C9488] uppercase tracking-wider mt-1">
                  Private &amp; Confidential Project Brief
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#C5A880]/15 border border-[#C5A880] text-[#C5A880] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="font-editorial text-3xl text-[#FAF8F5]">
                    Enquiry Received
                  </h4>
                  <p className="text-sm text-[#9C9488] max-w-md mx-auto font-light leading-relaxed">
                    Thank you for contacting OMONY Atelier Studios. Our design team will review your project brief and connect with you shortly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#C5A880] text-[#121212] text-xs font-semibold tracking-widest uppercase hover:bg-[#D4BC98] transition-colors inline-flex items-center space-x-2"
                    >
                      <MessageCircle size={16} />
                      <span>CONTINUE ON WHATSAPP</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          projectType: 'Residential Interior Design',
                          projectLocation: 'Lagos, Nigeria',
                          estimatedScope: 'Full Interior Architecture & Execution',
                          message: '',
                        });
                      }}
                      className="text-xs tracking-widest uppercase text-[#9C9488] hover:text-[#FAF8F5] underline"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="fullName"
                        className="block text-xs uppercase tracking-[0.2em] text-[#9C9488] font-medium"
                      >
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Obafolahan"
                        className="w-full bg-[#1B1A19] border border-[#2D2B28] px-4 py-3 text-sm text-[#FAF8F5] placeholder-[#666057] focus:outline-none focus:border-[#C5A880] transition-colors rounded-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-[0.2em] text-[#9C9488] font-medium"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@domain.com"
                        className="w-full bg-[#1B1A19] border border-[#2D2B28] px-4 py-3 text-sm text-[#FAF8F5] placeholder-[#666057] focus:outline-none focus:border-[#C5A880] transition-colors rounded-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-xs uppercase tracking-[0.2em] text-[#9C9488] font-medium"
                      >
                        Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+234 ..."
                        className="w-full bg-[#1B1A19] border border-[#2D2B28] px-4 py-3 text-sm text-[#FAF8F5] placeholder-[#666057] focus:outline-none focus:border-[#C5A880] transition-colors rounded-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="projectType"
                        className="block text-xs uppercase tracking-[0.2em] text-[#9C9488] font-medium"
                      >
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full bg-[#1B1A19] border border-[#2D2B28] px-4 py-3 text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C5A880] transition-colors rounded-none"
                      >
                        <option value="Residential Interior Design">Residential Interior Design</option>
                        <option value="Commercial Interior Design">Commercial Interior Design</option>
                        <option value="Interior Architectural Design">Interior Architectural Design</option>
                        <option value="Luxury Interior Design">Luxury Interior Design</option>
                        <option value="Full Home Renovation">Full Home Renovation</option>
                        <option value="Turnkey Interior Design">Turnkey Interior Design</option>
                        <option value="Finishing Solutions & Supervision">Finishing Solutions &amp; Supervision</option>
                        <option value="Hospitality & Restaurant Design">Hospitality &amp; Restaurant Design</option>
                        <option value="Airbnb / Short-let Setup">Airbnb / Short-let Setup</option>
                        <option value="Other Consultation">Other Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Project Location & Estimated Scope */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="projectLocation"
                        className="block text-xs uppercase tracking-[0.2em] text-[#9C9488] font-medium"
                      >
                        Project Location
                      </label>
                      <input
                        id="projectLocation"
                        type="text"
                        value={formData.projectLocation}
                        onChange={(e) =>
                          setFormData({ ...formData, projectLocation: e.target.value })
                        }
                        placeholder="e.g. Ikoyi, Victoria Island, Ikeja, Lagos"
                        className="w-full bg-[#1B1A19] border border-[#2D2B28] px-4 py-3 text-sm text-[#FAF8F5] placeholder-[#666057] focus:outline-none focus:border-[#C5A880] transition-colors rounded-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="estimatedScope"
                        className="block text-xs uppercase tracking-[0.2em] text-[#9C9488] font-medium"
                      >
                        Estimated Project Scope
                      </label>
                      <select
                        id="estimatedScope"
                        value={formData.estimatedScope}
                        onChange={(e) =>
                          setFormData({ ...formData, estimatedScope: e.target.value })
                        }
                        className="w-full bg-[#1B1A19] border border-[#2D2B28] px-4 py-3 text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C5A880] transition-colors rounded-none"
                      >
                        <option value="Single Room / Zone">Single Room / Zone</option>
                        <option value="Multi-Room Suite">Multi-Room Suite</option>
                        <option value="Full Residence (Complete Home)">Full Residence (Complete Home)</option>
                        <option value="Commercial Space / Office">Commercial Space / Office</option>
                        <option value="Consultation & Material Guidance Only">Consultation &amp; Material Guidance Only</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-[0.2em] text-[#9C9488] font-medium"
                    >
                      Message / Project Vision
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your property, timeline, architectural aspirations, and spatial desires..."
                      className="w-full bg-[#1B1A19] border border-[#2D2B28] px-4 py-3 text-sm text-[#FAF8F5] placeholder-[#666057] focus:outline-none focus:border-[#C5A880] transition-colors rounded-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      id="contact-form-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#C5A880] text-[#121212] font-semibold text-xs tracking-[0.25em] uppercase hover:bg-[#D4BC98] transition-colors flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span>DISPATCHING...</span>
                      ) : (
                        <>
                          <span>SEND ENQUIRY</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
