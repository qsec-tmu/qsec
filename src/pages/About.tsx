import React from "react";

const AboutPage = () => {
  //Motto Component
  const Motto: React.FC = () => {
    return (
      <section className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Motto</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Empowering Innovation, Bridging Quantum Futures.
        </p>
      </section>
    );
  };

  return (
    <div className="w-full flex flex-col justify-start items-center min-h-screen bg-white text-black">
      <div className="w-full px-12 py-8">
        {/*About QSEC */}
        <h1 className="text-3xl font-bold mt-20 text-center">About QSEC</h1>
        <p className="text-base mt-6 text-center max-w-4xl mx-auto">
          The Quantum Science and Engineering Club was founded in 2023 by Haneen Sakaji,
          a medical physics student at Toronto Metropolitan University. Combining her
          passion for quantum science and her background in biomedical applications,
          Haneen started the club to create a community where students could explore
          the exciting intersection of quantum mechanics, engineering, and real-world
          applications.
        </p>

        {/*Our Mission */}
        <h2 className="text-3xl font-bold mt-12 text-center">Our Mission</h2>
        <p className="text-base mt-6 text-center max-w-4xl mx-auto">
          Our mission is to inspire curiosity and foster collaboration among students
          interested in quantum science and its potential to revolutionize fields
          like computing, communication, and even medicine. With hands-on workshops,
          guest speakers, and interdisciplinary projects, the club provides a platform
          to bridge theoretical concepts with innovative applications.
        </p>

        {/*Why Join Us? */}
        <h2 className="text-3xl font-bold mt-12 text-center">Why Join Us?</h2>
        <p className="text-base mt-6 text-center max-w-4xl mx-auto">
          Whether you're intrigued by the mysteries of quantum physics or looking
          to contribute to cutting-edge technological advancements, the Quantum Science
          and Engineering Club is a space for you to learn, grow, and innovate.
        </p>
      </div>

      {/* Footer */}
      <footer className="w-full mt-auto">
        <Motto /> 
      </footer>
    </div>
  );
};

export default AboutPage;
