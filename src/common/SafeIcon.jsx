import React from 'react';
import * as FiIcons from 'react-icons/fi';

const SafeIcon = ({ icon: IconComponent, name, className = '', ...props }) => {
  // If icon component is provided directly, use it
  if (IconComponent && typeof IconComponent === 'function') {
    return <IconComponent className={className} {...props} />;
  }
  
  // If name is provided, try to find the icon
  if (name && typeof name === 'string') {
    const iconName = name.startsWith('Fi') ? name : `Fi${name}`;
    const Icon = FiIcons[iconName];
    if (Icon) {
      return <Icon className={className} {...props} />;
    }
  }
  
  // Fallback to alert triangle
  const FallbackIcon = FiIcons.FiAlertTriangle;
  return <FallbackIcon className={className} {...props} />;
};

export default SafeIcon;