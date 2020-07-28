import React from 'react';

function Footer() {
  return (
    <div className="footer has-text-centered has-background-white is-bold">
      <p>
        Source code licensed under{' '}
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
