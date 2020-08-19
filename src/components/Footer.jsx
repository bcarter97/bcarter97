import React from "react";

function Footer() {
  return (
    <div className="footer has-text-centered has-background-white is-bold">
      <p>Something wrong with this page? Unlucky</p>
      <p>
        Source code licensed under{" "}
        <a
          className="social-link footer-link"
          href="https://raw.githubusercontent.com/bcarter97/bcarter97/master/LICENSE"
        >
          MIT
        </a>
      </p>
    </div>
  );
}

export { Footer };
