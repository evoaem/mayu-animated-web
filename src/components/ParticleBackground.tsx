
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
      }
    };

    // Track mouse position
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.min(window.innerWidth * 0.05, 150); // responsive count with cap
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: getRandomColor()
        });
      }
    };
    
    const getRandomColor = () => {
      const colors = ['#9b87f5', '#7E69AB', '#D6BCFA', '#0FA0CE'];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Animation loop
    const drawParticles = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.current.forEach((particle, index) => {
        // Update positions
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Check distance with other particles to draw connections
        for (let j = index + 1; j < particles.current.length; j++) {
          const dx = particle.x - particles.current[j].x;
          const dy = particle.y - particles.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Draw connections if particles are close enough
          const maxDistance = 100;
          if (distance < maxDistance) {
            // Calculate opacity based on distance
            const opacity = 1 - (distance / maxDistance);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(155, 135, 245, ${opacity * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles.current[j].x, particles.current[j].y);
            ctx.stroke();
          }
        }
        
        // Interact with mouse
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;
        
        if (distance < maxDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (maxDistance - distance) / maxDistance;
          
          particle.speedX += forceDirectionX * force * 0.02;
          particle.speedY += forceDirectionY * force * 0.02;
          
          // Limit speed
          const maxSpeed = 2;
          const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
          if (speed > maxSpeed) {
            particle.speedX = (particle.speedX / speed) * maxSpeed;
            particle.speedY = (particle.speedY / speed) * maxSpeed;
          }
        }
        
        // Apply friction to gradually slow particles
        particle.speedX *= 0.98;
        particle.speedY *= 0.98;
      });
      
      animationFrameId.current = requestAnimationFrame(drawParticles);
    };
    
    // Start the animation
    handleResize();
    drawParticles();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);
  
  return <canvas ref={canvasRef} className="particle-container" />;
};

export default ParticleBackground;
