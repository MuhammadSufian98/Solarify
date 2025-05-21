import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images1 from "/businesses/business1.svg"; 
import images2 from "/businesses/business.2.svg";
import images3 from "/businesses/business3.svg";
import images4 from "/businesses/business4.svg";
import images5 from "/businesses/business5.svg";

function BrankColaboration() {
  const settings = {
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex items-center mt-12 mb-12 bg-gray-100 pt-12 h-[200px] md:h-auto md:pt-16">
      <div className="w-[1040px] mx-auto max-w-[90%]">
        <div className="flex items-center justify-center">
          <hr className="flex-1 border-t border-gray-400 mx-2" />
          <span className="text-[14px] md:text-[28px] font-semibold leading-[36px] text-[#0c0c3c]  md:text-center ">
            100+ Trusted by world class business owner
          </span>
          <hr className="flex-1 border-t border-gray-400 mx-2" />
        </div>

        <div className="py-5 px-16 md:py-2 md:px-7">
          <Slider {...settings} className="brandSlider">
            <img
              src={images1}
              alt="1"
              className="w-[40px] px-5 object-contain md:w-[35px] md:px-2.5 sm:w-[30px] sm:px-2"
            />
            <img
              src={images2}
              alt="2"
              className="w-[40px] px-5 object-contain md:w-[35px] md:px-2.5 sm:w-[30px] sm:px-2"
            />
            <img
              src={images3}
              alt="3"
              className="w-[40px] px-5 object-contain md:w-[35px] md:px-2.5 sm:w-[30px] sm:px-2"
            />
            <img
              src={images4}
              alt="4"
              className="w-[40px] px-5 object-contain md:w-[35px] md:px-2.5 sm:w-[30px] sm:px-2"
            />
            <img
              src={images5}
              alt="5"
              className="w-[40px] px-5 object-contain md:w-[35px] md:px-2.5 sm:w-[30px] sm:px-2"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default BrankColaboration;
