import React, { useState, useEffect, useRef } from 'react';
import { FiUsers, FiClock, FiShield, FiZap, FiTool, FiHome, FiStar, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const About = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const timelineRefs = useRef([]);

  const stats = [
    { icon: FiUsers, number: '1000+', label: 'Happy Customers', color: '#3B82F6' },
    { icon: FiClock, number: '24+', label: 'Years Experience', color: '#10B981' },
    { icon: FiShield, number: '100%', label: 'Safety Record', color: '#EF4444' }
  ];

  const timeline = [
    {
      year: '2000',
      title: 'Shop Opened',
      description: 'Started our electrical shop in Sipara, Patna with dedication to quality service',
      icon: FiHome,
      color: '#3B82F6'
    },
    {
      year: '2012',
      title: 'Transition Period',
      description: 'Shop closed due to unforeseen circumstances but continued providing consultancy services',
      icon: FiTool,
      color: '#F59E0B'
    },
    {
      year: '2016',
      title: 'Grand Reopening',
      description: 'Reopened shop in Sipara, Patna with enhanced services and premium products',
      icon: FiZap,
      color: '#10B981'
    },
    {
      year: '2024',
      title: 'New Location',
      description: 'Moved to current location at Rajendra Awasiya School, Ramesh Colony, Dariyapur Road, Kurthaul for better service',
      icon: FiMapPin,
      color: '#8B5CF6'
    },
    {
      year: '2025',
      title: 'Growing Trust',
      description: 'Gained more customers who trust us for their electrical needs and premium service',
      icon: FiStar,
      color: '#EF4444'
    }
  ];

  const features = [
    {
      title: 'Licensed & Insured',
      description: 'Licensed expert electrician that you can rely on and have peace of mind',
      icon: FiShield,
      color: '#10B981'
    },
    {
      title: 'Quality Guarantee',
      description: 'We stand behind our work with a 100% satisfaction guarantee and warranty service',
      icon: FiStar,
      color: '#F59E0B'
    },
    {
      title: 'Fast & Reliable Service',
      description: 'Quick response times and reliable electrical solutions for all your needs',
      icon: FiShield,
      color: '#3B82F6'
    },
    {
      title: 'Fair Pricing',
      description: 'Transparent, competitive pricing with no hidden fees and free estimates',
      icon: FiUsers,
      color: '#8B5CF6'
    }
  ];

  // Intersection Observer for timeline cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3, rootMargin: '-50px 0px -50px 0px' }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Vishwakarma Electric</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over two decades of excellence in electrical services, building trust one connection at a time
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 cursor-pointer"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = stat.color + '08';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
              }}
            >
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <SafeIcon
                  icon={stat.icon}
                  className="text-2xl"
                  style={{ color: stat.color }}
                />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="relative mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h3>
            <p className="text-lg text-gray-600">Over two decades of growth and excellence</p>
          </div>

          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />

          {/* Timeline Items */}
          <div className="relative space-y-16">
            {timeline.map((item, index) => (
              <div
                key={index}
                ref={(el) => (timelineRefs.current[index] = el)}
                data-index={index}
                className={`flex items-center transition-all duration-700 ease-out ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } ${
                  visibleCards.has(index)
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform ${
                      visibleCards.has(index)
                        ? 'scale-100 rotate-0'
                        : index % 2 === 0
                        ? 'scale-95 rotate-1'
                        : 'scale-95 -rotate-1'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = item.color + '08';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        <SafeIcon
                          icon={item.icon}
                          className="text-xl"
                          style={{ color: item.color }}
                        />
                      </div>
                      <div className="text-2xl font-bold" style={{ color: item.color }}>
                        {item.year}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div
                  className={`relative z-10 w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                    visibleCards.has(index) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                  style={{
                    backgroundColor: item.color,
                    transitionDelay: `${index * 100}ms`
                  }}
                />
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
            <p className="text-lg text-gray-600">Excellence in every aspect of our service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = feature.color + '08';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <SafeIcon
                      icon={feature.icon}
                      className="text-2xl"
                      style={{ color: feature.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Get Your Quote CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Your Quote Today
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Reach out to us for your electrical work. Contact us for consultation and personalized quote
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a
                href="tel:+919334539594"
                className="flex-1 bg-white text-blue-600 hover:bg-blue-50 px-6 py-4 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiPhone} className="text-xl" />
                <span>Call Us</span>
              </a>
              
              <a
                href="mailto:hello@vishwakarmaelectric.in"
                className="flex-1 border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-4 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiMail} className="text-xl" />
                <span>Mail Us</span>
              </a>
            </div>
            
            <div className="mt-6 text-blue-100 text-sm">
              <p>📞 +91 93345 39594 | ✉️ hello@vishwakarmaelectric.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
