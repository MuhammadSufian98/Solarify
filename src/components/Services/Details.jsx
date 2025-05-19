import React from "react";

const solarServices = [
  {
    heading: "Polycrystalline Services",
    paragraph: "Polycrystalline materials are a wide range of industries, from to renewable energy.",
    image: "/Services/card8.svg",
  },
  {
    heading: "Mono PERC services",
    paragraph: "Monocrystalline PERC solar panels, which are a type of highly efficient technology.",
    image: "/Services/card1.svg",
  },
  {
    heading: "Installation and repair",
    paragraph: "Our experienced technicians are experts in installing a wide range of systems.",
    image: "/Services/card2.svg",
  },
  {
    heading: "Research solar batteries",
    paragraph: "Solar batteries are a key component of sustainable energy systems.",
    image: "/Services/card3.svg",
  },
  {
    heading: "Sun energy analitics",
    paragraph: "Sun Energy Analytics is a cutting-edge platform that the power of data.",
    image: "/Services/card4.svg",
  },
  {
    heading: "Windmill installation",
    paragraph: "At Solarify renewable energy private limited, we offer comprehensive windmill.",
    image: "/Services/card5.svg",
  },
  {
    heading: "Global energy network",
    paragraph: "Our network of experts spans the globe, allowing us to deliver cutting-edge energy.",
    image: "/Services/card6.svg",
  },
  {
    heading: "Support & Maintenance",
    paragraph: "That's why we offer comprehensive support and repair services to ensure.",
    image: "/Services/card7.svg",
  },
];

const Details = () => {
  return (
    <div className="py-16 px-4 bg-[#F9FAFB]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {solarServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-12 hover:shadow-md transition h-90 group hover:bg-[#7b78f7] cursor-pointer"
          >
            <div className="flex flex-col gap-7">
              <p className="text-2xl font-semibold text-[#0C0C3C] group-hover:text-white transition-colors">
                {service.heading}
              </p>
              <p className="font-semibold text-[#576067] group-hover:text-white transition-colors">
                {service.paragraph}
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="bg-[#7b78f7] p-3 rounded-md group-hover:bg-white transition">
                <img
                  src={service.image}
                  alt={service.heading}
                  className="w-10 h-10 object-contain transition duration-300 group-hover:filter group-hover:invert group-hover:sepia group-hover:saturate-500 group-hover:hue-rotate-[180deg]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
