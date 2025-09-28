import React, { useState } from "react";
import QuantumQuiz from "../components/interactive/QuantumQuiz";
import QuantumFloatingElements from "../components/decorations/QuantumFloatingElements";

const events = [
  {
    title: "Quantum Computing Workshop",
    date: "October 10, 2024",
    time: "4:00 PM - 5:00 PM",
    location: "TMU Science Building, Room 201",
    cost: "Free",
    description: "Join us for an immersive exploration into the fascinating world of quantum computing! This workshop is designed for both beginners and those with some background in computer science who want to understand the fundamentals of quantum computing and its real-world applications.",
    image: "../src/assets/IMG_4164.JPG",
  },
  {
    title: "Google's Cubit Game Introduction",
    date: "February 13, 2025",
    time: "4:00 PM - 5:00 PM",
    location: "TMU Science Building, Room 201",
    cost: "Free",
    description: "Get ready to dive into the quantum world through Google's innovative Cubit Game! This beginner-friendly introduction to quantum computing uses gaming mechanics to make complex quantum concepts accessible and fun for everyone.",
    image: "../src/assets/IMG_4176.JPG",
  },
  {
    title: "Quantum Opportunities Panel",
    date: "November 12, 2024",
    time: "4:00 PM - 5:00 PM",
    location: "TMU Science Building, Room 201",
    cost: "Free",
    description: "Join us for an exclusive panel discussion featuring leading professionals from the quantum computing industry. This event brings together experts from University of Toronto, IBM, and TMU to share insights about career opportunities, industry trends, and the future of quantum technology.",
    image: "../src/assets/IMG_4177.JPG",
  },
];

const Events: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const showMenu = () => {
    setMenuOpen(true);
  };

  const hideMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <QuantumFloatingElements />
      
      {/* Header */}
      <br /><br /><br />
      <section className="relative bg-gray-800 py-16 px-4 text-center">
        <nav className="absolute top-4 left-0 w-full flex justify-between items-center px-6">
          <div
            id="navLinks"
            className={`fixed top-0 right-[-100%] w-64 h-full bg-gray-800 flex flex-col gap-6 items-end px-6 pt-20 transition-all duration-300 z-50 ${
              menuOpen ? "right-0" : ""
            }`}
          >
            <i
              className="fa fa-times text-2xl cursor-pointer"
              onClick={hideMenu}
            ></i>
            {/* Add any links here */}
          </div>
          <i
            className="fa fa-bars text-white text-2xl cursor-pointer md:hidden"
            onClick={showMenu}
          ></i>
        </nav>
        <h1 className="text-5xl font-bold mt-10 text-white">Upcoming Events</h1>
      </section>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-8">
        <p className="text-center text-2xl max-w-2xl mb-8 pt-4 text-white">
          Join us for engaging discussions, workshops, and experiments exploring
          the mysteries of quantum science.
        </p>
        
        {/* Interactive Quantum Quiz */}
        <div className="mb-8 w-full max-w-2xl">
          <QuantumQuiz />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-96 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-semibold">{event.title}</h2>
                <div className="text-gray-400 space-y-1 mt-2">
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <p><strong>Cost:</strong> {event.cost}</p>
                </div>
                <p className="text-gray-300 mt-3">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold text-center mt-8">And Many More to Come!</h2>
      </div>

      {/* Footer */}
      <section className="bg-gray-800 text-gray-300 py-12 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 text-center md:text-left">
          {/* Left: Icons & Labels - Right Aligned */}
          <div className="space-y-8 md:w-1/2 md:items-end md:flex md:flex-col md:text-right pr-4">
            <h4 className="text-3xl font-bold mb-6 text-white">Contact Information</h4>
          </div>

          {/* Right: Actual Info/Links */}
          <div className="space-y-4 md:w-1/2 text-lg">
            <div>
              <p>qsectmus@gmail.com</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/qsec_tmu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                @qsec_tmu
              </a>
              <a
                href="https://discord.com/invite/k9fhQZ6Mvp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
