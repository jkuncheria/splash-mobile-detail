import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('our-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[700px] md:h-[800px] bg-gray-900 overflow-hidden">
      {/* Background Video - cropped bottom */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-[120%] object-cover object-top"
      >
        <source src="/autoherovideo.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-0 z-10">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight" style={{ textShadow: '0 4px 8px rgba(0,0,0,1), 0 8px 16px rgba(0,0,0,0.8), 0 12px 24px rgba(0,0,0,0.6)' }}>
          GIVE YOUR CAR A<br />
          <span className="inline-block font-black">
            SHOWROOM QUALITY DETAIL
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl drop-shadow-md font-light">
          Make your car look as great as it did the day you bought it. One of the Front Range's finest detailers… from Denver to Castle Rock and Golden to Bennett.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/contact"
            className="font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105 text-white" style={{ backgroundColor: '#18AEE4' }}
          >
            GET QUOTE
          </Link>
          <a 
            href="tel:9706186183"
            className="bg-white hover:bg-gray-100 font-bold py-3 px-8 rounded shadow-lg transition transform hover:scale-105 text-center" style={{ color: '#18AEE4' }}
          >
            CALL TODAY
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;