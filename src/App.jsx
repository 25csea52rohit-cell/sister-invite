import React, { useState } from 'react';
import OpeningScreen from './components/OpeningScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import VenueMap from './components/VenueMap';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen selection:bg-gold selection:text-dark-brown">
      {isOpen && <OpeningScreen onComplete={() => setIsOpen(false)} />}
      <Cursor />
      <Navbar />
      
      <main>
        {/* Odd section: Hero */}
        <section className="p-0">
          <Hero />
        </section>

        {/* Even section: Our Story */}
        <OurStory />

        {/* Odd section: Countdown */}
        <Countdown />

        {/* Even section: Gallery */}
        <Gallery />

        {/* Odd section: Venue Map */}
        <VenueMap />

        {/* Even section: RSVP */}
        <RSVPForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
