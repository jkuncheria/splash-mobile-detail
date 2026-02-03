import React from 'react';
import { Heart, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHome: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/xpel_files/2020-Chevy-Corvette-C8-Full-Front-ULTIMATE-PLUS-PPF-4.jpg" 
                alt="Professional Auto Detailing and Paint Protection Services in Denver, Colorado" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#18AEE4' }}>ABOUT US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              We protect your vehicle with precision, quality, and care every time.
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We are Denver's trusted auto detailing and protection specialists. Our certified technicians deliver premium ceramic coatings, paint protection film, window tinting, and professional detailing services. We treat every vehicle like it's our own.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold mb-2" style={{ color: '#18AEE4' }}>What we do best</h3>
              <p className="text-gray-700 text-sm">
                From paint protection film and ceramic coatings to full vehicle wraps and professional detailing, we deliver showroom-quality results. Certified installers, premium products, and industry-leading warranties.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about"
                className="text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-center" style={{ backgroundColor: '#18AEE4' }}
              >
                Learn More About Us
              </Link>
              <Link 
                to="/contact"
                className="border-2 hover:text-white font-bold py-4 px-8 rounded-lg transition-all text-center" style={{ borderColor: '#18AEE4', color: '#18AEE4' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#18AEE4'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#18AEE4'; }}
              >
                Get Free Quote
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHome;

