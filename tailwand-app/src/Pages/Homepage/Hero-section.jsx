import React from 'react';
import { FaStar, FaArrowRight, FaMapMarkerAlt, FaPaperPlane, FaCalendarAlt, FaClock } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="w-full bg-[#030712] min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-8 md:py-20 lg:py-28 overflow-hidden">
      \
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          <div className="flex items-center gap-2 bg-neutral-900/60 border border-neutral-800 px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-[10px] sm:text-xs text-neutral-300 font-bold tracking-widest uppercase font-mono">
              Premium Chauffeur Service
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15] mb-6">
            The Ultimate <br />
            <span className="text-yellow-500 italic font-serif font-normal tracking-wide">Luxury</span> Experience
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-neutral-400 font-normal leading-relaxed max-w-lg mb-8">
            Arrive in absolute prestige. Our elite fleet of chauffeured vehicles ensures your journey is as remarkable as your destination.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3 overflow-hidden">
              <img 
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#030712] object-cover" 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" 
                alt="VIP Client Portrait" 
              />
              <img 
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#030712] object-cover" 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" 
                alt="VIP Client Portrait" 
              />
              <img 
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#030712] object-cover" 
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=100" 
                alt="VIP Client Portrait" 
              />
            </div>
            
            <div className="flex flex-col">
              <div className="flex text-yellow-500 gap-0.5 text-xs">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="text-[11px] text-neutral-400 font-bold tracking-wide mt-0.5">
                Trusted by 5,000+ VIPs
              </span>
            </div>
          </div>

        </div>

        <div className="lg:col-span-5 w-full max-w-md lg:max-w-none mx-auto">
          <div className="w-full bg-[#0b0f19]/40 border border-neutral-900/80 backdrop-blur-md rounded-[2rem] p-6 sm:p-8 shadow-2xl shadow-black/50">
            
            <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-6">
              Reserve Your Ride
            </h3>

            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              
              <div className="relative flex items-center">
                <FaMapMarkerAlt className="absolute left-4 text-neutral-600 text-sm" />
                <input 
                  type="text" 
                  placeholder="Pickup Location"
                  className="w-full bg-black/40 border border-neutral-900 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500/50 transition duration-200"
                />
              </div>

              <div className="relative flex items-center">
                <FaPaperPlane className="absolute left-4 text-neutral-600 text-xs" />
                <input 
                  type="text" 
                  placeholder="Dropoff Location"
                  className="w-full bg-black/40 border border-neutral-900 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500/50 transition duration-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative flex items-center">
                  <FaCalendarAlt className="absolute left-4 text-neutral-600 text-xs" />
                  <input 
                    type="text" 
                    placeholder="Date"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    className="w-full bg-black/40 border border-neutral-900 rounded-xl py-3.5 pl-11 pr-3 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500/50 transition duration-200"
                  />
                </div>
                <div className="relative flex items-center">
                  <FaClock className="absolute left-4 text-neutral-600 text-xs" />
                  <input 
                    type="text" 
                    placeholder="Time"
                    onFocus={(e) => (e.target.type = "time")}
                    onBlur={(e) => (e.target.type = "text")}
                    className="w-full bg-black/40 border border-neutral-900 rounded-xl py-3.5 pl-11 pr-3 text-xs sm:text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-500/50 transition duration-200"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xs sm:text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition duration-300 active:scale-[0.99] mt-2 shadow-xl shadow-yellow-500/5"
              >
                <span>GET QUOTE</span>
                <FaArrowRight size={12} />
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;