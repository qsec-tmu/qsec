import React from 'react';

const QuantumFloatingElements: React.FC = () => {
  return (
    <>
      {/* Floating Quantum Elements for Events/Blog pages */}
      
      {/* Top Left */}
      <div className="fixed top-20 left-8 z-10 w-8 h-8 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400 animate-pulse">
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" className="animate-spin" style={{animationDuration: '15s'}}/>
          <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.7"/>
        </svg>
      </div>
      
      {/* Top Right */}
      <div className="fixed top-32 right-12 z-10 w-10 h-10 opacity-15">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400 animate-bounce" style={{animationDuration: '3s'}}>
          <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse"/>
          <circle cx="50" cy="50" r="4" fill="currentColor"/>
        </svg>
      </div>
      
      {/* Middle Left */}
      <div className="fixed top-1/2 left-6 z-10 w-6 h-6 opacity-25">
        <svg viewBox="0 0 100 100" className="w-full h-full text-green-400 animate-spin" style={{animationDuration: '20s'}}>
          <polygon points="50,15 70,45 50,75 30,45" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="50" r="6" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
        </svg>
      </div>
      
      {/* Middle Right */}
      <div className="fixed top-1/2 right-8 z-10 w-7 h-7 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400 animate-pulse">
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" className="animate-spin" style={{animationDuration: '25s'}}/>
          <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.6"/>
        </svg>
      </div>
      
      {/* Bottom Left */}
      <div className="fixed bottom-32 left-10 z-10 w-9 h-9 opacity-15">
        <svg viewBox="0 0 100 100" className="w-full h-full text-pink-400 animate-bounce" style={{animationDuration: '4s'}}>
          <path d="M30,30 L70,30 L50,70 Z" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse"/>
          <circle cx="50" cy="45" r="3" fill="currentColor"/>
        </svg>
      </div>
      
      {/* Bottom Right */}
      <div className="fixed bottom-20 right-6 z-10 w-8 h-8 opacity-25">
        <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-400 animate-spin" style={{animationDuration: '18s'}}>
          <path d="M50,10 L60,40 L90,40 L70,60 L80,90 L50,70 L20,90 L30,60 L10,40 L40,40 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
      
      {/* Additional scattered elements */}
      <div className="fixed top-1/4 left-1/4 z-10 w-5 h-5 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400 animate-ping">
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
          <circle cx="50" cy="50" r="5" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="fixed top-3/4 right-1/4 z-10 w-6 h-6 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400 animate-pulse">
          <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" className="animate-spin" style={{animationDuration: '30s'}}/>
          <circle cx="50" cy="50" r="4" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="fixed top-1/3 right-1/3 z-10 w-4 h-4 opacity-25">
        <svg viewBox="0 0 100 100" className="w-full h-full text-green-400 animate-bounce" style={{animationDuration: '2s'}}>
          <path d="M50,20 L60,40 L80,40 L65,55 L70,75 L50,65 L30,75 L35,55 L20,40 L40,40 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
      
      <div className="fixed bottom-1/4 left-1/3 z-10 w-5 h-5 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400 animate-spin" style={{animationDuration: '22s'}}>
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3"/>
          <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>
    </>
  );
};

export default QuantumFloatingElements;
