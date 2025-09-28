import React, { useState, useEffect } from 'react';

const QuantumStateVisualizer: React.FC = () => {
  const [amplitude, setAmplitude] = useState(0.5);
  const [phase, setPhase] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setPhase(prev => (prev + 0.1) % (2 * Math.PI));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  const realPart = amplitude * Math.cos(phase);
  const imagPart = amplitude * Math.sin(phase);
  const probability = amplitude * amplitude;

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold text-white mb-4">Quantum State Visualizer</h3>
      
      <div className="space-y-4">
        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Amplitude: {amplitude.toFixed(2)}
            </label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={amplitude}
              onChange={(e) => setAmplitude(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Phase: {(phase * 180 / Math.PI).toFixed(0)}°
            </label>
            <input
              type="range"
              min="0"
              max={2 * Math.PI}
              step="0.1"
              value={phase}
              onChange={(e) => setPhase(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
            isAnimating 
              ? 'bg-red-600 hover:bg-red-700 text-white' 
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
        >
          {isAnimating ? 'Stop Animation' : 'Start Animation'}
        </button>

        {/* Visualization */}
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-white mb-2">Quantum State: |ψ⟩</h4>
            <div className="text-sm text-gray-300">
              Real: {realPart.toFixed(3)} | Imaginary: {imagPart.toFixed(3)}i
            </div>
            <div className="text-sm text-purple-400 mt-1">
              Probability: {probability.toFixed(3)}
            </div>
          </div>

          {/* Complex plane visualization */}
          <div className="relative w-full h-48 bg-gray-800 rounded-lg border border-gray-600">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Axes */}
              <div className="absolute w-full h-px bg-gray-600"></div>
              <div className="absolute w-px h-full bg-gray-600"></div>
              
              {/* Quantum state vector */}
              <div
                className="absolute w-1 h-1 bg-purple-400 rounded-full transition-all duration-100"
                style={{
                  left: `calc(50% + ${realPart * 80}px)`,
                  top: `calc(50% - ${imagPart * 80}px)`,
                }}
              ></div>
              
              {/* Vector line */}
              <div
                className="absolute w-px bg-purple-400 transition-all duration-100"
                style={{
                  height: `${Math.sqrt(realPart * realPart + imagPart * imagPart) * 160}px`,
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${Math.atan2(imagPart, realPart)}rad)`,
                  transformOrigin: '0 0',
                }}
              ></div>
            </div>
            
            {/* Labels */}
            <div className="absolute top-2 left-2 text-xs text-gray-400">+i</div>
            <div className="absolute bottom-2 left-2 text-xs text-gray-400">-i</div>
            <div className="absolute top-2 right-2 text-xs text-gray-400">+1</div>
            <div className="absolute top-2 left-2 text-xs text-gray-400">-1</div>
          </div>
        </div>

        {/* Quantum Information */}
        <div className="bg-gray-900 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white mb-2">Quantum Information</h4>
          <div className="text-sm text-gray-300 space-y-1">
            <div>State: |ψ⟩ = {realPart.toFixed(3)}|0⟩ + {imagPart.toFixed(3)}i|1⟩</div>
            <div>Measurement probability: {probability.toFixed(3)}</div>
            <div>Phase angle: {(phase * 180 / Math.PI).toFixed(1)}°</div>
            <div>Normalization: {Math.abs(realPart * realPart + imagPart * imagPart - 1) < 0.01 ? '✓ Normalized' : '⚠ Not normalized'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumStateVisualizer;
