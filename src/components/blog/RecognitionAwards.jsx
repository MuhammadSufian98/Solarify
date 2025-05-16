import React from "react";
import { FaArrowRight } from 'react-icons/fa';

const awards = [
  {
    year: "2024",
    organization: "Global Academy",
    title: "Best Solar Panel Award",
  },
  {
    year: "2022",
    organization: "Excellency Academy",
    title: "Leadership Award",
  },
  {
    year: "2020",
    organization: "Renewable Academy",
    title: "Innovation Award",
  },
];

const RecognitionAwards = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="w-full py-30 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Heading */}
          <div className="md:w-[40%]">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0C0C3C] leading-tight">
              Recognition & Awards
            </h2>
          </div>

          {/* Right Awards List */}
          <div className="flex flex-col gap-8">
            {awards.map((award, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl text-[#525257] flex flex-wrap gap-3 font-semibold">
                  {award.year} &nbsp;
                  <span className="text-[#0C0C3C]">{award.organization}</span> {award.title}
                </h3>
                <hr className="border-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 2 */}

      <div className="flex relative z-20 items-start overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start justify-between gap-4">
          {/* Left Image */}
          <div className="sm:w-1/3 lg:w-3/5 flex justify-center">
            <img
              src="/Blog/blo.jpg"
              alt="Blog"
              className="w-[60%] h-[30rem] object-cover rounded-md shadow-lg"
            />
          </div>
          {/* left Content */}
          <div className="sm:w-2/3 lg:w-2/4 flex flex-col gap-6 relative">
            <p className="text-sm sm:text-xl text-[#525257]">
              Our commitment to Solarify has been celebrated with a series of prestigious awards and accolades. These honors, ranging from industry-specific recognitions to community acknowledgments, underscore our relentless pursuit of excellence. Offering a detailed report on how the panels can increase energy output.
            </p>

            {/* Button aligned to text start */}
            <div className="flex mt-4 ">
              <a
                href="#"
                className="text-white bg-[#7b78f7] hover:bg-[#0C0C3C] py-2 px-6 rounded-full border-2 border-transparent text-md flex items-center justify-start gap-2"
              >
                View Services <FaArrowRight className='rotate-320' />
              </a>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default RecognitionAwards;
