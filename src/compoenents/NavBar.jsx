import React from "react";
import { navMenu } from "../assets/asstes";
import { FaArrowRight } from "react-icons/fa6";
import NavBarMobile from "./NavBarMobile";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="/">
              <span>THE-</span>
              <span className="text-teal-600 font-orbitron">ARYAN</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 border border-gray-300 rounded-full px-8 py-3">
            {navMenu.map((item, index) => (
              <a key={index} href={`#${item}`}>
                {item}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <button
            className="hidden md:flex items-center gap-2 border border-gray-400 px-6 py-3 rounded-full hover:text-slate-800 hover:translate-y-1  
                transition duration-300 cursor-pointer"
          >
            Resume
            <FaArrowRight />
          </button>

          {/* Mobile Menu Icon */}
          {/* <button className="md:hidden text-3xl">
            <HiOutlineMenuAlt3 onClick={}/>
          </button> */}
          <div className="md:hidden">
            <NavBarMobile />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
