import {
  AboutInfo,
  AboutSection,
  Layout,
  ProfilePicture,
  SocialButton,
  Title,
} from "../../components";
import { useMessage } from "../../hooks";

const Home = () => {
  const [message, incrementMessage] = useMessage();

  return (
    <Layout title="Home">
      <AboutSection>
        <ProfilePicture onClick={incrementMessage} />
      </AboutSection>

      <AboutSection>
        <Title text="Hi, I'm Ben." />
        <AboutInfo message={message} />
      </AboutSection>

      <AboutSection>
        <SocialButton name="mail" />
        <SocialButton name="linkedin" />
        <SocialButton name="github" />
      </AboutSection>
    </Layout>
  );
};

export default Home;
