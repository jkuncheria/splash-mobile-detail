import React from 'react';
import Hero from '../components/Hero';
import ClientBanner from '../components/ClientBanner';
import Categories from '../components/Categories';
import Difference from '../components/Difference';
import AboutHome from '../components/AboutHome';
import Inspiration from '../components/Inspiration';
import Testimonials from '../components/Testimonials';
import OurStory from '../components/OurStory';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <ClientBanner /> */}
      <Categories />
      <AboutHome />
      <OurStory />

      {/* <Inspiration /> */}
      <Testimonials />
      <Contact simplified={true} />
      <Difference />
    </>
  );
};

export default Home;

