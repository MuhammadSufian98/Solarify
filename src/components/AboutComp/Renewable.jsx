import React from "react";
import { LuArrowUpRight } from 'react-icons/lu';
import { Link } from 'react-router-dom'

const CardData = [
  {
    id: 1,
    heading: "ISO 9001:2015 company",
    para: "2015 company in the field of Solar Applications with more than 500 highly satisfied customers.",
  },
  {
    id: 2,
    heading: "Specialized In",
    para: "Specialized in Solar Power Plants, Water Heaters, Solar Street Lights, and Solar Pumps.",
  },
  {
    id: 3,
    heading: "Certified By",
    para: "Certified by all leading agencies for quality and process—Firefly Renewable Energy Private Limited.",
  },
];

const Renewable = () => {
  return (
    <div className="w-full min-h-screen text-white bg-blue-950 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-10 lg:gap-x-10">
  {/* Image Section */}
  <div className="w-full lg:w-1/3">
    <img
      className="w-full h-full max-h-[500px] object-cover rounded-2xl shadow-xl"
      src="/public/About/renew1.webp"
      alt="Renewable Intro"
    />
  </div>

  {/* Text + Button Section */}
  <div className="flex flex-col gap-6 text-center lg:text-left w-full lg:w-1/2">
    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
      Solarify the Renewable Energy Pvt. Ltd!
    </h1>

    <p className="text-base md:text-lg leading-relaxed">
      As a leading MNRE-approved ISO 9001:2015 organization, we take immense pride in delivering cutting-edge solar technology to your doorstep. Join us in transitioning to clean and sustainable energy.
    </p>

    {/* Button */}
    <div className="flex justify-center lg:justify-start">
      <Link
        to="/contact"
        className="group flex items-center cursor-pointer"
      >
        {/* Text Button */}
        <button className="flex items-center gap-2 px-6 py-3 bg-[#6761db] text-white rounded-full font-semibold text-base group-hover:bg-[#0a0a2f] transition duration-300">
          Contact Now
        </button>

        {/* Icon Button */}
        <button className="relative w-12 h-12 ml-2 bg-[#6761db] text-white rounded-full overflow-hidden flex items-center justify-center group-hover:bg-[#0a0a2f] transition duration-300">
          <span className="absolute transition-transform duration-500 ease-out group-hover:translate-x-5 group-hover:-translate-y-7">
            <LuArrowUpRight size={24} />
          </span>
          <span className="absolute text-white transition-transform duration-500 ease-out translate-x-[-1.2rem] translate-y-[1.5rem] opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
            <LuArrowUpRight size={24} />
          </span>
        </button>
      </Link>
    </div>
  </div>
</div>


        {/* Second Section */}
        <div className="flex flex-col items-center lg:flex-row gap-10">
          <div className="w-full lg:w-1/3">
            <img
              className="w-full h-full max-h-[500px] object-cover rounded-2xl shadow-xl"
              src="/public/About/renew2.webp"
              alt="Renewable 2"
            />
          </div>
          <div className="flex flex-col gap-8 w-full lg:w-1/2">
            <p className="text-lg md:text-2xl font-bold leading-relaxed">
              Whether you're a small business looking to reduce your carbon footprint or a homeowner interested in saving on electricity bills, Firefly is here to guide you every step of the way with expert, personalized solar solutions.
            </p>

            <div className="flex w-full flex-col justify-center md:flex-row gap-6">
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  className="w-full  object-cover rounded-xl shadow-lg max-h-[250px] md:max-h-[100%]"
                  src="/public/About/renew3.webp"
                  alt="Renewable 3"
                />
              </div>

              {/* Info Cards */}
              <div className="flex flex-col gap-4 w-full md:w-1/2 pt-4">
                {CardData.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 border-b "
                  >
                    <h1 className="text-xl py-2 text-blue-400 font-semibold mb-1">
                      {item.heading}
                    </h1>
                    <p className="text-white text-base leading-relaxed">
                      {item.para}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Renewable;
