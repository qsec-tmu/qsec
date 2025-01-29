import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Motto from "./components/Motto";
import './index.css';
import EventsPage from "./pages/Events";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Gallery />
      <Motto />
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="text-black p-8 bg-white h-screen flex items-center justify-center">
      <h1>Welcome to the About page!</h1>
    </div>
  );
};

const Events: React.FC = () => {
  return (
    <div className="text-black p-8 bg-white h-screen flex items-center justify-center">
      <EventsPage />
    </div>
  );
};

const Blog: React.FC = () => {
  return (
    <div className="text-black p-8 bg-white h-screen flex items-center justify-center">
      <h1>Welcome to the Blog page!</h1>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="text-black p-8 bg-white h-screen flex items-center justify-center">
      <h1>Welcome to the Contact page!</h1>
    </div>
  );
};

export default App;
