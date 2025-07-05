import { useState, useEffect } from 'react';

export const useCursorTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [hasStopped, setHasStopped] = useState(false);

  useEffect(() => {
    let moveTimeout;
    let stopTimeout;

    const handleMouseMove = (e) => {
      // Immediate position update for proximity calculations
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);

      setIsMoving(true);
      setHasStopped(false);

      // Clear existing timeouts
      clearTimeout(moveTimeout);
      clearTimeout(stopTimeout);

      // Set delayed position with 0.2s delay
      moveTimeout = setTimeout(() => {
        setDelayedPosition(newPosition);
      }, 200);

      // Mark as stopped after movement ends
      stopTimeout = setTimeout(() => {
        setIsMoving(false);
        setHasStopped(true);
      }, 300);
    };

    // Initialize positions
    const handleMouseEnter = (e) => {
      const initialPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(initialPosition);
      setDelayedPosition(initialPosition);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearTimeout(moveTimeout);
      clearTimeout(stopTimeout);
    };
  }, []);

  return {
    mousePosition,
    delayedPosition,
    isMoving,
    hasStopped
  };
};

export const calculateDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

export const getProximityScale = (distance, maxDistance = 200) => {
  return Math.max(0, Math.min(1, 1 - distance / maxDistance));
};