import React from "react";
import { profileData } from "../assets/asstes";
import { FaCode } from "react-icons/fa";
import profile from "../assets/Image/profile.avif";
import { FaArrowRight } from "react-icons/fa6";

function About() {
  return (
    <div id="#About" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-teal-800">About</span>
              <span>Me</span>
            </h2>
            <p className="text-md mb-2 leading-8 font-space">
              I'm a frontend developer with a passion for creating immersive
              digital experiences. With over 5 years in the industry, I've
              worked with startups and Fortune 500 companies to bring their
              visions to life.
            </p>
            <p className="text-md mb-2 leading-8">
              My approach combines technical expertise with creative design
              thinking to build applications that are not only functional but
              also visually stunning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
              {profileData.map((data, index) => {
                const Icon = data.icon;

                return (
                  <div
                    key={index}
                    className="
          group
          w-full sm:w-50 p-6
          border border-zinc-300
          rounded-2xl
          bg-white
          cursor-pointer
          transition-all duration-300
          hover:-translate-y-2
          hover:shadow-xl
          hover:border-teal-500
        "
                  >
                    <Icon
                      className="
            text-3xl mb-4 text-zinc-700
            transition-all duration-300
            group-hover:text-teal-600
            group-hover:scale-110
          "
                    />

                    <h1
                      className="
            text-xl font-bold mb-4
            transition-colors duration-300
            group-hover:text-teal-600
          "
                    >
                      {data.title}
                    </h1>

                    <p className="font-space text-gray-600">
                      {data.technologies.join(", ")}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center">
              <button
                className="hidden md:flex items-center gap-2 border 
              bg-gray-900 text-white
              border-gray-400 px-6 py-3 rounded-full hover: hover:translate-y-1  
                  transition duration-300 cursor-pointer"
              >
                Resume Download
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div
            className="order-1 lg:order-2 flex justify-center
          "
          >
            <div className="relative w-full mx-w-md">
              <div className="flex justify-center lg:justify-end">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-cover rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
