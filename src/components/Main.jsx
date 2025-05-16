import React, { useState, useEffect } from "react";
import "./Main.css";
import solarImage from "../assets/home/solarBanner.png";
import solarImage2 from "../assets/home/solarBanner2.jpg";
import Arrow from "../assets/right-up.png";

function Main() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const target = 140;
    const duration = 2000; // 2 seconds
    const step = target / (duration / 50);

    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="MainOutter">
        <div className="HeadingDiv">
          <h1 className="Heading">PATH TO ENERGY.</h1>
          <div className="ParaDiv">
            <p className="Paragraph">
              This renewable energy source is abundant and sustainable, we
              providing a friendly alternative to traditional fossil fuels.
            </p>
            <button className="DicoverBTN">
              Discover More
              {/* <span>
                <img src={Arrow} alt="arrow" className="arrow"/>
              </span> */}
            </button>
          </div>
        </div>
        <div className="ImageDiv">
          <div className="ImageDiv2">
            <div className="ClinetCountDiv">
              <h1 className="ClientCount">{count}k+</h1>
              <h1 className="HappyClient">Happy Clients</h1>
            </div>

            <img src={solarImage2} alt="Solar2" className="MainImages2" />
          </div>
          <div className="ImageDiv1">
            <div className="ClientProjectCount">
              <div className="ClientProjectCountDiv">
                <h1 className="ProjectsHeading">200+</h1>
                <p>Client Projects Completed.</p>
              </div>
              <hr className="divider" />
              <div>
                <h1 className="ProjectsHeading">500+</h1>
                <p>Experts Employed.</p>
              </div>
            </div>
            <img src={solarImage} alt="Solar" className="MainImages" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
