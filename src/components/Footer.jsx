import React from 'react';
import bulmerLogo from '../images/made-with-bulma-badges/made-with-bulma.png';
import { NavLink, Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer has-text-centered">
      <div className="buttons ">
        <NavLink exact to="/" className="button is-primary">
          Home
        </NavLink>
        <a href="https://github.com/bcarter97" className="button is-primary">
          <div>GitHub</div>
        </a>
      </div>
    </div>
  );
}

export { Footer };
