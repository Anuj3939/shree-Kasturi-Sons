
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Calendar } from 'lucide-react';

const RestaurantsSection = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(0);

  const restaurants = [
    {
      id: 1,
      name: 'Spice Garden',
      cuisine: 'Indian',
      location: 'Downtown Plaza',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop',
      specialties: ['Biryani', 'Curry', 'Tandoor'],
      hours: '11:00 AM - 11:00 PM',
      phone: '+91 98765 43210'
    },
    {
      id: 2,
      name: 'Ocean Breeze',
      cuisine: 'Seafood',
      location: 'Marina District',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&h=300&fit=crop',
      specialties: ['Fresh Fish', 'Prawns', 'Crab'],
      hours: '12:00 PM - 12:00 AM',
      phone: '+91 98765 43211'
    },
    {
      id: 3,
      name: 'Green Valley',
      cuisine: 'Continental',
      location: 'Business District',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop',
      specialties: ['Steaks', 'Pasta', 'Wine'],
      hours: '6:00 PM - 1:00 AM',
      phone: '+91 98765 43212'
    }
  ];

  const events = [
    {
      title: 'Wine Tasting Evening',
      restaurant: 'Green Valley',
      date: 'Dec 15, 2024',
      time: '7:00 PM'
    },
    {
      title: 'Live Music Night',
      restaurant: 'Ocean Breeze',
      date: 'Dec 18, 2024',
      time: '8:00 PM'
    },
    {
      title: 'Festival Special Menu',
      restaurant: 'Spice Garden',
      date: 'Dec 20, 2024',
      time: '6:00 PM'
    }
  ];

  return (
    <section id="restaurants" className="py-20 bg-gradient-to-br from-restaurant-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Restaurant Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our collection of fine dining establishments offering diverse cuisines and exceptional dining experiences.
          </p>
        </div>

        {/* Restaurant Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {restaurants.map((restaurant, index) => (
            <Card 
              key={restaurant.id} 
              className={`group hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 overflow-hidden cursor-pointer ${
                selectedRestaurant === index ? 'ring-2 ring-restaurant-500' : ''
              }`}
              onClick={() => setSelectedRestaurant(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-restaurant-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ⭐ {restaurant.rating}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{restaurant.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{restaurant.hours}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="bg-restaurant-100 text-restaurant-700">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-restaurant-600 hover:bg-restaurant-700 flex-1">
                    View Menu
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Book Table
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Events & Offers */}
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-restaurant-700">
                <Calendar className="h-6 w-6" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="border-l-4 border-restaurant-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.restaurant}</p>
                  <p className="text-sm text-restaurant-600 font-medium">{event.date} at {event.time}</p>
                </div>
              ))}
              <Button className="w-full bg-restaurant-600 hover:bg-restaurant-700">
                View All Events
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-restaurant-600 to-pink-600 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Loyalty Rewards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2">Premium Member Benefits</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 10% discount on all orders</li>
                  <li>• Priority table reservations</li>
                  <li>• Exclusive event invitations</li>
                  <li>• Birthday special offers</li>
                </ul>
              </div>
              <Button variant="secondary" className="w-full">
                Join Loyalty Program
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
