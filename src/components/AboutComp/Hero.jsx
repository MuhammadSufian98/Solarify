import React, { useState, useEffect } from "react";

const iconArray = [
  {
    id: 1,
    icon: 45,
    heading: "Released Projects",
    desc: "Successfully finished projects within deadline",
  },
  {
    id: 2,
    icon: 25,
    heading: "Happy Clients",
    desc: "Trusted clients who love our services",
  },
  {
    id: 3,
    icon: 30,
    heading: "Ongoing Projects",
    desc: "Experienced engineers are working on projects",
  },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // 1 second
    const incrementTime = Math.floor(duration / target);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === target) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [target]);

  return <span>{count}</span>;
};

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-[75%] mx-auto flex flex-col lg:flex-row justify-between items-center py-10 gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-10 max-w-3xl">
          <h1 className="text-3xl text-center sm:text-left  sm:text-[100px]   font-bold text-gray-900 leading-tight">
            ABOUT <span className="">SOLARIFY.</span>
          </h1>

          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {iconArray.map((item) => (
              <div
                key={item.id}
                className="   md:border-r md:border-gray-400 flex flex-col gap-2  p-6 text-center"
              >
                <div className="text-5xl font-bold text-blue-500 mb-2">
                  <Counter target={item.icon} />+
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.heading}
                </h2>
                <p className="text-gray-600 text-lg  leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

{/* Right Image */}
<div className="relative w-full sm:w-80 flex-shrink-0">
  <img
    className="w-full h-auto rounded-xl"
    src="/About/hero.avif"
    alt="About Solarify"
  />

{/* Rotating div with circular text and background image */}
<div className="absolute top-40 -left-10 rounded-full p-1 border border-gray-400 animate-spin">
  <div className="relative w-10 h-10 sm:w-24 sm:h-24 rounded-full bg-[url('/About/rotating1.jpg')] bg-cover bg-center shadow-md">

    {/* SVG for circular text */}
    <svg
      viewBox="0 0 100 100"
      className="absolute top-0 left-0 w-full h-full"
    >
      <defs>
        <path
          id="circlePath"
          d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
        />
      </defs>
      <text fill="" fontSize="15" fontWeight="600">
        <textPath href="#circlePath" startOffset="5%">
          best.agency.explorer.best.agency
        </textPath>
      </text>
    </svg>

  </div>
</div>





</div>

      </div>
    </div>
  );
};

export default Hero;
