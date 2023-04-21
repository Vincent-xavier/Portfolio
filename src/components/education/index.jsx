import React from "react";
import "./education.css";

const Education = () => {
  return (
    <>
      <section className="education" id="education">
        <h2 className="page-header">
          My <span>Journey</span>
        </h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Education</h3>

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> 2017 - 2018
                  </div>
                  <h3>
                    Master Degree <span>- University</span>
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur nihil qui odio harum reiciendis odit nulla ipsum
                    fugit voluptate official.
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> 2017 - 2018
                  </div>
                  <h3>
                    Master Degree <span>- University</span>
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur nihil qui odio harum reiciendis odit nulla ipsum
                    fugit voluptate official.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="education-column">
            <h3 className="title">Expirence</h3>

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxl-react"></i> 2017 - 2018
                  </div>
                  <h3>
                    Frond end <span>- React Js</span>
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur nihil qui odio harum reiciendis odit nulla ipsum
                    fugit voluptate official.
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxl-visual-studio"></i> 2017 - 2018
                  </div>
                  <h3>
                    Back end <span>- Dotnet Core</span>
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur nihil qui odio harum reiciendis odit nulla ipsum
                    fugit voluptate official.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
