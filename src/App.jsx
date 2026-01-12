import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Header from './components/Header';
import Footer from './components/Footer';
import FeedbackButton from './components/FeedbackButton';

// ScrollToTop component to ensure page starts at top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary/10 via-secondary/20 to-primary/30">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <FeedbackButton />
      </div>
    </Router>
  );
}

export default App;
