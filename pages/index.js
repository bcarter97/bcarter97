import AboutImage from "components/AboutImage";
import AboutInfo from "components/AboutInfo";
import AboutSection from "components/AboutSection";
import Layout from "components/Layout";
import Title from "components/Title";
import useMessage from "hooks/useMessage";

const Home = () => {
  const [message, incrementMessage] = useMessage();
  return (
    <Layout title="Home">
      <AboutSection>
        <AboutImage onClick={incrementMessage} />
      </AboutSection>
      <AboutSection>
        <Title text="Hi, I'm Ben." />
      </AboutSection>
      <AboutSection>
        <AboutInfo message={message} />
      </AboutSection>
    </Layout>
  );
};

export default Home;
