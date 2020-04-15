import React from 'react';
import './App.sass';

function hero() {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Primary title
          </h1>
          <h2 className="subtitle">
            Primary subtitle
          </h2>
        </div>
      </div>
    </section>
  )
}

function navBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="" />
        </a>

        <a
          href="#/"
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#Home">
            Home
          </a>

          <a className="navbar-item" href="#Documentation">
            Documentation
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#more" className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item"
                href="#About">
                About
              </a>
              <a className="navbar-item"
                href="#Jobs">
                Jobs
              </a>
              <a className="navbar-item"
                href="#Contact">
                Contact
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item"
                href="#Report">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href="#signup" className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a href="#login" className="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

function card() {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          Component
        </p>
        <a href="#more-options" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fa fa-address-book" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div className="card-content">
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  )
}

function footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
          The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  )
}


function showTiles() {
  return (
    <div>
      {navBar()}
      <section className="section">
        <div className="container">
          {hero()}
          <br />
          {card()}
        </div>
      </section>
      {footer()}
    </div>
  )
}

export default showTiles;