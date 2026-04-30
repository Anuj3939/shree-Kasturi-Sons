
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Calendar, Phone, Utensils } from 'lucide-react';

const RestaurantsSection = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(0);

  const restaurants = [
    {
      id: 1,
      name: 'Hotel Shree Kasturi',
      cuisine: 'Multi-Cuisine',
      location: 'Madhya Pradesh',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop',
      specialties: ['Traditional Indian', 'Chinese', 'Continental'],
      hours: '11:00 AM - 11:00 PM',
      phone: '8821860747',
      description: 'This is our first line of business and we were in restaurant industry since 1990. We provide variety of cuisine and good quality food in our restaurant.',
      established: '1990'
    }
  ];

  const events = [
    {
      title: 'Traditional Food Festival',
      restaurant: 'Hotel Shree Kasturi',
      date: 'Dec 15, 2024',
      time: '7:00 PM'
    },
    {
      title: 'Family Dinner Special',
      restaurant: 'Hotel Shree Kasturi',
      date: 'Dec 18, 2024',
      time: '6:00 PM'
    },
    {
      title: 'Weekend Buffet',
      restaurant: 'Hotel Shree Kasturi',
      date: 'Dec 20, 2024',
      time: '12:00 PM'
    }
  ];

  return (
    <section id="restaurants" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-vintage text-white mb-4">
            Restaurant Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our heritage restaurant business offering diverse cuisines and exceptional dining experiences since 1990.
          </p>
        </div>

        {/* Restaurant Heritage */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white shadow-2xl border border-yellow-400/30" style={{boxShadow: '0 0 30px rgba(251, 191, 36, 0.4), 0 0 60px rgba(251, 191, 36, 0.2)'}}>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold font-vintage mb-4 flex items-center gap-2">
                    <Utensils className="h-6 w-6" />
                    Our Restaurant Legacy
                  </h3>
                  <p className="text-lg mb-4">
                    This is our first line of business and we were in restaurant industry since 1990. 
                    We provide variety of cuisine and good quality food in our restaurant.
                  </p>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="text-sm opacity-90 mb-1">Established</p>
                    <p className="text-2xl font-bold">1990</p>
                    <p className="text-sm mt-2">Over 30+ years of culinary excellence</p>
                  </div>
                </div>
                <div className="bg-white/20 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Restaurant Contact
                  </h4>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">Hotel Shree Kasturi</p>
                    <p className="text-lg">📞 8821860747</p>
                    <p className="text-lg">address: Hotel Shri Kasturi radha vallabh market khargone (451001)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Restaurant Cards */}
        <div className="grid md:grid-cols-1 gap-8 mb-16 max-w-4xl mx-auto">
          {restaurants.map((restaurant, index) => (
            <Card 
              key={restaurant.id} 
              className={`group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-sm overflow-hidden shadow-lg ${
                selectedRestaurant === index ? 'ring-2 ring-yellow-500' : ''
              }`}
              style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}
              onClick={() => setSelectedRestaurant(index)}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    ⭐ {restaurant.rating}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-yellow-800 mb-2">{restaurant.name}</h3>
                  <p className="text-yellow-700 mb-4">{restaurant.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-yellow-700">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{restaurant.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-yellow-700">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{restaurant.hours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-yellow-700">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">{restaurant.phone}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {restaurant.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-yellow-800 border border-yellow-400/30">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  
                
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Events & Offers */}
       
      </div>
    </section>
  );
};

export default RestaurantsSection;
