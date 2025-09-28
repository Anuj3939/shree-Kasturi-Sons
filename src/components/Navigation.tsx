
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', color: 'brand' },
    { label: 'About', href: '/about', color: 'brand' },
    { label: 'Solar', href: '/solar', color: 'solar' },
    { label: 'Gold Jewelry', href: '/gold', color: 'gold' },
    { label: 'Construction', href: '/construction', color: 'builder' },
    { label: 'Restaurants', href: '/restaurants', color: 'restaurant' },
    { label: 'Electronics', href: '/electronics', color: 'electronics' },
    { label: 'Eco Products', href: '/eco', color: 'eco' },
    { label: 'Contact', href: '/contact', color: 'brand' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/8a45c65e-34e6-4a22-9ead-4864adce1de8.png" 
              alt="Shree Kasturi & Son's Logo" 
              className="h-10 w-auto"
            />
            <div className="text-xl font-bold font-vintage text-brand-800">
              Shree Kasturi & Son's
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === item.href 
                    ? `text-${item.color}-700 font-semibold` 
                    : `text-gray-700 hover:text-${item.color}-600`
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-${item.color}-600 transition-all ${
                  location.pathname === item.href ? 'w-full' : 'group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} className="text-brand-800" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-slide-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md w-full text-left transition-colors ${
                    location.pathname === item.href
                      ? `text-${item.color}-700 bg-${item.color}-50 font-semibold`
                      : `text-gray-700 hover:text-${item.color}-600 hover:bg-gray-50`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
