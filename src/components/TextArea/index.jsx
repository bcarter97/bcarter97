const TextArea = ({ id, name = id, errorCondition, ...props }) => (
  <textarea
    id={id}
    name={name}
    type="text"
    className={`form-textarea block h-32 resize-none w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none outline-none ${
      errorCondition && "border-red-500"
    }`}
    {...props}
  />
);

export default TextArea;
