export default function Features() {
  const features = [
    {
      title: "Real-Time Status",
      description: "One-tap updates to let your partner know you're focused or free. Green for available, Red for busy.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      ),
      color: "bg-status-available"
    },
    {
      title: "Smart Durations",
      description: "Set a status for a specific time like 'Unavailable for 2 hours'. It clears itself automatically when time is up.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      ),
      color: "bg-status-unavailable"
    },
    {
      title: "Private & Secure",
      description: "Connect using a unique 6-digit code. No social media integration required. Your data is encrypted.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
      ),
      color: "bg-primary"
    },
    {
      title: "Instant Notifications (Coming Soon)",
      description: "Get a gentle nudge when your partner becomes available, so you never miss a moment to connect.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
      ),
      color: "bg-secondary"
    }
  ];

  return (
    <section id="features" className="py-20 min-h-fill-available flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need, nothing you don't
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Focus on your relationship, not the app. We keep it simple.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative p-8 bg-gray-50 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg border border-gray-100">
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-xl shadow-lg ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-900 text-center mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
