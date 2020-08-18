import React from "react";

function Footer() {
  return (
    <div className="footer has-text-centered has-background-white is-bold">
      <p>
        Something wrong with this page? Edit on{" "}
        <a
          className="social-link github-link"
          href="https://github.com/bcarter97/bcarter97"
        >
          GitHub
        </a>
        .
      </p>
      <p>
        Source code licensed under{" "}
        <a
          className="social-link footer-link"
          href="https://opensource.org/licenses/mit-license.php"
        >
          MIT
        </a>
      </p>
    </div>
  );
}

export { Footer };
