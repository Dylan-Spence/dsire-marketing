import React from "react";
import funnel from "../assets/funnel-min.png";
import content from "../assets/contentcreation-min.png";
import target from "../assets/target-min.png";

function What() {
  return (
    <section id="what">
      <div className="what__container">
        <h1>What We Do</h1>
        <div className="what__wrapper">
          <div className="what__service">
            <img className="service__img" src={target} alt="" />
            <h1 className="service__title">Facebook Advertisement.</h1>
            <p className="service__para">
              It all starts with the perfect ad that draws potential customers
              in.
            </p>
            <a href="#contact">
              <button className="btn service__btn">Take Action</button>
            </a>
          </div>
          <div className="what__service">
            <img className="service__img" src={content} alt="" />
            <h1 className="service__title">Content Creation.</h1>
            <p className="service__para">
              The content you need to deliver the message you want to the
              audience you desire.
            </p>
            <a href="#contact">
              <button className="btn service__btn">Take Action</button>
            </a>
          </div>
          <div className="what__service">
            <img className="service__img" src={funnel} alt="" />
            <h1 className="service__title">Sales Funnels.</h1>
            <p className="service__para">
              Turn cold leads into desired customers with high converting
              landing pages.
            </p>
            <a href="#contact">
              <button className="btn service__btn">Take Action</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default What;
