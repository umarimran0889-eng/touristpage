import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaBriefcase, FaArrowRight } from "react-icons/fa";
import MainTitle from "../../Components/MainTitle";

 const fleetData = [
    {
      id: 1,
      name: "Rolls Royce Phantom",
      categoryTag: "WEDDING VIP",
      tagline: "Timeless Luxury",
      passengers: 4,
      luggage: 2,
      image: "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?auto=format&fit=crop&q=80&w=600",
      features: ["Wedding VIP Service", "Red Carpet Arrival", "Professional Chauffeur Included"],
    },
    {
      id: 2,
      name: "Cadillac Escalade",
      categoryTag: "EXECUTIVE SUV",
      tagline: "Premium Executive SUV",
      passengers: 6,
      luggage: 6,
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=600",
      features: ["Premium Luxury Interior", "Complimentary WiFi Available", "Maximum VIP Comfort"],
    },
    {
      id: 3,
      name: "Luxury Party Bus",
      categoryTag: "CELEBRATION",
      tagline: "Celebration On Wheels",
      passengers: "20+",
      luggage: 12,
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=600",
      features: ["Dynamic Club Style Lighting", "Premium Lounge Seating", "Built-In Refreshment Bar"],
    },
  ];

const Vehicles = () => {
  return (
    // Change: Balanced container heights and side limits to py-12 px-4 (16px) on mobile viewports
    <section className="w-full flex justify-center bg-gray-950 text-gray-400 py-12 sm:py-20 px-4 sm:px-8">
      <div className="w-full max-w-8xl px-2 sm:px-4 flex flex-col items-center">
        
        <MainTitle 
          direction="content_center"
          subTitle="Our Fleet"
          title="Vehicles That Make Every Arrival Memorable."
        />

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-4 sm:mt-6">
          {fleetData.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="bg-gray-950 border border-neutral-900/60 rounded-[2rem] overflow-hidden flex flex-col justify-between hover:border-neutral-800 transition duration-300"
            >
              <div className="relative w-full h-52 sm:h-64 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-neutral-900/70 border border-neutral-800 backdrop-blur-sm text-[10px] text-yellow-500/90 font-bold tracking-wider px-3 py-1 rounded-md">
                  {vehicle.categoryTag}
                </div>
              </div>

              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="text-white text-lg sm:text-xl font-bold font-sans tracking-wide">
                    {vehicle.name}
                  </h3>
                  
                  <div className="flex items-center gap-3 text-neutral-500 text-xs mt-1 shrink-0">
                    <div className="flex items-center gap-1">
                      <FaUsers className="text-neutral-400" size={13} />
                      <span>{vehicle.passengers}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBriefcase className="text-neutral-400" size={12} />
                      <span>{vehicle.luggage}</span>
                    </div>
                  </div>
                </div>

                <span className="text-yellow-600/90 text-xs font-medium mb-3 sm:mb-5 block">
                  {vehicle.tagline}
                </span>

                <ul className="flex flex-col gap-2.5 mb-5 sm:mb-8 flex-grow">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-neutral-400 font-light">
                      <span className="w-1 h-1 rounded-full bg-yellow-500 shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-auto">
                  <Link 
                    to={`/fleet/${vehicle.id}`}
                    className="w-full border border-neutral-800 hover:border-neutral-700 text-white text-center text-xs font-semibold py-3 sm:py-3.5 rounded-xl transition duration-200"
                  >
                    View Details
                  </Link>
                  <Link 
                    to="/book"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-center text-xs font-bold py-3 sm:py-3.5 rounded-xl transition duration-200 shadow-lg shadow-yellow-500/5"
                  >
                    Book Now
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8">
          <Link 
            to="/fleet"
            className="border border-neutral-800 hover:border-neutral-700 hover:bg-white/5 text-white font-medium text-sm px-6 py-3.5 sm:px-8 sm:py-4 rounded-full flex items-center gap-3 transition duration-300 group"
          >
            <span>Explore Full Collection</span>
            <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Vehicles;