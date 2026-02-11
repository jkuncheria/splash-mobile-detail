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
              <p className="mt-2">18233 Lincoln Meadows Pkwy<br />Unit 108, Parker, CO 80134</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100039871526095" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#18AEE4] transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="https://www.yelp.com/biz/splash-mobile-detail-parker-2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A22.8 22.8 0 0 0 368.1 369l-105.42-26.31c-20.61-5.1-38.21 20.2-25.44 37.96zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.77 22.77 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a22.82 22.82 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z"/>
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
                <Link to="/auto-detailing" onClick={scrollToTop} className="hover:text-[#18AEE4]">
                  Auto Detailing
                </Link>
              </li>
              <li>
                <Link to="/ceramic-coatings" onClick={scrollToTop} className="hover:text-[#18AEE4]">
                  Ceramic Coatings
                </Link>
              </li>
              <li>
                <Link to="/headlight-restoration" onClick={scrollToTop} className="hover:text-[#18AEE4]">
                  Headlight Restoration
                </Link>
              </li>
              <li>
                <Link to="/gasoline-spills" onClick={scrollToTop} className="hover:text-[#18AEE4]">
                  Gasoline Spill Cleanup
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