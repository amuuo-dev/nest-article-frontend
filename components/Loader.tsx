import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600 font-medium">Fetching posts...</p>
    </div>
  );
};

export default Loader;
