import React from 'react';
import { BookOpen, Users, Building, Star, Sparkles } from 'lucide-react';

const OurStory: React.FC = () => {
  // Curved arrow SVG component - smooth S-curve
  const CurvedArrowDown = ({ flip = false }: { flip?: boolean }) => (
    <svg 
      className={`w-full max-w-md h-24 md:h-32 mx-auto my-2 ${flip ? 'scale-x-[-1]' : ''}`} 
      viewBox="0 0 200 80" 
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <path 
        d="M30 10 C80 10, 80 70, 130 70 C150 70, 160 70, 170 70" 
        stroke="#18AEE4" 
        strokeWidth="3" 
        strokeLinecap="round"
        strokeDasharray="10 6"
        fill="none"
      />
      <polygon 
        points="165,65 175,70 165,75" 
        fill="#18AEE4"
      />
    </svg>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white px-4 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Decorative background elements */}
        <div className="absolute top-20 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#18AEE4' }}></div>
        <div className="absolute bottom-40 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#18AEE4' }}></div>
        
        {/* Header */}
        <div className="text-center mb-20 relative z-10">
          <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#18AEE4' }}>ABOUT SPLASH MOBILE DETAIL</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
            Our Story
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From a classroom lesson to Denver's most trusted detailing service – here's how Splash Mobile Detail came to be.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative z-10">
          
          {/* Chapter 1: The Early Days */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl shadow-lg" style={{ backgroundColor: '#18AEE4' }}>
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider" style={{ color: '#18AEE4' }}>Chapter 1</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">The Early Days</h3>
                  </div>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    It was the spring of <span className="font-bold text-gray-900">2019</span>. Eugene Chiarelli, a businessman and entrepreneur for the previous 40+ years was teaching an entrepreneurship class to four students.
                  </p>
                  <p>
                    When presenting the idea of how to start a business, all four young men looked like deer in headlights. It was at that point, Mr. Chiarelli said <span className="italic font-medium">"you know what we're gonna do. We're gonna start a business."</span>
                  </p>
                  <p className="text-xl font-bold py-2" style={{ color: '#18AEE4' }}>
                    ✨ And so it began.
                  </p>
                  <p>
                    Two of the boys had worked for an uncle cleaning cars at a used car lot. Mr. Chiarelli saw an opportunity in the Mobile Detail industry – a space where they could earn money and learn business at the same time.
                  </p>
                  <p>
                    Mr. Chiarelli put up the money, branded the company through his advertising design firm, and the boys worked out of their personal vehicles.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-2xl" style={{ backgroundColor: '#18AEE4' }}>
                  <div className="text-center text-white">
                    <p className="text-5xl md:text-6xl font-black">2019</p>
                    <p className="text-sm md:text-base font-medium opacity-90">Where it all started</p>
                  </div>
                </div>
                <Sparkles className="absolute -top-4 -right-4 w-10 h-10 text-yellow-400" />
              </div>
            </div>
          </div>

          {/* Curved Arrow 1 */}
          <div className="hidden md:block">
            <CurvedArrowDown />
          </div>
          <div className="md:hidden flex justify-center my-6">
            <div className="w-1 h-16 rounded-full" style={{ backgroundColor: '#18AEE4' }}></div>
          </div>

          {/* Chapter 2: The Second Phase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8">
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-2xl bg-gradient-to-br from-yellow-400 to-yellow-500">
                  <div className="text-center text-white">
                    <p className="text-5xl md:text-6xl font-black">2021</p>
                    <p className="text-sm md:text-base font-medium opacity-90">Growth explodes</p>
                  </div>
                </div>
                <Users className="absolute -bottom-2 -left-4 w-12 h-12 p-2 rounded-full bg-white shadow-lg" style={{ color: '#18AEE4' }} />
              </div>
            </div>
            <div>
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-500">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-yellow-500">Chapter 2</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">The Second Phase</h3>
                  </div>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    At the age of 58, Mr. Chiarelli began cleaning cars on his own. Over the next few years, <span className="font-bold text-gray-900">Splash began to grow</span>. Word got out, reviews were flowing in, and people were loving what Splash had to offer.
                  </p>
                  <p>
                    Chiarelli hired some of the best detailers he could find, and <span className="italic font-medium">the legend began</span>.
                  </p>
                  <p>
                    In the spring of 2021, business was growing to more than we could handle. Mr. Chiarelli purchased a building in Parker and the legend grew.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4 mt-4">
                    <p className="text-2xl font-black text-gray-900">40-50 cars/month</p>
                    <p className="text-sm text-gray-500">Up from just a few cars per week!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Curved Arrow 2 */}
          <div className="hidden md:block">
            <CurvedArrowDown flip />
          </div>
          <div className="md:hidden flex justify-center my-6">
            <div className="w-1 h-16 rounded-full" style={{ backgroundColor: '#18AEE4' }}></div>
          </div>

          {/* Chapter 3: Brick And Mortar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl shadow-lg bg-gradient-to-br from-gray-700 to-gray-900">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wider text-gray-500">Chapter 3</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Brick And Mortar</h3>
                  </div>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    A state of the art <span className="font-bold text-gray-900">1,200 square-foot garage</span> in Parker where we could detail as many as four cars at the same time – completely shielded from any weather.
                  </p>
                  <p>
                    We could wash, paint correct, steam, extract, restore headlights, clay, wax, shampoo, and just about anything – <span className="italic">completely and totally inside</span>.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Denver', 'Castle Rock', 'Bennett', 'Highlands Ranch', 'Lakewood', 'Parker'].map((city) => (
                      <span key={city} className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#18AEE4' }}>
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center items-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center shadow-2xl bg-gradient-to-br from-gray-700 to-gray-900">
                  <div className="text-center text-white px-4">
                    <Building className="w-12 h-12 mx-auto mb-2 opacity-80" />
                    <p className="text-lg md:text-xl font-bold">1,200 sq ft</p>
                    <p className="text-sm opacity-80">State of the Art</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quote/Highlight Box */}
        <div className="relative z-10 rounded-3xl p-8 md:p-12 text-center shadow-2xl overflow-hidden" style={{ backgroundColor: '#18AEE4' }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed max-w-3xl mx-auto">
            "Splash may not be the cheapest shop in town, but their professionalism, ability for great customer service, and their integrity is second to none."
          </p>
          <p className="text-white/70 mt-6 text-lg font-medium">— The common theme from our reviews</p>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
