import React from "react";
import { FaArrowRight } from "react-icons/fa6";
function Contact() {
  return (
    <div id="Contact" className="py-20">
      <div
        className="
        max-w-7xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-teal-800">Touch</span>
          </h1>
          <p className="mb-2">
            Have a project in mid or want to discuss potential
            opportunities{" "}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <form action="" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  className="px-4 py-3 w-full border border-zinc-500 rounded outline-none"
                  placeholder="Enter Name "
                />
              </div>
              <div>
                <input
                  type="email"
                  className="px-4 py-3 w-full border border-zinc-500 rounded outline-none"
                  placeholder="Enter Email "
                />
              </div>
            </div>
            <div className="space-y-5">
              {/* Subject */}
              <div>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="w-full px-5 py-3 border border-zinc-500 rounded outline-none
                 transition duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows="6"
                  placeholder="Enter Your Message"
                  className="w-full px-5 py-3 border border-zinc-500 rounded outline-none
                 resize-none
                 transition duration-300"
                ></textarea>
              </div>

              {/* Button */}
              <div className="flex justify-center sm:justify-start">
                <button
                  className="flex items-center gap-2 px-8 py-3 bg-zinc-800 text-white
                 rounded-full hover:gap-3
                 transition-all duration-300 cursor-pointer"
                >
                  Send Message
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
