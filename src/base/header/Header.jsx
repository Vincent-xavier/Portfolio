import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header">
        <Link to={"#"} className="logo">
          Vince.
        </Link>
        <nav className="navbar">
          <Link to={"#"} className="active">
            Home
          </Link>
          <Link to={"#"}>About</Link>
          <Link to={"#"}>Services</Link>
          <Link to={"#"}>Portfolio</Link>
          <Link to={"#"}>Contact</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
