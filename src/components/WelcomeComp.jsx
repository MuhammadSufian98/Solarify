import React from "react";
import "./welcomeComp.css";
import image from "/welcomeComp/welcomeImg.png";
import image2 from "/welcomeComp/fixed.jpg";

function WelcomeComp() {
  return (
    <div className="MainWelcomeDiv">
      <div className="WelcomeDiv">
        <h1 className="WelcomeHeading">
          Welcome to our firefly company's illumination.
        </h1>
        <div className="WelcomeTextDiv">
          <div className="YearsDiv">
            <h2 className="noOfYears">12+</h2>
            <p className="YearsHeading">Years Experience</p>
          </div>
          <p className="WelcomeText">
            Harness the limitless power of the sun and illuminate your world
            with clean, renewable energy. Just as the sun’s rays sustain life on
            Earth, solar panels capture this energy, converting sunlight into
            electricity that powers your home or business. Imagine the sleek,
            efficient solar cells gliding alongside the roof of your home.
          </p>
        </div>
      </div>
      <div className="WelcomeImgDiv">
        <img src={image} alt="welcome"  className="WelcomeImg"/>
        <img src={image2} alt="fixed" className="fixedImg"/>
      </div>
    </div>
  );
}

export default WelcomeComp;
