import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  

    function openMenu() {
      document.body.classList += " menu--open";
    }

    function closeMenu() {
      document.body.classList.remove("menu--open");
    }

    return (
    <nav>
      <div className="nav__container">
        <div className="nav__img">
          <img
            src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/572/5667739572_706ea0ad-fe11-4b10-b34b-475d6ad94545.png?cb=1626534019"
            alt=""
          />
        </div>
        <ul className="nav__links">
          <li className="nav__list">
            <a
              href="#about"
              className="nav__link link__hover-effect link__hover-effect--black"
            >
              About Us
            </a>
          </li>
          <li className="nav__list">
            <a
              href="#what"
              className="nav__link link__hover-effect link__hover-effect--black"
            >
              What We Do
            </a>
          </li>
          <li className="nav__list">
            <a
              href="#contact"
              className="nav__link link__hover-effect link__hover-effect--black"
            >
              Contact Us
            </a>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>

        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className="menu__link" onClick={closeMenu}>
                Home
                </a>
            </li>
            <li className="menu__list">
              <a href="#about" className="menu__link" onClick={closeMenu}>
                About Us
                </a>
            </li>
            <li className="menu__list">
              <a href="#contact" className="menu__link" onClick={closeMenu}>
                Contact
                </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
