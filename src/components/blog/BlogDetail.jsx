import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: "1",
    title: "How to choose the solar panels for your home",
    content: `Choosing the right solar panels depends on efficiency, budget, and warranty. Monocrystalline panels are efficient but cost more, while polycrystalline panels are more affordable but slightly less efficient.

Always check certifications, look into brand reputation, and consider local installers who can offer support.`,
    image: "/Blog/b1.webp",
    author: "Jane Smith",
    date: "Mar 9, 2024"
  },
  {
    id: "2",
    title: "Benefits of switching to renewable energy today",
    content: `Switching to renewable energy reduces carbon emissions, saves long-term costs, and offers energy independence.

Government incentives and falling costs make 2024 the ideal time to transition.`,
    image: "/Blog/b2.webp",
    author: "John Doe",
    date: "Feb 21, 2024"
  },
  {
    id: "3",
    title: "Top 10 solar gadgets to look for in 2024",
    content: `From solar-powered phone chargers to garden lights and backpacks, solar gadgets in 2024 are smart, stylish, and sustainable.

They're perfect for travel, emergency kits, or eco-conscious living.`,
    image: "/Blog/b3.webp",
    author: "Emily Chen",
    date: "Jan 15, 2024"
  },
  {
    id: "4",
    title: "Is solar energy suitable for apartments and urban homes?",
    content: `Urban settings can still use solar energy with shared systems or microgrids. Rooftop sharing or solar community programs are the way forward.`,
    image: "/Blog/b4.webp",
    author: "Ali Khan",
    date: "Apr 5, 2024"
  },
  {
    id: "5",
    title: "How to maintain your solar panels for maximum efficiency",
    content: `Regular cleaning, avoiding shade, and routine inspections help maintain solar efficiency. Keep panels free of dust and monitor energy output.`,
    image: "/Blog/b5.webp",
    author: "Sarah Lee",
    date: "May 1, 2024"
  },
  {
    id: "6",
    title: "Understanding net metering in solar installations",
    content: `Net metering allows users to feed surplus energy back into the grid for credits. It helps lower bills and increase solar ROI.`,
    image: "/Blog/b6.webp",
    author: "David Kim",
    date: "May 12, 2024"
  },
  {
    id: "7",
    title: "Solar vs wind energy: Which one is right for you?",
    content: `Solar is more practical for homes; wind suits open rural areas. Evaluate your site, energy needs, and budget before choosing.`,
    image: "/Blog/b7.webp",
    author: "Priya Nair",
    date: "May 20, 2024"
  },
  {
    id: "8",
    title: "Off-grid solar systems: Everything you need to know",
    content: `Off-grid systems offer independence but need batteries, inverters, and careful planning. Perfect for remote areas or backup.`,
    image: "/Blog/b8.webp",
    author: "Carlos Gomez",
    date: "May 28, 2024"
  },
  {
    id: "9",
    title: "The future of clean energy in developing countries",
    content: `Developing nations are investing in solar to boost energy access and reduce poverty. Clean energy can uplift entire regions.`,
    image: "/Blog/b9.webp",
    author: "Nina Patel",
    date: "June 4, 2024"
  }
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find((post) => post.id === id);

  if (!blog) {
    return (
      <div className="text-center py-24">
        <h2 className="text-[#a17d29] font-semibold text-xl">
          Blog not found.
        </h2>
        <button
          onClick={() => navigate("/blog")}
          className="mt-4 px-4 py-2 bg-[#a17d29] hover:cursor-pointer text-white rounded"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 bg-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-[#7b78f7] font-semibold hover:underline hover:cursor-pointer"
      >
        ← Back to Blogs
      </button>

      <h1 className="text-3xl md:text-4xl font-bold text-[#0C0C3C] mb-4">
        {blog.title}
      </h1>

      <p className="text-sm text-gray-600 mb-6">
        By {blog.author} • {blog.date}
      </p>

      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-xl w-full h-64 object-cover mb-8 shadow-md"
      />

      <p className="text-gray-800 leading-relaxed whitespace-pre-line text-md md:text-lg">
        {blog.content}
      </p>
    </div>
  );
};

export default BlogDetail;
