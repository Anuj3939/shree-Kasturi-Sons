
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sun, Crown, Building, UtensilsCrossed, Zap, Leaf } from 'lucide-react';
import { InfiniteSlider } from '@/components/core/infinite-slider';

const BusinessVerticalsSlider = () => {
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
      description: 'Residential & commercial projects',
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
      title: 'Premium Foods & Catering',
      description: 'Multi-cuisine offerings with premium quality ingredients',
      icon: UtensilsCrossed,
      color: 'restaurant',
      link: '/foods'
    }
  ];

  return (
    <div className='flex flex-col md:flex-row h-[200px] md:h-[400px] space-y-6 md:space-y-0 md:space-x-8'>
      {/* Mobile: Single horizontal slider, Desktop: Two vertical sliders */}
      <div className="md:hidden w-full">
        <InfiniteSlider direction='horizontal' speed={20} className="w-full">
          {businessVerticals.map((vertical) => {
            const IconComponent = vertical.icon;
            return (
              <Link key={vertical.title} to={vertical.link} className="block">
                <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-md w-[200px] h-[180px] cursor-pointer hover:scale-105 shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
                  <CardHeader className="text-center pb-2">
                    <div className={`mx-auto w-10 h-10 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-lg`}>
                      <IconComponent className={`h-5 w-5 text-yellow-700`} />
                    </div>
                    <CardTitle className="text-sm text-yellow-800 font-vintage">{vertical.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-yellow-700 text-xs line-clamp-2">{vertical.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </InfiniteSlider>
      </div>
      
      {/* Desktop: Two vertical sliders */}
      <div className="hidden md:flex w-full space-x-8">
        <InfiniteSlider direction='vertical' speed={25} className="w-auto">
          {businessVerticals.map((vertical) => {
            const IconComponent = vertical.icon;
            return (
              <Link key={vertical.title} to={vertical.link} className="block">
                <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-md w-[280px] h-[180px] cursor-pointer hover:scale-105 shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
                  <CardHeader className="text-center pb-2">
                    <div className={`mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-lg`}>
                      <IconComponent className={`h-6 w-6 text-yellow-700`} />
                    </div>
                    <CardTitle className="text-lg text-yellow-800 font-vintage">{vertical.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-yellow-700 text-sm line-clamp-3">{vertical.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </InfiniteSlider>
        <InfiniteSlider direction='vertical' reverse speed={30} className="w-auto">
          {businessVerticals.map((vertical) => {
            const IconComponent = vertical.icon;
            return (
              <Link key={`reverse-${vertical.title}`} to={vertical.link} className="block">
                <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-md w-[280px] h-[180px] cursor-pointer hover:scale-105 shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
                  <CardHeader className="text-center pb-2">
                    <div className={`mx-auto w-12 h-12 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-lg`}>
                      <IconComponent className={`h-6 w-6 text-yellow-700`} />
                    </div>
                    <CardTitle className="text-lg text-yellow-800 font-vintage">{vertical.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-yellow-700 text-sm line-clamp-3">{vertical.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </InfiniteSlider>
      </div>
    </div>
  );
};

const Index = () => {

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
      <HeroSection />
    
      {/* Business Verticals Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-vintage text-white mb-4">
              Our Business Verticals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business solutions across multiple industries with cutting-edge technology and exceptional service.
            </p>
          </div>

          <div className="flex justify-center px-4">
            <BusinessVerticalsSlider />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
