const Label = ({ children, htmlFor, ...props }) => (
  <label
    className="text block tracking-wide text-gray-700 font-bold mb-1"
    htmlFor={htmlFor}
    {...props}
  >
    {children}
  </label>
);

export default Label;
