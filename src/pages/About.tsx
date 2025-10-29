// import React from "react";
import QuantumCalculator from "../components/interactive/QuantumCalculator";
import QuantumSideDecorations from "../components/decorations/QuantumSideDecorations";

const AboutPage = () => {
  return (
    <div className="relative">
      <QuantumSideDecorations />
      
      {/* Header */}
      <br /><br /><br />
      <section className="relative bg-gray-800 py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mt-10 text-white">About QSEC</h1>
      </section>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Interactive Quantum Calculator */}
          <div className="mb-8">
            <QuantumCalculator />
          </div>
          {/* About QSEC */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              The Quantum Science and Engineering Club was founded in 2023 by Haneen Sakaji,
              a medical physics student at Toronto Metropolitan University. Combining her
              passion for quantum science and her background in biomedical applications,
              Haneen started the club to create a community where students could explore
              the exciting intersection of quantum mechanics, engineering, and real-world
              applications.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is to inspire curiosity and foster collaboration among students
              interested in quantum science and its potential to revolutionize fields
              like computing, communication, and even medicine. With hands-on workshops,
              guest speakers, and interdisciplinary projects, the club provides a platform
              to bridge theoretical concepts with innovative applications.
            </p>
          </div>

          {/* Why Join Us */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Why Join Us?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're intrigued by the mysteries of quantum physics or looking
              to contribute to cutting-edge technological advancements, the Quantum Science
              and Engineering Club is a space for you to learn, grow, and innovate.
            </p>
          </div>

          {/* Our Motto */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Motto</h2>
            <p className="text-2xl text-purple-400 font-semibold">
              Empowering Innovation, Bridging Quantum Futures.
            </p>
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

export default AboutPage;
