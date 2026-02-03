import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, ArrowRight, Phone, Sun, Thermometer, Eye, Lock } from 'lucide-react';
import SEO from '../components/SEO';

const WindowTinting: React.FC = () => {
  const benefits = [
    {
      icon: <Sun className="w-8 h-8 text-blue-900" />,
      title: 'UV Protection',
      description: 'Block up to 99% of harmful UV rays that cause skin damage and fade your interior materials.'
    },
    {
      icon: <Thermometer className="w-8 h-8 text-blue-900" />,
      title: 'Heat Rejection',
      description: 'Keep your vehicle cooler in the Arizona sun with advanced heat-rejecting film technology.'
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-900" />,
      title: 'Glare Reduction',
      description: 'Reduce eye strain and improve visibility by cutting down harsh glare from the sun and headlights.'
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-900" />,
      title: 'Privacy & Security',
      description: 'Enhance privacy and protect valuables from prying eyes while adding a sleek, custom look.'
    }
  ];

  const services = [
    'Automotive window tinting',
    'Ceramic window film',
    'Carbon window film',
    'Dyed window film',
    'Windshield tint strips',
    'Full windshield ceramic film',
    'Sunroof tinting',
    'Commercial vehicle tinting'
  ];

  const tintLevels = [
    {
      name: '70% VLT',
      description: 'Nearly clear, maximum heat rejection',
      best: 'Windshields, those wanting minimal tint look'
    },
    {
      name: '50% VLT',
      description: 'Light tint with good heat rejection',
      best: 'Front windows where legal'
    },
    {
      name: '35% VLT',
      description: 'Medium tint, popular choice',
      best: 'All-around balanced look and performance'
    },
    {
      name: '20% VLT',
      description: 'Dark tint for privacy',
      best: 'Rear windows and back windshield'
    },
    {
      name: '5% VLT',
      description: 'Limo tint, maximum privacy',
      best: 'Rear windows only (check local laws)'
    }
  ];

  return (
    <>
      <SEO
        title="Window Tinting Denver | Auto Tint | Ceramic Window Film"
        description="Professional window tinting in Denver. Ceramic, carbon, and dyed films. Heat rejection, UV protection, glare reduction. Legal tint levels. Free quotes."
        keywords="window tinting Denver, auto tint Denver, ceramic window tint, car window tinting, heat rejection film, UV protection tint"
        canonical="https://example.com/window-tinting"
      />
      <section className="py-24 bg-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">WINDOW TINTING</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Professional Window Tinting | Beat the Arizona Heat
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stay cool and protected with our premium window tinting services. Our ceramic and carbon films provide superior heat rejection, UV protection, and a sleek appearance that lasts for years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:9706186183" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl shadow-2xl">
                <img 
                  src="/xpel_files/2023-Tesla-Model-Y-Grey-Black-HTX-XRP-WC-17-png.jpg" 
                  alt="Window Tinting Services in Denver" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Tint Your Windows?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Window tinting is essential in Arizona's extreme heat, providing comfort, protection, and style.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-blue-50 transition-colors duration-300 border border-gray-100"
              >
                <div className="bg-white p-4 rounded-full inline-flex mb-6 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services List */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Our Tinting Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tint Levels Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tint Darkness Levels</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the right tint level for your needs. VLT (Visible Light Transmission) indicates how much light passes through.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tintLevels.map((level, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                <div 
                  className="w-full h-16 rounded-lg mb-4"
                  style={{ 
                    backgroundColor: `rgba(0,0,0,${1 - parseInt(level.name) / 100})` 
                  }}
                ></div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">{level.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{level.description}</p>
                <p className="text-blue-900 text-xs font-semibold">Best for: {level.best}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Installation Process</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Professional installation ensures bubble-free, long-lasting results.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Thorough window cleaning and preparation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Precision computer-cut film patterns</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Expert application with no bubbles or creases</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Edge-to-edge coverage for clean look</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Final inspection and care instructions</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Premium Film Brands</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We use top-quality films that won't purple, bubble, or peel.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">XPEL PRIME XR & XR Plus</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">3M Ceramic IR Series</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">LLumar CTX & IRX Ceramic</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">SunTek CXP & CIR Carbon/Ceramic</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Lifetime warranty on all films</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Beat the Heat?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. Stay cool and protected with professional window tinting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:9706186183" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>

        </div>
      </section>
    </>
  );
};

export default WindowTinting;
