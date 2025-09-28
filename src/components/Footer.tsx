
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Footer = () => {
  const businessVerticals = [
    { name: 'Solar Installation', href: '/solar' },
    { name: 'Gold Jewelry', href: '/gold' },
    { name: 'Construction', href: '/construction' },
    { name: 'Restaurants', href: '/restaurants' },
    { name: 'Electronics', href: '/electronics' },
    { name: 'Eco Products', href: '/eco' }
  ];

  return (
    <footer className="bg-brand-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/8a45c65e-34e6-4a22-9ead-4864adce1de8.png" 
                alt="Shree Kasturi & Son's Logo" 
                className="h-10 w-auto bg-white/90 rounded-full p-1"
              />
              <h3 className="text-2xl font-bold font-vintage text-brand-100">
                Shree Kasturi & Son's
              </h3>
            </div>
            <p className="text-brand-200 mb-4">
              Comprehensive business solutions across multiple industries with cutting-edge technology and exceptional service.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-brand-700 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-brand-700 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Business Verticals */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-100">Our Services</h4>
            <ul className="space-y-2">
              {businessVerticals.map((vertical) => (
                <li key={vertical.name}>
                  <Link 
                    to={vertical.href} 
                    className="text-brand-200 hover:text-white transition-colors"
                  >
                    {vertical.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-100">Quick Links</h4>
            <ul className="space-y-2 text-brand-200">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Career</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-100">Contact Info</h4>
            <div className="space-y-2 text-brand-200">
              <p>123 Business District</p>
              <p>Corporate Plaza, City 110001</p>
              <p>Phone: +91 98765 00000</p>
              <p>Email: info@shreekasturi.com</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-brand-800" />

        <div className="flex flex-col md:flex-row justify-between items-center text-brand-300">
          <p>&copy; {new Date().getFullYear()} Shree Kasturi & Son's. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
