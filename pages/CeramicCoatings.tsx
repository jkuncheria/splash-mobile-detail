import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, ArrowRight, Phone, Sparkles, Droplets, Sun } from 'lucide-react';
import SEO from '../components/SEO';
import RelatedServices from '../components/RelatedServices';

const CeramicCoatings: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Superior Protection',
      description: 'Nano-ceramic technology creates a permanent bond with your paint, providing unmatched protection against environmental contaminants.'
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-900" />,
      title: 'Hydrophobic Properties',
      description: 'Water beads and rolls off effortlessly, taking dirt and grime with it. Makes washing your car faster and easier.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Incredible Gloss',
      description: 'Achieve a deep, mirror-like shine that enhances your paint\'s color and clarity beyond what wax can offer.'
    },
    {
      icon: <Sun className="w-8 h-8 text-blue-900" />,
      title: 'UV Protection',
      description: 'Shields your paint from harmful UV rays that cause fading and oxidation, keeping your color vibrant for years.'
    }
  ];

  const services = [
    'Full exterior ceramic coating',
    'Paint correction before coating',
    'Wheel and caliper coating',
    'Glass coating for windshield',
    'Plastic and trim restoration',
    'Leather and interior coating',
    'Annual maintenance packages',
    'Multi-year coating options'
  ];

  const packages = [
    {
      name: '1-Year Coating',
      description: 'Entry-level protection',
      includes: ['Single layer coating', 'Paint decontamination', '1-year durability', 'Hydrophobic finish']
    },
    {
      name: '3-Year Coating',
      description: 'Enhanced protection',
      includes: ['Two layer coating', 'Light paint correction', '3-year durability', 'Enhanced gloss']
    },
    {
      name: '5-Year Coating',
      description: 'Premium protection',
      includes: ['Multi-layer coating', 'Full paint correction', '5-year durability', 'Wheel coating included']
    },
    {
      name: '7+ Year Coating',
      description: 'Ultimate protection',
      includes: ['Professional-grade coating', 'Complete paint correction', '7+ year durability', 'Full vehicle coverage']
    }
  ];

  return (
    <>
      <SEO
        title="Ceramic Coating Parker CO | Professional Auto Ceramic Coating Colorado"
        description="Professional ceramic coating services serving Denver to Castle Rock and Golden to Bennett. Long-lasting paint protection with incredible gloss. We service Denver, Arapahoe, Jefferson, Douglas, and Elbert Counties."
        keywords="ceramic coating Parker CO, auto ceramic coating Castle Rock, paint protection coating Colorado, nano ceramic coating, Arapahoe County ceramic coating, Douglas County car coating"
        canonical="https://splashmobiledetail.com/ceramic-coatings"
        serviceSchema={{
          name: "Ceramic Coating",
          description: "Professional ceramic coating services providing long-lasting paint protection with incredible gloss and hydrophobic properties.",
          url: "https://splashmobiledetail.com/ceramic-coatings",
          image: "https://splashmobiledetail.com/services/ceramic-coating.jpg"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://splashmobiledetail.com/" },
          { name: "Services", url: "https://splashmobiledetail.com/services" },
          { name: "Ceramic Coating", url: "https://splashmobiledetail.com/ceramic-coatings" }
        ]}
      />
      <section className="py-24 bg-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#18AEE4' }}>CERAMIC COATING AND WAXING</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Professional Ceramic Coating | Ultimate Shine & Protection
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Protect your vehicle's paint with a ceramic coating that adds a durable layer of protection against tree sap, UV rays, and swirl marks. This service enhances your car's resale value and gives it a brilliant shine that lasts. Whether you're maintaining your car or preparing to sell it, we offer mobile car convenience and professional results.
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
                  src="/services/ceramic-coating.jpg" 
                  alt="Ceramic Coating Application in Denver" 
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Ceramic Coating?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ceramic coating offers superior protection and aesthetics compared to traditional wax or sealants.
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
              Our Ceramic Coating Services
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coating Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the protection level that matches your needs and budget.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Coating Process</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Proper preparation is key to a long-lasting ceramic coating application.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Complete vehicle wash and decontamination</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Clay bar treatment to remove embedded contaminants</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Paint correction to remove swirls and scratches</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Panel wipe and surface preparation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Ceramic coating application and curing</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Premium Coating Brands</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We use only certified professional-grade ceramic coatings.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Ceramic Pro 9H & Sport</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Gtechniq Crystal Serum Ultra</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">IGL Coatings Kenzo</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Gyeon Quartz MOHS+</span>
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
            Ready for That Showroom Shine?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. Experience the ultimate in paint protection and gloss with professional ceramic coating.
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

        <RelatedServices currentService="Ceramic Coating" />

        </div>
      </section>
    </>
  );
};

export default CeramicCoatings;
