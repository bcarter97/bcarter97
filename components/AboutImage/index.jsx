import Image from "next/image";
import profilePic from "public/profile.png";

const AboutImage = ({ onClick }) => {
  return (
    <div className="image image-container is-256x256 relative">
      <Image
        src={profilePic}
        alt="Ben Carter"
        layout="fill"
        className="about-image"
        onClick={onClick}
        placeholder="blur"
      />
    </div>
  );
};

export default AboutImage;
