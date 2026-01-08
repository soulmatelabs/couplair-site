import { useState, useEffect } from 'react';
import DownloadModal from './DownloadModal';
import AnchorLink from './AnchorLink';

export default function Hero() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-start pt-16 sm:pt-20">
      
      {/* Images Layer - Desktop (Static) */}
      <div className="hidden sm:flex relative z-0 justify-center gap-6 sm:gap-12 transform translate-y-8 sm:translate-y-12 scale-90 sm:scale-100 pointer-events-none select-none">
        <img 
          src="/assets/images/Unavailable-Unavailable-portrait.webp" 
          alt="App Screenshot Unavailable" 
          className="w-[140px] xs:w-[160px] sm:w-[240px] lg:w-[280px] h-auto rotate-[-6deg]"
        />
        <img 
          src="/assets/images/Available-Available-portrait.webp" 
          alt="App Screenshot Available" 
          className="w-[140px] xs:w-[160px] sm:w-[240px] lg:w-[280px] h-auto rotate-[6deg]"
        />
      </div>

      {/* Images Layer - Mobile (Carousel) */}
      <div className="sm:hidden relative z-0 flex justify-center items-center transform translate-y-12 scale-100 pointer-events-none select-none h-[400px] w-full">
         <img 
          src="/assets/images/Unavailable-Unavailable-portrait.webp" 
          alt="App Screenshot Unavailable" 
          className={`absolute w-[200px] h-auto transition-opacity duration-1000 ease-in-out ${activeImage === 0 ? 'opacity-100' : 'opacity-0'}`}
        />
        <img 
          src="/assets/images/Available-Available-portrait.webp" 
          alt="App Screenshot Available" 
          className={`absolute w-[200px] h-auto transition-opacity duration-1000 ease-in-out ${activeImage === 1 ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-16 sm:-mt-24 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Glassmorphism Card */}
          <div className="bg-white/70 backdrop-blur-2xl rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-white/50 text-center transform transition-all hover:scale-[1.01] duration-500">
            <h1 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
              Couplair - Solve Relationship Desynchronization 
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm">
              Connect. Sync. <span className="text-primary">Enjoy.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-3 leading-relaxed max-w-2xl mx-auto font-medium">
              The simplest way to sync yours and your partner's needs.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
              Reduce friction, eliminate guesswork, and stay in sync effortlessly.
            </p>
            <div className="flex flex-col gap-4 justify-center items-center" id="download">
              <button 
                onClick={() => setIsDownloadModalOpen(true)}
                className="bg-gray-900 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg font-bold group"
              >
                <svg className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 12.75l-4.5-4.5m4.5 4.5l4.5-4.5M12 12.75V3" />
                </svg>
                Get Early Access
              </button>
              <AnchorLink to="/#pain-point" className="text-gray-600 hover:text-primary font-semibold transition-colors duration-200">
                Know More
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] -z-10 rounded-full bg-gradient-to-b from-primary/5 via-secondary/20 to-transparent blur-3xl opacity-60 pointer-events-none"></div>

      <DownloadModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)} 
      />
    </section>
  );
}