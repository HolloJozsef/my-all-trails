import React from "react";

const TrailDetailsSkeleton: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-8 animate-pulse">
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-gray-300 p-2 rounded-full shadow-md w-10 h-10"></div>
      </div>

      <div className="relative h-96 bg-gray-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between">
            <div>
              <div className="h-6 w-48 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-64 bg-gray-300 rounded"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-6 w-24 bg-gray-300 rounded"></div>
            </div>
          </div>

          <div className="mt-4">
            <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded mt-2"></div>
          </div>

          <div className="mt-6">
            <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded mt-2"></div>
          </div>

          <div className="mt-6">
            <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-48 bg-gray-300 rounded"></div>
          </div>

          <div className="flex justify-end mt-6">
            <div className="h-10 w-24 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailDetailsSkeleton;
