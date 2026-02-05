import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SEOServices from './pages/SEOServices';
import AdsServices from './pages/AdsServices';
import WebDevelopment from './pages/WebDevelopment';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seo" element={<SEOServices />} />
          <Route path="/ads" element={<AdsServices />} />
          <Route path="/development" element={<WebDevelopment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
