import { Link } from 'react-router-dom';
import AnchorLink from './AnchorLink';

export default function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Pill */}
          <div className="bg-white/70 backdrop-blur-xl shadow-lg rounded-full px-4 py-2 pointer-events-auto ring-1 ring-white/50">
            <Link to="/" className="flex items-center gap-2">
              <img src="/assets/images/logo.png" alt="Couplair Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-gray-900 tracking-tight">Couplair</span>
            </Link>
          </div>

          {/* Nav Pill */}
          <nav className="bg-white/70 backdrop-blur-xl shadow-lg rounded-full px-2 py-2 sm:px-6 pointer-events-auto flex gap-6 items-center ring-1 ring-white/50">
            <Link to="/about" className="hidden sm:block text-sm font-medium text-gray-500 hover:text-primary transition-colors">About</Link>
            <Link to="/privacy" className="hidden sm:block text-sm font-medium text-gray-500 hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="hidden sm:block text-sm font-medium text-gray-500 hover:text-primary transition-colors">Terms</Link>
            <AnchorLink to="/#download" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
              Get the App
            </AnchorLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
