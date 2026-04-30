
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Download, Leaf, Recycle } from 'lucide-react';

const EcoSection = () => {
  const products = [
    {
      id: 1,
      name: 'Biodegradable Granules',
      description: 'Eco-friendly granules for packaging applications',
      applications: ['Food packaging', 'Shopping bags', 'Agricultural films'],
      specifications: 'Compostable, Food-grade safe',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Compostable Bags',
      description: 'Fully compostable bags for various uses',
      applications: ['Grocery shopping', 'Waste collection', 'Industrial use'],
      specifications: 'ASTM D6400 certified',
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Agricultural Films',
      description: 'Biodegradable films for agricultural applications',
      applications: ['Mulching', 'Crop protection', 'Greenhouse covering'],
      specifications: 'UV stabilized, Biodegradable',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300&h=300&fit=crop'
    }
  ];

  const benefits = [
    {
      icon: <Leaf className="h-8 w-8 text-eco-600" />,
      title: 'Environmental Impact',
      description: 'Reduces plastic waste and carbon footprint significantly'
    },
    {
      icon: <Recycle className="h-8 w-8 text-eco-600" />,
      title: 'Fully Compostable',
      description: 'Breaks down naturally without harmful residues'
    },
    {
      icon: <div className="w-8 h-8 bg-eco-600 rounded-full flex items-center justify-center text-white text-sm font-bold">$</div>,
      title: 'Cost Effective',
      description: 'Competitive pricing with long-term environmental benefits'
    }
  ];

  return (
    <section id="eco" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Biodegradable Products
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading manufacturer of eco-friendly biodegradable granules and bags, contributing to a sustainable future.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-sm hover:shadow-xl transition-shadow shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-2 rounded-full shadow-lg">
                  <Leaf className="h-4 w-4" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-2">{product.name}</h3>
                <p className="text-yellow-700 mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, index) => (
                      <span key={index} className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-yellow-800 px-2 py-1 rounded text-sm border border-yellow-400/30">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-yellow-700 mb-4">
                  <strong>Specifications:</strong> {product.specifications}
                </p>

                <div className="flex gap-2">
                  <Button size="sm" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-lg flex-1">
                    Get Quote
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-yellow-400 text-yellow-700 hover:bg-yellow-50">
                    <Download className="h-4 w-4 mr-2" />
                    Specs
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-sm text-center shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-yellow-800 mb-2">{benefit.title}</h3>
                <p className="text-yellow-700">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote Form */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-sm shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-yellow-800">
                <Leaf className="h-6 w-6" />
                Request Bulk Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Company Name" />
                <Input placeholder="Contact Person" />
              </div>
              <Input placeholder="Email Address" />
              <Input placeholder="Phone Number" />
              <Input placeholder="Product Type" />
              <Input placeholder="Quantity Required" />
              <Textarea placeholder="Specific Requirements" rows={3} />
              <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-lg" size="lg">
                Submit Quote Request
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white shadow-2xl border border-yellow-400/30" style={{boxShadow: '0 0 30px rgba(251, 191, 36, 0.4), 0 0 60px rgba(251, 191, 36, 0.2)'}}>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Why Choose Our Products?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>100% biodegradable and compostable materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>International quality certifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>Competitive bulk pricing for large orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>Custom formulations available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-sm shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-4 text-yellow-800">Download Product Catalog</h3>
                <p className="text-yellow-700 mb-4">
                  Get detailed specifications and pricing information for all our eco-friendly products.
                </p>
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-lg">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF Catalog
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoSection;
