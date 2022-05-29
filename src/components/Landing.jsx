import React from "react";
import Dsire from "../assets/dsire.bg.png";

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>DSIRE MARKETING</h1>
            <a href="#contact">
              <button className="btn">Take Action</button>
            </a>
          </div>
        </div>
        <a href="#about" class="scroll">
            <div class="scroll__icon click"></div>
        </a>
      </header>
    </section>
  );
}

export default Landing;
