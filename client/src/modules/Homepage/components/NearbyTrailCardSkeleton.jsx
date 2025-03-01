import React from "react";

const NearbyTrailCardSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-40 flex flex-col animate-pulse">
      {/* Image Placeholder */}
      <div className="w-[120px] h-[120px] bg-gray-300 mx-auto"></div>

      <div className="p-4 flex-grow">
        {/* Title Placeholder */}
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>

        {/* Location Placeholder */}
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>

        {/* Rating Placeholder */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
        </div>

        {/* Estimated Time Placeholder */}
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>
    </div>
  );
};

export default NearbyTrailCardSkeleton;
