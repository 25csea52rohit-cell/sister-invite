import React, { useState, useEffect, useRef } from 'react';
import Lightbox from './Lightbox';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  const sectionRef = useRef(null);
  const leftPhotoRef = useRef(null);
  const rightPhotoRef = useRef(null);
  
  const getImageUrl = (name) => new URL(`../assets/images/${name}`, import.meta.url).href;
  
  const images = [
    { id: 1, url: getImageUrl("WhatsApp Image 2026-04-13 at 12.00.28 (1).jpeg") },
    { id: 2, url: getImageUrl("WhatsApp Image 2026-04-13 at 12.00.28 (2).jpeg") },
    { id: 3, url: getImageUrl("WhatsApp Image 2026-04-13 at 12.00.28.jpeg") },
    { id: 4, url: getImageUrl("WhatsApp Image 2026-04-13 at 12.00.29 (1).jpeg") },
    { id: 5, url: getImageUrl("WhatsApp Image 2026-04-13 at 12.00.29 (2).jpeg") },
    { id: 6, url: getImageUrl("WhatsApp Image 2026-04-13 at 12.00.29 (3).jpeg") },
    { id: 7, url: getImageUrl("WhatsApp Image 2026-04-13 at 12.00.29.jpeg") },
    { id: 8, url: getImageUrl("WhatsApp Image 2026-04-13 at 12.00.30 (1).jpeg") },
    { id: 9, url: getImageUrl("WhatsApp Image 2026-04-13 at 12.00.30 (2).jpeg") },
    { id: 10, url: getImageUrl("WhatsApp Image 2026-04-13 at 12.00.30.jpeg") },
    { id: 11, url: getImageUrl("WhatsApp Image 2026-04-13 at 12.00.31 (1).jpeg") },
    { id: 12, url: getImageUrl("WhatsApp Image 2026-04-13 at 12.00.31 (2).jpeg") },
    { id: 13, url: getImageUrl("WhatsApp Image 2026-04-13 at 12.00.31.jpeg") },
    { id: 14, url: getImageUrl("WhatsApp Image 2026-04-13 at 12.00.32 (1).jpeg") },
    { id: 15, url: getImageUrl("WhatsApp Image 2026-04-13 at 12.00.32 (2).jpeg") },
  ];

  const stripImages = images.slice(3);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setSelectedImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleScroll = () => {
      // Parallax ONLY runs on desktop
      if (window.innerWidth < 768) {
         if (leftPhotoRef.current) leftPhotoRef.current.style.transform = 'none';
         if (rightPhotoRef.current) rightPhotoRef.current.style.transform = 'none';
         return;
      }

      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top + window.innerHeight / 2;
      
      if (leftPhotoRef.current) {
        leftPhotoRef.current.style.transform = `rotate(-3deg) translateY(${scrolled * -0.15}px)`;
      }
      if (rightPhotoRef.current) {
        rightPhotoRef.current.style.transform = `rotate(3deg) translateY(${scrolled * 0.15}px)`;
      }
      // CenterBg scroll removed, explicitly handled via absolute overlay now
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const revealRef = useScrollReveal();

  const cornerLotus = (
    <svg viewBox="0 0 100 100" fill="var(--color-gold)" className="w-[35px] h-[35px] md:w-[40px] md:h-[40px]">
      <path d="M50,50 Q60,30 50,10 Q40,30 50,50" />
      <path d="M50,50 Q70,40 90,50 Q70,60 50,50" />
      <path d="M50,50 Q60,70 50,90 Q40,70 50,50" />
      <path d="M50,50 Q30,60 10,50 Q30,40 50,50" />
      <circle cx="50" cy="50" r="10" />
    </svg>
  );

  return (
    <section id="gallery" className="odd py-32 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4" ref={revealRef}>
        
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="tamil-text text-gold text-[16px] md:text-2xl font-bold block mb-2">எங்கள் திருமண வரவேற்பு</span>
          <h2 
            className="font-heading text-primary tracking-[0.05em] uppercase font-bold"
            style={{ fontSize: "clamp(24px, 4vw, 48px)" }}
          >
            Photographic Memories
          </h2>
        </div>

        {/* Invitation Card Centerpiece */}
        <div className="relative flex flex-col md:flex-row items-center justify-center mb-12 md:mb-24 min-h-[480px] md:min-h-[520px]">
          
          {/* Left Photo */}
          <div 
            ref={leftPhotoRef}
            className="w-full h-[220px] md:absolute md:left-[5%] lg:left-[10%] md:w-[280px] md:h-[420px] z-20 cursor-pointer md:shadow-[8px_8px_0_#C9A84C] border-[3px] border-gold rounded-[4px] mb-4 md:mb-0 transition-all duration-300 md:hover:scale-[1.03] block"
            onClick={() => openLightbox(0)}
          >
            <img src={images[0].url} alt="Memory 1" className="w-full h-full object-cover object-center rounded-[2px]" />
          </div>

          {/* Center Card */}
          <div className="relative w-[calc(100%-32px)] md:w-full max-w-[400px] md:max-w-[380px] min-h-[480px] md:min-h-[520px] bg-cream border-2 border-gold rounded-[4px] px-[20px] py-[28px] md:px-8 md:py-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] z-30 flex flex-col items-center justify-center overflow-hidden mx-auto">
            
            {/* SVG Border Frame inside Card */}
            <div className="absolute inset-[8px] md:inset-[10px] border border-gold/60 pointer-events-none z-10">
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-gold rotate-45" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-gold rotate-45" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-gold rotate-45" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-gold rotate-45" />
            </div>

            {/* Background Parallax Image perfectly anchored */}
            <img 
              src={images[2].url} 
              alt="Centerpiece background" 
              className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-[0.08] pointer-events-none z-0 rounded-[2px]"
            />
            
            {/* Hitbox overlay for lightbox activation */}
            <div 
              className="absolute inset-0 cursor-pointer z-[5]" 
              onClick={() => openLightbox(2)} 
            />

            {/* Text content z-index 1 ensures it sits cleanly above opacity image */}
            <div className="relative z-10 flex flex-col items-center text-center w-full h-full pointer-events-none">
              <span className="tamil-text text-gold mb-6 block drop-shadow-sm font-bold" style={{ fontSize: "clamp(11px, 1.5vw, 14px)" }}>|| சுபமங்கள விழா ||</span>
              
              <div className="flex space-x-2 my-4 text-gold drop-shadow-sm">
                <svg width="60" height="12" viewBox="0 0 100 20" fill="currentColor">
                  <circle cx="10" cy="10" r="4" />
                  <circle cx="30" cy="10" r="4" />
                  <circle cx="50" cy="10" r="4" />
                  <circle cx="70" cy="10" r="4" />
                  <circle cx="90" cy="10" r="4" />
                </svg>
              </div>

              <div className="my-6">
                <h3 className="tamil-text text-primary font-bold mb-2" style={{ fontSize: "clamp(15px, 2vw, 18px)" }}>ரோஷ்னா & செல்வகுமார்</h3>
                <h3 className="font-heading text-dark font-bold leading-none tracking-tight" style={{ fontSize: "clamp(22px, 3.5vw, 32px)" }}>
                  Roshna <br/>&<br/> Selva Kumar
                </h3>
              </div>

              <div className="w-16 h-[1px] bg-gold my-6 drop-shadow-sm" />

              <div className="space-y-2 uppercase tracking-widest text-dark/80 font-bold mb-6">
                <div className="text-gold bg-gold/10 inline-block px-3 py-1 mb-2 rounded border border-gold/20" style={{ fontSize: "10px" }}>Wedding Celebration</div>
                <div className="font-heading text-primary tracking-normal font-bold" style={{ fontSize: "clamp(13px, 2vw, 18px)" }}>May 18, 2026</div>
                <div className="tamil-text text-gold/80 tracking-normal normal-case mb-1" style={{ fontSize: "11px" }}>வைகாசி 4, 2026</div>
                <div style={{ fontSize: "12px" }}>Alagar Kovil Temple</div>
                <div className="tamil-text text-dark/60 tracking-normal normal-case" style={{ fontSize: "10px" }}>அழகர் கோவில், மதுரை</div>
              </div>

              <div className="opacity-60 mb-4 drop-shadow-sm">{cornerLotus}</div>

              <div className="font-body italic text-gold/80 normal-case mb-2" style={{ fontSize: "11px" }}>
                Together with their families
              </div>
            </div>

          </div>

          {/* Right Photo */}
          <div 
            ref={rightPhotoRef}
            className="w-full h-[220px] md:absolute md:right-[5%] lg:right-[10%] md:w-[280px] md:h-[420px] z-20 cursor-pointer md:shadow-[8px_8px_0_#C9A84C] border-[3px] border-gold rounded-[4px] mt-4 md:mt-0 transition-all duration-300 md:hover:scale-[1.03] block"
            onClick={() => openLightbox(1)}
          >
            <img src={images[1].url} alt="Memory 2" className="w-full h-full object-cover object-center rounded-[2px]" />
          </div>

        </div>

        {/* Masonry Layout for remaining photos */}
        <div className="pb-8 relative z-40 w-full px-2 mt-12 md:mt-0">
          <div className="columns-2 md:columns-3 gap-[8px] md:gap-[16px] space-y-[8px] md:space-y-[16px]">
            {stripImages.map((img, index) => (
              <StripImage 
                key={img.id} 
                src={img.url} 
                index={index + 3} 
                onClick={() => openLightbox(index + 3)} 
              />
            ))}
          </div>
        </div>

      </div>

      <Lightbox 
        images={images} 
        currentIndex={selectedImageIndex} 
        isOpen={lightboxOpen} 
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
};

const StripImage = ({ src, index, onClick }) => {
  const ref = useScrollReveal({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className="w-full break-inside-avoid cursor-pointer border-2 border-transparent hover:border-gold active:border-gold md:hover:scale-105 transition-all duration-300 rounded-[2px] overflow-hidden"
      onClick={onClick}
    >
      <img src={src} alt={`Moment ${index + 1}`} className="w-full object-cover shadow-lg block" loading="lazy" />
    </div>
  );
};

export default Gallery;
