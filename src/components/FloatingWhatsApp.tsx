import React, { useState } from 'react';
import { BRAND } from '../data/content';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="floating-whatsapp-widget" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip / Prompt bubble */}
      {isOpen && (
        <div className="mb-3 w-72 bg-[#181716] border border-[#2D2B28] p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between border-b border-[#262422] pb-2 mb-2">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-semibold block">
                OMONY ATELIER
              </span>
              <span className="text-xs text-[#FAF8F5] font-medium">Direct WhatsApp Line</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#7A746B] hover:text-[#FAF8F5]"
              aria-label="Close message"
            >
              <X size={14} />
            </button>
          </div>
          <p className="text-xs text-[#9C9488] font-light leading-relaxed mb-3">
            Inquire directly with our Lagos interior architecture team regarding your residential or commercial space.
          </p>
          <a
            id="floating-whatsapp-direct-link"
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 bg-[#C5A880] text-[#121212] text-[11px] font-semibold tracking-wider uppercase flex items-center justify-center space-x-1.5 hover:bg-[#D4BC98] transition-colors"
          >
            <MessageCircle size={14} />
            <span>START CONVERSATION</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center space-x-2">
        <button
          id="floating-whatsapp-trigger"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#181716] border border-[#C5A880]/80 text-[#FAF8F5] hover:bg-[#C5A880] hover:text-[#121212] transition-all duration-300 shadow-xl"
          aria-label="Contact OMONY Atelier Studios on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C5A880]"></span>
          </span>
          <MessageCircle size={24} className="text-[#C5A880] group-hover:text-[#121212] transition-colors" />
        </button>
      </div>
    </div>
  );
};
