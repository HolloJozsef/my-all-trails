import React, { useEffect, useRef, useState } from "react";
import { addTrail } from "../../../api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface AddTrailModalProps {
  onClose: () => void;
}

const AddTrailModal: React.FC<AddTrailModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rating: 0,
    estimatedTime: "",
    imageUrl: "",
    description: "",
    directions: "",
    lat: 0,
    lon: 0,
    length: "1",
    difficulty: "Easy",
  });
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleRatingChange = (rating: number) => {
    setFormData({ ...formData, rating });
    setErrors({ ...errors, rating: false });
  };
  const queryClient = useQueryClient();

  // Mutation for adding a trail
  const addMutation = useMutation({
    mutationFn: addTrail,
    onSuccess: () => {
      queryClient.invalidateQueries(["trails"]);
      onClose(); 
    },
    onError: (error: Error) => {
      console.error("Error adding trail:", error);
    },
  });
  const handleSubmit = async () => {
    try {
      await addMutation.mutateAsync(formData); // Use the mutateAsync method to handle async submission
      console.log("Trail added successfully");
    } catch (error) {
      console.error("Error adding trail:", error);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 w-[400px] shadow-lg"
      >
        <h2 className="text-lg font-semibold mb-4">Add New Trail</h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Trail Name"
            className={`w-full border p-2 rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full border p-2 rounded"
            value={formData.location}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="estimatedTime"
            placeholder="Estimated Time"
            className="w-full border p-2 rounded"
            value={formData.estimatedTime}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            className="w-full border p-2 rounded"
            value={formData.imageUrl}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="w-full border p-2 rounded"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center space-x-2 pt-4 pl-2">
          <span className="text-gray-700">Rating:</span>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`text-2xl ${
                  star <= formData.rating ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-6 space-x-2">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Add Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTrailModal;
