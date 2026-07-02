import React from "react";
import { skillsData } from "../assets/asstes";

const Skills = () => {
  return (
    <div id="skils" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-teal-600">Technical</span>
            <span> Skils</span>
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Mastering the tools that power modern web experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 cursor-pointer">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-full
         bg-gray-100 flex items-center justify-center mb-4 mx-auto"
                >
                  <Icon className="text-3xl" />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center cursor-pointer">
                  {skill.title}
                </h3>

                {/* Technologies */}
                <div className="flex flex-wrap justify-center">
                  {skill.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm text-gray-700 hover:text-teal-600 transition-colors duration-300"
                    >
                      {tech}
                      {i !== skill.technologies.length - 1 && (
                        <span className="mx-2 text-gray-400">|</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;