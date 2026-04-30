
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-vintage text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your project? Contact us today and let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
        

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-sm shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-yellow-800">
                  <MapPin className="h-5 w-5 text-yellow-600" />
                  Our Locations
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-yellow-800">Head Office</h4>
                    <p className="text-yellow-700">122, 1st floor, mechanic nagar, near new Bombay disposal, Indore, (452002)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-800">Regional Office</h4>
                    <p className="text-yellow-700">Shree Kasturi Complex, Radha Walabh Market, Khargone (451001)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-sm shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-yellow-800">
                  <Phone className="h-5 w-5 text-yellow-600" />
                  Contact Numbers
                </h3>
                <div className="space-y-2">
                  <p className="text-yellow-700">+91 9108493990</p>
                  <p className="text-yellow-700">+91 9977552000</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 backdrop-blur-sm shadow-lg" style={{boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)'}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-yellow-800">
                  <Mail className="h-5 w-5 text-yellow-600" />
                  Email Addresses
                </h3>
                <div className="space-y-2">
                  <p className="text-yellow-700">shreekasturisons@gmail.com</p>
                </div>
              </CardContent>
            </Card>

           
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white shadow-2xl border border-yellow-400/30" style={{boxShadow: '0 0 30px rgba(251, 191, 36, 0.4), 0 0 60px rgba(251, 191, 36, 0.2)'}}>
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6 opacity-90">
              Subscribe to our newsletter for the latest updates, offers, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" className="whitespace-nowrap bg-white/20 hover:bg-white/30 text-white border-white/30" >
              <link rel="stylesheet" href="/" />
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
