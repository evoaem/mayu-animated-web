
import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connected: boolean;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const points = useRef<Point[]>([]);
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
        initPoints();
      }
    };

    // Track mouse position
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initialize points
    const initPoints = () => {
      points.current = [];
      // Calculate number of points based on screen size
      const numPoints = Math.min(150, Math.floor(window.innerWidth * window.innerHeight / 8000));
      
      for (let i = 0; i < numPoints; i++) {
        points.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          connected: false
        });
      }
    };
    
    // Animation loop
    const drawNetwork = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Reset connection status
      points.current.forEach(point => {
        point.connected = false;
      });
      
      // Move points
      points.current.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;
        
        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) {
          point.vx = -point.vx;
        }
        
        if (point.y < 0 || point.y > canvas.height) {
          point.vy = -point.vy;
        }
      });
      
      // Draw connections first (so they're underneath the points)
      for (let i = 0; i < points.current.length; i++) {
        const point = points.current[i];
        
        // Find closest points to connect
        for (let j = i + 1; j < points.current.length; j++) {
          const otherPoint = points.current[j];
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Connect points if they're close enough
          const connectionDistance = canvas.width / 8;
          if (distance < connectionDistance) {
            // Set opacity based on distance (closer = more opaque)
            const opacity = (1 - distance / connectionDistance) * 0.4;
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.strokeStyle = `rgba(123, 97, 255, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
            
            point.connected = true;
            otherPoint.connected = true;
          }
        }
      }
      
      // Now draw the points
      points.current.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
        
        // Color based on connection state
        ctx.fillStyle = point.connected ? 'rgba(147, 112, 219, 0.8)' : 'rgba(80, 60, 190, 0.4)';
        ctx.fill();
        
        // Interaction with mouse
        const dx = mousePosition.current.x - point.x;
        const dy = mousePosition.current.y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;
        
        if (dist < maxDist) {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(mousePosition.current.x, mousePosition.current.y);
          const opacity = (1 - dist / maxDist) * 0.5;
          ctx.strokeStyle = `rgba(147, 112, 219, ${opacity})`;
          ctx.stroke();
        }
      });
      
      animationFrameId.current = requestAnimationFrame(drawNetwork);
    };
    
    // Start the animation
    handleResize();
    drawNetwork();
    
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
