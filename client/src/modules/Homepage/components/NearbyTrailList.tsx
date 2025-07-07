import React from "react";
import NearbyTrailCard from "./NearbyTrailCard";
import { Trail } from "../../../types/types";
import { deleteTrail, fetchAllTrails } from "../../../api/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const NearbyTrailList: React.FC = () => {
  const queryClient = useQueryClient();

  const { data, } = useQuery({
    queryKey: ["trails"],
    queryFn: () => fetchAllTrails(),
    suspense: true,
    refetchOnMount: true,
    staleTime: 0,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTrail,
    onSuccess: (_, deletedId:number) => {
      queryClient.setQueryData<Trail[]>(["trails"], (oldData) => {
        if (!oldData) return [];
        return oldData.filter((trail) => trail.id !== deletedId);
      });
    },
    onError: (error: Error) => {
      console.error("Error deleting trail:", error);
    },
  });
  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };


  return (
    <div className="flex justify-center overflow-x-auto p-4 space-x-6">
      <div className="flex flex-nowrap space-x-6">
        {data.map((data: Trail) => (
          <NearbyTrailCard key={data.id} trail={data} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default NearbyTrailList;
