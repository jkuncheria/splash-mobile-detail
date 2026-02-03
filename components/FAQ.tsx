import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'How quickly will you respond to my inquiry?',
          answer: 'We typically respond to all inquiries within 24 hours. For urgent matters or immediate assistance, please call us directly at (970) 618-6183. Our team is available to help with all your auto detailing needs.'
        },
        {
          question: 'Do you offer free estimates?',
          answer: 'Yes! We offer free, no-obligation estimates for all detailing services. Our experts will assess your vehicle, discuss your needs, and provide a detailed quote with transparent pricing. Schedule a consultation today to get started.'
        },
        {
          question: 'What areas do you serve?',
          answer: 'We serve the Denver Metro Area including Parker, Castle Rock, Bennett, Highlands Ranch, Lakewood, and surrounding communities. Our state-of-the-art facility is located in Parker, Colorado. Contact us to confirm if we service your specific area!'
        },
        {
          question: 'Do you still offer mobile detailing services?',
          answer: 'While we started as a mobile detailing company, we now primarily work out of our state-of-the-art 1,200 sq ft facility in Parker, CO. This allows us to provide better results in a controlled environment. However, we can accommodate mobile services for special circumstances – just ask!'
        }
      ]
    },
    {
      category: 'Services',
      questions: [
        {
          question: 'What detailing services do you offer?',
          answer: 'We offer comprehensive auto detailing services including interior detailing, exterior detailing, full details, ceramic coatings, paint correction, headlight restoration, clay bar treatments, steam cleaning, extraction, waxing, and more. Each service is tailored to meet your vehicle\'s specific needs.'
        },
        {
          question: 'What is a clay bar treatment?',
          answer: 'A clay bar treatment removes contaminants from your paint that washing alone can\'t remove – things like industrial fallout, brake dust, tree sap, and overspray. It leaves your paint smooth as glass and is the perfect prep before waxing or applying a ceramic coating.'
        },
        {
          question: 'What is ceramic coating?',
          answer: 'Ceramic coating is a liquid polymer that bonds to your vehicle\'s paint, creating a protective layer that repels water, dirt, and UV rays. It provides long-lasting protection (2-5+ years) and makes your car easier to clean while maintaining that showroom shine.'
        },
        {
          question: 'Can you restore faded headlights?',
          answer: 'Absolutely! Headlight restoration is one of our specialties. We can restore cloudy, yellowed, or oxidized headlights to like-new condition, improving both the appearance of your vehicle and your nighttime visibility for safer driving.'
        }
      ]
    },
    {
      category: 'Process & Timing',
      questions: [
        {
          question: 'How long does a full detail take?',
          answer: 'A full interior and exterior detail typically takes 3-5 hours depending on the size and condition of your vehicle. More intensive services like paint correction or ceramic coating may require a full day or even overnight. We\'ll give you an accurate time estimate when you book.'
        },
        {
          question: 'Do I need to make an appointment?',
          answer: 'Yes, we work by appointment to ensure we can dedicate the proper time and attention to your vehicle. Call us at (970) 618-6183 or use our contact form to schedule. We try to accommodate same-day appointments when possible.'
        },
        {
          question: 'What should I do to prepare my car?',
          answer: 'Just remove any personal belongings and valuables from your vehicle before your appointment. We\'ll take care of the rest! If there are any specific concerns or problem areas, let us know when you drop off so we can pay special attention to them.'
        },
        {
          question: 'Can I wait while my car is being detailed?',
          answer: 'You\'re welcome to wait at our Parker facility, though most customers prefer to drop off and pick up later. We\'ll call you when your vehicle is ready. For longer services, we can help arrange transportation if needed.'
        }
      ]
    },
    {
      category: 'Pricing',
      questions: [
        {
          question: 'How is pricing determined?',
          answer: 'Pricing is based on the size of your vehicle (sedan, SUV, truck, etc.), the services requested, and the current condition of your vehicle. We provide upfront, transparent pricing with no hidden fees. Contact us for a free estimate specific to your vehicle.'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No, we believe in transparent pricing. The quote we give you is the price you pay. If we discover additional work is needed during the detail, we\'ll contact you first to discuss and get approval before proceeding.'
        },
        {
          question: 'Do you offer any discounts or specials?',
          answer: 'Yes! We currently offer 50% off a clay treatment with the purchase of a full detail. We also offer loyalty discounts for returning customers. Follow us on Facebook and Yelp for the latest promotions and specials.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, all major credit cards, and digital payments. Payment is due upon completion of services and your satisfaction with the work.'
        }
      ]
    },
    {
      category: 'Quality & Satisfaction',
      questions: [
        {
          question: 'What makes Splash Mobile Detail different?',
          answer: 'With hundreds of 5-star reviews over 5+ years, our reputation speaks for itself. We only employ the best and most experienced detailers. Our state-of-the-art facility in Parker allows us to work in a controlled environment for consistent, exceptional results. Our professionalism, customer service, and integrity are second to none.'
        },
        {
          question: 'What if I\'m not satisfied with the results?',
          answer: 'Your satisfaction is our top priority. If you\'re not completely happy with any aspect of our work, let us know immediately and we\'ll make it right. We stand behind every detail we perform.'
        },
        {
          question: 'Do you offer any guarantees on ceramic coatings?',
          answer: 'Yes! Our ceramic coatings come with manufacturer warranties that vary based on the product and package selected. We\'ll explain all warranty details and provide documentation when your coating is applied.'
        },
        {
          question: 'How do I maintain my car after a detail?',
          answer: 'We\'ll provide you with care instructions specific to the services performed. Generally, we recommend regular washing (hand wash preferred), avoiding automatic car washes with harsh brushes, and scheduling maintenance details every few months to keep your vehicle looking its best.'
        }
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Flatten all FAQs for easier management
  const allFaqs = faqs.flatMap(category => category.questions);

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="font-bold tracking-wider text-sm uppercase" style={{ color: '#18AEE4' }}>FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
            Frequently Asked Questions
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our auto detailing services, process, and pricing. 
            Can't find what you're looking for? <Link to="/contact" className="font-semibold hover:underline" style={{ color: '#18AEE4' }}>Contact us</Link> and we'll be happy to help.
          </p>
        </div>

        {/* FAQ Categories */}
        {faqs.map((category, categoryIdx) => (
          <div key={categoryIdx} className="mb-16">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-xl mr-4" style={{ backgroundColor: '#e0f4fc' }}>
                <HelpCircle className="w-6 h-6" style={{ color: '#18AEE4' }} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{category.category}</h2>
            </div>
            
            <div className="space-y-4">
              {category.questions.map((faq, idx) => {
                const globalIndex = faqs.slice(0, categoryIdx).reduce((acc, cat) => acc + cat.questions.length, 0) + idx;
                return (
                  <div 
                    key={idx}
                    className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden transition-colors" style={{ borderColor: undefined }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#18AEE4'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                  >
                    <button
                      onClick={() => toggleFaq(globalIndex)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                      {openFaq === globalIndex ? (
                        <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#18AEE4' }} />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === globalIndex && (
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our auto detailing experts are here to help. Contact us today and we'll answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              style={{ backgroundColor: '#18AEE4' }}
            >
              Contact Us
            </Link>
            <a 
              href="tel:9706186183"
              className="border-2 hover:text-white font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
              style={{ borderColor: '#18AEE4', color: '#18AEE4' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#18AEE4'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#18AEE4'; }}
            >
              Call (970) 618-6183
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;

