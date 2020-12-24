import { NavLink } from "react-router-dom";

import banner from "../images/banner/bannerSmall.png";

const Icon = ({ icon }) => {
  return (
    <span className="icon is-medium text-icon">
      <i className={`${icon} fa-lg navbar-icon`}></i>
    </span>
  );
};

const HomeIcon = () => {
  return <Icon icon="fas fa-home" />;
};

const ContactIcon = () => {
  return <Icon icon="far fa-paper-plane" />;
};

const NavIcon = ({ to, icon, end }) => {
  return (
    <NavLink
      exact
      to={to}
      className={`navbar-item is-hidden-desktop ${
        end ? "navbar-item-right" : ""
      }`}
    >
      <span className="icon is-medium">
        <i className={`${icon} fa-lg`}></i>
      </span>
    </NavLink>
  );
};

const Nav = () => {
  return (
    <nav
      id="navbar"
      className="navbar has-shadow is-spaced"
      role="navigation"
      aria-label="main navigation"
      data-test-id="navbar"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink exact to="/" className="navbar-item">
            <img src={banner} height="28" width="135" alt="Site logo" />
          </NavLink>

          <NavIcon to="/" icon="fas fa-home" end />
          <NavIcon to="/contact" icon="far fa-paper-plane" />
        </div>
        <div id="main-navigation" className="navbar-menu">
          <div className="navbar-end">
            <NavLink className="navbar-item navbar-icon" exact to="/">
              <HomeIcon /> <span className="navbar-icon">Home</span>
            </NavLink>
            <NavLink className="navbar-item navbar-icon" exact to="/contact">
              <ContactIcon /> <span className="navbar-icon">Contact</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
