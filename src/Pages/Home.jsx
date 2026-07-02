import React from 'react'
import NavBar from "../compoenents/NavBar"
import Hero from "../compoenents/Hero"
import Work from "../compoenents/Work"
import Skills from '../compoenents/Skills'
import About from '../compoenents/About'
import Contact from '../compoenents/Contact'
import Footer from '../compoenents/Footer'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Work/>
      <Skills/>
      <a href="#About"><About/></a>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
