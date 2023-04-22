import React from "react";
import Header from "../base/header/Header";
import Profile from "./home/content/Profile";
import About from "./about";
import Education from "./education";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "../base/footer";

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

      {/* skills - content */}
      <Skills />

      {/* contact - content */}
      <Contact />

      {/* footer */}
      <Footer />
    </>
  );
};

export default Landing;
