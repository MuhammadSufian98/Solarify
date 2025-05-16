import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const cardsData = [
  {
    id: "1",
    image: "/Blog/b1.webp",
    date: "Mar 9, 2024",
    readTime: "6 min to read",
    title: "How to choose the solar panels for your home",
  },
  {
    id: "2",
    image: "/Blog/b2.webp",
    date: "Feb 21, 2024",
    readTime: "5 min to read",
    title: "Benefits of switching to renewable energy today",
  },
  {
    id: "3",
    image: "/Blog/b3.webp",
    date: "Jan 15, 2024",
    readTime: "4 min to read",
    title: "Top 10 solar gadgets to look for in 2024",
  },
  {
    id: "4",
    image: "/Blog/b4.webp",
    date: "Apr 5, 2024",
    readTime: "7 min to read",
    title: "Is solar energy suitable for apartments and urban homes?",
  },
  {
    id: "5",
    image: "/Blog/b5.webp",
    date: "May 1, 2024",
    readTime: "6 min to read",
    title: "How to maintain your solar panels for maximum efficiency",
  },
  {
    id: "6",
    image: "/Blog/b6.webp",
    date: "May 12, 2024",
    readTime: "8 min to read",
    title: "Understanding net metering in solar installations",
  },
  {
    id: "7",
    image: "/Blog/b7.webp",
    date: "May 20, 2024",
    readTime: "5 min to read",
    title: "Solar vs wind energy: Which one is right for you?",
  },
  {
    id: "8",
    image: "/Blog/b8.webp",
    date: "May 28, 2024",
    readTime: "6 min to read",
    title: "Off-grid solar systems: Everything you need to know",
  },
  {
    id: "9",
    image: "/Blog/b9.webp",
    date: "June 4, 2024",
    readTime: "9 min to read",
    title: "The future of clean energy in developing countries",
  },
];

const BlogCard = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/blogdetail/${id}`);
  };

  return (
    <section className="py-16 bg-[#F7F8FA]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col h-[500px] overflow-hidden group relative transition-transform duration-300"
            >
              <div className="relative w-full h-[280px] overflow-hidden rounded-t-lg">
                <img
                  src={card.image}
                  alt="Blog"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => handleNavigate(card.id)}
                >
                  <div className="bg-[#7b78f7] text-white p-4 rounded-full cursor-pointer shadow-md">
                    <FaArrowRight />
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex-col justify-between">
                <div className="flex items-center text-sm text-[#525257] mb-4 space-x-2 font-semibold">
                  <span>{card.date}</span>
                  <div className="h-4 border-l border-gray-400"></div>
                  <span>{card.readTime}</span>
                </div>

                <h3 className="text-2xl font-semibold text-[#0C0C3C] group-hover:text-[#7b78f7] transition-colors duration-300">
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

export default BlogCard;
