import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import Navbar from "./components/nav/Navbar";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div className="w-full min-h-screen flex flex-col">
        {/* Header */}
        <Navbar />

        {/* Main */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="contact" element={<Contact/>} />
          </Routes>
        </main>

        {/* Footer */}
        {/** TODO: move footer to separate component */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2024 QSEC
        </footer>
      </div>
    </Router>
  );
};

export default App;