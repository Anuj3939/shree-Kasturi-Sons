
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const BuildersSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Luxury Residences',
      type: 'Residential',
      status: 'Completed',
      units: 45,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop',
      description: 'Premium residential complex with modern amenities and green spaces.'
    },
    {
      id: 2,
      name: 'Business Park',
      type: 'Commercial',
      status: 'Ongoing',
      area: '2.5M sq ft',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop',
      description: 'State-of-the-art commercial complex designed for modern businesses.'
    },
    {
      id: 3,
      name: 'Garden Villas',
      type: 'Residential',
      status: 'Upcoming',
      units: 30,
      image: 'https://images.unsplash.com/photo-1516156008625-3a99312b8389?w=500&h=300&fit=crop',
      description: 'Eco-friendly villas with private gardens and sustainable features.'
    }
  ];

  return (
    <section id="builders" className="py-20 bg-gradient-to-br from-builder-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-vintage text-gray-900 mb-4">
            Builders & Colonizers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating exceptional spaces that define modern living. Explore our portfolio of residential and commercial projects.
          </p>
        </div>

        <Tabs defaultValue="portfolio" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="inquiry">Inquiry</TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-builder-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.status}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p><strong>Type:</strong> {project.type}</p>
                      {project.units && <p><strong>Units:</strong> {project.units}</p>}
                      {project.area && <p><strong>Area:</strong> {project.area}</p>}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-builder-600 hover:bg-builder-700 flex-1">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Floor Plans
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-builder-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-builder-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Design & Planning</h3>
                  <p className="text-gray-600 text-sm">Comprehensive architectural design and project planning services.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-builder-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-builder-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Construction</h3>
                  <p className="text-gray-600 text-sm">Quality construction with modern techniques and materials.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-builder-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-builder-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Interior Design</h3>
                  <p className="text-gray-600 text-sm">Complete interior solutions for residential and commercial spaces.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-builder-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-builder-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Maintenance</h3>
                  <p className="text-gray-600 text-sm">Ongoing maintenance and support services for all projects.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="inquiry" className="mt-8">
            <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Project Inquiry</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Phone Number" />
                </div>
                <Input placeholder="Email Address" />
                <Input placeholder="Project Type (Residential/Commercial)" />
                <Input placeholder="Budget Range" />
                <Textarea placeholder="Project Details and Requirements" rows={4} />
                <Button className="w-full bg-builder-600 hover:bg-builder-700" size="lg">
                  Submit Inquiry
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default BuildersSection;
