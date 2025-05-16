import React from "react";
import "./PowerSerciveBannerComp.css";

const Banner = ({ heading, paragraph, icon }) => {
  return (
    <div className="Banner">
      <div className="BannerHeadingDiv">
        <h1 className="BannerHeading">{heading}</h1>
        <p className="BannerPara">{paragraph}</p>
      </div>
      <div className="OuterBannerIconDiv">
        <div className="BannerIconDiv">
          <img src={icon} alt="PowerHouse" className="Icon" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
