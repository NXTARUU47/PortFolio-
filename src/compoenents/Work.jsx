import React from "react";
import { projectData } from "../assets/asstes";
import { FaArrowRight } from "react-icons/fa6";
import "./work.css";

function Work() {
  return (
    <div id="Work" className="py-20">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="mb-16 text-center">
          {/* FIXED: Closed the h2 tag properly here so it doesn't break mobile typography */}
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-700 mb-6">
            Featured <span className="text-teal-600">Project</span>
          </h2>
          
          <p className="text-xl max-w-3xl mx-auto font-space px-4 py-4 font-normal">
            Cutting-edge web application build with modern technologies.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group rounded overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-200 hover:-translate-y-1 duration-300"
            >
              <div className="relative flex items-center justify-center">
                <img
                  className="w-full h-60 object-cover group-hover:opacity-100 transition duration-300"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-2 text-teal-600">
                  {project.title}
                </h3>
                
                <p className="text-slate-900 text-sm font-space mb-4">
                  {project.description}
                </p>
                
                {/* Technology Badges Container */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((language, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-xs font-semibold rounded-full font-space inline-block"
                    >
                      {language}
                    </span>
                  ))}
                </div>

                <div>
                  <a href="/">
                    <span className="inline-flex items-center gap-2 text-teal-600 text-sm font-space font-medium cursor-pointer hover:gap-3 transition-all duration-300">
                      View Project
                      <FaArrowRight />
                    </span>
                  </a>  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* FIXED: Removed 'hidden md:' so the Show More button shows up perfectly on mobile */}
      {/* <a href="/">
          <button
        className="flex items-center gap-2 border border-gray-400 px-8 py-4 rounded-full hover:text-slate-800 hover:translate-y-1  
                transition duration-300 cursor-pointer mx-auto text-sm sm:text-base justify-center"
      >
        Show More
        <FaArrowRight />
      </button>
      </a> */}
    </div>
  );
}

export default Work;