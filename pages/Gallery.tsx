import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'before-after' | 'gallery'>('before-after');

  // Before & After images from the gallery folder
  const beforeAfterImages = [
    { id: 1, src: '/gallery/b1.png', title: 'Before & After Detail' },
    { id: 2, src: '/gallery/b2.png', title: 'Before & After Detail' },
    { id: 3, src: '/gallery/b3.png', title: 'Before & After Detail' },
    { id: 4, src: '/gallery/b4.png', title: 'Before & After Detail' },
    { id: 5, src: '/gallery/b5.png', title: 'Before & After Detail' },
    { id: 6, src: '/gallery/b6.png', title: 'Before & After Detail' },
    { id: 7, src: '/gallery/b7.png', title: 'Before & After Detail' },
    { id: 8, src: '/gallery/b8.png', title: 'Before & After Detail' },
    { id: 9, src: '/gallery/b9.png', title: 'Before & After Detail' },
    { id: 10, src: '/gallery/b10.png', title: 'Before & After Detail' },
    { id: 11, src: '/gallery/b11.png', title: 'Before & After Detail' },
    { id: 12, src: '/gallery/b12.png', title: 'Before & After Detail' },
    { id: 13, src: '/gallery/b13.png', title: 'Before & After Detail' },
    { id: 14, src: '/gallery/b14.png', title: 'Before & After Detail' },
  ];

  // General gallery images (auto detailing work)
  const galleryImages = [
    { id: 1, src: '/xpel_files/2020-Chevy-Corvette-C8-Full-Front-ULTIMATE-PLUS-PPF-4.jpg', title: 'Paint Protection Film' },
    { id: 2, src: '/xpel_files/Las-Vegas-Install-Day-2-55.jpg', title: 'Ceramic Coating' },
    { id: 3, src: '/xpel_files/2023-Tesla-Model-Y-Grey-Black-HTX-XRP-WC-17-png.jpg', title: 'Window Tinting' },
    { id: 4, src: '/xpel_files/2024-Ford-Raptor-R-Windshield-Protection-Film-4-png.jpg', title: 'Windshield Protection' },
    { id: 5, src: '/xpel_files/Dry-Apply-Installation-Photography.jpg', title: 'Professional Installation' },
  ];

  const currentImages = activeTab === 'before-after' ? beforeAfterImages : galleryImages;

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % currentImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + currentImages.length) % currentImages.length);
    }
  };

  return (
    <>
      <SEO
        title="Before & After Gallery | Splash Mobile Detail | Denver Auto Detailing"
        description="View our before and after auto detailing gallery. See the amazing transformations from Splash Mobile Detail in Parker and Denver, Colorado. Interior detailing, ceramic coatings, and more."
        keywords="auto detailing before after, car detailing gallery Denver, interior detailing photos, ceramic coating results, Parker CO detailing"
        canonical="https://splashmobiledetail.com/gallery"
      />
      <section className="py-24 bg-white px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#18AEE4' }}>GALLERY</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
              Our Work Speaks for Itself
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See the incredible transformations we achieve with every detail. From dirty interiors to showroom shine, our before and after photos showcase the quality of our work.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-xl p-1 bg-gray-100">
              <button
                onClick={() => setActiveTab('before-after')}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                  activeTab === 'before-after'
                    ? 'text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                style={activeTab === 'before-after' ? { backgroundColor: '#18AEE4' } : {}}
              >
                Before & After
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                  activeTab === 'gallery'
                    ? 'text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                style={activeTab === 'gallery' ? { backgroundColor: '#18AEE4' } : {}}
              >
                Our Work
              </button>
            </div>
          </div>

          {/* Before & After Tab */}
          {activeTab === 'before-after' && (
            <>
              <p className="text-center text-gray-600 mb-8">
                Click on any image to view it larger. These are real results from real customers!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {beforeAfterImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="aspect-video overflow-hidden bg-gray-200">
                      <img 
                        src={image.src} 
                        alt={`${image.title} - Splash Mobile Detail Denver`} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white font-semibold p-4">Click to enlarge</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square overflow-hidden bg-gray-200">
                    <img 
                      src={image.src} 
                      alt={`${image.title} - Splash Mobile Detail Denver`} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold p-4">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Lightbox Modal */}
          {selectedImage !== null && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-3"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-3"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div
                className="max-w-6xl max-h-[90vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentImages[selectedImage].src}
                  alt={`${currentImages[selectedImage].title} - Splash Mobile Detail`}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready for Your Transformation?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us restore your vehicle to showroom condition. Contact us today for a free estimate.
            </p>
            <a
              href="/contact"
              className="inline-block text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#18AEE4' }}
            >
              Get Free Estimate
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Gallery;

