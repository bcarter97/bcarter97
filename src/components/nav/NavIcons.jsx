import { NavLink } from "react-router-dom";

const Icon = ({ icon }) => {
  return (
    <span className="icon is-medium text-icon">
      <i className={`${icon} fa-lg navbar-icon`}></i>
    </span>
  );
};

export const NavIcon = ({ to, icon, end }) => {
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

export const HomeIcon = () => {
  return <Icon icon="fas fa-home" />;
};

export const ContactIcon = () => {
  return <Icon icon="far fa-paper-plane" />;
};

export const KofiIcon = () => {
  return <Icon icon="fas fa-coffee" />;
};
