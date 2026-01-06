import { useState } from 'react';
import DownloadModal from './DownloadModal';

export default function Hero() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/30 pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Connect. Sync. <span className="text-primary">Simply Be.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
            The simplest way to share your availability with your partner. Reduce friction, eliminate "Are you free?" texts, and stay in sync effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" id="download">
            <button 
              onClick={() => setIsDownloadModalOpen(true)}
              className="bg-black text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg font-medium"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 12.75l-4.5-4.5m4.5 4.5l4.5-4.5M12 12.75V3" />
              </svg>
              Get Early Access
            </button>
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