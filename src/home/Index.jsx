import React from 'react';
import Markdown from 'react-markdown';
import pp from '../images/about/pp.jpg';
import {
  Body,
  MiddleColumn,
  CardTitle,
  Card,
  CardBody,
  CardContent,
  CardFooter,
} from '../components';

const ProfilePicture = () => {
  return (
    <figure class="image container is-128x128">
      <img className="is-rounded" src={pp} alt="Profile" />
    </figure>
  );
};

const AcademicDetails = () => {
  return (
    <Markdown
      source={`---
## Academic

| University of Sussex          |         | Grade |
|-------------------------------|---------|-------|
| Computer Science BSc          | 2016-19 | 2.1   |
| Advanced Computer Science MSc | 2019-20 | 1     |`}
    />
  );
};

const AboutDetails = () => {
  return <p>Hi, my name is Ben, a software developer based in London.</p>;
};

const SocialButtons = () => {
  return (
    <div className="field is-grouped is-spaced">
      <SocialButton
        url="https://github.com/bcarter97"
        faIcon="github"
        color="black"
      />
      <SocialButton
        url="https://www.linkedin.com/in/bcarter97/"
        faIcon="linkedin"
        color="info"
      />
    </div>
  );
};

const SocialButton = ({ url, faIcon, color }) => {
  return (
    <a className={`navbar-item has-text-${color}`} href={url}>
      <span className="icon">
        <i className={`fa fa-${faIcon} fa-lg`} aria-hidden="true" />
      </span>
    </a>
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

function Home() {
  return (
    <Body>
      <MiddleColumn>
        <AboutCard />
      </MiddleColumn>
    </Body>
  );
}

export { Home };
