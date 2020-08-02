import React, { useState } from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieBar = () => {
  const [cookieInfoVisible, setCookieInfoVisible] = useState(false);
  const closeCookieInfo = () => {
    setCookieInfoVisible(false);
  };
  return (
    <>
      <nav id="navbar-bottom" className="navbar hero is-fixed-bottom">
        <CookieConsent
          sameSite="strict"
          disableStyles={true}
          containerClasses="notification has-text-centered"
          buttonClasses="button is-danger is-outlined"
        >
          <p className="has-text-weight-semibold">
            This website uses cookies to enhance the user experience.
          </p>
          <p>
            By continuing to use the site you accept the use of cookies.{' '}
            <span
              className="social-link footer-link"
              onClick={() => setCookieInfoVisible(true)}
            >
              View more info
            </span>
          </p>
          <br />
        </CookieConsent>
      </nav>
      <CookieInfo
        cookieInfoVisible={cookieInfoVisible}
        closeCookieInfo={closeCookieInfo}
      />
    </>
  );
};

const CookieInfo = ({ cookieInfoVisible, closeCookieInfo }) => {
  return (
    <div className={`modal ${cookieInfoVisible ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={closeCookieInfo}></div>
      <div className="modal-content">
        <div className="notification is-light is-size-4">
          <p>
            I use analytics to track generic user engagement (device type, e.g
            mobile or desktop) and other anonymous info. Nothing on this website
            is monetized, analytics are in use as a proof of concept for myself.
          </p>
          <br />
          <p className="has-text-weight-semibold">
            Feel free to use an adblocker.
          </p>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
};

export { CookieBar };
