import React from "react";
import { Body } from "../components";

function Hero() {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Primary title</h1>
          <h2 className="subtitle">Primary subtitle</h2>
        </div>
      </div>
    </section>
  );
}

function Card() {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">Component</p>
        <a
          href="#more-options"
          className="card-header-icon"
          aria-label="more options"
        >
          <span className="icon">
            <i className="fa fa-address-book" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div className="card-content">
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
}

function Tiles() {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification is-primary">
              <p className="title">Vertical...</p>
              <p className="subtitle">Top tile</p>
            </article>
            <article className="tile is-child notification is-warning">
              <p className="title">...tiles</p>
              <p className="subtitle">Bottom tile</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-info">
              <p className="title">Middle tile</p>
              <p className="subtitle">With an image</p>
              <figure className="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/640x480.png"
                  alt="Bulma logo"
                />
              </figure>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-danger">
            <p className="title">Wide tile</p>
            <p className="subtitle">Aligned with the right tile</p>
            <div className="content">Content</div>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-success">
          <div className="content">
            <p className="title">Tall tile</p>
            <p className="subtitle">With even more content</p>
            <div className="content">Content</div>
          </div>
        </article>
      </div>
    </div>
  );
}

function Home() {
  return Body(
    <>
      <Hero />
      <br />
      <Card />
      <br />
      <Tiles />
    </>
  );
}

export { Home };
