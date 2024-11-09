import React from "react";
import Poster2 from "@/components/special/assets/images/web-application.webp";
import Wrappers from "@/components/special/wrappers/Wrappers";
import Image from "next/image";
import './about.css';  

const About = () => {
  return (
    <section className="about-section" id="section2">
      <Wrappers>
        <div className="about-content">
          <div className="about-text-container">
            <h1 className="about-heading">About Me</h1>
            <h2 className="about-description">
              I am a code lover passionate student learning 
              <b className="highlight-text"><i>AI Development</i></b> 
              and seeking opportunities to develop myself as a source of inspiration for others. 
              I have gained expertise in 
              <b className="highlight-text"><i>Typescript</i></b> 
              and now learning 
              <b className="highlight-text"><i>Next JS</i></b>.
            </h2>
          </div>
          <div className="image-container">
            <Image
              src={Poster2}
              alt="poster"
              height={300}
              className="about-image"
            />
          </div>
        </div>
      </Wrappers>
    </section>
  );
};

export default About;