import React from "react";
import { LuArrowUpRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import img1 from "/public/About/trop1.avif";
import img2 from "/public/About/trop2.avif";
import img3 from "/public/About/trop3.avif";

const AwardArray = [
  {
    id: 1,
    year: "2024",
    acadmy: "Global Academy",
    award: "Best Solar Panel Award",
    img: img1,
  },
  {
    id: 2,
    year: "2022",
    acadmy: "Excellency Academy",
    award: "Leadership Award",
    img: img2,
  },
  {
    id: 3,
    year: "2020",
    acadmy: "Renewable Award Show",
    award: "Innovation Award",
    img: img3,
  },
];

const RecognitionAwards = () => {
  return (
    <div className="w-full min-h-screen  py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Title & Awards List */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-20">
          <h1 className="text-4xl lg:text-5xl font-bold max-w-xs">
            Recognition & Awards.
          </h1>

          <div className="flex flex-col gap-10 w-full lg:w-2/3">
            {AwardArray.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col sm:flex-row gap-10 text-xl border-b pb-5 border-gray-300 cursor-pointer"
              >
                <span>{item.year}</span>

                {/* Academy Name + Hover Image */}
                <span className="relative text-gray-800 font-bold group-hover:text-blue-600 transition">
                  {item.acadmy}

                  {/* Hover Trophy Image */}
                  <img
                    src={item.img}
                    alt="Trophy"
                    className="absolute -top-25 left-1/2 -rotate-13 w-28 h-28 object-cover rounded-xl shadow-lg opacity-0 
                    group-hover:opacity-100 
                    transform -translate-x-full group-hover:translate-x-0 
                    transition-all duration-500 z-10"
                  />
                </span>

                <span>{item.award}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="flex flex-col-reverse lg:flex-row w-full justify-around gap-10">
          <div className="w-full lg:w-1/2">
            <img
              className="w-full h-full rounded-2xl object-cover shadow-md"
              src="/Blog/blo.jpg"
              alt="Laboratory"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-sm md:text-xl leading-8 md:leading-10 text-gray-600 pb-10">
              Our commitment to Solarify has been celebrated with a series of prestigious awards and accolades. These honors, ranging from industry-specific recognitions to community acknowledgments, underscore our relentless pursuit of excellence. Offering a detailed report on how the panels can increase energy output.
            </h1>
            <Link
              to="/contact"
              className="group flex items-center cursor-pointer !m-0 md:w-1/2 "
            >
              {/* Text Button */}
              <button className="!m-0 flex items-center cursor-pointer gap-2 px-6 py-3 bg-[#6761db] text-white rounded-full font-semibold text-base group-hover:bg-[#0a0a2f] transition duration-300">
                View Services
              </button>

              {/* Icon Button with Animating Arrows */}
              <button className="!m-0 relative w-12 h-12 cursor-pointer bg-[#6761db] text-white rounded-full overflow-hidden flex items-center justify-center group-hover:bg-[#0a0a2f] transition duration-300">

                {/* First Icon: Moves up-right */}
                <span className="absolute transition-transform duration-500 ease-out group-hover:translate-x-5 group-hover:-translate-y-7">
                  <LuArrowUpRight size={24} />
                </span>

                {/* Second Icon: Comes in from bottom-left */}
                <span className="absolute text-white transition-transform duration-500 ease-out translate-x-[-1.2rem] translate-y-[1.5rem] opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <LuArrowUpRight size={24} />
                </span>

              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecognitionAwards;
