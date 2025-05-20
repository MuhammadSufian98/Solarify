import React from 'react';
import PrivacyHero from "/public/privecy.webp";// adjust the path as needed

const Hero = () => {
  return (
    <div
      className="relative w-full h-60 md:h-80 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${PrivacyHero})` }}
    >
      {/* Background Image with Text */}
      <h1 className="relative text-white text-4xl sm:text-8xl font-bold z-10">
        CONTACT US
      </h1>
    </div>
  );
};

export default Hero;
