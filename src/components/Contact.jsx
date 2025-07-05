import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      info: '+91 93345 39594',
      link: 'tel:+919334539594',
      color: '#3B82F6'
    },
    {
      icon: FiMail,
      title: 'Email',
      info: 'hello@vishwakarmaelectric.in',
      link: 'mailto:hello@vishwakarmaelectric.in',
      color: '#10B981'
    },
    {
      icon: FiMapPin,
      title: 'Address',
      info: 'Rajendra Awasiya School, Ramesh Colony, Dariyapur Road, Kurthaul 804453',
      link: 'https://maps.google.com/?q=25.557917,85.125111',
      color: '#F59E0B'
    },
    {
      icon: FiClock,
      title: 'Hours',
      info: 'Mon-Sat: 8AM-7PM, Sun: 9AM-5PM',
      link: '#',
      color: '#EF4444'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to get started? Contact us today for a free consultation and quote
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="h-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  />
                </div>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                  >
                    <option value="">Select Service</option>
                    <option value="house-wiring">House Wiring</option>
                    <option value="appliance-repair">Appliance Repair</option>
                    <option value="safety-consultation">Safety Consultation</option>
                    <option value="emergency-service">Emergency Service</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="installation">Installation</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                />
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiSend} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="block p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = info.color + '10';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                  }}
                >
                  <a
                    href={info.link}
                    target={info.link.includes('maps.google') ? '_blank' : '_self'}
                    rel={info.link.includes('maps.google') ? 'noopener noreferrer' : ''}
                    className="block"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${info.color}20` }}
                      >
                        <SafeIcon icon={info.icon} style={{ color: info.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-gray-600 break-words">{info.info}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.123456789!2d85.125111!3d25.557917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z25.557917,85.125111!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vishwakarma Electric Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;