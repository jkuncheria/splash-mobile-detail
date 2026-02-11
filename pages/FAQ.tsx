import React from 'react';
import FAQComponent from '../components/FAQ';
import SEO from '../components/SEO';

const FAQ: React.FC = () => {
  return (
    <>
      <SEO
        title="FAQ | Splash Mobile Detail | Auto Detailing Questions Colorado"
        description="Frequently asked questions about Splash Mobile Detail services. We serve Denver to Castle Rock and Golden to Bennett - Denver, Arapahoe, Jefferson, Douglas, and Elbert Counties. Get answers about our auto detailing services, ceramic coatings, headlight restoration, pricing, and more."
        keywords="auto detailing FAQ, car detailing questions Parker CO, ceramic coating FAQ Colorado, headlight restoration questions, Castle Rock detailing, Arapahoe County car detailing"
        canonical="https://splashmobiledetail.com/faq"
      />
      <FAQComponent />
    </>
  );
};

export default FAQ;

