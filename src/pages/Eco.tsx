
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EcoComingSoon from '@/components/EcoComingSoon';

const Eco = () => {
  return (
    <div className="min-h-screen w-full bg-[#020617] relative">
      {/* Gold Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(251,191,36,0.4), transparent)`,
        }}
      />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-16">
          <EcoComingSoon />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Eco;
