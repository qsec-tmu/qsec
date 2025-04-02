import React from "react";
import { Link } from "react-router-dom"; 

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white text-black fixed top-0 left-0 w-full z-10 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full">
          <img src ="src\assets\1738277998717-2208217d-a878-4b79-8d45-8567638453f2_1.jpg"></img>
          </div> {/* Purple Logo */}
        <span className="text-2xl sm:text-xl md:text-2xl font-bold hidden sm:block">
          Quantum Science and Engineering
        </span>
        <span className="text-2xl sm:text-xl md:text-2xl font-bold block sm:hidden">
        </span>
      </div>

      {/* Links Section */}
      <div className="flex space-x-8 text-lg sm:text-base md:text-lg lg:text-xl">
        <Link to="/" className="hover:text-purple-400 cursor-pointer">
          Home
        </Link>
        <Link to="/about" className="hover:text-purple-400 cursor-pointer">
          About
        </Link>
        <Link to="/events" className="hover:text-purple-400 cursor-pointer">
          Events
        </Link>
        <Link to="/blog" className="hover:text-purple-400 cursor-pointer">
          Blog
        </Link>
        <Link to="/contact" className="hover:text-purple-400 cursor-pointer">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;