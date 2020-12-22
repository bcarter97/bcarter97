import profilePic from "../images/about/profile.png";
import profilePicLow from "../images/about/profileLow.png";
import useProgressiveImg from "../util/imageHook";

const ProfilePicture = () => {
  const [src, { blur }] = useProgressiveImg(profilePicLow, profilePic);

  return (
    <div className="image-container">
      <figure className="image">
        <img
          className="image-module"
          src={src}
          alt="Headshot"
          style={{
            filter: blur ? "blur(10px)" : "none",
            transition: blur ? "none" : "filter 0.1s ease-out",
          }}
        />
      </figure>
    </div>
  );
};

export default ProfilePicture;
