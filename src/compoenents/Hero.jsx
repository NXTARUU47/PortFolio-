import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Photo from "../assets/Image/Photo.png";
import './Hero.css'
function Hero() {
  return (
    <section id="Home" className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left Side */}
          <div className="max-w-[520px]">
            <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-zinc-700">
              FullStack
              <br />
              Developer
            </h1>

            <h2 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] text-cyan-600">
              Python
            </h2>

            <p
              className="text-xl text-zinc-900   
            mt-6 max-w-lg text-base sm:text-lg text-gray-600 leading-7
            "
            >
              Creating fast, secure, and user-friendly websites.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button className="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300 cursor-pointer">
                View My Work
                <FaArrowRight />
              </button>

              <button className="flex items-center gap-2 px-8 py-4 border border-slate-400 rounded-full hover:border-slate-800 hover:bg-slate-100 transition duration-300 cursor-pointer">
                Contact Me
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 floating">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 glow">
                <img
                  src={Photo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl  overflow-hidden p-3 ">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center ">
                    <div className="text-3xl font-bold text-white ">2+</div>
                    <div className="text-sm  text-white">Month Exp </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
