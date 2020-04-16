import React from 'react';
import './App.sass';
import NavBar from './templates/navBar';
import Footer from './templates/footer';

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

function Tiles() {
  return (
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">Vertical...</p>
              <p class="subtitle">Top tile</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">...tiles</p>
              <p class="subtitle">Bottom tile</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Middle tile</p>
              <p class="subtitle">With an image</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" alt="Bulma logo" />
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Wide tile</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">
              Content
        </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
              Content
        </div>
          </div>
        </article>
      </div>
    </div>
  )
}




function App() {
  return (
    <body className="layout-default">
      {NavBar()}
      <section className="section">
        <div className="container">
          {hero()}
          <br />
          {card()}
          <br />
          {Tiles()}
        </div>
      </section>
      {Footer()}
    </body>
  )
}

export default App;