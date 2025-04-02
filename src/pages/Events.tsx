import React from "react";

const events = [
  {
    title: "Quantum Computing Workshop",
    date: "October 10, 2024",
    description: "Explore the fundamentals of quantum computing and its real-world applications.",
    image: "../src/assets/IMG_4164.JPG",
  },
  {
    title: "Google's Cubit Game Introduction",
    date: "February 13, 2025",
    description: "A very basic, beginner-friendly intoduction to quantum computing through a gaming theme.",
    image: "../src/assets/IMG_4176.JPG",
  },
  {
    title: "Quantum Opportunities Panel",
    date: "November 12, 2024",
    description: "A panel the club has hosted, starring proffesionals in the field from UofT, IBM, and TMU.",
    image: "../src/assets/IMG_4177.JPG",
  },
];

const Events: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Upcoming Events</h1>
      <p className="text-center text-2xl max-w-2xl mb-8 pt-8 text-white font-bold">
        Join us for engaging discussions, workshops, and experiments exploring the mysteries of quantum science.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {events.map((event, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-96 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{event.title}</h2>
              <p className="text-gray-400">{event.date}</p>
              <p className="text-gray-300 mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-semibold text-center mt-8">And Many More to Come!</h2>
    </div>
  );
}; 

export default Events;