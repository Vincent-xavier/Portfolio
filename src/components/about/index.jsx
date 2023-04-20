import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h2 className="page-header">
          About <span>Me</span>
        </h2>
        <div className="about-img">
          <img src="assets/about-img.jpg" alt="author" />
          <span className="circle-spin"></span>
        </div>
        <div className="about-content">
          <h3>Fullstack Developer!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam enim
            in blanditiis temporibus tempore id repellendus ullam quaerat, odio
            repellat eos, reprehenderit libero maiores dolor, ea ducimus
            provident deleniti quod quas commodi? Ipsa hic quasi repellendus
            ipsum aliquid voluptates exercitationem rem temporibus alias. Maxime
            deleniti aliquid dolor nihil eaque. Voluptatem.
          </p>
          <div className="btn-box btns">
            <Link className="links">Read More..</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
