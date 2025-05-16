import React from "react";
import "./colaboration.css";
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
  };
  return (
    <div className="brandColab">
      <div className="brandColabDiv">
        <div className="brandDivider">
          <hr />
          <span className="DividerHeading">
            100+ Trusted by world class business owner
          </span>
          <hr />
        </div>
        <div className="brandSliderDiv">
          <Slider {...settings} className="brandSlider">
            <img src={images1} alt="1" className="brandImage" />
            <img src={images2} alt="2" className="brandImage" />
            <img src={images3} alt="3" className="brandImage" />
            <img src={images4} alt="4" className="brandImage" />
            <img src={images5} alt="5" className="brandImage" />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default BrankColaboration;
