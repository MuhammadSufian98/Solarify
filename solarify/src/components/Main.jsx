import React from "react";
import "./Main.css";
import solarImage from "../assets/home/solarBanner.png";
import solarImage2 from "../assets/home/solarBanner2.jpg";

function Main() {
  return (
    <div className="MainOutter">
      <div>
        <div className="HeadingDiv">
          <h1 className="Heading">PATH TO ENERGY.</h1>
          <div>
            <p className="Paragraph">
              This renewable energy source is abundant and sustainable, we
              providing a friendly alternative to traditional fossil fuels.
            </p>
            <button className="DicoverBTN">Discover More</button>
          </div>
        </div>
        <div className="ImageDiv">
          <div>
            <img src={solarImage2} alt="Solar2" className="MainImages2" />
            <div>
              <div>
                <h1>200+</h1>
                <p>Client Projects Completed.</p>
              </div>
              <div>
                <h1>200+</h1>
                <p>Client Projects Completed.</p>
              </div>
            </div>
          </div>
          <img src={solarImage} alt="Solar" className="MainImages" />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Main;
