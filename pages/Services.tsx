import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, Shield, Sparkles, Sun, Palette, Car, Droplets, Circle, Eye } from 'lucide-react';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  const services = [
    {
      number: '01',
      title: 'Paint Protection Film',
      description: 'Self-healing clear film that protects your paint from rock chips, scratches, and road debris. Virtually invisible protection.',
      features: [
        'Full front or full vehicle coverage',
        'Self-healing technology',
        'Up to 10-year warranty'
      ],
      cta: 'Protect your investment. Get a free quote.',
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      link: '/paint-protection-film'
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
      title: 'Window Tinting',
      description: 'Premium ceramic and carbon window films that block heat and UV rays while enhancing privacy and style.',
      features: [
        'Up to 99% UV rejection',
        'Superior heat rejection',
        'Lifetime warranty films'
      ],
      cta: 'Beat the Arizona heat. Schedule today.',
      icon: <Sun className="w-8 h-8 text-blue-900" />,
      link: '/window-tinting'
    },
    {
      number: '04',
      title: 'Vehicle Wraps',
      description: 'Transform your vehicle with a custom color change wrap. Choose from gloss, matte, satin, or specialty finishes.',
      features: [
        'Full color change wraps',
        'Partial wraps and accents',
        'Commercial fleet wraps'
      ],
      cta: 'Stand out from the crowd. Get started.',
      icon: <Palette className="w-8 h-8 text-blue-900" />,
      link: '/vehicle-wraps'
    },
    {
      number: '05',
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
      number: '06',
      title: 'Interior Protection',
      description: 'Ceramic coating for leather, fabric, and plastic surfaces. Protect against stains, UV damage, and wear.',
      features: [
        'Leather ceramic coating',
        'Fabric stain protection',
        'Dashboard and trim coating'
      ],
      cta: 'Keep your interior pristine. Learn more.',
      icon: <Droplets className="w-8 h-8 text-blue-900" />,
      link: '/interior-protection'
    },
    {
      number: '07',
      title: 'Wheel & Caliper',
      description: 'Ceramic coating for wheels and custom caliper painting. Easier cleaning and a custom look.',
      features: [
        'Wheel ceramic coating',
        'Custom caliper colors',
        'Brake dust protection'
      ],
      cta: 'Complete the look. Get a quote.',
      icon: <Circle className="w-8 h-8 text-blue-900" />,
      link: '/wheel-caliper'
    },
    {
      number: '08',
      title: 'Paint Correction',
      description: 'Multi-stage polishing to remove swirls, scratches, and defects. Essential prep for ceramic coating.',
      features: [
        'Swirl and scratch removal',
        'Water spot correction',
        'Mirror-like finish'
      ],
      cta: 'Reveal your paint\'s true potential. Book now.',
      icon: <Eye className="w-8 h-8 text-blue-900" />,
      link: '/paint-correction'
    }
  ];

  const mainServices = [
    {
      title: 'Paint Protection Film & Ceramic Coating',
      description: 'The ultimate protection package for your vehicle. Combine PPF and ceramic coating for maximum defense.',
      subDescription: 'PPF shields against physical damage while ceramic coating adds gloss, hydrophobic properties, and chemical resistance.',
      features: [
        'Full front PPF coverage',
        'Full vehicle ceramic coating',
        'Up to 10-year combined warranty'
      ],
      cta: 'Get a quote',
      link: '/paint-protection-film'
    },
    {
      title: 'Complete Vehicle Transformation',
      description: 'Full vehicle wrap with window tint for a complete custom look and maximum comfort.',
      subDescription: 'Transform your vehicle\'s appearance while staying cool with premium ceramic window tint.',
      features: [
        'Full color change wrap',
        'Ceramic window tint all around',
        'Chrome delete options'
      ],
      cta: 'Start your transformation',
      link: '/vehicle-wraps'
    }
  ];

  return (
    <>
      <SEO
        title="Auto Detailing & Protection Services Denver | PPF, Ceramic, Tint, Wraps"
        description="Complete auto protection services in Denver. Paint protection film, ceramic coatings, window tinting, vehicle wraps, detailing, and paint correction. Free quotes."
        keywords="auto detailing Denver, PPF Denver, ceramic coating Denver, window tinting Denver, vehicle wraps Denver, paint correction Denver"
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
            From paint protection film and ceramic coatings to full vehicle wraps and professional detailing, we deliver showroom-quality results. Certified installers, premium products, and industry-leading warranties.
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

