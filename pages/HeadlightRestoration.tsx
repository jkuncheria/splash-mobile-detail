import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Sparkles, Eye, Shield, Sun } from 'lucide-react';
import SEO from '../components/SEO';
import RelatedServices from '../components/RelatedServices';

const HeadlightRestoration: React.FC = () => {
  const benefits = [
    {
      icon: <Eye className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Improved Visibility',
      description: 'Restore clarity to foggy, yellowed headlights for safer nighttime driving and better road visibility.'
    },
    {
      icon: <Sun className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'UV Protection',
      description: 'Our restoration process includes UV-resistant sealant to prevent future yellowing and oxidation.'
    },
    {
      icon: <Sparkles className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Like-New Appearance',
      description: 'Transform dull, hazy headlights back to crystal clear condition, enhancing your vehicle\'s overall look.'
    },
    {
      icon: <Shield className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Cost-Effective',
      description: 'Save hundreds compared to headlight replacement while achieving professional-grade results.'
    }
  ];

  const processSteps = [
    'Thorough cleaning and decontamination',
    'Multi-stage wet sanding to remove oxidation',
    'Professional polishing compound application',
    'Fine polish for crystal clarity',
    'UV-resistant sealant application',
    'Final inspection and quality check'
  ];

  const issuesFixed = [
    'Yellowed and discolored lenses',
    'Foggy or hazy appearance',
    'Oxidation and UV damage',
    'Minor scratches and pitting',
    'Reduced light output',
    'Failed inspection due to headlights'
  ];

  return (
    <>
      <SEO
        title="Headlight Restoration Parker CO | Clear Headlights | Splash Mobile Detail"
        description="Professional headlight restoration serving Denver to Castle Rock and Golden to Bennett. Remove yellowing, haze, and oxidation. We service Denver, Arapahoe, Jefferson, Douglas, and Elbert Counties."
        keywords="headlight restoration Parker CO, foggy headlights Castle Rock, yellowed headlights, headlight cleaning Colorado, Arapahoe County headlight restoration"
        canonical="https://splashmobiledetail.com/headlight-restoration"
        serviceSchema={{
          name: "Headlight Restoration",
          description: "Professional headlight restoration to remove yellowing, haze, and oxidation. Improve visibility and appearance with UV-resistant sealant.",
          url: "https://splashmobiledetail.com/headlight-restoration",
          image: "https://splashmobiledetail.com/services/headlight-restoration.jpg"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://splashmobiledetail.com/" },
          { name: "Services", url: "https://splashmobiledetail.com/services" },
          { name: "Headlight Restoration", url: "https://splashmobiledetail.com/headlight-restoration" }
        ]}
      />
      <section className="py-24 bg-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#18AEE4' }}>HEADLIGHT RESTORATION</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Headlight Restoration | See Clearly Again
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Clear headlights make a big difference in your car's appearance and safety. Our professional headlight restoration service removes scratches and oxidation, protecting against UV rays and restoring a high gloss shine. Whether you're in Lone Tree, Castle Rock, or Greenwood Village, we'll help your vehicle look and perform its best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group" style={{ backgroundColor: '#18AEE4' }}>
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:9706186183" className="border-2 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 hover:text-white" style={{ borderColor: '#18AEE4', color: '#18AEE4' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#18AEE4'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#18AEE4'; }}>
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden h-[500px] md:h-[600px] rounded-2xl shadow-2xl">
                <img 
                  src="/services/headlight-restoration.jpg" 
                  alt="Headlight Restoration Services in Denver Metro Area" 
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Restore Your Headlights?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cloudy headlights reduce light output by up to 80%. Restoration brings back full brightness and clarity.
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

        {/* Issues We Fix */}
        <div className="rounded-2xl p-12 md:p-16 mb-20" style={{ backgroundColor: '#18AEE4' }}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Issues We Fix
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {issuesFixed.map((issue, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Restoration Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use a multi-step professional process to ensure lasting results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-4" style={{ backgroundColor: '#18AEE4' }}>
                    {idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Step {idx + 1}</h4>
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Before/After Note */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dramatic Results</h3>
              <p className="text-gray-600 mb-4">
                Most headlight restorations are completed in under an hour, with results you can see immediately. Our UV sealant helps protect your headlights from future damage.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#18AEE4' }} />
                  <span className="text-gray-700">Results last 2-3 years with proper care</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#18AEE4' }} />
                  <span className="text-gray-700">Fraction of the cost of replacement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#18AEE4' }} />
                  <span className="text-gray-700">Mobile service available</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-5xl font-black mb-2" style={{ color: '#18AEE4' }}>80%</p>
                <p className="text-gray-600 font-semibold">Light output can be restored</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to See Clearly Again?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. Improve your safety and your vehicle's appearance with professional headlight restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group" style={{ backgroundColor: '#18AEE4' }}>
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:9706186183" className="border-2 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 hover:text-white" style={{ borderColor: '#18AEE4', color: '#18AEE4' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#18AEE4'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#18AEE4'; }}>
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>

        <RelatedServices currentService="Headlight Restoration" />

        </div>
      </section>
    </>
  );
};

export default HeadlightRestoration;
