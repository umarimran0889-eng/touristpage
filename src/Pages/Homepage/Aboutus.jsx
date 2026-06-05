import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

import Image1 from '../../assets/About Us Image Start → Figure → about-image-2-prime.jpg.png'
import Image2 from '../../assets/About Us Image Box 1 Start → About Us Image Start → Figure.png'
import Image3 from '../../assets/About Us Counter Box Start.png'

const AboutUs = () => {
  const highlights = [
    "Modern luxury fleet with first-class premium interiors",
    "Professional VIP drivers ensuring safe and smooth travel",
    "24/7 luxury chauffeur service with premium executive comfort",
  ];

  return (
    <section className="w-full bg-gray-950 py-12 sm:py-24 px-4 sm:px-8 flex justify-center text-white overflow-hidden">
      <div className="w-full max-w-8xl px-2 sm:px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-6 relative w-full flex items-center justify-center min-h-[300px] sm:min-h-[600px] max-w-xl mx-auto lg:max-w-none">
          
          <div className="absolute left-0 bottom-16 w-[42%] aspect-[3/4] overflow-hidden z-10 hidden sm:block">
            <img 
              src={Image2}
              alt="Luxury white SUV" 
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>

          <div className="relative w-full sm:w-[65%] sm:left-12 aspect-[4/5] overflow-hidden z-20">
            <img 
              src={Image1} 
              alt="Luxury black VIP SUV" 
              className="w-full h-full object-cover rounded-[1.5rem] sm:rounded-[2rem]"
            />
          </div>

          <div className="absolute -bottom-2 sm:bottom-0 left-2 sm:left-[20%] w-[55%] sm:w-[48%] z-30 transition-transform duration-300 hover:scale-[1.02]">
            <img 
              src={Image3} 
              alt="25+ Years Experience Counter Stats" 
              className="w-full h-auto object-contain drop-shadow-2xl" 
            />
          </div>

        </div>

        <div className="lg:col-span-6 flex flex-col text-left max-w-2xl lg:pl-8 mt-2 lg:mt-0">
          
          <span className="text-xs text-yellow-500 font-bold tracking-[0.3em] uppercase mb-2 sm:mb-4">
            About Us
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-white tracking-tight leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
            Redefining <br /> VIP Transportation
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed tracking-wide mb-6 sm:mb-8">
            For over a decade, we've been the preferred choice for discerning clients 
            seeking unparalleled luxury transportation. Our commitment to excellence, 
            attention to detail, and professional service has made us the leading 
            chauffeur service in the region.
          </p>

          <ul className="flex flex-col gap-3 sm:gap-3.5 mb-8 sm:mb-10 pl-0.5">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-neutral-300 text-sm sm:text-base">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-400 mt-[7px] sm:mt-[9px] shrink-0" />
                <span className="font-medium tracking-wide">{item}</span>
              </li>
            ))}
          </ul>

          <button className="group self-start flex items-center gap-3 bg-yellow-500 text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:bg-yellow-400 active:scale-95 shadow-lg shadow-yellow-500/10">
            <span>Explore More</span>
            <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" size={14} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;