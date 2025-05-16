import React, { useState } from "react";
import "./RenewableSection.css";
import PlusSign from "/RenewableSection/add.svg";
import MinusSign from "/RenewableSection/minus.svg";
import Image1 from "/RenewableSection/Image1.jpg";
import Image2 from "/RenewableSection/Image2.jpg";

function RenewableSection() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div className="MainDiv">
      <div className="RenewableSectionMainDiv">
        <div className="MainDiv">
          <h1 className="MainHeading">
            We specialize in customized solar solutions designed to power your
            business towards growth and efficiency. By optimizing your energy
            usage with expert guidance and cutting-edge solar technology, we
            help you achieve sustainable success while reducing costs and
            environmental impact.
          </h1>
        </div>
        <div className="RenewableQuestionImgDiv">
          <div className="RenewableQuestionDiv">
            <h1 className="QnAHeading">Renewable energy solar panels.</h1>
            <div className="DropDownQuestionDiv">
              <div className="DropDown">
                <div className="QuestionDiv">
                  <h1 className="Question">How much does solar cost?</h1>
                  <span className="IconSpan">
                    <img
                      src={PlusSign}
                      alt="PlusSign"
                      className={`Icon ${
                        !show1 ? "DisplayBlock" : "DisplayNone"
                      }`}
                      onClick={() => {
                        setShow1(true);
                        setShow2(false);
                      }}
                    />
                    <img
                      src={MinusSign}
                      alt="MinusSign"
                      className={`Icon ${
                        show1 ? "DisplayBlock" : "DisplayNone"
                      }`}
                      onClick={() => setShow1(false)}
                    />
                  </span>
                </div>
                <p className={`Answer ${show1 ? "DisplayBlock" : ""}`}>
                  The cost of solar can vary based on several factors, including
                  the size of the system, the location, the type of panels, and
                  any additional equipment or services required. However, as of
                  the latest data, the average cost of a residential solar panel
                  system in the United States is between 15,000 and 25,000
                  before incentives.
                </p>
              </div>
              <hr className="Divider" />
              <div className="DropDown">
                <div className="QuestionDiv">
                  <h1 className="Question">
                    How does solar help the environment?
                  </h1>
                  <span className="IconSpan">
                    <img
                      src={PlusSign}
                      alt="PlusSign"
                      className={`Icon ${
                        !show2 ? "DisplayBlock" : "DisplayNone"
                      }`}
                      onClick={() => {
                        setShow2(true);
                        setShow1(false);
                      }}
                    />
                    <img
                      src={MinusSign}
                      alt="MinusSign"
                      className={`Icon ${
                        show2 ? "DisplayBlock" : "DisplayNone"
                      }`}
                      onClick={() => setShow2(false)}
                    />
                  </span>
                </div>
                <p className={`Answer ${show2 ? "DisplayBlock" : ""}`}>
                  Solar energy helps reduce greenhouse gas emissions, lowers
                  your carbon footprint, and decreases reliance on fossil fuels,
                  promoting a cleaner and healthier planet.
                </p>
              </div>
            </div>
          </div>
          <div className="ImgDiv">
            <div className="Img1Container">
              <img src={Image1} alt="Image1" className="Images" />
            </div>
            <img src={Image2} alt="Image2" className="Images height" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RenewableSection;
