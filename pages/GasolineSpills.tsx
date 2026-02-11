import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, AlertTriangle, Shield, Clock, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import RelatedServices from '../components/RelatedServices';

const GasolineSpills: React.FC = () => {
  const benefits = [
    {
      icon: <AlertTriangle className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Odor Elimination',
      description: 'Gasoline odors can be overwhelming and even dangerous. We completely eliminate the smell, not just mask it.'
    },
    {
      icon: <Shield className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Safe & Thorough',
      description: 'Our professional cleaning process safely removes gasoline residue from carpets, upholstery, and trunk liners.'
    },
    {
      icon: <Clock className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Quick Response',
      description: 'Gasoline spills need immediate attention. We offer fast turnaround to get your vehicle safe and fresh again.'
    },
    {
      icon: <Sparkles className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Complete Restoration',
      description: 'We restore your interior to pre-spill condition, removing stains and preventing long-term damage.'
    }
  ];

  const processSteps = [
    'Assessment of spill extent and affected areas',
    'Extraction of gasoline from carpets and fabrics',
    'Deep cleaning with specialized degreasing agents',
    'Steam cleaning to sanitize affected surfaces',
    'Odor neutralization treatment',
    'Final inspection and air quality check'
  ];

  return (
    <>
      <SEO
        title="Gasoline Spill Cleanup Parker CO | Car Interior Cleaning | Splash Mobile Detail"
        description="Professional gasoline spill cleanup serving Denver to Castle Rock and Golden to Bennett. Remove gas odors and stains from your car interior. We service Denver, Arapahoe, Jefferson, Douglas, and Elbert Counties."
        keywords="gasoline spill cleanup Parker CO, gas smell removal car Castle Rock, fuel spill cleaning Colorado, car interior cleaning, Arapahoe County gas spill cleanup"
        canonical="https://splashmobiledetail.com/gasoline-spills"
        serviceSchema={{
          name: "Gasoline Spill Cleanup",
          description: "Professional gasoline spill cleanup that safely removes fuel residue and eliminates dangerous odors from your vehicle interior.",
          url: "https://splashmobiledetail.com/gasoline-spills",
          image: "https://splashmobiledetail.com/gas-spill.png"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://splashmobiledetail.com/" },
          { name: "Services", url: "https://splashmobiledetail.com/services" },
          { name: "Gasoline Spill Cleanup", url: "https://splashmobiledetail.com/gasoline-spills" }
        ]}
      />
      <section className="py-24 bg-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#18AEE4' }}>GASOLINE SPILL CLEANUP</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Gasoline Spill Cleanup | Remove Odors & Stains
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Accidentally spilled gasoline in your car? Don't worry—we've got you covered. Our professional gasoline spill cleanup service safely removes fuel residue, eliminates dangerous odors, and restores your vehicle's interior to like-new condition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group" style={{ backgroundColor: '#18AEE4' }}>
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:9706186183" className="border-2 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 hover:text-white" style={{ borderColor: '#18AEE4', color: '#18AEE4' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#18AEE4'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#18AEE4'; }}>
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[400px] md:h-[500px] rounded-2xl shadow-2xl">
                <img 
                  src="/gas-spill.png" 
                  alt="Professional gasoline spill cleanup and interior detailing in Denver" 
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Professional Cleanup Matters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Gasoline spills aren't just smelly—they can be hazardous. Professional cleaning ensures complete removal and safety.
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

        {/* Process Section */}
        <div className="rounded-2xl p-12 md:p-16 mb-20" style={{ backgroundColor: '#18AEE4' }}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Our Cleanup Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">{idx + 1}</span>
                  </div>
                  <span className="text-white text-lg">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need Emergency Spill Cleanup?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't let gasoline damage your vehicle or put your health at risk. Contact us today for fast, professional cleanup service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group" style={{ backgroundColor: '#18AEE4' }}>
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:9706186183" className="border-2 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 hover:text-white" style={{ borderColor: '#18AEE4', color: '#18AEE4' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#18AEE4'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#18AEE4'; }}>
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>

        <RelatedServices currentService="Gasoline Spill Cleanup" />

        </div>
      </section>
    </>
  );
};

export default GasolineSpills;
