import React from 'react';
import { FiStar, FiShield } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const Products = () => {
  const brands = [
    {
      id: 1,
      name: 'Bajaj',
      logo: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751701816599-Bajaj-Electricals-Logo-Vector.jpg',
      rating: 4.8,
      category: 'Home Appliances',
      description: 'Leading Indian brand known for reliable and affordable electrical appliances including fans, water heaters, and kitchen appliances with over 80 years of legacy.',
      features: ['Trusted Brand', 'Energy Efficient', 'Affordable Pricing', 'Wide Service Network'],
      appliances: ['Ceiling Fans', 'Water Heaters', 'Mixer Grinders', 'Induction Cooktops'],
      color: '#EF4444',
      logoClass: 'max-h-32 max-w-96 object-contain w-full' // Much larger Bajaj logo
    },
    {
      id: 2,
      name: 'Havells',
      logo: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751701423923-Havells_Logo.svg.png',
      rating: 4.9,
      category: 'Electrical Solutions',
      description: 'Premium electrical brand offering innovative solutions for lighting, fans, switches, and industrial equipment with superior quality and cutting-edge technology.',
      features: ['Premium Quality', 'Innovative Design', 'Durable Products', 'Latest Technology'],
      appliances: ['LED Lights', 'Designer Fans', 'Modular Switches', 'MCBs & DBs'],
      color: '#3B82F6',
      logoClass: 'max-h-20 max-w-32 object-contain' // Standard size
    },
    {
      id: 3,
      name: 'Crompton',
      logo: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751701414899-Crompton_Greaves_Logo.svg.png',
      rating: 4.7,
      category: 'Consumer Electricals',
      description: 'Heritage brand specializing in fans, pumps, and lighting solutions with over 80 years of experience in electrical industry and trusted performance.',
      features: ['Heritage Brand', 'Reliable Performance', 'Expert Engineering', 'Long Lasting'],
      appliances: ['Ceiling Fans', 'Water Pumps', 'LED Lighting', 'Geysers'],
      color: '#10B981',
      logoClass: 'max-h-40 max-w-64 object-contain' // Larger size
    },
    {
      id: 4,
      name: 'Orient Electric',
      logo: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751701440622-ORIENTELEC.NS_BIG-170a4acd.png',
      rating: 4.6,
      category: 'Fans & Lighting',
      description: 'Modern electrical brand focusing on stylish fans, LED lighting, and home appliances with contemporary designs and energy-efficient solutions.',
      features: ['Stylish Design', 'Modern Technology', 'Energy Saving', 'Contemporary Look'],
      appliances: ['Designer Fans', 'LED Bulbs', 'Home Appliances', 'Lighting Solutions'],
      color: '#F59E0B',
      logoClass: 'max-h-20 max-w-32 object-contain' // Standard size
    },
    {
      id: 5,
      name: 'Usha',
      logo: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751701841487-USHA_Logo.jpg',
      rating: 4.5,
      category: 'Home Appliances',
      description: 'Trusted name in ceiling fans, sewing machines, and kitchen appliances known for durability, performance, and value for money since 1935.',
      features: ['Trusted Quality', 'Durable Build', 'Performance Focused', 'Value for Money'],
      appliances: ['Ceiling Fans', 'Sewing Machines', 'Kitchen Appliances', 'Room Heaters'],
      color: '#8B5CF6',
      logoClass: 'max-h-20 max-w-40 object-contain' // Slightly larger for Usha
    },
    {
      id: 6,
      name: 'Anchor by Panasonic',
      logo: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751701410400-anchor-electricals-logo.png',
      rating: 4.8,
      category: 'Electrical Accessories',
      description: 'Leading brand for switches, sockets, and wiring accessories backed by Panasonic\'s global technology and international quality standards.',
      features: ['Global Standards', 'Safety Certified', 'Premium Materials', 'International Quality'],
      appliances: ['Modular Switches', 'Socket Outlets', 'MCBs', 'Wiring Accessories'],
      color: '#06B6D4',
      logoClass: 'max-h-20 max-w-32 object-contain' // Standard size
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium Electrical Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer appliances from India's most trusted electrical brands known for quality, reliability, and innovation
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full group cursor-pointer"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = brand.color + '08';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
              }}
            >
              <div className="relative overflow-hidden bg-white p-6">
                {/* Uniform container height for all brands */}
                <div className="flex items-center justify-center h-32">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className={brand.logoClass || 'max-h-20 max-w-32 object-contain'}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/200x80/${brand.color.replace('#', '')}/FFFFFF?text=${brand.name}`;
                    }}
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span
                    className="text-white px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: brand.color }}
                  >
                    {brand.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {brand.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiStar} className="text-yellow-400 text-sm flex-shrink-0" />
                    <span className="text-sm text-gray-600">{brand.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {brand.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Appliances:</h4>
                  <div className="flex flex-wrap gap-2">
                    {brand.appliances.map((appliance, index) => (
                      <div
                        key={index}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: `${brand.color}20`,
                          color: brand.color
                        }}
                      >
                        {appliance}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm">Quality Features:</h4>
                  {brand.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div
                        className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: brand.color }}
                      />
                      <span className="break-words">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="w-full">
                  <div
                    className="flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold w-full"
                    style={{
                      backgroundColor: `${brand.color}20`,
                      color: brand.color
                    }}
                  >
                    <SafeIcon icon={FiShield} className="flex-shrink-0" />
                    <span>Authorized Dealer</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose These Brands?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We carefully select only the most trusted electrical brands in India that have proven track records of quality, reliability, and customer satisfaction. Each brand offers excellent after-sales service, warranty support, and meets all Indian safety standards. Our partnerships with these manufacturers ensure you get genuine products at competitive prices with full warranty coverage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
