import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import SocialMedia from "../socialMedia/SocialMedia";

const Profile = () => {
  return (
    <>
      <div className="home">
        <div className="home-content">
          <h1 className="name">Hi, I'm Vincent Xavier</h1>
          <h3 className="profession">FullStack Developer</h3>
          <p className="discription">
            I am a self-motivated and adaptable professional who can handle both
            <span className="highlight">
              {" "}
              front-end and back-end development
            </span>{" "}
            tasks with proficiency, and deliver high-quality web applications
            that meet the needs of end users and businesses alike.
          </p>
          <div className="btn-box">
            <Link to={"#"} className="links">
              Hire Me
            </Link>
            <Link to={"#"} className="links">
              Let's Talk
            </Link>
          </div>
        </div>
        <SocialMedia />
      </div>
    </>
  );
};

export default Profile;
