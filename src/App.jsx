import React from 'react';
import { Phone, Mail } from 'lucide-react';
import logo from './assets/WW-Web-Logo.png';
import './index.css';
import './App.css'

function App() {
  return (
    <div className="absolute inset-0 m-0 p-0">
      {/* American-Made Glass Banner */}
      <div className="w-screen bg-gradient-to-r from-blue-800 via-white to-red-700 py-2">
        <div className="w-screen bg-gradient-to-r from-blue-900/90 via-gray-900/80 to-red-900/90 py-16">
          <div className="max-w-6xl mx-auto text-center px-4">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-14 h-9 mr-4" viewBox="0 0 60 40" fill="none">
                <rect width="60" height="40" fill="#B22234"/>
                <rect y="3" width="60" height="3" fill="white"/>
                <rect y="9" width="60" height="3" fill="white"/>
                <rect y="15" width="60" height="3" fill="white"/>
                <rect y="21" width="60" height="3" fill="white"/>
                <rect y="27" width="60" height="3" fill="white"/>
                <rect y="33" width="60" height="3" fill="white"/>
                <rect width="24" height="21" fill="#3C3B6E"/>
                <g fill="white">
                  <circle cx="4" cy="3" r="1"/>
                  <circle cx="12" cy="3" r="1"/>
                  <circle cx="20" cy="3" r="1"/>
                  <circle cx="8" cy="6" r="1"/>
                  <circle cx="16" cy="6" r="1"/>
                  <circle cx="4" cy="9" r="1"/>
                  <circle cx="12" cy="9" r="1"/>
                  <circle cx="20" cy="9" r="1"/>
                  <circle cx="8" cy="12" r="1"/>
                  <circle cx="16" cy="12" r="1"/>
                  <circle cx="4" cy="15" r="1"/>
                  <circle cx="12" cy="15" r="1"/>
                  <circle cx="20" cy="15" r="1"/>
                  <circle cx="8" cy="18" r="1"/>
                  <circle cx="16" cy="18" r="1"/>
                </g>
              </svg>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                AMERICAN-MADE GLASS
              </h1>
            </div>
            <p className="text-xl text-gray-200 font-medium">
              Premium Quality • Crafted in the USA • Supporting American Artisans
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon Banner */}
      <div className="w-screen bg-gray-100 pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-800 rounded-xl shadow-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🛒 eCommerce Store Coming Soon!
            </h2>
            <p className="text-xl text-gray-300 font-medium">
              Get ready to shop our premium American-made glass collection online
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-screen bg-gray-100 px-4 pt-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white p-8">
              <div className="flex items-center justify-center">
                <Phone className="w-8 h-8 mr-4" />
                <h3 className="text-4xl font-bold">Contact</h3>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col gap-8">
                <div className="text-center">
                  <img 
                    src={logo}
                    alt="Wade's World Logo" 
                    className="h-40 md:h-56 w-auto mx-auto"
                  />
                </div>
                <div className="text-center px-2">
                  <h4 className="font-bold text-gray-600 mb-3 text-lg md:text-xl uppercase tracking-wide">Email</h4>
                  <a 
                    href="mailto:info@wadesworldsmokeshop.com" 
                    className="text-sm md:text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors block"
                  >
                    info@wadesworldsmokeshop.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-screen bg-gray-800 text-white py-8">
        <p className="text-center text-gray-300">© 2025 Wade's World Smoke Shop. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;