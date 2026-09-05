import React, { useState } from 'react';
import { BRAND } from '../data/content';
import { ConsultationFormData } from '../types';
import { X, Send, CheckCircle2, MessageCircle, Phone, AlertCircle } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  presetService = '',
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: presetService || 'Residential Interior Design',
    projectLocation: 'Lagos, Nigeria',
    estimatedScope: 'Full Interior Architecture & Execution',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setIsSubmitting(false);
      setErrorMessage(
        'Formspree endpoint URL is not configured. Please define VITE_FORMSPREE_ENDPOINT in your environment (format: https://formspree.io/f/XXXXXXX).'
      );
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          projectLocation: formData.projectLocation,
          estimatedScope: formData.estimatedScope,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json().catch(() => null);
        let errorText = 'Unable to schedule consultation. Please verify your details or try again.';
        if (errorData?.errors && Array.isArray(errorData.errors)) {
          errorText = errorData.errors
            .map((item: { field?: string; message?: string }) => item.message || item.field)
            .filter(Boolean)
            .join(', ');
        } else if (errorData?.error) {
          errorText = errorData.error;
        }
        setErrorMessage(errorText);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network connection error';
      setErrorMessage(`${msg}. Please check your connection and try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello OMONY Atelier Studios,\n\nI would like to book a luxury interior design consultation:\n• Name: ${formData.fullName || 'Client'}\n• Project Type: ${formData.projectType}\n• Location: ${formData.projectLocation}\n• Message: ${formData.message || 'Please contact me to schedule a consultation.'}`
    );
    return `https://wa.me/2348168223827?text=${text}`;
  };

  return (
    <div
      id="consultation-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A0A09]/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-[#141312] border border-[#2B2926] shadow-2xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#9C9488] hover:text-[#FAF8F5] transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#C5A880]/20 border border-[#C5A880] text-[#C5A880] flex items-center justify-center mx-auto">
              <CheckCircle2 size={30} />
            </div>
            <h3 className="font-editorial text-3xl text-[#FAF8F5]">
              Consultation Scheduled
            </h3>
            <p className="text-sm text-[#9C9488] max-w-md mx-auto font-light leading-relaxed">
              We have received your project details. A senior design architect from OMONY Atelier Studios will reach out within 24 hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#C5A880] text-[#121212] text-xs font-semibold tracking-widest uppercase hover:bg-[#D4BC98] transition-colors inline-flex items-center space-x-2"
              >
                <MessageCircle size={15} />
                <span>CONFIRM ON WHATSAPP</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 border border-[#33302C] text-xs font-semibold tracking-widest uppercase text-[#FAF8F5] hover:bg-[#1E1D1B] transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-1">
                OMONY ATELIER STUDIOS
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#FAF8F5]">
                Book a Consultation
              </h2>
              <p className="text-xs text-[#9C9488] tracking-wider uppercase mt-1">
                Lagos, Nigeria • Tailored Interior Architecture
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-wider text-[#9C9488]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Your Name"
                    className="w-full bg-[#1A1918] border border-[#2D2B28] px-3.5 py-2.5 text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-wider text-[#9C9488]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+234 ..."
                    className="w-full bg-[#1A1918] border border-[#2D2B28] px-3.5 py-2.5 text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-wider text-[#9C9488]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@domain.com"
                    className="w-full bg-[#1A1918] border border-[#2D2B28] px-3.5 py-2.5 text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-wider text-[#9C9488]">
                    Project Type *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full bg-[#1A1918] border border-[#2D2B28] px-3.5 py-2.5 text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Residential Interior Design">Residential Interior Design</option>
                    <option value="Commercial Interior Design">Commercial Interior Design</option>
                    <option value="Interior Architectural Design">Interior Architectural Design</option>
                    <option value="Luxury Interior Design">Luxury Interior Design</option>
                    <option value="Full Home Renovation">Full Home Renovation</option>
                    <option value="Turnkey Interior Design">Turnkey Interior Design</option>
                    <option value="Finishing Solutions & Supervision">Finishing Solutions &amp; Supervision</option>
                    <option value="Hospitality & Restaurant Design">Hospitality &amp; Restaurant Design</option>
                    <option value="Space Planning">Space Planning</option>
                    <option value="Furniture & Styling">Furniture &amp; Styling</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] uppercase tracking-wider text-[#9C9488]">
                  Project Location
                </label>
                <input
                  type="text"
                  value={formData.projectLocation}
                  onChange={(e) =>
                    setFormData({ ...formData, projectLocation: e.target.value })
                  }
                  placeholder="e.g. Ikoyi / Victoria Island / Ikeja, Lagos"
                  className="w-full bg-[#1A1918] border border-[#2D2B28] px-3.5 py-2.5 text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] uppercase tracking-wider text-[#9C9488]">
                  Message / Spatial Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Briefly describe your vision, property type, or timeframe..."
                  className="w-full bg-[#1A1918] border border-[#2D2B28] px-3.5 py-2.5 text-sm text-[#FAF8F5] focus:outline-none focus:border-[#C5A880]"
                />
              </div>

              {/* Inline Error Message */}
              {errorMessage && (
                <div
                  id="consultation-modal-error"
                  role="alert"
                  className="p-3.5 bg-[#231514] border border-[#5C2621] text-[#FAF8F5] flex items-start space-x-3 text-xs leading-relaxed"
                >
                  <AlertCircle size={17} className="text-[#EF4444] shrink-0 mt-0.5" />
                  <div className="flex-1 space-y-0.5">
                    <span className="font-semibold uppercase tracking-wider text-[#F87171] block text-[11px]">
                      Submission Notice
                    </span>
                    <p className="text-[#D8D2C7] text-xs">{errorMessage}</p>
                  </div>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3.5 bg-[#C5A880] text-[#121212] font-semibold text-xs tracking-[0.2em] uppercase hover:bg-[#D4BC98] transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? <span>PROCESSING...</span> : <span>SUBMIT CONSULTATION</span>}
                </button>

                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 border border-[#3A3835] hover:border-[#C5A880] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageCircle size={15} className="text-[#C5A880]" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
