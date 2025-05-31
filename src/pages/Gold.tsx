
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GoldSection from '@/components/GoldSection';

const Gold = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <GoldSection />
      </div>
      <Footer />
    </div>
  );
};

export default Gold;
