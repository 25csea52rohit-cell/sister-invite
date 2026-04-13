import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const OurStory = () => {
  const getImageUrl = (name) => new URL(`../assets/images/${name}`, import.meta.url).href;
  const bridePhoto = getImageUrl("WhatsApp Image 2026-04-13 at 12.00.29 (2).jpeg");
  const groomPhoto = getImageUrl("WhatsApp Image 2026-04-13 at 12.00.29 (3).jpeg");

  const brideRef = useScrollReveal({ threshold: 0.2 });
  const groomRef = useScrollReveal({ threshold: 0.2 });
  const textRef = useScrollReveal({ threshold: 0.2 });

  const lotusSvg = (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="var(--color-gold)" className="animate-[spin_20s_linear_infinite]">
      <path d="M50,50 Q60,30 50,10 Q40,30 50,50" />
      <path d="M50,50 Q70,40 90,50 Q70,60 50,50" />
      <path d="M50,50 Q60,70 50,90 Q40,70 50,50" />
      <path d="M50,50 Q30,60 10,50 Q30,40 50,50" />
      <circle cx="50" cy="50" r="10" />
    </svg>
  );

  return (
    <section id="our-story" className="even py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div className="flex flex-col items-center mb-24">
          <div className="mb-6 opacity-80">{lotusSvg}</div>
          <h2 className="font-heading text-[32px] md:text-[48px] text-cream tracking-widest uppercase font-bold drop-shadow-md mb-2">
            Our Story
          </h2>
          <span className="tamil-text text-gold text-[16px] md:text-[18px] font-bold block opacity-90 drop-shadow-sm">எங்கள் காதல் கதை</span>
        </div>

        <div className="flex flex-row items-center justify-center gap-4 md:gap-10 w-full mb-16 px-2">
          
          {/* Bride Circle */}
          <div 
            ref={brideRef} 
            className="flex flex-col items-center translate-x-[-80px] opacity-0"
            style={{ transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
          >
            <div className="w-[120px] h-[120px] md:w-[260px] md:h-[260px] rounded-full border-[3px] border-gold overflow-hidden mb-6 shadow-[0_0_30px_rgba(201,168,76,0.2)] hover:scale-105 transition-transform duration-500">
              <img src={bridePhoto} alt="Roshna" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-heading text-[20px] md:text-[24px] text-cream font-bold drop-shadow-md">Roshna</h3>
            <span className="tamil-text text-[12px] md:text-[14px] text-gold mt-1">ரோஷ்னா</span>
          </div>

          {/* Center Heart */}
          <div className="flex-shrink-0 mx-2 animate-[heartbeat_1.5s_ease-in-out_infinite]">
            <style>{`
              @keyframes heartbeat {
                0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(201,168,76,0.3)); }
                25% { transform: scale(1.15); filter: drop-shadow(0 0 20px rgba(201,168,76,0.6)); }
                50% { transform: scale(1.05); filter: drop-shadow(0 0 10px rgba(201,168,76,0.4)); }
                75% { transform: scale(1.2); filter: drop-shadow(0 0 25px rgba(201,168,76,0.8)); }
              }
            `}</style>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="#8B0000" className="drop-shadow-lg w-[30px] h-[30px] md:w-[50px] md:h-[50px]">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Groom Circle */}
          <div 
            ref={groomRef}
            className="flex flex-col items-center translate-x-[80px] opacity-0"
            style={{ transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s' }}
          >
            <div className="w-[120px] h-[120px] md:w-[260px] md:h-[260px] rounded-full border-[3px] border-gold overflow-hidden mb-6 shadow-[0_0_30px_rgba(201,168,76,0.2)] hover:scale-105 transition-transform duration-500">
              <img src={groomPhoto} alt="Selva Kumar" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-heading text-[20px] md:text-[24px] text-cream font-bold drop-shadow-md">Selva Kumar</h3>
            <span className="tamil-text text-[12px] md:text-[14px] text-gold mt-1">செல்வகுமார்</span>
          </div>

        </div>

        <div className="w-[60%] md:w-[40%] h-[1px] bg-gold/50 my-16 opacity-50" />

        <div ref={textRef} className="opacity-0 translate-y-[40px] flex flex-col items-center w-full" style={{ transition: 'opacity 1s ease-out 0.4s, transform 1s ease-out 0.4s' }}>
          <div className="w-full max-w-[680px] relative px-4 md:px-8">
            <span className="absolute -top-8 -left-2 md:-left-8 text-gold font-heading text-[48px] opacity-60">"</span>
            <p className="font-heading italic text-[16px] md:text-[22px] text-[#F5E6C8] text-center leading-[1.9] tracking-wide relative z-10 px-4 drop-shadow-sm">
              From the banks of the Vaigai to the blessings of Alagar Kovil — two souls found in each other what temples are built to celebrate. Roshna and Selva Kumar carry within them the warmth of Madurai's sun, the richness of Tamil traditions, and a love as enduring as the ancient stones of the hills they call home.
            </p>
            <span className="absolute -bottom-8 -right-2 md:-right-8 text-gold font-heading text-[48px] opacity-60">"</span>
          </div>

          <div className="mt-20">
            <p className="tamil-text text-[14px] text-gold tracking-[0.15em] text-center font-bold">
              அன்பே சிவம் — Love is God
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
