import React from "react";
import Hero from "../components/home/Hero";
import Gallery from "../components/home/Gallery";
import Motto from "../components/home/Motto";
import QuantumParticles from "../components/interactive/QuantumParticles";

const Home: React.FC = () => {
  return (
    <div className="relative">
      <QuantumParticles />
      <Hero />
      <Gallery />
      <Motto />
   
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

export default Home;
