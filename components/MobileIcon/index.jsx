import Link from "next/link";

const MobileIcon = ({ to, icon, end }) => {
  return (
    <Link href={to}>
      <a
        className={`navbar-item is-hidden-desktop ${
          end ? "navbar-item-right" : ""
        }`}
      >
        <span className="icon is-medium">
          <i className={`${icon} fa-lg`}></i>
        </span>
      </a>
    </Link>
  );
};

export default MobileIcon;
