import React from "react";
import Wrappers from "@/components/special/wrappers/Wrappers";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import "./contacts.css"

const Contacts = () => {
    return (
      <section className="contact-section" id="section4">
        <Wrappers>
          <div className="container-padding">
            <h1 className="contact-title">
              Contact Me
            </h1>
            <h2 className="contact-subtitle">You can contact me for any queries on these links below</h2>
            <ul className="social-links-list">
              <li className="social-link-item">
                <Link
                  href={"https://www.facebook.com/profile.php?id=61568145191140"}
                  target="_blank"
                >
                  <FaFacebook className="social-icon" />
                </Link>
                <p className="social-link-text">Facebook</p>
              </li>
              <li className="social-link-item">
                <Link
                  href={"https://www.linkedin.com/in/rabeet-ahmer-b4204a332/"}
                  target="_blank"
                >
                  <FaLinkedinIn className="social-icon" />
                </Link>
                <p className="social-link-text">Linkedin</p>
              </li>
              <li className="social-link-item">
                <Link href={"https://github.com/Rabeet-Ahmer"} target="_blank">
                  <FaGithub className="social-icon" />
                </Link>
                <p className="social-link-text">Git Hub</p>
              </li>
            </ul>
          </div>
        </Wrappers>
      </section>
    );
  };

  export default Contacts