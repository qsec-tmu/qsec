import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-[#ffffff] w-full min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-secondary text-white py-4 px-10">
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/events" className="hover:underline">
                  Events
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2024 QSEC
        </footer>
      </div>
    </Router>
  );
};

export default App;
