import profilePic from "../images/about/profile.webp";

const ProfilePicture = () => {
  return (
    <div className="image-container">
      <figure className="image">
        <img className="image-module" src={profilePic} alt="Headshot" />
      </figure>
    </div>
  );
};

export default ProfilePicture;
