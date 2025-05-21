import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-[140px] sm:min-h-[400px] bg-[url('/Pdetail/hero.avif')] bg-cover bg-center">
      <h1 className="text-center text-4xl md:text-6xl lg:text-[80px] font-bold text-white leading-tight">
        <span>PROJECT</span>
        <br />
        <span>DETAIL</span>
      </h1>
    </div>
  );
};

export default Hero;
