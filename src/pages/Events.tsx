import React from "react";

const EventsPage: React.FC = () => {
  // Placeholder event data
  const events = [
    {
      id: 1,
      title: "Quantum Computing Seminar",
      date: "March 15, 2024",
      description: "A deep dive into the fundamentals of quantum computing and its future applications.",
      image: "https://unsplash.com/photos/NpTbVOkkom8",
    },
    {
      id: 2,
      title: "Engineering the Future",
      date: "April 10, 2024",
      description: "An interactive discussion on the role of engineering in the future of science.",
      image: "https://unsplash.com/photos/GvFcBFNJZIU",
    },
    {
      id: 3,
      title: "Quantum Mechanics Symposium",
      date: "May 22, 2024",
      description: "A panel of experts discussing recent breakthroughs in quantum mechanics.",
      image: "https://unsplash.com/photos/ogN1z6hH66o",
    },
    {
      id: 4,
      title: "AI and Quantum Computing",
      date: "June 5, 2024",
      description: "Exploring the intersection of artificial intelligence and quantum computing.",
      image: "https://unsplash.com/photos/hpjSkU2UYSU",
    },
  ];

  return (
    <section className="pt-32 sm:pt-24 p-8 text-center bg-white min-h-screen w-full">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">Past Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="bg-gray-100 shadow-md rounded-xl overflow-hidden w-full max-w-sm mx-auto transition-transform duration-500 hover:scale-105 h-96 sm:h-[46rem] flex flex-col relative bg-cover bg-center"
            style={{ backgroundImage: `url(${event.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="p-4 flex-1 flex flex-col justify-end relative z-10 text-white">
              <h2 className="text-lg sm:text-xl font-semibold text-center mb-2">{event.title}</h2>
              <p className="text-gray-300 text-xs sm:text-sm text-center">{event.date}</p>
              <p className="mt-2 text-gray-200 text-sm sm:text-base text-center">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsPage;