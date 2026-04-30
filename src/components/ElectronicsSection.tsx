
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Download, MapPin, Phone, Building } from 'lucide-react';

const ElectronicsSection = () => {
  const [selectedZone, setSelectedZone] = useState('all');

  const products = [
    {
      id: 1,
      name: 'XIAOMI Smartphones',
      category: 'Mobile',
      zones: ['Bhopal', 'MP'],
      specifications: 'Latest Models Available',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Samsung Electronics',
      category: 'Consumer Electronics',
      zones: ['Bhopal', 'Khargone', 'Indore'],
      specifications: 'TV, Refrigerator, etc.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Kastrex (Consumer Electronics) ',
      category: 'Commercial',
      zones: ['MP'],
      specifications: 'All Consumer Electronics',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop'
    }
  ];

  const managers = [
    {
      brand: 'XIAOMI',
      name: 'Ketan Banka',
      contact: '99775520000',
      region: 'Madhya Pradesh Zonal Distribution'
    },
    {
      brand: 'Samsung',
      name: 'Krishna Nayar',
      contact: '9826470938',
      region: 'Bhopal Region Distribution'
    },
    {
      brand: 'Kastrex',
      name: 'Krishna Nayar',
      contact: '9826470938',
      region: 'Pan India Consumer Electronics'
    }
  ];

  return (
    <section id="electronics" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-vintage text-white mb-4">
            Zonal Electronic Distribution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive electronics distribution network covering smartphones, consumer electronics, and commercial equipment across Madhya Pradesh.
          </p>
        </div>

        {/* Business Info */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white shadow-2xl border border-yellow-400/30" style={{boxShadow: '0 0 30px rgba(251, 191, 36, 0.4), 0 0 60px rgba(251, 191, 36, 0.2)'}}>
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-vintage mb-4 flex items-center gap-2">
                  <Building className="h-6 w-6" />
                  Zonal Electronic Distribution
                </h3>
                <p className="text-lg mb-4">
                  We deal in electronic distribution of consumer electronics which includes smartphones, Television, Refrigerator, etc and also commercial electronics such as commercial refrigerator and all the other electronic product needed in hotel and restaurant industry for the entire MP. Major Brand we deal in is XIAOMI Madhya Pradesh zonal distribution and SAMSUNG Consumer electronic Bhopal region distribution.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {managers.map((manager, index) => (
                  <div key={index} className="bg-white/20 p-4 rounded-lg">
                    <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {manager.brand} Manager
                    </h4>
                    <p className="font-semibold">{manager.name}</p>
                    <p className="text-sm opacity-90 mb-2">{manager.region}</p>
                    <p className="font-mono">📞 {manager.contact}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Catalog */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
            <h3 className="text-2xl font-bold text-yellow-800">Product Catalog</h3>
            <div className="flex gap-4">
              <Select value={selectedZone} onValueChange={setSelectedZone}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select Zone" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Zones</SelectItem>
                  <SelectItem value="Bhopal">Bhopal</SelectItem>
                  <SelectItem value="Khargone">Khargone</SelectItem>
                  <SelectItem value="Indore">Indore</SelectItem>
                  <SelectItem value="MP">Madhya Pradesh</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-lg">
                <Download className="h-4 w-4 mr-2" />
                Catalog PDF
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-sm hover:shadow-lg transition-shadow shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-2 py-1 rounded text-xs shadow-lg">
                    {product.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-yellow-800 mb-2">{product.name}</h3>
                  <p className="text-yellow-700 mb-3">{product.specifications}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.zones.map((zone) => (
                      <span key={zone} className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-yellow-800 px-2 py-1 rounded text-xs border border-yellow-400/30">
                        {zone}
                      </span>
                    ))}
                  </div>
                 
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dealer Registration */}
        
      </div>
    </section>
  );
};

export default ElectronicsSection;
