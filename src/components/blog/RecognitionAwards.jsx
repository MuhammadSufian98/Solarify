import React from "react";
import { MdArrowOutward } from "react-icons/md";
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
            <h1 className="text-xl leading-10 text-gray-600 pb-10">
              Our commitment to Solarify has been celebrated with a series of prestigious awards and accolades. These honors, ranging from industry-specific recognitions to community acknowledgments, underscore our relentless pursuit of excellence. Offering a detailed report on how the panels can increase energy output.
            </h1>
            <button className="group inline-flex items-center bg-blue-400 text-white font-semibold text-lg rounded-full px-6 py-3 transition-all duration-300 hover:bg-white hover:text-blue-950 shadow-lg cursor-pointer">
              <span className="transition-all duration-300 group-hover:pr-3">
                View Services
              </span>
              <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1 text-xl">
                <MdArrowOutward />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecognitionAwards;
