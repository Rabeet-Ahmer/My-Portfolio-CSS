import Link from "next/link";
import React from "react";
import Wrappers from "@/components/special/wrappers/Wrappers";
import './header.css';

const Header = () => {
  return (
    <div className="header-container">
      <Wrappers>
        <header className="header">
            <h1 className="portfolio-title">My Portfolio</h1>
    
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="#section2">About</Link>
            </li>
            <li className="nav-item">
              <Link href="#section3">Projects</Link>
            </li>
            <li className="nav-item">
              <Link href="#section4">Contact</Link>
            </li>
          </ul>
        </header>
      </Wrappers>
    </div>
  );
};

export default Header;