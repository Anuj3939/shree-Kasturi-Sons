
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, FileText, Calculator, Phone, Award } from 'lucide-react';

const SolarSection = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      // Simulate analysis result
      setTimeout(() => {
        setAnalysisResult({
          monthlyUsage: 450,
          recommendedSize: 6.5,
          estimatedCost: 25000,
          savings: 15000
        });
      }, 2000);
    }
  };

  return (
    <section id="solar" className="py-20 bg-transparent">{/* Transparent to show dark background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-vintage text-white mb-4">
            Solar Panel Installation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Upload your electricity bill and get instant recommendations for the perfect solar solution tailored to your energy needs.
          </p>
        </div>

        {/* Company Info */}
        <div className="mb-12">
          <Card className="bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white shadow-2xl border border-yellow-400/30" style={{boxShadow: '0 0 30px rgba(251, 191, 36, 0.4), 0 0 60px rgba(251, 191, 36, 0.2)'}}>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold font-vintage mb-4 flex items-center gap-2">
                    <Award className="h-6 w-6" />
                    Our Solar Expertise
                  </h3>
                  <p className="text-lg mb-4">
                    We provide end to end solution for the solar panel installation and after sales services Pan MP. 
                    Till now we have installed over 4000kw solar panel and still counting all over Madhya Pradesh region.
                  </p>
                </div>
                <div className="bg-white/20 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Contact Solar Manager
                  </h4>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">Ishitva Soni</p>
                    <p className="text-lg">📞 9977888098</p>
                    <p className="text-lg">address: '122, 1st floor, mechanic nagar, near new Bombay disposal, Indore, (452002)'</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
         

          {/* Benefits & Features */}
          <div className="grid md:grid-cols-2 gap-8 md:col-span-2 w-full">
            <Card className="h-full bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 shadow-2xl backdrop-blur-sm" style={{boxShadow: '0 0 25px rgba(251, 191, 36, 0.2), 0 0 50px rgba(251, 191, 36, 0.1)'}}>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">Why Choose Solar?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-yellow-800">Reduce Bills by 90%</strong>
                      <p className="text-yellow-700">Significantly lower your monthly electricity costs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-yellow-800">25-Year Warranty</strong>
                      <p className="text-yellow-700">Long-term protection for your investment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-yellow-800">Government Subsidies</strong>
                      <p className="text-yellow-700">Take advantage of available incentives</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 text-white shadow-2xl border border-yellow-400/30" style={{boxShadow: '0 0 30px rgba(251, 191, 36, 0.4), 0 0 60px rgba(251, 191, 36, 0.2)'}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Installation Process</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">1</div>
                    <span>Site survey and energy assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">2</div>
                    <span>Custom system design and approval</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">3</div>
                    <span>Professional installation (1-3 days)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">4</div>
                    <span>Grid connection and system activation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSection;
