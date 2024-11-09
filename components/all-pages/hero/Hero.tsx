import React from 'react'
import Wrappers from '@/components/special/wrappers/Wrappers'; 
import Image from "next/image";
import Poster from "@/components/special/assets/images/hero-poster.png"
import './hero.css';  

const Hero = () => {
  return (
    <section className="hero-section">
      <Wrappers>
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-heading">Hi, I am Rabeet Ahmer</h1>
            <h2 className="hero-subheading">Upcoming Web Developer and AI Developer.</h2>
          </div>
          <div className="hero-image-container">
            <Image 
              src={Poster} 
              alt="poster" 
              height={300} 
              className="hero-image"
            />
          </div>
        </div>
      </Wrappers>
    </section>
  )
}

export default Hero