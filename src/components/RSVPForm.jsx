import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    message: ''
  });
  const [status, setStatus] = useState('IDLE');

  const cornerLotus = (
    <svg width="60" height="60" viewBox="0 0 100 100" fill="var(--color-gold)">
      <path d="M50,50 Q60,30 50,10 Q40,30 50,50" />
      <path d="M50,50 Q70,40 90,50 Q70,60 50,50" />
      <path d="M50,50 Q60,70 50,90 Q40,70 50,50" />
      <path d="M50,50 Q30,60 10,50 Q30,40 50,50" />
      <circle cx="50" cy="50" r="10" />
    </svg>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    try {
      const response = await fetch('https://formspree.io/f/REPLACE_WITH_YOUR_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', guests: '1', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === 'SUCCESS') {
    return (
      <section id="rsvp" className="even py-32 relative overflow-hidden">
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dark-near p-16 border-2 border-gold rounded-none relative overflow-hidden"
          >
            <div className="w-20 h-20 border border-gold text-gold rounded-none flex items-center justify-center mx-auto mb-10">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-heading text-4xl text-gold mb-4 uppercase tracking-widest">Mikka Nandri!</h2>
            <p className="tamil-text text-cream text-lg mb-8 italic tracking-widest">மிக்க நன்றி!</p>
            <p className="font-body text-cream/40 mb-10 text-sm leading-relaxed uppercase tracking-[0.2em]">
              We have received your response. <br/> Your presence is our true blessing.
            </p>
            <button 
              onClick={() => setStatus('IDLE')}
              className="font-body text-[10px] font-black uppercase tracking-[0.3em] text-gold hover:text-white transition-colors underline underline-offset-8"
            >
              Update Registration
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="even py-32 relative overflow-hidden">
      {/* Corner Decorations */}
      <div className="absolute top-[15px] left-[15px] opacity-20">{cornerLotus}</div>
      <div className="absolute top-[15px] right-[15px] opacity-20 rotate-90">{cornerLotus}</div>
      <div className="absolute bottom-[15px] left-[15px] opacity-20 -rotate-90">{cornerLotus}</div>
      <div className="absolute bottom-[15px] right-[15px] opacity-20 rotate-180">{cornerLotus}</div>

      <div className="max-w-xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="tamil-text text-gold text-3xl font-bold block mb-4">வருகை பதிவு</span>
          <h2 className="font-heading text-4xl md:text-6xl text-gold mb-6 uppercase tracking-widest">RSVP</h2>
          <div className="w-24 h-[1px] bg-gold opacity-30 mx-auto" />
        </div>

        <motion.form
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           onSubmit={handleSubmit}
           className="bg-dark-near p-10 md:p-16 border border-gold/40 rounded-none space-y-12 shadow-2xl"
        >
          <div className="space-y-4">
            <label htmlFor="name" className="flex justify-between font-body text-[10px] font-black uppercase tracking-[0.4em] text-gold/60">
              <span>Full Name</span>
              <span className="tamil-text tracking-normal">பெயர்</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gold/40 py-4 focus:outline-none focus:border-gold transition-all text-cream font-body placeholder:text-cream/10"
              placeholder="e.g. Ramesh Kumar"
            />
          </div>

          <div className="space-y-4">
            <label htmlFor="email" className="flex justify-between font-body text-[10px] font-black uppercase tracking-[0.4em] text-gold/60">
              <span>Email Address</span>
              <span className="tamil-text tracking-normal">மின்னஞ்சல்</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gold/40 py-4 focus:outline-none focus:border-gold transition-all text-cream font-body placeholder:text-cream/10"
              placeholder="ramesh@example.com"
            />
          </div>

          <div className="space-y-4">
            <label htmlFor="guests" className="flex justify-between font-body text-[10px] font-black uppercase tracking-[0.4em] text-gold/60">
              <span>How many guests?</span>
              <span className="tamil-text tracking-normal">விருந்தினர்கள்</span>
            </label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gold/40 py-4 focus:outline-none focus:border-gold transition-all text-cream font-body appearance-none"
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num} className="bg-dark-near">{num} Guest{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <label htmlFor="message" className="flex justify-between font-body text-[10px] font-black uppercase tracking-[0.4em] text-gold/60">
              <span>Message (Optional)</span>
              <span className="tamil-text tracking-normal">செய்தி</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gold/40 py-4 focus:outline-none focus:border-gold transition-all text-cream font-body resize-none placeholder:text-cream/10"
              placeholder="Your warm wishes..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'SUBMITTING'}
            className="w-full py-6 bg-gold text-dark-brown font-bold uppercase tracking-[0.2em] rounded-none hover:bg-white transition-all shadow-xl disabled:bg-gold/50 text-sm"
          >
            {status === 'SUBMITTING' ? 'Registering...' : 'RSVP Now / வருகை பதிவு'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVPForm;
