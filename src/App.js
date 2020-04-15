import React, { useState } from 'react';
import './App.sass';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
        </button>
    </div>
  );
}

function hero() {
  return (
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Primary title
          </h1>
          <h2 class="subtitle">
            Primary subtitle
          </h2>
        </div>
      </div>
    </section>
  )
}

function navBar() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
      </a>

          <a class="navbar-item">
            Documentation
      </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
        </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
          </a>
              <a class="navbar-item">
                Jobs
          </a>
              <a class="navbar-item">
                Contact
          </a>
              <hr class="navbar-divider" />
              <a class="navbar-item">
                Report an issue
          </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
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
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Component
    </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Save</a>
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  )
}

function footer() {
  return (
    <footer class="footer">
      <div class="content has-text-centered">
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
      {/* {navBar()} */}
      <section class="section">
        <div class="container">

          {card()}
        </div>
      </section>
      {footer()}
    </div>
  )
}

export default showTiles;