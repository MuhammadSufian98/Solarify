import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoArrowBack, IoArrowForward, } from "react-icons/io5";

const reviews = [
  {
    Image1: "/Services/review1.jpg",
    Image2: "/Services/review2.png",
    name: "Maddox Amason",
    location: "California, LA",
    quote:
      "The process was seamless, thanks to the knowledgeable and professional team at Solar Eco Solutions. From the initial consultation to the installation and beyond, their expertise was evident. They patiently explained every step, addressing all my queries and concerns.",
  },
  {
    Image1: "/Services/review3.jpg",
    Image2: "/Services/review4.png",
    name: "Sophia Riley",
    location: "Austin, TX",
    quote:
      "Absolutely love their service! The installation was quick and the team was very professional. My energy bills have dropped significantly. Highly recommended!",
  },
  {
    Image1: "/Services/review5.jpg",
    Image2: "/Services/review6.jpg",
    name: "James Carter",
    location: "New York, NY",
    quote:
      "Excellent customer service and very reliable. Everything was done on time and with great attention to detail. Would work with them again in a heartbeat.",
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const current = reviews[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 px-4 bg-white flex flex-col items-center">
      <h2 className="md:text-5xl text-3xl  leading-tight font-semibold text-center text-[#0C0C3C] !mb-15 text-nowrap">
        Powering voices of <br /> satisfaction our clients.
      </h2>

      <div className="flex flex-col lg:flex-row items-center  gap-22  max-w-7xl w-full ">
        {/* Images */}
        <div className="relative w-full lg:w-1/2 flex !m-0 ">
          <img
            src={current.Image1}
            alt={current.name}
            className="md:w-85 md:h-105 w-60 h-70  rounded-xl transform rotate-[-10deg] shadow-lg !m-0 !mx-8"
          />
          <img
            src={current.Image2}
            alt="secondary"
            className="md:w-65 md:h-80 w-40 h-60 rounded-xl transform rotate-[10deg] absolute top-10 md:right-13 right-1 shadow-md !m-0"
          />
        </div>

        {/* Quote */}
        <div className="w-full lg:w-2/5  !m-0 ">
          <span className="text-5xl text-[#7b78f7] !mb-4 block">❝</span>
          {/* <span className="text-5xl text-[#7b78f7] !mb-4 block"><FaQuoteLeft /></span> */}
          
          <p className="text-xl text-gray-700 leading-relaxed !mb-6">{current.quote}</p>
          <p className="font-bold text-xl text-[#0C0C3C]">{current.name}</p>
          <p className="text-gray-600 font-semibold">{current.location}</p>

          {/* Navigation Buttons */}
          <div className="flex justify-start w-[30%] !mt-6 !m-0 ">
            <button
              onClick={handlePrev}
              className=" p-3 rounded-full cursor-pointer border border-gray-300 flex items-center justify-center hover:bg-[#7b78f7] hover:text-white transition"
            >
              <IoArrowBack size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full cursor-pointer border border-gray-300 flex items-center justify-center hover:bg-[#7b78f7] hover:text-white transition"
            >
              <IoArrowForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
