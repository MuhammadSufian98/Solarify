import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: "1",
    title: "How to choose the solar panels for your home",
    content: "",
    tittelone: "How Solar Energy Works",
    para: "Solar energy is captured through systems like photovoltaic (PV) panels and solar thermal collectors, converting sunlight into usable electricity or heat for homes and businesses.",
    headingone: "Photovoltaic (PV) Solar Panels:",
    des: "PV panels use semiconductor materials such as silicon to generate electricity when exposed to sunlight. This direct conversion is efficient, reliable, and widely used in residential applications.",
    titteltwo: "Types of Solar Energy Systems",
    headingtwo: "Grid-Tied Systems:",
    desc: "These are connected to the local electricity grid. They allow you to feed excess electricity back into the grid for credits, helping to lower your energy bill while still drawing power when needed.",
    tittelthree: "Benefits of Solar Energy",
    headingthree: "Renewable and Abundant:",
    desct: "Solar energy is inexhaustible and available virtually everywhere, making it a key solution for long-term energy sustainability.",
    headingfour: "Environmentally Friendly:",
    descti: "It generates electricity without harmful emissions, helping reduce carbon footprints and combat climate change.",
    headingfive: "Cost Savings:",
    desctio: "Over time, solar panels can save you thousands on energy costs. Incentives and rebates further reduce the upfront cost, making solar more affordable than ever.",
    image: "/Blog/b1.webp",
    author: "Jane Smith",
    date: "Mar 9, 2024"
  },
  {
    id: "2",
    title: "Benefits of switching to renewable energy today",
    content: "",
    tittelone: "Why Switch to Renewable Energy?",
    para: "Switching to renewable energy helps reduce greenhouse gas emissions, improves air quality, and secures long-term energy supply without depleting natural resources.",
    headingone: "Types of Renewable Energy:",
    des: "Solar, wind, and hydropower are the most common. These technologies are evolving rapidly and offer reliable, scalable solutions for modern energy needs.",
    titteltwo: "Benefits of Renewables",
    headingtwo: "Clean Air and Lower Bills:",
    desc: "Renewables reduce air pollution caused by fossil fuels and help households save significantly on utility bills through efficiency and incentives.",
    tittelthree: "Global Momentum",
    headingthree: "Countries Leading the Way:",
    desct: "Nations like Germany, China, and the U.S. are investing heavily in renewables to meet aggressive climate goals and transition away from fossil fuels.",
    headingfour: "Energy Security:",
    descti: "Diversifying energy sources through renewables reduces reliance on foreign oil and enhances national security.",
    headingfive: "Future-Proofing:",
    desctio: "Investing in renewable infrastructure prepares communities for a sustainable, resilient energy future.",
    image: "/Blog/b2.webp",
    author: "John Doe",
    date: "Feb 21, 2024"
  },
  {
    id: "3",
    title: "Top 10 solar gadgets to look for in 2024",
    content: "",
    tittelone: "Solar Gadgets You Need",
    para: "From portable chargers to solar cookers, solar gadgets make eco-living convenient and efficient, especially for travelers, outdoor lovers, and off-grid users.",
    headingone: "1. Solar Power Banks",
    des: "Charge phones, tablets, and other devices using solar power—perfect for travel, emergencies, and areas without reliable electricity.",
    headingtwo: "2. Solar Lanterns",
    desc: "Eco-friendly lighting that stores energy during the day and provides hours of illumination at night. Ideal for camping or emergency kits.",
    headingthree: "3. Solar Cookers",
    desct: "Cook meals with zero fuel using only sunlight. These are perfect for outdoor cooking without fire or gas.",
    headingfour: "2024 Trends",
    descti: "Expect to see wearable solar tech, smart solar backpacks, and IoT devices that optimize solar usage with real-time tracking.",
    headingfive: "Eco Benefits",
    desctio: "Using solar-powered gadgets reduces battery waste, cuts carbon footprints, and encourages a more sustainable lifestyle.",
    image: "/Blog/b3.webp",
    author: "Emily Chen",
    date: "Jan 15, 2024"
  },
  {
    id: "4",
    title: "Is solar energy suitable for apartments and urban homes?",
    content: "",
    tittelone: "Urban Solar Challenges",
    para: "Urban settings pose challenges like limited roof space and shared infrastructure, but innovative solutions make solar energy feasible for city dwellers.",
    headingone: "Community Solar Projects:",
    des: "These allow multiple households to benefit from a single shared solar array. You subscribe and receive credits on your utility bill without owning panels.",
    headingtwo: "Rooftop Sharing:",
    desc: "Some buildings create solar cooperatives, where tenants or owners jointly install and share the benefits of a rooftop solar system.",
    headingthree: "Space Limitations:",
    desct: "High-rise buildings have less available space per unit, requiring creative installations like vertical panels or shared systems.",
    headingfour: "Policy Support:",
    descti: "Many governments offer incentives, net metering, or regulatory frameworks to support urban solar adoption.",
    headingfive: "City Case Studies:",
    desctio: "Cities like San Francisco and Amsterdam show successful urban solar deployment through smart planning and community initiatives.",
    image: "/Blog/b4.webp",
    author: "Ali Khan",
    date: "Apr 5, 2024"
  },
  {
    id: "5",
    title: "How to maintain your solar panels for maximum efficiency",
    content: "",
    tittelone: "Solar Maintenance Guide",
    para: "Proper maintenance can enhance energy output, prolong lifespan, and protect your solar panel investment for decades.",
    headingone: "Clean Regularly:",
    des: "Use a soft brush or water hose to remove dust, leaves, and bird droppings that block sunlight and reduce efficiency.",
    headingtwo: "Monitor Output:",
    desc: "Use inverter displays or monitoring apps to track energy production. Sudden drops may indicate issues.",
    headingthree: "Check Inverters & Wiring:",
    desct: "Ensure that inverters are working properly and that all cables are secure and corrosion-free.",
    headingfour: "Prevent Shading:",
    descti: "Keep nearby trees trimmed to avoid seasonal shading that can lower energy generation.",
    headingfive: "Annual Inspections:",
    desctio: "Schedule yearly checkups with professionals to clean hard-to-reach panels and detect system wear or damage early.",
    image: "/Blog/b5.webp",
    author: "Sarah Lee",
    date: "May 1, 2024"
  },
  {
    id: "6",
    title: "Understanding net metering in solar installations",
    content: "",
    tittelone: "What is Net Metering?",
    para: "Net metering allows solar panel owners to receive bill credits for the surplus electricity they send to the grid, optimizing their savings.",
    headingone: "How It Works:",
    des: "During the day, when solar systems generate excess electricity, it’s sent to the grid. At night or during low sunlight, users pull energy from the grid.",
    headingtwo: "Billing Credits:",
    desc: "Utility companies track the balance between what you use and what you supply, charging only for the 'net' usage.",
    headingthree: "Why It Matters:",
    desct: "Net metering can significantly shorten your solar system’s payback period by maximizing savings.",
    headingfour: "Policy Differences:",
    descti: "Some regions offer full retail value for exported electricity; others offer lower rates, which affects return on investment.",
    headingfive: "Future Trends:",
    desctio: "As smart grids expand, dynamic pricing and real-time data will make net metering even more efficient and adaptable.",
    image: "/Blog/b6.webp",
    author: "David Kim",
    date: "May 12, 2024"
  },
  {
    id: "7",
    title: "Solar vs wind energy: Which one is right for you?",
    content: "",
    tittelone: "Comparing Solar and Wind",
    para: "Choosing between solar and wind depends on your location, budget, and energy needs. Both are clean, renewable options.",
    headingone: "Solar Energy:",
    des: "Solar panels are low-maintenance, ideal for sunny regions, and easy to install on rooftops and residential properties.",
    headingtwo: "Wind Energy:",
    desc: "Requires open land and consistent wind. Wind turbines can be more efficient per unit but are better suited to rural setups.",
    headingthree: "Installation & Cost:",
    desct: "Solar is more cost-effective for homeowners, while wind is suited to larger properties with space and regulatory clearance.",
    headingfour: "Maintenance:",
    descti: "Both require occasional inspections, but wind turbines may involve higher repair costs due to moving parts and height.",
    headingfive: "Which One To Choose?",
    desctio: "Use solar in urban/sunny locations; wind suits large, windy rural areas. A hybrid system can combine the best of both.",
    image: "/Blog/b7.webp",
    author: "Priya Nair",
    date: "May 20, 2024"
  },
  {
    id: "8",
    title: "Off-grid solar systems: Everything you need to know",
    content: "",
    tittelone: "What is Off-Grid Solar?",
    para: "Off-grid solar systems are designed to operate independently of the public utility grid, offering energy autonomy and backup solutions.",
    headingone: "Main Components:",
    des: "They include solar panels, deep-cycle batteries, inverters, and charge controllers to manage and store energy effectively.",
    headingtwo: "Use Cases:",
    desc: "Ideal for remote areas, cabins, farms, boats, and any location where grid access is unreliable or unavailable.",
    headingthree: "Advantages:",
    desct: "Enjoy full energy independence, no monthly utility bills, and reliable power during blackouts or natural disasters.",
    headingfour: "Challenges:",
    descti: "High initial setup costs and ongoing battery maintenance require careful planning and budgeting.",
    headingfive: "Planning Tips:",
    desctio: "Analyze your daily power consumption, invest in quality batteries, and include redundancy for cloudy days.",
    image: "/Blog/b8.webp",
    author: "Carlos Gomez",
    date: "May 28, 2024"
  },
  {
    id: "9",
    title: "The future of clean energy in developing countries",
    content: "",
    tittelone: "Clean Energy Access",
    para: "Developing countries are rapidly adopting clean energy to improve livelihoods, education, and health while reducing dependence on costly fossil fuels.",
    headingone: "Key Drivers:",
    des: "Affordable solar technology, international aid, and supportive policy frameworks are enabling this transformation.",
    headingtwo: "Rural Electrification:",
    desc: "Solar mini-grids and home systems bring electricity to communities for the first time, improving quality of life and economic prospects.",
    headingthree: "Education & Health:",
    desct: "Reliable electricity supports better lighting in schools, refrigeration for medicine, and improved sanitation systems.",
    headingfour: "Challenges:",
    descti: "Barriers include lack of skilled technicians, financing models, and logistical hurdles in remote areas.",
    headingfive: "Future Outlook:",
    desctio: "With continued investment and innovation, solar power can help bridge the energy gap and promote sustainable development globally.",
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
        <h2 className="text-[#a17d29] font-semibold text-2xl">Blog not found.</h2>
        <button
          onClick={() => navigate("/blog")}
          className="mt-6 px-6 py-3 bg-[#a17d29] text-white rounded-lg hover:bg-[#8c681f] transition"
        >
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
   <div className="max-w-4xl mx-auto px-4 py-16">
  <div className="space-y-4 bottom-8 relative">
    <button
      onClick={() => navigate(-1)}
      className="text-[#7b78f7] font-semibold hover:underline cursor-pointer"
    >
      ← Back to Blogs
    </button>

    <h1 className="text-3xl md:text-4xl font-bold text-[#0C0C3C]">
      {blog.title}
    </h1>

    <p className="text-sm text-[#525257] font-medium">
      By <span className="font-semibold">{blog.author}</span> • {blog.date}
    </p>
  </div>

  <img
    src={blog.image}
    alt={blog.title}
    className="rounded-xl w-full h-64 md:h-80 object-cover shadow-lg mb-12"
  />

  <div className="text-[#333] text-md md:text-lg leading-8 space-y-12 relative top-10">
    {blog.content && <p>{blog.content}</p>}

    {blog.tittelone && (
      <h2 className="text-3xl md:text-4xl font-bold text-[#0C0C3C]">
        {blog.tittelone}
      </h2>
    )}
    {blog.para && <p>{blog.para}</p>}

    {blog.headingone && (
      <h3 className="text-xl md:text-2xl font-semibold text-[#333333] mt-4">
        {blog.headingone}
      </h3>
    )}
    {blog.des && <p>{blog.des}</p>}

    {blog.titteltwo && (
      <h2 className="text-3xl md:text-3xl font-bold text-[#0C0C3C]">
        {blog.titteltwo}
      </h2>
    )}
    {blog.headingtwo && (
      <h3 className="text-xl md:text-2xl font-semibold text-[#333333] mt-4">
        {blog.headingtwo}
      </h3>
    )}
    {blog.desc && <p>{blog.desc}</p>}

    {blog.tittelthree && (
      <h2 className="text-3xl md:text-4xl font-bold text-[#0C0C3C]">
        {blog.tittelthree}
      </h2>
    )}
    {blog.headingthree && (
      <h3 className="text-xl md:text-2xl font-semibold text-[#333333] mt-4">
        {blog.headingthree}
      </h3>
    )}
    {blog.desct && <p>{blog.desct}</p>}

    {blog.headingfour && (
      <h3 className="text-xl md:text-2xl font-semibold text-[#333333] mt-4">
        {blog.headingfour}
      </h3>
    )}
    {blog.descti && <p>{blog.descti}</p>}

    {blog.headingfive && (
      <h3 className="text-xl md:text-2xl font-semibold text-[#0C0C3C] mt-4">
        {blog.headingfive}
      </h3>
    )}
    {blog.desctio && <p>{blog.desctio}</p>}
  </div>
</div>

  );
};


export default BlogDetail;
