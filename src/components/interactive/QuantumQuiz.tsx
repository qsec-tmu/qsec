import React, { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is quantum superposition?",
    options: [
      "A particle can be in multiple states simultaneously",
      "Particles can only exist in one state at a time",
      "Quantum particles are always moving",
      "Superposition is just a theory"
    ],
    correct: 0,
    explanation: "Quantum superposition allows particles to exist in multiple states simultaneously until measured, which is fundamental to quantum computing."
  },
  {
    id: 2,
    question: "What is quantum entanglement?",
    options: [
      "Particles that are physically connected",
      "Particles that share quantum states regardless of distance",
      "Particles that move in the same direction",
      "A type of quantum computer"
    ],
    correct: 1,
    explanation: "Quantum entanglement is when particles share quantum states, so measuring one instantly affects the other, even across vast distances."
  },
  {
    id: 3,
    question: "How many classical bits can a quantum computer simulate with 50 qubits?",
    options: [
      "50 bits",
      "100 bits", 
      "1,125,899,906,842,624 bits (2^50)",
      "50,000 bits"
    ],
    correct: 2,
    explanation: "A quantum computer with 50 qubits can simulate 2^50 classical bits, demonstrating exponential computational power."
  }
];

const QuantumQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Quiz Complete!</h3>
        <div className="text-4xl font-bold text-purple-400 mb-4">
          {score}/{questions.length}
        </div>
        <p className="text-gray-300 mb-6">
          {score === questions.length 
            ? "Perfect! You're a quantum expert! 🎉" 
            : score >= questions.length / 2 
            ? "Great job! You know your quantum basics! 🌟"
            : "Keep learning! Quantum physics is fascinating! 📚"
          }
        </p>
        <button
          onClick={resetQuiz}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">Quantum Knowledge Quiz</h3>
        <span className="text-sm text-gray-400">
          {currentQuestion + 1} of {questions.length}
        </span>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-4">{question.question}</h4>
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showResult}
              className={`w-full text-left p-3 rounded-lg border transition-colors ${
                showResult
                  ? index === question.correct
                    ? 'bg-green-600 border-green-500 text-white'
                    : index === selectedAnswer
                    ? 'bg-red-600 border-red-500 text-white'
                    : 'bg-gray-700 border-gray-600 text-gray-300'
                  : 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {showResult && (
        <div className="mb-4">
          <div className={`p-3 rounded-lg mb-3 ${
            isCorrect ? 'bg-green-900 border border-green-500' : 'bg-red-900 border border-red-500'
          }`}>
            <p className={`font-semibold ${
              isCorrect ? 'text-green-300' : 'text-red-300'
            }`}>
              {isCorrect ? 'Correct! 🎉' : 'Incorrect 😔'}
            </p>
          </div>
          <p className="text-gray-300 text-sm">{question.explanation}</p>
        </div>
      )}

      {showResult && (
        <button
          onClick={nextQuestion}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
        </button>
      )}
    </div>
  );
};

export default QuantumQuiz;
