import React, { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

const ContactForm = () => {
  return (
    <form name="contact" method="post">
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

const SuccessMessage = () => {
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
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSuccess(params.get('success') === 'true');
  }, [location]);
  return (
    <section className="hero about-hero is-medium is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered is-centered">
            <div className="column is-half">
              {success ? <SuccessMessage /> : <ContactForm />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactPage };
