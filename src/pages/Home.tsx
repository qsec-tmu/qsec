import React from "react";
import Hero from "../components/home/Hero";
import Gallery from "../components/home/Gallery";
import Motto from "../components/home/Motto";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Gallery />
      <Motto />
    </div>
  );
};

export default Home;
