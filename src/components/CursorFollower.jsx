import React from 'react';
import { motion } from 'framer-motion';
import { useCursorTracker } from '../hooks/useCursorTracker';

const CursorFollower = () => {
  const { mousePosition, delayedPosition, isMoving, hasStopped } = useCursorTracker();

  return (
    <>
      {/* Main cursor follower - follows with 0.2s delay */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: 0,
          top: 0,
        }}
        animate={{
          x: delayedPosition.x - 8,
          y: delayedPosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.2
        }}
      >
        <motion.div
          className="w-4 h-4 bg-white rounded-full shadow-lg"
          animate={{
            scale: hasStopped ? 1.2 : 0.8,
            opacity: hasStopped ? 1 : 0.7,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.1
          }}
        />
      </motion.div>

      {/* Outer ring - appears when cursor has stopped */}
      <motion.div
        className="fixed pointer-events-none z-[9998] border-2 border-white mix-blend-difference rounded-full"
        style={{
          left: 0,
          top: 0,
        }}
        animate={{
          x: delayedPosition.x - 16,
          y: delayedPosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 25,
          mass: 0.3
        }}
      >
        <motion.div
          className="w-8 h-8"
          animate={{
            scale: hasStopped ? 1.3 : 0.7,
            opacity: hasStopped ? 0.6 : 0.2
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.1
          }}
        />
      </motion.div>

      {/* Pulse effect when stopped */}
      <motion.div
        className="fixed pointer-events-none z-[9997] mix-blend-difference rounded-full"
        style={{
          left: 0,
          top: 0,
        }}
        animate={{
          x: delayedPosition.x - 24,
          y: delayedPosition.y - 24,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.4
        }}
      >
        <motion.div
          className="w-12 h-12 border border-white rounded-full"
          animate={{
            scale: hasStopped ? [1, 1.5, 1] : 0,
            opacity: hasStopped ? [0.3, 0.1, 0.3] : 0
          }}
          transition={{
            duration: 2,
            repeat: hasStopped ? Infinity : 0,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </>
  );
};

export default CursorFollower;