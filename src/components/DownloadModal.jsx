import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function DownloadModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-auto" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left shadow-2xl sm:p-8"
          >
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Get Early Access
              </h2>
              <button 
                onClick={onClose}
                className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors"
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="mb-6 text-sm text-gray-500">
              Couplair is currently in early beta. Choose your preferred way to download the Android version below.
            </p>

            {/* Options Stack */}
            <div className="space-y-4">
              
              {/* Direct APK (Primary) */}
              <a 
                href="https://drive.google.com/file/d/1d-L2RZWOBctdKRU68lYQtUAYf8bX2JBA/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex w-full items-center justify-between rounded-xl border border-transparent bg-primary px-4 py-4 text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20">
                     {/* Download Icon */}
                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 12.75l-4.5-4.5m4.5 4.5l4.5-4.5M12 12.75V3" />
                      </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">Direct APK Download</div>
                    <div className="text-xs text-white/80">Version 0.0.1 • Instant Install</div>
                  </div>
                </div>
                <svg className="h-5 w-5 text-white/70 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>

              {/* Uptodown (Coming Soon) */}
              <div className="relative flex w-full items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 opacity-75">
                 <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-200 text-gray-500">
                     {/* Uptodown-like generic icon or store icon */}
                     <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                     </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-500">Uptodown</div>
                    <div className="text-xs text-gray-400">Coming soon to Uptodown</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer / Installation Notices */}
            <div className="mt-6 border-t border-gray-100 pt-4 text-center space-y-3">
              <p className="text-xs text-gray-400">
                iOS version is in private local testing, but (if you're brave enough) follow this <Link to="/ios-install-guide" onClick={onClose} className="text-primary hover:underline font-bold">guide</Link>.
              </p>
              <p className="text-xs text-gray-400">
                Need help with the Android setup? Check the <Link to="/android-install-guide" onClick={onClose} className="text-primary hover:underline font-bold">Installation Guide</Link>.
              </p>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
