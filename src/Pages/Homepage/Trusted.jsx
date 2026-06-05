import React from 'react'
import MainTitle from '../../Components/MainTitle'
import { FaShieldHalved, FaUserTie, FaCrown, FaClock, FaLocationDot, FaCarSide, FaStar } from 'react-icons/fa6'

const Trusted = () => {
  const features = [
    { id: 1, text: "Licensed & Insured Fleet", icon: <FaShieldHalved className="text-yellow-500" size={16} /> },
    { id: 2, text: "Professional Chauffeurs", icon: <FaUserTie className="text-yellow-500" size={16} /> },
    { id: 3, text: "Luxury VIP Experience", icon: <FaCrown className="text-yellow-500" size={16} /> },
    { id: 4, text: "24/7 Customer Support", icon: <FaClock className="text-yellow-500" size={16} /> },
    { id: 5, text: "Airport Transfer Specialists", icon: <FaLocationDot className="text-yellow-500" size={16} /> },
    { id: 6, text: "Corporate Travel Certified", icon: <FaCarSide className="text-yellow-500" size={16} /> },
  ];

  const stats = [
    { id: 1, value: "4.9", label: "RATING", mobileLabel: "RATING", hasStar: true },
    { id: 2, value: "10k+", label: "SUCCESSFUL TRIPS", mobileLabel: "TRIPS", hasStar: false },
    { id: 3, value: "21+", label: "YEARS EXPERIENCE", mobileLabel: "YEARS", hasStar: false },
  ];

  return (
    <section className="w-full flex flex-col items-center bg-gray-950 py-12 sm:py-24 px-4 sm:px-8">
      <div className="w-full max-w-8xl sm:px-4 flex flex-col items-center">
        
        <MainTitle 
          direction="content_center"
          title="Trusted Across Toronto & GTA."
        />

        <div className="w-30 h-1.5 bg-yellow-500 rounded-full mt-2 mb-6 sm:mb-8"></div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl">
          {features.map((feat) => (
            <div 
              key={feat.id} 
              className="flex items-center gap-4 bg-neutral-900/30 border border-neutral-900 px-4 py-4 sm:px-6 sm:py-5 rounded-2xl shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center shrink-0 border border-neutral-800/40">
                {feat.icon}
              </div>
              <span className="text-neutral-200 text-sm font-semibold tracking-wide">
                {feat.text}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full max-w-5xl bg-neutral-900/20 border border-neutral-900/60 rounded-2xl sm:rounded-[2.5rem] mt-10 sm:mt-16 p-4 sm:p-12 grid grid-cols-3 gap-2 sm:gap-4 relative overflow-hidden">
          {stats.map((stat, idx) => (
            <div 
              key={stat.id} 
              className={`flex flex-col items-center justify-center text-center relative ${
                idx !== 2 ? 'after:content-[""] after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-[1px] after:bg-neutral-800/50' : ''
              }`}
            >
              <div className="flex items-center justify-center gap-1 sm:gap-2 text-white text-xl sm:text-4xl md:text-5xl font-black tracking-tight mb-1 sm:mb-2">
                <span>{stat.value}</span>
                {stat.hasStar && <FaStar className="text-yellow-500 text-sm sm:text-3xl shrink-0" />}
              </div>
              
              <span className="hidden sm:inline text-[10px] text-neutral-500 font-bold tracking-widest uppercase">
                {stat.label}
              </span>
              <span className="inline sm:hidden text-[9px] text-neutral-500 font-bold tracking-wider uppercase">
                {stat.mobileLabel}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Trusted