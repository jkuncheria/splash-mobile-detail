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
                src="/showroom2.png" 
                alt="Professional Auto Detailing - Serving Denver, Arapahoe, Jefferson, Douglas, and Elbert Counties" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#18AEE4' }}>CREATING SHOWROOM QUALITY DETAILS FOR MORE THAN 5 YEARS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              You Deserve A Car That Looks As Great As The Day You Bought It
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Your car doesn't have to be old to feel old. Just like you, your vehicle deserves the best. That's why we offer white-glove mobile detailing services from Denver to Castle Rock and Golden to Bennett. So you can look and feel your best every time you buckle up.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold mb-2" style={{ color: '#18AEE4' }}>Taking Care Of Your Vehicle Has Never Been Easier</h3>
              <p className="text-gray-700 text-sm">
                Splash Mobile Detail offers a variety of detailing services to keep your car, truck, SUV, boat, or trailer looking like you just bought it. We service Denver, Arapahoe, Jefferson, Douglas, and Elbert Counties.
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

