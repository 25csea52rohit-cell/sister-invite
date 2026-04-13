import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', tamil: 'முகப்பு' },
    { name: 'Our Story', href: '#our-story', tamil: 'எங்கள் கதை' },
    { name: 'Countdown', href: '#countdown', tamil: 'வரவேற்பு' },
    { name: 'Gallery', href: '#gallery', tamil: 'படங்கள்' },
    { name: 'Venue', href: '#venue', tamil: 'நிகழ்விடம்' },
    { name: 'RSVP', href: '#rsvp', tamil: 'பதிவு' },
  ];

  const kolamIcon = (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="currentColor">
      <circle cx="20" cy="20" r="4" />
      <circle cx="50" cy="20" r="4" />
      <circle cx="80" cy="20" r="4" />
      <circle cx="20" cy="50" r="4" />
      <circle cx="50" cy="50" r="4" />
      <circle cx="80" cy="50" r="4" />
      <circle cx="20" cy="80" r="4" />
      <circle cx="50" cy="80" r="4" />
      <circle cx="80" cy="80" r="4" />
      <path d="M20,20 L80,80 M80,20 L20,80" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-[1000] transition-all duration-500 border-b-2 border-gold ${
        isScrolled ? 'bg-dark-brown/95 backdrop-blur-md py-2 px-6' : 'bg-dark-brown/90 py-4 px-8'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-3 group hover-trigger">
          <div className="text-gold group-hover:rotate-45 transition-transform duration-700">
            {kolamIcon}
          </div>
          <div className="flex flex-col">
            <span className="tamil-text text-gold text-lg md:text-xl font-bold tracking-widest">
              ரோஷ்னா & செல்வகுமார்
            </span>
            <span className="font-heading text-[10px] text-cream/40 uppercase tracking-[0.4em] -mt-1">
              Roshna & Selva Kumar
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden xl:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-2 flex flex-col items-center group overflow-hidden hover-trigger"
            >
              <span className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-cream group-hover:text-gold transition-colors duration-300">
                {link.name}
              </span>
              <span className="tamil-text text-[9px] text-gold/40 absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {link.tamil}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden text-gold hover-trigger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h20M4 12h20M4 18h20"} />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-dark-near border-t border-gold/20 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between hover-trigger"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-heading text-2xl text-cream tracking-widest">{link.name}</span>
                  <span className="tamil-text text-gold text-lg">{link.tamil}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
