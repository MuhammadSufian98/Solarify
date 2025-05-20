import { FaArrowRight } from 'react-icons/fa';
import { LuArrowUpRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="w-full min-h-screen bg-white py-12">
            <div className="w-[90%] max-w-8xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
                {/* Left Section */}
                <div className="flex flex-col gap-8 lg:gap-y-20 max-w-2xl">
                    <h1 className="text-5xl sm:text-6xl lg:text-[6rem] font-extrabold text-[#0a0a2f] leading-tight">
                        BLOGS & <br /> ARTICLES<span className="text-[#0a0a2f]">.</span>
                    </h1>

                    <div className="flex flex-col gap-6">
                        <p className="text-gray-600 text-lg">
                            By focusing on eco-friendly solutions and reducing reliance on fossil fuels, this project aims to lead the way to the future.
                        </p>

                        <Link
                            to="/contact"
                            className="group flex items-center cursor-pointer"
                        >
                            {/* Text Button */}
                            <button className="flex items-center cursor-pointer gap-2 px-6 py-3 bg-[#8f88ff] text-white rounded-full font-semibold text-base group-hover:bg-[#4b45b5] transition duration-300">
                                Contact Us
                            </button>

                            {/* Icon Button with Animating Arrows */}
                            <button className="relative w-12 h-12 cursor-pointer bg-[#8f88ff] text-white rounded-full overflow-hidden flex items-center justify-center group-hover:bg-[#4b45b5] transition duration-300">
                                <span className="absolute transition-transform duration-500 ease-out group-hover:translate-x-5 group-hover:-translate-y-7">
                                    <LuArrowUpRight size={24} />
                                </span>

                                <span className="absolute text-black transition-transform duration-500 ease-out translate-x-[-1.2rem] translate-y-[1.5rem] opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <LuArrowUpRight size={24} />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Section (Image + Rotating Badge) */}
                <div className="relative w-full max-w-md h-[60vh] md:h-[90vh]">
                    <img
                        src="/Blog/blog.jpg"
                        alt="blog"
                        className="rounded-3xl shadow-lg h-[60vh] md:!h-[90vh] object-cover"
                    />

                    {/* Rotating Badge */}
                    <div className="absolute top-58 -left-12 max-md:left-[-12px] rounded-full p-1 border border-gray-400 animate-spin">
                        <div className="relative w-10 h-10 sm:w-24 sm:h-24 rounded-full bg-[url('/About/rotating1.jpg')] bg-cover bg-center shadow-md">
                            <svg
                                viewBox="0 0 100 100"
                                className="absolute top-0 left-0 w-full h-full"
                            >
                                <defs>
                                    <path
                                        id="circlePath"
                                        d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                                    />
                                </defs>
                                <text fill="" fontSize="15" fontWeight="600">
                                    <textPath href="#circlePath" startOffset="5%">
                                        best.agency.explorer.best.agency
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
