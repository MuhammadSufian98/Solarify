import React, { useState } from "react";
import PlusSign from "/RenewableSection/add.svg";
import MinusSign from "/RenewableSection/minus.svg";
import Image1 from "/RenewableSection/Image1.jpg";
import Image2 from "/RenewableSection/Image2.jpg";

function RenewableSection() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div className="px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-10 mx-auto max-w-6xl">
        {/* QnA Section */}
        <div className="flex flex-col flex-1">
          <h1 className="text-2xl md:text-4xl font-semibold leading-tight text-[#0C0C3C] -!mt-40">
            Renewable energy solar panels.
          </h1>

          <div className="flex flex-col gap-3 !mt-10">
            {/* Q1 */}
            <div>
              <div className="flex justify-between items-start gap-4">
                <h2 className="text-lg md:text-xl font-semibold text-black flex-1">
                  How much does solar cost?
                </h2>
                <span className="flex-shrink-0">
                  <img
                    src={PlusSign}
                    alt="PlusSign"
                    className={`w-6 cursor-pointer ${!show1 ? "block" : "hidden"}`}
                    onClick={() => {
                      setShow1(true);
                      setShow2(false);
                    }}
                  />
                  <img
                    src={MinusSign}
                    alt="MinusSign"
                    className={`w-6 cursor-pointer ${show1 ? "block" : "hidden"}`}
                    onClick={() => setShow1(false)}
                  />
                </span>
              </div>
              <p
                className={`transition-all duration-400 ease-in-out transform text-sm md:text-base ${
                  show1
                    ? "max-h-[300px] opacity-100 translate-y-0 mt-2"
                    : "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
                }`}
              >
                The cost of solar can vary based on several factors, including
                the size of the system, the location, the type of panels, and
                any additional equipment or services required. However, as of
                the latest data, the average cost of a residential solar panel
                system in the United States is between $15,000 and $25,000
                before incentives.
              </p>
            </div>

            <hr className="border-t border-gray-300" />

            {/* Q2 */}
            <div>
              <div className="flex justify-between items-start gap-4">
                <h2 className="text-lg md:text-xl font-semibold text-black flex-1">
                  How does solar help the environment?
                </h2>
                <span className="flex-shrink-0">
                  <img
                    src={PlusSign}
                    alt="PlusSign"
                    className={`w-6 cursor-pointer ${!show2 ? "block" : "hidden"}`}
                    onClick={() => {
                      setShow2(true);
                      setShow1(false);
                    }}
                  />
                  <img
                    src={MinusSign}
                    alt="MinusSign"
                    className={`w-6 cursor-pointer ${show2 ? "block" : "hidden"}`}
                    onClick={() => setShow2(false)}
                  />
                </span>
              </div>
              <p
                className={`transition-all duration-400 ease-in-out transform text-sm md:text-base ${
                  show2
                    ? "max-h-[300px] opacity-100 translate-y-0 mt-2"
                    : "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
                }`}
              >
                Solar energy helps reduce greenhouse gas emissions, lowers your
                carbon footprint, and decreases reliance on fossil fuels,
                promoting a cleaner and healthier planet.
              </p>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="flex flex-col md:flex-row gap-6 flex-1 justify-center items-center">
          <img
            src={Image1}
            alt="Image1"
            className="w-full md:w-1/2  max-w-md rounded-2xl"
          />
          <img
            src={Image2}
            alt="Image2"
            className="w-full md:w-1/2 max-w-md h-72 md:h-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default RenewableSection;
