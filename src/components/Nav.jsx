import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import banner from '../images/banner.png';

function NavIcons({ isMobile }) {
  return (
    <>
      <a
        className={`navbar-item has-text-black-bis ${
          isMobile ? 'is-hidden-desktop' : 'is-hidden-touch'
        }`}
        href="https://github.com/bcarter97"
      >
        <span className="icon">
          <i className="fa fa-github fa-lg" aria-hidden="true" />
        </span>
      </a>
      <a
        className={`navbar-item has-text-info ${
          isMobile ? 'is-hidden-desktop' : 'is-hidden-touch'
        }`}
        href="https://www.linkedin.com/in/bcarter97/"
      >
        <span className="icon">
          <i className="fa fa-linkedin fa-lg" aria-hidden="true" />
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
          <NavLink exact to="/" className="navbar-item">
            <img src={banner} height="28" alt="Site logo" />
          </NavLink>

          <NavIcons isMobile={true} />
          <div
            role="button"
            className={`navbar-burger burger ${menuVisible ? 'is-active' : ''}`}
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
          className={`navbar-menu ${menuVisible ? 'is-active' : ''}`}
        >
          <div className="navbar-start">
            <NavLink
              exact
              to="/"
              className="navbar-item"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              Home
            </NavLink>
            <NavLink
              to="/codewords"
              className="navbar-item"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              Codewords
            </NavLink>

            {/* <NavLink to="\documentation" className="navbar-item">
              Documentation
            </NavLink> */}
          </div>

          <div className="navbar-end">
            <NavIcons isMobile={false} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Nav };
