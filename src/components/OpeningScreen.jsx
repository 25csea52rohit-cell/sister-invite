import React, { useState, useEffect } from 'react';

const OpeningScreen = ({ onComplete }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [butterflies, setButterflies] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);

    const newButterflies = Array.from({ length: 20 }).map((_, index) => {
      const angle = (index / 20) * 360 + Math.random() * 18;
      const distance = 300 + Math.random() * 400;
      const tx = Math.cos(angle * Math.PI / 180) * distance;
      const ty = Math.sin(angle * Math.PI / 180) * distance;
      const duration = 0.8 + Math.random() * 0.7;
      const size = 20 + Math.random() * 8;
      return { id: index, tx, ty, duration, size, angle };
    });
    setButterflies(newButterflies);

    setTimeout(() => {
      onComplete();
    }, 1500);
  };

  const lotusSvg = (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="var(--color-gold)">
      <path d="M50,50 Q60,30 50,10 Q40,30 50,50" />
      <path d="M50,50 Q70,40 90,50 Q70,60 50,50" />
      <path d="M50,50 Q60,70 50,90 Q40,70 50,50" />
      <path d="M50,50 Q30,60 10,50 Q30,40 50,50" />
      <circle cx="50" cy="50" r="10" />
    </svg>
  );

  return (
    <div 
      className="fixed inset-0 z-[9999] overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <style>{`
        @keyframes scale-up { 0% { transform: scale(0.5); } 100% { transform: scale(1); } }
        @keyframes wingFlap { 0%, 100% { transform: scaleX(1); } 50% { transform: scaleX(0.3); } }
        @keyframes butterflyFly {
          0% { transform: translate(-50%, -50%) translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) translate(var(--tx), var(--ty)) scale(0.3); opacity: 0; }
        }
        @keyframes subtlePulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1.0; }
        }
        .butterfly-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: center;
          animation: butterflyFly var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          pointer-events: none;
          z-index: 10000;
        }
        .butterfly-wing-flap {
          animation: wingFlap 0.15s infinite alternate linear;
        }
      `}</style>
      
      {/* Left Panel */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-full bg-dark-brown border-r-[3px] border-gold flex justify-end items-center overflow-hidden"
        style={{
          transition: 'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.3s',
          transform: isOpening ? 'translateX(-100%)' : 'translateX(0)',
          backgroundImage: 'radial-gradient(var(--color-gold) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
        }}
      >
        <div className="absolute inset-0 bg-dark-brown/95 pointer-events-none" />
      </div>

      {/* Right Panel */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-dark-brown border-l-[3px] border-gold flex justify-start items-center overflow-hidden"
        style={{
          transition: 'transform 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.3s',
          transform: isOpening ? 'translateX(100%)' : 'translateX(0)',
          backgroundImage: 'radial-gradient(var(--color-gold) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
        }}
      >
        <div className="absolute inset-0 bg-dark-brown/95 pointer-events-none" />
      </div>

      {/* Center Content Overlay */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
        style={{
          transition: 'opacity 0.4s ease',
          opacity: isOpening ? 0 : 1
        }}
      >
        <div 
          className="mb-8"
          style={mounted ? { animation: 'fade-in 1s ease-out forwards, scale-up 1s ease-out forwards' } : {opacity:0}}
        >
          {lotusSvg}
        </div>

        <div 
          className="tamil-text text-[24px] text-gold mb-2 opacity-0 font-bold drop-shadow-md"
          style={mounted ? { animation: 'fade-in 1s ease-out 0.5s forwards' } : {}}
        >
          ரோஷ்னா & செல்வகுமார்
        </div>

        <div 
          className="font-heading text-[42px] text-cream mb-6 opacity-0 tracking-widest leading-none font-bold drop-shadow-2xl"
          style={mounted ? { animation: 'fade-in 1s ease-out 0.8s forwards' } : {}}
        >
          Roshna & Selva Kumar
        </div>

        <div 
          className="font-body text-[14px] text-gold opacity-0 uppercase tracking-widest font-bold"
          style={mounted ? { animation: 'fade-in 1s ease-out 1.1s forwards' } : {}}
        >
          May 18, 2026 <span className="mx-2">|</span> <span className="tamil-text tracking-normal normal-case">வைகாசி 4, 2026</span>
        </div>

        <div 
          className="w-32 h-[1px] bg-gold my-8 opacity-0 drop-shadow-lg"
          style={mounted ? { animation: 'fade-in 1s ease-out 1.3s forwards' } : {}}
        />

        <div 
          className="font-body text-[12px] text-cream tracking-[0.2em] uppercase font-bold opacity-0"
          style={mounted ? { animation: 'fade-in 0.5s ease-out 1.5s forwards, subtlePulse 2s ease-in-out 1.5s infinite' } : {}}
        >
          Touch to Enter / தொட்டு உள்ளே வாருங்கள்
        </div>

        {/* Vignette effect */}
        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 150px rgba(0,0,0,0.9)' }} />
      </div>

      {/* Butterflies */}
      {butterflies.map((b) => (
        <div
          key={b.id}
          className="butterfly-container"
          style={{
            '--tx': `${b.tx}px`,
            '--ty': `${b.ty}px`,
            '--duration': `${b.duration}s`,
          }}
        >
          <div className="butterfly-wing-flap" style={{ transform: `rotate(${b.angle + 90}deg)` }}>
            <svg viewBox="0 0 40 30" width={b.size} height={b.size * 0.75}>
              <ellipse cx="10" cy="12" rx="10" ry="7" fill="#C9A84C" opacity="0.8" transform="rotate(-20 10 12)"/>
              <ellipse cx="30" cy="12" rx="10" ry="7" fill="#E8B84B" opacity="0.8" transform="rotate(20 30 12)"/>
              <ellipse cx="12" cy="20" rx="7" ry="5" fill="#C9A84C" opacity="0.6" transform="rotate(20 12 20)"/>
              <ellipse cx="28" cy="20" rx="7" ry="5" fill="#E8B84B" opacity="0.6" transform="rotate(-20 28 20)"/>
              <line x1="20" y1="5" x2="20" y2="25" stroke="#8B0000" strokeWidth="1.5"/>
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OpeningScreen;
