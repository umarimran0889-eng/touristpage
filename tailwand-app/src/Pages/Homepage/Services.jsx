import React from "react";
import { Link } from "react-router-dom";
import { FaPlane, FaBriefcase, FaGlassCheers, FaBuilding, FaArrowRight } from "react-icons/fa";

import MainTitle from "../../Components/MainTitle"; 

const BespokeServices = () => {
  const servicesData = [
    {
      id: 1,
      title: "Airport Transfers",
      description: "Seamless, punctual arrivals and departures with real-time flight tracking.",
      icon: <FaPlane className="text-white text-base sm:text-lg" />, 
      link: "/services/airport-transfers"
    },
    {
      id: 2,
      title: "Corporate Travel",
      description: "Executive transportation designed for productivity and discretion.",
      icon: <FaBriefcase className="text-white text-base sm:text-lg" />, 
      link: "/services/corporate-travel"
    },
    {
      id: 3,
      title: "Special Events",
      description: "Elevate weddings, galas, and celebrations with our premium fleet.",
      icon: <FaGlassCheers className="text-white text-base sm:text-lg" />, 
      link: "/services/special-events"
    },
    {
      id: 4,
      title: "City Tours",
      description: "Curated, comfortable sightseeing experiences with expert local chauffeurs.",
      icon: <FaBuilding className="text-white text-base sm:text-lg" />, 
      link: "/services/city-tours"
    }
  ];

  return (
    // Change: Ensured outer grid container stays locked to exactly px-4 (16px) on mobile
    <section className="w-full flex justify-center bg-gray-950 text-gray-400 py-12 sm:py-20 px-4 sm:px-6">
      <div className="w-full max-w-8xl flex flex-col items-center">
        
        <MainTitle 
          direction="content_center" 
          subTitle="Our Expertise" 
          title="Bespoke Services" 
        />

        {/* Change: Set mobile gap to gap-4 (16px) between grid components */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="bg-neutral-900/40 border border-gray-900 rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-8 flex flex-col items-start gap-4 sm:gap-6 hover:border-neutral-800 transition duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
                {service.icon}
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-3 flex-grow">
                <h3 className="text-white text-lg sm:text-xl font-semibold font-sans">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-neutral-400 font-normal">
                  {service.description}
                </p>
              </div>

              <Link 
                to={service.link}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-800 flex items-center justify-center hover:bg-white text-neutral-400 hover:text-black transition duration-300 group-hover:border-neutral-700"
                aria-label={`Learn more about ${service.title}`}
              >
                <FaArrowRight className="text-[10px] sm:text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BespokeServices;