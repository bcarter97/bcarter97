import { NavLink } from "react-router-dom";

import banner from "../images/banner/bannerSmall.png";
import logo from "../images/banner/logoSmall.png";

const KOFI_ATTRIBS = {
  href: "https://ko-fi.com/L4L4345QX",
  target: "_blank",
  rel: "noopener noreferrer",
};

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

const KofiIcon = () => {
  return <Icon icon="fas fa-coffee" />;
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

const Banner = () => {
  return (
    <NavLink exact to="/" className="navbar-item">
      <img
        src={banner}
        height="28"
        width="135"
        alt="Site logo"
        className="is-hidden-touch"
      />
      <img
        src={logo}
        height="28"
        width="28"
        alt="Site logo mobile"
        className="is-hidden-desktop"
      />
    </NavLink>
  );
};

const KofiItem = () => {
  return (
    <a
      className="navbar-item is-hidden-desktop kofi-item-mobile"
      {...KOFI_ATTRIBS}
    >
      <span className="icon is-medium">
        <i className="fas fa-coffee fa-lg"></i>
      </span>
    </a>
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
          <Banner />
          <KofiItem />
          <NavIcon to="/" icon="fas fa-home" end />
          <NavIcon to="/contact" icon="far fa-paper-plane" />
        </div>
        <div id="main-navigation" className="navbar-menu">
          <div className="navbar-end">
            <a {...KOFI_ATTRIBS} className="navbar-item navbar-icon kofi-item">
              <KofiIcon /> <span className="navbar-icon">Buy me a coffee</span>
            </a>
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
