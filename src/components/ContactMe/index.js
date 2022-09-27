import React from "react";
import "../../App.css";

function ContactMe() {
  return (
    <section className="contact-me">
      <div className="contact-container">
        <div>
          <h2> Contact Me</h2>
        </div>
        <div>
          <p>You can reach me via email.</p>
          <address>
            <a href="mailto:robertpliszka87@gmail.com">Email Me</a>
          </address>
        </div>
        <div>
          <address>
            <a
              href="https://docs.google.com/document/d/1iGiltMDAncVqMOmPq5rBo_sApmEkA4nPuT6eUWv7Xok/edit?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </address>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
