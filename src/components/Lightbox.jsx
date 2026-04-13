import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Lightbox = ({ images, currentIndex, isOpen, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen || !images || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
        onClick={onClose}
      >
        <button 
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-[12px] right-[12px] md:top-8 md:right-8 text-gold hover:text-gold-light transition-colors p-2 z-50 cursor-pointer hover-trigger"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[32px] h-[32px]">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-[8px] md:left-8 text-gold hover:text-gold-light transition-colors p-2 md:p-4 z-50 cursor-pointer hover-trigger"
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-[36px] h-[36px] md:w-[40px] md:h-[40px]">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-[95vw] md:max-w-[90vw] max-h-[80vh] md:max-h-[90vh] flex flex-col items-center justify-center cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={images[currentIndex].url} 
            alt={`Wedding Moment ${currentIndex + 1}`} 
            className="w-auto h-auto max-w-[95vw] md:max-w-[90vw] max-h-[80vh] md:max-h-[85vh] object-contain shadow-2xl border border-gold/20"
          />
        </motion.div>

        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-[8px] md:right-8 text-gold hover:text-gold-light transition-colors p-2 md:p-4 z-50 cursor-pointer hover-trigger"
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-[36px] h-[36px] md:w-[40px] md:h-[40px]">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="absolute bottom-[12px] md:bottom-6 left-1/2 -translate-x-1/2 font-body text-gold tracking-widest font-bold z-50 text-[12px] md:text-lg">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
