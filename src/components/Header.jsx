import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/images/logo.png" alt="Couplair Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900 tracking-tight">Couplair</span>
          </Link>
          <nav className="flex gap-6 items-center">
            <Link to="/privacy" className="hidden sm:block text-sm font-medium text-gray-500 hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="hidden sm:block text-sm font-medium text-gray-500 hover:text-primary transition-colors">Terms</Link>
            <a href="/#download" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
              Get the App
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
