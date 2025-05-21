import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// for id 1
import img1 from "/Proimg/b1.webp";
import img11 from "/Pdetail/permanent.avif";
// for id 2
import img2 from "/Proimg/b2.webp";
import img22 from "/Pdetail/b22.avif";
// for id :3
import img3 from "/Proimg/b3.webp";
import img33 from "/Pdetail/b33.avif";
// for id :4
import img4 from "/Proimg/b4.webp";
import img44 from "/Pdetail/b44.avif";
// for id:5
import img5 from "/Proimg/b5.webp";
import img55 from "/Pdetail/b55.avif";
// for id : 6
import img6 from "/Proimg/b6.webp";
import img66 from "/Pdetail/b66.avif";
const InitArray = [
  {
    id: "1",
    mainImg: img1,
    heading: "Renewable Energy Ventures",
    date: "Nov 11, 2023",
    client: "Ernad Smith",
    address: "258 Dancing Street, USA",
    budget: "$460.00",
    para1:
      "Solar energy stands as a promising solution to the world's growing energy needs. With ongoing advancements and a commitment to sustainability, solar power is poised to play a crucial role in creating a cleaner, more efficient energy future. Embracing solar technology not only benefits the environment but also supports economic growth and energy independence.",
    heading2: "Challenges and Future Prospects",
    para2:
      "ChallengesInitial installation costs and financial barriers for some consumers.Variability in energy production due to weather conditions and geographic location.Future ProspectsContinued advancements in solar technology and efficiency.Increasing affordability and accessibility of solar solutions.Growing integration with other renewable energy sources for a sustainable energy mix.",
    heading3: "The Challenge of the Project",
    para3:
      "Solar energy is transforming how we power our world, offering a sustainable alternative to traditional energy sources. With advancements in technology and growing environmental awareness, solar energy has become a viable and essential component of our energy future. This article explores the key aspects of solar energy, including its benefits, innovations, and impact on the environment.",
    boldheading:
      "Whether you're a small business looking to reduce your carbon footprint or a homeowner interested in saving on electricity bills, Firefly is here to guide you every step of the way. Our team of experts is dedicated to providing tailored solutions that meet your specific needs and budget.",

    iso: "ISO 9001:2015 company",
    isoPara:
      "2015 company in the field of Solar Applications with more 500 highly satisfied customers.",
    specializ: "Specialized In",
    specPara:
      "Specialized in the Solar Power Plant, Water Heater, Solar Street Lights and Solar Pumps.",
    certified: "Certified By",
    certiPara:
      "Certified by all leading agencies for quality and process, Renewable Energy Private Limited.",
    lastImg: img11,
  },
  {
    id: "2",
    mainImg: img2,
    heading: "Sustainable Future Energy ",
    date: "Mar 7, 2024",
    client: "Nora Williamson",
    address: "258 Rankin Street, USA",
    budget: "$1100.00",
    para1:
      "Solar energy has emerged as a leading solution in the quest for sustainable and renewable energy sources. With its potential to reduce reliance on fossil fuels and lower carbon emissions, solar power is revolutionizing how we generate and consume energy. This article explores the benefits, technologies, and future of solar energy.",
    heading2: "Benefits of Solar Energy",
    para2:
      "Renewable and Sustainable: Solar energy is derived from the sun, a virtually limitless resource, making it a reliable and sustainable source of power.Environmental Impact: Utilizing solar energy reduces greenhouse gas emissions, helping combat climate change and decrease air pollution.Cost Savings: Once installed, solar panels can significantly lower electricity bills, offering long-term financial benefits.",
    heading3: "Key Solar Technologies",
    para3:
      "Solar energy represents a transformative solution for meeting the world's growing energy needs while addressing environmental concerns. With continued advancements in technology and expanding applications, solar power is set to play a crucial role in shaping a sustainable and energy-efficient future. Embracing solar energy not only offers immediate benefits but also paves the way for a cleaner and greener planet for generations to come.",
    boldheading:
      "Whether you're a small business looking to reduce your carbon footprint or a homeowner interested in saving on electricity bills, Firefly is here to guide you every step of the way. Our team of experts is dedicated to providing tailored solutions that meet your specific needs and budget.",
// <!-- ========== Chnaged  ========== -->

// <!-- =========Chnaged  ========== -->

    iso: "ISO 9001:2015 company",
    isoPara:
      "2015 company in the field of Solar Applications with more 500 highly satisfied customers.",
    specializ: "Specialized In",
    specPara:
      "Specialized in the Solar Power Plant, Water Heater, Solar Street Lights and Solar Pumps.",
    certified: "Certified By",
    certiPara:
      "Certified by all leading agencies for quality and process, Renewable Energy Private Limited.",
    lastImg: img22,
  },
  {
    id: "3",
    mainImg: img3,
    heading: "Solar Radiance Power Network",
    date: "Jan 6, 2024",
    client: "Mariana Trench",
    address: "14 New Street, USA",
    budget: "$290.00",
    para1:
      "Solar energy is transforming how we power our world, offering a sustainable alternative to traditional energy sources. With advancements in technology and growing environmental awareness, solar energy has become a viable and essential component of our energy future. This article explores the key aspects of solar energy, including its benefits, innovations, and impact on the environment.",
    heading2: "The Basics of Solar Energy",
    para2:
      "What is Solar Energy?Solar energy is the energy harnessed from the sun’s rays using solar panels and other technologies.How Does Solar Energy Work?Solar panels convert sunlight into electricity through photovoltaic cells.Solar thermal systems use sunlight to heat water or air for residential and commercial use.Types of Solar TechnologiesPhotovoltaic (PV) Systems: Convert sunlight directly into electricity.Solar Thermal Systems: Use sunlight to generate heat for water or air.",
    heading3: "Innovations in Solar Technology",
    para3:
      "Solar energy stands as a promising solution to the world's growing energy needs. With ongoing advancements and a commitment to sustainability, solar power is poised to play a crucial role in creating a cleaner, more efficient energy future. Embracing solar technology not only benefits the environment but also supports economic growth and energy independence.",
    boldheading:
      "Whether you're a small business looking to reduce your carbon footprint or a homeowner interested in saving on electricity bills, Firefly is here to guide you every step of the way. Our team of experts is dedicated to providing tailored solutions that meet your specific needs and budget.",
// <!-- ========== Changed  ========== -->

// <!-- =========Changed  ========== -->

    iso: "ISO 9001:2015 company",
    isoPara:
      "2015 company in the field of Solar Applications with more 500 highly satisfied customers.",
    specializ: "Specialized In",
    specPara:
      "Specialized in the Solar Power Plant, Water Heater, Solar Street Lights and Solar Pumps.",
    certified: "Certified By",
    certiPara:
      "Certified by all leading agencies for quality and process, Renewable Energy Private Limited.",
    lastImg: img33,
  },
  {
    id: "4",
    mainImg: img4,
    heading: "Renewable Energy Ventures",
    date: "Nov 11, 2023",
    client: "Ernad Smith",
    address: "258 Dancing Street, USA",
    budget: "$460.00",
    para1:
      "Solar energy stands as a promising solution to the world's growing energy needs. With ongoing advancements and a commitment to sustainability, solar power is poised to play a crucial role in creating a cleaner, more efficient energy future. Embracing solar technology not only benefits the environment but also supports economic growth and energy independence.",
    heading2: "Challenges and Future Prospects",
    para2:
      "ChallengesInitial installation costs and financial barriers for some consumers.Variability in energy production due to weather conditions and geographic location.Future ProspectsContinued advancements in solar technology and efficiency.Increasing affordability and accessibility of solar solutions.Growing integration with other renewable energy sources for a sustainable energy mix.",
    heading3: "The Challenge of the Project",
    para3:
      "Solar energy is transforming how we power our world, offering a sustainable alternative to traditional energy sources. With advancements in technology and growing environmental awareness, solar energy has become a viable and essential component of our energy future. This article explores the key aspects of solar energy, including its benefits, innovations, and impact on the environment.",
    boldheading:
      "Whether you're a small business looking to reduce your carbon footprint or a homeowner interested in saving on electricity bills, Firefly is here to guide you every step of the way. Our team of experts is dedicated to providing tailored solutions that meet your specific needs and budget.",

    iso: "ISO 9001:2015 company",
    isoPara:
      "2015 company in the field of Solar Applications with more 500 highly satisfied customers.",
    specializ: "Specialized In",
    specPara:
      "Specialized in the Solar Power Plant, Water Heater, Solar Street Lights and Solar Pumps.",
    certified: "Certified By",
    certiPara:
      "Certified by all leading agencies for quality and process, Renewable Energy Private Limited.",
    lastImg: img44,
  },
  {
    id: "5",
    mainImg: img5,
    heading: "Pure Solar Power Initiative",
    date: "Jan 16, 2024",
    client: "Josefin H. Smith",
    address: "258 Dancing Street, USA",
    budget: "$890.00",
    para1:
      "Windmill installations not only provide a clean energy solution but also contribute to economic development. They reduce dependence on fossil fuels, lower greenhouse gas emissions, and provide a renewable source of energy that can power homes, businesses, and industries. Additionally, wind power creates jobs in manufacturing, installation, and maintenance, contributing to local economies.",
    heading2: "Project mission",
    para2:
      "Grunion, also known as Leuresthes tenuis, is a species of small, silvery fish found along the coast of California and Baja California. These unique fish are famous for their remarkable spawning behavior. During the spring and summer months, grunion come ashore in large numbers to lay their eggs in the sandy beaches. This spectacle, known as the grunion run, attracts nature enthusiasts who gather to witness the fish wriggling in the sand as they deposit their eggs. Grunion populations are carefully monitored to ensure their conservation and sustainability.",
    heading3: "The Challenge of the Project",
    para3:
      "While these three fish species may seem vastly different in habitat and behavior, they all contribute to the rich biodiversity of aquatic ecosystems. From the deep-sea depths inhabited by slickheads to the sandy shores visited by grunion during their spawning runs, and the tranquil lakes where lake trout thrive, each species plays a vital role in its respective ecosystem. Their unique adaptations and behaviors make them fascinating subjects for study and observation.",
    boldheading:
      "Whether you're a small business looking to reduce your carbon footprint or a homeowner interested in saving on electricity bills, Firefly is here to guide you every step of the way. Our team of experts is dedicated to providing tailored solutions that meet your specific needs and budget.",

    iso: "ISO 9001:2015 company",

    // <!-- ========== Changed ========== -->
    
    // <!-- =========Changed ========== -->
    
    isoPara:
      "2015 company in the field of Solar Applications with more 500 highly satisfied customers.",
    specializ: "Specialized In",
    specPara:
      "Specialized in the Solar Power Plant, Water Heater, Solar Street Lights and Solar Pumps.",
    certified: "Certified By",
    certiPara:
      "Certified by all leading agencies for quality and process, Renewable Energy Private Limited.",
    lastImg: img55,
  },
  {
    id: "6",
    mainImg: img6,
    heading: "Solar Sky Energy Solutions",
    date: "Dec 9, 2023",
    client: "Jhon Smith",
    address: "98/1 Jhonson Street, USA",
    budget: "$890.00",
    para1:
      "Following installation, regular maintenance is essential to keep the windmill running at optimal efficiency. Technicians perform routine inspections, including checking the rotor blades for wear, monitoring lubrication levels, and ensuring the electrical systems remain fully operational. Over time, repairs may be necessary, particularly for the rotor blades, which are subjected to constant stress. Prompt repairs prevent small issues from escalating into major problems, prolonging the lifespan of the windmill and maintaining consistent energy production.",
    heading2: "Project Mission",
    para2:
      "Expanding access to solar energy in underserved communities.Promoting sustainable development and resilience against climate change through solar initiatives.",
    heading3: "Challenges and Considerations",
    para3:
      "High upfront investment for purchasing and installing solar systems.Potential financial barriers, though many financing options are available.Solar energy generation depends on weather conditions and daylight hours.Requires storage solutions or grid connectivity for consistent power supply.",
    boldheading:
      "Whether you're a small business looking to reduce your carbon footprint or a homeowner interested in saving on electricity bills, Firefly is here to guide you every step of the way. Our team of experts is dedicated to providing tailored solutions that meet your specific needs and budget.",

    iso: "ISO 9001:2015 company",
    isoPara:
      "2015 company in the field of Solar Applications with more 500 highly satisfied customers.",
    specializ: "Specialized In",
    specPara:
      "Specialized in the Solar Power Plant, Water Heater, Solar Street Lights and Solar Pumps.",
    certified: "Certified By",
    certiPara:
      "Certified by all leading agencies for quality and process, Renewable Energy Private Limited.",
    lastImg: img66,
  },
];

