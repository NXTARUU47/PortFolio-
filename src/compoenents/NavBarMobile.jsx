import React, { useState } from "react";
import { navMenu } from "../assets/asstes";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";

function NavBarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleResumeClick = () => {
    window.open("/Aryan_Chauhan_Resume.pdf", "_blank");
    closeMenu();
  };

  return (
    <>
      {/* Mobile Navbar Hamburger Trigger */}
      <div className="flex justify-between items-center">
        <button
          onClick={toggleMenu}
          className="text-3xl text-zinc-800 cursor-pointer"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Overlay Panel */}
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header Layout */}
        <div className="flex justify-between items-center p-6 border-b">
          <div className="text-2xl font-bold">
            <span>THE-</span>
            <span className="text-teal-600 font-orbitron">ARYAN</span>
          </div>

          {/* FIXED: Removed the hardcoded 'pl-90' so the close button sits cleanly on the right side of all mobile screens */}
          <button
            onClick={toggleMenu}
            className="text-3xl text-zinc-800 cursor-pointer"
          >
            <HiX />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center mt-12 gap-8">
          {navMenu.map((item, index) => (
            <a
              key={index}
              href={`#${item}`}
              onClick={closeMenu}
              className="text-xl text-zinc-700 hover:text-teal-600 transition duration-300 cursor-pointer"
            >
              {item}
            </a>
          ))}

          {/* Resume Button */}
          {/* FIXED: Attached the functional route handler so it actually works on touch devices */}
          <button
            onClick={handleResumeClick}
            className="mt-2 flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full cursor-pointer hover:bg-zinc-800 transition"
          >
            Resume
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBarMobile;