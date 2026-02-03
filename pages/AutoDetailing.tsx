import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowRight, Phone, Sparkles, Car, Droplets, Wind } from 'lucide-react';
import SEO from '../components/SEO';

const AutoDetailing: React.FC = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Showroom Finish',
      description: 'Restore your vehicle to like-new condition with our meticulous attention to every detail inside and out.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Paint Protection',
      description: 'Our detailing process includes paint decontamination and protection to keep your finish looking fresh.'
    },
    {
      icon: <Wind className="w-8 h-8 text-blue-900" />,
      title: 'Fresh Interior',
      description: 'Deep cleaning, sanitization, and conditioning of all interior surfaces for a healthy, fresh cabin.'
    },
    {
      icon: <Car className="w-8 h-8 text-blue-900" />,
      title: 'Preserve Value',
      description: 'Regular professional detailing maintains your vehicle\'s appearance and protects its resale value.'
    }
  ];

  const exteriorServices = [
    'Hand wash and dry',
    'Clay bar decontamination',
    'Paint polish and wax',
    'Wheel and tire cleaning',
    'Tire dressing application',
    'Glass cleaning and treatment',
    'Trim restoration',
    'Engine bay cleaning'
  ];

  const interiorServices = [
    'Vacuum all surfaces',
    'Steam cleaning',
    'Leather cleaning and conditioning',
    'Fabric shampooing',
    'Dashboard and console detailing',
    'Door panel cleaning',
    'Headliner cleaning',
    'Odor elimination'
  ];

  const packages = [
    {
      name: 'Express Detail',
      description: 'Quick refresh for busy schedules',
      time: '1-2 hours',
      includes: ['Exterior hand wash', 'Interior vacuum', 'Window cleaning', 'Tire dressing']
    },
    {
      name: 'Full Detail',
      description: 'Complete interior and exterior',
      time: '3-4 hours',
      includes: ['Hand wash & clay bar', 'Interior deep clean', 'Leather conditioning', 'Paint sealant']
    },
    {
      name: 'Premium Detail',
      description: 'The ultimate treatment',
      time: '5-6 hours',
      includes: ['Everything in Full', 'Paint correction', 'Engine bay detail', 'Ceramic spray coating']
    },
    {
      name: 'Maintenance Detail',
      description: 'Keep your coating looking fresh',
      time: '2-3 hours',
      includes: ['Coating-safe wash', 'Decontamination', 'Coating boost', 'Interior refresh']
    }
  ];

  return (
    <>
      <SEO
        title="Auto Detailing Denver | Professional Car Detailing Services"
        description="Professional auto detailing in Denver. Interior and exterior detailing, paint correction, ceramic coating prep. Mobile detailing available. Free quotes."
        keywords="auto detailing Denver, car detailing Denver, interior detailing, exterior detailing, paint correction, mobile detailing"
        canonical="https://example.com/auto-detailing"
      />
      <section className="py-24 bg-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">AUTO DETAILING</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Professional Auto Detailing | Restore Your Vehicle's Beauty
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the difference professional detailing makes. Our expert technicians use premium products and proven techniques to restore your vehicle to showroom condition, inside and out.
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
                  src="/xpel_files/Dry-Apply-Installation-Photography.jpg" 
                  alt="Professional Auto Detailing in Denver" 
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Professional Detailing?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional detailing goes far beyond a regular car wash, providing thorough care that protects your investment.
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

        {/* Services Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Exterior Detailing</h3>
            <div className="space-y-4">
              {exteriorServices.map((service, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{service}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Interior Detailing</h3>
            <div className="space-y-4">
              {interiorServices.map((service, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packages Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Detailing Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your needs and schedule.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{pkg.description}</p>
                <p className="text-blue-900 text-sm font-semibold mb-4">Time: {pkg.time}</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Detailing Process</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We follow a systematic approach to ensure consistent, exceptional results.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Initial inspection and consultation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Pre-wash and wheel cleaning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Safe hand wash with pH-neutral soap</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Decontamination and clay bar treatment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Polish, protect, and final inspection</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Premium Products We Use</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We only use professional-grade products that are safe and effective.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Gtechniq detailing products</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Koch Chemie professional line</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Gyeon Quartz products</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Rupes polishing systems</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Coating-safe maintenance products</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready for a Fresh, Clean Vehicle?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. Experience the difference professional detailing makes.
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

export default AutoDetailing;
