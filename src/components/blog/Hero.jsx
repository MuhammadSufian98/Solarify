import { LuArrowUpRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <div className="w-full min-h-screen bg-white py-12 ">
            <div className="w-[90%] max-w-8xl  flex flex-col lg:flex-row gap-12 ">
                {/* Left Section */}
                <div className="flex flex-col gap-8  lg:gap-y-26  max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#0a0a2f] leading-tight !m-0">
                        BLOGS &<br /> ARTICLES<span className="text-[#0a0a2f]">.</span>
                    </h1>
                    <div className="flex flex-col gap-6  max-w-sm !m-0">
                        <p className="text-gray-600 text-lg">
                            By focusing on eco-friendly solutions and reducing reliance on fossil fuels, this project aims to lead the way to the future.
                        </p>
                        
           <Link
                            to="/contact"
                            className="group flex items-center cursor-pointer !m-0 md:w-1/2 "
                        >
                            {/* Text Button */}
                            <button className="!m-0 flex items-center cursor-pointer gap-2 px-6 py-3 bg-[#6761db] text-white rounded-full font-semibold text-base group-hover:bg-[#0a0a2f] transition duration-300">
                                Contact Us
                            </button>

                            {/* Icon Button with Animating Arrows */}
                            <button className="!m-0 relative w-12 h-12 cursor-pointer bg-[#6761db] text-white rounded-full overflow-hidden flex items-center justify-center group-hover:bg-[#0a0a2f] transition duration-300">

                                {/* First Icon: Moves up-right */}
                                <span className="absolute transition-transform duration-500 ease-out group-hover:translate-x-5 group-hover:-translate-y-7">
                                    <LuArrowUpRight size={24} />
                                </span>

                                {/* Second Icon: Comes in from bottom-left */}
                                <span className="absolute text-white transition-transform duration-500 ease-out translate-x-[-1.2rem] translate-y-[1.5rem] opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <LuArrowUpRight size={24} />
                                </span>

                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Section (Image + Rotating Badge) */}
                <div className="relative w-full max-w-md h-[60vh] md:!h-[90vh]">
                    <img
                        src="/Blog/blog.jpg"
                        alt="bolg"
                        className="rounded-3xl shadow-lg w-full h-[60vh] md:!h-[90vh] object-cover"
                    />

                    {/* Rotating div with circular text and background image */}
                    <div className="absolute top-38 md:top-58 -left-12 max-md:left-[-12px] rounded-full p-1 border border-gray-400 animate-spin">
                        <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[url('/About/rotating1.jpg')] bg-cover bg-center shadow-md">

                            {/* SVG for circular text */}
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