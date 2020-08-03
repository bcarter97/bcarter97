import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

const ContactLayout = ({ children }) => {
  return (
    <section className="hero about-hero is-medium is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">{children}</div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <>
      <div className="column is-half">
        <div className="field">
          <h1 className="title is-size-2">Get in touch.</h1>
          <p className="is-size-3 has-text-left">
            Feel free to get in touch. Or don't. I made this for fun.
          </p>
        </div>
        <div className="field">
          <form name="contact" method="post" action="/contact/success">
            <input type="hidden" name="form-name" value="contact" />
            <div className="columns">
              <div className="column is-half">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input className="input" type="text" name="name" required />
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const SuccessPage = () => {
  return (
    <div className="column is-half">
      <p className="is-size-3 has-text-centered">
        Thanks! I'll get back to you as soon as I can.{' '}
        <NavLink
          exact
          to="/"
          className="has-text-weight-semibold social-link home-link"
        >
          Home
        </NavLink>
      </p>
    </div>
  );
};

const ContactPage = () => {
  return (
    <ContactLayout>
      <Switch>
        <Route exact path="/contact" component={ContactForm} />
        <Route exact path="/contact/success" component={SuccessPage} />
      </Switch>
    </ContactLayout>
  );
};

export { ContactPage };