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
        isScrolled ? 'bg-dark-brown/95 backdrop-blur-md h-[56px] md:h-auto' : 'bg-dark-brown/90 h-[56px] md:h-auto'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4 md:px-8 py-0 md:py-4">
        <a href="#home" className="flex items-center space-x-3 group hover-trigger">
          <div className="text-gold group-hover:rotate-45 transition-transform duration-700">
            {kolamIcon}
          </div>
          <div className="flex flex-col justify-center">
            <span className="tamil-text text-gold text-[15px] xl:text-[20px] font-bold tracking-widest hidden md:block">
              ரோஷ்னா & செல்வகுமார்
            </span>
            <span className="font-heading text-[13px] md:text-[10px] text-cream md:text-cream/40 uppercase tracking-[0.2em] md:tracking-[0.4em] md:-mt-1 block">
              <span className="md:hidden">R & S</span>
              <span className="hidden md:block">Roshna & Selva Kumar</span>
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-2 flex flex-col items-center group overflow-hidden hover-trigger"
            >
              <span className="font-body text-[15px] font-bold uppercase tracking-[0.2em] text-cream group-hover:text-gold transition-colors duration-300">
                {link.name}
              </span>
              <span className="tamil-text text-[9px] text-gold/40 absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {link.tamil}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle / Hamburger */}
        <button
          className="md:hidden text-gold hover-trigger p-2 mr-[-8px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Sidebar Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a0a00] border-t border-gold/20 overflow-hidden absolute top-[56px] left-0 w-full shadow-2xl"
          >
            <div className="flex flex-col px-6 py-4 space-y-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between py-4 border-b border-gold/10 last:border-0 hover-trigger"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-body font-bold text-[13px] text-cream uppercase tracking-[0.2em]">{link.name}</span>
                  <span className="tamil-text text-gold text-[13px]">{link.tamil}</span>
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
