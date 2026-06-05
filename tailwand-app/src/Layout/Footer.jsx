import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";

import Logo from "../assets/logo.png";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="w-full flex justify-center px-4 sm:px-8 bg-gray-950 text-gray-400 pt-16 pb-8 border-t border-gray-800">
      
      <div className="w-full max-w-8xl px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          <div className="flex flex-col gap-5">
            <div className="w-40">
              <img 
                src={Logo} 
                alt="Logo" 
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Setting the standard for luxury transportation with unparalleled service, discretion, and a world-class fleet.
            </p>
            
            <div className="flex items-center gap-3 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 text-white transition">
                <FaInstagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 text-white transition">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 text-white transition">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link to="/fleet" className="hover:text-white transition">Our Fleet</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/corporate" className="hover:text-white transition">Corporate Accounts</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-center gap-3">
                <FiPhone size={16} className="text-yellow-500 shrink-0" />
                <a href="tel:+18005897433" className="hover:text-white transition">+1 (800) LUX-RIDE</a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail size={16} className="text-yellow-500 shrink-0" />
                <a href="mailto:reservations@lumiere.com" className="hover:text-white transition">reservations@lumiere.com</a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                <span className="text-gray-400">100 Luxury Ave, NY 10001</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase">
              Newsletter
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              Subscribe for exclusive offers and updates.
            </p>
            <form onSubmit={handleSubmit} className="flex items-center mt-2 w-full max-w-sm">
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-l-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-700 placeholder-neutral-500"
              />
              <button 
                type="submit" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black p-3.5 rounded-r-lg transition duration-200 flex items-center justify-center shrink-0"
                aria-label="Subscribe"
              >
                <FiSend size={16} />
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
          
          <div>
            &copy; {new Date().getFullYear()} Lumière Luxury Transportation. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span className="text-neutral-400 font-medium">Designed and hosted by</span>
            <div className="flex items-center gap-1 text-white font-bold text-sm tracking-tight">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                <path d="M4 14h6v6H4v-6zm10-8h6v6h-6V6zm0 10h6v4h-6v-4zM4 4h6v6H4V4z" fill="currentColor"/>
              </svg>
              <span>Codesinc.</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-neutral-300 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-neutral-300 transition">Terms of Service</Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;