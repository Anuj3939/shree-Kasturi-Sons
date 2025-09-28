
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
    <section id="solar" className="py-20 bg-gradient-to-br from-solar-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-vintage text-gray-900 mb-4">
            Solar Panel Installation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your electricity bill and get instant recommendations for the perfect solar solution tailored to your energy needs.
          </p>
        </div>

        {/* Company Info */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-solar-600 to-orange-600 text-white">
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
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Upload Interface */}
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-solar-700">
                <Upload className="h-6 w-6" />
                Bill Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-solar-300 rounded-lg p-8 text-center hover:border-solar-500 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="bill-upload"
                />
                <label htmlFor="bill-upload" className="cursor-pointer">
                  <FileText className="h-12 w-12 text-solar-500 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    Upload Your Electricity Bill
                  </p>
                  <p className="text-gray-500">
                    PDF, PNG, JPG up to 10MB
                  </p>
                </label>
              </div>

              {uploadedFile && (
                <div className="bg-solar-50 p-4 rounded-lg">
                  <p className="text-sm text-solar-700">
                    <strong>File uploaded:</strong> {uploadedFile.name}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Analyzing your energy consumption...
                  </p>
                </div>
              )}

              {analysisResult && (
                <div className="bg-gradient-to-r from-solar-500 to-orange-500 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Analysis Results
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="opacity-90">Monthly Usage</p>
                      <p className="text-2xl font-bold">{analysisResult.monthlyUsage} kWh</p>
                    </div>
                    <div>
                      <p className="opacity-90">Recommended Size</p>
                      <p className="text-2xl font-bold">{analysisResult.recommendedSize} kW</p>
                    </div>
                    <div>
                      <p className="opacity-90">Estimated Cost</p>
                      <p className="text-2xl font-bold">₹{analysisResult.estimatedCost.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="opacity-90">Annual Savings</p>
                      <p className="text-2xl font-bold">₹{analysisResult.savings.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              )}

              <Button className="w-full bg-solar-600 hover:bg-solar-700" size="lg">
                Get Detailed Quote
              </Button>
            </CardContent>
          </Card>

          {/* Benefits & Features */}
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Solar?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-solar-500 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-900">Reduce Bills by 90%</strong>
                      <p className="text-gray-600">Significantly lower your monthly electricity costs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-solar-500 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-900">25-Year Warranty</strong>
                      <p className="text-gray-600">Long-term protection for your investment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-solar-500 rounded-full mt-2"></div>
                    <div>
                      <strong className="text-gray-900">Government Subsidies</strong>
                      <p className="text-gray-600">Take advantage of available incentives</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-solar-600 to-orange-600 text-white">
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
