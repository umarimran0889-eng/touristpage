import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import MainTitle from '../../Components/MainTitle'

const testimonialsData = [
    {
      id: 1,
      name: "Sarah & Daniel",
      location: "Toronto, ON",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
      reviewText: "The Rolls Royce wedding experience was flawless. From the red carpet arrival to the professional chauffeur, every detail was handled with pure class. Professional service from start to finish."
    },
    {
      id: 2,
      name: "Michael R.",
      location: "Mississauga, ON",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
      reviewText: "Best airport limo service in GTA. Driver arrived 10 minutes early and the Escalade was immaculate. Communication was perfect. I use them for all my business travel now."
    },
    {
      id: 3,
      name: "Amanda K.",
      location: "Brampton, ON",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
      reviewText: "Our party bus experience for my 30th birthday was incredible. The sound system and lighting were top-tier. Luxury, fun, and completely stress-free. Highly recommend Platinum Rides."
    }
  ];

const Reviews = () => {
  return (
    // Change: Scaled outer wrapper padding down to py-12 and locked to px-4 (16px) on mobile viewports
    <section className="w-full flex justify-center bg-gray-950 text-gray-400 py-12 sm:py-20 px-4 sm:px-8">
      <div className="w-full max-w-8xl px-2 sm:px-4 flex flex-col items-center">
        
        <MainTitle 
          direction="content_center"
          subTitle="Client Testimonials"
          title="What Our Clients Say."
        />
        
        <div className="w-30 h-1.5 bg-yellow-500 rounded-full mt-2 mb-6 sm:mb-8"></div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mt-4 sm:mt-6">
          {testimonialsData.map((item) => (
            <div 
              key={item.id} 
              className="relative bg-neutral-900/30 border border-neutral-900 rounded-[2rem] p-6 pt-10 sm:p-8 sm:pt-12 flex flex-col justify-between items-start min-h-[290px] sm:min-h-[340px] hover:border-neutral-800 transition duration-300"
            >
              <div className="absolute -top-5 left-6 sm:left-8 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black shadow-lg">
                <FaQuoteLeft size={12} />
              </div>

              <div className="w-full flex flex-col gap-3 sm:gap-5">
                <div className="flex text-yellow-500 gap-1 text-sm">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-sm leading-relaxed text-neutral-300 italic font-light">
                  "{item.reviewText}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-6 sm:mt-8">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-11 h-11 rounded-full object-cover border border-neutral-800"
                />
                <div className="flex flex-col">
                  <h4 className="text-white text-sm font-semibold tracking-wide">
                    {item.name}
                  </h4>
                  <span className="text-xs text-neutral-500">
                    {item.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;