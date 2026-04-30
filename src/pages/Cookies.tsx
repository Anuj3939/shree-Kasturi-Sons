import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Cookies = () => {
  return (
    <div 
      className="min-h-screen w-full bg-[#020617]"
      style={{
        backgroundImage: `
          radial-gradient(circle 800px at 50% 0%, rgba(251,191,36,0.5), transparent 60%),
          radial-gradient(circle 600px at 50% 0%, rgba(251,191,36,0.4), transparent 50%),
          radial-gradient(circle 400px at 50% 0%, rgba(251,191,36,0.3), transparent 40%)
        `,
        backgroundAttachment: 'scroll'
      }}
    >
      <Navigation />
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold font-vintage text-white mb-6">Cookie Policy</h1>
          <p className="text-gray-300 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 shadow-2xl backdrop-blur-sm p-6 rounded-lg" style={{boxShadow: '0 0 25px rgba(251, 191, 36, 0.2), 0 0 50px rgba(251, 191, 36, 0.1)'}}>
              <h2 className="text-2xl font-bold text-yellow-800 mb-3">What Are Cookies?</h2>
              <p className="text-yellow-700">Cookies are small text files stored on your device to help websites remember information about your visit and improve your experience.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">How We Use Cookies</h2>
              <ul className="list-disc pl-6 text-yellow-700 space-y-1">
                <li>Essential cookies for core site functionality</li>
                <li>Analytics to understand usage and improve performance</li>
                <li>Preferences to remember your settings</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">Managing Cookies</h2>
              <p className="text-yellow-700">You can control cookies through your browser settings. Disabling cookies may impact site functionality.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">Contact</h2>
              <p className="text-yellow-700">For cookie-related inquiries, contact <span className="font-semibold">privacy@shreekasturi.com</span>.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cookies;




