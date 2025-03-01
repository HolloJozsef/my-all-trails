import React, { useState, useEffect } from "react";
import NearbyTrailCard from "./NearbyTrailCard";
import { Trail } from "../../../types/types";
import { fetchTrails } from "../../../api/api";
import NearbyTrailCardSkeleton from "./NearbyTrailCardSkeleton";

const NearbyTrailList: React.FC = () => {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTrails = async () => {
      try {
        const trails = await fetchTrails();
        setTrails(trails);
      } catch (err) {
        setError(String(err));
      } finally {
        setLoading(false);
      }
    };

    getTrails();
  }, []);

  const handleDelete = (id: string) => {
    setTrails((prev) => prev.filter((trail) => trail.id !== id));
  };

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen">
  //       <span className="text-xl">Loading...</span>
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <div className="flex justify-center overflow-x-auto p-4 space-x-6">
        <div className="flex flex-nowrap space-x-6 bg-red-100 rounded-lg p-6">
          <span className="text-xl text-red-500">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center overflow-x-auto p-4 space-x-6">
      <div className="flex flex-nowrap space-x-6">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <NearbyTrailCardSkeleton key={index} />
            ))
          : trails.map((trail) => (
              <NearbyTrailCard
                key={trail.id}
                trail={trail}
                onDelete={handleDelete}
              />
            ))}
      </div>
    </div>
  );
};

export default NearbyTrailList;
