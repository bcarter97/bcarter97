import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GitHubButton, LinkedInButton } from './MediaElements';
import banner from '../images/banner.png';

const NavItem = ({ to, onClick, text, exact }) => {
  return (
    <span className="navbar-item">
      <NavLink
        exact={exact}
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

const NavBrand = ({ menuVisible, onClick }) => {
  return (
    <div className="navbar-brand">
      <NavLink exact to="/" className="navbar-item">
        <img src={banner} height="28" alt="Site logo" />
      </NavLink>
      <GitHubButton classOverride="is-hidden-desktop" />
      <LinkedInButton classOverride="is-hidden-desktop" />
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
            <NavItem
              to="/"
              onClick={toggleMenuVisible}
              text="Home"
              exact={true}
            />
            <NavItem
              to="/codewords"
              onClick={toggleMenuVisible}
              text="Codewords"
              exact={false}
            />
            <NavItem
              to="/contact"
              onClick={toggleMenuVisible}
              text="Contact"
              exact={false}
            />
          </div>

          <div className="navbar-end">
            <GitHubButton classOverride="is-hidden-touch" />
            <LinkedInButton classOverride="is-hidden-touch" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Nav, NavItem };
