import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowRight, Phone, Palette, RefreshCw, DollarSign, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const VehicleWraps: React.FC = () => {
  const benefits = [
    {
      icon: <Palette className="w-8 h-8 text-blue-900" />,
      title: 'Unlimited Colors',
      description: 'Choose from hundreds of colors and finishes including gloss, matte, satin, metallic, chrome, and color-shift options.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Paint Protection',
      description: 'Vinyl wrap acts as a protective layer, shielding your original paint from minor scratches and UV damage.'
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-blue-900" />,
      title: 'Reversible',
      description: 'Unlike paint, wraps can be removed to reveal your original finish, perfect for leased vehicles or resale.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-900" />,
      title: 'Cost Effective',
      description: 'Get a complete color change at a fraction of the cost of a quality paint job, with faster turnaround time.'
    }
  ];

  const services = [
    'Full vehicle color change wraps',
    'Partial wraps and accents',
    'Commercial fleet wraps',
    'Racing stripes and graphics',
    'Chrome delete packages',
    'Roof wrap and pillars',
    'Mirror and trim wraps',
    'Custom design and printing'
  ];

  const finishes = [
    {
      name: 'Gloss',
      description: 'Classic shine like factory paint',
      popular: ['Gloss Black', 'Gloss White', 'Gloss Red']
    },
    {
      name: 'Matte',
      description: 'Flat, non-reflective finish',
      popular: ['Matte Black', 'Matte Gray', 'Matte Blue']
    },
    {
      name: 'Satin',
      description: 'Between gloss and matte',
      popular: ['Satin Black', 'Satin White', 'Satin Bronze']
    },
    {
      name: 'Metallic',
      description: 'Sparkle and depth',
      popular: ['Metallic Blue', 'Metallic Green', 'Metallic Purple']
    }
  ];

  return (
    <>
      <SEO
        title="Vehicle Wraps Denver | Car Wraps | Color Change Wraps"
        description="Professional vehicle wraps in Denver. Full color change, partial wraps, commercial fleet wraps. Gloss, matte, satin finishes. 3M, Avery Dennison certified. Free quotes."
        keywords="vehicle wraps Denver, car wraps Denver, color change wrap, vinyl wrap, commercial fleet wraps, matte wrap, gloss wrap"
        canonical="https://example.com/vehicle-wraps"
      />
      <section className="py-24 bg-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">VEHICLE WRAPS</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Custom Vehicle Wraps | Transform Your Ride
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your vehicle with a stunning custom wrap. From full color changes to partial accents, our expert installers deliver flawless results using premium vinyl from top brands.
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
                  src="/xpel_files/2024-Ford-Raptor-R-Windshield-Protection-Film-4-png.jpg" 
                  alt="Vehicle Wrap Services in Denver" 
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose a Vehicle Wrap?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vehicle wraps offer flexibility, protection, and style that traditional paint simply can't match.
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
              Our Wrap Services
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

        {/* Finishes Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Finishes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from a wide variety of finishes to achieve your perfect look.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {finishes.map((finish, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{finish.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{finish.description}</p>
                <p className="text-blue-900 text-xs font-semibold mb-2">Popular colors:</p>
                <ul className="space-y-1">
                  {finish.popular.map((color, i) => (
                    <li key={i} className="text-gray-700 text-sm">• {color}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Wrap Process</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Professional installation ensures a seamless, long-lasting finish.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Design consultation and color selection</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Complete vehicle wash and decontamination</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Disassembly of necessary trim and badges</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Expert vinyl application with wrapped edges</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Reassembly and final quality inspection</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Premium Vinyl Brands</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We use only certified, high-quality vinyl for lasting results.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">3M 2080 Series</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Avery Dennison Supreme Wrapping Film</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">KPMF Premium Films</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Inozetek Super Gloss</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Manufacturer warranties included</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Vehicle?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. Let's create the custom look you've always wanted.
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

export default VehicleWraps;
