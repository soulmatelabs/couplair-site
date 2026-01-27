import { useState } from 'react';
import DownloadModal from './DownloadModal';

export default function WhatWeDo() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <section id="what-we-do" className="py-20 lg:py-0 relative overflow-hidden min-h-screen lg:snap-start flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-12 text-lg sm:text-xl text-gray-600 leading-relaxed font-medium">
            <div className="space-y-6">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">What We Do</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                A New Way to <span className="text-primary">Bridge the Gap</span>
              </h3>
              <p>
                <span className="text-primary font-bold">Couplair</span> was born from the discovery that technology can act as a buffer. By moving the "initiation" into a digital, double-blind space, we remove the pressure of the immediate "No."
              </p>
              <p>
                We don't just help you talk more; we help you signal better. We provide the safety net that allows you to be vulnerable again, knowing that your partner will only see your "signal" when they are ready to meet it with their own.
              </p>
            </div>

            <div className="pt-8">
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
          </div>
        </div>
      </div>

      <DownloadModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)} 
      />

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-gradient-to-tl from-primary/5 to-secondary/10 rounded-full blur-3xl -z-10 opacity-60"></div>
    </section>
  );
}
