import Banner from "components/Banner";
import Icon from "components/Icon";
import MobileIcon from "components/MobileIcon";
import Link from "next/link";

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
          <MobileIcon to="/" icon="fas fa-home" end />
          <MobileIcon to="/contact" icon="far fa-paper-plane" />
        </div>
        <div id="main-navigation" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-end">
              <Link href="/">
                <a className="navbar-item is-desktop">
                  <Icon
                    className="navbar-content is-navbar-icon"
                    icon="fas fa-home"
                  />{" "}
                  <span className="navbar-content">Home</span>
                </a>
              </Link>
              <Link href="/contact">
                <a className="navbar-item is-desktop">
                  <Icon
                    className="navbar-content is-navbar-icon"
                    icon="far fa-paper-plane"
                  />{" "}
                  <span className="navbar-content">Contact</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
