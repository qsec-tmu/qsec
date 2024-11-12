import React, { useState } from "react";

const Gallery: React.FC = () => {
  const images = [
    "src/assets/IMG_4164.JPG",
    "src/assets/IMG_4176.JPG",
    "src/assets/IMG_7187.JPG",
    "src/assets/IMG_4177.JPG",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("");

  const handleNext = () => {
    setTransitionDirection("right");
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setTransitionDirection("left");
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleImageClick = (index: number) => {
    if (index > currentImageIndex) {
      setTransitionDirection("right");
    } else {
      setTransitionDirection("left");
    }
    setCurrentImageIndex(index);
  };

  const getPrevIndex = () =>
    (currentImageIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (currentImageIndex + 1) % images.length;

  return (
    <section className="p-8 text-center bg-gray-100">
      <h2 className="text-3xl font-semibold mb-4">
        View Some of Our Pictures:
      </h2>
      <div className="relative flex justify-between items-center mb-4 w-full">
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10 block md:hidden"
        >
          ◀
        </button>
        <div className="flex justify-between items-center w-full h-[60vh] md:h-[80vh]">
          <img
            src={images[getPrevIndex()]}
            alt={`Gallery ${getPrevIndex() + 1}`}
            onClick={() => handleImageClick(getPrevIndex())}
            className={`w-1/4 md:w-1/3 h-full object-cover opacity-50 transform scale-90 transition-transform duration-700 ease-in-out cursor-pointer ${
              transitionDirection === "left"
                ? "animate-fade-slide-left"
                : "animate-fade-slide-right"
            }`}
          />
          <img
            src={images[currentImageIndex]}
            alt={`Gallery ${currentImageIndex + 1}`}
            className={`w-1/2 md:w-1/3 h-full object-cover rounded-lg transition-transform duration-700 ease-in-out ${
              transitionDirection === "left"
                ? "animate-fade-slide-left"
                : "animate-fade-slide-right"
            }`}
          />
          <img
            src={images[getNextIndex()]}
            alt={`Gallery ${getNextIndex() + 1}`}
            onClick={() => handleImageClick(getNextIndex())}
            className={`w-1/4 md:w-1/3 h-full object-cover opacity-50 transform scale-90 transition-transform duration-700 ease-in-out cursor-pointer ${
              transitionDirection === "left"
                ? "animate-fade-slide-left"
                : "animate-fade-slide-right"
            }`}
          />
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10 block md:hidden"
        >
          ▶
        </button>
      </div>
      <h2 className="text-3xl font-semibold mb-4">Our Purpose</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Welcome to the Quantum Science and Engineering Club at TMU. Our mission
        is to connect students with industry leaders, host educational events,
        and advance understanding of quantum technology. Join us to secure
        career opportunities, learn, and contribute to the future of quantum
        science.
      </p>
    </section>
  );
};

export default Gallery;
