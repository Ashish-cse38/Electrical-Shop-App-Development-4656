import React, { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 8000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          vz: Math.random() * 2 + 1,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: `hsl(${220 + Math.random() * 60}, 70%, ${60 + Math.random() * 40}%)`,
          twinkle: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.02 + 0.01
        });
      }
      particlesRef.current = particles;
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create galaxy gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(30, 41, 59, 0.1)');
      gradient.addColorStop(0.5, 'rgba(15, 23, 42, 0.3)');
      gradient.addColorStop(1, 'rgba(2, 6, 23, 0.5)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z -= particle.vz;

        // Reset particle if it goes too far
        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Wrap around screen edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Calculate 3D projection
        const scale = 1000 / (1000 + particle.z);
        const x2d = (particle.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (particle.y - canvas.height / 2) * scale + canvas.height / 2;

        // Update twinkle effect
        particle.twinkle += particle.twinkleSpeed;
        const twinkleOpacity = particle.opacity * (0.5 + 0.5 * Math.sin(particle.twinkle));

        // Draw particle
        ctx.save();
        ctx.globalAlpha = twinkleOpacity * scale;
        ctx.beginPath();
        
        const size = particle.size * scale;
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Add glow effect for larger particles
        if (size > 1) {
          ctx.shadowBlur = size * 2;
          ctx.shadowColor = particle.color;
          ctx.fill();
        }

        ctx.restore();

        // Draw connections between nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100 && particle.z > 500 && otherParticle.z > 500) {
            const otherScale = 1000 / (1000 + otherParticle.z);
            const otherX2d = (otherParticle.x - canvas.width / 2) * otherScale + canvas.width / 2;
            const otherY2d = (otherParticle.y - canvas.height / 2) * otherScale + canvas.height / 2;

            ctx.save();
            ctx.globalAlpha = (1 - distance / 100) * 0.1 * Math.min(scale, otherScale);
            ctx.strokeStyle = '#3B82F6';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(x2d, y2d);
            ctx.lineTo(otherX2d, otherY2d);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default GalaxyBackground;