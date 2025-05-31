
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Download, MapPin } from 'lucide-react';

const ElectronicsSection = () => {
  const [selectedZone, setSelectedZone] = useState('all');

  const products = [
    {
      id: 1,
      name: 'LED Light Panels',
      category: 'Lighting',
      zones: ['North', 'South'],
      specifications: '50W, 220V',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Power Cables',
      category: 'Cables',
      zones: ['East', 'West'],
      specifications: '2.5mm, Copper',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Smart Switches',
      category: 'Switches',
      zones: ['North', 'Central'],
      specifications: 'WiFi Enabled',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop'
    }
  ];

  const zones = [
    { name: 'North Zone', contact: '+91 98765 11111', area: 'Delhi, Punjab, Haryana' },
    { name: 'South Zone', contact: '+91 98765 22222', area: 'Chennai, Bangalore, Hyderabad' },
    { name: 'East Zone', contact: '+91 98765 33333', area: 'Kolkata, Bhubaneswar' },
    { name: 'West Zone', contact: '+91 98765 44444', area: 'Mumbai, Pune, Ahmedabad' },
    { name: 'Central Zone', contact: '+91 98765 55555', area: 'Bhopal, Indore, Nagpur' }
  ];

  return (
    <section id="electronics" className="py-20 bg-gradient-to-br from-electronics-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Zonal Electronic Distribution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive electronics distribution network covering LEDs, appliances, cables, and more across multiple zones.
          </p>
        </div>

        {/* Product Catalog */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-900">Product Catalog</h3>
            <div className="flex gap-4">
              <Select value={selectedZone} onValueChange={setSelectedZone}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select Zone" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Zones</SelectItem>
                  <SelectItem value="North">North Zone</SelectItem>
                  <SelectItem value="South">South Zone</SelectItem>
                  <SelectItem value="East">East Zone</SelectItem>
                  <SelectItem value="West">West Zone</SelectItem>
                  <SelectItem value="Central">Central Zone</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-electronics-600 hover:bg-electronics-700">
                <Download className="h-4 w-4 mr-2" />
                Catalog PDF
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="bg-white/90 backdrop-blur-sm border-0 hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-electronics-500 text-white px-2 py-1 rounded text-xs">
                    {product.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3">{product.specifications}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.zones.map((zone) => (
                      <span key={zone} className="bg-electronics-100 text-electronics-700 px-2 py-1 rounded text-xs">
                        {zone}
                      </span>
                    ))}
                  </div>
                  <Button size="sm" className="w-full bg-electronics-600 hover:bg-electronics-700">
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Zonal Contacts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Zonal Contacts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-electronics-700 mb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {zone.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">{zone.area}</p>
                  <p className="text-electronics-600 font-medium">{zone.contact}</p>
                  <Button size="sm" variant="outline" className="mt-3 w-full">
                    Contact Distributor
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dealer Registration */}
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-electronics-600 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Become a Dealer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center opacity-90">
              Join our extensive dealer network and grow your business with our premium electronic products.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Business Name" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
              <Input placeholder="Contact Person" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
            </div>
            <Input placeholder="Phone Number" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
            <Input placeholder="Business Address" className="bg-white/20 border-white/30 text-white placeholder:text-white/70" />
            <Button variant="secondary" className="w-full" size="lg">
              Submit Application
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ElectronicsSection;
