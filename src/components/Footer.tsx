
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
    { name: 'Foods', href: '/foods' }
  ];

  return (
    <footer className="bg-black/60 backdrop-blur-md text-white border-t border-white/10">{/* Dark footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Shree Kasturi & Son's Logo" 
                className="h-10 w-auto bg-white/90 rounded-full p-1"
              />
              <h3 className="text-2xl font-bold font-vintage text-white">
                Shree Kasturi & Son's
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Leading business conglomerate providing comprehensive solutions across multiple industries.
            </p>
           
          </div>

          {/* Business Verticals */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              {businessVerticals.map((vertical) => (
                <li key={vertical.name}>
                  <Link 
                    to={vertical.href} 
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {vertical.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
             
              <li><Link to="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link></li>
             
              
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>122, 1st floor, mechanic nagar, near new Bombay disposal, Indore, (452002)</p>
              <p>Phone: +91 6262633990</p>
              <p>Email: info@shreekasturiandsons.com</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shree Kasturi & Son's. All rights reserved.</p>
           <p>Developed by{" "} <a href="https://anuj02003.netlify.app/" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
                 Anuj Agrawal
                    </a>
                     </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-yellow-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
