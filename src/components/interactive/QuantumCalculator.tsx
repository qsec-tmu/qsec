import React, { useState } from 'react';

const QuantumCalculator: React.FC = () => {
  const [qubits, setQubits] = useState(2);

  const states = Math.pow(2, qubits);

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold text-white mb-4">Quantum States Calculator</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Number of Qubits: {qubits}
          </label>
          <input
            type="range"
            min="1"
            max="8"
            value={qubits}
            onChange={(e) => setQubits(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>1</span>
            <span>8</span>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">{states.toLocaleString()}</div>
            <div className="text-sm text-gray-300">Quantum States</div>
            <div className="text-xs text-gray-400 mt-2">
              {qubits === 1 && "Single qubit: |0⟩ or |1⟩"}
              {qubits === 2 && "Two qubits: 4 possible states"}
              {qubits === 3 && "Three qubits: 8 possible states"}
              {qubits === 4 && "Four qubits: 16 possible states"}
              {qubits === 5 && "Five qubits: 32 possible states"}
              {qubits === 6 && "Six qubits: 64 possible states"}
              {qubits === 7 && "Seven qubits: 128 possible states"}
              {qubits === 8 && "Eight qubits: 256 possible states"}
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-400 text-center">
          Each additional qubit doubles the computational power!
        </div>
      </div>
    </div>
  );
};

export default QuantumCalculator;
