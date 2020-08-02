import React, { useState } from 'react';
import CookieConsent from 'react-cookie-consent';

const CookieBar = () => {
  const [cookieInfoVisible, setCookieInfoVisible] = useState(false);

  const closeCookieInfo = () => {
    setCookieInfoVisible(false);
  };

  return (
    <CookieConsent
      disableStyles={true}
      disableButtonStyles={true}
      sameSite="strict"
      containerClasses="notification cookie-module has-text-centered has-background-light"
      buttonClasses="button is-danger is-outlined"
      contentClasses="has-text-black"
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
      <CookieInfo
        cookieInfoVisible={cookieInfoVisible}
        closeCookieInfo={closeCookieInfo}
      />
    </CookieConsent>
  );
};

const CookieInfo = ({ cookieInfoVisible, closeCookieInfo }) => {
  return (
    <div className={`modal ${cookieInfoVisible ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={closeCookieInfo}></div>
      <div className="modal-content">
        <div className="notification has-text-left is-light is-size-4">
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
    </div>
  );
};

export { CookieBar };
