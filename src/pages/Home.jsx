import { useEffect } from 'react';
import Hero from '../components/Hero';
import PainPoint from '../components/PaintPoint';
import Why from '../components/Why';
import WhatWeDo from '../components/WhatWeDo';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  // Custom keyboard navigation for scroll snap
  useEffect(() => {
    const handleKeyDown = (e) => {
      const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
      if (!keys.includes(e.key)) return;

      e.preventDefault(); // Prevent default jerky scroll

      const currentScroll = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Calculate target scroll position based on key
      let targetScroll = currentScroll;
      
      if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        // Find next snap point (round up to nearest viewport height)
        targetScroll = Math.ceil((currentScroll + 10) / viewportHeight) * viewportHeight;
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        // Find previous snap point (round down to nearest viewport height)
        targetScroll = Math.floor((currentScroll - 10) / viewportHeight) * viewportHeight;
      } else if (e.key === 'Home') {
        targetScroll = 0;
      } else if (e.key === 'End') {
        targetScroll = document.body.scrollHeight;
      }

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Hero />
      <PainPoint />
      <Why />
      <WhatWeDo />
      <HowItWorks />
      <Features />
      <div className="lg:snap-start">
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}
