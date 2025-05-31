
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BuildersSection from '@/components/BuildersSection';

const Construction = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <BuildersSection />
      </div>
      <Footer />
    </div>
  );
};

export default Construction;
