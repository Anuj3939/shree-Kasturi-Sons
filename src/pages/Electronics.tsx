
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ElectronicsSection from '@/components/ElectronicsSection';

const Electronics = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ElectronicsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Electronics;
