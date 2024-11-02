// Loading.js
export const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-700 bg-opacity-100 z-50">
      <img
        src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif"
        alt="Loading..."
        className="w-16 h-16 rounded-lg shadow-lg"
      />
    </div>
  );
};

