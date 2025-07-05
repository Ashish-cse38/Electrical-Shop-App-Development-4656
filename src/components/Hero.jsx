import React, { useState } from 'react';
import { FiArrowRight, FiPhone, FiZap, FiHome, FiShield, FiMail } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import GalaxyBackground from './GalaxyBackground';

const Hero = () => {
  const [hoveredRoom, setHoveredRoom] = useState(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const rooms = [
    { id: 'living', name: 'Living Room', color: '#3B82F6' },
    { id: 'kitchen', name: 'Kitchen', color: '#10B981' },
    { id: 'bedroom', name: 'Bedroom', color: '#F59E0B' },
    { id: 'exterior', name: 'Exterior', color: '#EF4444' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Galaxy Background */}
      <GalaxyBackground />
      
      {/* Static Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Content */}
          <div className="text-white space-y-8 pt-20 md:pt-0">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Vishwakarma{' '}
                  <span className="text-blue-400">Electric</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
                  Complete Smart Home Electrical Solutions & Premium Appliances in Kurthaul. Let us know how we can help you.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <button
                  onClick={scrollToContact}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiMail} className="text-xl" />
                  <span>Mail Us</span>
                </button>
              </div>
              <div className="flex-1">
                <a
                  href="tel:+919334539594"
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiPhone} className="text-xl" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: FiZap, number: '1000+', label: 'Happy Customers', color: '#3B82F6' },
                { icon: FiHome, number: '20+', label: 'Years Experience', color: '#10B981' },
                { icon: FiShield, number: '100%', label: 'Fast & Reliable', color: '#F59E0B' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm"
                >
                  <SafeIcon
                    icon={stat.icon}
                    className="text-2xl mb-2 mx-auto"
                    style={{ color: stat.color }}
                  />
                  <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Smart Home */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-20">
                {/* House Title */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Smart Home Solutions</h3>
                  <p className="text-blue-300 text-sm">Complete Electrical Installation & Repair</p>
                </div>

                {/* Rooms Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {rooms.map((room, index) => (
                    <div
                      key={room.id}
                      className="relative p-4 bg-white bg-opacity-5 rounded-xl border border-white border-opacity-10 cursor-pointer"
                      onMouseEnter={() => setHoveredRoom(room.id)}
                      onMouseLeave={() => setHoveredRoom(null)}
                    >
                      <div>
                        {/* Room Header */}
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-white font-semibold text-sm">{room.name}</h4>
                          <div className="w-3 h-3 bg-green-400 rounded-full" />
                        </div>

                        {/* Room Status */}
                        <div className="text-center">
                          <div className="text-xs text-gray-300">System Active</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main Control Panel */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl text-center">
                  <div>
                    <SafeIcon icon={FiZap} className="text-2xl text-white mb-2 mx-auto" />
                    <div className="text-white font-semibold text-sm">Main Control Panel</div>
                    <div className="text-blue-200 text-xs">All Systems Active</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;