import React from "react";
import { LuArrowUpRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const cardsData = [
  {
    id:"1",
    image: "/Blog/b1.webp",
    date: "Mar 9, 2024",
    readTime: "6 min to read",
    title: "How to choose the solar panels for your home",
  },
  {
    id:"2",
    image: "/Blog/b2.webp",
    date: "Feb 21, 2024",
    readTime: "5 min to read",
    title: "Benefits of switching to renewable energy today",
  },
  {
    id:"3",
    image: "/Blog/b3.webp",
    date: "Jan 15, 2024",
    readTime: "4 min to read",
    title: "Top 10 solar gadgets to look for in 2024",
  },
];



const ProjectCard = () => {

  const navigate = useNavigate();


// <!-- ========== Functions Section ========== -->
const handleNavigate=(id)=>{
  navigate(`/blogDetail/${id}`)}
// <!-- =========Functions End ========== -->



  return (
    <section className="py-16 bg-[#F7F8FA]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col-reverse py-5 sm:flex-row items-center justify-between gap-10 mb-16">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-4xl font-semibold text-[#0C0C3C] max-w-md">
              Our newest posts on renewable energy for living.
            </h1>
          </div>
          <div className="text-center sm:text-right ">
            <p className="text-gray-600 text-lg max-w-sm mb-4 pb-10 sm:mb-2">
              Discover the positive effects of choosing sustainable energy and tips for building a greener lifestyle.
            </p>
             <Link
              to="/contact"
              className="group flex items-center cursor-pointer !m-0 md:w-1/2 !ml-42"
            >
              {/* Text Button */}
              <button className="!m-0 flex items-center cursor-pointer gap-2 px-6 py-3 bg-[#6761db] text-white rounded-full font-semibold text-base group-hover:bg-[#0a0a2f] transition duration-300">
                Cotact us
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

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-white cursor-pointer rounded-xl overflow-hidden shadow-lg group transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative w-full h-64 overflow-hidden"
                onClick={() => handleNavigate(card.id)}
              
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"

                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#7b78f7] -rotate-60 text-white p-4 rounded-full">
                    <FaArrowRight />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center text-sm text-gray-500 mb-3 font-medium space-x-2">
                  <span>{card.date}</span>
                  <div className="h-4 border-l border-gray-400"></div>
                  <span>{card.readTime}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#0C0C3C] group-hover:text-[#7b78f7] transition-colors duration-300">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
