import { NavLink } from "react-router-dom";

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

export default NavIcon;
