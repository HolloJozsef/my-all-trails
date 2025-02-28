import React, { useState, useEffect } from 'react';
import NearbyTrailCard from './NearbyTrailCard';
import { Trail } from '../../../types/types';

const NearbyTrailList: React.FC = () => {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTrails = async () => {
      try {
        const response = await fetch('http://localhost:8080/trails');
        if (response.ok) {
          const data: Trail[] = await response.json();
          setTrails(data);
        } else {
          console.error('Failed to fetch trails');
        }
      } catch (error) {
        console.error('Error fetching trails:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrails();
  }, []);

  const handleDelete = (id: string) => {
    setTrails((prev) => prev.filter((trail) => trail.id !== id));
  };


  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="text-xl">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center overflow-x-auto p-4 space-x-6">
      <div className="flex flex-nowrap space-x-6"> {/* Keep items in a single row */}
        {trails.map((trail) => (
          <NearbyTrailCard key={trail.id} trail={trail} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default NearbyTrailList;
