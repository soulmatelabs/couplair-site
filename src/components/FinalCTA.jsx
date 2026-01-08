import { useState } from 'react';
import DownloadModal from './DownloadModal';

export default function FinalCTA() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
          Are you ready to <span className="text-primary">reconnect?</span>
        </h2>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium">
          Stop the guessing game. Start syncing. Download Couplair today and get back to what matters.
        </p>

        <button 
          onClick={() => setIsDownloadModalOpen(true)}
          className="bg-gray-900 text-white px-10 py-5 rounded-2xl inline-flex items-center justify-center gap-3 hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-xl font-bold group"
        >
          <svg className="h-7 w-7 text-gray-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 12.75l-4.5-4.5m4.5 4.5l4.5-4.5M12 12.75V3" />
          </svg>
          Get Early Access
        </button>

      </div>

      <DownloadModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)} 
      />
    </section>
  );
}
