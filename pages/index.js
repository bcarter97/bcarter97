import { Column, Layout } from "components";
import { useMessage } from "hooks";
import Image from "next/image";
import ProfilePic from "public/profile.png";

const Home = () => {
  const [message, incrementMessage] = useMessage();

  return (
    <Layout>
      <Column>
        <div className="h-64 w-64 mx-auto">
          <Image
            src={ProfilePic}
            alt="Ben Carter"
            className="rounded-xl"
            onClick={incrementMessage}
            placeholder="blur"
          />
        </div>
        <p className="text-4xl font-semibold mt-6 mb-4 text-center">
          Hi, I&apos;m Ben.
        </p>
        <p className="text-2xl font-semibold">
          Associate Software Developer at Sky. {message}.
        </p>
      </Column>
    </Layout>
  );
};

export default Home;
