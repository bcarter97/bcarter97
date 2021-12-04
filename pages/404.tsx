import { Column, Layout } from "components";
import type { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => (
  <Layout title="Not Found">
    <Column>
      <p className="text-4xl font-semibold mt-6 mb-4 text-center">
        404... that&apos;s an error.
      </p>
      <p className="text-2xl font-semibold">
        This website literally has two pages, so you&apos;re probably here by
        accident.
      </p>
      <p className="text-2xl font-semibold text-right pt-6">
        <span>
          <Link href="/">
            <a className="hover:opacity-60">Home &rarr;</a>
          </Link>
        </span>
      </p>
    </Column>
  </Layout>
);

export default NotFound;
