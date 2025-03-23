import React from 'react';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';
import logo from './assets/WW-Web-Logo.png';
import './index.css';
import './App.css'

function App() {
  return (
    <div className="absolute inset-0 m-0 p-0">
      {/* Header */}
      <div className="w-screen bg-gray-800 shadow-lg">
        <h1 className="text-4xl font-bold py-6 text-center text-white">Come See Us!</h1>
      </div>

      {/* Hero Section */}
      <div className="w-screen bg-gradient-to-b from-white to-gray-50">
        <div className="py-10">
          <img 
            src={logo}
            alt="Wade's World Logo" 
            className="mx-auto h-60 w-auto mb-8"
          />
          <p className="text-gray-700 text-3xl text-center font-medium px-4">
            Your Premier Destination for Quality Smoking Accessories
          </p>
        </div>
      </div>

      {/* Info Sections */}
      <div className="w-screen bg-gray-100 px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Hours */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white p-4">
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-3" />
                <h2 className="text-2xl font-bold">Store Hours</h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 items-center border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-900">Monday - Friday</span>
                <span className="text-blue-600 text-right">12:00 PM - 7:00 PM</span>
              </div>
              <div className="grid grid-cols-2 items-center border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-900">Saturday</span>
                <span className="text-blue-600 text-right">CLOSED</span>
              </div>
              <div className="grid grid-cols-2 items-center">
                <span className="font-medium text-gray-900">Sunday</span>
                <span className="text-blue-600 text-right">CLOSED</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white p-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                <h2 className="text-2xl font-bold">Contact & Location</h2>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="text-center">
                <h3 className="font-medium text-gray-900 mb-2">Address</h3>
                <p className="text-gray-900">1489 County Road 220, Ste 140</p>
                <p className="text-gray-900">Fleming Island, FL 32003</p>
              </div>
              
              <div className="text-center">
                <h3 className="font-medium text-gray-900 mb-2">Phone</h3>
                <a 
                  href="tel:+19044451261" 
                  className="text-blue-600 hover:text-blue-700"
                >
                  (904) 445-1261
                </a>
              </div>

              <div className="text-center">
                <h3 className="font-medium text-gray-900 mb-2">Email</h3>
                <a 
                  href="mailto:info@wadesworldsmokeshop.com" 
                  className="text-blue-600 hover:text-blue-700"
                >
                  info@wadesworldsmokeshop.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-screen bg-gray-800 text-white py-6">
        <p className="text-center text-gray-300">© 2025 Wade's World Smoke Shop. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;