import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Target: May 18, 2026
  const targetDate = new Date("2026-05-18T10:00:00").getTime();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const cornerLotus = (
    <svg viewBox="0 0 100 100" fill="var(--color-gold)" className="w-[35px] h-[35px] md:w-[60px] md:h-[60px]">
      <path d="M50,50 Q60,30 50,10 Q40,30 50,50" />
      <path d="M50,50 Q70,40 90,50 Q70,60 50,50" />
      <path d="M50,50 Q60,70 50,90 Q40,70 50,50" />
      <path d="M50,50 Q30,60 10,50 Q30,40 50,50" />
      <circle cx="50" cy="50" r="10" />
    </svg>
  );

  return (
    <section id="countdown" className="even relative py-20 flex justify-center items-center overflow-hidden">
      <div className="absolute top-[8px] md:top-[15px] left-[8px] md:left-[15px] opacity-40 z-20 pointer-events-none">{cornerLotus}</div>
      <div className="absolute top-[8px] md:top-[15px] right-[8px] md:right-[15px] opacity-40 z-20 rotate-90 pointer-events-none">{cornerLotus}</div>
      <div className="absolute bottom-[8px] md:bottom-[15px] left-[8px] md:left-[15px] opacity-40 z-20 -rotate-90 pointer-events-none">{cornerLotus}</div>
      <div className="absolute bottom-[8px] md:bottom-[15px] right-[8px] md:right-[15px] opacity-40 z-20 rotate-180 pointer-events-none">{cornerLotus}</div>
      
      <div className="max-w-4xl w-full mx-auto px-4 z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="relative"
        >
          {/* Main Gold Box Frame */}
          <div className="absolute inset-0 border border-gold/30 pointer-events-none hidden md:block">
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-gold rotate-45" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-gold rotate-45" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gold rotate-45" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gold rotate-45" />
          </div>

          <div className="py-8 md:py-16 px-2 md:px-8 bg-dark-brown/40 md:bg-dark-brown/80 backdrop-blur-sm">
             <div className="tamil-text text-gold mb-4 md:mb-6 font-bold" style={{fontSize: "clamp(12px, 2vw, 18px)"}}>சுபமூகூர்த்தம் நெருங்குகிறது</div>
             <h2 className="font-heading text-cream uppercase tracking-widest drop-shadow-md mb-8 md:mb-12 font-bold" style={{fontSize: "clamp(24px, 4vw, 42px)"}}>
               The Celebration Begins In
             </h2>

             {/* Guaranteed Single Row Layout on Mobile */}
             <div className="flex flex-row flex-nowrap justify-center gap-[8px] md:gap-[20px] w-full">
               
               {/* Box 1: Days */}
               <div className="w-[calc(25vw-12px)] min-w-0 md:w-32 bg-gold/10 border border-gold rounded-[4px] py-[8px] md:py-[20px] px-[4px] md:px-[16px] text-center shrink">
                 <div className="hidden md:block font-body text-cream/60 uppercase tracking-widest font-semibold mb-2" style={{fontSize: "clamp(8px, 1.8vw, 14px)", whiteSpace: "nowrap"}}>Days</div>
                 <div className="font-heading text-cream leading-none mb-1 font-bold" style={{fontSize: "clamp(20px, 5vw, 56px)"}}>{timeLeft.days}</div>
                 <div className="tamil-text text-gold mt-1 font-bold" style={{fontSize: "clamp(8px, 1.8vw, 14px)", whiteSpace: "nowrap"}}>நாட்கள்</div>
               </div>

               {/* Box 2: Hours */}
               <div className="w-[calc(25vw-12px)] min-w-0 md:w-32 bg-gold/10 border border-gold rounded-[4px] py-[8px] md:py-[20px] px-[4px] md:px-[16px] text-center shrink">
                 <div className="hidden md:block font-body text-cream/60 uppercase tracking-widest font-semibold mb-2" style={{fontSize: "clamp(8px, 1.8vw, 14px)", whiteSpace: "nowrap"}}>Hours</div>
                 <div className="font-heading text-cream leading-none mb-1 font-bold" style={{fontSize: "clamp(20px, 5vw, 56px)"}}>{timeLeft.hours}</div>
                 <div className="tamil-text text-gold mt-1 font-bold" style={{fontSize: "clamp(8px, 1.8vw, 14px)", whiteSpace: "nowrap"}}>மணிகள்</div>
               </div>

               {/* Box 3: Minutes */}
               <div className="w-[calc(25vw-12px)] min-w-0 md:w-32 bg-gold/10 border border-gold rounded-[4px] py-[8px] md:py-[20px] px-[4px] md:px-[16px] text-center shrink">
                 <div className="hidden md:block font-body text-cream/60 uppercase tracking-widest font-semibold mb-2" style={{fontSize: "clamp(8px, 1.8vw, 14px)", whiteSpace: "nowrap"}}>Mins</div>
                 <div className="font-heading text-cream leading-none mb-1 font-bold" style={{fontSize: "clamp(20px, 5vw, 56px)"}}>{timeLeft.minutes}</div>
                 <div className="tamil-text text-gold mt-1 font-bold" style={{fontSize: "clamp(8px, 1.8vw, 14px)", whiteSpace: "nowrap"}}>நிமிடங்கள்</div>
               </div>

               {/* Box 4: Seconds */}
               <div className="w-[calc(25vw-12px)] min-w-0 md:w-32 bg-gold/10 border border-gold rounded-[4px] py-[8px] md:py-[20px] px-[4px] md:px-[16px] text-center shrink">
                 <div className="hidden md:block font-body text-cream/60 uppercase tracking-widest font-semibold mb-2" style={{fontSize: "clamp(8px, 1.8vw, 14px)", whiteSpace: "nowrap"}}>Secs</div>
                 <div className="font-heading text-cream leading-none mb-1 font-bold" style={{fontSize: "clamp(20px, 5vw, 56px)"}}>{timeLeft.seconds}</div>
                 <div className="tamil-text text-gold mt-1 font-bold" style={{fontSize: "clamp(8px, 1.8vw, 14px)", whiteSpace: "nowrap"}}>நொடிகள்</div>
               </div>

             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
