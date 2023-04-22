import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2023 by Vincent Xavier | All Rights Reserved.</p>
        </div>
        <div className="footer-icon-top">
          <a href="#home">
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
