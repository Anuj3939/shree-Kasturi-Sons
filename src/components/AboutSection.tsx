
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, History, Users, MapPin } from 'lucide-react';

const AboutSection = () => {
  const founders = [
    {
      name: 'Mr. Chaturbhuj Agrawal',
      title: 'Founder',
      generation: 'First Generation',
      quote: 'I believe that a businessman must have multiple income sources. The number of income sources must be equivalent to the number of pockets a person has in their outfit. This way if any of the income sources get impacted by external forces it won\'t affect their life',
      image: '/lovable-uploads/a8c572e1-5b24-47e8-af65-02afd18750c9.png'
    }
  ];

  const leadership = [
    {
      name: 'Mr. Bal Mukund Agrawal',
      title: 'Chairman',
      generation: 'Second Generation',
      quote: 'I believe that in any kind of business, it\'s important to always keep your eyes and ears open. This way, you won\'t miss any opportunity to make a profit. However, not all information will be beneficial, and you may encounter losses. It\'s crucial to learn from these losses and avoid repeating the same mistake in the future.',
      image: '/lovable-uploads/19f6be25-2c7b-4b20-8fcb-b59dc672b9fd.png'
    },
    {
      name: 'Mr. Banshi Agrawal',
      title: 'Managing Director',
      generation: 'Second Generation',
      quote: 'I follow the ideology that if, at the end of the day, I can\'t look into my own eyes in front of a mirror, then I may have wronged someone. I try apologizing to that person and ensuring I don\'t repeat the same mistake with anyone else.',
      image: '/lovable-uploads/19f6be25-2c7b-4b20-8fcb-b59dc672b9fd.png'
    },
    {
      name: 'Mr. Ansh Agrawal',
      title: 'Executive Director',
      generation: 'Third Generation',
      quote: 'I believe that business should be dynamic in nature to adapt to the ups and downs due to external or internal forces and business executives must have the capability to adapt the modern trend but must not forget about its roots and culture. Through this way, a business can grow exponentially.',
      image: '/lovable-uploads/9da81141-20c2-4175-8dec-d120d47913af.png'
    }
  ];

  const businessHistory = [
    { year: '1998-2005', business: 'Coca-cola', turnover: '1 cr/year' },
    { year: 'since 2000', business: 'Idea', turnover: '9 cr/year' },
    { year: '2002-12', business: 'Nokia', turnover: '50 cr/year' },
    { year: '2005-09', business: 'Reliance Big TV', turnover: '3 cr/year' },
    { year: '2007-15', business: 'HUL', turnover: '25 cr/year' },
    { year: '2009-12', business: 'Tata DOCOMO', turnover: '1 cr/year' },
    { year: '2013-18', business: 'SPICE & INTEX Mobile', turnover: '9 cr/year' },
    { year: '2015-17', business: 'JIO', turnover: '10 cr/year' },
    { year: '2017-19', business: 'Micromax', turnover: '10 cr/year' },
    { year: '2018-24', business: 'Oppo', turnover: '72 cr/year' }
  ];

  const currentBusinesses = [
    'XIAOMI Distribution (Bhopal region)',
    'Samsung Distribution (Khargone & Indore)',
    'Realme Distribution',
    'VI Distribution',
    'Blynk Distribution',
    'Ambrane Distribution',
    'Solar Panel Installation',
    'Gold Jewelry Wholesale',
    'Manufacturing unit (oil and cotton industry)',
    'Builder & colonizer'
  ];

  const officeAddresses = [
    {
      location: 'Indore Office',
      address: '707, Pukhraj Corporate, Indore (452002)'
    },
    {
      location: 'Indore Warehouse',
      address: '122, 1st floor, mechanic nagar, near new Bombay disposal, Indore, (452002)'
    },
    {
      location: 'Khargone Office',
      address: 'Shree Kasturi Complex, Radha Walabh Market, Khargone (451001)'
    },
    {
      location: 'Ratlam Office',
      address: 'Tirupati Residency, Do baati choraha, Ratlam (457001)'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-vintage text-gray-900 mb-4">
            About Shree Kasturi & Son's
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A legacy of business excellence spanning three generations, built on trust, innovation, and diverse market expertise.
          </p>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-vintage text-center mb-12 text-brand-800">Our Founder</h2>
          {founders.map((founder, index) => (
            <Card key={index} className="max-w-6xl mx-auto bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-vintage mb-2">{founder.name}</h3>
                    <p className="text-lg opacity-90 mb-4">{founder.title} - {founder.generation}</p>
                    <blockquote className="text-lg italic leading-relaxed">
                      "{founder.quote}"
                    </blockquote>
                  </div>
                  <div className="lg:w-80 w-64">
                    <div className="aspect-square bg-white/20 rounded-full border-4 border-white/30 flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center text-white/60">
                        <Users size={80} />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-vintage text-center mb-12 text-brand-800">Leadership Team</h2>
          <div className="space-y-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-vintage text-brand-700 mb-2">{leader.name}</h3>
                      <p className="text-brand-600 mb-4">{leader.title} - {leader.generation}</p>
                      <blockquote className="text-gray-700 italic leading-relaxed">
                        "{leader.quote}"
                      </blockquote>
                    </div>
                    <div className="lg:w-64 w-48">
                      <div className="aspect-square bg-brand-100 rounded-full border-4 border-brand-200 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-brand-50 rounded-full flex items-center justify-center text-brand-400">
                          <Users size={60} />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Business History */}
        <div className="mb-16">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-brand-700">
                <History className="h-6 w-6" />
                Distribution Business History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {businessHistory.map((business, index) => (
                  <div key={index} className="bg-orange-100 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-800">{business.business}</h4>
                    <p className="text-sm text-orange-700">Year: {business.year}</p>
                    <p className="text-sm text-orange-600">Turnover: {business.turnover}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Businesses */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-brand-600 to-orange-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Building className="h-6 w-6" />
                Current Business Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-lg font-semibold">Total Annual Turnover: 557.4 cr/year</p>
              <div className="grid md:grid-cols-2 gap-2">
                {currentBusinesses.map((business, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>{business}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Office Addresses */}
        <div>
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-brand-700">
                <MapPin className="h-6 w-6" />
                Office Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {officeAddresses.map((office, index) => (
                  <div key={index} className="bg-brand-50 p-4 rounded-lg">
                    <h4 className="font-bold text-brand-800 mb-2">{office.location}</h4>
                    <p className="text-gray-700">{office.address}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
