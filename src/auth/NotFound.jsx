import React from 'react';
import { CenterLayout } from '../components/Layout';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <CenterLayout>
      <p className="is-size-3 has-text-centered">
        Page not found! Return{' '}
        <Link to="/" className="has-text-weight-semibold social-link home-link">
          Home
        </Link>
      </p>
    </CenterLayout>
  );
};

export { NotFound };
