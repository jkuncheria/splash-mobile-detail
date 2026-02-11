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
import CeramicCoatings from './pages/CeramicCoatings';
import AutoDetailing from './pages/AutoDetailing';
import HeadlightRestoration from './pages/HeadlightRestoration';
import GasolineSpills from './pages/GasolineSpills';
import VomitRemoval from './pages/VomitRemoval';
import SalePrep from './pages/SalePrep';
import PetCleanup from './pages/PetCleanup';

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
            <Route path="/ceramic-coatings" element={<CeramicCoatings />} />
            <Route path="/auto-detailing" element={<AutoDetailing />} />
            <Route path="/headlight-restoration" element={<HeadlightRestoration />} />
            <Route path="/gasoline-spills" element={<GasolineSpills />} />
            <Route path="/vomit-removal" element={<VomitRemoval />} />
            <Route path="/sale-prep" element={<SalePrep />} />
            <Route path="/pet-cleanup" element={<PetCleanup />} />
          </Routes>
      </main>

      <Footer />
    </div>
    </Router>
  );
};

export default App;