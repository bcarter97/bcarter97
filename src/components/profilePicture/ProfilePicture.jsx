import { useProgressiveImg } from "../../hooks";
import { profileHigh, profileLow } from "../../images";

const ProfilePicture = ({ onClick }) => {
  const [src, { blur }] = useProgressiveImg(profileLow, profileHigh);

  return (
    <figure className="image-container is-medium">
      <img
        className="image"
        src={src}
        alt="Headshot"
        style={{
          filter: blur ? "blur(10px)" : "none",
          transition: blur ? "none" : "filter 0.1s ease-out",
        }}
        onClick={onClick}
      />
    </figure>
  );
};

export default ProfilePicture;
