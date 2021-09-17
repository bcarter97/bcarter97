const Icon = ({ icon, className }) => {
  return (
    <span className={`icon is-medium ${className}`}>
      <i className={`${icon} fa-lg navbar-icon`}></i>
    </span>
  );
};

export default Icon;
