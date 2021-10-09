const Column = ({ children }) => (
  <div className="grid grid-cols-6 p-6 animate-bounce-up">
    <div className="xl:col-start-3 md:col-start-2 col-span-6 xl:col-span-2 md:col-span-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      {children}
    </div>
  </div>
);

export default Column;
