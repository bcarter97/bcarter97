import React from 'react';

const CardTitle = ({ text }) => {
  return <p className="title has-text-centered">{text}</p>;
};

const Card = ({ children }) => {
  return <div class="card">{children}</div>;
};

const CardBody = ({ children }) => {
  return <div class="card-content">{children}</div>;
};

const CardContent = ({ children }) => {
  return <div class="content">{children}</div>;
};

const CardFooter = ({ children }) => {
  return (
    <div className="card-footer">
      <p className="card-footer-item">{children}</p>
    </div>
  );
};

export { CardTitle, Card, CardBody, CardContent, CardFooter };
