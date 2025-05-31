
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SolarSection from '@/components/SolarSection';

const Solar = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <SolarSection />
      </div>
      <Footer />
    </div>
  );
};

export default Solar;
