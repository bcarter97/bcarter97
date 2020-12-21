import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav className="navbar has-shadow is-spaced is-fixed-bottom is-hidden-desktop">
      <div className="navbar-brand mobile-nav">
        <NavLink className="navbar-item mobile-nav-item" exact to="/">
          <span className="icon is-large">
            <i className={`fas fa-home fa-lg`}></i>
          </span>
        </NavLink>
        <NavLink className="navbar-item mobile-nav-item" exact to="/contact">
          <span className="icon is-large">
            <i className={`far fa-paper-plane fa-lg`}></i>
          </span>
        </NavLink>
      </div>
    </nav>
  );
};

export default MobileNav;
