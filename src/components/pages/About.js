import React from "react";
import "../../App.css";
import "../css/Hero.css";
import "../css/About.css";

function About() {
  return (
    <div className="hero-container">
      <div className="about-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1>ABOUT ME</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p>
                My name is Matthew Ondrovic and I’m an aspiring web developer. A
                background in IT Support has given me a skill set that allows me
                to learn different ways to approach and solve problems. Being on
                the front end of support has also allowed me to learn consumer
                needs through feedback when it comes to application use.
              </p>
              <p>
                I am passionate about solving problems and enjoy the challenge
                of learning new technologies. In the development field, it’s a
                good idea to keep the mentality of a “permanent student” because
                the field is always growing. This aligns perfectly with my
                future goals because I don’t think you can learn everything
                there is web development has to offer.
              </p>
              <p>
                Whether I end up working alone or in a team, I’m eagerly keeping
                my eyes on the horizon with my newly acquired skills and
                actively seeking to transition my career to a full-time web
                developer. You can reach out to me directly via{" "}
                <a href="mailto:mondrovic1@gmail.com">mondrovic1@gmail.com</a>{" "}
                or by filling out the contact form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
