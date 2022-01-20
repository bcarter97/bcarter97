import { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  disabled,
  ...props
}) => (
  <button
    className={`py-2 px-4 text-gray-50 dark:text-gray-900 font-semibold rounded-lg shadow-md w-full bg-green-500 ${
      disabled
        ? "cursor-not-allowed"
        : "hover:bg-green-600 dark:hover:bg-green-600"
    } dark:bg-green-500 active:bg-green-700 dark:active:bg-green-700 color-fade`}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

export default Button;
