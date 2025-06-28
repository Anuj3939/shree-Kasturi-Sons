
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
