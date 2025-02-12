import React, { useState } from "react";
import { Trail } from "../../../types/types";
import { useNavigate } from "react-router-dom";

const NearbyTrailCard: React.FC<{ trail: Trail }> = ({ trail }) => {
  const [imageSrc, setImageSrc] = useState(trail.imageUrl);
  const navigate = useNavigate();

  const handleImageError = () => {
    setImageSrc(
      "https://i.pinimg.com/736x/ae/96/97/ae9697172f855c03b91844ceefdbe46b.jpg"
    );
  };

  const handleClick = () => {
    navigate(`/trails/${trail.id}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden w-40 cursor-pointer"
      onClick={handleClick}
    >
      <img
        className="w-[120px] h-[120px] object-cover mx-auto"
        src={imageSrc}
        alt={trail.name}
        onError={handleImageError}
      />
      <div className="p-4">
        <p className="text-xl ">{trail.name}</p>
        <p className="text-sm text-gray-500">{trail.location}</p>
        <div className="flex items-center space-x-2 my-2">
          <span className="text-yellow-400">
            {"⭐".repeat(Math.floor(trail.rating))}
            {"☆".repeat(5 - Math.floor(trail.rating))}
          </span>
          <span className="text-sm text-gray-500">{trail.rating}</span>
        </div>
        <p className="text-sm text-gray-500">
          Estimated Time: {trail.estimatedTime}
        </p>
      </div>
    </div>
  );
};

export default NearbyTrailCard;
