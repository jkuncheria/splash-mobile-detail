import React from 'react';
import FAQComponent from '../components/FAQ';
import SEO from '../components/SEO';

const FAQ: React.FC = () => {
  return (
    <>
      <SEO
        title="FAQ | Splash Mobile Detail | Auto Detailing Questions Denver"
        description="Frequently asked questions about Splash Mobile Detail services in Denver and Parker, Colorado. Get answers about our auto detailing services, ceramic coatings, headlight restoration, pricing, and more."
        keywords="auto detailing FAQ, car detailing questions Denver, ceramic coating FAQ, headlight restoration questions, Parker CO detailing"
        canonical="https://splashmobiledetail.com/faq"
      />
      <FAQComponent />
    </>
  );
};

export default FAQ;

