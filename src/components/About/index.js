// This is the about page for the profile
import React from "react";
import portfolioImage from "../../assets/images/myImage.JPG";
import Bootstrap from "bootstrap";

function About() {
  return (
    <section className="title">
      <div className="row justify-content-center" id="aboutMe">
        <dic className="col-md-12 col-lg-6">
          <center>
            <img
              src={portfolioImage}
              id="my-image"
              alt="photograph of Robert Pliszka"
            />
          </center>
          <div className="d-flex flex-column justify-content-center">
            <center>
              <h1 id="my-name">Robert Pliszka</h1>
              <h4 id="my-career">Junior Developer</h4>
            </center>
            <p className="about-me-paragraph">
              My name is Robert Pliszka and I am a recent graduate from Columbia Engineering Boot Camp,
              where for 24 for weeks I been exposed to multiple development technologies. This course has prepared me 
              for a career in Web Development as a Full Stack Developer. Used React.js, MongoDB, GraphQL, etc 
              to build projects which can be found on my portfolio link. Before development I was an 
              Account Executive for Follett School Solutions for 12 years, but wanted to make a switch and follow my 
              passion for development. I am a hard worker that likes to achieve targets, and enjoy working
              with a team. Currently lookinh for a new place to start my Web Development journey. 

            </p>
            
          </div>
        </dic>
      </div>
    </section>
  );
}

export default About;
