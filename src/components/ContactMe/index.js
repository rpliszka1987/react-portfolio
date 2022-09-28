import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.css';

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
            <button className="btn btn-primary">
            <a href="mailto:robertpliszka87@gmail.com" className="button-text">Email Me</a>
            </button>
            
          </address>
        </div>
        <div>
          <address>
            <button className="btn btn-primary">
            <a
              href="https://docs.google.com/document/d/1iGiltMDAncVqMOmPq5rBo_sApmEkA4nPuT6eUWv7Xok/edit?usp=sharing"
              target="_blank" className="button-text"
            >
              Resume
            </a>
            </button>
            
          </address>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
