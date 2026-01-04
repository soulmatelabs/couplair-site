export default function Hero() {
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
            <button className="bg-black text-white px-8 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
               {/* Apple Icon */}
               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-1.23 3.91-1.2 2.77.15 3.98 1.4 3.98 1.4-.04.04-3.15 1.85-3.15 5.58 0 4.14 3.72 5.56 3.72 5.56-.03.04-.58 2.01-1.78 3.86-.71 1.09-1.34 1.9-1.76 1.93zM12.03 7.25c-.25-2.05 1.5-3.32 3.23-3.25.16 2.03-1.84 3.52-3.23 3.25z"/></svg>
               <div className="text-left">
                 <div className="text-xs">Download on the</div>
                 <div className="text-sm font-semibold leading-none">App Store</div>
               </div>
            </button>
            <button className="bg-black text-white px-8 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
               {/* Google Play Icon */}
               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.37,13.07L17.86,11.66L15.39,14.13L16.76,15.5L20.37,13.41C20.72,13.21 20.72,12.79 20.37,12.59M14.54,11.14L6.05,2.66L16.81,8.88L14.54,11.14Z" /></svg>
               <div className="text-left">
                 <div className="text-xs">GET IT ON</div>
                 <div className="text-sm font-semibold leading-none">Google Play</div>
               </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] -z-10 rounded-full bg-gradient-to-b from-primary/5 via-secondary/20 to-transparent blur-3xl opacity-60 pointer-events-none"></div>
    </section>
  );
}
