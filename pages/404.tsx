import { Column, Layout } from "components";
import type { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => (
  <Layout title="Not Found">
    <Column>
      <p className="text-4xl font-semibold mt-6 mb-4 text-center">
        404... that&apos;s an error.
      </p>
      <p className="text-2xl font-semibold mb-12">
        This website literally has two pages, so you&apos;re probably here by
        accident.
      </p>
      <Link href="/">
        <a>
          <p className="text-3xl text-green-500 hover:text-green-800 dark:text-green-400 dark:hover:text-green-100 text-center color-fade">
            &larr; Back to home
          </p>
        </a>
      </Link>
    </Column>
  </Layout>
);

export default NotFound;
