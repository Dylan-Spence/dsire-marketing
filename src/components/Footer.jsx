import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <figure>
          <img
            className="footer__logo--img"
            src="https://pbs.twimg.com/media/FT4OyiKX0AIkCm-?format=png&name=4096x4096"
            alt=""
          />
        </figure>
        <div className="footer__social--list">
          <a
            href="https://www.instagram.com/dsire.marketing/" target="_blank"
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/DSIRE.Marketing" target="_blank"
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            Facebook
          </a>
          <a
            href="#contact"
            className="footer__social--link link__hover-effect link__hover-effect--white"
          >
            Contact
          </a>
        </div>
        <div className="footer__copyright">
          Copyright © 2022 DSIRE Marketing
        </div>
      </div>
    </footer>
  );
}

export default Footer;
