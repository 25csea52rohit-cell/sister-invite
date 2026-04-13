import React from 'react';
import { motion } from 'framer-motion';

const VenueMap = () => {
  const gopuramSvg = (
    <svg width="40" height="40" viewBox="0 0 100 120" fill="currentColor">
      <path d="M50,10 L90,110 L10,110 Z" opacity="0.5" />
      <rect x="30" y="100" width="40" height="10" />
      <rect x="35" y="85" width="30" height="15" />
      <rect x="40" y="70" width="20" height="15" />
      <path d="M50,5 L55,20 L45,20 Z" />
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

  return (
    <section id="venue" className="even py-24 relative overflow-hidden">
      {/* Corner Decorations */}
      <div className="absolute top-[15px] left-[15px] opacity-40">{cornerLotus}</div>
      <div className="absolute top-[15px] right-[15px] opacity-40 rotate-90">{cornerLotus}</div>
      <div className="absolute bottom-[15px] left-[15px] opacity-40 -rotate-90">{cornerLotus}</div>
      <div className="absolute bottom-[15px] right-[15px] opacity-40 rotate-180">{cornerLotus}</div>

      {/* Floating Section Marker */}
      <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2">
        <div className="flex space-x-0">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-gold" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gold flex justify-center mb-4"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </motion.div>
          <span className="tamil-text text-gold text-2xl font-bold block mb-2">நிகழ்விடம்</span>
          <h2 className="font-heading text-4xl md:text-6xl text-gold mb-2 uppercase tracking-widest">Venue</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-near p-8 md:p-12 border border-gold/30 rounded-lg shadow-2xl"
          >
            <div className="text-gold opacity-60 mb-6">{gopuramSvg}</div>
            <h3 className="font-heading text-3xl md:text-5xl text-gold mb-2">Alagar Kovil Temple</h3>
            <p className="tamil-text text-gold/80 text-xl mb-6">அழகர் கோவில்</p>
            
            <div className="space-y-4 text-cream/70 font-body text-sm md:text-base mb-8">
              <p className="flex items-start">
                <span className="text-gold mr-3">📍</span>
                Alagar Kovil Road, Madurai, Tamil Nadu 625301
              </p>
              <p className="flex items-center">
                <span className="text-gold mr-3">📅</span>
                May 18, 2026 | வைகாசி 4, 2026
              </p>
              <p className="flex items-center">
                <span className="text-gold mr-3">⏰</span>
                10:00 AM onwards
              </p>
            </div>

            <div className="w-full h-[1px] bg-gold/20 mb-8" />

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://maps.google.com/?q=Alagar+Kovil+Madurai" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 py-4 bg-gold text-dark-brown font-bold text-center rounded hover:bg-gold/80 transition-all uppercase tracking-widest text-xs"
              >
                Get Directions ↗
              </a>
              <a 
                href="https://maps.google.com/?q=11.1085,78.0015" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 py-4 border border-gold text-gold font-bold text-center rounded hover:bg-gold/10 transition-all uppercase tracking-widest text-xs"
              >
                View on Maps ↗
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Map Box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-[400px] border-2 border-gold rounded-lg shadow-2xl bg-dark-near flex items-center justify-center overflow-hidden"
          >
            <iframe
              title="Alagar Kovil Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123!2d78.0015!3d11.1085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0703b09d3fffff%3A0x1234567890abcdef!2sAlagar+Kovil!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Triangles */}
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

export default VenueMap;
