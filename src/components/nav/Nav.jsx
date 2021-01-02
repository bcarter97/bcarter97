import { NavLink } from "react-router-dom";

import Banner from "./Banner";
import { ContactIcon, HomeIcon, KofiIcon, NavIcon } from "./NavIcons";

const KOFI_ATTRIBS = {
  href: "https://ko-fi.com/L4L4345QX",
  target: "_blank",
  rel: "noopener noreferrer",
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
