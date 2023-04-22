import React, { useEffect } from "react";
import "./header.css";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 100);
      }

      const navlinks = document.querySelectorAll("header nav a");
      navlinks.forEach((navlink) => {
        const section = document.querySelector(navlink.hash);
        if (!section) return;
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        const inViewport = window.scrollY >= top && window.scrollY < bottom;
        navlink.classList.toggle("active", inViewport);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleIcon = () => {
    var navbar = document.querySelector(".navbar");
    var menu = document.querySelector("#hamburger");
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };

  const handleNavClick = () => {
    var navbar = document.querySelector(".navbar");
    var menu = document.querySelector("#hamburger");
    navbar.classList.remove("active");
    menu.classList.remove("bx-x");
  };

  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          Vince.
        </a>
        <div
          className="bx bx-menu"
          id="hamburger"
          onClick={(e) => handleIcon()}
        ></div>
        <nav className="navbar" onClick={() => handleNavClick()}>
          <a href="#home" className="active" onClick={() => handleNavClick()}>
            Home
          </a>
          <a href="#about" onClick={() => handleNavClick()}>
            About
          </a>
          <a href="#education" onClick={() => handleNavClick()}>
            Education
          </a>
          <a href="#skills" onClick={() => handleNavClick()}>
            Skills
          </a>
          <a href="#contact" onClick={() => handleNavClick()}>
            Contact
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
