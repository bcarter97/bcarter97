const TextArea = ({
  id,
  value,
  placeholder,
  errorCondition,
  onChange,
  onBlur,
  ...props
}) => (
  <textarea
    id={id}
    name={id}
    placeholder={placeholder}
    type="text"
    className={`
                    "form-textarea block h-32 resize-none w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none outline-none" ${
                      errorCondition && "border-red-500"
                    }`}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    {...props}
  />
);

export default TextArea;
