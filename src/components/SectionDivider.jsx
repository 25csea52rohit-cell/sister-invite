import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ type = 'kolam' }) => {
  if (type === 'jasmine') {
    return (
      <div className="flex justify-center items-center py-8 space-x-4 opacity-40">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
          >
            <svg width="24" height="24" viewBox="0 0 100 100" fill="white" stroke="#E8B84B" strokeWidth="2">
              <circle cx="50" cy="50" r="20" />
              <path d="M50 10 Q60 30 50 50 Q40 30 50 10" />
              <path d="M50 90 Q60 70 50 50 Q40 70 50 90" />
              <path d="M10 50 Q30 60 50 50 Q30 40 10 50" />
              <path d="M90 50 Q70 60 50 50 Q70 40 90 50" />
            </svg>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative w-48 h-12 flex items-center justify-center">
        <div className="absolute w-full h-[1px] bg-gold/30" />
        <div className="relative bg-cream px-4">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="#C9A84C" strokeWidth="2">
            <path d="M50 10 L90 50 L50 90 L10 50 Z" />
            <circle cx="50" cy="50" r="5" fill="#C9A84C" />
            <circle cx="30" cy="30" r="2" fill="#C9A84C" />
            <circle cx="70" cy="30" r="2" fill="#C9A84C" />
            <circle cx="30" cy="70" r="2" fill="#C9A84C" />
            <circle cx="70" cy="70" r="2" fill="#C9A84C" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
