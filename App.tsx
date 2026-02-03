import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import PaintProtectionFilm from './pages/PaintProtectionFilm';
import CeramicCoatings from './pages/CeramicCoatings';
import WindowTinting from './pages/WindowTinting';
import VehicleWraps from './pages/VehicleWraps';
import AutoDetailing from './pages/AutoDetailing';
import InteriorProtection from './pages/InteriorProtection';
import WheelCaliper from './pages/WheelCaliper';
import PaintCorrection from './pages/PaintCorrection';

const App: React.FC = () => {
  return (
        <Router>
          <ScrollToTop />
          <Breadcrumbs />
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/paint-protection-film" element={<PaintProtectionFilm />} />
            <Route path="/ceramic-coatings" element={<CeramicCoatings />} />
            <Route path="/window-tinting" element={<WindowTinting />} />
            <Route path="/vehicle-wraps" element={<VehicleWraps />} />
            <Route path="/auto-detailing" element={<AutoDetailing />} />
            <Route path="/interior-protection" element={<InteriorProtection />} />
            <Route path="/wheel-caliper" element={<WheelCaliper />} />
            <Route path="/paint-correction" element={<PaintCorrection />} />
          </Routes>
      </main>

      <Footer />
      
      {/* Elfsight All-in-One Chat | Generic (My Info) */}
      <div className="elfsight-app-068b41e7-7962-44bb-b44e-db85e45c6904" data-elfsight-app-lazy></div>
    </div>
    </Router>
  );
};

export default App;