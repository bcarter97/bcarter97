const Label = ({ children, ...props }) => (
  <label
    className="text block tracking-wide text-gray-700 font-bold mb-1"
    {...props}
  >
    {children}
  </label>
);

export default Label;
