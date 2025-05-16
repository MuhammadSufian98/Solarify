import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const GetTouch = () => {
  return (
    <div className="bg-[#F7F8FA] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-black rounded-lg p-10 sm:p-20">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10">
          {/* Left Side */}
          <p className="text-white text-lg sm:text-xl w-full sm:w-1/2">
            Do you have questions about our services or want to learn more about sustainable living?
          </p>

          {/* Right Side */}
        <div className="w-full sm:w-1/2 text-center">
  <div className="flex flex-col items-center gap-8">
    <h2 className="text-white text-3xl sm:text-5xl font-bold">
      GET IN <br />TOUCH
    </h2>
    <button className="text-white bg-[#7b78f7] hover:bg-[#0C0C3C] flex items-center gap-2 font-medium py-3 px-8 rounded-full transition duration-300 cursor-pointer">
      Get Started <FaArrowRight className="rotate-320" />
    </button>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default GetTouch;
