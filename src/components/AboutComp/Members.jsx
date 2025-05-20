import React, { useState, useEffect } from "react";
import { IoArrowForwardSharp, IoArrowBackOutline } from "react-icons/io5";
import img1 from "/public/About/man1.webp";
import img2 from "/public/About/man2.webp";
import img3 from "/public/About/man3.webp";
import img4 from "/public/About/man4.webp";

const EmployeeData = [
  { id: 1, img: img1, name: "June Gush", post: "Sr. Technician" },
  { id: 2, img: img3, name: "Haden Knuth", post: "Technician" },
  { id: 3, img: img4, name: "Karia Arriaza", post: "Manager" },
  { id: 4, img: img2, name: "Jacek Kotecki", post: "Technician" },
];

// Custom hook to return screen width
const useScreenWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

const Members = () => {
  const [startIndex, setStartIndex] = useState(0);
  const screenWidth = useScreenWidth();

  // Set visible count based on breakpoints
  let visibleCount = 1;
  if (screenWidth >= 640) visibleCount = 2; // sm
  if (screenWidth >= 768) visibleCount = 3; // md

  const moveForward = () => {
    setStartIndex((prev) => (prev + 1) % EmployeeData.length);
    // console.log(EmployeeData.length,"length")
  };

  const moveBackward = () => {
    setStartIndex(
      (prev) => (prev - 1 + EmployeeData.length) % EmployeeData.length
    );
  };

  const getVisibleEmployees = () => {
    const rotated = [
      ...EmployeeData.slice(startIndex),
      ...EmployeeData.slice(0, startIndex),
    ];
    return rotated.slice(0, visibleCount);
  };

  return (
    <div className="w-full min-h-md  pb-10 pt-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 max-w-xl leading-tight">
            Best team members for solar energy.
          </h1>

          <div className="flex gap-3">
            <button
              onClick={moveBackward}
              className="p-3 border rounded-full text-xl cursor-pointer hover:bg-blue-500 hover:text-white transition duration-200"
            >
              <IoArrowBackOutline />
            </button>
            <button
              onClick={moveForward}
              className="p-3 border rounded-full text-xl cursor-pointer hover:bg-blue-500 hover:text-white transition duration-200"
            >
              <IoArrowForwardSharp />
            </button>
          </div>
        </div>

        {/* Employee Cards */}
        <div
          className={`grid gap-10 grid-cols-1 ${
            visibleCount === 2 ? "sm:grid-cols-2" : ""
          } ${visibleCount === 3 ? "md:grid-cols-3" : ""}`}
        >
          {getVisibleEmployees().map((person) => (
            <div
              key={person.id}
              className="bg-white  p-5 rounded-xl flex flex-col items-center "
            >
              <div className="w-full h-70 overflow-hidden rounded-lg ">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-72 cursor-pointer object-cover hover:scale-105 transition duration-150 "
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                {person.name}
              </h2>
              <p className="text-gray-500 text-lg">{person.post}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
