import React from 'react';

const DefaultLayout = ({ children }) => {
  return (
    <section className="hero is-medium is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">{children}</div>
        </div>
      </div>
    </section>
  );
};

const CenterLayout = ({ children }) => {
  return (
    <DefaultLayout>
      <div className="column is-half">{children}</div>
    </DefaultLayout>
  );
};

const CenterLayoutSmaller = ({ children }) => {
  return (
    <DefaultLayout>
      <div className="column is-one-third">{children}</div>
    </DefaultLayout>
  );
};

export { CenterLayout, CenterLayoutSmaller };
