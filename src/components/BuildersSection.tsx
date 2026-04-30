
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const BuildersSection = () => {

  const projects = [
    {
      id: 1,
      name: 'Shri Tirupati Residency Ratlam ',
      type: 'Residential',
      status: 'Completed',
      image: '/lovable-uploads/IMG_8054.png',
      description: 'Premium residential complex with modern amenities and green spaces.'
    },
    {
      id: 2,
      name: 'Shri Kasturi Heights Khargone',
      type: 'Commercial',
      status: 'Completed ',
      image: '/lovable-uploads/IMG_8053.png',
      description: 'State-of-the-art commercial complex designed for modern businesses.'
    },
    {
      id: 3,
      name: 'Panchwati Colony Khargone',
      type: 'Residential',
      status: 'Completed',
      image: '/lovable-uploads/IMG_8054.png',
      description: 'Eco-friendly villas with private gardens and sustainable features.'
    },
    {
      id: 4,
      name: 'Barsana Colony Khargone',
      type: 'Residential',
      status: 'Completed',
      image: '/lovable-uploads/IMG_8055.png',
      description: 'Eco-friendly villas with private gardens and sustainable features.'
    },
    {
      id: 5,
      name: 'Silver Inn Ratlam',
      type: 'Residential',
      status: 'Completed',
      image: '/lovable-uploads/IMG_8056.png',
      description: 'Eco-friendly villas with private gardens and sustainable features.'
    },
    {
      id: 6,
      name: 'Veeramani Paradise',
      type: 'Residential',
      status: 'Completed',
      image: '/lovable-uploads/IMG_8057.png',
      description: 'Eco-friendly villas with private gardens and sustainable features.'
    },
    {
      id: 7,
      name: '40 More Completed Sites',
      type: 'Residential',
      status: 'Completed',
      image: '/lovable-uploads/IMG_8058.png',
      description: 'Eco-friendly villas with private gardens and sustainable features.'
    },
    {
      id: 8,
      name: 'Upcoming Sites',
    
      type: 'Residential & Commercial',
      status: 'Completed',
      image: '/lovable-uploads/51591265-10b5-4423-9dba-42bb5f86c2fc.jpeg',
      description: 'locations: Mumbai, Indore, Jhabua, Bhopal, Ratlam'
    },
  ];

  return (
    <section id="builders" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-vintage text-white mb-4">
            Builders & Colonizers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creating exceptional spaces that define modern living. Explore our portfolio of residential and commercial projects.
          </p>
        </div>

        {/* Portfolio */}
        <div className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-sm overflow-hidden shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {project.status}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-yellow-800 mb-2">{project.name}</h3>
                    <p className="text-yellow-700 mb-4">{project.description}</p>
                    <div className="space-y-2 text-sm text-yellow-700 mb-4">
                      <p><strong>Type:</strong> {project.type}</p>
                      {project.units && <p><strong>Units:</strong> {project.units}</p>}
                      {project.area && <p><strong>Area:</strong> {project.area}</p>}
                    </div>
                    <div className="flex gap-2">
                    
                    
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>

        {/* Services */}
        <div className="mt-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-sm shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-yellow-800">Design & Planning</h3>
                  <p className="text-yellow-700 text-sm">Comprehensive architectural design and project planning services.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-sm shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-yellow-800">Construction</h3>
                  <p className="text-yellow-700 text-sm">Quality construction with modern techniques and materials.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-sm shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-yellow-800">Interior Design</h3>
                  <p className="text-yellow-700 text-sm">Complete interior solutions for residential and commercial spaces.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-sm shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-yellow-800">Maintenance</h3>
                  <p className="text-yellow-700 text-sm">Ongoing maintenance and support services for all projects.</p>
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BuildersSection;
