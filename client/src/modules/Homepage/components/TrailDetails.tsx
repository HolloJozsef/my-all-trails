import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeftIcon } from "@heroicons/react/24/outline"; // Importing the left arrow icon from Heroicons
import TrailDetailsSkeleton from "./TrailDetailsSkeleton";

const TrailDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [trail, setTrail] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrailData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/trails/${id}`);
        setTrail(response.data);
      } catch (err) {
        setError("Error fetching trail data.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrailData();
  }, [id]);

  if (loading) {
    return <TrailDetailsSkeleton />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-8">
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => navigate(-1)}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300 cursor-pointer"
        >
          <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${trail.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-white text-center">
            {trail.name}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between">
            <div>
              <p className="text-xl font-semibold">{trail.location}</p>
              <p className="text-sm text-gray-500">
                Difficulty: {trail.difficulty} | Length: {trail.length}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">
                {"⭐".repeat(Math.floor(trail.rating))}
                {"☆".repeat(5 - Math.floor(trail.rating))}
              </span>
              <span className="text-sm text-gray-500">{trail.rating}</span>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Description</h2>
            <p className="text-sm text-gray-700 mt-2">{trail.description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Directions</h2>
            <p className="text-sm text-gray-700 mt-2">{trail.directions}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Estimated Time</h2>
            <p className="text-sm text-gray-700 mt-2">{trail.estimatedTime}</p>
          </div>

          <div className="flex justify-end mt-6">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailDetails;
