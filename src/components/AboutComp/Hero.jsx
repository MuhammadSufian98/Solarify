import React, { useState, useEffect } from 'react';

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
      <div className="w-[70%] mx-auto flex flex-col lg:flex-row justify-between items-center py-10 gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-10 max-w-3xl">
          <h1 className="text-3xl text-center sm:text-left  sm:text-[100px]   font-bold text-gray-900 leading-tight">
            ABOUT <span className="">SOLARIFY.</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {iconArray.map((item) => (
              <div
                key={item.id}
                className="   md:border-r md:border-gray-400  p-6 text-center"
              >
                <div className="text-5xl font-bold text-blue-500 mb-2">
                  <Counter target={item.icon} />+
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-1">{item.heading}</h2>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full sm:w-80 flex-shrink-0">
          <img
            className="w-full hover:transform hover:scale-102 transition duration-200 cursor-text h-auto rounded-xl shadow-lg"
            src="/About/hero.avif"
            alt="About Solarify"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
