export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Download & Sign Up",
      description: "Download and install the app. Join anonymously or create an account. No complex onboarding."
    },
    {
      number: "02",
      title: "Pair Up",
      description: "One shares their 6-digit code. The other enters it. Boom, you're connected securely."
    },
    {
      number: "03",
      title: "Stay Synced",
      description: "Toggle your status. See theirs instantly. Set durations and get back to your life."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-0 overflow-hidden min-h-screen lg:snap-start flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Three steps to better sync with ZERO drama.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center relative group hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
