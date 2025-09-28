
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sun, Crown, Building, UtensilsCrossed, Zap, Leaf } from 'lucide-react';

const Index = () => {
  const businessVerticals = [
    {
      title: 'Solar Installation',
      description: 'Professional solar panel installation and energy solutions',
      icon: Sun,
      color: 'solar',
      link: '/solar'
    },
    {
      title: 'Gold Jewelry Wholesale',
      description: 'Premium gold jewelry collection for verified retailers',
      icon: Crown,
      color: 'gold',
      link: '/gold'
    },
    {
      title: 'Construction & Development',
      description: 'Residential and commercial construction projects',
      icon: Building,
      color: 'builder',
      link: '/construction'
    },
    {
      title: 'Restaurant Network',
      description: 'Fine dining establishments with diverse cuisines',
      icon: UtensilsCrossed,
      color: 'restaurant',
      link: '/restaurants'
    },
    {
      title: 'Electronics Distribution',
      description: 'Zonal distribution of electronic products and appliances',
      icon: Zap,
      color: 'electronics',
      link: '/electronics'
    },
    {
      title: 'Eco-Friendly Products',
      description: 'Biodegradable granules and sustainable packaging solutions',
      icon: Leaf,
      color: 'eco',
      link: '/eco'
    }
  ];

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
        <HeroSection />
      
      {/* Business Verticals Overview */}
      <section className="py-20 bg-transparent">{/* Transparent to show dark background */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-vintage text-white mb-4">
              Our Business Verticals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business solutions across multiple industries with cutting-edge technology and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessVerticals.map((vertical) => {
              const IconComponent = vertical.icon;
              return (
                <Card key={vertical.title} className="group hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20">{/* Dark card background */}
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-16 h-16 rounded-full bg-${vertical.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-8 w-8 text-${vertical.color}-600`} />
                    </div>
                    <CardTitle className="text-xl text-white font-vintage">{vertical.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 mb-6">{vertical.description}</p>
                    <Link to={vertical.link}>
                      <Button className={`bg-${vertical.color}-600 hover:bg-${vertical.color}-700 w-full`}>
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
