import React from 'react';
import { FiHome, FiTool, FiShield, FiClock, FiSettings, FiZap } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Services = () => {
  const services = [
    {
      icon: FiHome,
      title: 'House Wiring',
      description: 'Complete electrical wiring solutions for residential properties with safety compliance.',
      features: ['New installations', 'Rewiring', 'Safety inspections', 'Code compliance'],
      color: '#3B82F6'
    },
    {
      icon: FiTool,
      title: 'Appliance Repair',
      description: 'Expert repair services for all types of electrical appliances and equipment.',
      features: ['Quick diagnosis', 'Quality parts', 'Warranty service', 'Emergency repairs'],
      color: '#10B981'
    },
    {
      icon: FiShield,
      title: 'Safety Consultation',
      description: 'Professional electrical safety assessments and consultation services.',
      features: ['Risk assessment', 'Safety upgrades', 'Code compliance', 'Prevention tips'],
      color: '#F59E0B'
    },
    {
      icon: FiShield,
      title: 'Fast & Reliable Service',
      description: 'Quick response times and reliable electrical solutions for all your needs.',
      features: ['Immediate response', 'Quality service', 'Reliable solutions', 'Customer satisfaction'],
      color: '#EF4444'
    },
    {
      icon: FiSettings,
      title: 'Maintenance',
      description: 'Regular maintenance services to keep your electrical systems running smoothly.',
      features: ['Preventive care', 'System optimization', 'Regular checkups', 'Performance tuning'],
      color: '#8B5CF6'
    },
    {
      icon: FiZap,
      title: 'Installation',
      description: 'Professional installation of electrical fixtures, outlets, and systems.',
      features: ['Expert installation', 'Quality materials', 'Clean work', 'Testing & verification'],
      color: '#06B6D4'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical solutions for your home and business needs
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full group cursor-pointer"
              style={{ '--hover-color': service.color + '10' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = service.color + '10';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <SafeIcon icon={service.icon} className="text-2xl" style={{ color: service.color }} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: service.color }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;