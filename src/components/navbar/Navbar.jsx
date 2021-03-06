import { NavLink } from "react-router-dom";

import { Banner, Icon, NavIcon } from "..";

const Navbar = () => {
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
            <NavLink className="navbar-item is-desktop" exact to="/">
              <Icon
                className="navbar-content is-navbar-icon"
                icon="fas fa-home"
              />{" "}
              <span className="navbar-content">Home</span>
            </NavLink>
            <NavLink className="navbar-item is-desktop" exact to="/contact">
              <Icon
                className="navbar-content is-navbar-icon"
                icon="far fa-paper-plane"
              />{" "}
              <span className="navbar-content">Contact</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
