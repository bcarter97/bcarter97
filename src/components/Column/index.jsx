const columns = [
  {
    size: "md",
    start: 2,
    span: 10,
  },
  {
    size: "lg",
    start: 4,
    span: 6,
  },
  {
    size: "xl",
    start: 5,
    span: 4,
  },
];

const Column = ({ children }) => {
  const responsiveCols = columns.reduce(
    (acc, { size, start, span }) =>
      `${acc} ${size}:col-start-${start} ${size}:col-span-${span}`.trim(),
    ""
  );

  return (
    <div className="grid grid-cols-12 p-6 md:py-12 animate-bounce-up">
      <div
        className={`col-start-1 col-span-12 ${responsiveCols} bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg`}
      >
        {children}
      </div>
    </div>
  );
};

export default Column;
