export default function Why() {
  return (
    <section id="why" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight max-w-3xl mx-auto">
            The Discovery: It’s Not a Lack of Love—<br className="hidden sm:block" />
            <span className="text-primary">It’s the "Initiation Tax"</span>
          </h2>
          
          <div className="space-y-12 text-lg sm:text-xl text-gray-600 leading-relaxed font-medium">
            <p className="max-w-3xl mx-auto">
              We’ve been told that the secret to a great relationship is "just talk about it." But in the real world, constant verbal initiation comes with a hidden cost we call the <span className="text-gray-900 font-semibold italic">Initiation Tax.</span>
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start text-left">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">The Burden of the "Ask"</h3>
                  <p className="text-base sm:text-lg">
                    When you have to ask for intimacy or a spontaneous gesture out loud, it loses its magic. One person becomes the "pursuer," and the other becomes the "gatekeeper."
                  </p>
                </div>
                
                <div className="bg-white/50 p-6 rounded-2xl shadow-sm ring-1 ring-black/5">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-base sm:text-lg"><span className="text-gray-900 font-semibold">The Pursuer</span> feels vulnerable and tired of "asking."</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-base sm:text-lg"><span className="text-gray-900 font-semibold">The Gatekeeper</span> feels guilty for not being "ready" at that exact moment.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50/80 p-6 sm:p-8 rounded-2xl border border-gray-100 flex gap-4 items-start shadow-sm">
                <span className="text-2xl mt-1 shrink-0">🔬</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">The Science of "Mismatched Readiness"</h3>
                  <p className="text-base sm:text-lg mb-6">
                    Research shows that most couples have high levels of mutual desire, but they suffer from <span className="text-primary font-bold">low temporal alignment.</span> You are both willing to give 100%, but your internal "clocks" are rarely striking the same hour.
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-auto leading-tight italic border-t border-gray-200 pt-4">
                    * Placeholder: Citation for research claim regarding temporal alignment and desire in long-term partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-gradient-to-br from-secondary/5 to-primary/10 rounded-full blur-3xl -z-10 opacity-60"></div>
    </section>
  );
}
