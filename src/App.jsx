import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SEOServices from './pages/SEOServices';
import AdsServices from './pages/AdsServices';
import WebDevelopment from './pages/WebDevelopment';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* GLOBAL ANIMATED BACKGROUND */}
      <div className="animated-grid-bg" />

      <div className="flex flex-col min-h-screen relative z-10 text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seo" element={<SEOServices />} />
            <Route path="/ads" element={<AdsServices />} />
            <Route path="/development" element={<WebDevelopment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
