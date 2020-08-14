import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useIdentityContext } from 'react-netlify-identity';

import { history } from '../helpers/history';
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

const NavButton = ({ to, text, color, outlined = false, onClick }) => {
  return (
    <NavLink
      exact
      to={to}
      className={`button ${color} ${outlined ? 'is-outlined' : ''}`}
      onClick={onClick}
    >
      {text}
    </NavLink>
  );
};

const LoginButton = ({ onClick }) => {
  return (
    <NavButton to="/login" text="Login" color="is-white" onClick={onClick} />
  );
};

const SignupButton = ({ onClick }) => {
  return (
    <NavButton
      to="/signup"
      text="Sign up"
      color="is-black"
      onClick={onClick}
      outlined
    />
  );
};

const LogoutButton = ({ onClick }) => {
  return (
    <button className="button is-white" onClick={onClick}>
      Logout
    </button>
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
  const { user, logoutUser } = useIdentityContext();
  const [menuVisible, setMenuVisible] = useState(false);

  const Logout = () => {
    logoutUser();
    history.push('/');
    closeMenu();
  };

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
            {user ? (
              <LogoutButton onClick={Logout} />
            ) : (
              <span className="navbar-items">
                <div className="buttons">
                  <LoginButton onClick={closeMenu} />
                  <SignupButton onClick={closeMenu} />
                </div>
              </span>
            )}
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
