import React from "react";
import { Link } from "react-router-dom";
import QuantumGame from "../components/interactive/QuantumGame";

const NotFound: React.FC = () => {
  return (
    <div className="relative">
      {/* Header */}
      <br /><br /><br />
      <section className="relative bg-gray-800 py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mt-10 text-white">404 - Page Not Found</h1>
      </section>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 404 Message */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-6xl font-bold mb-6 text-white">404</h2>
              <p className="text-xl text-gray-300 mb-8">
                The page you are looking for does not exist.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                It looks like you've wandered into the quantum realm where pages exist in superposition.
                Let's get you back to reality!
              </p>
              <Link
                to="/"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold"
              >
                Return to Home
              </Link>
            </div>
            
            {/* Interactive Quantum Game */}
            <div>
              <QuantumGame />
            </div>
          </div>
        </div>
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

export default NotFound;
