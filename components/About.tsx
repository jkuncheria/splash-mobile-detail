import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Star, Users, Award, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Eugene Chiarelli',
      role: 'Owner',
      image: '/who-we-are/eugene.jpg',
      bio: [
        'The concept of this business came directly from an entrepreneurship class I teach with some students!',
        'The workshop, called Path to Success, was designed to teach young adults (15–25) all the things their school can\'t and parents don\'t about business and life.',
        'It is, essentially, an entrepreneur workshop. The idea of Splash Mobile Detail was spawned with four of my very first students, and since 2019, several other Path to Success students have joined us at Splash.',
        'We only employ the best and most experienced detailers for even the toughest of jobs.'
      ]
    },
    {
      name: 'Diego Saucedo Preciado',
      role: 'Lead Technician',
      image: '/who-we-are/Diego-1.jpg',
      bio: [
        'Diego is 23 years old and has been detailing cars since he was 16. He knew the very first time he did it: detailing cars is what he wanted to do with his life.',
        'Diego is from a very strong and tight-knit family. He\'s the most complete and skilled detailer that\'s ever worked at Splash. He\'s a solid family man, and a young man devoted to his sisters and his parents.',
        'It is Diego\'s intention to eventually own this business, maybe sooner than later 🙂'
      ]
    },
    {
      name: 'Nicolas Toscano',
      role: 'Detail Technician',
      image: '/who-we-are/Nicolas-1.jpg',
      bio: [
        'Nico (as his friends and family call him) is just 26 years old and a native of Argentina. He\'s been in the United States since he was 17 and he\'s been detailing cars since 18.',
        'Nico was the full-time lead tech at Splash for over a year and continues to work part-time while he pursues his own career in ceramics and coatings.',
        'He is devoted to the detail industry, hard-working, and a wonderful son to his mother.'
      ]
    }
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16">
          <img 
            src="/xpel_files/about.avif" 
            alt="About Us - Professional Auto Detailing and Protection" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <span className="text-yellow-400 font-bold tracking-wider text-sm uppercase">ABOUT US</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2">
              Denver Metro's Premier Mobile Detailing
            </h1>
          </div>
        </div>

        {/* Our Background Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Splash Mobile Detail: Our Background</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Splash Mobile Detail opened in <span className="font-bold" style={{ color: '#18AEE4' }}>March of 2019</span>. And boy have things changed in the last 5+ years.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                While we still have the ability to come out for a mobile detail, we rarely do. In most cases, we work in our <span className="font-bold">state-of-the-art Parker, Colorado facility</span>.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Come see how amazing our shop truly is and discover why <span className="font-bold" style={{ color: '#18AEE4' }}>hundreds of 5-star reviews</span> have been given to us by our customers over the last 5+ years!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:9706186183" 
                  className="flex items-center justify-center gap-2 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
                  style={{ backgroundColor: '#18AEE4' }}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <div className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-bold py-4 px-8 rounded-xl">
                  <MapPin className="w-5 h-5" style={{ color: '#18AEE4' }} />
                  Parker, CO
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Star Reviews Banner */}
        <div className="rounded-2xl p-8 md:p-12 mb-20 text-center text-white" style={{ backgroundColor: '#18AEE4' }}>
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-bold">Hundreds of 5-Star Reviews</p>
          <p className="text-white/80 mt-2">Trusted by customers across the Denver Metro Area</p>
        </div>

        {/* Meet The Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#18AEE4' }}>OUR TEAM</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Meet The People Behind Splash</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="space-y-12">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Photo */}
                <div className={`flex justify-center ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4" style={{ borderColor: idx === 0 ? '#18AEE4' : idx === 1 ? '#f59e0b' : '#6b7280' }}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Bio Card */}
                <div className={`lg:col-span-2 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="p-3 rounded-xl shadow-lg"
                        style={{ backgroundColor: idx === 0 ? '#18AEE4' : idx === 1 ? '#f59e0b' : '#6b7280' }}
                      >
                        {idx === 0 ? <Award className="w-6 h-6 text-white" /> : <Sparkles className="w-6 h-6 text-white" />}
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-wider" style={{ color: idx === 0 ? '#18AEE4' : idx === 1 ? '#f59e0b' : '#6b7280' }}>
                          {member.role}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{member.name}</h3>
                      </div>
                    </div>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      {member.bio.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white">
          <Sparkles className="w-12 h-12 mx-auto mb-4" style={{ color: '#18AEE4' }} />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Restore Your Car's Interior With Auto Detailing From Splash Mobile Detail
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Give us a call and let us assess your vehicle and help you determine whether it's time for a full detailing service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:9706186183" 
              className="flex items-center justify-center gap-2 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#18AEE4' }}
            >
              <Phone className="w-5 h-5" />
              Call Now: (970) 618-6183
            </a>
            <Link 
              to="/contact"
              className="flex items-center justify-center gap-2 bg-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
              style={{ color: '#18AEE4' }}
            >
              Get Free Quote
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;


