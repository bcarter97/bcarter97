import React from 'react';
import bulmerLogo from '../images/made-with-bulma-badges/made-with-bulma.png';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer has-text-centered">
      <NavLink exact to="/">
        Home
      </NavLink>{' '}
      <a href="https://github.com/bcarter97">GitHub</a>
    </footer>
  );
}

export { Footer };
