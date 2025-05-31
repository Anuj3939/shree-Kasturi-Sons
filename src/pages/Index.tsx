
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SolarSection from '@/components/SolarSection';
import GoldSection from '@/components/GoldSection';
import BuildersSection from '@/components/BuildersSection';
import RestaurantsSection from '@/components/RestaurantsSection';
import ElectronicsSection from '@/components/ElectronicsSection';
import EcoSection from '@/components/EcoSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SolarSection />
      <GoldSection />
      <BuildersSection />
      <RestaurantsSection />
      <ElectronicsSection />
      <EcoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
