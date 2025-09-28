import React from 'react';

const QuantumSideDecorations: React.FC = () => {
  return (
    <>
      {/* Left Side Quantum Elements */}
      <div className="fixed left-4 top-1/4 z-10 w-16 h-16 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400 animate-pulse">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="animate-spin" style={{animationDuration: '20s'}}/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" className="animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}/>
          <circle cx="50" cy="50" r="5" fill="currentColor" className="animate-ping"/>
        </svg>
      </div>
      
      <div className="fixed left-8 top-1/3 z-10 w-12 h-12 opacity-15">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400 animate-bounce" style={{animationDuration: '3s'}}>
          <path d="M20,50 Q50,20 80,50 Q50,80 20,50" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse"/>
          <circle cx="50" cy="50" r="3" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="fixed left-6 bottom-1/3 z-10 w-10 h-10 opacity-25">
        <svg viewBox="0 0 100 100" className="w-full h-full text-green-400 animate-spin" style={{animationDuration: '25s'}}>
          <polygon points="50,10 70,40 50,70 30,40" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
        </svg>
      </div>

      {/* Right Side Quantum Elements */}
      <div className="fixed right-4 top-1/4 z-10 w-14 h-14 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400 animate-pulse">
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" className="animate-spin" style={{animationDuration: '18s'}}/>
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" className="animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}}/>
          <circle cx="50" cy="50" r="4" fill="currentColor" className="animate-ping"/>
        </svg>
      </div>
      
      <div className="fixed right-8 top-1/3 z-10 w-11 h-11 opacity-15">
        <svg viewBox="0 0 100 100" className="w-full h-full text-pink-400 animate-bounce" style={{animationDuration: '4s'}}>
          <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse"/>
          <circle cx="50" cy="50" r="3" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="fixed right-6 bottom-1/3 z-10 w-9 h-9 opacity-25">
        <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-400 animate-spin" style={{animationDuration: '22s'}}>
          <path d="M50,10 L60,40 L90,40 L70,60 L80,90 L50,70 L20,90 L30,60 L10,40 L40,40 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      {/* Additional floating elements */}
      <div className="fixed left-12 top-1/2 z-10 w-6 h-6 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full text-purple-400 animate-ping">
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3"/>
          <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.6"/>
        </svg>
      </div>
      
      <div className="fixed right-12 top-1/2 z-10 w-7 h-7 opacity-25">
        <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400 animate-pulse">
          <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin" style={{animationDuration: '30s'}}/>
          <circle cx="50" cy="50" r="5" fill="currentColor"/>
        </svg>
      </div>
    </>
  );
};

export default QuantumSideDecorations;
