import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCursorTracker, calculateDistance, getProximityScale } from '../hooks/useCursorTracker';

const CursorAwareCard = ({ 
  children, 
  className = '', 
  flashColor = '#3B82F6', 
  intensity = 0.3, 
  maxDistance = 150,
  ...props 
}) => {
  const cardRef = useRef(null);
  const { mousePosition } = useCursorTracker(); // Use immediate position for card effects
  const [isHovered, setIsHovered] = useState(false);
  const [cardCenter, setCardCenter] = useState({ x: 0, y: 0 });
  const [proximityScale, setProximityScale] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setCardCenter({ x: centerX, y: centerY });

      const distance = calculateDistance(
        mousePosition.x, 
        mousePosition.y, 
        centerX, 
        centerY
      );
      const scale = getProximityScale(distance, maxDistance);
      setProximityScale(scale);
    }
  }, [mousePosition, maxDistance]);

  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setCardCenter({ x: centerX, y: centerY });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, []);

  const tiltX = (mousePosition.y - cardCenter.y) / 50;
  const tiltY = (cardCenter.x - mousePosition.x) / 50;

  return (
    <motion.div
      ref={cardRef}
      className={`relative cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `perspective(1000px) rotateX(${tiltX * proximityScale}deg) rotateY(${tiltY * proximityScale}deg)`,
        transformStyle: 'preserve-3d'
      }}
      animate={{
        scale: 1 + (proximityScale * 0.02),
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
      {...props}
    >
      {/* Flash overlay */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle at ${((mousePosition.x - cardCenter.x) / 300 + 0.5) * 100}% ${((mousePosition.y - cardCenter.y) / 300 + 0.5) * 100}%, ${flashColor}40 0%, transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? intensity : proximityScale * 0.3,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          boxShadow: `0 0 ${20 + proximityScale * 30}px ${flashColor}${Math.floor(proximityScale * 50).toString(16).padStart(2, '0')}`,
        }}
        animate={{
          opacity: proximityScale * 0.6,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      />

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </motion.div>
  );
};

export default CursorAwareCard;