import React from "react";
import { projectData } from "../assets/asstes";
import { FaArrowRight } from "react-icons/fa6";
import "./work.css";
function Work() {
  return (
    <div id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-700 mb-6 ">
            Featured
            <span className="text-teal-600"> Project</span>
            <p className="text-xl max-w-3xl mx-auto font-space px-4 py-4 font-normal">
              Cutting-edge weeb application build with moder technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {/* {
                projectData.map((project, index) => (
                    <div key={index}>
                    <img src={project.image} alt={project.title} />
                    <p className='text-3xl'>{project.title}</p>
                    <p className='tex-xl'>{project.description}</p>
                    
                    </div>
                ))
                } */}
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
                  <div className="p-6">
                    <h3
                      className="text-xl
                                    font-bold mb-2 text-teal-600"
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-slate-900 text-sm font-space
                                    "
                    >
                      {project.description}
                    </p>
                    <div>
                      {project.tech.map((language, index) => (
                        <span
                          key={index}
                          className="px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full gap-100 font-space"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                    <div>
                    <a href="https://github.com/aryan21-21/">
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
          </h2>
        </div>
      </div>
      
      <button
        className="hidden md:flex items-center gap-2 border border-gray-400 px-8 py-4 rounded-full hover:text-slate-800 hover:translate-y-1  
                transition duration-300 cursor-pointer  mx-auto"
      >
        Show More
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Work;
