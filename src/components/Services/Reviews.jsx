import React, { useState } from "react";
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
    <section className="py-20 px-4 bg-white flex flex-col items-center pb-150">
      <h2 className="text-4xl font-bold text-center text-[#0C0C3C] !mb-15">
        Powering voices of <br /> satisfaction our clients.
      </h2>

      <div className="flex flex-col lg:flex-row items-center  gap-22  max-w-8xl w-full bg-amber-300">
        {/* Images */}
        <div className="relative w-full lg:w-1/2 flex justify-start bg-red-500">
          <img
            src={current.Image1}
            alt={current.name}
            className="w-85 h-105  rounded-xl transform rotate-[-10deg] shadow-lg"
          />
          {/* <img
            src={current.Image2}
            alt="secondary"
            className="w-65 h-80  rounded-xl transform rotate-[6deg] absolute top-10 left-88 shadow-md"
          /> */}
        </div>

        {/* Quote */}
        <div className="w-full lg:w-2/5 bg-blue-300">
          <span className="text-5xl text-[#7b78f7] !mb-4 block">❝</span>
          <p className="text-lg text-gray-700 leading-relaxed !mb-6">{current.quote}</p>
          <p className="font-bold text-xl text-[#0C0C3C]">{current.name}</p>
          <p className="text-gray-500">{current.location}</p>

          {/* Navigation Buttons */}
          <div className="flex justify-start w-[20%] !mt-6">
            <button
              onClick={handlePrev}
              className=" p-2 rounded-full cursor-pointer border border-gray-300 flex items-center justify-center hover:bg-[#7b78f7] hover:text-white transition"
            >
              <IoArrowBack size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full cursor-pointer border border-gray-300 flex items-center justify-center hover:bg-[#7b78f7] hover:text-white transition"
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
