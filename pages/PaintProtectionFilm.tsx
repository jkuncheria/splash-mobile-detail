import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, ArrowRight, Phone, Sparkles, Car, Zap } from 'lucide-react';
import SEO from '../components/SEO';

const PaintProtectionFilm: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Ultimate Protection',
      description: 'Self-healing film that protects against rock chips, scratches, bug splatter, and road debris while maintaining your paint\'s pristine condition.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Invisible Shield',
      description: 'Crystal-clear film that\'s virtually undetectable, preserving your vehicle\'s original appearance while adding a layer of protection.'
    },
    {
      icon: <Car className="w-8 h-8 text-blue-900" />,
      title: 'Preserve Resale Value',
      description: 'Keep your vehicle looking showroom-new and maintain its resale value by preventing paint damage before it happens.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-900" />,
      title: 'Long-Lasting',
      description: 'Premium PPF backed by manufacturer warranties up to 10 years, providing long-term peace of mind for your investment.'
    }
  ];

  const services = [
    'Full front end protection (hood, fenders, bumper)',
    'Full vehicle wrap coverage',
    'Partial hood and bumper packages',
    'Door edge and handle protection',
    'Rocker panel and side mirror coverage',
    'Headlight and taillight protection',
    'A-pillar and roof protection',
    'Custom coverage options'
  ];

  const packages = [
    {
      name: 'Partial Front',
      description: 'Essential protection for high-impact areas',
      includes: ['Partial hood (24")', 'Front bumper', 'Side mirrors']
    },
    {
      name: 'Full Front',
      description: 'Complete front-end coverage',
      includes: ['Full hood', 'Full fenders', 'Front bumper', 'Side mirrors', 'Headlights']
    },
    {
      name: 'Track Package',
      description: 'Extended coverage for enthusiasts',
      includes: ['Full front', 'Rocker panels', 'A-pillars', 'Door edges', 'Rear bumper']
    },
    {
      name: 'Full Vehicle',
      description: 'Ultimate protection coverage',
      includes: ['Complete vehicle coverage', 'All painted surfaces', 'Door jambs', 'Custom cuts']
    }
  ];

  return (
    <>
      <SEO
        title="Paint Protection Film Denver | PPF Installation | Clear Bra"
        description="Professional paint protection film (PPF) installation in Denver. XPEL, 3M, SunTek clear bra protection. Self-healing film, rock chip protection. Free quotes."
        keywords="paint protection film Denver, PPF Denver, clear bra Denver, XPEL Denver, 3M PPF, rock chip protection, paint protection"
        canonical="https://example.com/paint-protection-film"
      />
      <section className="py-24 bg-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">PAINT PROTECTION FILM</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Premium PPF Installation | Invisible Protection for Your Vehicle
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Protect your vehicle's paint from rock chips, scratches, and road debris with our premium paint protection film. Self-healing technology keeps your car looking flawless for years to come.
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
                  src="/xpel_files/2020-Chevy-Corvette-C8-Full-Front-ULTIMATE-PLUS-PPF-4.jpg" 
                  alt="Paint Protection Film Installation in Denver" 
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Paint Protection Film?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              PPF is the ultimate defense against everyday hazards that damage your vehicle's paint.
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

        {/* Coverage Options */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Coverage Options
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

        {/* Packages Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">PPF Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the level of protection that fits your needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-900 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Installation Process</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We follow a meticulous process to ensure flawless PPF installation every time.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Thorough vehicle inspection and wash</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Paint decontamination and clay bar treatment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Precision computer-cut film patterns</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Expert installation in controlled environment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Final inspection and quality check</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Premium Film Brands</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We only use top-tier PPF brands known for quality and durability.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">XPEL Ultimate Plus & Stealth</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">3M Pro Series & Scotchgard</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">SunTek Ultra & Reaction</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Self-healing technology on all films</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Up to 10-year manufacturer warranty</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Protect Your Investment?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. Let's keep your vehicle looking showroom-new with premium paint protection film.
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

export default PaintProtectionFilm;
