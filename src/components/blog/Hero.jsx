import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <main className="relative overflow-hidden h-screen bg-white">
            <div className="flex relative z-20 items-start overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start justify-between py-16 gap-8">

                    {/* Left Content */}
                    <div className="sm:w-2/3 lg:w-2/4 flex flex-col gap-6 relative">
                        <h1 className="text-3xl sm:text-[80px] font-bold text-[#0C0C3C] leading-tight text-left">
                            BLOGS & <span className="">ARTICLES.</span>
                        </h1>

                        <p className="text-sm sm:text-base text-[#525257]">
                            By focusing on eco-friendly solutions and reducing reliance on fossil fuels, this project aims to lead the way to the future.
                        </p>

                        {/* Button aligned to text start */}
                        <div className="flex mt-4 ">
                            <a
                                href="#"
                                className="text-white bg-[#7b78f7] hover:bg-[#0C0C3C] py-2 px-6 rounded-full border-2 border-transparent text-md flex items-center justify-start gap-2"
                            >
                                Contact us <FaArrowRight className='rotate-320'/>
                            </a>
                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="sm:w-1/3 lg:w-3/5 flex justify-center">
                        <img
                            src="/Blog/blog.jpg"
                            alt="Blog"
                            className="w-[60%] h-[30rem] object-cover rounded-md shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;
