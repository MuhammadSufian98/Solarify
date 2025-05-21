import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 space-y-10 md:space-y-0 md:space-x-12">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img
          src="/public/pagenotfound.svg"
          alt="404 Illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* Right Side - Text & Button */}
      <div className="md:w-1/2 w-full text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold text-[#0C0C3C]">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-[#0C0C3C]">
          Page not found
        </h2>
        <Link
          to="/"
          className="inline-block !mt-6 font-semibold px-6 py-3 text-white bg-[#7b78f7] hover:bg-[#0C0C3C] rounded-full transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
