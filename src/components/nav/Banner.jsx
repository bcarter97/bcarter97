import { NavLink } from "react-router-dom";

import { bannerSmall, logoSmall } from "../../images";

const Banner = () => {
  return (
    <NavLink exact to="/" className="navbar-item">
      <img
        src={bannerSmall}
        height="28"
        width="135"
        alt="Site logo"
        className="is-hidden-touch"
      />
      <img
        src={logoSmall}
        height="28"
        width="28"
        alt="Site logo mobile"
        className="is-hidden-desktop"
      />
    </NavLink>
  );
};

export default Banner;
