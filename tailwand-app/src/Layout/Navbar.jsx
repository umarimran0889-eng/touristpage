import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { Globe, Menu, X } from "lucide-react";

import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="w-full relative z-50 flex justify-center pt-8 px-4 sm:px-8 bg-gray-950">
      <nav className="w-full max-w-8xl bg-gray-950 border border-gray-800 rounded-full px-6 sm:px-8 py-4 flex items-center justify-between">
    
        <div className="flex items-center"  onClick={closeMenu}>
            <img
              src={Logo}
              alt="Logo"
              className="h-8 w-auto" 
            />
        </div>

        <div className="hidden md:flex items-center gap-10 text-gray-300 text-sm">
          <Link to="/fleet" className="hover:text-white transition duration-200">
            Fleet
          </Link>
          <Link to="/services" className="hover:text-white transition duration-200">
            Services
          </Link>
          <Link to="/about" className="hover:text-white transition duration-200">
            About
          </Link>
          <Link to="/faq" className="hover:text-white transition duration-200">
            FAQ
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer">
            <Globe size={16} />
            <span>EN</span>
          </div>

          <Link 
            to="/book" 
            className="px-6 py-2 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300 text-sm font-medium"
          >
            Book Now
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={toggleMenu} 
            className="text-gray-300 hover:text-white transition focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      <div 
        className={`absolute top-full left-4 right-4 mt-2 bg-gray-950 border border-gray-800 rounded-3xl p-6 flex flex-col gap-6 shadow-xl transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4 text-gray-300 text-base font-medium">
          <Link to="/fleet" onClick={closeMenu} className="hover:text-white py-2 border-b border-gray-900 transition">
            Fleet
          </Link>
          <Link to="/services" onClick={closeMenu} className="hover:text-white py-2 border-b border-gray-900 transition">
            Services
          </Link>
          <Link to="/about" onClick={closeMenu} className="hover:text-white py-2 border-b border-gray-900 transition">
            About
          </Link>
          <Link to="/faq" onClick={closeMenu} className="hover:text-white py-2 transition">
            FAQ
          </Link>
        </div>

        <hr className="border-gray-800" />

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-2 text-gray-300 text-sm py-2 cursor-pointer">
            <Globe size={16} />
            <span>EN</span>
          </div>

          <Link 
            to="/book" 
            onClick={closeMenu}
            className="w-full text-center px-6 py-3 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300 text-sm font-medium"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;