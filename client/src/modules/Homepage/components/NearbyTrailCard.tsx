import React, { useCallback, useState } from "react";
import { Trail } from "../../../types/types";
import { useNavigate } from "react-router-dom";
import { TrashIcon, HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import Rating from "../../Core/Rating";
import ConfirmationDialog from "./modals/ConfirmationModal";
import { useFavoritesStore } from "../../../store/favoriteStore";
import TrailTypeIcon from "../../Core/TrailTypeIcon";

const FALLBACK_IMAGE_URL = "https://media.istockphoto.com/id/495479514/photo/viso-valley.jpg?s=612x612&w=0&k=20&c=5GsMO7BU7hZZaR0LWAOcbi-d3AVpN57u6Rq0Rse3Wqk=";

const NearbyTrailCard: React.FC<{ trail: Trail; onDelete: (id: number) => void; }> = ({
  trail,
  onDelete,
}) => {
  const [imageSrc, setImageSrc] = useState(trail.imageUrl || FALLBACK_IMAGE_URL);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const navigate = useNavigate();

  const isFavorite = useFavoritesStore(state => state.isFavorite(trail.id));
  const addFavorite = useFavoritesStore(state => state.addFavorite);
  const removeFavorite = useFavoritesStore(state => state.removeFavorite);

  const handleFavoriteClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite(trail.id);
    } else {
      addFavorite(trail);
    }
  }, [isFavorite, addFavorite, removeFavorite, trail]);


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
      <div className="flex items-center  justify-center gap-2 mb-1">
        <TrailTypeIcon type={trail.type} className="h-5 w-5 text-gray-700 flex-shrink-0" />
      </div>
      <div className="sticky bottom-0 bg-white p-2 flex justify-center">
        <button
          className="text-red-500 hover:text-red-700"
          onClick={handleDeleteClick}
          aria-label="Delete Trail"
        >
          <TrashIcon className="h-6 w-6" />
        </button>
        <button
          className={`p-1 rounded-full hover:bg-gray-100 ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? (
            <SolidHeartIcon className="h-6 w-6" />
          ) : (
            <OutlineHeartIcon className="h-6 w-6" />
          )}
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