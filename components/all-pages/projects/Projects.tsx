import React from "react";
import Wrappers from "@/components/special/wrappers/Wrappers";
import Image from "next/image";
import Poster1 from "@/components/special/assets/images/birthday-app.png";
import Poster2 from "@/components/special/assets/images/weather-app.png";
import Poster3 from "@/components/special/assets/images/countdown-app.png";
import Link from "next/link";
import './projects.css';  

const Projects = () => {
  return (
    <section className="projects-section" id="section3">
      <Wrappers>
        <div className="content-container">
          <div className="text-container">
            <h1 className="main-heading">My Showcase</h1>
            <h2 className="sub-heading">
              I created these projects with hard work and dedication.
            </h2>
          </div>
          <div className="projects-container">
            <Link
              href={"https://birthday-wish-app-beta.vercel.app/"}
              target="_blank"
            >
              <Image
                src={Poster1}
                alt="Birthday wish app"
                width={400}
                className="project-image"
              />
              <p className="project-title">Birthday Wish App</p>
            </Link>
            <Link
              href={
                "https://vercel.com/api/toolbar/link/weather-widget-app-4f5i.vercel.app/"
              }
              target="_blank"
            >
              <Image
                src={Poster2}
                alt="Weather widget app"
                width={400}
                className="project-image"
              />
              <p className="project-title">Weather Widget App</p>
            </Link>
            <Link
              href={
                "https://vercel.com/api/toolbar/link/countdown-timer-tezz.vercel.app/"
              }
              target="_blank"
            >
              <Image
                src={Poster3}
                alt="Countdown timer app"
                width={400}
                className="project-image"
              />
              <p className="project-title">Countdown Timer App</p>
            </Link>
          </div>
        </div>
      </Wrappers>
    </section>
  );
};

export default Projects;