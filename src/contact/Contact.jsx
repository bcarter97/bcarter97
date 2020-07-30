import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

const ContactLayout = ({ children }) => {
  return (
    <section className="hero about-hero is-medium is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered is-centered">
            <div className="column is-half">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <form
      name="contact" // important: Give your form a name
      method="POST" // important: make sure there is some way the data is transfered like here with an HTML request
      data-netlify="true" // important: enable your form in netlify
      netlify-honeypot="bot-field"
      action="/contact/success"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" name="name" />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="email" name="email" />
        </div>
      </div>
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" name="message"></textarea>
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
  );
};

const SuccessPage = () => {
  return (
    <p className="is-size-3 has-text-centered">
      Thanks! I'll get back to you as soon as I can.{' '}
      <NavLink
        exact
        to="/"
        className="has-text-weight-semibold social-link footer-link"
      >
        Home
      </NavLink>
    </p>
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
