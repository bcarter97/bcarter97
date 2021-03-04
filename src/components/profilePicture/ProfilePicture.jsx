import { useProgressiveImg } from "../../hooks";
import { profileHigh, profileLow } from "../../images";

const ProfilePicture = ({ handleClick }) => {
  const [src, { blur }] = useProgressiveImg(profileLow, profileHigh);

  return (
    <div className="image-container about-image">
      <figure className="image">
        <img
          className="image-module"
          src={src}
          alt="Headshot"
          style={{
            filter: blur ? "blur(10px)" : "none",
            transition: blur ? "none" : "filter 0.1s ease-out",
          }}
          onClick={handleClick}
        />
      </figure>
    </div>
  );
};

export default ProfilePicture;
