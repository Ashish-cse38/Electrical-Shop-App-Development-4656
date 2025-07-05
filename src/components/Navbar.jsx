import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiZap } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['home', 'services', 'products', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <SafeIcon icon={FiZap} className="text-2xl text-blue-600" />
                <div className="absolute -inset-1 bg-blue-600/20 rounded-full blur-sm animate-pulse" />
              </div>
              <span className={`text-xl font-bold ${
                scrolled ? 'text-gray-900' : 'text-white'
              } mt-2 md:mt-0`}>
                Vishwakarma Electric
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'services', 'products', 'about', 'contact'].map((item) => (
              <div key={item} className="relative">
                <button
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-all duration-300 relative group ${
                    scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                  } ${activeSection === item ? 'text-blue-600' : ''}`}
                >
                  {item}
                  {/* Enhanced underline effect */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out ${
                    activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                  
                  {/* Sliding border effect */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-700 ease-out transform ${
                    activeSection === item ? 'w-full scale-x-100' : 'w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100'
                  }`} />
                  
                  {/* Glow effect for active section */}
                  {activeSection === item && (
                    <span className="absolute -inset-2 bg-blue-600/10 rounded-lg blur-sm animate-pulse" />
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <div className="inline-block">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative p-2 rounded-lg transition-all duration-300 ${
                  scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                <div className="relative">
                  <SafeIcon 
                    icon={isOpen ? FiX : FiMenu} 
                    className="text-2xl transition-transform duration-300" 
                  />
                  {!scrolled && (
                    <div className="absolute -inset-2 bg-white/10 rounded-lg blur-sm" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mx-4 mt-2">
            <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-200/50 overflow-hidden">
              <div className="p-2">
                {['home', 'services', 'products', 'about', 'contact'].map((item, index) => (
                  <div key={item} className="relative">
                    <button
                      onClick={() => scrollToSection(item)}
                      className={`w-full text-left px-4 py-3 hover:text-blue-600 hover:bg-blue-50 capitalize transition-all duration-300 rounded-xl font-medium flex items-center space-x-3 group ${
                        activeSection === item ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeSection === item ? 'w-3 h-3 bg-blue-600' : 'bg-blue-600 group-hover:w-3 group-hover:h-3'
                      }`} />
                      <span>{item}</span>
                      
                      {/* Mobile sliding effect */}
                      {activeSection === item && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-r-full" />
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="border-t border-gray-200/50 p-4 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center justify-center space-x-2">
                  <SafeIcon icon={FiZap} className="text-blue-600 text-sm" />
                  <span className="text-sm font-medium text-gray-600">Vishwakarma Electric</span>
                </div>
                <p className="text-xs text-gray-500 text-center mt-1">Professional Electrical Solutions</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;