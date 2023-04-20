import React from "react";
import Header from "../base/header/Header";
import Profile from "./home/content/Profile";
import About from "./about";

const Landing = () => {
  return (
    <>
      <Header />
      <Profile />
      <About />
    </>
  );
};

export default Landing;
