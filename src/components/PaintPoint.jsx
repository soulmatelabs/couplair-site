import AnchorLink from './AnchorLink';

export default function PainPoint() {
  return (
    <section id="pain-point" className="py-20 lg:py-0 relative overflow-hidden min-h-screen lg:snap-start flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Living together but <br className="hidden sm:block" />
            <span className="text-primary">not feeling together?</span>
          </h2>
          
          <div className="space-y-6 text-lg sm:text-xl text-gray-600 leading-relaxed font-medium mb-10">
            <p>
              It starts small. You want to be close, but they’re exhausted. They plan a romantic gesture, but you’re stuck in "work mode."
            </p>
            
            <div className="py-4">
              <p className="text-gray-900 font-semibold">
                This is relationship desynchronization.
              </p>
              <p>
                When one partner initiates and the other isn't ready, it creates a "Rejection Loop"—a cycle of hesitation, bruised egos, and eventually, a lack of trying altogether.
              </p>
            </div>

            <p>
              We believe the problem isn't a lack of love or desire; <span className="text-primary font-bold">it's a timing gap.</span> You both want the same things—you just rarely want them at the exact same second.
            </p>
          </div>

          <AnchorLink 
            to="/#what-we-do"
            className="bg-gray-900 text-white px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base font-bold group"
          >
            Know how our app solves this
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </AnchorLink>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-gradient-to-tr from-primary/5 to-secondary/10 rounded-full blur-3xl -z-10 opacity-60"></div>
    </section>
  );
}