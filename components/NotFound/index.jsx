import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const { asPath } = useRouter();

  return (
    <>
      <div className="block">
        <h1 className="title has-text-danger">Error: 404</h1>
        <p className="subtitle">
          We couldn't find the page at <code>{asPath}</code>
        </p>
      </div>
      <div className="block">
        <Link href="/">
          <a className="title has-text-info nav-link">Go home</a>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
