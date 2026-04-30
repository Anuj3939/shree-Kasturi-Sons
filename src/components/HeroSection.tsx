
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/8a45c65e-34e6-4a22-9ead-4864adce1de8.png" 
            alt="Shree Kasturi & Son's Logo" 
            className="h-40 md:h-48 w-auto animate-wobble"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold font-vintage mb-6 text-white animate-fade-in">
          Shree Kasturi & Son's
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          From solar energy to gold jewelry, construction to restaurants – we provide comprehensive solutions across multiple industries with cutting-edge technology and exceptional service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Link to="/contact">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-8 py-3">
              Contact Us Today
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white text-lg px-8 py-3">
              Explore Our Services
            </Button>
          </Link>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
