import React from "react";

function About() {
  return (
    <section id="about">
      <div className="about__container">
        <div className="about__wrapper">
          <h1 className="about__title">About Us</h1>
          <p className="about__para">
            DSIRE Marketing is a Digital Marketing Agency that helps businesses
            through personalised marketing solutions tailored to your business
            needs.
          </p>
          <p className="about__para">
            We help to set you apart from your competitors with unparalleled
            growth by increasing your awareness, engagement, leads and sales
            with advanced marketing strategies.
          </p>
          <a href="#contact">
          <button className="btn">Take Action</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
