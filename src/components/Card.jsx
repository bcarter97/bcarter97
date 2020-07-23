import React from 'react';
import {
  SocialButtons,
  AcademicDetails,
  AboutDetails,
  ProfilePictureLarge,
} from '../components/MediaElements';

const CardTitle = ({ text }) => {
  return <p className="title has-text-centered is-size-1">{text}</p>;
};

const Card = ({ children }) => {
  return <div class="card is-shadowless">{children}</div>;
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
        <ProfilePictureLarge />
        <CardTitle text="Ben Carter" />
        <CardContent>
          <AboutDetails />
        </CardContent>
      </CardBody>
      <CardFooter>
        <SocialButtons />
      </CardFooter>
    </Card>
  );
};

export { AboutCard };
