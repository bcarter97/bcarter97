import NavLink from "components/NavLink";

const MobileIcon = ({ to, icon, end }) => {
  return (
    <NavLink href={to} exact>
      <a
        className={`navbar-item is-hidden-desktop ${
          end ? "navbar-item-right" : ""
        }`}
      >
        <span className="icon is-medium">
          <i className={`${icon} fa-lg`}></i>
        </span>
      </a>
    </NavLink>
  );
};

export default MobileIcon;
