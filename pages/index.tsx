import { Column, Layout } from "components";
import { useMessage } from "hooks";
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  const [message, incrementMessage] = useMessage();

  return (
    <Layout>
      <Column>
        <div className="h-64 w-64 mx-auto">
          <Image
            src="https://avatars.githubusercontent.com/u/28694181?v=4"
            alt="Ben Carter"
            className="rounded-xl"
            layout="intrinsic"
            width={256}
            height={256}
            quality={100}
            onClick={incrementMessage}
          />
        </div>
        <p className="text-4xl font-semibold mt-6 mb-4 text-center">
          Hi, I&apos;m Ben.
        </p>
        <p className="text-2xl font-semibold">
          Software Developer at Sky. {message}.
        </p>
      </Column>
    </Layout>
  );
};

export default Home;
