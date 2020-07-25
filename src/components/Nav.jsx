import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GitHubLink, LinkedInLink } from './MediaElements';
import banner from '../images/banner.png';

const NavItem = ({ to, onClick, text }) => {
  return (
    <span className="navbar-item">
      <NavLink
        exact
        to={to}
        className="navbar-module has-text-black has-background-white has-text-weight-medium"
        activeClassName="active"
        onClick={onClick}
      >
        {text}
      </NavLink>
    </span>
  );
};

const NavIcons = ({ isMobile }) => {
  return (
    <>
      <a
        className={`navbar-item has-text-black-bis ${
          isMobile ? 'is-hidden-desktop' : 'is-hidden-touch'
        }`}
        href={GitHubLink}
      >
        <span className="icon">
          <i className="fa fa-github fa-lg" aria-hidden="true" />
        </span>
      </a>
      <a
        className={`navbar-item has-text-info ${
          isMobile ? 'is-hidden-desktop' : 'is-hidden-touch'
        }`}
        href={LinkedInLink}
      >
        <span className="icon">
          <i className="fa fa-linkedin fa-lg" aria-hidden="true" />
        </span>
      </a>
    </>
  );
};

const NavBrand = ({ menuVisible, onClick }) => {
  return (
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
        onClick={onClick}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
    </div>
  );
};

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenuVisible = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav
      className="navbar has-shadow is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <NavBrand menuVisible={menuVisible} onClick={toggleMenuVisible} />

        <div
          id="mainNavigation"
          className={`navbar-menu ${menuVisible ? 'is-active' : ''}`}
        >
          <div className="navbar-start">
            <NavItem to="/" onClick={toggleMenuVisible} text="Home" />
            <NavItem
              to="/codewords"
              onClick={toggleMenuVisible}
              text="Codewords"
            />
          </div>

          <div className="navbar-end">
            <NavIcons isMobile={false} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Nav, NavItem };
