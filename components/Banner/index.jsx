import Link from "next/link";
import Image from "next/image";
import logoSmall from "public/logoSmall.webp";
import bannerSmall from "public/bannerSmall.webp";

const Banner = () => {
  return (
    <Link href="/" passHref>
      <a className="navbar-item">
        <Image
          src={logoSmall}
          height="28"
          width="28"
          alt="Site logo mobile"
          className="is-hidden-desktop"
        />
        <Image
          src={bannerSmall}
          height="28"
          width="135"
          alt="Site logo"
          className="is-hidden-touch"
        />
      </a>
    </Link>
  );
};

export default Banner;
