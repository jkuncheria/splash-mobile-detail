import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Sparkles, Shield, Clock, Wind } from 'lucide-react';
import SEO from '../components/SEO';
import RelatedServices from '../components/RelatedServices';

const VomitRemoval: React.FC = () => {
  const benefits = [
    {
      icon: <Wind className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Complete Odor Removal',
      description: 'We don\'t just clean the surface—we eliminate odors at the source so they don\'t come back.'
    },
    {
      icon: <Shield className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Sanitization',
      description: 'Professional-grade sanitizers kill bacteria and germs, making your car safe and hygienic again.'
    },
    {
      icon: <Clock className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Fast Response',
      description: 'The sooner you address vomit, the easier it is to clean. We offer quick turnaround times.'
    },
    {
      icon: <Sparkles className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Stain Prevention',
      description: 'Quick professional cleaning prevents permanent staining and damage to your upholstery.'
    }
  ];

  const processSteps = [
    'Initial assessment and containment',
    'Removal of solid matter and debris',
    'Deep extraction cleaning of affected areas',
    'Enzyme treatment to break down organic matter',
    'Steam sanitization and disinfection',
    'Odor neutralization and final inspection'
  ];

  return (
    <>
      <SEO
        title="Vomit Removal & Cleanup Denver Metro | Car Interior Cleaning | Splash Mobile Detail"
        description="Professional vomit removal and cleanup in Denver Metro. Complete odor elimination, sanitization, and stain removal. Fast service. Free quotes."
        keywords="vomit removal car Denver, car sick cleanup, interior sanitization, odor removal Parker CO"
        canonical="https://splashmobiledetail.com/vomit-removal"
        serviceSchema={{
          name: "Vomit Removal",
          description: "Complete vomit cleanup, sanitization, and deodorization service. We eliminate the mess and the smell from your vehicle interior.",
          url: "https://splashmobiledetail.com/vomit-removal",
          image: "https://splashmobiledetail.com/vomit.png"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://splashmobiledetail.com/" },
          { name: "Services", url: "https://splashmobiledetail.com/services" },
          { name: "Vomit Removal", url: "https://splashmobiledetail.com/vomit-removal" }
        ]}
      />
      <section className="py-24 bg-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#18AEE4' }}>VOMIT REMOVAL</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Vomit Removal | Complete Cleanup & Sanitization
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Accidents happen—especially with kids or after a night out. Our professional vomit removal service completely cleans, sanitizes, and deodorizes your vehicle's interior. We eliminate the mess and the smell so you can get back on the road with confidence.
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
                  src="/vomit.png" 
                  alt="Professional vomit removal and interior sanitization in Denver" 
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Professional Cleaning Matters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              DIY cleaning often leaves behind odors and bacteria. Professional service ensures complete removal.
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
            Need Quick Cleanup Service?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't let an accident ruin your car's interior. Contact us today for fast, professional vomit removal service.
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

        <RelatedServices currentService="Vomit Removal" />

        </div>
      </section>
    </>
  );
};

export default VomitRemoval;
