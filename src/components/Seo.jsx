import React from 'react';
import { Helmet } from 'react-helmet';
import pic from '../images/about/profilePicXSmall.jpg';

console.log(pic.toString());
const Seo = ({ title }) => {
  return (
    <Helmet defaultTitle="Ben Carter | Home" titleTemplate="Ben Carter | %s">
      <title>{title}</title>
    </Helmet>
  );
};

const DefaultSeo = () => {
  return (
    <Helmet>
      {/* <!-- HTML Meta Tags --> */}
      <title>Ben Carter</title>
      <meta
        name="description"
        content="Hi, my name is Ben, a software developer based in London."
      />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemprop="name" content="Ben Carter" />
      <meta
        itemprop="description"
        content="Hi, my name is Ben, a software developer based in London."
      />
      <meta itemprop="image" content="%PUBLIC_URL%/profile.png" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://carter.gg" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ben Carter" />
      <meta
        property="og:description"
        content="Hi, my name is Ben, a software developer based in London."
      />
      <meta property="og:image" content="%PUBLIC_URL%/profile.png" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ben Carter" />
      <meta
        name="twitter:description"
        content="Hi, my name is Ben, a software developer based in London."
      />
      <meta name="twitter:image" content="%PUBLIC_URL%/profile.png" />
    </Helmet>
  );
};

export { Seo, DefaultSeo };
