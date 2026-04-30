import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold font-vintage text-white mb-6">Privacy Policy</h1>
          <p className="text-gray-300 mb-10">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 shadow-2xl backdrop-blur-sm p-6 rounded-lg" style={{boxShadow: '0 0 25px rgba(251, 191, 36, 0.2), 0 0 50px rgba(251, 191, 36, 0.1)'}}>
              <h2 className="text-2xl font-bold text-yellow-800 mb-3">Overview</h2>
              <p className="text-yellow-700">We value your privacy. This policy describes how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">Information We Collect</h2>
              <ul className="list-disc pl-6 text-yellow-700 space-y-1">
                <li>Contact details (name, email, phone)</li>
                <li>Business information you provide in forms</li>
                <li>Usage data (pages visited, device, browser)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">How We Use Information</h2>
              <ul className="list-disc pl-6 text-yellow-700 space-y-1">
                <li>Provide and improve our services</li>
                <li>Respond to inquiries and support requests</li>
                <li>Send important updates and marketing (with consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">Sharing of Information</h2>
              <p className="text-yellow-700">We do not sell your personal information. We may share it with trusted service providers under confidentiality agreements, or if required by law.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">Data Security</h2>
              <p className="text-yellow-700">We implement appropriate technical and organizational measures to protect your information. However, no method of transmission is 100% secure.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">Your Choices</h2>
              <ul className="list-disc pl-6 text-yellow-700 space-y-1">
                <li>Request access, correction, or deletion of your data</li>
                <li>Opt-out of marketing communications at any time</li>
                <li>Manage cookie preferences in your browser</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 border border-yellow-300/50 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">Contact</h2>
              <p className="text-yellow-700">For privacy inquiries, contact us at <span className="font-semibold">privacy@shreekasturi.com</span>.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Privacy;




