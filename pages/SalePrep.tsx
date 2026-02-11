import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, DollarSign, Sparkles, Clock, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import RelatedServices from '../components/RelatedServices';

const SalePrep: React.FC = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Increase Sale Price',
      description: 'A professionally detailed car can sell for hundreds or even thousands more than a dirty one.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Faster Sale',
      description: 'Clean, well-presented vehicles attract more buyers and sell faster than neglected ones.'
    },
    {
      icon: <Sparkles className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'First Impressions',
      description: 'Make a great first impression on potential buyers with a showroom-quality presentation.'
    },
    {
      icon: <Clock className="w-8 h-8" style={{ color: '#18AEE4' }} />,
      title: 'Quick Turnaround',
      description: 'We can have your vehicle sale-ready in as little as one day.'
    }
  ];

  const services = [
    'Complete interior deep cleaning',
    'Exterior wash, clay bar, and polish',
    'Engine bay cleaning and dressing',
    'Headlight restoration',
    'Odor elimination',
    'Leather conditioning',
    'Tire and wheel detailing',
    'Glass cleaning inside and out'
  ];

  return (
    <>
      <SEO
        title="Sale Prep Detailing Parker CO | Sell Your Car for More | Splash Mobile Detail"
        description="Professional sale prep detailing serving Denver to Castle Rock and Golden to Bennett. Get your car ready to sell for top dollar. We service Denver, Arapahoe, Jefferson, Douglas, and Elbert Counties."
        keywords="sale prep detailing Parker CO, sell car detailing Castle Rock, pre-sale car cleaning Colorado, car detailing before selling, Arapahoe County sale prep"
        canonical="https://splashmobiledetail.com/sale-prep"
        serviceSchema={{
          name: "Sale Prep Detailing",
          description: "Professional sale prep detailing to get your vehicle ready to sell for top dollar. Clean cars sell faster and for more money.",
          url: "https://splashmobiledetail.com/sale-prep",
          image: "https://splashmobiledetail.com/showroom1.png"
        }}
        breadcrumbs={[
          { name: "Home", url: "https://splashmobiledetail.com/" },
          { name: "Services", url: "https://splashmobiledetail.com/services" },
          { name: "Sale Prep", url: "https://splashmobiledetail.com/sale-prep" }
        ]}
      />
      <section className="py-24 bg-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#18AEE4' }}>SALE PREP</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Sale Prep | Get Top Dollar for Your Vehicle
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ready to sell your car? First impressions matter. Our sale prep detailing service transforms your vehicle into a showroom-ready machine that commands top dollar. A clean car sells faster and for more money—it's that simple.
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
                  src="/showroom1.png" 
                  alt="Professional sale prep detailing in Denver - get top dollar for your car" 
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Sale Prep Detailing?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Studies show that clean cars sell for 10-15% more than dirty ones. Our service pays for itself.
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
            Ready to Sell Your Car?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you get the best price. Contact us today for professional sale prep detailing.
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

        <RelatedServices currentService="Sale Prep" />

        </div>
      </section>
    </>
  );
};

export default SalePrep;
