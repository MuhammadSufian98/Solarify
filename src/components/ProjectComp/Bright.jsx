import React from "react";
import img1 from "/public/Proimg/b1.webp";
import img2 from "/public/Proimg/b2.webp";
import img3 from "/public/Proimg/b3.webp";
import img4 from "/public/Proimg/b4.webp";
import img5 from "/public/Proimg/b5.webp";
import img6 from "/public/Proimg/b6.webp";

const brightArray = [
  {
    id: 1,
    img: img1,
    heading: "Bright Horizon Solar Initiative",
    para: "Feel the energy of the sun, as reliable as the Pacific saury darting through the currents.",
  },
  {
    id: 2,
    img: img2,
    heading: "Sustainable Future Energy ",
    para: "Each unit reflecting and absorbing sunlight to create a mesmerizing, efficient network of power.",
  },
  {
    id: 3,
    img: img3,
    heading: "Solar Radiance Power Network",
    para: "With a focus on innovative solar technology, this project aims to create a sustainable future.",
  },
  {
    id: 4,
    img: img4,
    heading: "Renewable Energy Ventures",
    para: "By focusing on eco-friendly solutions and reducing reliance on fossil fuels, this project aims to lead the way in creating a greener.",
  },
  {
    id: 5,
    img: img5,
    heading: "Pure Solar Power Initiative",
    para: "This project seeks to transform sunlight into reliable, renewable energy, contributing to a healthier environment.",
  },
  {
    id: 6,
    img: img6,
    heading: "Solar Sky Energy Solutions",
    para: "Brings together cutting-edge solar technologies and collaborative efforts to create a powerful renewable energy grid. ",
  },
];
const Bright = (identity) => {
  return (
    <div key={identity.id} className="w-full min-h-screen bg-gray-100 py-20">
      <div className="w-[70%] mx-auto flex flex-col gap-10 ">

        {brightArray.map((identity)=>(
             <div className="rounded-md w-full  ">
          <div className="flex sm:flex-row bg-white flex-col ga-5 h-130 sm:h-80">
            <div className="sm:w-1/2 w-full  rounded-md overflow-hidden cursor-pointer sm:h-full">
              <img
                className="w-full rounded-md h-full hover:scale-120 transition duration-200 object-orient object-cover  bg-center"
                src={identity.img}
                alt=""
              />
            </div>
            <div className="p-5 w-full sm:w-1/2 flex  flex-col items-center">
              <h1 className="text-2xl py-2 font-semibold ">
                {identity.heading}
              </h1>
              <p className="text-lg text-center pb-10 max-w-md text-gray-500">
                {identity.para}
              </p>
              <span className="px-5 py-3 border rounded-full text-md font-semibold hover:bg-blue-600 cursor-pointer hover:text-white transition duration-300 hover:border-gray-300">
                View Details
              </span>
            </div>
          </div>
        </div>

        ))}
       
      </div>
    </div>
  );
};

export default Bright;
