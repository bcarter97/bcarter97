import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { useAuthContext } from "../auth/Auth";
import { history } from "../helpers/history";
import banner from "../images/bannerSmall.png";
import { LoginButton, LogoutButton, SignupButton } from "./MediaElements";

const NavItem = ({ to, onClick, text, exact = true }) => {
  return (
    <span className="navbar-item">
      <NavLink
        exact={exact}
        to={to}
        className="navbar-module has-text-black has-text-weight-medium"
        activeClassName="active"
        onClick={onClick}
      >
        {text}
      </NavLink>
    </span>
  );
};

const NavBrand = ({ menuVisible, onBurgerClick, onBannerClick }) => {
  return (
    <div className="navbar-brand">
      <NavLink exact to="/" className="navbar-item" onClick={onBannerClick}>
        <img src={banner} height="28" width="135" alt="Site logo" />
      </NavLink>

      <div
        role="button"
        className={`navbar-burger burger ${menuVisible ? "is-active" : ""}`}
        aria-label="menu"
        aria-expanded="false"
        data-target="mainNavigation"
        onClick={onBurgerClick}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
    </div>
  );
};

const Nav = () => {
  const { user, logoutUser } = useAuthContext();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenuVisible = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <nav
      className="navbar is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <NavBrand
          menuVisible={menuVisible}
          onBurgerClick={toggleMenuVisible}
          onBannerClick={closeMenu}
        />

        <div
          id="mainNavigation"
          className={`navbar-menu ${menuVisible ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <NavItem to="/" onClick={closeMenu} text="Home" />
            <NavItem
              to="/contact"
              onClick={closeMenu}
              text="Contact"
              exact={false}
            />
            {user && (
              <NavItem to="/profile" onClick={closeMenu} text="Profile" />
            )}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped is-grouped-multiline">
                {user ? (
                  <LogoutButton
                    text="Log out"
                    onClick={async () => {
                      await logoutUser();
                      history.push("/");
                      closeMenu();
                    }}
                  />
                ) : (
                  <>
                    <LoginButton onClick={closeMenu} />
                    <SignupButton onClick={closeMenu} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
