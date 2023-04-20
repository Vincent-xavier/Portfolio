import React from "react";
import "./social-media.css";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <>
      <div className="social-media">
        <Link
          to={"https://www.instagram.com/whitey_boy_here/"}
          className="social-link"
        >
          <i className="bx bxl-instagram"></i>
        </Link>
        <Link to={"https://github.com/Vincent-xavier"} className="social-link">
          <i className="bx bxl-github"></i>
        </Link>
        <Link
          to={"https://www.linkedin.com/in/vincent-xavier-19661a250/"}
          className="social-link"
        >
          <i className="bx bxl-linkedin"></i>
        </Link>
      </div>
      <span className="home-imgHover"></span>
    </>
  );
};

export default SocialMedia;
