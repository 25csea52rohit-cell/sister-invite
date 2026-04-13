import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const targetDate = new Date('2026-05-18T10:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const lotusSvg = (
    <svg width="30" height="30" viewBox="0 0 100 100" fill="#C9A84C">
      <path d="M50,40 Q60,20 50,0 Q40,20 50,40" />
      <path d="M50,40 Q70,30 90,40 Q70,50 50,40" />
      <path d="M50,40 Q60,60 50,80 Q40,60 50,40" />
      <path d="M50,40 Q30,50 10,40 Q30,30 50,40" />
      <circle cx="50" cy="40" r="5" />
    </svg>
  );

  const cornerLotus = (
    <svg width="60" height="60" viewBox="0 0 100 100" fill="var(--color-gold)">
      <path d="M50,50 Q60,30 50,10 Q40,30 50,50" />
      <path d="M50,50 Q70,40 90,50 Q70,60 50,50" />
      <path d="M50,50 Q60,70 50,90 Q40,70 50,50" />
      <path d="M50,50 Q30,60 10,50 Q30,40 50,50" />
      <circle cx="50" cy="50" r="10" />
    </svg>
  );

  const TimeBox = ({ value, label, tamil }) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-8 md:p-12 bg-gold/10 border border-gold rounded-none relative overflow-hidden group shadow-2xl"
    >
      <div className="mb-4 text-gold opacity-50">{lotusSvg}</div>
      <span className="font-heading text-5xl md:text-7xl text-gold font-black mb-2 group-hover:scale-110 transition-transform duration-500">
        {String(value).padStart(2, '0')}
      </span>
      <div className="flex flex-col items-center">
        <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.4em] text-cream font-black">
          {label}
        </span>
        <span className="tamil-text text-[11px] md:text-xs text-gold/60 mt-1 font-bold">
          {tamil}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section id="countdown" className="even py-24 relative overflow-hidden">
      {/* Corner Decorations */}
      <div className="absolute top-[15px] left-[15px] opacity-20">{cornerLotus}</div>
      <div className="absolute top-[15px] right-[15px] opacity-20 rotate-90">{cornerLotus}</div>
      <div className="absolute bottom-[15px] left-[15px] opacity-20 -rotate-90">{cornerLotus}</div>
      <div className="absolute bottom-[15px] right-[15px] opacity-20 rotate-180">{cornerLotus}</div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-16"
        >
          <span className="tamil-text text-gold text-2xl font-bold block mb-2">மங்கல விழா தொடக்கம்</span>
          <h2 className="font-heading text-4xl md:text-6xl text-gold mb-4 uppercase tracking-widest">Countdown</h2>
          <div className="w-48 h-[1px] bg-gold mx-auto opacity-30" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 max-w-5xl mx-auto">
          <TimeBox value={timeLeft.days} label="Days" tamil="நாட்கள்" />
          <TimeBox value={timeLeft.hours} label="Hours" tamil="மணி" />
          <TimeBox value={timeLeft.minutes} label="Minutes" tamil="நிமிடம்" />
          <TimeBox value={timeLeft.seconds} label="Seconds" tamil="நொடி" />
        </div>
      </div>

      {/* Triangular Divider Below */}
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

export default Countdown;
