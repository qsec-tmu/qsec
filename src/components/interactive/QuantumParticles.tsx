import React, { useEffect, useRef } from 'react';

const QuantumParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation loop
    const animate = (timestamp: number) => {
      timeRef.current = timestamp * 0.001; // Convert to seconds
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.02)');
      gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.02)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0.02)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw quantum waves
      const waveCount = 3;
      for (let i = 0; i < waveCount; i++) {
        ctx.save();
        
        const waveOffset = (i / waveCount) * Math.PI * 2;
        const waveSpeed = 0.5 + i * 0.2;
        const waveAmplitude = 30 + i * 10;
        const waveFrequency = 0.01 + i * 0.005;
        
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 - i * 0.02})`;
        ctx.lineWidth = 2 - i * 0.5;
        ctx.beginPath();
        
        for (let x = 0; x < canvas.width; x += 2) {
          const y = canvas.height / 2 + 
            Math.sin(x * waveFrequency + timeRef.current * waveSpeed + waveOffset) * waveAmplitude +
            Math.sin(x * waveFrequency * 2 + timeRef.current * waveSpeed * 1.5) * (waveAmplitude * 0.3);
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
        ctx.restore();
      }

      // Draw floating quantum dots
      const dotCount = 8;
      for (let i = 0; i < dotCount; i++) {
        const angle = (i / dotCount) * Math.PI * 2 + timeRef.current * 0.3;
        const radius = 100 + Math.sin(timeRef.current * 0.5 + i) * 50;
        const x = canvas.width / 2 + Math.cos(angle) * radius;
        const y = canvas.height / 2 + Math.sin(angle) * radius * 0.6;
        
        const dotSize = 3 + Math.sin(timeRef.current * 2 + i) * 1;
        const opacity = 0.3 + Math.sin(timeRef.current * 1.5 + i) * 0.2;
        
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = '#8B5CF6';
        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw subtle grid
      ctx.save();
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.05)';
      ctx.lineWidth = 0.5;
      
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

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
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default QuantumParticles;