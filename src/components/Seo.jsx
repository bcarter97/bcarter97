import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ title }) => {
  return (
    <Helmet defaultTitle="Ben Carter | Home" titleTemplate="Ben Carter | %s">
      <title>{title}</title>
    </Helmet>
  );
};

export { Seo };
