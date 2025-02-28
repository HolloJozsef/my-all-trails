import React, { useState } from "react";
import { Trail } from "../../../types/types";
import { useNavigate } from "react-router-dom";
import { deleteTrail } from "../../../api/api";
import { TrashIcon } from "@heroicons/react/24/outline";

const NearbyTrailCard: React.FC<{ trail: Trail,  onDelete: (id: string) => void;
}> = ({ trail,onDelete }) => {
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

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click event from navigating
    try {
      await deleteTrail(trail.id);
      onDelete(trail.id)
    } catch (error) {
      console.error("Error deleting trail:", error);
    }
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden w-40 cursor-pointer flex flex-col h-full"
      onClick={handleClick}
    >
      <img
        className="w-[120px] h-[120px] object-cover mx-auto"
        src={imageSrc}
        alt={trail.name}
        onError={handleImageError}
      />
      <div className="p-4 flex-grow">
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
      <div className="sticky bottom-0 bg-white p-2 flex justify-center">
        <button
          className="text-red-500 hover:text-red-700"
          onClick={handleDelete}
          aria-label="Delete Trail"
        >
          <TrashIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default NearbyTrailCard;
