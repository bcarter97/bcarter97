const Input = ({ id, name = id, errorCondition, ...props }) => (
  <input
    id={id}
    name={name}
    type="text"
    className={`block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none outline-none ${
      errorCondition && "border-red-500"
    }`}
    {...props}
  />
);

export default Input;
