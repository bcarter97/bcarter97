const Column = ({ children }) => (
  <div className="grid grid-cols-12 p-6 md:py-12 animate-bounce-up">
    <div
      className={`col-start-1 col-span-12 md:col-start-2 md:col-span-10 lg:col-start-4 lg:col-span-6 xl:col-start-5 xl:col-span-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg`}
    >
      {children}
    </div>
  </div>
);

export default Column;
