
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-50 via-white to-brand-100 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-brand-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/8a45c65e-34e6-4a22-9ead-4864adce1de8.png" 
            alt="Shree Kasturi & Son's Logo" 
            className="h-32 md:h-40 w-auto"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold font-vintage mb-6 text-brand-800 animate-fade-in">
          Shree Kasturi & Son's
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          From solar energy to gold jewelry, construction to restaurants – we provide comprehensive solutions across multiple industries with cutting-edge technology and exceptional service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Link to="/contact">
            <Button size="lg" className="bg-brand-700 hover:bg-brand-800 text-white text-lg px-8 py-3">
              Contact Us Today
            </Button>
          </Link>
          <Link to="#business-verticals">
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 border-brand-700 text-brand-700 hover:bg-brand-50">
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-700 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-700 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
