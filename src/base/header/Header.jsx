import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          Vince.
        </a>
        <div className="bx bx-menu" id="hamburger"></div>
        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
