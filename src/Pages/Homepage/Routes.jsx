import React from "react";
import MainTitle from "../../Components/MainTitle";

import Image3 from '../../assets/team-1-1.jpg.png'

const LuxuryRoutes = () => {
  const routesData = [
    {
      id: 1,
      title: "Toronto Pearson Airport",
      description: "Fast and reliable luxury airport transfers with professional chauffeur service.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
      isYellow: false,
    },
    {
      id: 2,
      title: "Downtown Toronto",
      description: "Premium executive rides for business meetings, luxury dining, shopping districts, and VIP city travel experiences. Enjoy a comfortable luxury road trip with private chauffeur service and premium vehicles.",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=600",
      isYellow: true, 
    },
    {
      id: 3,
      title: "Mississauga & Brampton",
      description: "Safe and stylish transportation services for weddings, parties, family events.",
      image: Image3,
      isYellow: false,
    },
  ];

  return (
    <section className="w-full flex flex-col items-center bg-gray-950 py-12 sm:py-24 px-4 sm:px-8">
      <div className="w-full max-w-8xl px-2 sm:px-4 flex flex-col items-center">
        
        <MainTitle 
          direction="content_center"
          subTitle="Popular Ride Destinations"
          title="Luxury Routes We Serve Across The City"
        />

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-4 sm:mt-6">
          {routesData.map((route) => {
            if (route.isYellow) {
              return (
                <div
                  key={route.id}
                
                  className="relative rounded-[2rem] h-[420px] sm:h-[500px] overflow-hidden bg-cover bg-center flex items-end p-4 transition-transform duration-300 hover:scale-[1.01]"
                  style={{ backgroundImage: `url(${route.image})` }}
                >
                  {/* Change: Compacted descriptive text padding to standard p-4 (16px) configuration */}
                  <div className="w-full bg-yellow-500 rounded-[1.5rem] p-4 sm:p-6 flex flex-col gap-2 sm:gap-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold font-sans tracking-tight">
                      {route.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed font-medium opacity-90">
                      {route.description}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={route.id}
                className="relative rounded-[2rem] h-[420px] sm:h-[500px] overflow-hidden bg-cover bg-center flex items-end p-4 transition-transform duration-300 hover:scale-[1.01]"
                style={{ backgroundImage: `url(${route.image})` }}
              >
                <div className="w-full bg-neutral-950/90 border border-neutral-900/40 backdrop-blur-md rounded-[1.5rem] p-4 sm:p-6 flex flex-col gap-2 text-left min-h-[110px] sm:min-h-[140px] justify-center shadow-2xl">
                  <h3 className="text-white text-lg sm:text-xl font-bold font-sans tracking-wide">
                    {route.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-neutral-400 font-normal">
                    {route.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LuxuryRoutes;