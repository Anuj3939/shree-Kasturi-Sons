
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Leaf, Clock, Mail, Bell } from 'lucide-react';

const EcoComingSoon = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-eco-50 to-green-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-eco-500 to-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <Leaf className="h-16 w-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Eco Products
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-eco-600 mb-8">
              Coming Soon
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We're working hard to bring you our revolutionary biodegradable granules and eco-friendly bag manufacturing solutions. 
              Get ready for sustainable packaging that makes a difference.
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-eco-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-eco-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">100% Biodegradable</h3>
                <p className="text-gray-600">Eco-friendly granules that break down naturally without harming the environment.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    B
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Bulk Manufacturing</h3>
                <p className="text-gray-600">Large-scale production capabilities for all your packaging needs.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    $
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cost Effective</h3>
                <p className="text-gray-600">Competitive pricing with long-term environmental and economic benefits.</p>
              </CardContent>
            </Card>
          </div>

          {/* Notify Me Form */}
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-eco-600 to-green-600 text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Bell className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Get Notified When We Launch</h3>
              </div>
              
              <p className="text-center opacity-90 mb-6">
                Be the first to know when our eco-friendly products become available. 
                Join our waiting list for exclusive early access and special pricing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input 
                    placeholder="Enter your email address" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
                  />
                </div>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="h-12 px-8 bg-white text-eco-600 hover:bg-gray-100"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Notify Me
                </Button>
              </div>
              
              <p className="text-center text-sm opacity-75 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>

          {/* Expected Launch */}
          <div className="mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Expected Launch</h4>
              <div className="text-3xl font-bold text-eco-600 mb-2">Q2 2024</div>
              <p className="text-gray-600">Stay tuned for our official launch announcement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoComingSoon;
