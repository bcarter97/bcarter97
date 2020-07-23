import React from 'react';
import {
  SocialButtons,
  AcademicDetails,
  AboutDetails,
  ProfilePicture,
} from '../components/MediaElements';

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

const AboutCard = () => {
  return (
    <Card>
      <CardBody>
        <ProfilePicture />
        <CardTitle text="Ben Carter" />
        <CardContent>
          <AboutDetails />
          <AcademicDetails />
        </CardContent>
      </CardBody>
      <CardFooter>
        <SocialButtons />
      </CardFooter>
    </Card>
  );
};

export { AboutCard };
