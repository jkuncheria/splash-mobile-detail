import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Heart, Sparkles, Shield, Wind } from 'lucide-react';
import SEO from '../components/SEO';
import RelatedServices from '../components/RelatedServices';

const PetCleanup: React.FC = () => {
  const benefits = [
    {
      icon: <Wind className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Odor Elimination',
      description: 'Pet odors can linger for months. We eliminate them completely with enzyme treatments and deep cleaning.'
    },
    {
      icon: <Sparkles className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Hair Removal',
      description: 'Our specialized tools and techniques remove even the most stubborn pet hair from every surface.'
    },
    {
      icon: <Shield className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Stain Treatment',
      description: 'Accidents happen. We treat and remove pet stains from carpets, seats, and upholstery.'
    },
    {
      icon: <Heart className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Allergen Reduction',
      description: 'Deep cleaning removes pet dander and allergens, making your car comfortable for everyone.'
    }
  ];

  const services = [
    'Complete pet hair removal from all surfaces',
    'Deep vacuum of carpets, seats, and crevices',
    'Enzyme treatment for accident stains',
    'Odor neutralization and elimination',
    'Steam cleaning and sanitization',
    'Leather cleaning and conditioning',
    'Air vent and HVAC cleaning',
    'Protective treatment application'
  ];

  return (
    <>
      <SEO
        title="Pet Cleanup & Hair Removal Parker CO | Car Detailing | Splash Mobile Detail"
        description="Professional pet cleanup and hair removal serving Denver to Castle Rock and Golden to Bennett. Remove pet odors, stains, and hair from your car. We service Denver, Arapahoe, Jefferson, Douglas, and Elbert Counties."
        keywords="pet hair removal car Parker CO, dog hair cleaning Castle Rock, pet odor removal Colorado, car detailing pets, Arapahoe County pet cleanup"
        canonical="https://splashmobiledetail.com/pet-cleanup"
        serviceSchema={{
          name: "Pet Cleanup",
          description: "Professional pet cleanup service to remove stubborn pet hair, eliminate odors, and treat stains from your vehicle interior.",
          url: "https://splashmobiledetail.com/pet-cleanup",
          image: "https://splashmobiledetail.com/showroom2.png"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://splashmobiledetail.com/" },
          { name: "Services", url: "https://splashmobiledetail.com/services" },
          { name: "Pet Cleanup", url: "https://splashmobiledetail.com/pet-cleanup" }
        ]}
      />
      <section className="py-24 bg-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#18AEE4' }}>PET CLEANUP</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Pet Cleanup | Hair, Odor & Stain Removal
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We love our furry friends, but they can leave quite a mess in our cars. Our pet cleanup service removes stubborn pet hair, eliminates odors, and treats stains—leaving your vehicle fresh, clean, and ready for your next adventure together.
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
                  src="/showroom2.png" 
                  alt="Professional pet cleanup and hair removal in Denver" 
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Professional Pet Cleanup?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Regular vacuuming can't handle pet hair and odors. Our specialized service gets the job done right.
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

        {/* Services Section */}
        <div className="rounded-2xl p-12 md:p-16 mb-20" style={{ backgroundColor: '#18AEE4' }}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              What's Included
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

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready for a Pet-Free Clean Car?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Love your pets but not the mess? Contact us today for professional pet cleanup service.
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

        <RelatedServices currentService="Pet Cleanup" />

        </div>
      </section>
    </>
  );
};

export default PetCleanup;
