
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Phone, Store } from 'lucide-react';

const GoldSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: 'Traditional Necklace Set',
      category: 'necklaces',
      purity: '22K',
      weight: '45g',
      price: 'Request Quote',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Diamond Earrings',
      category: 'earrings',
      purity: '18K',
      weight: '12g',
      price: 'Request Quote',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Gold Bangles',
      category: 'bangles',
      purity: '22K',
      weight: '35g',
      price: 'Request Quote',
      image: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=300&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Wedding Ring Set',
      category: 'rings',
      purity: '18K',
      weight: '8g',
      price: 'Request Quote',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop'
    }
  ];

  const filteredProducts = products.filter(product => 
    (selectedCategory === 'all' || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="gold" className="py-20 bg-gradient-to-br from-gold-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-vintage text-gray-900 mb-4">
            Gold Jewelry Wholesale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exclusive collection for verified retailers. Browse our premium catalog and request bulk pricing for your business needs.
          </p>
        </div>

        {/* Business Info */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-gold-600 to-yellow-600 text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold font-vintage mb-4 flex items-center gap-2">
                    <Store className="h-6 w-6" />
                    Shree Kasturi Jewelers
                  </h3>
                  <p className="text-lg mb-4">
                    We deal in all kind of gold fashion jewelry such as bangles, necklace, ear rings, etc. 
                    We provide all kind of jewelry to the local jewelry shops and provide them huge variety of products.
                  </p>
                </div>
                <div className="bg-white/20 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Contact Manager
                  </h4>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">Monty Mahajan</p>
                    <p className="text-lg">📞 8898972222</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search jewelry..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="necklaces">Necklaces</SelectItem>
                  <SelectItem value="earrings">Earrings</SelectItem>
                  <SelectItem value="bangles">Bangles</SelectItem>
                  <SelectItem value="rings">Rings</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-gold-600 hover:bg-gold-700">
              Request Retailer Access
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gold-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  {product.purity}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p><strong>Purity:</strong> {product.purity}</p>
                  <p><strong>Weight:</strong> {product.weight}</p>
                  <p><strong>Category:</strong> {product.category}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gold-600">{product.price}</span>
                  <Button size="sm" className="bg-gold-600 hover:bg-gold-700">
                    Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Retailer Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-gold-600 to-yellow-600 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Wholesale Pricing</h3>
              <p>Get the best rates in the market with our volume-based pricing structure.</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Quality Guarantee</h3>
              <p>All products come with authenticity certificates and quality assurance.</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Fast Delivery</h3>
              <p>Quick and secure delivery to your location with tracking support.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GoldSection;
