
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, History, Users, MapPin } from 'lucide-react';
import Timeline from './Timeline';

const AboutSection = () => {
  const founders = [
    {
      name: 'Mr. Chaturbhuj Agrawal',
      title: 'Founder',
      generation: 'First Generation',
      quote: 'I believe that a businessman must have multiple income sources. The number of income sources must be equivalent to the number of pockets a person has in their outfit. This way if any of the income sources get impacted by external forces it won\'t affect their life',
      image: '/lovable-uploads/chaturbhuj.JPG'
    }
  ];

  const leadership = [
    {
      name: 'Mr. Bal Mukund Agrawal',
      title: 'Chairman',
      generation: 'Second Generation',
      quote: 'I believe that in any kind of business, it\'s important to always keep your eyes and ears open. This way, you won\'t miss any opportunity to make a profit. However, not all information will be beneficial, and you may encounter losses. It\'s crucial to learn from these losses and avoid repeating the same mistake in the future.',
      image: '/lovable-uploads/balmukund.png'
    },
    {
      name: 'Mr. Banshi Agrawal',
      title: 'Managing Director',
      generation: 'Second Generation',
      quote: 'I follow the ideology that if, at the end of the day, I can\'t look into my own eyes in front of a mirror, then I may have wronged someone. I try apologizing to that person and ensuring I don\'t repeat the same mistake with anyone else.',
      image: '/lovable-uploads/banshi.JPG'
    },
    {
      name: 'Mr. Ansh Agrawal',
      title: 'Executive Director',
      generation: 'Third Generation',
      quote: 'I believe that business should be dynamic in nature to adapt to the ups and downs due to external or internal forces and business executives must have the capability to adapt the modern trend but must not forget about its roots and culture. Through this way, a business can grow exponentially.',
      image: '/lovable-uploads/ansh.JPG'
    }
  ];

  const businessHistory = [
    { year: '1998-2005', business: 'Coca-cola' },
    { year: 'since 2000', business: 'Idea' },
    { year: '2002-12', business: 'Nokia' },
    { year: '2005-09', business: 'Reliance Big TV'},
    { year: '2007-15', business: 'HUL' },
    { year: '2009-12', business: 'Tata DOCOMO' },
    { year: '2013-18', business: 'SPICE & INTEX Mobile' },
    { year: '2015-17', business: 'JIO' },
    { year: '2017-19', business: 'Micromax' },
    { year: '2018-24', business: 'Oppo' }
  ];

  const currentBusinesses = [
    'Smartphones and Consumer Eletronics (Pan M.P.)',
    'VI Distribution',
    'Solar Panel Installation',
    'Gold Jewelry Wholesale',
    'Manufacturing unit (oil and cotton industry)',
    'Builder & colonizer',
    'Shree Kasturi Foods',
  ];

  const officeAddresses = [
    {
      location: 'Indore Office',
      address: '707, Pukhraj Corporate, Indore (452002)'
    },
    {
      location: 'Indore Office',
      address: '122, 1st floor, mechanic nagar, near new Bombay disposal, Indore, (452002)'
    },
    {
      location: 'Khargone Office',
      address: 'Shree Kasturi Complex, Radha Walabh Market, Khargone (451001)'
    },
    {
      location: 'Ratlam Office',
      address: 'Tirupati Residency, Do baati choraha, Ratlam (457001)'
    },

    {
      location: 'Bhopal Office',
      address: '1A, B32-35, Sector B Industrial area govindpura, Bhopal (462023)'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-vintage text-white mb-4">
            About Shree Kasturi & Son's
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A legacy of business excellence spanning three generations, built on trust, innovation, and diverse market expertise.
          </p>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-vintage text-center mb-12 text-brand-800">Our Founder</h2>
          {founders.map((founder, index) => (
            <Card key={index} className="max-w-6xl mx-auto bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-white shadow-2xl border border-yellow-300/30" style={{boxShadow: '0 0 30px rgba(251, 191, 36, 0.3), 0 0 60px rgba(251, 191, 36, 0.1)'}}>
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
                    <div className="aspect-square bg-white/20 rounded-full border-4 border-white/30 overflow-hidden shadow-xl" style={{boxShadow: '0 0 25px rgba(251, 191, 36, 0.35)'}}>
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
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
              <Card key={index} className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 shadow-2xl backdrop-blur-sm" style={{boxShadow: '0 0 25px rgba(251, 191, 36, 0.2), 0 0 50px rgba(251, 191, 36, 0.1)'}}>
                <CardContent className="p-8">
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold font-vintage text-yellow-800 mb-2">{leader.name}</h3>
                      <p className="text-yellow-700 mb-4">{leader.title} - {leader.generation}</p>
                      <blockquote className="text-yellow-800 italic leading-relaxed">
                        "{leader.quote}"
                      </blockquote>
                    </div>
                    <div className="lg:w-64 w-48">
                      <div className="aspect-square bg-white rounded-full border-4 border-yellow-300/50 overflow-hidden shadow-xl" style={{boxShadow: '0 0 20px rgba(251, 191, 36, 0.25)'}}>
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Business History Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-vintage text-white mb-4 flex items-center justify-center gap-2">
              <History className="h-8 w-8" />
              Distribution Business History
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto">
              Our journey through decades of business excellence, one milestone at a time.
            </p>
          </div>
          <Timeline items={businessHistory} />
        </div>

        {/* Current Businesses */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white shadow-2xl border border-yellow-400/30" style={{boxShadow: '0 0 30px rgba(251, 191, 36, 0.4), 0 0 60px rgba(251, 191, 36, 0.2)'}}>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Building className="h-6 w-6" />
                Current Business Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent>
             
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
          <Card className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 shadow-2xl backdrop-blur-sm" style={{boxShadow: '0 0 25px rgba(251, 191, 36, 0.2), 0 0 50px rgba(251, 191, 36, 0.1)'}}>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-yellow-800">
                <MapPin className="h-6 w-6" />
                Office Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {officeAddresses.map((office, index) => (
                  <div key={index} className="bg-gradient-to-br from-yellow-200 to-yellow-300 p-4 rounded-lg border border-yellow-400/30 shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
                    <h4 className="font-bold text-yellow-800 mb-2">{office.location}</h4>
                    <p className="text-yellow-700">{office.address}</p>
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
