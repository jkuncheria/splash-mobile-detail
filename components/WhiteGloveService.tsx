import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ArrowRight, Phone, CheckCircle } from 'lucide-react';

const WhiteGloveService: React.FC = () => {
  return (
    <section className="py-20 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div>
            <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#18AEE4' }}>"Home of the Showroom Quality Detail"</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              Get All The Benefits Of Denver Mobile Auto Detailing
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our Splash van was normally used for going to people's houses and working on jobs. Today the Splash van's primary use is doing something we call white-glove pickup and deliveries.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold mb-3 text-lg" style={{ color: '#18AEE4' }}>What Are White-Glove Delivery Services?</h3>
              <p className="text-gray-700 mb-4">
                After booking your vehicle with Splash, one of the team will drive to your place of work or your home. Then we leave our van behind, bring your vehicle to the shop, detail it, and return it.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#18AEE4' }} />
                  <span className="text-gray-700">We pick up from your home or office</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#18AEE4' }} />
                  <span className="text-gray-700">Detail at our professional shop</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#18AEE4' }} />
                  <span className="text-gray-700">Return your vehicle looking brand new</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:9706186183"
                className="text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-center flex items-center justify-center gap-2" style={{ backgroundColor: '#18AEE4' }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link 
                to="/contact"
                className="border-2 hover:text-white font-bold py-4 px-8 rounded-lg transition-all text-center flex items-center justify-center gap-2" style={{ borderColor: '#18AEE4', color: '#18AEE4' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#18AEE4'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#18AEE4'; }}
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/showroom1.png" 
              alt="White-Glove Mobile Auto Detailing Service in Denver Metro" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhiteGloveService;
