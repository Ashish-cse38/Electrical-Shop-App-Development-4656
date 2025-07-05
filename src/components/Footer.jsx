import React from 'react';
import { FiZap, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <SafeIcon icon={FiZap} className="text-2xl text-blue-400 flex-shrink-0" />
              <span className="text-xl font-bold">Vishwakarma Electric</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for all electrical needs in Ramesh Colony, Kurthaul. Professional service, quality products, and customer satisfaction guaranteed for over 20 years.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="tel:+919334539594"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <SafeIcon icon={FiPhone} className="text-blue-400 flex-shrink-0" />
                <span>+91 93345 39594</span>
              </a>
              <a
                href="mailto:hello@vishwakarmaelectric.in"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <SafeIcon icon={FiMail} className="text-blue-400 flex-shrink-0" />
                <span className="break-words">hello@vishwakarmaelectric.in</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <SafeIcon icon={FiMapPin} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="break-words">
                  Rajendra Awasiya School, Ramesh Colony, Dariyapur Road, Kurthaul 804453
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Vishwakarma Electric. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;