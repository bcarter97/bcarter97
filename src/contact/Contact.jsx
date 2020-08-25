import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import { CenterLayout } from "../components/Layout";
import { Seo } from "../components/Seo";

const ContactForm = () => {
  return (
    <>
      <div className="field">
        <h1 className="title is-size-2">Get in touch.</h1>
      </div>
      <div className="field">
        <form name="contact" method="post" action="/contact/success">
          <input type="hidden" name="form-name" value="contact" />
          <div className="columns">
            <div className="column is-half">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    required
                    placeholder="Leonard"
                  />
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
                    placeholder="lmccoy@enterprise.ufp"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea has-fixed-size"
                name="message"
                required
                placeholder="Damn it Jim, I'm a doctor, not a form field."
              ></textarea>
            </div>
          </div>
          <div className="columns">
            <div className="column is-fullwidth">
              <div className="field">
                <div className="control">
                  <button
                    className="button is-primary is-fullwidth"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

const SuccessPage = () => {
  return (
    <>
      <p className="is-size-3 has-text-centered">
        Thanks! I'll get back to you as soon as I can.
      </p>
      <p className="is-size-3 has-text-centered">
        <Link
          exact
          to="/"
          className="has-text-weight-semibold social-link home-link"
        >
          Home
        </Link>
      </p>
    </>
  );
};

const ContactPage = () => {
  return (
    <>
      <Seo title="Contact" />
      <CenterLayout>
        <Switch>
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/contact/success" component={SuccessPage} />
        </Switch>
      </CenterLayout>
    </>
  );
};

export { ContactPage };
