import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const kolamIcon = (
    <svg width="30" height="30" viewBox="0 0 100 100" fill="currentColor">
      <circle cx="20" cy="20" r="4" />
      <circle cx="50" cy="20" r="4" />
      <circle cx="80" cy="20" r="4" />
      <circle cx="20" cy="50" r="4" />
      <circle cx="50" cy="50" r="4" />
      <circle cx="80" cy="50" r="4" />
      <circle cx="20" cy="80" r="4" />
      <circle cx="50" cy="80" r="4" />
      <circle cx="80" cy="80" r="4" />
      <path d="M20,20 L80,80 M80,20 L20,80" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );

  return (
    <footer className="bg-dark-near py-24 border-t-2 border-gold relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="tamil-text text-gold text-5xl md:text-7xl font-black mb-8 block drop-shadow-2xl">
            வாழ்த்துக்கள்
          </span>
          <h3 className="font-heading text-3xl md:text-5xl text-cream mb-4 tracking-[0.3em] font-bold">
            Roshna <span className="text-gold">&</span> Selva Kumar
          </h3>
          <p className="font-body text-xs md:text-sm text-gold uppercase tracking-[0.5em] font-black opacity-80">
            May 18, 2026
          </p>
        </motion.div>
        
        {/* Row of 5 Kolam Symbols */}
        <div className="flex justify-center space-x-8 md:space-x-12 mb-16">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ rotate: 180, scale: 1.3 }}
              transition={{ duration: 1 }}
              className="text-gold opacity-30 hover:opacity-100 transition-all duration-700 cursor-pointer"
            >
              {kolamIcon}
            </motion.div>
          ))}
        </div>
        
        <div className="space-y-10">
          <div className="flex flex-col items-center">
            <p className="tamil-text text-gold text-2xl md:text-3xl font-bold tracking-widest italic mb-2">
              "இல்லறம் இனிதே"
            </p>
            <p className="font-body text-cream/40 text-xs md:text-sm italic uppercase tracking-widest">
              May your home life be sweet
            </p>
          </div>
          
          <div className="w-24 h-[1px] bg-gold/20 mx-auto" />
          
          <div className="flex flex-col space-y-4">
            <div className="text-[10px] font-body text-gold/30 uppercase tracking-[0.4em] font-bold">
              Made with love for Roshna & Selva Kumar's Wedding
            </div>
            <div className="text-[9px] font-body text-cream/10 uppercase tracking-[0.2em]">
              © 2026 South Indian Tradition Pass
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-24 -left-24 opacity-[0.05] pointer-events-none rotate-45 scale-150">
        <svg width="400" height="400" viewBox="0 0 100 100">
           <path d="M50,0 L100,50 L50,100 L0,50 Z" fill="#C9A84C" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
