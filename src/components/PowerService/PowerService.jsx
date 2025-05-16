import React from "react";
import "./powerService.css";
import Power from "/PowerService/power.svg";
import leftArrow from "/PowerService/LeftArrow.png";
import RightArrow from "/PowerService/RightArrow.png";
import Banner from "./PowerServiceBannerComp";

function PowerService() {
  return (
    <div className="MainPowerServiceDiv">
      <div className="MainPowerHeadingDiv">
        <h1 className="PowerHeading">
          Excellence green energy power services.
        </h1>
      </div>
      <div className="BannersDiv">
        <Banner
          heading="Mono PERC Services"
          paragraph="Monocrystalline PERC solar panels, which are a type of highly efficient technology."
          icon={Power}
        />
        <Banner
          heading="Mono PERC Services"
          paragraph="Monocrystalline PERC solar panels, which are a type of highly efficient technology."
          icon={Power}
        />
        <Banner
          heading="Mono PERC Services"
          paragraph="Monocrystalline PERC solar panels, which are a type of highly efficient technology."
          icon={Power}
        />
      </div>
      <div className="ArrowDiv">
        <img src={leftArrow} alt="leftArrow" className="Arrows" />
        <img src={RightArrow} alt="RightArrow" className="Arrows" />
      </div>
    </div>
  );
}

export default PowerService;