const Initiative = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = parseInt(id);
  const item = InitArray.find((item) => item.id === id);
  console.log("image is..", img1)

  if (!item) {
    return (
      <div className="text-center py-24">
        <h2 className="text-[#a17d29] font-semibold text-2xl">
          Project not found.
        </h2>
        <button
          onClick={() => navigate("/project")}
          className="mt-6 px-6 py-3 bg-[#a17d29] text-white rounded-lg hover:bg-[#8c681f] transition"
        >
          Back to Project
        </button>
      </div>
    );
  }

  const MovetoDetail = () => {
    const nextId = numericId + 1;
    const hasNext = InitArray.some((item) => parseInt(item.id) === nextId);
    if (hasNext) {
      navigate(`/initiative/${nextId}`);
    }
  };

  const BacktoDetail = () => {
    const prevId = numericId - 1;
    const hasPrev = InitArray.some((item) => parseInt(item.id) === prevId);
    if (hasPrev) {
      navigate(`/initiative/${prevId}`);
    }
  };
  

  return (
    <div className="w-full min-h-screen py-10 bg-gray-100">
      <div className="w-full md:w-[85%] mx-auto p-4 flex flex-col gap-10 bg-white shadow-xl rounded-lg">
        {/* Header Image */}
        <div className="w-full  h-64 md:h-[400px] overflow-hidden rounded-lg">
          <img
            src={item.mainImg}
            alt={item.heading}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Project Details */}
        <div className="w-full sm:w-[70%]  gap-6 px-4">
          <h1 className="text-3xl font-bold pb-5 text-[#333]">{item.heading}</h1>

          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 text-sm">
            <div className="sm:border-r pr-4">
              <h2 className="font-semibold text-2xl">Date:</h2>
              <p className="text-lg ">{item.date}</p>
            </div>
            <div className="sm:border-r pr-4">
              <h2 className="font-semibold text-2xl">Client:</h2>
              <p className="text-lg">{item.client}</p>
            </div>
            <div className="sm:border-r pr-4">
              <h2 className="font-semibold text-2xl">Address:</h2>
              <p className="text-lg sm:whitespace-nowrap">{item.address}</p>
            </div>
            <div className="sm:border-r lg:pl-20 pr-4 pb">
              <h2 className="font-semibold  text-2xl">Budget:</h2>
              <p className="text-lg">{item.budget}</p>
            </div>
          </div>

          <p className="text-gray-700 text-lg py-10 leading-relaxed">
            {item.para1}
          </p>

          {/* Additional Sections */}
          <div className="space-y-4">
            <h2 className="text-4xl pb-5 font-semibold">{item.heading2}</h2>
            <p className="text-gray-700 text-lg pb-10">{item.para2}</p>

            <h2 className="text-4xl pb-5 font-semibold">{item.heading3}</h2>
            <p className="text-gray-700 text-lg pb-10">{item.para3}</p>

            <p className="text-2xl font-bold ">{item.boldheading}</p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1  pt-10 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <div className="border-b border-gray-400 ">
                <h3 className="font-semibold text-2xl ">{item.iso}</h3>
                <p className="text-gray-600 py-3 text-lg">{item.isoPara}</p>
              </div>
              <div className="border-b border-gray-400 pt-5">
                <h3 className="font-semibold text-2xl ">{item.specializ}</h3>
                <p className="text-gray-600 py-3 text-lg">{item.specPara}</p>
              </div>
              <div className=" pt-5  ">
                <h3 className="font-semibold text-2xl ">{item.certified}</h3>
                <p className="text-gray-600 py-3 text-lg">{item.certiPara}</p>
              </div>
            </div>

            {/* Final Image */}
            <div className="w-full h-60 overflow-hidden rounded-md">
              <img
                src={item.lastImg}
                alt="certificate or result"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <hr className="pb-10 text-gray-400" />

          {/* Navigation Buttons */}
          <div className=" mt-8">
            <span
              onClick={BacktoDetail}
              disabled={numericId <= 1}
              className=" px-7 float-left py-2 font-semibold cursor-pointer hover:border-blue-500 border rounded-full"
            >
              Previous
            </span>
            <span
              onClick={MovetoDetail}
              disabled={numericId >= InitArray.length}
              className=" px-10 float-end py-2 font-semibold cursor-pointer hover:border-blue-500 border rounded-full"
            >
              Next
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initiative;
