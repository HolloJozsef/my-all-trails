import React, { useState } from "react";
import { Trail } from "../../../types/types";
import { useNavigate } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/outline";
import Rating from "../../Core/Rating";
import ConfirmationDialog from "./modals/ConfirmationModal";

const FALLBACK_IMAGE_URL = "https://media.istockphoto.com/id/495479514/photo/viso-valley.jpg?s=612x612&w=0&k=20&c=5GsMO7BU7hZZaR0LWAOcbi-d3AVpN57u6Rq0Rse3Wqk=";

const NearbyTrailCard: React.FC<{ trail: Trail; onDelete: (id: string) => void; }> = ({
  trail,
  onDelete,
}) => {
  const [imageSrc, setImageSrc] = useState(trail.imageUrl || FALLBACK_IMAGE_URL);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleImageError = () => {
    if (imageSrc !== FALLBACK_IMAGE_URL) {
      setImageSrc(FALLBACK_IMAGE_URL);
    }
  };

  const handleClick = () => {
    navigate(`/trails/${trail.id}`);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    onDelete(trail.id);
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
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
          <Rating rating={trail.rating} />
          <span className="text-sm text-gray-500">{(Number(trail.rating) || 0).toFixed(1)}</span>
        </div>
        <p className="text-sm text-gray-500">
          Estimated Time: {trail.estimatedTime}
        </p>
      </div>
      <div className="sticky bottom-0 bg-white p-2 flex justify-center">
        <button
          className="text-red-500 hover:text-red-700"
          onClick={handleDeleteClick}
          aria-label="Delete Trail"
        >
          <TrashIcon className="h-6 w-6" />
        </button>
      </div>

      <ConfirmationDialog
        isOpen={showDeleteConfirmation}
        title="Confirm Deletion"
        message={`Are you sure you want to delete "${trail.name}"? This action cannot be undone.`}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default NearbyTrailCard;