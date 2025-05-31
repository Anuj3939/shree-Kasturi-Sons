
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const businessVerticals = [
    { name: 'Solar Installation', href: '#solar' },
    { name: 'Gold Jewelry', href: '#gold' },
    { name: 'Construction', href: '#builders' },
    { name: 'Restaurants', href: '#restaurants' },
    { name: 'Electronics', href: '#electronics' },
    { name: 'Eco Products', href: '#eco' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Unified Solutions
            </h3>
            <p className="text-gray-400 mb-4">
              Comprehensive business solutions across multiple industries with cutting-edge technology and exceptional service.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Business Verticals */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {businessVerticals.map((vertical) => (
                <li key={vertical.name}>
                  <a 
                    href={vertical.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {vertical.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Business District</p>
              <p>Corporate Plaza, City 110001</p>
              <p>Phone: +91 98765 00000</p>
              <p>Email: info@unifiedsolutions.com</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; 2024 Unified Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
