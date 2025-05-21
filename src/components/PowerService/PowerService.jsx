import React, { useState, useEffect } from "react";
import Power from "/PowerService/power.svg";
import leftArrow from "/PowerService/LeftArrow.png";
import RightArrow from "/PowerService/RightArrow.png";
import Banner from "./PowerServiceBannerComp";

// Sample banner data
const bannerData = [
  {
    heading: "Mono PERC Services",
    paragraph:
      "Monocrystalline PERC solar panels, which are a type of highly efficient technology.",
    icon: Power,
  },
  {
    heading: "Polycrystalline Services",
    paragraph:
      "Cost-effective solar panel technology for residential and commercial setups.",
    icon: Power,
  },
  {
    heading: "Thin Film Services",
    paragraph:
      "Flexible and lightweight solar solutions for non-traditional surfaces.",
    icon: Power,
  },
  {
    heading: "Smart Grid Integration",
    paragraph:
      "Advanced energy solutions integrated with smart grid infrastructure.",
    icon: Power,
  },
  {
    heading: "Battery Storage",
    paragraph:
      "Reliable solar battery storage systems to retain excess energy.",
    icon: Power,
  },
  {
    heading: "Commercial Installations",
    paragraph:
      "Turnkey solar power systems designed for industrial and commercial properties.",
    icon: Power,
  },
];

function PowerService() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Handle responsive card count
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3); // large screens
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2); // medium screens
      } else {
        setVisibleCards(1); // small screens
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handleLeftClick = () => {
    setStartIndex((prev) =>
      prev === 0 ? bannerData.length - visibleCards : prev - 1
    );
  };

  const handleRightClick = () => {
    setStartIndex((prev) =>
      prev + visibleCards >= bannerData.length ? 0 : prev + 1
    );
  };

  const visibleBanners = bannerData.slice(
    startIndex,
    startIndex + visibleCards
  );

  return (
    <div className="font-[Outfit] mx-auto py-16 px-4 w-full bg-[#F7F8FA] flex flex-col gap-8">
      <div className="flex justify-center">
        <h1 className="max-w-[600px] text-center text-3xl md:text-4xl lg:text-[50px] font-semibold leading-tight text-[rgb(12,12,60)]">
          Excellence green energy power services.
        </h1>
      </div>

      <div className="flex gap-4 justify-center flex-wrap transition-all duration-300">
        {visibleBanners.map((item, index) => (
          <Banner
            key={index}
            heading={item.heading}
            paragraph={item.paragraph}
            icon={item.icon}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-10 mt-6">
        <img
          src={leftArrow}
          alt="leftArrow"
          className="w-10 sm:w-12 cursor-pointer"
          onClick={handleLeftClick}
        />
        <img
          src={RightArrow}
          alt="RightArrow"
          className="w-10 sm:w-12 cursor-pointer"
          onClick={handleRightClick}
        />
      </div>
    </div>
  );
}

export default PowerService;
