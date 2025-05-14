import React from 'react';


const iconArray = [
  {
    id: 1,
    icon: "45",
    heading: "Released Projects",
    desc: "Successfully finished projects within deadline",
  },
  // You can add more items here later
];

const Hero = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-[80%] mx-auto flex justify-between items-center py-10">
        {/* Left Section */}
        <div className="flex flex-col gap-10 max-w-xl">
          <h1 className="text-5xl font-bold">ABOUT SOLARIFY.</h1>
          <div className="flex w-full gap-6">
            {iconArray.map((item) => (
              <div key={item.id} className="border-r-2 pr-4 last:border-none">
                <div className="text-4xl font-bold text-yellow-500">{item.icon}</div>
                <h2 className="text-xl font-semibold mt-2">{item.heading}</h2>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-80">
          <img className="w-full" src="/About/hero.avif" alt="About Solarify" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
