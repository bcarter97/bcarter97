import { FC, TextareaHTMLAttributes } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  errorCondition: boolean;
};

const TextArea: FC<TextAreaProps> = ({
  id,
  name = id,
  errorCondition,
  ...props
}) => (
  <textarea
    id={id}
    name={name}
    className={`form-textarea block h-32 resize-none w-full text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none outline-none ${
      errorCondition && "ring ring-inset ring-red-500"
    }`}
    {...props}
  />
);

export default TextArea;
