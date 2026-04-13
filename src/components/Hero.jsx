import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const hero = heroRef.current;
      if (hero) {
        const content = hero.querySelector('.hero-content');
        if (content) {
          content.style.opacity = Math.max(0, 1 - scrolled / 400);
          content.style.transform = `translateY(${scrolled * -0.3}px)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cornerLotus = (
    <svg width="60" height="60" viewBox="0 0 100 100" fill="var(--color-gold)">
      <path d="M50,50 Q60,30 50,10 Q40,30 50,50" />
      <path d="M50,50 Q70,40 90,50 Q70,60 50,50" />
      <path d="M50,50 Q60,70 50,90 Q40,70 50,50" />
      <path d="M50,50 Q30,60 10,50 Q30,40 50,50" />
      <circle cx="50" cy="50" r="10" />
    </svg>
  );

  return (
    <section id="home" ref={heroRef} className="odd relative h-[100svh] min-h-[750px] w-full flex items-center justify-center overflow-hidden p-0 bg-transparent">
      {/* Corner Decorations */}
      <div className="absolute top-[15px] left-[15px] opacity-60 z-20 pointer-events-none">{cornerLotus}</div>
      <div className="absolute top-[15px] right-[15px] opacity-60 z-20 rotate-90 pointer-events-none">{cornerLotus}</div>
      <div className="absolute bottom-[15px] left-[15px] opacity-60 z-20 -rotate-90 pointer-events-none">{cornerLotus}</div>
      <div className="absolute bottom-[15px] right-[15px] opacity-60 z-20 rotate-180 pointer-events-none">{cornerLotus}</div>

      {/* Main Content Frame */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 hero-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative p-12 md:p-24 text-center"
        >
          {/* Decorative Rectangle Frame */}
          <div className="absolute inset-0 border-2 border-gold pointer-events-none">
            {/* Diamond Corners */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-gold rotate-45" />
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-gold rotate-45" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-gold rotate-45" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-gold rotate-45" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="font-heading text-gold text-lg md:text-xl tracking-[0.5em] mb-4 block animate-pulse drop-shadow-sm">
              || சுபமங்கள விழா ||
            </span>
            <span className="font-body text-[10px] md:text-sm uppercase tracking-[0.4em] text-primary font-black mb-8 block drop-shadow-sm">
              The Marriage of
            </span>
            
            <div className="flex flex-col items-center justify-center space-y-6 mb-12">
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-dark-brown leading-tight tracking-tight drop-shadow-md">
                Roshna <span className="text-gold">&</span> Selva Kumar
              </h1>
              <div className="tamil-text text-primary text-3xl md:text-5xl font-bold border-b-2 border-gold/40 px-6 pb-2 drop-shadow-sm">
                ரோஷ்னா & செல்வகுமார்
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
                 <p className="font-body text-lg md:text-2xl text-primary tracking-[0.2em] font-black uppercase drop-shadow-sm">
                    May 18, 2026
                 </p>
                 <span className="hidden md:block text-gold">|</span>
                 <p className="tamil-text text-gold text-xl font-bold tracking-widest drop-shadow-sm">
                    வைகாசி 4, 2026
                 </p>
              </div>
              
              <div className="w-24 h-[1px] bg-gold/50" />
              
              <div className="flex flex-col items-center">
                <p className="font-heading text-xl md:text-3xl text-dark-brown italic drop-shadow-sm">
                  Alagar Kovil Temple, Madurai
                </p>
                <p className="tamil-text text-dark-brown/60 text-base drop-shadow-sm">
                  அழகர் கோவில், மதுரை
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Section Marker (Triangles) */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center translate-y-1/2">
        <div className="flex space-x-0">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[20px] border-t-gold" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
