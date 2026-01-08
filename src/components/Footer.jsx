import { Link } from 'react-router-dom';
import AnchorLink from './AnchorLink';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/assets/images/logo.png" alt="Couplair Logo" className="h-6 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
              <span className="text-lg font-bold text-gray-700">Couplair</span>
            </Link>
            <p className="text-sm text-gray-500 mb-4 max-w-xs">
              The simplest way to share your availability with your partner. Connect. Sync. Enjoy.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-3">
              <li><AnchorLink to="/#features" className="text-sm text-gray-500 hover:text-primary">Features</AnchorLink></li>
              <li><AnchorLink to="/#how-it-works" className="text-sm text-gray-500 hover:text-primary">How it Works</AnchorLink></li>
              <li><AnchorLink to="/#download" className="text-sm text-gray-500 hover:text-primary">Download</AnchorLink></li>
            </ul>
          </div>
          <div>
             <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-500 hover:text-primary">About Us</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-500 hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-500 hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li><a href="mailto:support@soulmatelabs.com" className="text-sm text-gray-500 hover:text-primary">soulmatelabs@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">&copy; {currentYear} SoulMate Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
