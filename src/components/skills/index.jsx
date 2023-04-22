import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="page-header">
        My <span>Skills</span>
      </h2>
      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">Coding Skills</h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>
                  HTML & CSS <span>90%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress">
                <h3>
                  JavaScript <span>75%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress">
                <h3>
                  C - Sharp <span>80%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress">
                <h3>
                  React Js <span>90%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="title">Professional Skills</h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>
                  Web Development <span>70%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress">
                <h3>
                  Graphic Design <span>55%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
              <div className="progress">
                <h3>
                  Rest Api <span>60%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress">
                <h3>
                  Redux State Management <span>75%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
