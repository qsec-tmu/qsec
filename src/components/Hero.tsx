import React from "react";

// Array of quantum quotes for each day of the week
const quantumQuotes = [
  "'The quantum realm: where time flows like a river and stands still like a mountain.' - Dr. Mira Holt",
  "'In the quantum world, reality is only as real as our perception of it.' - Prof. Elias Carter",
  "'Entanglement is not just a phenomenon, it’s the whisper of the universe’s connectivity.' - Dr. Sophia Lin",
  "'Every quantum state holds infinite possibilities; choose the one that inspires you.' - Dr. Kai Navarro",
  "'Particles may be uncertain, but in their dance lies the certainty of existence.' - Prof. Anya Rhee",
  "'Quantum leaps teach us that change is not linear, but revolutionary.' - Dr. Victor Maelis",
  "'Superposition reminds us that we are not one thing but many, waiting to be observed.' - Dr. Lila Travers"
];

const Hero: React.FC = () => {
  const today = new Date().getDay(); // 0 for Sunday, 1 for Monday, etc.
  const quote = quantumQuotes[today];

  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-cover bg-center bg-[url('./src/assets/heroBackground.png')] text-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center">
        Quantum Science and Engineering
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl text-center">
        {quote}
      </p>
    </div>
  );
};

export default Hero;