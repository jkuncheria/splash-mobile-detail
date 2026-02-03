import React from 'react';
import AboutComponent from '../components/About';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Splash Mobile Detail | Denver Mobile Detailing"
        description="Learn about Splash Mobile Detail, Denver's trusted mobile detailing company. Professional auto detailing, ceramic coatings, PPF, and window tinting services."
        keywords="about Splash Mobile Detail, Denver mobile detailing, auto detailing Denver, ceramic coating Denver, PPF Denver"
        canonical="https://splashmobiledetail.com/about"
      />
      <AboutComponent />
    </>
  );
};

export default About;

