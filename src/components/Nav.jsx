import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import banner from "../images/banner.png";

function NavIcons(props) {
  return (
    <>
      <a
        className={`navbar-item has-text-black-bis ${
          props.isMobile ? "is-hidden-desktop" : "is-hidden-mobile"
        }`}
        href="https://github.com/bcarter97"
      >
        <span class="icon">
          <i class="fa fa-github fa-lg" aria-hidden="true" />
        </span>
      </a>
      <a
        className={`navbar-item has-text-info ${
          props.isMobile ? "is-hidden-desktop" : "is-hidden-mobile"
        }`}
        href="https://www.linkedin.com/in/bcarter97/"
      >
        <span class="icon">
          <i class="fa fa-linkedin fa-lg" aria-hidden="true" />
        </span>
      </a>
    </>
  );
}

function Nav() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav
      className="navbar has-shadow is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <NavLink exact to="/" className="navbar-item">
              <img src={banner} height="28" alt="Site logo" />
            </NavLink>
          </div>
          <NavIcons isMobile={true} />
          <div
            role="button"
            className={`navbar-burger burger ${menuVisible ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${menuVisible ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <NavLink exact to="/" className="navbar-item">
              Home
            </NavLink>
            <NavLink to="/codewords" className="navbar-item">
              Codewords
            </NavLink>

            {/* <NavLink to="\documentation" className="navbar-item">
              Documentation
            </NavLink> */}
          </div>

          <div className="navbar-end">
            <NavIcons isMobile={false} />
            {/* <div className="navbar-item">
              <div className="buttons">
                <a href="#signup" className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a href="#login" className="button is-light">
                  Log in
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Nav };
