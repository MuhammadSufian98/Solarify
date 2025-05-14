import React from 'react';
import { FaPlus } from "react-icons/fa6";

const iconArray = [
  {
    id: 1,
    icon: "45",
    plus:<FaPlus className="text-xl font-semibold" />,
    heading: "Released Projects",
    desc: "Successfully finished projects within deadline",
  },
  {
    id: 2,
    icon: "25",
    plus:<FaPlus className="text-xl font-semibold" />,
    heading: "Happy Clients",
    desc: "Trusted clients who love our services",
  },
  {
    id: 3,
    icon: "30",
    plus:<FaPlus className="text-xl font-semibold" />,
    heading: "Ongoing Projects",
    desc: "Experienced engineers are working on projects",
  },
];

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center py-10 gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-10 max-w-3xl">
          <h1 className="text-2xl font-bold md:text-[100px] text-center md:font-bold text-gray-900 leading-tight">
            ABOUT <span className="">SOLARIFY.</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {iconArray.map((item) => (
              <div
                key={item.id}
                className=" border-none lg:border-r lg:border-gray-400 flex flex-col gap-3 p-3 text-center "
              >
                <div className="text-5xl flex gap-1 font-bold text-blue-500 mb-2">{item.icon}{item.plus}</div>
                <h2 className="text-xl font-semibold text-gray-800 mb-1">{item.heading}</h2>
                <p className="text-gray-500 text-md font-semibold  ">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full sm:w-80  flex-shrink-0">
          <img
            className="w-full h-auto hover:transform hover:scale-102 transition duration-200 cursor-text rounded-xl shadow-lg"
            src="/About/hero.avif"
            alt="About Solarify"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
