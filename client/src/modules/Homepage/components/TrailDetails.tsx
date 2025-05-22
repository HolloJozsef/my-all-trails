import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchTrail } from "../../../api/api";
import BackButton from "../../Core/BackButton";

const TrailDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["trail", id],
    queryFn: () => fetchTrail(id!),
    suspense: true,
  });

  const handleSeeOnMap = () => {
    navigate("/map", {
      state: {
        lat: data.lat,
        lng: data.lon,
      },
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-8">
     <BackButton />
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-white text-center">
            {data.name}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between">
            <div>
              <p className="text-xl font-semibold">{data.location}</p>
              <p className="text-sm text-gray-500">
                Difficulty: {data.difficulty} | Length: {data.length}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">
                {"⭐".repeat(Math.floor(data.rating))}
                {"☆".repeat(5 - Math.floor(data.rating))}
              </span>
              <span className="text-sm text-gray-500">{data.rating}</span>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Description</h2>
            <p className="text-sm text-gray-700 mt-2">{data.description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Directions</h2>
            <p className="text-sm text-gray-700 mt-2">{data.directions}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Estimated Time</h2>
            <p className="text-sm text-gray-700 mt-2">{data.estimatedTime}</p>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={handleSeeOnMap}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              See on Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailDetails;
