import { NavLink } from "react-router-dom";

import Banner from "./Banner";
import { ContactIcon, HomeIcon, NavIcon } from "./NavIcons";

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
