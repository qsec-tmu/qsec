import React, { useState, useEffect } from 'react';

const QuantumGame: React.FC = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    type: 'quantum' | 'classical';
    caught: boolean;
  }>>([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameActive(false);
      setGameOver(true);
    }
  }, [gameActive, timeLeft]);

  useEffect(() => {
    if (gameActive) {
      const interval = setInterval(() => {
        setParticles(prev => {
          const newParticle = {
            id: Date.now() + Math.random(),
            x: Math.random() * 300,
            y: 0,
            type: Math.random() > 0.7 ? 'quantum' : 'classical',
            caught: false
          };
          return [...prev, newParticle];
        });
      }, 800);

      return () => clearInterval(interval);
    }
  }, [gameActive]);

  useEffect(() => {
    if (gameActive) {
      const interval = setInterval(() => {
        setParticles(prev => 
          prev.map(particle => ({
            ...particle,
            y: particle.y + 2
          })).filter(particle => particle.y < 400)
        );
      }, 50);

      return () => clearInterval(interval);
    }
  }, [gameActive]);

  const catchParticle = (id: number, type: 'quantum' | 'classical') => {
    if (type === 'quantum') {
      setScore(score + 10);
    } else {
      setScore(Math.max(0, score - 5));
    }
    
    setParticles(prev => prev.map(particle => 
      particle.id === id ? { ...particle, caught: true } : particle
    ));
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    setGameOver(false);
    setParticles([]);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-white mb-4">Quantum Particle Catcher</h3>
      
      <div className="text-center mb-6">
        <div className="text-3xl font-bold text-purple-400 mb-2">Score: {score}</div>
        <div className="text-lg text-gray-300 mb-4">Time: {timeLeft}s</div>
        
        {!gameActive && !gameOver && (
          <button
            onClick={startGame}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Start Quantum Game
          </button>
        )}
        
        {gameOver && (
          <div className="mb-4">
            <div className="text-2xl font-bold text-white mb-2">Game Over!</div>
            <div className="text-lg text-gray-300 mb-4">
              Final Score: {score}
            </div>
            <button
              onClick={startGame}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Play Again
            </button>
          </div>
        )}
      </div>

      {gameActive && (
        <div className="mb-4">
          <div className="text-sm text-gray-400 mb-2">
            Catch quantum particles (purple) for +10 points, avoid classical particles (gray) for -5 points
          </div>
        </div>
      )}

      {/* Game Area */}
      <div className="relative w-full h-96 bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
        {particles.map(particle => (
          <button
            key={particle.id}
            onClick={() => catchParticle(particle.id, particle.type)}
            className={`absolute w-6 h-6 rounded-full transition-all duration-200 ${
              particle.type === 'quantum' 
                ? 'bg-purple-500 hover:bg-purple-400' 
                : 'bg-gray-500 hover:bg-gray-400'
            } ${particle.caught ? 'opacity-0' : 'opacity-100'}`}
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-xs text-white">
              {particle.type === 'quantum' ? '⚛️' : '●'}
            </div>
          </button>
        ))}
        
        {gameActive && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-sm text-gray-400">
              Click particles to catch them!
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-sm text-gray-400">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <span>Quantum (+10)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
            <span>Classical (-5)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumGame;
