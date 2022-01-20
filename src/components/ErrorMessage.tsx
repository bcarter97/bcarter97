const ErrorMessage = ({ error }: { error: string }) => (
  <p className="text-red-500 dark:text-red-500 text-xs italic -mt-2">{error}</p>
);

export default ErrorMessage;
