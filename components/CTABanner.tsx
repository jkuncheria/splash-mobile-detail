import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const CTABanner: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-16" style={{ backgroundColor: '#18AEE4' }}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-white/80 uppercase tracking-widest text-sm font-semibold mb-2">"Home of the Showroom Quality Detail"</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Make Your Car Look Brand New?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Whether you need a full detail, ceramic coating, or emergency cleanup, we're here to help. Contact us today for a free quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact"
            className="bg-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group" style={{ color: '#18AEE4' }}
          >
            Get Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a 
            href="tel:9706186183"
            className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 border-2 border-white/50"
          >
            <Phone className="w-5 h-5" />
            Call Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
