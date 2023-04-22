import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h3 className="page-header">
        Contact <span>US</span>
      </h3>
      <form action="#">
        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              id="fullName"
            />
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="Email Address"
              name="emailAdress"
              id="emailAdress"
            />
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              placeholder="Mobile Number"
              name="mobileNumber"
              id="mobileNumber"
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Email Subject"
              name="emailSubject"
              id="emailSubject"
            />
          </div>
        </div>

        <div className="text-area-field">
          <textarea
            name="message"
            placeholder="Enter your Message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="btn-box btns">
          <button className="links" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
