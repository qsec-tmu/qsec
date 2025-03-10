import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-12 min-h-screen bg-white text-black">
      <h1 className="text-3xl font-bold mt-12 text-center">About QSEC</h1>
      <p className="text-lg mt-6 text-center max-w-4xl">
        The Quantum Science and Engineering Club was founded in 2023 by Haneen Sakaji,
        a medical physics student at Toronto Metropolitan University. Combining her passion
        for quantum science and her background in biomedical applications, Haneen started
        the club to create a community where students could explore the exciting intersection
        of quantum mechanics, engineering, and real-world applications.
      </p>

      <h2 className="text-2xl font-semibold mt-8 text-center">Our Mission</h2>
      <p className="text-lg mt-4 text-center max-w-4xl">
        Our mission is to inspire curiosity and foster collaboration among students
        interested in quantum science and its potential to revolutionize fields like computing,
        communication, and even medicine. With hands-on workshops, guest speakers, and
        interdisciplinary projects, the club provides a platform to bridge theoretical
        concepts with innovative applications.
      </p>

      <h2 className="text-2xl font-semibold mt-8 text-center">Why Join Us?</h2>
      <p className="text-lg mt-4 text-center max-w-4xl">
        Whether you're intrigued by the mysteries of quantum physics or looking to contribute
        to cutting-edge technological advancements, the Quantum Science and Engineering Club
        is a space for you to learn, grow, and innovate.
      </p>

      <h2 className="text-2xl font-semibold mt-12 text-center text-blue-300">
        "Exploring the Quantum Future, One Qubit at a Time."
      </h2>

      <footer className="w-full py-6 bg-white text-black text-center mt-12">
        <p>&copy; 2024 Quantum Science and Engineering Club</p>
      </footer>
    </div>
  );
};

export default AboutPage;