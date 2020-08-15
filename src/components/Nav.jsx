import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { GitHubButton, LinkedInButton, MailButton } from './MediaElements';
import banner from '../images/bannerSmall.png';

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
        <img src={banner} height="28" width="135" alt="Site logo" />
      </NavLink>
      <GitHubButton mobile />
      <LinkedInButton mobile />
      <MailButton mobile />
      <div
        role="button"
        className={`navbar-burger burger ${menuVisible ? 'is-active' : ''}`}
        aria-label="menu"
        aria-expanded="false"
        data-target="mainNavigation"
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

  const closeMenu = () => {
    setMenuVisible(false);
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
            <NavItem to="/" onClick={closeMenu} text="Home" exact={true} />
            <NavItem
              to="/codewords"
              onClick={closeMenu}
              text="Codewords"
              exact={false}
            />
            <NavItem
              to="/contact"
              onClick={closeMenu}
              text="Contact"
              exact={false}
            />
          </div>

          <div className="navbar-end">
            <GitHubButton />
            <LinkedInButton />
            <MailButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
