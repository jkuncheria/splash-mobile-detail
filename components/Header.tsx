import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const refs = Object.values(dropdownRefs.current) as (HTMLDivElement | null)[];
      const clickedOutside = refs.every(
        (ref: HTMLDivElement | null) => {
          if (!ref) return true;
          return !ref.contains(event.target as Node);
        }
      );
      if (clickedOutside) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openDropdown]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="w-full flex flex-col font-sans z-50 relative">
      {/* Top Bar */}
      <div className="bg-gray-100 text-xs py-2 px-4 flex justify-center items-center border-b border-gray-200">
        <div className="text-center font-semibold" style={{ color: '#18AEE4' }}>
          <span className="mr-2">50% Off a Clay Treatment with Purchase of a Full Detail!</span>
          <Link to="/contact" onClick={scrollToTop} className="underline hover:text-blue-700">Get Quote</Link>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="bg-white py-3 px-4 md:px-8 lg:px-16 shadow-sm">
        <div className="flex items-center justify-between md:grid md:grid-cols-3 md:items-center">
          
          {/* Mobile Contact Buttons (Left side on mobile) */}
          <div className="flex items-center gap-2 md:hidden">
            <Link 
              to="/contact"
              onClick={scrollToTop}
              className="p-2 border-2 rounded-lg" style={{ borderColor: '#18AEE4', color: '#18AEE4' }}
            >
              <Mail className="w-5 h-5" />
            </Link>
            <a 
              href="tel:9706186183"
              className="p-2 text-white rounded-lg" style={{ backgroundColor: '#18AEE4' }}
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Logo - Centered */}
          <div className="flex-1 flex justify-center md:col-start-2 md:col-end-3 md:flex md:justify-center">
            <Link to="/" onClick={scrollToTop} className="flex items-center justify-center group">
              <img 
                src="/splashlogo.png" 
                alt="Splash Mobile Detail - Ceramic Coatings, PPF, Window Tint" 
                className="h-14 md:h-24 lg:h-28 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle (Right side on mobile) */}
          <div className="md:hidden">
            <button 
              className="p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Call & Contact Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3 md:col-start-3 md:col-end-4 md:justify-end">
            <Link 
              to="/contact"
              onClick={scrollToTop}
              className="flex items-center border-2 hover:text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all" style={{ borderColor: '#18AEE4', color: '#18AEE4' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#18AEE4'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#18AEE4'; }}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Link>
            <a 
              href="tel:9706186183"
              className="flex items-center text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md" style={{ backgroundColor: '#18AEE4' }}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </a>
          </div>

          {/* Search & Store Locator (Desktop) - COMMENTED OUT */}
          {/* <div className="hidden md:flex flex-1 max-w-2xl mx-8 items-center space-x-4">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Search for floors, inspiration, and more..." 
                className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
            </div>
            <button className="flex items-center text-blue-900 font-semibold text-sm whitespace-nowrap hover:underline">
              <MapPin className="w-4 h-4 mr-1" />
              Find a Store
            </button>
          </div> */}

        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`text-white ${isMenuOpen ? 'block' : 'hidden'} md:block`} style={{ backgroundColor: '#18AEE4' }}>
        <div className="container mx-auto px-4 md:px-16">
          <ul className="flex flex-col md:flex-row md:justify-center md:space-x-8 lg:space-x-12 text-sm font-extrabold py-4 md:py-0">
            {NAV_ITEMS.map((item) => (
              <li 
                key={item.label} 
                className="border-b md:border-none last:border-none relative" style={{ borderColor: '#0d9fd5' }}
              >
                {item.subItems && item.subItems.length > 0 ? (
                  // Dropdown menu
                  <div 
                    className="relative"
                    ref={(el) => {
                      if (el) {
                        dropdownRefs.current[item.label] = el;
                      }
                    }}
                  >
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="w-full md:w-auto flex items-center justify-between py-3 md:py-4 hover:text-yellow-400 transition-colors"
                    >
                      <span>{item.label.toUpperCase()}</span>
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.label && (
                      <ul className="md:absolute md:top-full md:left-0 md:mt-0 md:shadow-lg md:min-w-[200px] md:rounded-b-lg overflow-hidden" style={{ backgroundColor: '#0d9fd5' }}>
                        {item.subItems.map((subItem) => (
                          <li key={subItem.label} className="border-b last:border-none" style={{ borderColor: '#0a8fc2' }}>
                            <Link
                              to={subItem.href}
                              className="block py-3 px-4 md:px-6 hover:text-yellow-400 transition-colors" style={{ backgroundColor: 'transparent' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0a8fc2'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setOpenDropdown(null);
                                scrollToTop();
                              }}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : item.href.startsWith('#') ? (
                  <a 
                    href={item.href} 
                    className="block py-3 md:py-4 hover:text-yellow-400 transition-colors"
                  >
                    {item.label.toUpperCase()}
                  </a>
                ) : item.href.startsWith('http://') || item.href.startsWith('https://') ? (
                  <a 
                    href={item.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 md:py-4 hover:text-yellow-400 transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label.toUpperCase()}
                  </a>
                ) : (
                  <Link 
                    to={item.href} 
                    className="block py-3 md:py-4 hover:text-yellow-400 transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                  >
                    {item.label.toUpperCase()}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;