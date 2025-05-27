import React from "react";
import img1 from "/public/Proimg/b1.webp";
import img2 from "/public/Proimg/b2.webp";
import img3 from "/public/Proimg/b3.webp";
import img4 from "/public/Proimg/b4.webp";
import img5 from "/public/Proimg/b5.webp";
import img6 from "/public/Proimg/b6.webp";
import { useNavigate } from "react-router-dom";

const brightArray = [
  {
    id: "1",
    img: img1,
    heading: "Bright Horizon Solar Initiative",
    para: "Feel the energy of the sun, as reliable as the Pacific saury darting through the currents.",
  },
  {
    id: "2",
    img: img2,
    heading: "Sustainable Future Energy",
    para: "Each unit reflecting and absorbing sunlight to create a mesmerizing, efficient network of power.",
  },
  {
    id: "3",
    img: img3,
    heading: "Solar Radiance Power Network",
    para: "With a focus on innovative solar technology, this project aims to create a sustainable future.",
  },
  {
    id: "4",
    img: img4,
    heading: "Renewable Energy Ventures",
    para: "By focusing on eco-friendly solutions and reducing reliance on fossil fuels, this project aims to lead the way in creating a greener.",
  },
  {
    id: "5",
    img: img5,
    heading: "Pure Solar Power Initiative",
    para: "This project seeks to transform sunlight into reliable, renewable energy, contributing to a healthier environment.",
  },
  {
    id: "6",
    img: img6,
    heading: "Solar Sky Energy Solutions",
    para: "Brings together cutting-edge solar technologies and collaborative efforts to create a powerful renewable energy grid.",
  },
];

const Bright = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/projectDetail/${id}`);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 py-20">
      <div className="w-[90%] md:w-[70%] mx-auto flex flex-col gap-10">
        {brightArray.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNavigate(item.id)}
            className="cursor-pointer rounded-2xl bg-white flex flex-col sm:flex-row h-auto sm:h-80 shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="sm:w-1/2 w-full h-64 sm:h-full overflow-hidden rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none">
              <img
                src={item.img}
                alt={item.heading}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="sm:w-1/2 w-full p-6 flex flex-col justify-center items-center text-center">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">{item.heading}</h2>
              <p className="text-sm md:text-lg text-gray-600 mb-6">{item.para}</p>
              <span className="!mt-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition">
                View Details
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bright;
