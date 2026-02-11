import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, Shield, Sparkles, Sun, Palette, Car, Droplets, Circle, Eye } from 'lucide-react';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  const services = [
    {
      number: '01',
      title: 'Auto Detailing',
      description: 'Professional interior and exterior detailing that restores your vehicle to showroom condition.',
      features: [
        'Interior deep cleaning',
        'Exterior wash and polish',
        'Engine bay detailing'
      ],
      cta: 'Restore that new car feeling. Book now.',
      icon: <Car className="w-8 h-8 text-blue-900" />,
      link: '/auto-detailing'
    },
    {
      number: '02',
      title: 'Ceramic Coatings',
      description: 'Professional-grade nano-ceramic coating that provides long-lasting protection with incredible gloss and hydrophobic properties.',
      features: [
        'Multi-year durability',
        'Hydrophobic water beading',
        'UV and chemical resistance'
      ],
      cta: 'Achieve that showroom shine. Book now.',
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      link: '/ceramic-coatings'
    },
    {
      number: '03',
      title: 'Headlight Restoration',
      description: 'Professional headlight restoration to remove yellowing, fog, and oxidation. Improve visibility and appearance.',
      features: [
        'Remove yellowing and haze',
        'UV-resistant sealant',
        'Improved night visibility'
      ],
      cta: 'See clearly again. Book now.',
      icon: <Eye className="w-8 h-8 text-blue-900" />,
      link: '/headlight-restoration'
    },
    {
      number: '04',
      title: 'Gasoline Spill Cleanup',
      description: 'Professional gasoline spill cleanup that safely removes fuel residue and eliminates dangerous odors.',
      features: [
        'Complete odor elimination',
        'Safe residue removal',
        'Interior restoration'
      ],
      cta: 'Get your car fresh again. Book now.',
      icon: <Droplets className="w-8 h-8 text-blue-900" />,
      link: '/gasoline-spills'
    },
    {
      number: '05',
      title: 'Vomit Removal',
      description: 'Complete cleanup, sanitization, and deodorization after accidents. We eliminate the mess and the smell.',
      features: [
        'Deep sanitization',
        'Odor elimination',
        'Stain removal'
      ],
      cta: 'Accidents happen. We fix them.',
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      link: '/vomit-removal'
    },
    {
      number: '06',
      title: 'Sale Prep',
      description: 'Get top dollar for your vehicle with professional sale prep detailing. Clean cars sell faster and for more.',
      features: [
        'Complete detail package',
        'Maximize sale price',
        'Quick turnaround'
      ],
      cta: 'Sell for more. Book now.',
      icon: <Circle className="w-8 h-8 text-blue-900" />,
      link: '/sale-prep'
    },
    {
      number: '07',
      title: 'Pet Cleanup',
      description: 'Remove stubborn pet hair, eliminate odors, and treat stains. We love pets but not the mess they leave.',
      features: [
        'Pet hair removal',
        'Odor elimination',
        'Stain treatment'
      ],
      cta: 'Love your pets, not the mess.',
      icon: <Eye className="w-8 h-8 text-blue-900" />,
      link: '/pet-cleanup'
    }
  ];

  const mainServices = [
    {
      title: 'Full Detail & Ceramic Coating Package',
      description: 'The ultimate care package for your vehicle. Combine professional detailing with ceramic coating for maximum protection.',
      subDescription: 'Deep cleaning restores your vehicle while ceramic coating adds long-lasting gloss and protection.',
      features: [
        'Complete interior & exterior detail',
        'Full vehicle ceramic coating',
        'Multi-year protection'
      ],
      cta: 'Get a quote',
      link: '/ceramic-coatings'
    },
    {
      title: 'Interior Restoration Package',
      description: 'Complete interior transformation with deep cleaning and ceramic protection.',
      subDescription: 'Restore and protect your interior surfaces for years of easy maintenance.',
      features: [
        'Deep interior cleaning',
        'Leather and fabric protection',
        'Dashboard and trim coating'
      ],
      cta: 'Restore your interior',
      link: '/interior-protection'
    }
  ];

  return (
    <>
      <SEO
        title="Auto Detailing & Protection Services Denver Metro | Ceramic Coating, Detailing"
        description="Complete auto detailing and protection services in Denver Metro. Ceramic coatings, interior detailing, headlight restoration, paint correction. Free quotes."
        keywords="auto detailing Denver, ceramic coating Denver, headlight restoration Denver, paint correction Denver, interior detailing Parker CO"
        canonical="https://example.com/services"
      />
      <section className="py-24 bg-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">OUR SERVICES</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
            Auto Detailing & Protection Services
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From ceramic coatings and professional detailing to headlight restoration and paint correction, we deliver showroom-quality results. Premium products and exceptional service.
          </p>
        </div>

        {/* Numbered Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 md:p-10 hover:bg-blue-50 transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-blue-900 text-white text-2xl font-black w-16 h-16 rounded-xl flex items-center justify-center">
                    {service.number}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-900 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-blue-900 font-semibold text-sm mb-4">
                    {service.cta}
                  </p>
                  <Link 
                    to={service.link || '/contact'}
                    className="inline-flex items-center gap-2 text-blue-900 font-bold hover:text-blue-700 transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Service Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {mainServices.map((service, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-10 text-white"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h3>
              <p className="text-lg text-blue-100 mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="text-base text-blue-200 mb-6 leading-relaxed">
                {service.subDescription}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to={service.link}
                className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg group"
              >
                {service.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Protect Your Vehicle?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. Let's discuss your vehicle protection needs and find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:6025542113" 
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
            >
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

export default Services;

