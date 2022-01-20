import { FC, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorCondition: Boolean;
};

const Input: FC<InputProps> = ({ id, name = id, errorCondition, ...props }) => (
  <input
    id={id}
    name={name}
    type="text"
    className={`block w-full text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none outline-none ${
      errorCondition && "ring ring-inset ring-red-500"
    }`}
    {...props}
  />
);

export default Input;
