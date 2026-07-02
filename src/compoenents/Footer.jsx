import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className='py-12 border-t border-zinc-200'>
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                    <span className='uppercase text-2xl font-bold'>The-Aryan</span>
                </div>
                <div className="flex space-x-6 mb-6 md:mb-0">
                    <a href="https://github.com/aryan21-21/" className='text-teal-800 hover:text-teal-900 transition
                    '>
                         <FaGithub className='text-2xl' />
                    </a>
                    <a href="https://www.linkedin.com/in/aryan-chauhan-53b01b345" className='text-teal-800 hover:text-teal-900 transition
                    '>
                         <FaLinkedin className='text-2xl' />
                    </a>
                </div>
                <div className="text-zinc-900 text-sm">
                    @2026 The-Aryan Devloper,All right resetved
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
