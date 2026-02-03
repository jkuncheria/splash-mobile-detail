import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 pt-16 pb-8 px-4 md:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <Link to="/" onClick={scrollToTop} className="inline-block mb-4 group">
              <img 
                src="/splashlogo.png" 
                alt="Splash Mobile Detail" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Professional Mobile Detailing<br />
              & Protection Services
            </p>
            <div className="text-sm text-gray-600 mb-4 space-y-1">
              <p><a href="tel:9706186183" className="hover:text-[#18AEE4]">(970) 618-6183</a></p>
              <p><a href="mailto:eugene@splashmobiledetail.com" className="hover:text-[#18AEE4]">eugene@splashmobiledetail.com</a></p>
              <p className="mt-2 font-semibold text-gray-700">Denver, CO</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100039871526095" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#18AEE4] transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="https://www.yelp.com/biz/splash-mobile-detail-parker-2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.686 1.459zm-5.025 3.152l4.942 1.606a1.072 1.072 0 0 1 .636 1.48 9.316 9.316 0 0 1-2.47 3.169 1.073 1.073 0 0 1-1.592-.26l-2.76-4.409c-.55-.88.18-1.94 1.244-1.586zM8.93 8.7l3.246 3.87c.583.695-.07 1.74-.96 1.538l-5.14-1.166a1.072 1.072 0 0 1-.787-1.373 9.2 9.2 0 0 1 1.97-3.39A1.073 1.073 0 0 1 8.93 8.7zm.676 7.164l5.063 1.348c.894.238 1.04 1.455.215 1.808l-4.57 1.96a1.072 1.072 0 0 1-1.378-.612 9.305 9.305 0 0 1-.6-3.906 1.073 1.073 0 0 1 1.27-1.098zm1.753-11.847l.79 5.18c.135.888-.9 1.462-1.53.848L6.91 6.38a1.072 1.072 0 0 1 .012-1.596A9.2 9.2 0 0 1 10.2 2.64a1.073 1.073 0 0 1 1.16 1.377z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/services" onClick={scrollToTop} className="hover:text-[#18AEE4] font-semibold">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/paint-protection-film" onClick={scrollToTop} className="hover:text-[#18AEE4]">
                  Paint Protection Film
                </Link>
              </li>
              <li>
                <Link to="/ceramic-coatings" onClick={scrollToTop} className="hover:text-[#18AEE4]">
                  Ceramic Coatings
                </Link>
              </li>
              <li>
                <Link to="/window-tinting" onClick={scrollToTop} className="hover:text-[#18AEE4]">
                  Window Tinting
                </Link>
              </li>
              <li>
                <Link to="/vehicle-wraps" onClick={scrollToTop} className="hover:text-[#18AEE4]">
                  Vehicle Wraps
                </Link>
              </li>
              <li>
                <Link to="/auto-detailing" onClick={scrollToTop} className="hover:text-[#18AEE4]">
                  Auto Detailing
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/gallery" onClick={scrollToTop} className="hover:text-[#18AEE4]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-[#18AEE4]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTop} className="hover:text-[#18AEE4]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-[#18AEE4]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

           {/* Hours */}
           <div>
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Hours</h4>
            <div className="text-sm text-gray-600 space-y-2">
              <p className="font-semibold text-gray-900">Available</p>
              <p>Monday - Sunday</p>
              <div className="pt-2 space-y-1">
                <p>By Appointment</p>
                <p className="text-xs text-gray-500 mt-2">We work around your schedule. Call for availability.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <p>&copy; 2026 Splash Mobile Detail. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-4 mt-4 text-center">
          <p className="text-xs text-gray-500">
            Built by{' '}
            <a 
              href="https://renolens.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline font-medium" style={{ color: '#18AEE4' }}
            >
              RenoLens
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;