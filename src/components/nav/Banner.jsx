import { NavLink } from "react-router-dom";

import banner from "../../images/banner/bannerSmall.png";
import logo from "../../images/banner/logoSmall.png";

const Banner = () => {
  return (
    <NavLink exact to="/" className="navbar-item">
      <img
        src={banner}
        height="28"
        width="135"
        alt="Site logo"
        className="is-hidden-touch"
      />
      <img
        src={logo}
        height="28"
        width="28"
        alt="Site logo mobile"
        className="is-hidden-desktop"
      />
    </NavLink>
  );
};

export default Banner;
