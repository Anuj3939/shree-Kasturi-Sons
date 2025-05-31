
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RestaurantsSection from '@/components/RestaurantsSection';

const Restaurants = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <RestaurantsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Restaurants;
