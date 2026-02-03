import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('Bathroom Remodels');

  const projectCategories = [
    'Bathroom Remodels',
    'Kitchen Remodels',
    'Fast Food Restaurant',
    'Old Chicago Pizza + Taproom',
    'Outdoor Fireplace',
    "Wendy's Franchise",
    'Building Construction',
    'Indoor Fireplace',
    'Other Projects'
  ];

  // Gallery images - Update these with actual project images
  const galleryImages = [
    { id: 1, src: '/HMPICTURES/141220ed-26cb-4b59-a44a-0325b7b6348a.jpg', title: 'Kitchen Remodel', category: 'Kitchen Remodels' },
    { id: 2, src: '/HMPICTURES/24f92185-4510-4192-9bb9-514f299acfd9.jpg', title: 'Building Construction', category: 'Building Construction' },
    { id: 3, src: '/HMPICTURES/35ca8c83-107b-4cc3-8b10-0a333ebd102c.jpg', title: 'Building Construction', category: 'Building Construction' },
    { id: 4, src: '/HMPICTURES/68398.jpeg', title: 'Project Photo', category: 'Residential' },
    { id: 5, src: '/HMPICTURES/70409.jpeg', title: 'Indoor Fireplace', category: 'Indoor Fireplace' },
    { id: 6, src: '/HMPICTURES/70410.jpeg', title: 'Indoor Fireplace', category: 'Indoor Fireplace' },
    { id: 7, src: '/HMPICTURES/70411.jpeg', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 8, src: '/HMPICTURES/70412.jpeg', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 9, src: '/HMPICTURES/70417.jpeg', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 10, src: '/HMPICTURES/70540.jpeg', title: 'Project Photo', category: 'Residential' },
    { id: 11, src: '/HMPICTURES/70542.jpeg', title: 'Indoor Fireplace', category: 'Indoor Fireplace' },
    { id: 12, src: '/HMPICTURES/70543.jpeg', title: 'Indoor Fireplace', category: 'Indoor Fireplace' },
    { id: 13, src: '/HMPICTURES/71d46212-787c-43d3-961c-c2e23c24074c.jpg', title: 'Building Construction', category: 'Building Construction' },
    { id: 14, src: '/HMPICTURES/75856.jpeg', title: 'Project Photo', category: 'Residential' },
    { id: 15, src: '/HMPICTURES/78984.jpeg', title: 'Project Photo', category: 'Residential' },
    { id: 16, src: '/HMPICTURES/7b17ec0f-9c54-401b-9a9c-d3cbc00155f2.jpg', title: 'Project Photo', category: 'Residential' },
    { id: 17, src: '/HMPICTURES/81280.jpeg', title: 'Project Photo', category: 'Residential' },
    { id: 18, src: '/HMPICTURES/917ffa0a-e0da-44c2-8c85-31babaec9a71.jpg', title: 'Building Construction', category: 'Building Construction' },
    { id: 19, src: '/HMPICTURES/project1-01.jpg', title: 'Fast Food Restaurant', category: 'Fast Food Restaurant' },
    { id: 20, src: '/HMPICTURES/project1-02.jpg', title: 'Fast Food Restaurant', category: 'Fast Food Restaurant' },
    { id: 21, src: '/HMPICTURES/project1-03.jpg', title: 'Fast Food Restaurant', category: 'Fast Food Restaurant' },
    { id: 22, src: '/HMPICTURES/project1-06.jpg', title: 'Fast Food Restaurant', category: 'Fast Food Restaurant' },
    { id: 24, src: '/HMPICTURES/IMG_0048.JPG', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 25, src: '/HMPICTURES/project1-04.png', title: 'Fast Food Restaurant', category: 'Fast Food Restaurant' },
    { id: 26, src: '/HMPICTURES/project1-05.png', title: 'Fast Food Restaurant', category: 'Fast Food Restaurant' },
    { id: 27, src: '/HMPICTURES/project1-07.png', title: 'Fast Food Restaurant', category: 'Fast Food Restaurant' },
    { id: 28, src: '/HMPICTURES/IMG_1543.JPG', title: 'Project Photo', category: 'Residential' },
    { id: 29, src: '/HMPICTURES/IMG_1708.jpg', title: 'Project Photo', category: 'Residential' },
    { id: 30, src: '/HMPICTURES/IMG_1852.JPG', title: 'Project Photo', category: 'Residential' },
    { id: 31, src: '/HMPICTURES/IMG_4769.JPEG', title: 'Indoor Fireplace', category: 'Indoor Fireplace' },
    { id: 32, src: '/HMPICTURES/IMG_6894.JPG', title: 'Project Photo', category: 'Residential' },
    { id: 33, src: '/HMPICTURES/IMG_6895.JPG', title: 'Project Photo', category: 'Residential' },
    { id: 34, src: '/HMPICTURES/IMG_6897.JPG', title: 'Project Photo', category: 'Residential' },
    { id: 35, src: '/HMPICTURES/IMG_8685.PNG', title: 'Project Photo', category: 'Residential' },
    { id: 36, src: '/HMPICTURES/project2-02.jpg', title: 'Old Chicago Pizza + Taproom', category: 'Old Chicago Pizza + Taproom' },
    { id: 37, src: '/HMPICTURES/IMG_8813.JPG', title: 'Project Photo', category: 'Residential' },
    { id: 38, src: '/HMPICTURES/project2-01.jpg', title: 'Old Chicago Pizza + Taproom', category: 'Old Chicago Pizza + Taproom' },
    { id: 39, src: '/HMPICTURES/IMG_8817.JPG', title: 'Project Photo', category: 'Residential' },
    { id: 40, src: '/HMPICTURES/project1-08.png', title: 'Fast Food Restaurant', category: 'Fast Food Restaurant' },
    { id: 41, src: '/HMPICTURES/IMG_9293.PNG', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 42, src: '/HMPICTURES/IMG_9890.JPG', title: 'Project Photo', category: 'Residential' },
    { id: 43, src: '/HMPICTURES/bba2cea7-a0fe-4351-bc34-b82b931eb3dc.jpg', title: 'Building Construction', category: 'Building Construction' },
    { id: 44, src: '/HMPICTURES/e19a6052-2702-47c2-a024-d3795cdc7a1d.jpg', title: 'Project Photo', category: 'Residential' },
    { id: 45, src: '/HMPICTURES/IMG_0332.webp', title: 'Building Construction', category: 'Building Construction' },
    { id: 46, src: '/HMPICTURES/IMG_0473.webp', title: 'Kitchen Remodel', category: 'Kitchen Remodels' },
    { id: 47, src: '/HMPICTURES/IMG_0502.webp', title: 'Kitchen Remodel', category: 'Kitchen Remodels' },
    { id: 48, src: '/HMPICTURES/IMG_0519.webp', title: 'Building Construction', category: 'Building Construction' },
    { id: 49, src: '/HMPICTURES/IMG_0617.webp', title: 'Project Photo', category: 'Residential' },
    { id: 50, src: '/HMPICTURES/IMG_0678.webp', title: 'Project Photo', category: 'Residential' },
    { id: 51, src: '/HMPICTURES/IMG_0809.webp', title: 'Project Photo', category: 'Residential' },
    { id: 52, src: '/HMPICTURES/IMG_0825.webp', title: 'Project Photo', category: 'Residential' },
    { id: 53, src: '/HMPICTURES/IMG_0906.webp', title: 'Project Photo', category: 'Residential' },
    { id: 54, src: '/HMPICTURES/IMG_0939.webp', title: 'Project Photo', category: 'Residential' },
    { id: 55, src: '/HMPICTURES/IMG_0940.webp', title: 'Project Photo', category: 'Residential' },
    { id: 56, src: '/HMPICTURES/IMG_0941.webp', title: 'Project Photo', category: 'Residential' },
    { id: 57, src: '/HMPICTURES/IMG_0942.webp', title: 'Project Photo', category: 'Residential' },
    { id: 58, src: '/HMPICTURES/IMG_0943.webp', title: 'Project Photo', category: 'Residential' },
    { id: 59, src: '/HMPICTURES/project4-10.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 60, src: '/HMPICTURES/project4-11.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 61, src: '/HMPICTURES/project4-12.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 62, src: '/HMPICTURES/project4-13.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 63, src: '/HMPICTURES/project4-14.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 64, src: '/HMPICTURES/project4-15.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 65, src: '/HMPICTURES/project4-16.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 66, src: '/HMPICTURES/project4-17.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 67, src: '/HMPICTURES/project4-01.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 68, src: '/HMPICTURES/project4-02.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 69, src: '/HMPICTURES/project4-03.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 70, src: '/HMPICTURES/project4-04.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 71, src: '/HMPICTURES/project4-06.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 72, src: '/HMPICTURES/project4-05.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 73, src: '/HMPICTURES/IMG_1415.webp', title: 'Project Photo', category: 'Residential' },
    { id: 74, src: '/HMPICTURES/IMG_1417.webp', title: 'Project Photo', category: 'Residential' },
    { id: 75, src: '/HMPICTURES/IMG_1418.webp', title: 'Project Photo', category: 'Residential' },
    { id: 76, src: '/HMPICTURES/IMG_1672.webp', title: 'Project Photo', category: 'Residential' },
    { id: 77, src: '/HMPICTURES/IMG_1677.webp', title: 'Project Photo', category: 'Residential' },
    { id: 78, src: '/HMPICTURES/IMG_1679.webp', title: 'Project Photo', category: 'Residential' },
    { id: 79, src: '/HMPICTURES/project3-03.webp', title: 'Outdoor Fireplace', category: 'Outdoor Fireplace' },
    { id: 80, src: '/HMPICTURES/project3-02.webp', title: 'Outdoor Fireplace', category: 'Outdoor Fireplace' },
    { id: 81, src: '/HMPICTURES/project3-01.webp', title: 'Outdoor Fireplace', category: 'Outdoor Fireplace' },
    { id: 82, src: '/HMPICTURES/IMG_3021.webp', title: 'Project Photo', category: 'Residential' },
    { id: 83, src: '/HMPICTURES/project4-08.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 84, src: '/HMPICTURES/project4-07.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 85, src: '/HMPICTURES/project4-09.webp', title: "Wendy's Franchise", category: "Wendy's Franchise" },
    { id: 86, src: '/HMPICTURES/IMG_3666.webp', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 87, src: '/HMPICTURES/IMG_5224.webp', title: 'Project Photo', category: 'Residential' },
    { id: 88, src: '/HMPICTURES/IMG_5228.webp', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 89, src: '/HMPICTURES/IMG_5810.webp', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 90, src: '/HMPICTURES/IMG_5854.webp', title: 'Project Photo', category: 'Residential' },
    { id: 91, src: '/HMPICTURES/IMG_6498.webp', title: 'Project Photo', category: 'Residential' },
    { id: 92, src: '/HMPICTURES/IMG_6750.webp', title: 'Project Photo', category: 'Residential' },
    { id: 93, src: '/HMPICTURES/IMG_6753.webp', title: 'Project Photo', category: 'Residential' },
    { id: 94, src: '/HMPICTURES/IMG_6933.webp', title: 'Project Photo', category: 'Residential' },
    { id: 95, src: '/HMPICTURES/IMG_6934.webp', title: 'Project Photo', category: 'Residential' },
    { id: 96, src: '/HMPICTURES/IMG_6935.webp', title: 'Project Photo', category: 'Residential' },
    { id: 97, src: '/HMPICTURES/IMG_6937.webp', title: 'Project Photo', category: 'Residential' },
    { id: 98, src: '/HMPICTURES/IMG_7173.webp', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 99, src: '/HMPICTURES/IMG_7174.webp', title: 'Project Photo', category: 'Residential' },
    { id: 100, src: '/HMPICTURES/IMG_7866.webp', title: 'Project Photo', category: 'Residential' },
    { id: 101, src: '/HMPICTURES/IMG_7876.webp', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 102, src: '/HMPICTURES/IMG_7879.webp', title: 'Project Photo', category: 'Residential' },
    { id: 103, src: '/HMPICTURES/IMG_7883.webp', title: 'Project Photo', category: 'Residential' },
    { id: 104, src: '/HMPICTURES/IMG_7884.webp', title: 'Kitchen Remodel', category: 'Kitchen Remodels' },
    { id: 105, src: '/HMPICTURES/IMG_7888.webp', title: 'Project Photo', category: 'Residential' },
    { id: 106, src: '/HMPICTURES/IMG_8658.webp', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 107, src: '/HMPICTURES/IMG_8965.webp', title: 'Project Photo', category: 'Residential' },
    { id: 108, src: '/HMPICTURES/IMG_8969.webp', title: 'Project Photo', category: 'Residential' },
    { id: 109, src: '/HMPICTURES/IMG_8970.webp', title: 'Project Photo', category: 'Residential' },
    { id: 110, src: '/HMPICTURES/IMG_8972.webp', title: 'Project Photo', category: 'Residential' },
    { id: 111, src: '/HMPICTURES/IMG_8980.webp', title: 'Project Photo', category: 'Residential' },
    { id: 112, src: '/HMPICTURES/IMG_8986.webp', title: 'Project Photo', category: 'Residential' },
    { id: 113, src: '/HMPICTURES/IMG_9164.webp', title: 'Kitchen Remodel', category: 'Kitchen Remodels' },
    { id: 114, src: '/HMPICTURES/IMG_9191.webp', title: 'Project Photo', category: 'Residential' },
    { id: 115, src: '/HMPICTURES/IMG_9365.webp', title: 'Project Photo', category: 'Residential' },
    { id: 116, src: '/HMPICTURES/IMG_9470.webp', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 117, src: '/HMPICTURES/IMG_9471.webp', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 118, src: '/HMPICTURES/IMG_9472.webp', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 119, src: '/HMPICTURES/IMG_9473.webp', title: 'Project Photo', category: 'Residential' },
    { id: 120, src: '/HMPICTURES/IMG_9770.webp', title: 'Project Photo', category: 'Residential' },
    { id: 124, src: '/HMPICTURES/IMG_9816.webp', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 126, src: '/HMPICTURES/IMG_9818.webp', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 127, src: '/HMPICTURES/IMG_9819.webp', title: 'Bathroom Remodel', category: 'Bathroom Remodels' },
    { id: 129, src: '/HMPICTURES/IMG_9924.webp', title: 'Indoor Fireplace', category: 'Indoor Fireplace' },
    { id: 130, src: '/HMPICTURES/IMG_9939.webp', title: 'Project Photo', category: 'Residential' },
  ];

  // Filter for ungrouped/other images
  const ungroupedImages = galleryImages.filter(img => img.category === 'Residential');

  // Get images for selected category (used for display and lightbox navigation)
  const currentCategoryImages = selectedCategory 
    ? (selectedCategory === 'Other Projects' ? ungroupedImages : galleryImages.filter(img => img.category === selectedCategory))
    : [];

  // Helper to get thumbnail path
  const getThumbnailPath = (src: string) => {
    const parts = src.split('/');
    let filename = parts.pop() || '';
    // PNG files were converted to JPG during compression
    if (filename.toLowerCase().endsWith('.png')) {
      filename = filename.slice(0, -4) + '.jpg';
    }
    return `${parts.join('/')}/thumbnails/${filename}`;
  };

  const openLightbox = (image: typeof galleryImages[0]) => {
    const index = currentCategoryImages.findIndex(img => img.id === image.id);
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % currentCategoryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + currentCategoryImages.length) % currentCategoryImages.length);
    }
  };

  return (
    <>
      <SEO
        title="Construction Gallery | Splash Mobile Detail | Phoenix Projects"
        description="View our construction project gallery in Phoenix, Arizona. See completed residential and commercial projects showcasing quality craftsmanship and beautiful results. Get inspired for your next project."
        keywords="Phoenix construction gallery, construction projects Phoenix, Phoenix construction photos, construction portfolio Phoenix, completed projects Phoenix"
        canonical="https://hmconstruction.com/gallery"
      />
      <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">GALLERY</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
            Phoenix Construction Project Gallery
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our completed projects showcasing quality craftsmanship, attention to detail, and beautiful results across residential and commercial construction.
          </p>
        </div>

        {/* Project Category Selector */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <p className="text-center text-sm text-gray-600 mb-4">Select a project to view:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Display selected category images */}
        {selectedCategory && selectedCategory !== 'Other Projects' && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-900 pb-2">{selectedCategory}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {galleryImages.filter(img => img.category === selectedCategory).map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                  onClick={() => openLightbox(image)}
                >
                  <div className="aspect-square overflow-hidden bg-gray-200">
                    <img 
                      src={getThumbnailPath(image.src)} 
                      alt={`${image.title} - Phoenix Construction Project`} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Other Projects */}
        {selectedCategory === 'Other Projects' && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-900 pb-2">Other Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {ungroupedImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                  onClick={() => openLightbox(image)}
                >
                  <div className="aspect-square overflow-hidden bg-gray-200">
                    <img 
                      src={getThumbnailPath(image.src)} 
                      alt={`${image.title} - Phoenix Construction Project`} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Show prompt when no category selected */}
        {!selectedCategory && (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <p className="text-gray-500 text-lg">Select a project category above to view images.</p>
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
                src={currentCategoryImages[selectedImage].src}
                alt={`${currentCategoryImages[selectedImage].title} - Phoenix Construction Project by Splash Mobile Detail`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Contact us today for a free estimate.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
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

