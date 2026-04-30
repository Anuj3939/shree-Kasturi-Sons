
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EcoComingSoon from '@/components/EcoComingSoon';

const Eco = () => {
  return (
    <div 
      className="min-h-screen w-full bg-[#020617]"
      style={{
        backgroundImage: `
          radial-gradient(circle 800px at 50% 0%, rgba(251,191,36,0.5), transparent 60%),
          radial-gradient(circle 600px at 50% 0%, rgba(251,191,36,0.4), transparent 50%),
          radial-gradient(circle 400px at 50% 0%, rgba(251,191,36,0.3), transparent 40%)
        `,
        backgroundAttachment: 'scroll'
      }}
    >
      <Navigation />
      <div className="pt-16">
        <EcoComingSoon />
      </div>
      <Footer />
    </div>
  );
};

export default Eco;
