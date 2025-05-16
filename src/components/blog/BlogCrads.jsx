import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const cardsData = [
  {
    image: '/Blog/b1.webp',
    date: 'Mar 9, 2024',
    readTime: '6 min to read',
    title: 'How to choose the solar panels for your home',
  },
  {
    image: '/Blog/b2.webp',
    date: 'Feb 21, 2024',
    readTime: '5 min to read',
    title: 'Benefits of switching to renewable energy today',
  },
  {
    image: '/Blog/b3.webp',
    date: 'Jan 15, 2024',
    readTime: '4 min to read',
    title: 'Top 10 solar gadgets to look for in 2024',
  },
  {
    image: '/Blog/b4.webp',
    date: 'Mar 2, 2024',
    readTime: '7 min to read',
    title: 'Understanding net metering and how it works',
  },
  {
    image: '/Blog/b5.webp',
    date: 'Apr 1, 2024',
    readTime: '3 min to read',
    title: 'How solar energy helps lower your electricity bill',
  },
  {
    image: '/Blog/b6.webp',
    date: 'Apr 10, 2024',
    readTime: '6 min to read',
    title: 'The future of solar: innovations to watch',
  },
  {
    image: '/Blog/b7.webp',
    date: 'May 1, 2024',
    readTime: '5 min to read',
    title: 'How to maintain solar panels for best performance',
  },
  {
    image: '/Blog/b8.webp',
    date: 'May 8, 2024',
    readTime: '4 min to read',
    title: 'Solar tax credits: what you need to know',
  },
  {
    image: '/Blog/b9.webp',
    date: 'May 12, 2024',
    readTime: '6 min to read',
    title: 'Community solar: what is it and why it matters',
  },
];

const BlogCard = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#F7F8FA' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col h-[500px] overflow-hidden group relative transition-transform duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full h-[280px] overflow-hidden rounded-lg">
                <img
                  src={card.image}
                  alt="Blog"
                  className="w-full h-full object-cover"
                />
                {/* Hover Icon Centered */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#7b78f7] text-white p-4 rounded-full rotate-320">
                    <FaArrowRight />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 flex-1 flex-col justify-between">
                {/* Date & Time */}
                <div className="flex items-center text-sm text-[#525257] mb-4 space-x-2 font-semibold">
                  <span>{card.date}</span>
                  <div className="h-4 border-l border-gray-400"></div>
                  <span>{card.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-semibold text-[#0C0C3C] group-hover:text-[#7b78f7] transition-colors duration-300">
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
