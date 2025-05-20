import React, { useState } from "react";
import PlusSign from "/RenewableSection/add.svg";
import MinusSign from "/RenewableSection/minus.svg";
import Image1 from "/RenewableSection/Image1.jpg";
import Image2 from "/RenewableSection/Image2.jpg";

function RenewableSection() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div className="font-[Outfit]  mx-auto max-w-5xl px-[30px] py-[80px] flex flex-col gap-[30px]">
      <h1 className="w-[900px] text-[28px] font-semibold leading-[35.84px] text-center text-[rgb(12,12,60)] mx-auto">
        We specialize in customized solar solutions designed to power your
        business towards growth and efficiency. By optimizing your energy usage
        with expert guidance and cutting-edge solar technology, we help you
        achieve sustainable success while reducing costs and environmental
        impact.
      </h1>

      <div className="flex w-[1000px] justify-between gap-[50px]">
        {/* QnA Section */}
        <div className="flex flex-col justify-start h-[500px]">
          <h1 className="text-[50px] font-semibold leading-[57px] text-[rgb(12,12,60)]">
            Renewable energy solar panels.
          </h1>

          <div className="flex flex-col mt-2">
            {/* Q1 */}
            <div className="w-[400px] !mb-[30px]">
              <div className="flex w-[450px] relative">
                <h1 className="text-[24px] font-semibold w-[400px] m-0 text-black">
                  How much does solar cost?
                </h1>
                <span className="flex gap-[10px]">
                  <img
                    src={PlusSign}
                    alt="PlusSign"
                    className={`w-[30px] cursor-pointer ${
                      !show1 ? "block" : "hidden"
                    }`}
                    onClick={() => {
                      setShow1(true);
                      setShow2(false);
                    }}
                  />
                  <img
                    src={MinusSign}
                    alt="MinusSign"
                    className={`w-[30px] cursor-pointer ${
                      show1 ? "block" : "hidden"
                    }`}
                    onClick={() => setShow1(false)}
                  />
                </span>
              </div>
              <p
                className={`transition-all duration-400 ease-in-out transform ${
                  show1
                    ? "max-h-[300px] opacity-100 translate-y-0 mt-[10px]"
                    : "max-h-0 opacity-0 -translate-y-2 overflow-hidden"
                }`}
              >
                The cost of solar can vary based on several factors, including
                the size of the system, the location, the type of panels, and
                any additional equipment or services required. However, as of
                the latest data, the average cost of a residential solar panel
                system in the United States is between 15,000 and 25,000 before
                incentives.
              </p>
            </div>

            <hr className="border-none h-[1px] bg-[#ccc] my-[20px]" />

            {/* Q2 */}
            <div className="w-[400px]">
              <div className="flex w-[450px] relative">
                <h1 className="text-[24px] font-semibold w-[400px] m-0 text-black">
                  How does solar help the environment?
                </h1>
                <span className="flex gap-[10px]">
                  <img
                    src={PlusSign}
                    alt="PlusSign"
                    className={`w-[30px] cursor-pointer ${
                      !show2 ? "block" : "hidden"
                    }`}
                    onClick={() => {
                      setShow2(true);
                      setShow1(false);
                    }}
                  />
                  <img
                    src={MinusSign}
                    alt="MinusSign"
                    className={`w-[30px] cursor-pointer ${
                      show2 ? "block" : "hidden"
                    }`}
                    onClick={() => setShow2(false)}
                  />
                </span>
              </div>
              <p
                className={`transition-all duration-400 ease-in-out transform ${
                  show2
                    ? "max-h-[300px] opacity-100 translate-y-0 mt-[10px]"
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
        {/* <div className="flex gap-[20px]">
          <div className="flex items-start">
            <img
              src={Image1}
              alt="Image1"
              className="w-[400px] rounded-[25px]"
            />
          </div>
          <img
            src={Image2}
            alt="Image2"
            className="w-[400px] h-[370px] rounded-[25px]"
          />
        </div> */}
      </div>
    </div>
  );
}

export default RenewableSection;
