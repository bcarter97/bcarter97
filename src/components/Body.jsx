import React from 'react';

const Body = ({ children }) => {
  return (
    <>
      <section className="section">
        <div className="container">{children}</div>
      </section>
    </>
  );
};

const MiddleColumn = ({ children }) => {
  return (
    <div class="columns">
      <div class="column is-6 is-offset-3">{children}</div>
    </div>
  );
};

export { Body, MiddleColumn };
