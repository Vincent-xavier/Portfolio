import React from "react";
import Header from "../base/header/Header";
import Profile from "./home/content/Profile";
import About from "./about";
import Education from "./education";

const Landing = () => {
  return (
    <>
      {/* navbar */}
      <Header />

      {/* profile-content */}
      <Profile />

      {/* about-content */}
      <About />

      {/* education - content */}
      <Education />
    </>
  );
};

export default Landing;
