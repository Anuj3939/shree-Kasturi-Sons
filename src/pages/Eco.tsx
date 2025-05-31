
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EcoSection from '@/components/EcoSection';

const Eco = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <EcoSection />
      </div>
      <Footer />
    </div>
  );
};

export default Eco;
